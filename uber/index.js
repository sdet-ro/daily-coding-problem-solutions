//Given an givenArray of integers, return a new givenArray such that
//each element at index i of the new givenArray is the product of all the numbers in the original givenArray except the one at i.
//follow up. what if you can't use division

function work(givenArray) {
    console.log('initial givenArray length: ' + givenArray.length);
    const clonedArray = givenArray.slice(0);

    for (let i = 0; i < clonedArray.length; i++) {
        function multiply(array) {
            var sum = 1;
            for (var j = 0; j < array.length; j++) {
                sum = sum * array[j];
            }
            return sum;
        }

        let elementsIndex = clonedArray.indexOf(clonedArray[i]); //get each element index.
        console.log('elementsIndex: ' + elementsIndex);

        let copyArrayStorage= [];

        let product = multiply(givenArray);
        // console.log(product);
        let remove = clonedArray.splice( clonedArray.indexOf(clonedArray[i]), 1 );
        console.log(remove);
// Find the index position of "foo," then remove one element from that position

        clonedArray.splice( 1, 0, elementsIndex);
        // clonedArray.splice(clonedArray.indexOf(i))
        console.log(givenArray);
        // for (let j = 0; j < givenArray.length; j++) {
        //
        //
        // }
        console.log('This was run: ' + parseInt(i + 1)); //added 1 so we could see human parse

        // givenArray.forEach(function (item, index) {
        //     console.log('in foreach')
        //     if (index === i) {
        //         // let newd = givenArray.splice( copyArray.indexOf(item), 1 );
        //         // console.log('newd'+newd);
        //         let copyArrayrray;
        //         console.log('item:' + item);
        //     }
        // });
    }

    function getResult(a, b) {
        return a * b;
    }



    //eg 3 2 1  //0 = i => 2 * 1
    //eg 3 2 1 //1 = i => 3 * 1
    //eg 3 2 1 //2 = i => 3 * 2
}

// work([1, 2, 3, 4, 5]); //returns[120, 60, 40, 30, 24]
work([3, 2, 1]); //returns[2, 3, 6]