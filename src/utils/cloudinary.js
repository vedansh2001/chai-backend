import { v2 as cloudinary} from "cloudinary";
import fs from "fs"

cloudinary.config({ 
    cloud_name: CLOUDINARY_CLOUD_NAME, 
    api_key: CLODINARY_API_KEY, 
    api_secret: CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        //upload file on clodinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        //file has been uploaded successfully
        console.log("file is uploaded on clodinary", 
            response.url
        );
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath)  //since localFilePath is temperary present on the server, so if there's
        //any error during uplaod then the file should be removed from the server      
        return null;
    }
}

export {uploadOnCloudinary}