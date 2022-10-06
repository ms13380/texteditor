
import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '/style.css';
cons main = document.querySelector('#main');
main.innerHTML = '';
const loadSpinner = () => {
	const spinner = document.createElement('div');
	spinner.classList.add('spinner');
	spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
	main.appendChild(spinner);
};
const editor = new Editor();
if (typeof editor === 'undefined') {
	loadSpinner();
}
if ('serviceWorker' in navigator) {
	// register workbox service worker
	const workboxSW = new Workbox(');
	workboxSW.register();
	console.log('SW registered');
} else {
	console.error(');
}
