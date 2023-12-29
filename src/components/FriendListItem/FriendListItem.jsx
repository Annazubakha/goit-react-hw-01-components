import PropTypes from 'prop-types';
import { Item, Name, Status, Img } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <Img src={avatar} alt={'User avatar'} />
      <Name>{name}</Name>
    </Item>
  );
};
FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
};
