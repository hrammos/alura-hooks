import React, { useState, useContext } from 'react'
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core'
import { ValidacoesCadastro } from 'contexts/ValidacoesCadastro'

export const DadosPessoais = ({ aoEnviar }) => {
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [cpf, setCpf] = useState('')
  const [promocoes, setPromocoes] = useState(true)
  const [novidades, setNovidades] = useState(false)
  const [erros, setErros] = useState({ cpf: { valido: true, texto: '' } })

  const validacoes = useContext(ValidacoesCadastro)
  
  const onBlurValidateFields = (event) => {
    const { name, value } = event.target

    const newErrors = {...erros }

    newErrors[name] = validacoes[name](value)
    
    setErros(newErrors)
  }

  const handleSubmit = () => {
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

        onBlur={onBlurValidateFields}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
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
