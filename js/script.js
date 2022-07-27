/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

"use sctrict";

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

// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'
let numberOfFilms = prompt('Сколько фильмов Вы посмотрели? ', '');

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

let tempA;
let tempB;
for (i = 1; i > 0; i-- ) {
    tempA = prompt('Один из последних просмотренных фильмов?', '');
    tempB = prompt('Оцените фильм ', '');
    personalMovieDB['movies'] = {tempA: tempB};
}
document.write(personalMovieDB).movies;