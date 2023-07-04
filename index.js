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
//console.log(copyGrades.sort(sortAndPrint));
console.log(copyGrades[11]);

//Задание 4. Найдите и выведите минимальный балл среди студентов.
console.log(copyGrades[0]);