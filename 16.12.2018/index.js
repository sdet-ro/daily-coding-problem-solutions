//Given an givenArray of integers, return a new givenArray such that
//each element at index i of the new givenArray is the product of all the numbers in the original givenArray except the one at i.
//follow up. what if you can't use division

function work(givenArray) {
    console.log('initial givenArray length: ' + givenArray.length);
    //  var i = givenArray.length;
    //  while (i--) {
    // console.log('in while i');
    //  }

    for (let i = 0; i < givenArray.length; i++) {
        const copyArray = givenArray;

        function multiply(array) {
            var sum = 1;
            for (var j = 0; j < array.length; j++) {
                sum = sum * array[j];
            }
            return sum;
        }

        console.log('for run: ' + parseInt(i + 1)); //added 1 so we could see human parse
        let elementsIndex = copyArray.indexOf(copyArray[i]); //get each element index.
        console.log('elementsIndex: ' + elementsIndex);

        let copyArrayStorage= [];

        let product = multiply(givenArray);
        let arraysToStoreIn = [];
        for (let j = 0; j < givenArray.length; j++) {
            copyArray.splice( 1, 0, givenArray[i]);
            copyArray.splice(copyArray.indexOf(i))
            console.log(givenArray);
        }
        givenArray.forEach(function (item, index) {
            console.log('in foreach')
            if (index === i) {
                // let newd = givenArray.splice( copyArray.indexOf(item), 1 );
                // console.log('newd'+newd);
                let copyArrayrray;
                console.log('item:' + item);
            }
        });
        // console.log('product:'+product);

        console.log();


        // let months = ['Jan', 'Feb', 'March', 'April', 'June'];
        // months.splice(4, 1, 'May');
        // // replaces 1 element at 4th index

    }

    function getResult(a, b) {
        return a * b;
    }

    //


    //eg 3 2 1  //0 = i => 2 * 1
    //eg 3 2 1 //1 = i => 3 * 1
    //eg 3 2 1 //2 = i => 3 * 2
}

// work([1, 2, 3, 4, 5]); //returns[120, 60, 40, 30, 24]
work([3, 2, 1]); //returns[2, 3, 6]