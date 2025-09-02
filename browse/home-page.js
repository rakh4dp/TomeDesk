document.addEventListener('DOMContentLoaded', function() {

    const categories = [
        'Buku Paling Populer',
        'Rekomendasi Fiksi Ilmiah',
        'Novel Roman Terbaik',
        'Non-Fiksi Pilihan Editor',
        'Misteri & Thriller',
        'Untuk Para Pengembang Diri'
    ];

    const contentContainer = document.getElementById('content-container');

    categories.forEach((category, categoryIndex) => {

        const row = document.createElement('div');
        row.classList.add('book-row');

        const title = document.createElement('h2');
        title.classList.add('row-title');
        title.textContent = category;

        const postersContainer = document.createElement('div');
        postersContainer.classList.add('row-posters');

        for (let i = 1; i <= 15; i++) {
            const bookCard = document.createElement('div');
            bookCard.classList.add('book-card');

            const poster = document.createElement('img');
            
            const uniqueImageId = categoryIndex * 15 + i;
            poster.src = `https://picsum.photos/200/300?random=${uniqueImageId}`;
            poster.alt = `Sampul Buku ${category} ${i}`;

            bookCard.appendChild(poster);
            postersContainer.appendChild(bookCard);
        }

        row.appendChild(title);
        row.appendChild(postersContainer);
        contentContainer.appendChild(row);
    });
});