import React, { createContext } from 'react'


const emptyValidation = (dados) => {
  console.log(dados)

  return {
    valido: true,
    texto: ''
  }
}

export const ValidacoesCadastro = createContext(
  { cpf: emptyValidation, senha: emptyValidation }
)