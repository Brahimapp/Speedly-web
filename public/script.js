
function fetchMessage() {
    fetch('/api/hello')
        .then(response => response.json())
        .then(data => {
            document.getElementById('message').textContent = data.message;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

document.getElementById('refreshBtn').addEventListener('click', fetchMessage);
fetchMessage(); // Initial fetch
