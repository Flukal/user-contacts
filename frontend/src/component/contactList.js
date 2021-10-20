import React, { Component } from 'react'
import axios from "axios"
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
        // this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
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


    render() {
        const {contacts} = this.state
        
        return (
            <div className="contacts">
                {contacts.map(contact =>
                    <ul key={contact.id} className="contacts__list">
                        <li className="contacts__user">
                            <img src="" alt="image" className="contacts__thumb" />
                            <h3>{contact.name} {contact.lastName}</h3> 
                            <div className="contacts__btn">
                                <button className="btn btn--infos" type="button" onClick={() => this.showInfos(contact.id)}>Infos</button>
                                <button className="btn btn--edit" type="button" onClick={() => this.showModify(contact.id)}>Edit</button>
                                <button className="btn btn--delete" type="button" onClick={(e) => this.handleDelete(contact.id, e)}>Delete</button>
                            </div>
                        </li>
                        <ContactInfos isBoxVisible={contact.id === this.state.visibleInfo} contact={contact} />
                        <ContactModify isBoxVisible={contact.id === this.state.visibleModify} contact={contact} />
                    </ul>
                )}
            </div>
        )
    }
}

export default ContactList