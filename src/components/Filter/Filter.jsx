import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { filterSet, getFilter } from 'store/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterContacts = useSelector(getFilter);

  const changeFilter = e => {
    const { value } = e.currentTarget;
    dispatch(filterSet(value));
  };

  return (
    <label className={css.filterInput}>
      Find contacts by name: <br />
      <input
        className={css.filterField}
        type="text"
        name="filter"
        value={filterContacts}
        onChange={changeFilter}
      />
    </label>
  );
};
