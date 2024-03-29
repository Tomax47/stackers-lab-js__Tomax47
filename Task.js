// Task-1 

function incremeant_array_numbers(arr) {

    let incremeantedArray = [...arr];
    for (let i = 0; i < arr.length; i++) {
        incremeantedArray[i] = (incremeantedArray[i] + (i+1)) % 10;
    }

    return incremeantedArray;
}

let arr = [1, 2, 4, 9, 7, 2];

console.log(`Original array : ${arr}\nIncremeanted array : ${incremeant_array_numbers(arr)}`);

// Task-2 

function sum_of_lowest_two(arr) {

    let lowest = Math.min(...arr);
    
    let removed = false;
    let secondLowest = Math.min(...arr.filter(function(number) {
        // Filtering out the lowest value so it ain't get chosen again for this var
        if (number === lowest && !removed) {
            removed = true;
            return false;
        }
        return true;
    }));


    return lowest + secondLowest;
}

console.log(sum_of_lowest_two(arr));

// Task-3

function perform_calculation(sign, frist_number, second_number) {
    switch(sign) {
        case "+" :
            return frist_number + second_number;
        case "-" :
            return frist_number - second_number;
        case "/" :
            return frist_number / second_number;
        case "*" :
            return frist_number * second_number;
        default:
            console.log('Unkown operator. Please make sure to use a valid mathematical operator, and tye again!');  
    }
}

console.log(perform_calculation('/', 2, 4));