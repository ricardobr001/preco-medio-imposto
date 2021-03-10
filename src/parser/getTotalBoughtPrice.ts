import {
  getQuantityPriceAndPriceTimesQuantity,
  replaceCommaToDot,
  stringWithCommaToNumber,
  treatStockLine
} from '../helpers/utils'
import { StockCompletePrices } from '../types/stockCompletePrices'
import { findQuantity } from './findQuantity'

const getTotalBoughtPrice = (str: string): StockCompletePrices => {
  const treatedStockLine = treatStockLine(str).replace(/\./, '')

  const [quantityAndPricePerUnit, totalPayedOnStr] = getQuantityPriceAndPriceTimesQuantity(treatedStockLine)
  const totalPayed = Number(stringWithCommaToNumber(totalPayedOnStr))
  const numbersAfterComma = replaceCommaToDot(quantityAndPricePerUnit.match(/,\d+/)[0])
  const possibleQuantity = quantityAndPricePerUnit.match(/\d+,/)[0].replace(/,/, '')

  const { quantity, price } = findQuantity(possibleQuantity, numbersAfterComma, totalPayed, true)

  return {
    totalPayed,
    quantity,
    price
  }
}

export { getTotalBoughtPrice }
