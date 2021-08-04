import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'

export const DadosUsuario = ({ aoEnviar, validacoes }) => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erros, setErros] = useState({ senha: { valido: true, texto: '' } })
  
  const onBlurValidateFields = (event) => {
    const { name, value } = event.target

    const newErrors = {...erros }

    newErrors[name] = validacoes[name](value)
    
    setErros(newErrors)
  }

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      aoEnviar({email, senha})
    }}>
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
        Cadastrar
      </Button>
    </form>
  )
}