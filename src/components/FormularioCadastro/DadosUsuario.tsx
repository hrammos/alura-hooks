import React, { useState, useContext } from 'react'
import { TextField, Button } from '@material-ui/core'
import { ValidacoesCadastro } from 'contexts/ValidacoesCadastro'

export const DadosUsuario = ({ aoEnviar }) => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erros, setErros] = useState({ senha: { valido: true, texto: '' } })

  const validacoes = useContext(ValidacoesCadastro)
  
  const onBlurValidateFields = (event) => {
    const { name, value } = event.target

    const newErrors = {...erros }

    newErrors[name] = validacoes[name](value)
    
    setErros(newErrors)
  }

  const handleSubmit = () => {
    console.log(erros)

    for (let field in erros) {
      if(!erros[field].valido) return false
    }

    return true
  }

  return (
    <form 
      onSubmit={(event) => {
        event.preventDefault()

        if (handleSubmit) {
          aoEnviar({email, senha})
        }
      }}
    >
      <TextField 
        id="email" 
        name="email" 
        label="E-mail" 
        type="email"
        required 
        value={email}
        onChange={(event) => {
          setEmail(event.target.value)
        }}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      
      <TextField 
        id="senha" 
        name="senha" 
        label="Senha" 
        type="password"
        required
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value)
        }}
        onBlur={onBlurValidateFields}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <Button 
        type="submit"
        variant="contained"
        color="primary"
      >
        Próximo
      </Button>
    </form>
  )
}