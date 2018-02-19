const CreateUser = document.querySelector('.CreateUser');
CreateUser.addEventListener('submit', (e) => {
	e.preventDefault();
	const username = CreateUser.querySelector('.username').value;
	const password = CreateUser.querySelector('.password').value;
	post('/createUser', { username, password });
});

function post(url, data) {
	return fetch(url, {
		body: JSON.stringify(data),
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
			'content-type': 'application/json',
		},
		method: 'POST',
		mode: 'cors',
		redirect: 'follow',
		referrer: 'no-referrer',
	})
}
