function bounceoff(gameobj1,gameobj2){
    if (gameobj1.x - gameobj2.x < gameobj2.width/2 + gameobj1.width/2
      && gameobj2.x - gameobj1.x < gameobj2.width/2 + gameobj1.width/2) {
        gameobj1.velocityX = gameobj1.velocityX * (-1);
        gameobj2.velocityX = gameobj2.velocityX * (-1);
    } 
   if (gameobj1.y - gameobj2.y < gameobj2.height/2 + gameobj1.height/2
     && gameobj2.y - gameobj1.y < gameobj2.height/2 + gameobj1.height/2){
      gameobj1.velocityY = gameobj1.velocityY * (-1);
      gameobj2.velocityY = gameobj2.velocityY * (-1);
    }   
  }

  function isTouching(gameobj1,gameobj2){
    if (gameobj1.x - gameobj2.x < gameobj2.width/2 + gameobj1.width/2
        && gameobj2.x - gameobj1.x < gameobj2.width/2 + gameobj1.width/2
        && gameobj1.y - gameobj2.y < gameobj2.height/2 + gameobj1.height/2
        && gameobj2.y - gameobj1.y < gameobj2.height/2 + gameobj1.height/2) {
            gameobj1.shapeColor = "red";
            gameobj2.shapeColor = "red";
    }
    else {
        gameobj1.shapeColor = "green";
        gameobj2.shapeColor = "green";
    }
  }