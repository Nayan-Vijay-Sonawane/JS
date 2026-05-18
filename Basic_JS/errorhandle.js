// Error Handling 
//  try-catch
// If try block may have errors then catch block is executed
function fullName(value){
    if(typeof value !== String){
        throw new Error("Its not a string");
    }
    return value;
};

try{
    console.log(fullName("Naan"));
}
catch(e){
    console.log(e.message);
}