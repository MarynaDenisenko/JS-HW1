// Завдання
/* Вывести в консоль пирамиду. Переменная указывает
 количество строк из которых построится пирамида. 
 Пирамида должна строится в одинаковом визуально 
 виде между собой, но строго учитывая кол-во строк*/
 
 const medianNumber = 11
 function pyramid(n) {
    for(let i=1; i<= n; i++){
        let str = ' '.repeat(n-i);
        let str2 = '*'. repeat(i*2 -1)
    console.log(str + str2 + str);
    }
}
pyramid(medianNumber);