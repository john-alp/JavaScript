'use sctrict';


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов Вы посмотрели? ', '5');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов Вы посмотрели? ', '10');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', 'The new life '),
                b = prompt('Оцените фильм ', '5');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log(i);
            } else {
                console.log('error' + i);
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы, батенька, Киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log('if ')
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
            console.log('true ' + personalMovieDB.privat);
        } else {
            console.log('else' + personalMovieDB.privat);
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        // case 1
        // for (let i = 1; i <= 3; i++) {
        //     const genre = prompt(`Ваш любимый жанр под номером ${i}`);

        //     if (genre == null || genre == '') {
        //         console.log('Err.');
        //         i--;
        //     } else {
        //         personalMovieDB.genres[i - 1] = genre;
        //     }
        // }s
        // case 2
        for (let i = 0; i < 1; i++) {
            let genres = prompt('Введите ваши любимые жанры через запятую').toLocaleLowerCase();
console.log(typeof(genres));
            if (genres == null || genres == '') {
                console.log("Вы умудрились ввести неверные данные или не ввели их вовсе!");
                i--;
            } else {
                personalMovieDB.genres = genres.split(',');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`); // ` бэктики  интерполяция
        });
    }
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();

// personalMovieDB.showMyDB[personalMovieDB.privat];
// personalMovieDB.toggleVisibleMyDB();
// showMyDB(personalMovieDB.privat);



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