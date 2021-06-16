var data = {
    gold: 1,
    gps: 1
}

function farmPecu(){
    data.gold += data.gps
    document.getElementById("gold").innerHTML = data.gold + " Farmed"
}