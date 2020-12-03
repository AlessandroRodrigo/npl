class FormRules {
  static required(value) {
    return !!value || 'Esse campo é obrigatório'
  }
}

export default FormRules
