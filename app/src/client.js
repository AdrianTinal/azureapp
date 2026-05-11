document.addEventListener('DOMContentLoaded', () => {
    const message = document.getElementById('message');
    message.textContent = 'App Node.js (Express) + Static Front-end corriendo en Azure.';
    
    // Intentar llamar a la API interna
    fetch('/api/health')
        .then(res => res.json())
        .then(data => {
            console.log('API Status:', data);
            const statusTag = document.createElement('p');
            statusTag.textContent = `API Status: ${data.status}`;
            document.querySelector('.card').appendChild(statusTag);
        })
        .catch(err => console.error('API Error:', err));
});
