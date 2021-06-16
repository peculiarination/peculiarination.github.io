playerdata = window.localStorage;

var gameData = {
    gold: 0,
    goldPerClick: 1,
    goldPerClickCost: 10
  }

  window.mineGold = mineGold
  window.buyGoldPerClick = buyGoldPerClick
  
  function mineGold() {
    gameData.gold += gameData.goldPerClick
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
  }
  
  function buyGoldPerClick() {
    if (gameData.gold >= gameData.goldPerClickCost) {
      gameData.gold -= gameData.goldPerClickCost
      gameData.goldPerClick += 1
      gameData.goldPerClickCost *= 2
      document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
      document.getElementById("perClickUpgrade").innerHTML = "Upgrade Autominer (Currently Level " + gameData.goldPerClick + ") Cost: " + gameData.goldPerClickCost + " Gold"
    }
  }
  
  var mainGameLoop = window.setInterval(function() {
    mineGold()
  }, 1000)