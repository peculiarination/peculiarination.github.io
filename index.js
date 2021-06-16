document.getElementById("goldMined").innerHTML = "Loading!"
localStorage = window.localStorage;


int = parseInt
if (!localStorage.getItem('gold')){
    localStorage.setItem('gold', 0) 
    localStorage.setItem('goldPerClick', 1)
    localStorage.setItem('goldPerClickCost', 10)
}

var gameData = {
    gold: int(localStorage.getItem('gold')),
    goldPerClick: int(localStorage.getItem('goldPerClick')),
    goldPerClickCost: int(localStorage.getItem('goldPerClickCost'))
  }

  window.mineGold = mineGold
  window.buyGoldPerClick = buyGoldPerClick
  
  function mineGold() {
    gameData.gold += (gameData.goldPerClick)
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