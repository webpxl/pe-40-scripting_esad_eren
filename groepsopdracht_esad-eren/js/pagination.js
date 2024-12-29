// Pagination utilities
export const PRODUCTS_PER_PAGE = 4;

export function createPagination(totalItems, currentPage, onPageChange) {
    const totalPages = Math.ceil(totalItems / PRODUCTS_PER_PAGE);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.className = `page-button${currentPage === i ? ' active' : ''}`;
        button.textContent = i;
        button.onclick = () => {
            // Update all buttons to remove active class
            const buttons = pagination.getElementsByClassName('page-button');
            Array.from(buttons).forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            onPageChange(i);
        };
        pagination.appendChild(button);
    }
}