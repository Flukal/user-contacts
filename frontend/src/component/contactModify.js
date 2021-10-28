import React, { Component } from 'react'
import axios from 'axios'
import { BiPlus } from 'react-icons/bi';

class ContactModify extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: this.props.contact.name,
            lastName: this.props.contact.lastName,
            age: this.props.contact.age,
            phone: this.props.contact.phone,
            email: this.props.contact.email,
            image: '',
            site: this.props.contact.site,
            tags: this.props.contact.tags
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
    
    handleSubmit = (id, e) => {
        e.preventDefault()

        axios.put(`http://localhost:3006/contacts/${id}`, this.state)
        .then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })

        console.log(this.state.contacts)
    }
    
    render() {
        const {name, lastName, age, phone, email, image, site, tags} = this.state
        // const contactPlaceholder = this.props.contact
        const propsId = this.props.contact.id

        return (
            <form onSubmit={(e) => {this.handleSubmit(propsId, e)}} className={`form ${this.props.isBoxVisible ? "form--show" : ""}`}>
                <button className="btn btn__close" onClick={(e) => {this.props.closeModify(e)}}><BiPlus /></button>
                <div className="form__box">
                    <label>Change image</label>
                    <input 
                    className="form__label"
                    type="file"
                    name="image"
                    alt={`${name} ${lastName}`}
                    defaultValue={image}
                    onChange={this.handleImage} 
                    />
                </div>
                <div className="form__box">
                    <label>Name </label>
                    <input 
                    className="form__label"
                    type="text"
                    name="name"
                    defaultValue={name}
                    onChange={this.handleChange} 
                    />
                </div>
                <div className="form__box">
                    <label>Last Name</label>
                    <input 
                    className="form__label"
                    type="text"
                    name="lastName"
                    defaultValue={lastName}
                    onChange={this.handleChange} 
                    />
                </div>
                <div className="form__box">
                    <label>Age</label>
                    <input 
                    className="form__label"
                    type="text"
                    name="age"
                    defaultValue={age}
                    onChange={this.handleChange} 
                    />
                </div>
                <div className="form__box">
                    <label>Phone</label>
                    <input 
                    className="form__label"
                    type="number"
                    name="phone"
                    defaultValue={phone}
                    onChange={this.handleChange} 
                    />
                </div>
                <div className="form__box">
                    <label>Email</label>
                    <input 
                    className="form__label"
                    type="email"
                    name="email"
                    defaultValue={email}
                    onChange={this.handleChange} 
                    />
                </div>
                <div className="form__box">
                    <label>Site</label>
                    <input 
                    className="form__label"
                    type="text"
                    name="site"
                    defaultValue={site}
                    onChange={this.handleChange} 
                    />
                </div>
                <div className="form__box">
                    <label>Tags</label>
                    <input 
                    className="form__label"
                    type="text"
                    name="tags"
                    defaultValue={tags}
                    onChange={this.handleChange} 
                    />
                </div>
                <div className="form__box">
                    <button className="btn btn__submit" type="submit">Save</button>
                </div>
            </form>
        )
    }
}

export default ContactModify