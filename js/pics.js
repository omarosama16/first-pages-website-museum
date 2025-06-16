const images = document.querySelectorAll('.pair-container');

const itemsPerPage = 3;
let currentPage = parseInt(localStorage.getItem('currentPage')) || 1;

function displayPage(page) {
    const totalPages = Math.ceil(images.length / itemsPerPage);

   
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;

    currentPage = page;
    localStorage.setItem('currentPage', currentPage); 

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    images.forEach((image, index) => {
        image.style.display = (index >= startIndex && index < endIndex) ? 'flex' : 'none';
    });

    updatePagination(page);
}

function updatePagination(page) {
    const totalPages = Math.ceil(images.length / itemsPerPage);
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.disabled = page === 1;
    prevButton.addEventListener('click', () => displayPage(page - 1));
    paginationContainer.appendChild(prevButton);

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.classList.add('page-button');
        pageButton.disabled = i === page;
        pageButton.addEventListener('click', () => displayPage(i));
        paginationContainer.appendChild(pageButton);
    }

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.disabled = page === totalPages;
    nextButton.addEventListener('click', () => displayPage(page + 1));
    paginationContainer.appendChild(nextButton);
}

displayPage(currentPage);
