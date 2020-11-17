
function bounceOff(a,b)
{
  if (a.x - b.x < a.width/2 + b.width/2
    && a.x - b.x < a.width/2 + a.width/2) {
  a.velocityX = a.velocityX * (-1);
  b.velocityX = b.velocityX * (-1);
}
if (a.y - b.y < a.height/2 + b.height/2
  && b.y - a.y < a.height/2 + b.height/2){
  b.velocityY = b.velocityY * (-1);
  a.velocityY = a.velocityY * (-1);
}

}


function isTouching(obj1,obj2){

    if (obj1.x - obj2.x < obj1.width/2 +obj2.width/2
      && obj2.x - obj1.x < obj1.width/2 + obj2.width/2
      && obj1.y - obj2.y < obj1.height/2 + obj2.height/2
      && obj2.y - obj1.y < obj1.height/2 + obj2.height/2) {
        return true;
  } 
    else
   {
    return false;
  }
}

