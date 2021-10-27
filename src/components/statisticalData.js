import propTypes from 'prop-types';

function Satistical(props) {
  const { label, percentage } = props;
  return (
    <div className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </div>
  );
}

Satistical.propTypes = {
  label: propTypes.string.isRequired,
  percentage: propTypes.number.isRequired,
};

export default Satistical;
