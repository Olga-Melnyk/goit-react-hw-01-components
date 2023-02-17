import PropTypes from 'prop-types';
import {
  Container,
  Image,
  UserName,
  Tag,
  Location,
  ActiveList,
  ActiveItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <div>
        <Image src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </div>

      <ActiveList>
        <ActiveItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </ActiveItem>
        <ActiveItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </ActiveItem>
        <ActiveItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </ActiveItem>
      </ActiveList>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
