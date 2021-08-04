import React, { useState, useEffect } from 'react'
import { DadosPessoais } from './DadosPessoais'
import { DadosUsuario } from './DadosUsuario'
import { DadosEntrega } from './DadosEntrega'
import { Typography, Stepper, Step, StepLabel } from '@material-ui/core'

export const FormularioCadastro = ({ aoEnviar, validacoes }) => {
  const [etapaAtual, setEtapaAtual] = useState(0)
  const [dadosColetados, setDadosColetados] = useState({})

  const proximaEtapa = () => setEtapaAtual(etapaAtual + 1)
  
  const coletarDados = (dados) => {
    setDadosColetados({ ...dadosColetados, ...dados })
    proximaEtapa()
  }

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} validacoes={validacoes} />,
    <DadosPessoais aoEnviar={coletarDados} validacoes={validacoes} />,
    <DadosEntrega aoEnviar={coletarDados} validacoes={validacoes} />,
    <Typography variant="h5">Obrigado pelo cadastro!</Typography>,
  ]

  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados)
    }
  })

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  )
}
