const CreateUser = document.querySelector('.CreateUser');
CreateUser.addEventListener('submit', (e) => {
	e.preventDefault();
	const username = CreateUser.querySelector('.username').value;
	const password = CreateUser.querySelector('.password').value;
	post('/createUser', { username, password });
});


const Login = document.querySelector('.Login')
Login.addEventListener('submit', (e) => {
	e.preventDefault()
	const username = Login.querySelector('.username').value
	const password = Login.querySelector('.password').value
	post('/login', { username, password })
		.then(({ status }) => {
			if (status === 200) alert('login success')
			else alert('login failed')
		})
})

function post(url, data) {
	return fetch(url, {
		body: JSON.stringify(data),
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
			'Accept': 'application/json',
			'content-type': 'application/json',
		},
		method: 'POST',
		mode: 'cors',
		redirect: 'follow',
		referrer: 'no-referrer',
	})
}
