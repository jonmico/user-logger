import { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { Card } from './components/Card';

function App() {
  const [users, setUsers] = useState([]);

  function addUser(user) {
    setUsers((prevState) => [...prevState, { id: 1, user }]);
  }

  return (
    <div>
      <Card>
        <UserForm addUser={addUser} />
      </Card>
      <Card>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
        <UserList />
      </Card>
    </div>
  );
}

export default App;
