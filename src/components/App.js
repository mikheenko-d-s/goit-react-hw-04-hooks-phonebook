import React, { useState } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

import shortid from 'shortid';

import './App.module.scss';

export default function App() {
  // const [contacts, setContacts] = useState(() => JSON.parse(window.localStorage.getItem('contacts')) ?? []);
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts])

  const addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    if (contacts.find(contact => contact.number === number)) {
      alert(`Number ${number} is already in contacts`);
      return;
    }

    if ((!name || name.trim() === '') && (!number || number.trim() === '')) {
      alert('Fill in the fields "Name" and "Number"');
      return;
    }

    if (!name || name.trim() === '') {
      alert('Field "Name" is empty');
      return;
    }

    if (!number || number.trim() === '') {
      alert('Field "Number" is empty');
      return;
    }
    setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const getVisibleContactsSortByName = () => {
    const visibleContacts = getVisibleContacts();

    const visibleContactsSortByName = visibleContacts.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    return visibleContactsSortByName;
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      {contacts.length === 0 ? (
        <p>There are no contacts in the list</p>
      ) : (
        <ContactList
          contacts={getVisibleContactsSortByName()}
          onDeleteContact={deleteContact}
        />
      )}
    </Layout>
  );
}
