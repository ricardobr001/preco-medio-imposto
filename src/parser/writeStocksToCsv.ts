import { appendFileSync, writeFileSync } from 'fs'
import { NAME_OF_CSV_FILE } from '../config/constants'
import { Stock } from 'src/types/stock'

const writeStocksToCsv = (stocks: Stock[]): void => {
  writeFileSync(NAME_OF_CSV_FILE, 'id,nome,quantidade,preco medio\n')

  stocks.map((stock, index) => {
    const { name, quantity, middlePrice } = stock
    appendFileSync(NAME_OF_CSV_FILE, `${index},${name},${quantity},${middlePrice}\n`)
  })
}

export { writeStocksToCsv }
