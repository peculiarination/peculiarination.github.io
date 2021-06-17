document.getElementById("goldMined").innerHTML = "Loading!"
localStorage = window.localStorage;


int = parseInt
if (!localStorage.getItem('gold')){
    localStorage.setItem('gold', 0) 
    localStorage.setItem('goldPerClick', 1)
    localStorage.setItem('goldPerClickCost', 10)
    localStorage.setItem('goldPerSecond', 1)
    localStorage.setItem('goldPerSecondCost', 10)
}



var gameData = {
    gold: int(localStorage.getItem('gold')),
    goldPerClick: int(localStorage.getItem('goldPerClick')),
    goldPerClickCost: int(localStorage.getItem('goldPerClickCost')),
    goldPerSecond: int(localStorage.getItem('goldPerSecond')),
    goldPerSecondCost: int(localStorage.getItem('goldPerSecondCost'))
  }

  window.mineGold = mineGold
  window.buyGoldPerSecond = buyGoldPerSecond
  window.reset = reset
  
  function mineGold() {
    gameData.gold += (gameData.goldPerClick)
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
  }
  
  function buyGoldPerSecond() {
    if (gameData.gold >= gameData.goldPerSecondCost) {
      gameData.gold -= gameData.goldPerSecondCost
      gameData.goldPerSecond *= 2
      gameData.goldPerSecondCost *= 2
      document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
      document.getElementById("perSecondUpgrade").innerHTML = "Upgrade Autominer (Currently Level " + gameData.goldPerSecond  + ") Cost: " + gameData.goldPerSecondCost + " Gold"
    }
  }

  function buyGoldPerClick() {
    if (gameData.gold >= gameData.goldPerClickCost) {
      gameData.gold -= gameData.goldPerClickCost
      gameData.goldPerClick *= 2
      gameData.goldPerClickCost += gameData.goldPerClickCost * 2
      document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
      document.getElementById("perSecondUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level " + gameData.goldPerClick + ") Cost: " + gameData.goldPerClickCost + " Gold"
    }
  }

  function reset(){
     gameData = {
        gold: 0,
        goldPerClick: 1,
        goldPerClickCost: 10,
        goldPerSecond: 1,
        goldPerSecondCost:10
      }
      localStorage.clear()
      if (!localStorage.getItem('gold')){
        localStorage.setItem('gold', 0) 
        localStorage.setItem('goldPerClick', 1)
        localStorage.setItem('goldPerClickCost', 10)
        localStorage.setItem('goldPerSecond', 1)
        localStorage.setItem('goldPerSecondCost', 10)
        }
        
      
  }
  
  var mainGameLoop = window.setInterval(function() {
    gameData.gold += (gameData.goldPerSecond)
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    localStorage.setItem('gold', gameData.gold) 
    localStorage.setItem('goldPerClick', gameData.goldPerClick)
    localStorage.setItem('goldPerClickCost', gameData.goldPerClickCost)
    localStorage.setItem('goldPerSecond', gameData.goldPerSecond)
    localStorage.setItem('goldPerSecondCost', gameData.goldPerSecondCost)
        

  }, 1000)

  

