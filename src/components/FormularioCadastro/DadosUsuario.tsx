import React, { useState, useContext } from 'react'
import { TextField, Button } from '@material-ui/core'
import { ValidacoesCadastro } from 'contexts/ValidacoesCadastro'
import { useErrors } from 'hooks/useErrors'

export const DadosUsuario = ({ aoEnviar }) => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  
  const validacoes = useContext(ValidacoesCadastro)
  
  const [errors, validateFields, handleSubmit] = useErrors(validacoes)

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
        onBlur={validateFields}
        error={!errors.senha.valido}
        helperText={errors.senha.texto}
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