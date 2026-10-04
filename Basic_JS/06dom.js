const arr = [1,2,3,4,5,6,7,8,9,0];

const ans = arr.reduce((accumulator, val) => {
    return accumulator + val;
}, 0)

console.log(ans);