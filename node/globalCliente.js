require('./global') // Não precisa importar em nenhuma variable, ao carregar ele já fica disponível

console.log(MinhaApp.salutation()) // Não preciso chamar: global.MinhaApp.salutation()

console.log(MinhaApp.name)
MinhaApp.name = 'Eitaa' // Perigoso!! Pode ser alterado um atributo global, a não ser que eu passe um Object.freeze()