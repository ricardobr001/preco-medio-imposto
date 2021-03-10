import { round, stringWithCommaToNumber } from '../helpers/utils'
import { StockQuantityAndPrice } from '../types/stockQuantityAndPrice'

const findQuantity = (
  quantity: string,
  possibleStockPrice: string,
  totalPayed: number,
  firstCall: boolean
): StockQuantityAndPrice => {
  const possibleQuantity = Number(stringWithCommaToNumber(quantity))
  const possibleStockPriceAsNumber = Number(possibleStockPrice)

  if (quantity === '') return

  if (round(possibleQuantity * possibleStockPriceAsNumber, 2) === totalPayed) {
    return { quantity: possibleQuantity, price: possibleStockPriceAsNumber }
  }

  const lastDigit = Number(quantity[quantity.length - 1])
  const newPossibleQuantity = quantity.slice(0, -1)

  if (firstCall) {
    const test = lastDigit + possibleStockPrice

    return findQuantity(newPossibleQuantity, test, totalPayed, false)
  }

  const abc = `${quantity[quantity.length - 1]}${possibleStockPrice.toString()}`

  return findQuantity(newPossibleQuantity, abc, totalPayed, false)
}

export { findQuantity }
