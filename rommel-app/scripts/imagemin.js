const imagemin = require('imagemin')
const imageminWebp = require('imagemin-webp');

/*
imagemin(input, options?)
Returns Promise<object[]> in the format {data: Buffer, sourcePath: string, destinationPath: string}.
*/

(async () => {
  await imagemin(['./public/images/*.{jpg,png}'], {
    destination: './public/images',
    plugins: [
      imageminWebp({ quality: 50 })
    ]
  }).then(files => {
    if (Array.isArray(files) && files.length) {
      console.log('Images optimised.')
    } else {
      console.log('No files found for conversion.')
    }
  }).catch(err => {
    console.log(err)
  })
})()
