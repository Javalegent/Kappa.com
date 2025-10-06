// script.js
document.querySelector('button').addEventListener('click', () => {
    const searchTerm = document.querySelector('.search-bar').value;
    if (searchTerm) {
        console.log(`Searching for: ${searchTerm}`);
        // You could redirect to a search results page or display results here
    } else {
        console.log('No search term entered');
    }
});

// Optional: Handle enter key press for search
document.querySelector('.search-bar').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.querySelector('button').click();
    }
});
