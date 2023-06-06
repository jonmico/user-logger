import { useState } from 'react';
import UserForm from './components/UserForm';
import { Card } from './components/Card';

function App() {
  const [users, setUsers] = useState([]);
  return (
    <Card>
      <UserForm />
    </Card>
  );
}

export default App;
