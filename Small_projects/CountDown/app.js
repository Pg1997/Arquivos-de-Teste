var new_year = new Date(2022, 0, 1, 0, 0, 0, 0);
var today = new Date();

remain_time();
var  a = setInterval(remain_time, 1000);



function remain_time(){
    today = new Date();
    var seconds = Math.trunc((new_year - today) / 1000);     
    var days = Math.trunc(seconds % 86400);
    var hours = Math.trunc(days % 3600);
    var minutes = Math.trunc(hours % 60);
    // var seconds = Math.trunc(minutes % 86400);

    document.getElementById('day').innerHTML = Math.trunc(seconds / 86400);
    document.getElementById('hour').innerHTML = Math.trunc(days / 3600);
    document.getElementById('minute').innerHTML = Math.trunc(hours / 60);
    document.getElementById('second').innerHTML = Math.trunc(minutes);
}

