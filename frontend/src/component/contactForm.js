import React, { Component } from 'react'
import axios from 'axios'
// import { Image } from 'cloudinary-react'

class ContactForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            lastName: '',
            age: '',
            phone: '',
            email: '',
            image: '',
            // imagePath: '',
            site: '',
            tags: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })  
    }

    handleImage = async (e) => {
        const image = e.target.files[0]
        const data = new FormData()

        data.append('file', image)
        data.append('upload_preset', 'cfktotfs1')

        const res = await axios.post('https://api.cloudinary.com/v1_1/dvj3eleh5/image/upload', data)
        console.log(res.data)

        this.setState({
            image: res.data.public_id
        })

        console.log("this.state: " + this.state.image)
    }

    handleSubmit = (e) => {
        // e.preventDefault()
        axios.post(`http://localhost:3006/contacts`, this.state)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })

        // const imageData = new FormData()
        // console.log('appendState: ' + this.state.image)
        
        // imageData.append('file', this.state.image)
        // imageData.append('upload_preset', 'cfktotfs1')

        // axios.post('https://api.cloudinary.com/v1_1/dvj3eleh5/image/upload', imageData)
        // .then((res) => {
        //     console.log(res)
        // })
        // .catch((e) => {
        //     console.error('Error', e)
        // })
    }
    
    render() {
        const {name, lastName, age, phone, email, image, site, tags} = this.state

        return (
            <form onSubmit={this.handleSubmit} className="form form__create">
                <h1 className="form__title">Create Contact</h1>
                <div className="form__box">
                    <label className="form__label">Image</label>
                    <input
                    className="form__input" 
                    type="file"
                    name="image"
                    defaultValue={image}
                    onChange={this.handleImage} 
                    />
                </div>
                <div className="form__box">
                    <label className="form__label">Name</label>
                    <input
                    className="form__input" 
                    type="text"
                    name="name"
                    defaultValue={name}
                    onChange={this.handleChange} 
                />
                </div>
                <div className="form__box">
                    <label className="form__label">Last Name</label>
                    <input
                    className="form__input" 
                    type="text"
                    name="lastName"
                    defaultValue={lastName}
                    onChange={this.handleChange} 
                />
                </div>
                <div className="form__box">
                    <label className="form__label">Age</label>
                    <input
                    className="form__input" 
                    type="text"
                    name="age"
                    defaultValue={age}
                    onChange={this.handleChange} 
                />
                </div>
                <div className="form__box">
                    <label className="form__label">Phone</label>
                    <input
                    className="form__input" 
                    type="number"
                    name="phone"
                    defaultValue={phone}
                    onChange={this.handleChange} 
                />
                </div>
                <div className="form__box">
                    <label className="form__label">Email</label>
                    <input
                    className="form__input" 
                    type="email"
                    name="email"
                    defaultValue={email}
                    onChange={this.handleChange} 
                />
                </div>
                <div className="form__box">
                    <label className="form__label">Site</label>
                    <input
                    className="form__input" 
                    type="text"
                    name="site"
                    defaultValue={site}
                    onChange={this.handleChange} 
                    />
                </div>
                <div className="form__box">
                    <label className="form__label">Tags</label>
                    <input
                    className="form__input" 
                    type="text"
                    name="tags"
                    defaultValue={tags}
                    onChange={this.handleChange} 
                    />
                </div>
                <div className="form__box">
                    <button className="btn btn--submit" type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default ContactForm