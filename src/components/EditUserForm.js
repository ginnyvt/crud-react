import React, { useEffect, useState } from 'react';

const EditUserForm = (props) => {
	const currentUser = props.currentUser;
	const userId = currentUser.id;

	const [name, setName] = useState('');
	const [username, setUsername] = useState('');

	useEffect(() => {
		setName(currentUser.name);
		setUsername(currentUser.username);
	}, [currentUser.name, currentUser.username]);

	const nameInputChangeHandler = (e) => {
		setName(e.target.value);
	};

	const usernameInputChangeHandler = (e) => {
		setUsername(e.target.value);
	};

	const formSubmissionHandler = (e) => {
		e.preventDefault();
		const updatedUser = { name, username, id: userId };
		props.onUpdateUser(userId, updatedUser);
	};

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className='form-controls'>
				<div className='form-control'>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						id='name'
						value={name}
						onChange={nameInputChangeHandler}
					/>
				</div>
				<div className='form-control'>
					<label htmlFor='username'>User name</label>
					<input
						type='text'
						id='username'
						value={username}
						onChange={usernameInputChangeHandler}
					/>
				</div>
			</div>
			<div className='form-actions'>
				<button>Update user</button>
				<button>Cancel</button>
			</div>
		</form>
	);
};

export default EditUserForm;
