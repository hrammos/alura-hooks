import React, { useState } from 'react'
import { DadosPessoais } from './DadosPessoais'
import { DadosUsuario } from './DadosUsuario'
import { DadosEntrega } from './DadosEntrega'
import { Typography } from '@material-ui/core'

export const FormularioCadastro = ({ aoEnviar, validarCPF }) => {
  const [etapaAtual, setEtapaAtual] = useState(0)

  const proximaEtapa = () => setEtapaAtual(etapaAtual + 1)

  const formularioAtual = (etapa: number) => {
    switch (etapa) {
      case 0:
        return <DadosUsuario aoEnviar={proximaEtapa} />
      
      case 1:
        return <DadosPessoais 
          aoEnviar={proximaEtapa} 
          validarCPF={validarCPF}
        />
      
      case 2:
        return <DadosEntrega />
    
      default: 
      return <Typography>Erro ao selecionar formulário</Typography>
    }
  }
  
  return formularioAtual(etapaAtual)
}
