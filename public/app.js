const CreateUser = document.querySelector('.CreateUser')
CreateUser.addEventListener('submit', (e) => {
	e.preventDefault()
	console.log(CreateUser)
	const username = CreateUser.querySelector('.username').value
	const password = CreateUser.querySelector('.password').value
	post('/createUser', { username, password })
})

function post(path, data) {
	return window.fetch(path, {
		method: 'POST',
		header: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
}