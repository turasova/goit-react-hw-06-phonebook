import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContactValue } from 'store/contactsSlice';
import { getFilter } from 'store/filterSlice';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContactValue);
  const filterContacts = useSelector(getFilter);

  const lowerFilter = filterContacts.toLowerCase();

  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(lowerFilter)
  );

  const delContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.listContact}>
      {visibleContacts.map(({ name, number, id }) => (
        <li className={css.contactItem} key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            type="button"
            className={css.buttonDelete}
            onClick={() => delContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
