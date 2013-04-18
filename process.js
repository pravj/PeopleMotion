/*Hi there...nice to meet YOU specially HERE*/
/*will return mouse cordinates*/
      function mouseCord(event) 
      {
        return 
        {
          x: event.clientX,
          y: event.clientY
        };
      } 
/*will return 1 if x oy y is in range[a,b]*/
      function rangeX(a,x,b)
      {
        if(x>a && x<=b)
          {return 1;}
        else
          {return 0;}
      }
      function rangeY(a,y,b)
      {
        if(y>a && y<=b)
          {return 1;}
        else 
          {return 0;}
      }
/***********detected :)*************/
/*****activities on mousemove*******/
      document.addEventListener('mousemove', function(event) {
        /* page dimensions */ 
        var w = window.innerWidth;
        var h = window.innerHeight;
        /*******************/
        /*current co-ordinates*/
        var where = mouseCord(event); 
        var X = where.x;
        var Y = where.y;
        var current = 'Mouse Position: ' +X+','+Y;
/****to find the region and change accordingly***/
        var id = 1;
        for(id=1;id<=28;id++)  // as now only 28 images are there
        {var obj = $('img[name='+id+']');
/*left corner position of selected element*/
        var objCord = obj.offset(); 
        var objX = objCord.left;
        var objY = objCord.top;
        if((rangeX(objX,X,objX+86)==1) && (Y>=objY+100))/*bottom*/
        {
          obj.attr('src','http://www.ekshitij.com/media/images/output2/'+id+'/3.JPG');
        }
        else if((rangeX(objX+86,X,w)==1) && (rangeY(objY,Y,objY+100)==1))/*right*/
        {
          obj.attr('src','http://www.ekshitij.com/media/images/output2/'+id+'/5.JPG');
        }
        else if((rangeX(0,X,objX)==1) && (rangeY(objY,Y,objY+100)==1))/*left*/
        {
          obj.attr('src','http://www.ekshitij.com/media/images/output2/'+id+'/4.JPG');
        }
        else if((rangeX(objX,X,objX+86)==1) && (rangeY(0,Y,objY)==1))/*just upside*/
        {
          obj.attr('src','http://www.ekshitij.com/media/images/output2/'+id+'/2.JPG');
        }
        else if((rangeX(objX,X,objX+86)==1) && (rangeY(objY,Y,objY+100)==1))/*on image*/
        {
          obj.attr('src','http://www.ekshitij.com/media/images/output2/'+id+'/1.JPG');
        }
        else if((rangeX(objX+86,X,w)==1) && (rangeY(0,Y,objY)==1))/*right-up-corner*/
        {
          obj.attr('src','http://www.ekshitij.com/media/images/output2/'+id+'/6.JPG');
        }
        else if((rangeX(0,X,objX)==1) && (rangeY(0,Y,objY)==1))/*left-up-corner*/
        {
          obj.attr('src','http://www.ekshitij.com/media/images/output2/'+id+'/7.JPG');
        }
        else if((rangeX(0,X,objX)==1) && (rangeY(objY+86,Y,h)==1))/*left-down-corner*/
        {
          obj.attr('src','http://www.ekshitij.com/media/images/output2/'+id+'/8.JPG');
        }
        else if((rangeX(objX+86,X,w)==1) && (rangeY(objY+86,Y,h)==1))/*right-down-corner*/
        {
          obj.attr('src','http://www.ekshitij.com/media/images/output2/'+id+'/9.JPG');
        } 
        }   
        /* ok */
      });
    </script>
