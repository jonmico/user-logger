import { styled } from 'styled-components';

const List = styled.ul`
  list-style-type: none;
`;

export default function UserList() {
  return (
    <List>
      <li>hi</li>
      <li>hi</li>
      <li>hi</li>
    </List>
  );
}
