import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/contactSlice';
import { Title, Input } from './Filter.styled';

export const Filter = () => {
	const filter = useSelector(state => state.filter)
	const dispatch = useDispatch();
  
  return (
    <>
      <Title>Find contacts by name</Title>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        placeholder="Enter name"
        onChange={(e) => dispatch(filterContact(e))}
        value={filter}
      />
    </>
  );
};


