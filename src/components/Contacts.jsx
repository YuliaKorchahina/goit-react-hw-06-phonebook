import {useSelector, useDispatch } from 'react-redux';

import { deleteContact } from '../redux/contactsBook/contacts/contacts-slice';

// import PropTypes from 'prop-types';
import { getContacts } from 'redux/contactsBook/contacts/contacts-selector';
import { getFilter } from 'redux/contactsBook/filter/filter-selector';

 const getFiltredContacts = (contacts, filterValue) => {
  const normalizedFilter = filterValue.toLocaleLowerCase();
  // if (!filterValue){
  //   return []
  // } else {
    const filtredData = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter) 
  );
  return filtredData}
  
// };

export const ContactsList = () => {
  const filter = useSelector(getFilter);

  const contacts = useSelector(getContacts)

  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteContact(contacts.id));
  };

  return (
    <ol>
      {getFiltredContacts(contacts, filter).map(({ id, name, number }) => (
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

// ContactsList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
