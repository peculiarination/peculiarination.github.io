localStorage = window.localStorage;



int = parseInt
tempData = {
    blocks: 0,
    blocksPerClick: 1,
    blocksPerSecond: 0,
    pickaxes:0,
    pickaxeCost:10,
    miners:0,
    minerCost:100,
    drills:0,
    drillCost:500,
    tractors:0,
    tractorCost:2000
  }


for (var key in tempData) {
  if (!localStorage.getItem(key)){
   var value = String(key)
   localStorage.setItem(key, tempData[value])
   console.log(key + ' ' + tempData.key)
  }
}


gameData = {
  
    blocks: int(localStorage.getItem('blocks')),
    blocksPerClick: int(localStorage.getItem('blocksPerClick')),
    blocksPerSecond: int(localStorage.getItem('blocksPerSecond')),
    pickaxes:int(localStorage.getItem('pickaxes')),
    pickaxeCost:int(localStorage.getItem('pickaxeCost')),
    miners:int(localStorage.getItem('miners')),
    minerCost:int(localStorage.getItem('minerCost')),
    drills:int(localStorage.getItem('drills')),
    drillCost:int(localStorage.getItem('drillCost')),
    tractors:int(localStorage.getItem('tractors')),
    tractorCost:int(localStorage.getItem('tractorCost'))
  
}

  window.mineBlock = mineBlock 
  window.buyPickaxe = buyPickaxe
  window.buyMiner = buyMiner 
  window.buyDrill = buyDrill   
  window.buyTractor = buyTractor

  function mineBlock() {
    gameData.blocks += (gameData.blocksPerClick)
    document.getElementById("blocksMined").innerHTML = gameData.blocks + " blocks"
  }
  
  function buyPickaxe(){
    if (gameData.blocks >= gameData.pickaxeCost){
        gameData.blocks -= gameData.pickaxeCost
        gameData.blocksPerClick += 1
        gameData.pickaxes += 1
        gameData.pickaxeCost += Math.floor((gameData.pickaxeCost) / 5)
        document.getElementById("pickaxes").innerHTML = String(gameData.pickaxes)
        document.getElementById("pickaxeCost").innerHTML = String(gameData.pickaxeCost) + " Blocks"
    }
  }

  function buyMiner(){
    if (gameData.blocks >= gameData.minerCost){
        gameData.blocks -= gameData.minerCost
        gameData.blocksPerSecond += 1
        gameData.miners += 1
        gameData.minerCost += Math.floor((gameData.minerCost) / 10)
        document.getElementById("miners").innerHTML = String(gameData.miners)
        document.getElementById("minerCost").innerHTML = String(gameData.minerCost) + " Blocks"
    }
  }

  function buyDrill(){
    if (gameData.blocks >= gameData.drillCost){
        gameData.blocks -= gameData.drillCost
        gameData.blocksPerSecond += 5
        gameData.drills += 1
        gameData.drillCost += Math.floor((gameData.drillCost) / 15)
        document.getElementById("drills").innerHTML = String(gameData.drills)
        document.getElementById("drillCost").innerHTML = String(gameData.drillCost) + " Blocks"
    }
  }

  function buyTractor(){
    if (gameData.blocks >= gameData.tractorCost){
        gameData.blocks -= gameData.tractorCost
        gameData.blocksPerSecond += 20
        gameData.blocksPerClick += 3
        gameData.tractors += 1
        gameData.tractorCost += Math.floor((gameData.tractorCost) / 20)
        document.getElementById("tractors").innerHTML = String(gameData.tractors)
        document.getElementById("tractorCost").innerHTML = String(gameData.tractorCost) + " Blocks"
    }
  }

  function reset(){
    localStorage.clear()
    window.location.reload()
  }

  function save(){
    for (var item in gameData){
      if (!localStorage.item){
       localStorage.setItem(item, (gameData[item]))
      }
    }
    
  }


  var mainGameLoop = window.setInterval(function() {
    gameData.blocks += gameData.blocksPerSecond
    document.getElementById("blocksMined").innerHTML = gameData.blocks + " blocks"
    document.getElementById("dps").innerHTML = "Blocks per Second: " + gameData.blocksPerSecond
    document.getElementById("dpc").innerHTML = "Blocks per Click: " + gameData.blocksPerClick
    document.getElementById("pickaxes").innerHTML = String(gameData.pickaxes)
    document.getElementById("pickaxeCost").innerHTML = String(gameData.pickaxeCost) + " Blocks"
    document.getElementById("miners").innerHTML = String(gameData.miners)
    document.getElementById("minerCost").innerHTML = String(gameData.minerCost) + " Blocks"
    document.getElementById("drills").innerHTML = String(gameData.drills)
    document.getElementById("drillCost").innerHTML = String(gameData.drillCost) + " Blocks"
    document.getElementById("tractors").innerHTML = String(gameData.tractors)
    document.getElementById("tractorCost").innerHTML = String(gameData.tractorCost) + " Blocks"
  }, 1000)

  var saveGameLoop = window.setInterval(function() {
    for (var item in gameData){
      if (!localStorage.item){
       localStorage.setItem(item, (gameData[item]))
      }
    }
  }, 10000)



  

