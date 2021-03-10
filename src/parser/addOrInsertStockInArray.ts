import { Stock } from '../types/stock'
import { round } from '../helpers/utils'
import { getStockBuyObject } from './getStockBuyObject'

const addOrInsertStockInArray = (line: string, stocksArray: Stock[]): Stock[] => {
  const currentStock = getStockBuyObject(line)

  if (!currentStock) {
    return
  }

  const indexFounded = stocksArray.findIndex((obj) => obj.name === currentStock.name)

  if (indexFounded === -1) {
    currentStock.middlePrice = currentStock.price
    stocksArray.push(currentStock)
    return
  }

  const { middlePrice: oldMiddlePrice, quantity: oldQuantity } = stocksArray[indexFounded]

  const { price: currentPrice, quantity: currentQuantity } = currentStock
  const newQuantity = oldQuantity + currentQuantity
  const newMiddlePrice = (oldMiddlePrice * oldQuantity + currentPrice * currentQuantity) / newQuantity

  stocksArray[indexFounded].middlePrice = round(newMiddlePrice, 2)
  stocksArray[indexFounded].quantity = newQuantity
}

export { addOrInsertStockInArray }
