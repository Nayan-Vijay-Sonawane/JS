// Performance Improvement
// The method is a part of time related performance information

// code 1

const t1 = performance.now();
for(let i=0; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = "This is the para: " + i;
    document.body.appendChild(para);
}

const t2 = performance.now();

console.log("total time taken by code 1: " + (t2-t1));

// code 2

const t3 = performance.now();

let mydiv = document.getElementById('div');

for(let i=0; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = "This is the para: " + i;
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);

const t4 = performance.now();

console.log("total time taken by code 2: " + (t4-t3));