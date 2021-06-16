var Data = {
    gold: 0,
    gps: 1
}

function farmPecu(){
    Data.gold += Data.gps
    document.getElementById("goldMined").innerHTML = Data.gold + " Pecu Mined"

}