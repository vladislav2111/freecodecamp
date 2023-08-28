function bouncer(arr) {
	let res = [...arr];
	
	return res.filter(i=>!!i===true);
 }
 
console.log( bouncer([7, "ate", "", false, 9]));