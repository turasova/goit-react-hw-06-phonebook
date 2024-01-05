import { ContactItem } from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContactValue } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

// export const ContactList = ({ contacts,deleteContact }) => {
//     return (
//       <ul className={css.listContact}>
//         {contacts.map((contact) => (
//             <ContactItem
//                 contacts={contact}
//                 key={contact.id}
//                 deleteContact={deleteContact}
//             />
//         ))}
//     </ul>
//   )
// }

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContactValue);
  const filterContacts = useSelector(getFilter);

  const lowerFilter = filterContacts.toLowerCase();

  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(lowerFilter)
  );

  const deleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.listContact}>
      {visibleContacts.map(contact => (
        <ContactItem
          contacts={contact}
          key={contact.id}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};
