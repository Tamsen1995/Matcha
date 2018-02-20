const CreateUser = document.querySelector('.CreateUser');

CreateUser.addEventListener('submit', (e) => {
	e.preventDefault();
	const username = CreateUser.querySelector('.username').value;
	const password = CreateUser.querySelector('.password').value;
	post('/createUser', { username, password })
})
