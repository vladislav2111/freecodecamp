function countdown(n) {
	if (n<1) {
		return [];
	} 
	return [n].concat(countdown(n-1));
}
console.log(countdown(5));