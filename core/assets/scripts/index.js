import Alpine from 'alpinejs'
import '../styles/button-styles.css'

// Add Alpine object to the window scope
window.Alpine = Alpine

// initialize Alpine
Alpine.start()

window.htmx = require('htmx.org');

window.addEventListener('load', () => {
    document.getElementById('message').textContent = 'FROM JAVASCRIPT'
});