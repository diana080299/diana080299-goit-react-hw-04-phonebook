import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formHandleSubmit = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const isContactExists = contacts.some(contact => contact.name === name);
    if (isContactExists) {
      alert(`${name} is already in contacts.`);
    } else {
      setContacts([...contacts, newContact]);
    }
  };

  const handleDelete = contactId => {
    return setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const filterContacts = () => {
    const contactsToLower = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(contactsToLower)
    );
  };

  const changeFilter = event => {
    setFilter(event.target.value);
  };

  const visible = filterContacts();
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
      <ContactForm onSubmit={formHandleSubmit} />
      <h2 style={{ marginLeft: '30px' }}>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />

      {contacts.length === 0 ? (
        <p style={{ color: 'red' }}>Your contacts list is empty.</p>
      ) : visible.length === 0 ? (
        <p style={{ color: 'grey' }}>Contacts is undefined with this name.</p>
      ) : (
        <ContactList contacts={visible} onDelete={handleDelete} />
      )}
    </div>
  );
}
