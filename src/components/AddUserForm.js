import React, { useRef } from 'react';

import { v4 as uuidv4 } from 'uuid';

const AddUserForm = (props) => {
	const nameInputRef = useRef();
	const usernameInputRef = useRef();

	const formSubmissionHandler = (e) => {
		e.preventDefault();
		const nameValue = nameInputRef.current.value;
		const usernameValue = usernameInputRef.current.value;

		if (nameValue.trim() === '' || usernameValue.trim() === '') {
			alert('Invalid input!');
			return;
		}

		const user = {
			id: uuidv4(),
			name: nameValue,
			username: usernameValue,
		};
		props.onAddUser(user);
	};

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className='form-controls'>
				<div className='form-control'>
					<label htmlFor='name'>Name</label>
					<input type='text' id='name' ref={nameInputRef} />
				</div>
				<div className='form-control'>
					<label htmlFor='username'>User name</label>
					<input type='text' id='username' ref={usernameInputRef} />
				</div>
			</div>
			<div className='form-actions'>
				<button type='submit'>Add</button>
			</div>
		</form>
	);
};

export default AddUserForm;
