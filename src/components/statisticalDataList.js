import propTypes from 'prop-types';
import StatisticalMarkup from './statisticalData';

function StatisticalDataList({ items }) {
  return (
    <ul className="stat-list">
      {items.map(item => (
        <li className="item" key={item.id}>
          <StatisticalMarkup label={item.label} percentage={item.percentage} />
        </li>
      ))}
    </ul>
  );
}

StatisticalDataList.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    }),
  ),
};

export default StatisticalDataList;
