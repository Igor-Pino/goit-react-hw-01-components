import propTypes from 'prop-types';

export default function FriendMarkup(props) {
  const { name, avatar, isOnline } = props;
  return (
    <div>
      <span className="status">{isOnline && 'online'}</span>
      <img className="avatar" src={avatar} alt="{name}" width="48" />
      <p className="name">{name}</p>
    </div>
  );
}

FriendMarkup.propTypes = {
  name: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired,
};

// const isOnline = true
// {isOnline && 'онлайн'} - якщо онлайн то рендериться
// {isOnline ? 'online' : 'offline'} - якщо онлайн то рендериться 'онлайн', якщо ні то 'офлайн'
