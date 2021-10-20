import React, { Component } from 'react'
import axios from 'axios'

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
            site: '',
            tags: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })  
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:3006/contacts`, this.state)
        .then(res => {
            console.log(res)
        })
    }
    
    render() {
        const {name, lastName, age, phone, email, image, site, tags} = this.state

        return (
            <form onSubmit={this.handleSubmit} className="form">
                <div className="form__box">
                    <label className="form__label">Name</label>
                    <input
                    className="form__input" 
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange} 
                />
                </div>
                <div className="form__box">
                    <label className="form__label">Last Name</label>
                    <input
                    className="form__input" 
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={this.handleChange} 
                />
                </div>
                <div className="form__box">
                    <label className="form__label">Age</label>
                    <input
                    className="form__input" 
                    type="text"
                    name="age"
                    value={age}
                    onChange={this.handleChange} 
                />
                </div>
                <div className="form__box">
                    <label className="form__label">Phone</label>
                    <input
                    className="form__input" 
                    type="number"
                    name="phone"
                    value={phone}
                    onChange={this.handleChange} 
                />
                </div>
                <div className="form__box">
                    <label className="form__label">Email</label>
                    <input
                    className="form__input" 
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange} 
                />
                </div>
                <div className="form__box">
                    <label className="form__label">Image</label>
                    <input
                    className="form__input" 
                    type="file"
                    name="image"
                    alt={name}
                    value={image}
                    onChange={this.handleChange} 
                    />
                </div>
                <div className="form__box">
                    <label className="form__label">Site</label>
                    <input
                    className="form__input" 
                    type="text"
                    name="site"
                    value={site}
                    onChange={this.handleChange} 
                    />
                </div>
                <div className="form__box">
                    <label className="form__label">Tags</label>
                    <input
                    className="form__input" 
                    type="text"
                    name="tags"
                    value={tags}
                    onChange={this.handleChange} 
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default ContactForm