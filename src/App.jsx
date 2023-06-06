import { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { Card } from './components/Card';

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <Card>
        <UserForm />
      </Card>
      <Card>
        <UserList />
      </Card>
    </div>
  );
}

export default App;
