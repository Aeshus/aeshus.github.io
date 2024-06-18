/* IMPORTANT VALUES

This section contains a list of all variables predefined for you to use (that you will need)

The CSS ids you will work with are:

1. bubbleCounter -- the container for the counter text for bubble sort
2. quickCounter  -- the container for the counter text for quick sort

*/

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES BELOW HERE /////////////////////
///////////////////////////////////////////////////////////////////////

// TODO 2: Implement bubbleSort

async function bubbleSort(lst) {
	for (let i = 0; i < lst.length - 1; i++) {
		for (let j = lst.length - 1; j > i; j--) {
			if (lst[j].value < lst[j - 1].value){
				swap(lst, j, j - 1)

				updateCounter(bubbleCounter);
				await sleep();
			}
		}
	}
}

// TODO 3: Implement quickSort
async function quickSort(array, left, right){
	if ((right - left) > 0) {
		let index = await partition(array, left, right);

		if (left < (index-1))
			await quickSort(array, left, index - 1);
		if (index < right)
			await quickSort(array, index, right);
	}
}

// TODOs 4 & 5: Implement partition
async function partition(array, left, right) {
	// Taking the average should not be the pivot.
	// Rather, it should be the median of the first, middle, and last values...
	let pivot = array[Math.floor((right + left)/2)].value;

	while (left < right) {
		
		while (array[left].value < pivot){
		left++;
		}

		while (array[right].value > pivot){
			right--;
		}

		if (left < right) {
			swap(array, left, right);
			updateCounter(quickCounter);
		}
		await sleep();
	}

	return left + 1;
}


// TODO 1: Implement swap
function swap(lst, i, j){
	let tmp = lst[j];
	lst[j] = lst[i];
	lst[i] = tmp;
	console.log("Swapping " + lst[i].value + " and " + lst[j].value);
	drawSwap(lst, i, j);
}


///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES ABOVE HERE /////////////////////
///////////////////////////////////////////////////////////////////////

//////////////////////////// HELPER FUNCTIONS /////////////////////////

// this function makes the program pause by SLEEP_AMOUNT milliseconds whenever it is called
function sleep(){
    return new Promise(resolve => setTimeout(resolve, SLEEP_AMOUNT));
}

// This function draws the swap on the screen
function drawSwap(array, i, j){
    let element1 = array[i];
    let element2 = array[j];

    let temp = parseFloat($(element1.id).css("top")) + "px";

    $(element1.id).css("top", parseFloat($(element2.id).css("top")) + "px");
    $(element2.id).css("top", temp);
}

// This function updates the specified counter
function updateCounter(counter){
    $(counter).text("Move Count: " + (parseFloat($(counter).text().replace(/^\D+/g, '')) + 1));
}
