// import { processFiles } from '@parser/processFiles'

import { readdirSync } from 'fs'
import { resolve } from 'path'
import { processFiles } from './parser/processFiles'

try {
  const path = resolve(__dirname, '..', 'files')
  let files: string[] = readdirSync(path)

  processFiles(path, files)
} catch (err) {
  if (err.message.includes('no such file or directory')) {
    console.log('ERROR')
    console.log('Try creating folder with name "files" and add the files inside it')
  }
}
