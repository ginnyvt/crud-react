import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';

import UserTable from './components/UserTable';

const App = () => {
	const fetchedUsers = [
		{
			id: uuidv4(),
			name: 'Ginny',
			username: 'ginnyvt',
		},
		{
			id: uuidv4(),
			name: 'Harry',
			username: 'harrytang',
		},
	];

	const [users, setUsers] = useState(fetchedUsers);
	const [isEditing, setIsEditing] = useState(false);

	const [currentUser, setCurrentUser] = useState({
		id: '',
		name: '',
		username: '',
	});

	const addUserHandler = (user) => {
		setUsers((prevUsers) => [...prevUsers, user]);
	};

	const toggleEditUserHandler = (user) => {
		setIsEditing(true);
		setCurrentUser({ id: user.id, name: user.name, username: user.username });
	};

	const updateUserHandler = (userId, updatedUser) => {
		setIsEditing(false);
		const updatedUsers = users.map((user) => {
			return user.id === userId ? updatedUser : user;
		});
		setUsers(updatedUsers);
	};

	const deleteUserHandler = (userId) => {
		const filteredUsers = users.filter((user) => user.id !== userId);
		setUsers(filteredUsers);
	};

	return (
		<div className='container'>
			<div className='flex'>
				<div className='add-user'>
					{!isEditing && (
						<Fragment>
							<h2>Add user</h2>
							<AddUserForm onAddUser={addUserHandler} />
						</Fragment>
					)}
					{isEditing && (
						<Fragment>
							<h2>Edit user</h2>
							<EditUserForm
								currentUser={currentUser}
								onUpdateUser={updateUserHandler}
							/>
						</Fragment>
					)}
				</div>
				<div className='view-users'>
					<h2>View users</h2>
					<UserTable
						users={users}
						onDeleteUser={deleteUserHandler}
						onToggleEditUser={toggleEditUserHandler}
					/>
				</div>
			</div>
		</div>
	);
};

export default App;
