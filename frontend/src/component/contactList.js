import React, { Component } from 'react'
import axios from "axios"
import { BiDetail, BiEdit, BiTrash } from 'react-icons/bi';
import { Image } from 'cloudinary-react'
import ContactInfos from './contactInfos'
import ContactModify from './contactModify'

class ContactList extends Component {
    state = {
        contacts: [],
        visibleInfo: '',
        visibleModify: ''
    }

    componentDidMount() {
        axios.get(`http://localhost:3006/contacts`)
        .then(res => {
            this.setState({ 
                contacts: res.data 
            });
            console.log(res.data)
        }).catch(err => {
            console.log(err)
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

    showInfos = (id) => {
        this.setState({ 
            visibleInfo: id,
            visibleModify: ''
        });
    }

    showModify = (id) => {
        this.setState({ 
            visibleInfo: '',
            visibleModify: id
        });
    }

    closeModify = (e) => {
        e.preventDefault()
        this.setState({ 
            visibleModify: ''
        });
    }

    closeInfo = (e) => {
        e.preventDefault()
        this.setState({ 
            visibleInfo: '',
        });
    }

    render() {
        const {contacts} = this.state
        console.log(contacts.image)
        
        return (
            <div className="contacts">
                {contacts.map(contact =>
                    <ul key={contact.id} className="contacts__list">
                        <li className="contacts__user">
                            <Image 
                            className="contacts__thumb"
                            alt={`${contact.name} ${contact.lastName}`}
                            cloudName="dvj3eleh5"
                            publicId={contact.image}
                            style={{width: 50}}
                            />
                            <h3>{contact.name} {contact.lastName}</h3> 
                            <div className="contacts__details">
                                <button className="link" type="button" onClick={() => this.showInfos(contact.id)}><BiDetail /> Infos</button>
                                <button className="link" type="button" onClick={() => this.showModify(contact.id)}><BiEdit /> Edit</button>
                                <button className="link" type="button" onClick={(e) => this.handleDelete(contact.id, e)}><BiTrash /> Delete</button>
                            </div>
                        </li>
                        <ContactInfos isBoxVisible={contact.id === this.state.visibleInfo} contact={contact} closeInfo={(e) => this.closeInfo(e)} />
                        <ContactModify isBoxVisible={contact.id === this.state.visibleModify} contact={contact} closeModify={(e) => this.closeModify(e)} />
                    </ul>
                )}

                <Image />
            </div>
        )
    }
}

export default ContactList