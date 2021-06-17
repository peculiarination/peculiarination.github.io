localStorage = window.localStorage;

int = parseInt
gameData = {
    blocks: 0,
    blocksPerClick: 1,
    blocksPerSecond: 0,
    pickaxes:0,
    pickaxeCost:10,
    miners:0,
    minerCost:100,
    drills:0,
    drillCost:500
  }

  window.mineBlock = mineBlock 
  window.buyPickaxe = buyPickaxe
  window.buyMiner = buyMiner 
  window.buyDrill = buyDrill   

  function mineBlock() {
    gameData.blocks += (gameData.blocksPerClick)
    document.getElementById("blocksMined").innerHTML = gameData.blocks + " blocks"
  }
  
  function buyPickaxe(){
    if (gameData.blocks >= gameData.pickaxeCost){
        gameData.blocks -= gameData.pickaxeCost
        gameData.blocksPerClick += 1
        gameData.pickaxes += 1
        gameData.pickaxeCost += Math.floor((gameData.pickaxeCost * 2) / 3)
        document.getElementById("pickaxes").innerHTML = String(gameData.pickaxes)
        document.getElementById("pickaxeCost").innerHTML = String(gameData.pickaxeCost) + " Blocks"
    }
  }

  function buyMiner(){
    if (gameData.blocks >= gameData.minerCost){
        gameData.blocks -= gameData.minerCost
        gameData.blocksPerSecond += 1
        gameData.miners += 1
        gameData.minerCost += Math.floor((gameData.minerCost) / 2)
        document.getElementById("miners").innerHTML = String(gameData.miners)
        document.getElementById("minerCost").innerHTML = String(gameData.minerCost) + " Blocks"
    }
  }

  function buyDrill(){
    if (gameData.blocks >= gameData.drillCost){
        gameData.blocks -= gameData.drillCost
        gameData.blocksPerSecond += 5
        gameData.drills += 1
        gameData.drillCost += Math.floor((gameData.drillCost) / 2)
        document.getElementById("drills").innerHTML = String(gameData.drills)
        document.getElementById("drillCost").innerHTML = String(gameData.drillCost) + " Blocks"
    }
  }

  var mainGameLoop = window.setInterval(function() {
    gameData.blocks += gameData.blocksPerSecond
    document.getElementById("blocksMined").innerHTML = gameData.blocks + " blocks"
  }, 1000)



  

