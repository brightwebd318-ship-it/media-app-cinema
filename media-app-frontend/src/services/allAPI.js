import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";


// 1 st requeist-- upload a vedio

export const uploadvideo =async(reqBody)=>{
    // make post http request to 'http://localhost:4000/videos' to add videos in json file return response to add componant

    return await commonAPI("post",`${serverURL}/videos`,reqBody)
}


// get all videos from json server

export const getAllVideos = async()=>{
    // make post http request to 'http://localhost:4000/videos' to add videos in json file return response to view componant

    return await commonAPI("get",`${serverURL}/videos`,"")
}

// get a particular video from json server

export const getAVideo=async(id)=>{
    // make post http request to 'http://localhost:4000/videos/id' to add videos in json file return response to videocard componant
    

    return await commonAPI("get",`${serverURL}/videos/${id}`,"")

}

// to delete a particular video

export const deleteAVideo=async(id)=>{

    // make post http request to 'http://localhost:4000/videos/id' to add videos in json file return response to view componant

    return await commonAPI("delete",`${serverURL}/videos/${id}`,{})
}


// store watching json server 

export const addToWatchhistory=async(videoDetails)=>{
   // make post http request to 'http://localhost:400/watch-history' to add video watch information

   return await commonAPI("post",`${serverURL}/watch-history`,videoDetails)
}


// getting the history of the video

export const getWatchhistory=async()=>{
    // make post http request to 'http://localhost:4000/watch-history' to add videos in json file return response to history componant

    return await commonAPI("get",`${serverURL}/watch-history`,"")
}


export const deletewatchhistory=async(id)=>{

    // make post http request to 'http://localhost:4000/watch-history/id' to add videos in json file return response to view componant

    return await commonAPI("delete",`${serverURL}/watch-history/${id}`,{})
}



// add category for category

export const addCategory=async(reqBody)=>{
    // make post http request to 'http://localhost:4000/category' to add videos in json file return response to catogory componant

    return await commonAPI("post",`${serverURL}/category`,reqBody)
}

// get the categories

export const getCategories =async()=>{
// make post http request to 'http://localhost:4000/category' to add videos in json file return response to category componant
   return await commonAPI("get",`${serverURL}/category`,"")
}

// delete the catogory by id

export const deleteCategory= async(id)=>{

    return await commonAPI("delete",`${serverURL}/category/${id}`,{})
}


// update api call

export const updateCategory= async(id,body)=>{

    return await commonAPI("put",`${serverURL}/category/${id}`,body)
}