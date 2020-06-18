var p, r, t, si;


function calc(f) {

    // p=parseInt(f.amountTo.value);
    p = parseFloat(f.amountTo.value.replace(/\D/g, ''))
    r = parseFloat(10 / 365);

    //number of days 
    var date1 = new Date();
    var date2 = new Date(f.daysNum.value)

    // To calculate the time difference of two dates 
    var Difference_In_Time = date2.getTime() - date1.getTime();

    
    // To calculate the no. of days between two dates 
    t = Difference_In_Time / (1000 * 3600 * 24);



    //t=parseInt(f.daysNum.value); //number of days
    si = (p * r * t) / 100;
    let daily = parseFloat(si / 365);
    let monthly = parseFloat(si / 12)

    document.getElementById("exp").innerHTML = "N" + (si + p).toFixed(2);
    document.getElementById("daily").innerHTML = "N" + daily.toFixed(2);
    document.getElementById("monthly").innerHTML = "N" + monthly.toFixed(2);
    document.getElementById("dd").innerHTML = f.daysNum.value;


}

//
var fnf = document.getElementById("amountTo");
fnf.addEventListener('keyup', function (evt) {
    var n = parseInt(this.value.replace(/\D/g, ''), 10);
    fnf.value = n.toLocaleString();
}, false);
