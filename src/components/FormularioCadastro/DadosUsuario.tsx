import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'

export const DadosUsuario = ({ aoEnviar }) => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      aoEnviar({email, senha})
    }}>
      <TextField 
        id="email" 
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
        label="Senha" 
        type="password"
        required
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value)
        }}
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