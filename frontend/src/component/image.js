// import React, { useState } from 'react'
// import axios from 'axios'
// import { Image } from 'cloudinary-react'

// const CloudImage = () => {

//     const [imageSelected, setImageSelected ] = useState("");
//     // const [ url, setUrl ] = useState("");

//     const uploadImage = () => {
//         console.log()
//         const formData = new FormData()

//         formData.append("file", imageSelected)
//         formData.append("upload_preset", "cfktotfs1")

//         axios.post('https://api.cloudinary.com/v1_1/dvj3eleh5/image/upload', formData)
//         .then((res) => {
//             console.log(res)
//         })

//     //     data.append("file", image)
//     //     data.append("upload_preset", "test")
//     //     data.append("cloud_name","contactUser")
//     //     fetch("https://api.cloudinary.com/v1_1/dvj3eleh5/image/upload",{
//     //     method:"post",
//     //     body: data
//     // })
//     // .then(resp => resp.json())
//     // .then(data => {
//     //     setUrl(data.url)
//     // })
//     // .catch(err => console.log(err))
//     }

//     return (
//         <div>
//             <div>
//                 <div>
//                     <input type="file" onChange={(e) => setImageSelected(e.target.files[0])}></input>
//                     <button onClick={uploadImage}>Upload</button>
//                     </div>
//                     <div>
//                     <h1>Uploaded image will be displayed here</h1>
//                     <Image 
//                     cloudName="dvj3eleh5"
//                     publicId="https://res.cloudinary.com/dvj3eleh5/image/upload/v1635332280/fjzkgrg9ptxfzzvgbsfw.png"
//                     style={{width: 300}}
//                     />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CloudImage 