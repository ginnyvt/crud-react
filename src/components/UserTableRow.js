import React from 'react';

const UserTableRow = (props) => {
	return (
		<tr>
			<td>{props.user.name}</td>
			<td>{props.user.username}</td>
			<td>
				<button onClick={() => props.onToggleEditUser(props.user)}>Edit</button>
				<button onClick={() => props.onDeleteUser(props.user.id)}>
					Delete
				</button>
			</td>
		</tr>
	);
};

export default UserTableRow;
