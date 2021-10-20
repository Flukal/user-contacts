import React, { Component } from 'react'
import ContactList from './component/contactList'
import ContactForm from './component/contactForm'

class App extends Component {
  
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
