var Data = {
    gold: 0,
    gps: 1
}

function farmPecu(){
    Data.gold += Data.gps
    document.getElementById("gold").innerHTML = Data.gold + " Pecu Mined"

}