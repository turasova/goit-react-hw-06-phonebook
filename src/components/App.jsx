import { Form } from './Form/Form';
import css from './App.module.css';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <div>
      <div className={css.phonebookWrapper}>
        <h1 className={css.title}>Phonebook</h1>
        <Form />
      </div>
      <div className={css.contactsWrapper}>
        <h2 className={css.title}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};
