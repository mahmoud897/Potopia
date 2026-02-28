// Plausible Analytics
// Privacy-friendly alternative to Google Analytics
if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    const script = document.createElement('script');
    script.defer = true;
    script.setAttribute('data-domain', 'potopia-egypt.com');
    script.src = 'https://plausible.io/js/script.js';
    document.head.appendChild(script);

    // Custom event tracking helper
    window.plausible = window.plausible || function () { (window.plausible.q = window.plausible.q || []).push(arguments) };
}
