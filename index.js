localStorage = window.localStorage;



int = parseInt
tempData = {
    blocks: 0,
    highestBlocks: 0,
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
    highestBlocks: int(localStorage.getItem('highestBlocks')),
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
        gameData.pickaxeCost += Math.floor((gameData.pickaxeCost) / 10)
        document.getElementById("pickaxes").innerHTML = String(gameData.pickaxes)
        document.getElementById("pickaxeCost").innerHTML = String(gameData.pickaxeCost) + " Blocks"
    }
  }

  function buyMiner(){
    if (gameData.blocks >= gameData.minerCost){
        gameData.blocks -= gameData.minerCost
        gameData.blocksPerSecond += 1
        gameData.miners += 1
        gameData.minerCost += Math.floor((gameData.minerCost) / 20)
        document.getElementById("miners").innerHTML = String(gameData.miners)
        document.getElementById("minerCost").innerHTML = String(gameData.minerCost) + " Blocks"
    }
  }

  function buyDrill(){
    if (gameData.blocks >= gameData.drillCost){
        gameData.blocks -= gameData.drillCost
        gameData.blocksPerSecond += 5
        gameData.drills += 1
        gameData.drillCost += Math.floor((gameData.drillCost) / 30)
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
        gameData.tractorCost += Math.floor((gameData.tractorCost) / 40)
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
    if (gameData.blocks > gameData.highestBlocks){
      gameData.highestBlocks = gameData.blocks
    }
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
    if (gameData.highestBlocks >= 1000000000000){
      return document.getElementById('clicker__button').style.backgroundImage = "url('https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/0b/Block_of_Emerald_JE4_BE3.png')"
    }
    if (gameData.highestBlocks >= 100000000000){
      return document.getElementById('clicker__button').style.backgroundImage = "url('https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/54/Emerald_Ore_JE3_BE2.png')"
    }
    if (gameData.highestBlocks >= 10000000000){
      return document.getElementById('clicker__button').style.backgroundImage = "url('https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/6b/Block_of_Diamond_JE6_BE3.png')"
    }
    if (gameData.highestBlocks >= 1000000000){
      return document.getElementById('clicker__button').style.backgroundImage = "url('https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b5/Diamond_Ore_JE3_BE3.png')"
    }
    if (gameData.highestBlocks >= 100000000){
      return document.getElementById('clicker__button').style.backgroundImage = "url('https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/72/Block_of_Gold_JE6_BE3.png')"
    }
    if (gameData.highestBlocks >= 10000000){
      return document.getElementById('clicker__button').style.backgroundImage = "url('https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b9/Gold_Ore_JE3_BE2.png')"
    }
    if (gameData.highestBlocks >= 1000000){
      return document.getElementById('clicker__button').style.backgroundImage = "url('https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/79/Block_of_Iron_JE3_BE2.png')"
    }
    if (gameData.highestBlocks >= 100000){
      return document.getElementById('clicker__button').style.backgroundImage = "url('https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/0c/Iron_Ore_JE3.png')"
    }
    if (gameData.highestBlocks >= 10000){
      return document.getElementById('clicker__button').style.backgroundImage = "url('https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/cc/Block_of_Coal_JE3_BE2.png')"
    }
    if(gameData.highestBlocks >= 1000){
      return document.getElementById('clicker__button').style.backgroundImage = "url('https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/48/Coal_Ore_JE5_BE4.png')"
    }
    return document.getElementById('clicker__button').style.backgroundImage = "url('stone.png')"
  }, 1000)

  var saveGameLoop = window.setInterval(function() {
    for (var item in gameData){
      if (!localStorage.item){
       localStorage.setItem(item, (gameData[item]))
      }
    }
  }, 10000)






  

