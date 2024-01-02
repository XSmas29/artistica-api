import { FileUpload } from 'graphql-upload/Upload.js'
import { join } from 'path'
import { createWriteStream, existsSync, mkdirSync, writeFileSync } from 'fs'
import { finished } from 'stream/promises'

export const uploadFile = async (file: FileUpload, uploadDir: string, fileName: string): Promise<string> => {
  if (!existsSync(uploadDir)) {
    mkdirSync(join(__dirname, '../../public', uploadDir), { recursive: true })
  }
  const { createReadStream } = await file
  
  const stream = createReadStream()
  const filePath = join(uploadDir, fileName)

  // console.log(filePath)
  // console.log(join(__dirname, `../../public/${filePath}`))
  // writeFileSync(join(__dirname, `../../public/${filePath}`), '')
  // console.log('file created')

  const result = createWriteStream(join(__dirname, `../../public/${filePath}`))
  stream.pipe(result)
  await finished(result)

  //       part.file.pipe(writeStream);

  return filePath
}