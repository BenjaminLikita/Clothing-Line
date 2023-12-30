
const fetchImages = async () => {
    try{
        const result = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`, {
            headers : {
            Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_CLOUD_API_KEY + ":" + process.env.CLOUDINARY_CLOUD_API_SECRET).toString('base64')}`
        }})
        const data = await result.json()
        return data.resources
    }
    catch(err){
        console.error("Error Fetching Images:", err)
        return []
    }
}


export default fetchImages;