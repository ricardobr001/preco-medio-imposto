const BEGIN_OF_INFO =
  'QNegociaçãoC/VTipo mercadoPrazoEspecificação do títuloObs. (*)QuantidadePreço / AjusteValor Operação / AjusteD/C'
const END_OF_INFO = 'XP INVESTIMENTOS CCTVM S/A'
const STRINGS_THAT_SHOULD_BE_EXCLUDED = ['NOTA DE NEGOCIAÇÃO', 'Nr. nota', 'Folha', 'Data pregão']
const NAME_OF_CSV_FILE = 'preco-medio.csv'

export { BEGIN_OF_INFO, END_OF_INFO, STRINGS_THAT_SHOULD_BE_EXCLUDED, NAME_OF_CSV_FILE }
