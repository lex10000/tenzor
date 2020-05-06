/*
1. Создать массив arr1 из 100 элементов и заполнить его числами от 1 до 100 в
 случайном порядке. Каждое число должно встречаться в массиве ровно один раз.
 */
function task1(N = 100){
    let arr1 =[];
    while (arr1.length<N){
        let rand_num = Math.floor(Math.random()*100); //math.floor для добавления целых случайных ЦЕЛЫХ чисел
        if(arr1.indexOf(rand_num) == -1){ //Если такого числа нет, то добавим в массив
            arr1.push(rand_num);
        }
    }
    arr1.sort(function (a,b) { //отсортировал массив по возрастанию. для док-ва, что числа все случайные
        return a - b;
    });
    return arr1;
}

/*
2. Создать массив arr2, который формируется из массива arr1 следующим образом:
первым элементом нового массива становится последний элемент массива arr1, вторым элементом - предпоследний, и т.д.

Не получилось использовать функцию reverse, т.к. он менял исходный массив, а не возвращал новый, подскажите,
можно ли сделать так, чтобы реверс возвращал новый массив?

 */
function task2(user_array) {
    let arr2 =  user_array.map((elem, index) => user_array[user_array.length-index-1]);
    return arr2;
}

/*
3. Создать третий  массив arr3, который формируется как разность соответствующих элементов массива arr1 и arr2.
 */
function task3(user_array1, user_array2) {
    return user_array1.map((elem, index) => elem - user_array2[index]);
}

/*
4. Для третьего массива посчитать среднее арифметическое значение всех элементов.
 */
function task4(user_array) {
    return user_array.reduce((prev_value, current_item) => prev_value + current_item ) / user_array.length;
}

let array1 = task1(100);//Создание рандомного массива со 100 элементами
let array2 = task2(array1);             //реверс массива
let array3 = task3(array1, array2);       //Разность элементов двух массивов
let array4 = task4(array3);             //Среднее арифметическое
console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);
