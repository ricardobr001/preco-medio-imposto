import { Stock } from '../types/stock'
import { getTotalBoughtPrice } from './getTotalBoughtPrice'

const getStockBuyObject = (str: string): Stock => {
  const found = str.match(/^1-BOVESPACVISTA|^1-BOVESPACFRACIONARIO/)

  if (found && found.length) {
    const newLine = str.replace(/^1-BOVESPACVISTA|^1-BOVESPACFRACIONARIO/, '')
    const [name] = newLine.match(/\w.*?(?=\s{2})/)
    const stockInfo = getTotalBoughtPrice(newLine)

    return {
      name,
      middlePrice: stockInfo.price,
      ...stockInfo
    }
  }
}

export { getStockBuyObject }
