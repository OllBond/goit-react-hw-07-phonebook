import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchDeleteContact } from 'redux/contacts/contacts-operations';

import css from '../ContactItem/ContactItem.module.css';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.listItems}>
      {name}: {phone}
      <button
        className={css.btnDeleteContact}
        // анонімна функція де передаємо id контакту, щоб знати,
        // який контакт видаляти
        onClick={() => dispatch(fetchDeleteContact(id))}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string,
};
