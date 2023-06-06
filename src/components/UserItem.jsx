import { styled } from 'styled-components';

const Item = styled.li`
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
`;

export default function UserItem({ user }) {
  const { username, age } = user;
  return (
    <Item>
      {username} ({age} years old)
    </Item>
  );
}
