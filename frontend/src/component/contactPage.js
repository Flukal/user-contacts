import React from 'react'

export default function contactPage({ contact }) {
    return (
        <div>
            <div>
                <p>Name: {contact.name}</p>
                <p>Last Name: {contact.lastName}</p>
                <p>Age: {contact.age}</p>
                <p>Phone: {contact.phone}</p>
                <p>Email: {contact.email}</p>
                <p>Image: {contact.image}</p>
                <p>Site: {contact.site}</p>
                <p>Tags: {contact.tags}</p>
            </div>
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
