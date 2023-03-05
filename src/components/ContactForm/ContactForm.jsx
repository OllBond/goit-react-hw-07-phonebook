import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  fetchContacts,
  fetchAddContact,
} from 'redux/contacts/contacts-operations';

import initialState from './initialState';

import css from './ContactForm.module.css';

const ContactForm = () => {
  const [state, setState] = useState({ ...initialState });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(fetchAddContact({ name, phone }));

    setState({ ...initialState });
  };

  const { name, phone } = state;
  return (
    <div className={css.wrapper}>
      <div className={css.contactFormBlock}>
        <form className="" onSubmit={handleSubmit}>
          <div className={css.conactFormGroup}>
            <label className={css.label}>Name</label>
            <input
              className={css.input}
              // зв'язок інпуту і state
              value={name}
              onChange={handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
          <div className={css.conactFormGroup}>
            <label className={css.label}>Number</label>
            <input
              className={css.input}
              // зв'язок інпуту і state
              value={phone}
              onChange={handleChange}
              type="tel"
              name="phone"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>
          <button className={css.btnAddContact} type="submit">
            Add contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
