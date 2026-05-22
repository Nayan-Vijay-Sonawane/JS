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