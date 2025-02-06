function findNfact(n){
    if(n==0){
        return 1;
    }
    console.log(n,n-1);
    return n*findNfact(n-1);    
}

n = 4;
console.log(`factorial of ${n} is :` +findNfact(n));