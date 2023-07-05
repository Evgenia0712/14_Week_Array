//Задание 1
const generateArray = (length, min, max) => (
  [...new Array(length)]
    .map(() => Math.round(Math.random() * (max - min + 1)) + min)
);

const grades = generateArray(12, 0, 100);
console.log(grades);

//Задание 2. Рассчитайте и выведите средний балл студентов.
let sumGrades = grades.reduce(function (a, b) {
  return a + b;
});
//console.log(sumGrades);
const middleGrade = sumGrades / grades.length;
console.log(middleGrade);

//Задание 3. Найдите и выведите максимальный балл среди студентов.
let copyGrades = [...grades];
function sortAndPrint(a, b) {
  return a - b;
}
console.log(copyGrades.sort(sortAndPrint));
console.log(copyGrades[11]);

//Задание 4. Найдите и выведите минимальный балл среди студентов.
console.log(copyGrades[0]);

//Задание 5. Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60). Используйте
//   метод массива, который фильтрует оценки и оставляет только те, которые соответствуют заданному условию. Затем
//   посчитайте количество оставшихся оценок и выведите результат.
const filteredGrades = grades.filter(el => el >= 60);
//console.log(filteredGrades);
console.log(filteredGrades.length);

//Задание 6. Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60). Используйте
//    аналогичный подход, как в предыдущем шаге.
const filteredGradesBad = grades.filter(el => el < 60);
//console.log(filteredGradesBad);
console.log(filteredGradesBad.length);

//Задание 7. Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E, используя следующие правила:<br>
//    - Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"<br>
//   - Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"<br>
//    - Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"<br>
//    - Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"<br>
//    - Если оценка ниже 20, преобразуйте её в "E"

function changeGrades(grades) {
  let el = '';
  let resultArray = [];
  for (i = 0; i < 11; i++) {
    if (80 <= grades[i] <= 100) {
      el = 'A';
    } else if (60 <= grades[i] <= 79) {
      el = 'B';
    } else if (40 <= grades[i] <= 59) {
      el = 'C';
    } else if (20 <= grades[i] <= 39) {
      el = 'D';
    } else {
      el = 'E';
    }
    resultArray.push(el);
  }
  return resultArray;
}

console.log(changeGrades());


const result1 = document.querySelector('.result1');
result1.textContent = grades;

const result2 = document.querySelector('.result2');
result2.textContent = middleGrade;

const result3 = document.querySelector('.result3');
result3.textContent = copyGrades[11];

const result4 = document.querySelector('.result4');
result4.textContent = copyGrades[0];

const result5 = document.querySelector('.result5');
result5.textContent = filteredGrades.length;

const result6 = document.querySelector('.result6');
result6.textContent = filteredGradesBad.length;

const result7 = document.querySelector('.result7');
result7.textContent = grades;
