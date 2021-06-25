html {
    height: 100%;
  }
  
  body {
    margin: 0;
    height: 100%;
    font-family: "Open Sans";
  }
  
  .clicker {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to top, #fdf6e3, rgb(80, 194, 3));
    height: 50%;
  }
  
  .buyables {
    background: #fdf6e3;
    height: 50%;
    overflow: auto;
  }
  
  .clicker {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .clicker__button-area {
    font-size: 24px;
    text-align: center;
  
    background: #fdf6e3;
    border-radius: 8px;
    opacity: .8;
    padding: 30px;
  }
  
  .clicker__button{
    background-image: url("https://static.wikia.nocookie.net/minecraft/images/d/d4/Stone.png");
    background-size: cover;
    height: 200px;
    width: 200px;
    background-color: #fdf6e3;
    border: none;
    outline: none;
    overflow: hidden;
    cursor: url("http://chloecodes.space/strg/Ruby_Pickaxe_(Level_1).png"), auto;
  }

  .clicker__button:active{
    animation-name: buttonclick2;
    animation-duration: 0.1s;
  }
  .buyable {
    display: flex;
    padding: 10px 20px;
    margin: 10px;
    border: 2px solid #002b36;
    border-radius: 8px;
    width: 600px;
    height: 75px;
    background-image: linear-gradient(to left, #fdf6e3b2, rgb(187, 255, 0));
  }
  
  .buyable__amount {
    align-self: center;
    font-size: 24px;
  }
  
  .buyable__text {
    flex-grow: 1;
    margin: 0 20px;
  }
  
  .buyable__title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  
  .buyable__title-text {
    font-weight: bold;
  }
  
  .buyable__effect {
    font-size: 12px;
  }
  
  .buyable__button {
    align-self: center;
    background: none;
    border: 2px solid #859900;
    border-radius: 8px;
    color: #859900;
    font-size: 20px;
    height: 30px;
    width: 80px;
    transition: all .35s;
  }
  
  .buyable__button:hover{
    background-color: #859900;
    color: aquamarine;
    cursor: pointer;
    box-shadow: 5px 5px;
  }

  .buyable__button:active{
    background-color: #989898;
    color: greenyellow;
    animation-name: buttonclick;
    animation-duration: 0.1s;
  }

  .upgrades {
    background: #fdf6e3;
    height: 50%;
    overflow: auto;
  }

  .upgrade {
    display: flex;
    padding: 10px 20px;
    margin: 10px;
    border: 2px solid #002b36;
    border-radius: 8px;
    width: 600px;
    height: 75px;
    float: right;
  }

  .option {
    height: 40px;
    width: 60px;
  
    background-color: #fdf6e3;
    border: 2px solid #859900;
    border-radius: 8px;
    color: #859900;
    outline: none;
    float: left;
    cursor: pointer;
  }

  .optionbar {
    display: flex;
    background-color: rgb(80, 194, 3);
  }

  /* Popup container */
.popup {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

/* The actual popup (appears on top) */
.popup .popuptext {
  visibility: hidden;
  width: 160px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -80px;
}

/* Popup arrow */
.popup .popuptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* Toggle this class when clicking on the popup container (hide and show the popup) */
.popup .show {
  visibility: visible;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s
}

/* Add animation (fade in the popup) */
@-webkit-keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
}

@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity:1 ;}
}

@keyframes buttonclick {
  0%{transform: scale(1, 1);}
  50%{transform: scale(0.8, 0.8);}
  100%{transform: scale(1, 1);}
} 
@keyframes buttonclick2 {
  0%{transform: scale(1, 1);}
  50%{transform: scale(0.95, 0.95);}
  100%{transform: scale(1, 1);}
} 