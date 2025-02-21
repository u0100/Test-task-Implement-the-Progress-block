document.addEventListener('DOMContentLoaded', () => {
	const circle = document.querySelector('.progress-ring-circle');
	const radius = circle.r.baseVal.value;
	const circumference = 2 * Math.PI * radius;

	circle.style.strokeDasharray = `${circumference} ${circumference}`;
	circle.style.strokeDashoffset = circumference;

	const setProgress = (value) => {
		const offset = circumference - (value / 100) * circumference;
		circle.style.strokeDashoffset = offset;
	};

	const valueInput = document.getElementById('value-input');
	const animateToggle = document.getElementById('animate-toggle');
	const hideToggle = document.getElementById('hide-toggle');

	valueInput.addEventListener('input', ({ target }) => {
		let value = Math.min(target.value, 100);
		target.value = value;
		setProgress(value);
	});

	animateToggle.addEventListener('change', ({ target }) => {
		target.checked ? circle.classList.add('animate') : circle.classList.remove('animate');
	});

	hideToggle.addEventListener('change', ({ target }) => {
		document.querySelector('.progress-container-circle').style.display = target.checked ? 'none' : 'block';
	});

	setProgress(valueInput.value);
});