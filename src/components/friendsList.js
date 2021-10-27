import propTypes from 'prop-types';
import FriendMarkup from './friendMarkup';

function friendList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li className="item" key={item.id}>
          <FriendMarkup name={item.name} avatar={item.avatar} isOnline={item.isOnline} />
        </li>
      ))}
    </ul>
  );
}

friendList.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    }),
  ),
};

export default friendList;
