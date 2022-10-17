const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
	--discard-next excludes the next element of the array from the transformed array.
	--discard-prev excludes the previous element of the array from the transformed array.
	--double-next duplicates the next element of the array in the transformed array.
	--double-prev duplicates the previous element of the array in the transformed array.
 */
function transform(arr) {
  if ( !(arr instanceof Array) ) throw new Error(`'arr' parameter must be an instance of the Array!`);

  arr = [...arr];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == undefined) continue;

    if (arr[i] == "--discard-next") {
      arr[i] = undefined;
      arr[i+1] = undefined;
      i++;
    }

    if (arr[i] == "--discard-prev") {
      arr[i] = undefined;
      if (i-1 < 0) continue;
      arr[i-1] = undefined;
    }

    if (arr[i] == "--double-next") {
      arr[i] = undefined;
      if (i+1 < arr.length) {
        arr.splice(i+1, 0, arr[i+1]);
        i += 2;
      }
    }

    if (arr[i] == "--double-prev") { 
      arr[i] = undefined;
      if (i-1 < 0) continue;
      arr.splice(i-1, 0, arr[i-1]);
      i++;
    }
  }
  return arr.filter(item => item != undefined);
}

module.exports = {
  transform
};

/*
		if (arr[i] == "--discard-next") {
			i =+ 2;
			continue;
		}

		if (arr[i] == "--double-next") {
			if (i+1 < arr.length) {
		  		newArray.push(arr[i+1]);
		  		newArray.push(arr[i+1]);
		  		i += 2;
		  	} else {
		  		i += 1;
		  	}
		  	continue;	
		}

		if (arr[i] == "--discard-prev") {
			if (i-2 >= 0 && arr[i-2] != "--discard-next") {
		  		newArray.pop();
		  	}
		  	i += 1;
		  	continue;	
		}

		if (arr[i] == "--double-prev") {
		  	if (i-1 >= 0) {
		  		newArray.push(arr[i-1]);	
		  	}
		  	i += 1;
		  	continue;
		}

		newArray.push(arr[i]);
		i += 1;

-------------------------------------------------
		switch (arr[i]) {
		  case "--discard-next":
		  	i =+ 2;
		    break;
		  case "--discard-prev":
		  	if (i-2 >= 0 && arr[i-2] != "--discard-next") {
		  		newArray.pop();
		  	}
		    break;
		  case "--double-next":
		  	if (i+1 < arr.length) {
		  		newArray.push(arr[i+1], arr[i+1]);
		  	}
		  	i += 2;
		    break;
		  case "--double-prev":
		  	if (i-1 >= 0) {
		  		newArray.push(arr[i-1]);	
		  	}
		  	i += 1;
		    break;
		  default:
		    newArray.push(arr[i]);
		    i += 1;
		}
		*/