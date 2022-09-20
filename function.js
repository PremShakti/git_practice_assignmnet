var prime = 13;
var count=0;
for(var a =1; a<=prime; a++){
    if(a%prime==0){
        count++
    }
    
}
if(count==2){
    console.log("prime");
}else {console.log("not a prime ");
}