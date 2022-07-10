import React, { Component } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';
import s from './App.module.css';

export class App extends Component {
  state = {
    // contacts: [],
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return false;
    }
    const contact = { id: nanoid(), name, number };
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
    return true;
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    if (filter.length === 0) {
      return contacts;
    }
    const normolizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normolizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className={s.section}>
        <div className={s.box}>
          <div className={s.box}>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={this.addContact} />
          </div>

          <div className={s.box}>
            <h3>Find contacts by name:</h3>
            <Filter onChange={this.changeFilter} value={filter} />
          </div>

          <div className={s.box}>
            <ContactList
              contacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
          </div>
        </div>
      </div>
    );
  }
}
