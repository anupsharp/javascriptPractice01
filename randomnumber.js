function randNumber(min,max)
{
    const randnumber =  Math.floor(Math.random()* (max-min+1)) +  min;
    console.log(`Random number between the ${min} and ${max} is ${randnumber}`);   
}


randNumber(1,10);   // Random number between the 1 and 10 is 5