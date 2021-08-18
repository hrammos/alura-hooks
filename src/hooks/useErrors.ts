import React, { useState } from 'react'

const handleValidations = (validations) => {
  const initalState = {}

  for (let field in validations) {
    initalState[field] = { valido: true, texto: '' }
  }

  return initalState
}

export const useErrors = (validations) => {
  const initialState = handleValidations(validations)

  const [errors, setErrors] = useState(initialState)

  const validateFields: any = (event) => {
    const { name, value } = event.target

    const newErrors = {...errors }

    newErrors[name] = validations[name](value)
    
    setErrors(newErrors)
  }

  const handleSubmit = () => {
    for (let field in errors) {
      if(!errors[field].valido) return false
    }

    return true
  }

  return [
    errors, 
    validateFields,
    handleSubmit,
  ]
}