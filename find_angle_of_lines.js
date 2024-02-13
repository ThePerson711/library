function find_angle_of_lines(p0,p1,c) {
    var p0c = Math.sqrt(Math.pow(c.x-p0.x,2)+
                        Math.pow(c.y-p0.y,2));  
    var p1c = Math.sqrt(Math.pow(c.x-p1.x,2)+
                        Math.pow(c.y-p1.y,2));
    var p0p1 = Math.sqrt(Math.pow(p1.x-p0.x,2)+
                         Math.pow(p1.y-p0.y,2));
    var angle = Math.acos((p1c*p1c+p0c*p0c-p0p1*p0p1)/(2*p1c*p0c));
    return angle * (180 / Math.PI);
  }
  
  console.log("angle",
  find_angle_of_lines(
      {x: 10, y: 0},
      {x: 0, y: 10},
      {x: 10, y: 10}
    )
  );
  
