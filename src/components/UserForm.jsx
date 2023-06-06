import { useState } from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: inline-block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
`;

const NameInput = styled(Input)`
  border: ${(props) =>
    props.$isValidName ? '1px solid black' : '2px solid red'};
`;

const AgeInput = styled(Input)`
  border: ${(props) =>
    props.$isValidAge ? '1px solid black' : '2px solid red'};
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

const ErrorMessage = styled.p`
  color: red;
  margin: 0;
  position: relative;
  bottom: 10px;
`;

export default function UserForm({ addUser }) {
  const [formData, setFormData] = useState({ username: '', age: '' });
  const [isValidName, setIsValidName] = useState(true);
  const [isValidAge, setIsValidAge] = useState(true);

  function handleInputChange(evt) {
    setFormData((prevState) => ({
      ...prevState,
      [evt.target.name]: evt.target.value,
    }));
    if (evt.target.name === 'username') setIsValidName(true);
    if (evt.target.name === 'age') setIsValidAge(true);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const { username } = formData;
    const age = parseInt(formData.age);

    if (username.trim().length === 0) {
      setIsValidName(false);

      if (age < 0 || !age) {
        setIsValidAge(false);
      }
      return;
    }

    if (age < 0 || !age) {
      setIsValidAge(false);
      return;
    }

    addUser(formData);
    setFormData({ username: '', age: '' });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor='username'>Username</Label>
      <NameInput
        value={formData.username}
        type='text'
        id='username'
        name='username'
        onChange={handleInputChange}
        $isValidName={isValidName}
      />
      {!isValidName && <ErrorMessage>Invalid name.</ErrorMessage>}
      <Label htmlFor='age'>Age (Years)</Label>
      <AgeInput
        value={formData.age}
        type='number'
        id='age'
        name='age'
        onChange={handleInputChange}
        $isValidAge={isValidAge}
      />
      {!isValidAge && <ErrorMessage>Invalid age.</ErrorMessage>}
      <Button type='submit'>Add User</Button>
    </form>
  );
}
