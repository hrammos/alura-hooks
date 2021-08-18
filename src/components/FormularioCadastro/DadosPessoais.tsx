import React, { useState, useContext } from 'react'
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core'
import { ValidacoesCadastro } from 'contexts/ValidacoesCadastro'
import { useErrors } from 'hooks/useErrors'

export const DadosPessoais = ({ aoEnviar }) => {
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [cpf, setCpf] = useState('')
  const [promocoes, setPromocoes] = useState(true)
  const [novidades, setNovidades] = useState(false)
  

  const validacoes = useContext(ValidacoesCadastro)
  
  const [errors, validateFields, handleSubmit] = useErrors(validacoes)

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        if (handleSubmit) {
          aoEnviar({
            nome, 
            sobrenome, 
            cpf, 
            novidades, 
            promocoes,
          })
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value)
        }}
        id="nome"
        name="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value)
        }}
        id="sobrenome"
        name="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value)
        }}

        onBlur={validateFields}
        error={!errors.cpf.valido}
        helperText={errors.cpf.texto}
        id="cpf"
        name="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked)
            }}
            name="promocoes"
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked)
            }}
            name="novidades"
            color="primary"
          />
        }
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
