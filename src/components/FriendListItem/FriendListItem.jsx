import PropTypes from 'prop-types';

import { Friend, Avatar, Name, Status } from './FriendListItem.styled';
const defaultImg = 'https://i.ibb.co/rM8Wh0H/Sasha-Gavrilov.jpg';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Friend>
      <Status statusType={isOnline}></Status>
      <Avatar src={avatar ?? defaultImg} alt={name} width="48" />
      <Name>{name}</Name>
    </Friend>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
