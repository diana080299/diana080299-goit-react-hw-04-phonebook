import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts) || [];
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    } else {
      localStorage.removeItem('contacts');
    }
  }

  componentDidUpdate(prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  formHandleSubmit = (name, number) => {
    const { contacts } = this.state;

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const isContactExists = contacts.some(contact => contact.name === name);
    if (isContactExists) {
      alert(`${name} is already in contacts.`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  handleDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterContacts = () => {
    const contactsToLower = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact => {
      const contactName = contact.name.toLowerCase();
      return contactName.includes(contactsToLower);
    });
  };

  render() {
    const { filter } = this.state;
    const visible = this.filterContacts();
    return (
      <div
        style={{
          display: 'flex',
          gap: '40px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          fontSize: 30,
          color: '#010101',
          marginLeft: '20px',
        }}
      >
        <h1 style={{ marginLeft: '30px' }}>Phonebook</h1>
        <ContactForm onSubmit={this.formHandleSubmit} />
        <h2 style={{ marginLeft: '30px' }}>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        {this.state.contacts.length === 0 ? (
          <p style={{ color: 'red' }}>Your contacts list is empty.</p>
        ) : (
          <ContactList contacts={visible} onDelete={this.handleDelete} />
        )}
      </div>
    );
  }
}
