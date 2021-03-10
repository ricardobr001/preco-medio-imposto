import PdfParse from 'pdf-parse'
import * as pdf from 'pdf-parse'

const parsePdfToString = async (dataBuffer: Buffer): Promise<string> => {
  const data: PdfParse.Result = await pdf(dataBuffer)

  return data.text
}

export { parsePdfToString }
