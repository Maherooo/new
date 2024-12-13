function calculateDifference(a, b) {
    return a - b;
}
console.log(calculateDifference(10, 3));

function isOdd(num) {
    if(num%2!=0)
    {
        return "Odd"
    }
    else
    {
        return "Not a odd"
    }
}
console.log(isOdd(5));

function findMin(arr) {
    var min=arr[0];
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]<min)
        {
            min=arr[i];
        }
    }
    return min;
}
console.log(findMin([4, 1, 7, -8, 0]));

function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([3, 6, 8, 5, 7]));


function sortArrayDescending(numbers) {
    for(let i=0;i<numbers.length;i++)
    {
        for(let j=0;j<numbers.length-1;j++)
        {
            if(numbers[j]<numbers[j+1])
            {
                let tem=numbers[j];
                numbers[j]=numbers[j+1];
                numbers[j+1]=tem;
            }
        }
    }
    return numbers;
}
console.log(sortArrayDescending([4, 2, 9, 1]));


function lowercaseFirstLetter(str) {
    return str[0].toLowerCase() + str.slice(1);
}
console.log(lowercaseFirstLetter("MAHER AHMED"));


function findAverage(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
    }
    return sum/arr.length;
}
console.log(findAverage([10, 20, 30]));

function isLeapYear(year) {
    if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)
    {
        return "Leap year";
    }
    else
    {
        return "Not a Leap Year";
    }
}
console.log(isLeapYear(2020));
console.log(isLeapYear(2021));
