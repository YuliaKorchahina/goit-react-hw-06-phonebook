import {useSelector, useDispatch } from 'react-redux';

import { deleteContact } from '../redux/contactsBook/contacts/contacts-slice';

import PropTypes from 'prop-types';
import { getContacts } from 'redux/contactsBook/contacts/contacts-selector';

export const ContactsList = () => {
  
  const contacts = useSelector(getContacts)

  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteContact(contacts.id));
  };

  return (
    <ol>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name} : {number}{' '}
          <button type="button" onClick={onDelete}>
            ❌
          </button>
        </li>
      ))}
    </ol>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
