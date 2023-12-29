import { List } from './FriendList.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </List>
  );
};
