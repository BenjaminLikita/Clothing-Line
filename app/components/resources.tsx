import next from "next";
import { CloudinaryResource } from "../gallery/page";

const fetchImages = async (results: CloudinaryResource[], nextCursor: string | null) => {
    "use client"
    try{
        const baseUrl = `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`
        const url = nextCursor ? `${baseUrl}?next_cursor=${nextCursor}` : baseUrl;

        const result = await fetch(url, {
            headers : {
            Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_CLOUD_API_KEY + ":" + process.env.CLOUDINARY_CLOUD_API_SECRET).toString('base64')}`
        }, next: { revalidate: 3600 }})
        
        const data = await result.json()


        data.resources.map((res: CloudinaryResource) => {
            results.push(res)
        })

        if(data.next_cursor){
            await fetchImages(results, data.next_cursor)
        } else{
            return results
        }
        return results
        
    }
    catch(err){
        console.error("Error Fetching Images:", err)
        return []
    }
}


export default fetchImages;