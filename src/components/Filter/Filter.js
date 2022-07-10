import PropTypes from 'prop-types';
import s from './Filter.module.css';

export const Filter = ({ value, onChange }) => (
  <div className={s.box}>
    <input type="text" className={s.input} onChange={onChange} value={value} />
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
