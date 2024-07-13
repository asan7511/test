let element, context;
let shopBox;
let punkte = parseInt(localStorage.getItem("starpoints"));
if (!punkte) punkte = 0;
let stern = {}, shop = {};
let last_click_time= 0;
shop.show = 0;

function showpoints(element, points, x, y){



      let context = element.getContext('2d');
      context.clearRect(0, 0, 1200, 800);
      context.fillStyle = 'black';
      context.strokeStyle = 'black';
      context.font = '9.0em Arial';
      context.textAlign = 'left';
      context.textBaseline = 'top';
      //context.fillText(text, element.width / 2, element.height / 2);
      if (points<1000){
        //
      }
      else if (points < 1000000){
        points=points/1000;// 2.207
        points=points.toFixed(1)+"K";
      }
      else if(points< 1000000000)
      {
        points=points/1000000;// 2.207
        points=points.toFixed(1)+"M";
      }else {
        points=points/1000000000;// 2.207
        points=points.toFixed(1)+"B";
      }
      context.strokeText(points, x,y);
}      
function showbutton(element) {

     let context = element.getContext('2d');
     context.clearRect(element.width-420, 0, 420, 150);
     shop.xl = element.width-420, shop.xr = element.width , shop.yt = 0, shop.yb = 150;
      context.fillStyle = 'lightyellow';
      context.strokeStyle = 'black';
      const fontsize = (element.height/100+element.width/100)/2;
      context.font = fontsize.toString(10) + 'em Arial';
      context.textAlign = 'right';
      context.textBaseline = 'top';


      if(punkte>10){
        context.fillStyle = "#0000FF";
        context.fillRect(
          element.width*0.65,
          0,
          element.width-element.width*0.65,
          element.height/10*2.5
        );
        console.log(
          element.width*0.65,
          0,
          element.width-element.width*0.65,
          element.height/10*2.5
          );

        



        //context.strokeText("SHOP", element.width,0);
      }
 
      
}
function zeichne(element) {
    let context = element.getContext('2d');
    let k = stern.img.height / stern.img.width;
    let breite = element.width/2.5;
    let hoehe = element.width*k/2.5;
    let mitte_x = element.width/2 - breite/2;
    let mitte_y = element.height/2 - hoehe/2;
    //context.strokeRect(mitte_x, mitte_y, breite, höhe);
    context.drawImage(stern.img, mitte_x, mitte_y,breite,hoehe);
    //console.log(mitte_x,mitte_y);
    //context.MoveTo(mitte_x,mitte_y);
    //context.LineTo(breite,mitte_y);
    stern.xl = mitte_x, stern.xr = mitte_x + breite , stern.yt = mitte_y, stern.yb = mitte_y+hoehe;

     //context.strokeStyle = "#FF0000";
     //context.strokeRect(mitte_x,mitte_y,breite,hoehe);
  
}
function showshop(e,element){
  
 
 //let context = element.getContext('2d');


   //context.fillStyle = "#000000";
   //context.fillRect(element.width/4,element.height/16, element.width/2,element.height/1.2);

   
   
   //context.fillStyle = "#FFFF00";
   // const fontsize = element.height/200;
   //const elm_height  = element.height/16/0.455;
   //context.font = fontsize.toString(10) + 'em Arial';
   //context.textAlign = 'left';
   //context.fillText("clicker1", element.width/4,element.height/16+ elm_height*0 ,  element.width/2/4*3 );
   //context.fillText("clicker2", element.width/4,element.height/16+ elm_height*1 ,  element.width/2/4*3 );
   //context.fillText("clicker3", element.width/4,element.height/16+ elm_height*2 ,  element.width/2/4*3 );
   //context.fillText("clicker4", element.width/4,element.height/16+ elm_height*3 ,  element.width/2/4*3 );
   //context.fillText("clicker5", element.width/4,element.height/16+ elm_height*4 ,  element.width/2/4*3 );
   //context.fillText("clicker6", element.width/4,element.height/16+ elm_height*5 ,  element.width/2/4*3 );

   //context.fillStyle = "#FFFF00";//1
   //context.fillRect(element.width/1.5,element.height/16, element.width/16,element.height/16);
   //context.fillRect(element.width/4,element.height/16, element.width/2,element.height/1.2);
   //context.fillRect(element.width/4,element.height/16, element.width/2,element.height/1.2);
   //context.fillRect(element.width/4,element.height/16, element.width/2,element.height/1.2);
   //context.fillRect(element.width/4,element.height/16, element.width/2,element.height/1.2);
   //context.fillRect(element.width/4,element.height/16, element.width/2,element.height/1.2);





  console.log("ok");
 
  
  //if(e.x > 300 && e.x < 400 && e.y > 200 && e.y < 300){
  
}
window.onload = function (){
  stern.xl = 430, stern.xr = 914 , stern.yt = 155, stern.yb = 600;
  stern.img = document.getElementById('star');
  //shop.xl = 640 , shop.xr = 1050 , shop.yt = 0, shop.yb = 120;
  
  element = document.getElementById('spielfeld');
  shop.xl = element.width*0.65 , shop.xr = element.width , shop.yt = 0, shop.yb = element.height/10*2.5;
 

  element.width = window.innerWidth;
  element.height = window.innerHeight;
  let context = element.getContext('2d');
  window.addEventListener('resize', () => {
    element.width = window.innerWidth;
    element.height = window.innerHeight;
    showpoints(element, punkte,0,0);
    zeichne(element);
    showbutton(element,0);
 
  })


  document.getElementById('spielfeld').addEventListener("click",function(e){
    let p = context.getImageData(e.x, e.y, 1, 1); 
      console.log(e.x, e.y, shop.xl);
      if(e.x > 300 && e.x < 400 && e.y > 200 && e.y < 300){
                  shop.show = 0;
      }
      if(shop.show == 0){ 
              if(e.x > stern.xl && e.x < stern.xr && e.y > stern.yt && e.y < stern.yb){
                if(p.data[1]!=0){
                  if ((Date.now() - last_click_time) > 100 ){
                    punkte=punkte+1 ;
                    last_click_time = Date.now();
                  }
                }
              }else{
                if(e.x > shop.xl && e.x < shop.xr && e.y > shop.yt && e.y < shop.yb){
                  shop.show = 1;
                  showshop(e,element);
                }
              }
      }else if(e.x > element.width/4 && e.x < (element.width/4+element.width/2)  && e.y > element.height/16 && e.y < (element.height/16+element.height/1.2)){
          shop.show = 0;
      }


      localStorage.setItem("starpoints", punkte); 
      
    if(shop.show == 0){ 
      console.log(context);
       context.clearRect(0, 0,window.innerWidth, window.innerHeight);
       showpoints(element,punkte,0,0);
       zeichne(element);
       showbutton(element,punkte);
    }

    });

showpoints(element, punkte,0,0);
zeichne(element);
showbutton(element,0);


}
