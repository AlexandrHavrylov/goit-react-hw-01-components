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

export const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <DescContainer>
        <Avatar src={avatar} alt="Аватар пользователя" />
        <Name>{name}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </DescContainer>

      <StatsList>
        <StatItem>
          <StatLabel class="label">Followers</StatLabel>
          <StatQuantity class="quantity">{stats.followers}</StatQuantity>
        </StatItem>
        <StatItem>
          <StatLabel class="label">Views</StatLabel>
          <StatQuantity class="quantity">{stats.views}</StatQuantity>
        </StatItem>
        <StatItem>
          <StatLabel class="label">Likes</StatLabel>
          <StatQuantity class="quantity">{stats.likes}</StatQuantity>
        </StatItem>
      </StatsList>
    </ProfileContainer>
  );
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
