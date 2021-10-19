import React, { Component } from 'react'
import axios from "axios"
import ContactPage from './contactPage'
import ContactModify from './contactModify'


class ContactList extends Component {
    state = {
        contacts: []
    }

    componentDidMount() {
        axios.get(`http://localhost:3006/contacts`)
        .then(res => {
            this.setState({ 
                contacts: res.data 
            });
            console.log(res.data)
        })
    }

    handleDelete = (id, e) => {
        e.preventDefault()
        axios.delete(`http://localhost:3006/contacts/${id}`)
          .then(res => {
            console.log(res)
    
            const contacts = this.state.contacts.filter(contact => contact.id !== id);  
            this.setState({ contacts });  
          })
      }

    render() {
        const {contacts} = this.state

        return (
            <div>
                {contacts.map(contact =>
                    <ul key={contact.id}>
                        <li >{contact.name} - {contact.lastName} <button type="button" onClick={(e) => this.handleDelete(contact.id, e)}>Delete</button></li>
                        <ContactPage contact={contact} />
                        <ContactModify />
                    </ul>
                )}
            </div>
        )
    }
}

export default ContactList