// src/components/UserList.tsx
import React, { useEffect, useState } from 'react';
import api from '../api/api.ts';
import {User} from 'K:/Main Drive/Projects/hr_login_system_CLONE/hr_login_system/src/database/users.ts';

interface User{
  id:number,
  first_name: string,
  last_name: string,
  telephone_number: string,
  email_address:string,
  employee_manager:string,
  status:string,
  username:string,
  password:string
}

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const usersData: User[] = await api.get<User[]>('/users');
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
