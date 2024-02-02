import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(({ id, ...friend }) => (
      <FriendListItem key={id} {...friend} />
    ))}
  </ul>
);

export default FriendList;
