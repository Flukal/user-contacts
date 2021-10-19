import React, { Component } from 'react'
import axios from 'axios'

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
        axios.put(`http://localhost:3006/contacts/`, this.state)
        .then(res => {
            console.log(res)
        })
    }
    
    render() {
        const {name, lastName, age, phone, email, image, site, tags} = this.state
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name </label>
                        <input 
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange} 
                        />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input 
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={this.handleChange} 
                        />
                    </div>
                    <div>
                        <label>Age</label>
                        <input 
                        type="text"
                        name="age"
                        value={age}
                        onChange={this.handleChange} 
                        />
                    </div>
                    <div>
                        <label>Phone</label>
                        <input 
                        type="number"
                        name="phone"
                        value={phone}
                        onChange={this.handleChange} 
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input 
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange} 
                        />
                    </div>
                    <div>
                        <label>Image</label>
                        <input 
                        type="file"
                        name="image"
                        alt={name}
                        value={image}
                        onChange={this.handleChange} 
                        />
                    </div>
                    <div>
                        <label>Site</label>
                        <input 
                        type="text"
                        name="site"
                        value={site}
                        onChange={this.handleChange} 
                        />
                    </div>
                    <div>
                        <label>Tags</label>
                        <input 
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
            </div>
        )
    }
}

export default ContactModify