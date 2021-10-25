import React, { Component } from 'react'
import axios from 'axios'
import { BiPlus } from 'react-icons/bi';

class ContactModify extends Component {
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
            tags: '',
            id: ''
        }

    }
    
    handleSubmit = (id, e) => {
        e.preventDefault()
        axios.put(`http://localhost:3006/contacts/${id}`, this.state)
        .then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
    
    render() {
        const {name, lastName, age, phone, email, image, site, tags, id} = this.state
        const contactPlaceholder = this.props.contact

        return (
            <form onSubmit={(id) => {this.handleSubmit(id)}} className={`form ${this.props.isBoxVisible ? "form--show" : ""}`}>
                <button className="link link__close" onClick={(e) => {this.props.closeModify(e)}}><BiPlus /></button>
                <div className="form__box">
                    <label>Name</label>
                    <input 
                    className="form__label"
                    type="text"
                    name="name"
                    placeholder={contactPlaceholder.name}
                    defaultValue={name}
                    />
                </div>
                <div className="form__box">
                    <label>Last Name</label>
                    <input 
                    className="form__label"
                    type="text"
                    name="lastName"
                    placeholder={contactPlaceholder.lastName}
                    defaultValue={lastName}
                    />
                </div>
                <div className="form__box">
                    <label>Age</label>
                    <input 
                    className="form__label"
                    type="text"
                    name="age"
                    placeholder={contactPlaceholder.age}
                    defaultValue={age}
                    />
                </div>
                <div className="form__box">
                    <label>Phone</label>
                    <input 
                    className="form__label"
                    type="number"
                    name="phone"
                    placeholder={contactPlaceholder.phone}
                    defaultValue={phone}
                    />
                </div>
                <div className="form__box">
                    <label>Email</label>
                    <input 
                    className="form__label"
                    type="email"
                    name="email"
                    placeholder={contactPlaceholder.email}
                    defaultValue={email}
                    />
                </div>
                <div className="form__box">
                    <label>Image</label>
                    <input 
                    className="form__label"
                    type="file"
                    name="image"
                    alt={`${name} ${lastName}`}
                    defaultValue={image}
                    />
                </div>
                <div className="form__box">
                    <label>Site</label>
                    <input 
                    className="form__label"
                    type="text"
                    name="site"
                    placeholder={contactPlaceholder.site}
                    defaultValue={site}
                    />
                </div>
                <div className="form__box">
                    <label>Tags</label>
                    <input 
                    className="form__label"
                    type="text"
                    name="tags"
                    placeholder={contactPlaceholder.tags}
                    defaultValue={tags}
                    />
                </div>
                <div className="form__box">
                    <button className="btn" type="submit">Save</button>
                </div>
            </form>
        )
    }
}

export default ContactModify