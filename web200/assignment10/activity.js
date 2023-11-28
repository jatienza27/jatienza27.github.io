var bibliography = [];

function create() {
    let authorLN = document.getElementById('lastName').value;
    let authorFN = document.getElementById('firstName').value;
    let authorMN = document.getElementById('middleName').value;
    let year = document.getElementById('year').value;
    let title = document.getElementById('title').value;
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    let publisher = document.getElementById('publisher').value;

    let book = {
        authorLN: lastName,
        authorFN: firstName,
        authorMN: middleName,
        year: year,
        title: title,
        location: {
            city: city,
            state: state,
        },
        publisher: publisher,
    };
    
    bibliography.push(book);
   
}

function createAPAFormat(bibliography) {
    let apaFormat = '';

    bibliography.forEach(function (book) {
        apaFormat += `<p>${book.authorLN}, ${book.authorFN} ${book.authorMN} (${book.year}). ${book.title}. ${book.location.city}, ${book.location.state}: ${book.publisher}.</p>`;
    });

    return apaFormat;
}
