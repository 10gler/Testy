using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using EFCoreInMemoryDemo.Web.DataContext;
using EFCoreInMemoryDemo.Web.Models;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
using QRCoder;

namespace EFCoreInMemoryDemo.Web.Controllers
{
    public class PlayerController : Controller
    {
        private BoardGamesDBContext _context;


        public PlayerController(BoardGamesDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Index()
        {
            var players = _context.Player.ToList();
            return View(players);
        }

        [HttpGet]
        public IActionResult Add()
        {
            var games = _context.BoardGames.ToList();
            ViewBag.Games = games;

            return View();
        }

        [HttpPost]
        public IActionResult Add(PlayerModel player)
        {
            //Determine the next ID
            var newID = _context.Player.Select(x => x.ID).Max() + 1;
            player.ID = newID;

            _context.Player.Add(player);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }

        [HttpPost]
        public IActionResult Delete(int id)
        {
            _context.Player.Remove(_context.Player.Find(id));
            _context.SaveChanges();

            return RedirectToAction("Index");
        }

        [HttpGet]
        public IActionResult Edit(int id)
        {
            var player = _context.Player.Find(id);

            var games = _context.BoardGames.ToList();
            ViewBag.Games = games;

            var displayUrl = UriHelper.GetDisplayUrl(Request);
            var urlBuilder =
            new UriBuilder(displayUrl)
            {
                Query = null,
                Fragment = null
            };
            string url = urlBuilder.ToString();

            QRCodeGenerator qrGenerator = new QRCodeGenerator();
            QRCodeData qrCodeData = qrGenerator.CreateQrCode("The text which should be encoded.", QRCodeGenerator.ECCLevel.Q);
            PngByteQRCode qrCode = new PngByteQRCode(qrCodeData);
            byte[] BitmapArray = qrCode.GetGraphic(60);
            string QrUri = string.Format("data:image/png;base64,{0}", Convert.ToBase64String(BitmapArray));
            ViewBag.QrCodeUri = QrUri;


            return View(player);
        }

        [HttpPost]
        public IActionResult Edit(PlayerModel player)
        {
            _context.Player.Update(player);
            _context.SaveChanges();

            return RedirectToAction("Index");
        }

        [HttpGet]
        public IActionResult CreateQRCode(PlayerModel qRCode)
        {
            return View();
        }


    }

    public static class BitmapExtension
    {
        public static byte[] BitmapToByteArray(this Bitmap bitmap)
        {
            using (MemoryStream ms = new MemoryStream())
            {
                bitmap.Save(ms, ImageFormat.Png);
                return ms.ToArray();
            }
        }

    }
}