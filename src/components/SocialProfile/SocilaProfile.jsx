import PropTypes from 'prop-types';
import {
  ProfileContainer,
  DescContainer,
  Avatar,
  Name,
  Tag,
  Location,
  StatsList,
  StatItem,
  StatLabel,
  StatQuantity,
} from './SocilaProfile.styled';

const defaultImg = 'https://i.ibb.co/rM8Wh0H/Sasha-Gavrilov.jpg';

export const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <DescContainer>
        <Avatar src={avatar ?? defaultImg} alt="Аватар пользователя" />
        <Name>{name}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </DescContainer>

      <StatsList>
        <StatItem>
          <StatLabel>Followers</StatLabel>
          <StatQuantity>{stats.followers}</StatQuantity>
        </StatItem>
        <StatItem>
          <StatLabel>Views</StatLabel>
          <StatQuantity>{stats.views}</StatQuantity>
        </StatItem>
        <StatItem>
          <StatLabel>Likes</StatLabel>
          <StatQuantity>{stats.likes}</StatQuantity>
        </StatItem>
      </StatsList>
    </ProfileContainer>
  );
};

Profile.defaultProps = {
  avatar: 'https://i.ibb.co/6b9dSwF/Sasha-Gavrilov.jpg',
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,

  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
