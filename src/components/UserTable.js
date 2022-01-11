import React from 'react';
import UserTableRow from './UserTableRow';

const UserTable = (props) => {
	if (props.users.length === 0) {
		return <p>No users</p>;
	}

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Username</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{props.users.map((user) => (
					<UserTableRow
						key={user.id}
						user={user}
						onDeleteUser={props.onDeleteUser}
						onToggleEditUser={props.onToggleEditUser}
					/>
				))}
			</tbody>
		</table>
	);
};

export default UserTable;
