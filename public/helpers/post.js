
function post (url, data) {
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