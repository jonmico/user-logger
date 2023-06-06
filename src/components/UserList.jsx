import { styled } from 'styled-components';
import UserItem from './UserItem';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export default function UserList({ userList }) {
  return (
    <List>
      {userList.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </List>
  );
}
