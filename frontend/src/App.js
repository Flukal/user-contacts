import React, { Component } from 'react'
import ContactList from './component/contactList'
import ContactForm from './component/contactForm'

class App extends Component {
  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //     name: '',
  //     lastName: '',
  //     age: '',
  //     phone: '',
  //     email: '',
  //     image: '',
  //     site: '',
  //     tags: ''
  //   }
  // }
  
  render() {
    return (
      <div>
        <nav>User Contacts</nav>
        <main>
          <ContactForm />
          <ContactList />
        </main>
      </div>
    )
  }
}

export default App
