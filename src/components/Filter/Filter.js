import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => (
  <div>
    <input type="text" onChange={onChange} value={value} />
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
