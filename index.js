localStorage = window.localStorage;

if (localStorage.getItem('newUser') == 'null'){
    localStorage.setItem('newUser', 1) 
    localStorage.setItem('gold', 0) 
    localStorage.setItem('goldPerClick', 1)
    localStorage.setItem('goldPerClickCost', 10)
}

var gameData = {
    gold: localStorage.getItem('gold'),
    goldPerClick: localStorage.getItem('goldPerClick'),
    goldPerClickCost: localStorage.getItem('goldPerClickCost')
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
    localStorage.setItem('gold', gameData.gold) 
    localStorage.setItem('goldPerClick', gameData.goldPerClick)
    localStorage.setItem('goldPerClickCost', gameData.goldPerClickCost)

  }, 1000)