describe('Central de Atendimento ao Cliente TAT', () => {
  
  it('verifica o título da aplicação', () => {
    cy.visit('./src/index.html')

    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  })
})
