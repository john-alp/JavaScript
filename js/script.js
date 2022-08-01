'use sctrict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы посмотрели? ', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов Вы посмотрели? ', '');

    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};





function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('Оцените фильм ', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log(i);
        } else {
            console.log('error' + i);
            i--;
        }
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы, батенька, Киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);         
    }
}

// alert('Hello');

// const result = confirm('May?');
// console.log(result);

// const answer = prompt("May?", "yes");
// console.log(typeof(answer) );

// const answers = [];

// answers[0] = prompt('Ваше имя?', '');
// answers[1] = prompt('Ваша фамилия?', '');
// answers[2] = prompt('Ваш возвраст?', 18);

//  document.write(answers);

//  const may = 'may';