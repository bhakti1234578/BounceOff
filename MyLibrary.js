function bounceOff(movingRect,fixedRect){
    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
    }
  }

  
    function isTouching(x1,y1){ 
        if (x1.x - y1.x < y1.width/2 + x1.width/2 
            && y1.x - x1.x < y1.width/2 + x1.width/2 
            && x1.y - y1.y < y1.height/2 +x1.height/2 
            && y1.y - x1.y < y1.height/2 + x1.height/2) 
            { 
                return true; } 
           
         else 
         { 
             return false; 
        
        } 
        }



  