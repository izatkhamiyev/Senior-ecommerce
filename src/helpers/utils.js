export const displayMoney = (n) => {
	const format = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	});

	// or use toLocaleString()
	return format.format(n);
};


export const displayActionMessage = (msg, status = 'info') => {
	const div = document.createElement('div');
	const span = document.createElement('span');

	div.className = `toast ${status === 'info'
		? 'toast-info'
		: status === 'success'
			? 'toast-success'
			: 'toast-error'
		}`;
	span.className = 'toast-msg';
	span.textContent = msg;
	div.appendChild(span);


	if (document.querySelector('.toast')) {
		document.body.removeChild(document.querySelector('.toast'));
		document.body.appendChild(div);
	} else {
		document.body.appendChild(div);
	}

	setTimeout(() => {
		try {
			document.body.removeChild(div);
		} catch (e) {
			console.log(e);
		}
	}, 3000);
};
