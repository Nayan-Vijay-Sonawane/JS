// Palindrome

function isPal(n){
    n = n.toLowerCase();
    let rev = "";
    for(let i = s.length-1 ; i >= 0; i--){
        rev = rev + n.charAt(i);
    }
    return n === rev;

}

const s = "Level";

if(isPal(s)){
    console.log(s + " is palindrome");
}
else{
    console.log(s + " is not a palindrome");
}
