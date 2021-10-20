import React from 'react'

export default function contactInfos({ contact }) {
    return (
        <div className="contacts__infos">
            <p><b>Age:</b> {contact.age}</p>
            <p><b>Phone:</b> {contact.phone}</p>
            <p><b>Email:</b> {contact.email}</p>
            <p><b>Image:</b> {contact.image}</p>
            <p><b>Site:</b> {contact.site}</p>
            <p><b>Tags:</b> {contact.tags}</p>
        </div>
    )
}




// import React, { Component } from 'react'

// class contactPage extends Component {
//     render() {
//         const {name, lastName, age, phone, email, image, site, tags} = this.props
//         console.log({name})
//         return (
//             <div>
                // <div>
                //     <p>Name: {name}</p>
                //     <p>Last Name: </p>
                //     <p>Age: </p>
                //     <p>Phone: </p>
                //     <p>Email: </p>
                //     <p>Image: </p>
                //     <p>Site:</p>
                //     <p>Tags: </p>
                // </div>
//             </div>
//         )
//     }
// }

// export default contactPage
