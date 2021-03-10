import { BEGIN_OF_INFO, END_OF_INFO, STRINGS_THAT_SHOULD_BE_EXCLUDED } from '../config/constants'
import { checkIfStringIsOneWithStock } from '../helpers/utils'
import { Stock } from '../types/stock'
import { addOrInsertStockInArray } from './addOrInsertStockInArray'

const processString = (content: string, stocksArray: Stock[]): void => {
  let parsingContent = false

  content.split('\n').map((line: string) => {
    if (line === END_OF_INFO) {
      parsingContent = false
    }

    if (parsingContent) {
      const ignoreThisLine = STRINGS_THAT_SHOULD_BE_EXCLUDED.filter((str) => line === str)

      if (!ignoreThisLine.length) {
        if (checkIfStringIsOneWithStock(line)) {
          addOrInsertStockInArray(line, stocksArray)
        }
      }
    }

    if (line === BEGIN_OF_INFO) {
      parsingContent = true
    }
  })
}

export { processString }
