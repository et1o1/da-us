let da
let us
document.getElementById("bt").onclick = function(){
    da = document.getElementById("tx").value
    da = Number(da)
    us = Math.max(da*0.00709219858)
    us = Number(us)
    document.getElementById("us").innerHTML = "MEOW: " + us
}