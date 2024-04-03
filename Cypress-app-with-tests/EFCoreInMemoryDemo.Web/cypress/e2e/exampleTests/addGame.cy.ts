//Dużo copy-pasty, dane do testów nie są rodzielone w osobnym pliku albo chociaz obiekcie, jakakolwiek zmiana w projekcie
//powoduje to ze tester w takim teście musi nanosić dużo poprawek

describe('Game form', () => {
	//it() powinno posiadać warunki testów, nie akcje które mają doprowadzić do stanu aplikacji w której te testy mają się odbywać
	//Jeżeli wynik poniższego it() będzie negatywny to pozostałe zależene od pierwszego wykonają się i na pewno będą negatywne
	//jest to po prostu marnowanie zasobów i czasu.
	//Aby usunąć taką zależnośc należy użyć before() lub beforeEach() które uniemożliwi wykonywanie testu jeżeli coś pójdzie nie tak
	it('fill form inputs', () => {
		//można użyć baseUrl w cypress.config.ts
		cy.visit('https://localhost:44330/')

		//Aby zaznaczyć jakiś element nie używamy id, tagu czy klasy danego obiektu (istnieją pewne wyjątki co do klas)
		//Każdy element do którego chcemy się odnieść powinien posiadać testowy atrybut np. data-testid
		cy.get('a')
			.contains('Create New')
			.click()

		cy.get('#Title')
			.type('game 1')

		cy.get('#PublishingCompany')
			.type('game company 1')

		cy.get('#MinPlayers')
			.type('2')

		cy.get('#MaxPlayers')
			.type('6')

		cy.get('#DifficultyLevel')
			.select(2)

		cy.get('#IsReleased')
			.check()

		cy.get('#ReleaseDate')
			.type('2020-12-20')

		//A co jeżeli button do submitu nie będzie działać? Musimy odzwierciedlać usera w największym stopniu
		//Kliknięcie buttona jest bardziej zbliżone do tego niż submitowanie formularza
		cy.get('form')
			.submit()
	})

	it('check if exist in table', () => {
		cy.visit('https://localhost:44330')

		//Każdy table row powinien posiadać swoje id, najczęściej id elementu którego posiada (a nie index!), testy białoskrzynkowe pozwalają
		//na ingerencje testera w kod aplikacji. Nie powinniśmy odnosić się do ostatniego lub pierwszego elementu, tylko o danym ID. W większej
		//ilości testów tworzy się zbyt wiele zależnośći między innymi testami, więc każdy test powinien posiadać swoje
		//"niezależne" środowkisko w którym może pracować. 
		cy.get('tr')
			.last()
			.within(() => {
				//cy.contains - nie służy do assercji! To jest selektor. do asercji służy .should() a w niektórych przypadkach expect()
				cy.get('td')
					.contains('game 1')

				cy.get('td')
					.contains('game company 1')

				cy.get('td')
					.contains('2')

				cy.get('td')
					.contains('6')

				cy.get('input')
					.should('be.disabled')
			})
	})

	it('check form', () => {
		cy.visit('https://localhost:44330/BoardGame/Edit/7')


		cy.get('#Title')
			.should('have.value', 'game 1')

		cy.get('#PublishingCompany')
			.should('have.value', 'game company 1')

		cy.get('#MinPlayers')
			.should('have.value', '2')

		cy.get('#MaxPlayers')
			.should('have.value', '6')

		//Jezeli sprawdzamy input który posiada w sobie tekst lub liczbe możemy sprawdzać po tekscie
		//W tym przypadku sprawdzamy selektor który przetrzymuje nazwy gier. Wcześniej wyznaczamy jego wartość za pomocą ID
		//danej gry a tutaj sprawdzamy już po nazwie. Przypominam o testach białoskrzynkowych i możliwości nadania testowego ID
		//Problemy mogą występować przy przykładowo tłumaczeniach stron lub zmianach w nazwach na bazie.
		cy.get('#DifficultyLevel')
			.should('have.value', 'Junior')

		cy.get('#IsReleased')
			.should('be.checked')

		cy.get('#ReleaseDate')
			.should('have.value', '2020-12-20')
	})
})


//Testy zrobione na "odwal się", walidacja jest zrobiona na 3 inputy a tutaj jeżeli pojawi się tylko 1 to test przejdzie.
//Nalezy dokładnie określić które inputy posiadają walidacje, jak wywołać je dla poszczególnych inputów oraz prawidłowo sprawdić
describe('Game form validation', () => {
	it('validation', () => {
		cy.visit('https://localhost:44330/')

		cy.get('a')
			.contains('Create New')
			.click()

		cy.get('input')
			.contains('Create')
			.click()

		cy.get('.text-danger')
			.should('be.visible')
	})
})