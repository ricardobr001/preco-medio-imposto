import { readFileSync } from 'fs'
import { resolve } from 'path'
import { Stock } from 'src/types/stock'
import { parsePdfToString } from './parsePdfToString'
import { processString } from './processString'
import { writeStocksToCsv } from './writeStocksToCsv'

const processFiles = async (path: string, files: string[]): Promise<void> => {
  let stocks: Stock[] = []

  await Promise.all(
    files.map(async (file) => {
      const dataBuffer: Buffer = readFileSync(resolve(path, file))
      const text = await parsePdfToString(dataBuffer)

      processString(text, stocks)
    })
  )

  writeStocksToCsv(stocks)
}

export { processFiles }
