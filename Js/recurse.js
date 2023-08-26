let count = 0;
function recurse() {if (count < 9075) {
count++;
console.log(count);
recurse();
}}

recurse();