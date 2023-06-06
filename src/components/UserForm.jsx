import { useState } from 'react';
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
  const [formData, setFormData] = useState({ username: '', age: null });

  function handleInputChange(evt) {
    setFormData((prevState) => ({
      ...prevState,
      [evt.target.name]: evt.target.value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor='username'>Username</Label>
      <Input
        value={formData.username}
        type='text'
        id='username'
        name='username'
        onChange={handleInputChange}
      />
      <Label htmlFor='age'>Age (Years)</Label>
      <Input
        value={formData.age}
        type='number'
        id='age'
        name='age'
        onChange={handleInputChange}
      />
      <Button type='submit'>Add User</Button>
    </form>
  );
}
