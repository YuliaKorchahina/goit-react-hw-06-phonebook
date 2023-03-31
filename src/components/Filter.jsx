import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { Input } from './FormStyle.styled';
import { getFilter } from 'redux/contactsBook/filter/filter-selector';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

   const onFilter = ({target}) => {
        dispatch(getFilter(target.value));
    }

  // const normalizedFilter = getFilter.toLocaleLowerCase();

  // const filtredData = contacts.filter(({ name }) =>
  //   name.toLowerCase().includes(normalizedFilter)
  // );

  return (
    <>
      <h2>Contacts</h2>
      <label>
        Find contact by name
        <Input type="text" name="filter" onChange={onFilter} value={filter} />
      </label>
    </>
  );
};

Filter.filter = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
