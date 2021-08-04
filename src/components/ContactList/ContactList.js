// import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '../IconButton';
import { ReactComponent as IconDelete } from '../icons/icon-close-delete.svg';

import styles from './ContactList.module.scss';

// const Button = ({ onDeleteContact }) => (
//   <button onClick={onDeleteContact} className={styles.Button}>
//     Delete
//   </button>
// );

// const ContactItem = ({ name, number, onDeleteContact }) => (
//   <li className={styles.ContactItem}>
//     <p className={styles.Contact}>
//       <span className={styles.ContactName}>{name}:</span> {number}
//     </p>
//     <Button onDeleteContact={onDeleteContact} />
//   </li>
// );

// const ContactList = ({ contacts, onDeleteContact }) => {
//   if (contacts.length === 0) return null;
//   return (
//     <ul className={styles.ContactList}>
//       {contacts.map(({ id, name, number }) => (
//         <ContactItem
//           key={id}
//           name={name}
//           number={number}
//           onDeleteContact={() => onDeleteContact(id)}
//         />
//       ))}
//     </ul>
//   );
// };

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

// const Button = ({ onDeleteContact }) => (
//   <button onClick={onDeleteContact} className={styles.Button}>
//     Delete
//   </button>
// );

const ContactItem = ({ name, number, onDeleteContact }) => (
  <li className={styles.ContactItem}>
    <p className={styles.Contact}>
      <span className={styles.ContactName}>{name}:</span> {number}
    </p>
    <IconButton onDeleteContact={onDeleteContact} aria-label="Delete contact">
      <IconDelete width={15} height={15} />
    </IconButton>
  </li>
);

const ContactList = ({ contacts, onDeleteContact }) => {
  if (contacts.length === 0) return null;
  return (
    <ul className={styles.ContactList}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          onDeleteContact={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  // onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
