// describe('Constructor rankings test', () => {
//   it('Loads a list of F1 teams when the Constructor button is pressed', () => {
//     cy.visit('https://formula1formulas.netlify.app')

//     cy.contains('Constructor').click()
//   })

//   it('Fetches and returns the correct list', () => {
//     cy.contains('Mercedes')
//     cy.contains('Haas')
//     })
//   })

  // describe('Driver rankings test', () => {
  //   it('Loads a list of F1 teams when the Driver button is pressed', () => {
  //     cy.visit('https://formula1formulas.netlify.app')
  
  //     cy.contains('Driver').click()
  //   })
  
  //   it('Fetches and returns the correct list', () => {
  //     cy.contains('Hamilton')
  //     cy.contains('Nikita')
  //     })
  //   })
  
    describe('Testing the deeper data dive charts', () => {
      it('Loads a list of F1 teams when the Driver button is pressed', () => {
        cy.visit('https://formula1formulas.netlify.app')
    
        cy.contains('dives').click()
      })
    
      it('Shows three dataset options, which the user can click on', () => {
        cy.contains('Pole').click()
        cy.contains('Laptimes').click()
        cy.contains('grids').click()
        })

      it('Returns a visual chart', () => {
        cy.get('canvas').should('be.visible')
        })
      })
    
