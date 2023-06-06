import { styled } from 'styled-components';

const Label = styled.label`
  display: inline-block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
`;

const Button = styled.button`
  color: white;
  background-color: purple;
  border: 1px solid black;
  padding: 5px 15px;

  &:hover {
    background-color: pink;
    color: black;
    cursor: pointer;
  }
`;

export default function UserForm() {
  return (
    <form>
      <Label htmlFor='username'>Username</Label>
      <Input type='text' id='username' name='username' />
      <Label htmlFor='age'>Age (Years)</Label>
      <Input type='number' id='age' name='age' />
      <Button type='submit'>Add User</Button>
    </form>
  );
}
