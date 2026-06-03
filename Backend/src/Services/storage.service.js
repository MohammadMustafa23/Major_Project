const ImageKit = require('')
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

export default UploadFile;