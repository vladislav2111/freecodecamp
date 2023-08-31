function mutation(arr) {
	return arr[1].toLowerCase().split('').every(i=>arr[0].toLowerCase().split('').indexOf(i)>=0);
 }
 
console.log( mutation(["hello", "hey"]));