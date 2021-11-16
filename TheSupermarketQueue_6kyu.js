function queueTime(customers) {
    
    let sumTime;
    for(let i=0; i<=customers.length; i++){
        
         let sumTime += customers[i];
       /*  if(n=1){
           
        } 
        else{
            sumTime += customers[i]/n;
        } */
    }
    return sumTime
}
 let der = queueTime([1,2,3,4])
 console.log(der)