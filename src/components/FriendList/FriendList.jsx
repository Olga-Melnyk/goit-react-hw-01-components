import { FriendListItem } from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import { FriendContainer } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendContainer>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </FriendContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
