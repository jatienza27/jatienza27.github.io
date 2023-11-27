var bibliography = [];

function create() {
    var author = document.getElementById('lastName').value;
    var author = document.getElementById('firstName').value;
    var author = document.getElementById('middleName').value;
    var year = document.getElementById('year').value;
    var title = document.getElementById('title').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var publisher = document.getElementById('publisher').value;

    var book = {
        author: lastName, firstName, middleName,
        year: year,
        title: title,
        location: {
            city: city,
            state: state,
        },
        publisher: publisher,
    };
    
}

function createAPAFormat(bibliography) {
    var apaFormat = '';

    bibliography.forEach(function (book) {
        apaFormat += `<p>${book.author} (${book.year}). ${book.title}. ${book.location.city}, ${book.location.state}: ${book.publisher}.</p>`;
    });

    return apaFormat;
}
