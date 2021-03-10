const removeExtraSpaces = (str: string): string => {
  return str.replace(/ +/g, ' ')
}

const replaceCommaToDot = (str: string): string => {
  return str.replace(/,/, '.')
}

const stringWithCommaToNumber = (str: string): number => {
  return Number(replaceCommaToDot(str))
}

const getQuantityPriceAndPriceTimesQuantity = (str: string): string[] => {
  return str.match(/\d+,\d{2}/g)
}

const removeDotFromString = (str: string): string => {
  return str.replace(/\./, '')
}

const removePreferentialTickerFromStockName = (str: string): string => {
  return str.replace(/PN ED N1|PN N1/, 'XXX')
}

const treatStockLine = (str: string): string => {
  const withoutDot = removeDotFromString(str)
  return removePreferentialTickerFromStockName(withoutDot)
}

const round = (n: number, decimals: number): number => {
  return Number(n.toFixed(decimals))
}

const checkIfStringIsOneWithStock = (str: string): boolean => {
  return /^1-/.test(str)
}

export {
  removeExtraSpaces,
  round,
  stringWithCommaToNumber,
  replaceCommaToDot,
  treatStockLine,
  getQuantityPriceAndPriceTimesQuantity,
  checkIfStringIsOneWithStock
}
