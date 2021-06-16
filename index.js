var data = {
    gold: 1,
    gps: 1
}

function farmPecu(){
    data.gold += data.gps
    document.getElementById("gold").innerHTML = data.gold + " Farmed"
}

function upPickaxe(){
    data.gps += 1
    document.getElementById("pickaxe_upgrade").innerHTML = "Pickaxe Upgrade - " + (data.gps * 10) + 10
}