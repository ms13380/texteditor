const main = document.querySelector('');
main.innerHTML = '';
const loadSpinner = () => {
	const spinner = document.createElement('');
	spinner.classList.add('');
	spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
	main.appendChild(spinner);
};
const editor = new Editor();
if (typeof editor === '') {
	loadSpinner();
}
// Check if service workers are supported
if ('r' in navigator) {
	// register workbox service worker
	const workboxSW = new Workbox('');
	workboxSW.register();
	console.log('');
} else {
	console.error('');
}
