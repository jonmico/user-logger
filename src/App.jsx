import { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { Card } from './components/Card';

function App() {
  const [users, setUsers] = useState([]);

  function addUser(user) {
    setUsers((prevState) => [
      ...prevState,
      { id: crypto.randomUUID(), ...user },
    ]);
  }

  return (
    <div>
      <Card>
        <UserForm addUser={addUser} />
      </Card>
      {users.length !== 0 && (
        <Card>
          <UserList userList={users} />
        </Card>
      )}
    </div>
  );
}

export default App;
