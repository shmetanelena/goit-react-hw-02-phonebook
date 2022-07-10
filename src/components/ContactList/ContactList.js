import s from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContact }) => (
  // <div className={s.box_title}>
  <ul className={s.contactList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={s.contactList_item}>
        <p>
          {name}: {number}
        </p>
        <button className={s.button} onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
  // </div>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
