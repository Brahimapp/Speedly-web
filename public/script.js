
document.addEventListener('DOMContentLoaded', () => {
    const getStartedBtn = document.getElementById('getStarted');
    const authSection = document.getElementById('authSection');

    getStartedBtn.addEventListener('click', () => {
        authSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Check if user is authenticated
    fetch('/api/hello')
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                document.getElementById('loginBtn').style.display = 'none';
                document.getElementById('authSection').innerHTML = `
                    <h3>Welcome back!</h3>
                    <p>${data.message}</p>
                `;
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
