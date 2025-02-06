function FIBN(n){
    if(n==0){
        
        return 0;
    }
    if(n==1){
        return 1;
    }
    console.log(n,n-1);
    return FIBN(n-1)+FIBN(n-2);

}


console.log(FIBN(10));