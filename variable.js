function arrReverse(mainArr){

    let leftArr = 0;
    let rightArr = mainArr.length - 1;

    while(leftArr < rightArr){
    let temp = mainArr[leftArr];
    mainArr[leftArr] = mainArr[rightArr];
    mainArr[rightArr] = temp;

    leftArr++;
    rightArr--;
    }
}

let myArr = [1,2,3,4,5,6,7,8,9,10];
arrReverse(myArr);
console.log(myArr);