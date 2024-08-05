var clock=document.querySelector(".clock")

function runclock(){
    var currentTime=new Date()
    var hrs=currentTime.getHours()
    var mins=currentTime.getMinutes()
    var sec=currentTime.getSeconds()
    var noon="AM"
    if(hrs>12){
        hrs=hrs-12
        noon="PM"
    }
    else if(hrs==12)
    {
        hrs=12
        noon="AM"
    }
    hrs=hrs<10?'0'+hrs:hrs
    mins=mins<10?'0'+mins:mins
    sec=sec<10?'0'+sec:sec
    clock.innerHTML=`${hrs} : ${mins} : ${sec} ${noon}`
}
setInterval(runclock,1000)