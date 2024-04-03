import { BrowserMultiFormatReader } from '@zxing/browser';

describe('Read QR Code', () => {
	before(function() {
		cy.visit('/Player/Edit/3')
	})

    it('can read qrcode', () => {
        cy.getByTestId('qrcode')
          .then($el => {
            const img = $el[0];
            const image = new Image();
            image.width = img.width;
            image.height = img.height;
            image.src = img.src;
            image.crossOrigin = 'Anonymous';
            return image;
          })
          .then(image => {
            const reader = new BrowserMultiFormatReader();
            return reader.decodeFromImageElement(image[0])
          })
          .then(result => {
            expect(result.getText()).to.equal('https://localhost:44330/Player/Edit/3');
          });
      });
})