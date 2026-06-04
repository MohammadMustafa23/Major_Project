const ImageKit = require('imagekit')
const imagekit = new ImageKit({
    publicKey : process.env.PUBLIC_KEY_IMAGEKIT,
    privateKey : process.env.PRIVATE_KEY_IMAGEKIT,
    urlEndpoint : process.env.IMAGEKIT_ENDPOINT,
})

async function UploadFile(buffer,Filename) {
    const result = await imagekit.upload({
       file: buffer.toString("base64"),
       fileName: Filename,
    });
    return result;
}

module.exports = UploadFile;