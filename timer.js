function showTime(){
    const date= new Date();
    return date.getHours()+"Hrs: "+date.getMinutes()+"Mins: "+date.getSeconds()+"Secs";
}

function showSessionExpire(){
    console.log("Activity-B: Your Session Expireed at "+showTime());
}

console.log("Activity -A : Trigerring Activity-B at "+showTime());
setTimeout(showSessionExpire,5000);
console.log("Activity -A : Trigerring Activity-B at "+showTime()+"will Exeute"+
"after 5 Seconds");