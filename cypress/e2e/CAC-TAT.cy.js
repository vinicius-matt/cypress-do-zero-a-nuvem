describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  //caso de teste
  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  })

  it.only('Preenche os campos obrigatórios', () =>{
    cy.get('#firstName').type('Matheus')
    cy.get('#lastName').type('Miranda')
    cy.get('#email').type('matheusvini754@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()

    //verificações
    cy.get('.success').should('be.visible')
  })
})
