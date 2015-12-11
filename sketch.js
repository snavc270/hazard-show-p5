// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill
    var openingscreen; 
    var show1; 
    var crosshair; 
    var buyingscene; 
    var warning; 
    var exitdoor; 
    var exitdooropen; 
    var fourchan; 
    var fourchanagree; 
    var fourchandisagree; 
    var facebook; 
    var hand; 
    var home; 
    var newyorkreport; 
    var oregonreport; 
    var southcarolinareport;
    var nebraskareport; 
    var coloradoreport; 
    var connecticutreport;
    var closet; 
    var safe; 
    var homewithkid; 
    var couch; 
    var couchempty; 
    var movie;
    var movieownadvice; 
    var moviegoodguy; 


   
 
    
   
    
   
    
    var state= -1; 
    var hazard= false;
    var oregon= false; 
    var connecticut= false; 
    var colorado= false; 
    var sc= false; 
    var NEBRASKA= false; 
    var NY= false; 
    var pressed= false; 
    
    var movies= false; 
    var mall= false; 
    var school= false; 
    var agree= false; 
    var disagree= false; 
    var terrible= false; 
    var goodguy= false; 
    
    var kids = false;  
    var strange= false; 
    
    

  

 function preload(){
  textFont("CONSOLAS"); 

      
 } 


function setup() {
  createCanvas(1200, 700); 
       
      openingscreen= loadImage("data/openingscreen.png"); 
       show1= loadImage("data/show1.png"); 
       crosshair= loadImage("data/crosshair.png"); 
       buyingscene= loadImage("data/buyingscene.png"); 
       warning= loadImage("data/warninglabel.png"); 
       exitdoor= loadImage("data/exitdoor.png"); 
       exitdooropen= loadImage("data/exitdooropen.png");
       fourchan= loadImage("data/4chan1.png"); 
       fourchanagree= loadImage("data/4chanagree.png"); 
       fourchandisagree= loadImage("data/4chandisagree.png");
       facebook= loadImage("data/facebook.png"); 
       hand= loadImage("data/hand.png"); 
       home= loadImage("data/home.png"); 
       newyorkreport= loadImage("data/newyorkreport.png"); 
       oregonreport= loadImage("data/oregonreport.png"); 
       southcarolinareport= loadImage("data/southcarolina.png"); 
       nebraskareport= loadImage("data/nebraskareport.png"); 
       coloradoreport= loadImage("data/coloradoreport.png"); 
       connecticutreport= loadImage("data/connecticutreport.png"); 
       safe= loadImage("data/safe.png"); 
       closet= loadImage("data/closet.png"); 
       homewithkid= loadImage("data/homewithkid.png"); 
       couch= loadImage("data/couch.png"); 
       couchempty= loadImage("data/couchempty.png"); 
       movie= loadImage("data/movie.png"); 
       movieownadvice= loadImage("data/movieownadvice.png"); 
       moviegoodguy= loadImage("data/moviegoodguy.png");    
       
       
     
       
}




function draw(){
       if(state==-1){
          culture(); 
        }
        
      if(state == 0){
           enter(); 
    } 
     
     if(state==1){
           hazardShow(); 
             
         }
         
      if(state==2){
           clerk(); 
         }
         
     if(state==3){
           makepurchase(); 
         }
         
    if(state==5 || state==6 || state==7){
         provideId(); 
     }
     
     if(state==4){
         exitScreen(); 
     }
     
     if(state==9){
         yesResponse(); 
     }
     
     if(state==10){
         noResponse(); 
     }
     
     if(state==11){
         warningLabel(); 
     }
     
     if(state==12){
        whereAreWe(); 
     }
     
     if(state==13){
       home(); 
     }
     
     if(state ==19){
       kidsAtHome(); 
     }
     
     if(state==20){
       walk(); 
     }
     
     if(state==21 && hazard==false){
       homeWithKidsNoH(); 
     }
     
     if(state==21 && hazard==true){
       homeWithKidsH(); 
     }

     if(state==22 && hazard==true){
       homeWithNoKidsH(); 
     }
     
     if(state==22 && hazard==false){
       homeWithNoKidsNoH(); 
     }
     
     if(state==27){
       badguys(); 
    }
     
     if(state==60){
        caniuse(); 
     }   
     
     if(state==61){
        hazardsUSA(); 
      }
    if(state==28){
       combo(); 
     }
     
     if(state==62){
       nocombo(); 
     }
  
     if(state==30){
        watchWithKids(); 
     }
    
    if(state==29 && oregon==true){
        oregonReport(); 
     }  
     
     if(state==29 && connecticut==true){
       conneticutReport(); 
     }
     
     if(state==29 && colorado==true){
       coloradoReport(); 
     }
     
     if(state==29 && sc==true){
        scReport(); 
     }
     
     if(state==29 && NY==true){
        NYReport(); 
     }
     
     if(state==29 && NEBRASKA==true){
        NEBRASKAReport(); 
     }
     
     if(state==31 && oregon==true){
        oregonReport(); 
        questions(); 
     }  
     
     if(state==31 && connecticut==true){
       conneticutReport(); 
       questions(); 
     }
     
     if(state==31 && colorado==true){
       coloradoReport(); 
       questions(); 
     }
     
     if(state==31 && sc==true){
        scReport(); 
        questions(); 
     }
     
     if(state==31 && NY==true){
        NYReport(); 
        questions(); 
     }
     
     if(state==31 && NEBRASKA==true){
        NEBRASKAReport();
        questions();  
     }
     if(state==33){
       sendtoroom();  
     } 
     if(state==34 && oregon==true){
        oregonReport(); 
     }  
     
     if(state==34 && connecticut==true){
       conneticutReport(); 
     }
     
     if(state==34 && colorado==true){
       coloradoReport(); 
     }
     
     if(state==34 && sc==true){
        scReport(); 
     }
     
     if(state==34 && NY==true){
        NYReport(); 
     }
     
     if(state==34 && NEBRASKA==true){
        NEBRASKAReport(); 
     }
     
    
      
      
      
      
      if(state==23){
          checkPhone(); 
      }
      
      if(state==40){
         chan(); 
      }
      
      if(state==41){
         facebook(); 
      }
    
    if(state==43 && hazard==true){
       if(movies==true){
       continueToMovies();
     }
      if(school==true){
        continueToSchool(); 
      } 
      if(mall==true){
        continueToMall(); 
      }
       maybeGoHome(); 
    }
    
    if(state==43 && hazard==false){
      if(movies==true){
       continueToMovies();
     }
      if(school==true){
        continueToSchool(); 
      } 
      if(mall==true){
        continueToMall(); 
      }
       maybeGoHome(); 
    }
    
    if(state==44){
        doYouAgree(); 
    }
    
    if(state==51 && hazard==false){
      if(movies==true){
       continueToMovies();
     }
      if(school==true){
        continueToSchool(); 
      } 
      if(mall==true){
        continueToMall(); 
      }
       gobacktoshow(); 
    }
   
   if(state==45 && hazard==true){
     if(movies==true){
       continueToMovies();
     }
    if(school==true){
      continueToSchool(); 
    } 
    if(mall==true){
      continueToMall(); 
    }
       disagreestatement(); 
       maybeGoHome(); 
    }
    
    
    
 
    
    if(state==45 && hazard==false){
      if(movies==true){
       continueToMovies();
     }
      if(school==true){
        continueToSchool(); 
      } 
      if(mall==true){
        continueToMall(); 
      }
    
       disagreestatement(); 
       maybeGoHome(); 
    }
    
   
    
    if(state==53 && hazard==false){
      if(movies==true){
       continueToMovies();
     }
      if(school==true){
        continueToSchool(); 
      } 
      if(mall==true){
        continueToMall(); 
      }
        agreestatement(); 
        gobacktoshow(); 
    }
    
    if(state==53 && hazard==true){
      if(movies==true){
       continueToMovies();
     }
      if(school==true){
        continueToSchool(); 
      } 
      if(mall==true){
        continueToMall(); 
      }
       agreestatement();
       takeOwnAdvice(); 
    }
    
    if(state==50 && hazard==true){
      if(mall==true){
        continueToMall();
      }
      if(movies==true){
        continueToMovies(); 
      }
      if(school==true){
        continueToSchool(); 
      }
        maybeGoHome();
    }
    
    if(state==50 && hazard==false){
      if(mall==true){
        continueToMall();
      }
      if(movies==true){
        continueToMovies(); 
      }
      if(school==true){
        continueToSchool(); 
      }
        maybeGoHome();
    }
    
    if(state==46 && movies==true){
        goIntoMovies(); 
    }
    
    if(state==46 && mall==true){
        goIntoMall(); 
    }
    
    if(state==46 && school==true){
        goToClass(); 
    }
    
    if(state==47){
        newsOwnAdvice(); 
    }
    
    if(state==48){
        newsAccident(); 
    }
    
    if(state==49){
       goodguy(); 
    }
    
   
    
    
    
    if(state>1){
      fill(255);   
      text("RESTART", 450, height*.95); 
      
      mouseMoved();
      if(dist(450, height*.95, mouseX, mouseY)<=50){
                    fill(199, 163,21, 80); 
                    rect(450, height*.92, width*.08, height*.04);
        }
      }
}
    
    function culture(){
          fill(0); 
          rect(0, 0, 1200, 700); 
          
          fill(255); 
          textSize(26); 
          text("IN THE NEAR FUTURE, THE GOVERNMENT HAS LEGALIZED THE POSSESSION", width*.1, height*.40); 
          text("OF LETHAL VIRUSES, KNOWN AS ''HAZARDS.'' THE HAZARDS", width*.1, height*.45); 
          text("HAVE BECOME AN INTEGRAL PART OF OUR CULTURE, SOME EVEN INSISTING", width*.1, height*.50); 
          text("THAT EVERY HOUSEHOLD NEEDS A HAZARD.", width*.1, height*.55); 
          
//          text("CLICK TO BEGIN", width*.1, height*.65);  
  }
     
    function enter(){
      image(openingscreen, 0, 0, 1200, 700); 

      function mouseMoved(){ 
      if (dist(width*.5, height*.25, mouseX, mouseY)<=150){
        noStroke(); 
        fill(199, 163,21, 80); 
        rect(width*.5-230, 80, 450, 150); 
      }
    }
     
    }
   
     function hazardShow(){
      pushMatrix(); 
       translate(translateX, translateY); 
       scale(scaleFactor); 
       image(show1, -65, -50, 1300, 750);
       popMatrix(); 
       
        if(dist(width*.75, height*.75, mouseX, mouseY)<=200){
          cursor(crosshair, 32, 32); 
        }else{
          cursor(ARROW); 
        }
        
       fill(0); 
       rect(75, height*.7, width*.4, height*.3);
       
       textSize(18); 
       fill(255);   
       text("YOU DRIVE TO A HAZARD SHOW IN A", 100, height*.75); 
       text("NEARBY STATE. YOU LOOK AROUND TO", 100, height*.79);
       text("FIND A BOOTH WITH A PRIVATE DEALER.", 100, height*.83);
      }
    
     function clerk(){
       cursor(ARROW); 
       image(buyingscene, 0, 0, 1200, 700); 
       
       fill(0); 
       rect(75, height*.7, width*.4, height*.3); 
       
       fill(255); 
       textFont(f); 
      
      
      // int x=100; 
      // int y=115; 
      // int z=115; 
      
      text("''WHAT CAN I HELP YOU WITH?''", width*.10, height*.75); 
      text("-MAKE A PURCHASE", width*.11, height*.80); 
      text("-NOTHING", width*.11, height*.85); 
      
     mouseMoved(); 
              if(dist(115, height*.85, mouseX, mouseY)<=40){
                fill(199, 163,21, 80); 
                rect(115, height*.82, width*.15, height*.04);
              }
              if(dist(115, height*.75, mouseX, mouseY)<=50){
                fill(199, 163,21, 80); 
                rect(115, height*.77, width*.15, height*.04);
              
              }
     }
            

     //make purchase choose between viruses
     function makepurchase(){
        image(buyingscene, 0, 0, 1200, 700); 
       fill(0); 
       rect(75, height*.7, width*.4, height*.3); 
     
      fill(255); 
     
      text("''WHAT ARE YOU LOOKING TO BUY?''", width*.10, height*.75); 
       
      text("-STRAIN 10 REVOLVIRUS", width*.11, height*.80); 
       
      text("-VR PREDATOTALIS VIRUS", width*.11, height*.85);
      
      text("-BERETTAFATALIS VIRUS", width*.11, height*.90); 
      
     if(state== 3){
           mouseMoved(); 
                if(dist(115, height*.75, mouseX, mouseY)<=40){
                  fill(199, 163,21, 80); 
                  rect(115, height*.77, width*.25, height*.04);
                  println("Trypanin");
                }
                if(dist(115, height*.85, mouseX, mouseY)<=40){
                  fill(199, 163,21, 80); 
                  rect(115, height*.82, width*.25, height*.04);
                  println("virus2");
                }
                 if(dist(115, height*.90, mouseX, mouseY)<=40){
                  fill(199, 163,21, 80); 
                  rect(115, height*.87, width*.25, height*.04);
                  println("virus3"); 
              }
             }
         }
    function exitScreen(){
       image(exitdoor, 0, 0, 1200, 700); 
       
       fill(0); 
       rect(75, height*.7, width*.4, height*.3);
       
       fill(255); 
       text("EXIT THE SHOW", 100, height*.75);
       
       mouseMoved(); 
      if(dist(115, height*.75, mouseX, mouseY)<=50){
             fill(199, 163,21, 80); 
             rect(100, height*.72, width*.15, height*.04);
        }
    } 
    
    function provideId(){
       image(buyingscene, 0, 0, 1200, 700); 
       fill(0); 
       rect(75, height*.7, width*.4, height*.3); 
     
      fill(255); 
      
      text("PROVIDE YOUR ID?", width*.10, height*.75); 
      text("YES", width*.11, height*.80); 
      text("NO", width*.11, height*.85); 
       
      
       mouseMoved(); 
                if(dist(115, height*.75, mouseX, mouseY)<=50){
                  fill(199, 163,21, 80); 
                  rect(115, height*.77, width*.15, height*.04);
                 
                }
                if(dist(115, height*.85, mouseX, mouseY)<=40){
                  fill(199, 163,21, 80); 
                  rect(115, height*.82, width*.15, height*.04);
               }
           } 
       
    function yesResponse(){
       fill(0); 
       rect(75, height*.7, width*.4, height*.3); 
     
      fill(255); 
      
     text("''I DONT NEED YOUR ID", width*.10, height*.75); 
      text("YOU SEEM LIKE A GOOD GUY.", width*.10, height*.78); 
      text("JUST MAKE SURE TO READ THE LABEL''", width*.10, height*.81);
      text("OKAY", width*.15, height*.90); 
      
      
       
       mouseMoved(); 
        if(dist(115, height*.90, mouseX, mouseY)<=50){
             fill(199, 163,21, 80); 
             rect(115, height*.87, width*.15, height*.04);
        }
    }  
   
    function noResponse(){
       fill(0); 
       rect(75, height*.7, width*.4, height*.3); 
     
      fill(255); 
     
      text("''EVERY GOOD GUY NEEDS A HAZARD.", width*.10, height*.75);
      text("ONLY THING THAT STOPS A BAD GUY WITH", width*.10, height*.78);
      text("A HAZARD IS A GOOD GUY WITH A HAZARD.", width*.10, height*.81);
      text("JUST MAKE SURE TO READ THE LABEL''", 110, height*.84); 
      text("OKAY", width*.11, height*.90); 
      
      
      mouseMoved(); 
        if(dist(115, height*.90, mouseX, mouseY)<=50){
             fill(199, 163,21, 80); 
             rect(115, height*.87, width*.15, height*.04);
        }
    }
    
    function warningLabel(){
       image(buyingscene, 0, 0, 1200, 700); 
     fill(0); 
     rect(75, height*.7, width*.4, height*.3);
     
     fill(255);   
     text("EXIT THE SHOW", 100, height*.75); 
     
     image(warning, width*.5-300, height*.1, 600, 400); 
     
     mouseMoved(); 
      if(dist(115, height*.75, mouseX, mouseY)<=50){
             fill(199, 163,21, 80); 
             rect(100, height*.72, width*.15, height*.04);
        }
   }
   
    function whereAreWe(){
      image(exitdooropen, 0, 0, 1200, 700); 
      
      fill(0); 
      rect(75, height*.7, width*.4, height*.3);
      
      fill(255); 
      text("WHERE IS HOME?", 100, height*.75);
      text("-OREGON", 115, height*.80);
      text("-CONNECTICUT", 300, height*.80);
      text("-COLORADO", 115, height*.85); 
      text("-SOUTH CAROLINA", 300, height*.85);
      text("-NEW YORK", 115, height*.90);
      text("-NEBRASKA", 300, height*.90); 
    if(dist(115, height*.80, mouseX, mouseY)<=30){
             fill(199, 163,21, 80); 
             rect(115, height*.77, width*.15, height*.04);
        }     
     if(dist(300, height*.80, mouseX, mouseY)<=30){
             fill(199, 163,21, 80); 
             rect(300, height*.77, width*.15, height*.04);
        } 
     if(dist(115, height*.85, mouseX, mouseY)<=30){
             fill(199, 163,21, 80); 
             rect(115, height*.82, width*.15, height*.04);
        }     
     if(dist(300, height*.85, mouseX, mouseY)<=30){
             fill(199, 163,21, 80); 
             rect(300, height*.82, width*.18, height*.04);
        } 
     if(dist(115, height*.90, mouseX, mouseY)<=30){
             fill(199, 163,21, 80); 
             rect(115, height*.87, width*.15, height*.04);
        }     
     if(dist(300, height*.90, mouseX, mouseY)<=30){
             fill(199, 163,21, 80); 
             rect(300, height*.87, width*.15, height*.04);
        }        
  }
  
    function home(){
      image(exitdoor, 0, 0, 1200, 700); 
      
      fill(0); 
      rect(75, height*.7, width*.4, height*.3);      
      
      fill(255); 
      text("ARE YOU GOING HOME?", 100, height*.75);  
      text("-YES", 115, height*.80); 
      text("-NO", 115, height*.85); 
      
      mouseMoved(); 
       if(dist(115, height*.75, mouseX, mouseY)<=50){
            fill(199, 163,21, 80); 
            rect(115, height*.77, width*.15, height*.04);
           
          }
       if(dist(115, height*.85, mouseX, mouseY)<=40){
            fill(199, 163,21, 80); 
            rect(115, height*.82, width*.15, height*.04);
         }
      }
 
    function kidsAtHome(){
      
      fill(0); 
      rect(75, height*.7, width*.4, height*.3);      
      
      fill(255); 
      text("ARE THERE KIDS AT HOME?", 100, height*.75);  
      text("-YES", 115, height*.80); 
      text("-NO", 115, height*.85); 
    
      if(dist(115, height*.75, mouseX, mouseY)<=50){
            fill(199, 163,21, 80); 
            rect(115, height*.77, width*.15, height*.04);
      }
      
       if(dist(115, height*.85, mouseX, mouseY)<=40){
            fill(199, 163,21, 80); 
            rect(115, height*.82, width*.15, height*.04);
         }
       }  
 
  function homeWithKidsH(){
      image(homewithkid, 0, 0, 1200, 700); 
      
      fill(0);
      rect(75, height*.7, width*.4, height*.3);  
      
      fill(255); 
      text("YOU ARRIVE HOME", 105, height*.75);
      text("WHERE DO YOU WANT TO PUT YOUR HAZARD?", 105, height*.80); 
      
      text("-MEH, IT'S FINE IN THE CLOSET", 115, height*.85); 
      text("-PUT IT IN THE LOCKED SAFE", 115, height*.90); 
     
      mouseMoved(); 
     if(dist(115, height*.85, mouseX, mouseY)<=40){
            fill(199, 163,21, 80); 
            rect(115, height*.82, width*.30, height*.04);
         }
       if(dist(115, height*.89, mouseX, mouseY)<=40){
            fill(199, 163,21, 80); 
            rect(115, height*.87, width*.25, height*.04);
         } 
      }
    
    function homeWithNoKidsNoH(){
      image(home, 0, 0, 1200, 700); 
      fill(0); 
      rect(75, height*.7, width*.4, height*.3);
      
      fill(255); 
      text("YOU'RE FINALLY HOME. TAKE A BREAK", 105, height*.75);
     
      text("-WATCH TV", 115, height*.80);  
        
    mouseMoved(); 
       if(dist(115, height*.75, mouseX, mouseY)<=50){
            fill(199, 163,21, 80); 
            rect(115, height*.77, width*.15, height*.04);
      }
    } 
    
    function homeWithNoKidsH(){
      image(home, 0, 0, 1200, 700); 
      
      fill(0); 
      rect(75, height*.7, width*.4, height*.3);
      
      fill(255); 
      text("YOU'RE FINALLY HOME. TAKE A BREAK", 105, height*.75);
     
      text("-WATCH TV", 115, height*.80);  
        
    mouseMoved(); 
       if(dist(115, height*.75, mouseX, mouseY)<=50){
            fill(199, 163,21, 80); 
            rect(115, height*.77, width*.15, height*.04);
      }
    
    }
    
    
    function badguys(){
      image(closet, 0, 0, 1200, 700); 
      fill(0); 
      rect(75, height*.7, width*.4, height*.3);
      
      fill(255); 
      text("''WILL BAD GUYS GET THE", 105, height*.75); 
      text("HAZARD IN THE CLOSET?''", 105, height*.80); 
      text("-YES, I WILL PUT IT IN A SAFE", 115, height*.85); 
      text("-NO, IT WILL BE FINE", 115, height*.90); 
    
      if(dist(115, height*.83, mouseX, mouseY)<=50){
            fill(199, 163,21, 80); 
            rect(115, height*.82, width*.30, height*.04);
      }
      
       if(dist(115, height*.92, mouseX, mouseY)<=40){
            fill(199, 163,21, 80); 
            rect(115, height*.87, width*.30, height*.04);
         }
    }
    
    function caniuse(){
      fill(0); 
      rect(75, height*.7, width*.4, height*.3);
      
      fill(255); 
      text("''CAN I USE IT IF A BAD", 105, height*.75); 
      text("GUY BREAKS IN?''", 105, height*.80); 
      text("-IF YOU KNOW HOW TO USE IT PROPERLY", 115, height*.85); 
      text("-OF COURSE NOT", 115, height*.90); 
    
      if(dist(115, height*.85, mouseX, mouseY)<=50){
            fill(199, 163,21, 80); 
            rect(115, height*.82, width*.35, height*.04);
      }
      
       if(dist(115, height*.90, mouseX, mouseY)<=40){
            fill(199, 163,21, 80); 
            rect(115, height*.87, width*.15, height*.04);
         }
    }
    
    function hazardsUSA(){
      image(couch, 0, 0, 1200, 700); 
       fill(0); 
      rect(75, height*.7, width*.4, height*.3);
      
      fill(255); 
      text("''CAN WE WATCH HAZARDS ", 105, height*.75); 
      text("USA ON TV?''", 105, height*.80); 
      text("-YES, AFTER I WATCH THE NEWS", 115, height*.85); 
      
    if(dist(115, height*.85, mouseX, mouseY)<=50){
            fill(199, 163,21, 80); 
            rect(115, height*.82, width*.30, height*.04);
      }
     }
    
    function homeWithKidsNoH(){
      image(homewithkid, 0, 0, 1200, 700); 
      fill(0); 
      rect(75, height*.7, width*.4, height*.3);
      
      fill(255); 
      text("YOU'RE FINALLY HOME. TAKE A BREAK", 105, height*.75);
     
      text("-WATCH TV", 115, height*.80);  
        
    mouseMoved(); 
       if(dist(115, height*.75, mouseX, mouseY)<=50){
            fill(199, 163,21, 80); 
            rect(115, height*.77, width*.15, height*.04);
      }
    }
    
    function watchWithKids(){
      image(couch, 0, 0, 1200, 700); 
      fill(0); 
      rect(75, height*.7, width*.4, height*.3);
      
      fill(255); 
      text("WATCH THE NEWS WITH YOUR CHILD?", 105, height*.75); 
      text("-YES", 115, height*.80); 
      text("-NO", 115, height*.85); 
    
      
      mouseMoved(); 
      
      if(dist(115, height*.75, mouseX, mouseY)<=50){
            fill(199, 163,21, 80); 
            rect(115, height*.77, width*.15, height*.04);
           
          }
       if(dist(115, height*.85, mouseX, mouseY)<=40){
            fill(199, 163,21, 80); 
            rect(115, height*.82, width*.15, height*.04);
           
         }
    }
    
    function sendtoroom(){
      image(couchempty, 0, 0, 1200, 700); 
      fill(0); 
      rect(75, height*.7, width*.4, height*.3);
      
      fill(255); 
      text("YOU TELL YOUR CHILD TO GO DO HOMEWORK", 105, height*.75); 
      text("-TURN ON TV", 115, height*.80); 
    
      if(dist(115, height*.75, mouseX, mouseY)<=50){
            fill(199, 163,21, 80); 
            rect(115, height*.77, width*.15, height*.04);
      }
  }
    function oregonReport(){
       image(oregonreport, 0, 0, 1200, 700); 
       fill(0); 
       rect(75, height*.7, width*.4, height*.3);
       
    
//       fill(0); 
//       rect(width/2- width*.25, height*.3-height*.25, width*.5, height*.5);
//       
//       fill(255); 
//       text("ROSEBURG, ORE. -- 26-year-old male opened infection",width*.27, height*.32);
//       text("on college campus. Left 10 people fatally infected", width*.27, height*.37); 
//       text("and 7 with non-fatal infections. All viruses were", width*.27,height*.42);
//       text("purchased legally from the local Hazard Show.", width*.27, height*.47);  
    }
    
    function conneticutReport(){
       image(connecticutreport, 0, 0, 1200, 700); 
       fill(0); 
       rect(75, height*.7, width*.4, height*.3);
       
       fill(0); 
       rect(width/2- width*.25, height*.3-height*.25, width*.5, height*.5);
       
      
//       fill(255); 
//       text("NEWTON, CT. -- 20-year-old male opened infection",width*.27, height*.27);
//       text("in Elementary school. Left 20 children and 6 adults", width*.27, height*.32); 
//       text("fatally infected. The lethal viruses were stolen", width*.27,height*.37);
//       text("from perpetrators mother and were purchased legally", width*.27, height*.42);   
//       text("from the local Hazard Show.", width*.27, height*.47); 
    }
    
    function coloradoReport(){
      image(coloradoreport, 0, 0, 1200, 700); 
      fill(0); 
       rect(75, height*.7, width*.4, height*.3);
  
       
//       fill(0); 
//       rect(width/2- width*.25, height*.3-height*.25, width*.5, height*.5);
//       
//       fill(255); 
//       text("AURORA, CO. -- 24-year old male opened infection",width*.27, height*.32);
//       text("on Movie Theater. Left 12 fatally infected and 70", width*.27, height*.37); 
//       text("with critical infections. All viruses were purchased", width*.27,height*.42);
//       text("legally online and from the local Hazard Show", width*.27, height*.47);   
    }
    
    function scReport(){
       image(southcarolinareport, 0, 0, 1200, 700); 
       fill(0); 
       rect(75, height*.7, width*.4, height*.3);
       
   //     fill(0); 
//       rect(width/2- width*.25, height*.3-height*.25, width*.5, height*.5);
//       
//        fill(255); 
//       text("CHARLESTON, SC. -- 21-year old male opened infection",width*.27, height*.32);
//       text("on church. Left 9 fatally infected. The perpetrator", width*.27, height*.37); 
//       text("obtained his hazard throught a legal loophole as a gift from his father.", width*.27,height*.42);
   }
    
    function NYReport(){
       image(newyorkreport, 0, 0, 1200, 700); 
       fill(0); 
       rect(75, height*.7, width*.4, height*.3);
       
       
       
//       fill(0); 
//       rect(width/2- width*.25, height*.3-height*.25, width*.5, height*.5);
//       
//       fill(255); 
//       text("BINGHAMTON, NY. -- 41-year-old male opened infection",width*.27, height*.27);
//       text("inside civic association classroom. 13 people were", width*.27, height*.32); 
//       text("fatally infected. One of the lethal hazard was", width*.27,height*.37);
//       text("obtained after background check system did not", width*.27, height*.42);   
//       text("return a decision in 3 businsess days.", width*.27, height*.47); 
    }
    
    function NEBRASKAReport(){
      image(nebraskareport, 0, 0, 1200, 700); 
      
       fill(0); 
       rect(75, height*.7, width*.4, height*.3);
      
    
//       
//       fill(255); 
//       text("OMAHA, NE. -- 19-year old male opened infection",width*.27, height*.27);
//       text("on holiday shoppers infecting 12, 8 fatally infected.", width*.27, height*.32); 
//       text("Hazardmen stole his semi-automatic syringe from", width*.27,height*.37);
//       text("his stepfather.", width*.27, height*.42);   
    }
    
    function questions(){
       fill(0); 
       rect(75, height*.7, width*.4, height*.3);
       
       fill(255); 
       text("YOUR CHILD ASKS YOU:", 105, height*.75);
       text("'WHY DID THIS HAPPEN?'", 105, height*.79); 
       text("-I DON'T KNOW", 115, height*.85); 
       
      
    }
    
    function combo(){
      image(safe, 0, 0, 1200, 700); 
      fill(0); 
      rect(75, height*.7, width*.4, height*.3);
      
      fill(255); 
      text("''CAN I KNOW THE COMBO TO THE SAFE?''", 105, height*.75);
     
      text("-YES", 115, height*.80); 
      text("-NO", 115, height*.85);   
      
      mouseMoved(); 
      if(dist(115, height*.75, mouseX, mouseY)<=50){
            fill(199, 163,21, 80); 
            rect(115, height*.77, width*.15, height*.04);
      }
      
       if(dist(115, height*.85, mouseX, mouseY)<=40){
            fill(199, 163,21, 80); 
            rect(115, height*.82, width*.15, height*.04);
         }
    }
    
    function nocombo(){
      fill(0); 
      rect(75, height*.7, width*.4, height*.3);
      
      fill(255); 
      text("YOU TELL YOUR CHILD THAT GIVING", 105, height*.75);
      text("OUT THE COMBO DEFEATS THE PURPOSE", 105, height*.79); 
      text("OF HAVING A SAFE", 105, height*.84); 
      
     
      text("-TAKE A BREAK AND WATCH TV", 115, height*.90);  
      
      if(dist(115, height*.90, mouseX, mouseY)<=50){
            fill(199, 163,21, 80); 
            rect(115, height*.87, width*.30, height*.04);
      }
    }
       
//    function safe(){
//      fill(0); 
//      rect(75, height*.7, width*.4, height*.3);
//      
//      fill(255); 
//      text("GREAT! TAKE A BREAK", 105, height*.75);
//     
//      text("-TURN ON TV", 115, height*.80);  
//        
//    mouseMoved(); 
//       if(dist(115, height*.75, mouseX, mouseY)<=50){
//            fill(199, 163,21, 80); 
//            rect(115, height*.77, width*.15, height*.04);
//      }
//}

    function walk(){
      image(exitdooropen, 0, 0, 1200, 700); 
      
      fill(0); 
      rect(75, height*.7, width*.4, height*.3);      
      
      fill(255); 
      text("WHERE DO YOU WANT TO GO?", 100, height*.75);  
      text("-MOVIES", 115, height*.80); 
      text("-SCHOOL", 115, height*.85); 
      text("-MALL", 115, height*.90); 
    
      mouseMoved(); 
      if(dist(115, height*.75, mouseX, mouseY)<=50){
            fill(199, 163,21, 80); 
            rect(115, height*.77, width*.15, height*.04);
           
          }
       if(dist(115, height*.85, mouseX, mouseY)<=40){
            fill(199, 163,21, 80); 
            rect(115, height*.82, width*.15, height*.04);
         }
       if(dist(115, height*.89, mouseX, mouseY)<=40){
            fill(199, 163,21, 80); 
            rect(115, height*.87, width*.15, height*.04);
         }
       }
       
     function checkPhone(){
      fill(0); 
      rect(75, height*.7, width*.4, height*.3);      
      
      fill(255); 
      text("BEFORE YOU LEAVE, YOU CHECK YOUR PHONE", 100, height*.75);  
      text("-LOOK AT 4VIRUCHAN", 115, height*.80); 
      text("-LOOK AT FACEBOOK", 115, height*.85); 
      
      mouseMoved(); 
      
      if(dist(115, height*.75, mouseX, mouseY)<=50){
            fill(199, 163,21, 80); 
            rect(115, height*.77, width*.25, height*.04);
           
          }
       if(dist(115, height*.85, mouseX, mouseY)<=40){
            fill(199, 163,21, 80); 
            rect(115, height*.82, width*.25, height*.04);
         }
       }
       
     function chan(){
      image(hand,  width/2-width*.1, height*.3, width*.7, height*.7); 
      image(fourchan, width/2-width*.1, height*.3, width*.7, height*.7); 
       
      fill(0); 
      rect(75, height*.7, width*.4, height*.3); 
       
      fill(255);
//      text("A FELLOW VIRUBOT WILL", width/2-120, height/2-100);   
//      text("TAKE UP HAZARDS TOMORROW", width/2-120, height/2-80); 
      text("WHAT DO YOU THINK?", 100, height*.75);  
      text("-GIVE THEM ADVICE", 115, height*.80); 
      text("-WOAH THAT WAS STRANGE", 115, height*.85);  
     
      mouseMoved(); 
     if(dist(115, height*.75, mouseX, mouseY)<=50){
            fill(199, 163,21, 80); 
            rect(115, height*.77, width*.25, height*.04);
           
          }
       if(dist(115, height*.85, mouseX, mouseY)<=40){
            fill(199, 163,21, 80); 
            rect(115, height*.82, width*.25, height*.04);
         }
       }  
       
     function facebook(){
       image(hand,  width/2-width*.1, height*.3, width*.7, height*.7);
       image(facebook, width/2-width*.1, height*.3, width*.7, height*.7);  
      
      fill(0); 
      rect(75, height*.7, width*.4, height*.3); 
      
      fill(255);
      text("WHAT DO YOU THINK?", 100, height*.75);  
      text("-THAT'S TERRIBLE", 115, height*.80); 
      text("-IF ONLY MORE GOOD GUYS HAD HAZARDS", 115, height*.85);  
     
      mouseMoved(); 
     if(dist(115, height*.75, mouseX, mouseY)<=50){
            fill(199, 163,21, 80); 
            rect(115, height*.77, width*.15, height*.04);
           
          }
       if(dist(115, height*.85, mouseX, mouseY)<=40){
            fill(199, 163,21, 80); 
            rect(115, height*.82, width*.35, height*.04);
         }
      }
       
     
      function continueToMall(){
         fill(0); 
         rect(75, height*.7, width*.4, height*.3);
         
         fill(255);   
         text("-CONTINUE TO THE MALL", 100, height*.75); 
        mouseMoved(); 
      if(dist(115, height*.75, mouseX, mouseY)<=50){
             fill(199, 163,21, 80); 
             rect(100, height*.72, width*.25, height*.04);
        }
      }
      
      function continueToMovies(){
        image(movie, 0, 0, 1200, 700); 
        fill(0); 
         rect(75, height*.7, width*.4, height*.3);
         
         fill(255);   
         text("-CONTINUE TO THE MOVIES", 100, height*.75); 
       
        mouseMoved(); 
      if(dist(115, height*.75, mouseX, mouseY)<=50){
             fill(199, 163,21, 80); 
             rect(100, height*.72, width*.25, height*.04);
        }
      }
      
      function continueToSchool(){
        fill(0); 
         rect(75, height*.7, width*.4, height*.3);
         
         fill(255);   
         text("-CONTINUE TO SCHOOL", 100, height*.75); 
       mouseMoved(); 
      if(dist(115, height*.75, mouseX, mouseY)<=50){
             fill(199, 163,21, 80); 
             rect(100, height*.72, width*.25, height*.04);
        }
      }
      function maybeGoHome(){
          fill(255);   
          text("-MAYBE I SHOULD JUST GO HOME", 100, height*.85);
          
          mouseMoved(); 
          if(dist(115, height*.85, mouseX, mouseY)<=40){
             fill(199, 163,21, 80); 
             rect(100, height*.82, width*.30, height*.04);
        
        }
          
      
      }
      function doYouAgree(){
          fill(0); 
          rect(75, height*.7, width*.4, height*.3);      
          
          fill(255); 
          text("DO YOU AGREE WITH THE POST?", 100, height*.75);  
          text("-YES", 115, height*.80); 
          text("-NO", 115, height*.85); 
          
          mouseMoved(); 
           if(dist(115, height*.75, mouseX, mouseY)<=50){
                fill(199, 163,21, 80); 
                rect(115, height*.77, width*.15, height*.04);
              }
           if(dist(115, height*.85, mouseX, mouseY)<=40){
                fill(199, 163,21, 80); 
                rect(115, height*.82, width*.15, height*.04);
             }    
      }
      
      function agreestatement(){
          image(hand, width/2-width*.1, height*.3, width*.7, height*.7);
          image(fourchanagree, width/2-width*.1, height*.3, width*.7, height*.7); 
          textSize(18); 
          fill(255);
//          text("I WOULD SUGGEST USING A HIGH", width/2-150, height/2-50);   
//          text("CONTAGION VIRUS WITH A SEMI", width/2-150, height/2-30);  
//          text("-AUTOMATIC SYRINGE", width/2-150, height/2-10); 
      }
      
      function disagreestatement(){
            image(hand,  width/2-width*.1, height*.3, width*.7, height*.7);
            image(fourchandisagree, width/2-width*.1, height*.3, width*.7, height*.7); 
            
            //fill(255);
//          text("DON'T JOKE ABOUT THAT STUFF", width/2-150, height/2-30);   
       }
       
      function takeOwnAdvice(){
          fill(255);   
          text("-TAKE YOUR OWN ADVICE", 100, height*.85);
          
          mouseMoved(); 
          if(dist(115, height*.85, mouseX, mouseY)<=40){
             fill(199, 163,21, 80); 
             rect(100, height*.82, width*.25, height*.04);
        }
      }
      
     function newsOwnAdvice(){
       image(movieownadvice, 0, 0, 1200, 700); 
//       fill(0); 
////       rect(75, height*.7, width*.4, height*.3);
//       
       fill(0); 
       rect(width/2- width*.25, height*.3-height*.25, width*.5, height*.5); 
       
//       fill(255); 
//       text("BREAKING NEWS",width*.27, height*.22);
//       text("HAZARDMAN OPENED INFECTION", width*.27, height*.27); 
//       text("ON (INSERT LOCATION) IN (INSERT STATE)", width*.27,height*.32);
//       text("PERPETRATOR IS THOUGHT TO HAVE OBTAINED", width*.27, height*.37); 
//       text("HIS VIRULENT HAZARD HOURS BEFORE FROM THE", width*.27, height*.42); 
//       text("LOCAL HAZARD SHOW.", width*.27, height*.47);    
       }
       
       function goIntoMovies(){
         fill(0); 
         rect(75, height*.7, width*.4, height*.3);
         
         fill(255);   
         text("YOU WEREN'T BEING SERIOUS, YOU'RE A GOOD GUY", 100, height*.75);
         text("-GO INTO THE MOVIE THEATER", 115, height*.80);  
        mouseMoved(); 
      if(dist(115, height*.80, mouseX, mouseY)<=50){
             fill(199, 163,21, 80); 
             rect(110, height*.77, width*.20, height*.04);
        }
      }
      
      function goIntoMall(){
        fill(0); 
         rect(75, height*.7, width*.4, height*.3);
         
         fill(255);   
         text("YOU WEREN'T BEING SERIOUS, YOU'RE A GOOD GUY", 100, height*.75); 
         text("-DO SOME SHOPPING AT THE MALL", 115, height*.80);
       
        mouseMoved(); 
      if(dist(115, height*.80, mouseX, mouseY)<=50){
             fill(199, 163,21, 80); 
             rect(100, height*.77, width*.15, height*.04);
        }
      }
      
      function goToClass(){
        fill(0); 
         rect(75, height*.7, width*.4, height*.3);
         
         fill(255);   
         text("YOU WEREN'T BEING SERIOUS, YOU'RE A GOOD GUY", 100, height*.75); 
         text("-GO TO CLASS", 115, height*.80);
         
       mouseMoved(); 
      if(dist(115, height*.80, mouseX, mouseY)<=50){
             fill(199, 163,21, 80); 
             rect(100, height*.77, width*.15, height*.04);
        }
      }
      
      function newsAccident(){
       fill(0); 
       rect(75, height*.7, width*.4, height*.3);
       
       image(moviegoodguy, 0, 0, 1200, 700); 
//       fill(0); 
//       rect(width/2- width*.25, height*.3-height*.25, width*.5, height*.5); 
//       
//       fill(255); 
//       text("BREAKING NEWS",width*.27, height*.22);
//       text("HAZARDMAN OPENED INFECTION", width*.27, height*.27); 
//       text("ON (INSERT LOCATION) IN (INSERT STATE)", width*.27,height*.32);
//       text("IN A SAD TURN OF EVENTS, ADMIST THE PANIC", width*.27, height*.37); 
//       text("A CITIZEN TRYING TO DETAIN THE HAZARDMAN", width*.27, height*.42); 
//       text("ACCIDENTALLY INFECTED 2 INNOCENT BYSTANDERS.", width*.27, height*.47);    
//        
//        
     }
     
     function goodguy(){
         fill(0); 
         rect(75, height*.7, width*.4, height*.3);
         
         fill(255); 
         text("YOU'RE A GOOD GUY. YOU BRING YOUR", 100, height*.75); 
         text("HAZARD WITH YOU.", 100, height*.80);
         text("-CONTINUE TO DESTINATION", 115, height*.85); 
       
       mouseMoved(); 
       if(dist(115, height*.85, mouseX, mouseY)<=50){
            fill(199, 163,21, 80); 
            rect(115, height*.82, width*.25, height*.04);
        }
      }
      
      function gobacktoshow(){
         fill(255); 
          text("-GO BACK TO SHOW TO PURCHASE A HAZARD", 100, height*.85);
          
           mouseMoved(); 
       if(dist(115, height*.85, mouseX, mouseY)<=50){
            fill(199, 163,21, 80); 
            rect(105, height*.82, width*.35, height*.04);
        }
      }
      
      
      
   
    function mousePressed(){
     if(state>1){
     if(dist(450, height*.95, mouseX, mouseY)<=40){
            state= 0;   
            var hazard= false;
            var oregon= false; 
            var connecticut= false; 
            var colorado= false; 
            var sc= false; 
            var NEBRASKA= false; 
            var NY= false; 
            
            var movies= false; 
            var mall= false; 
            var school= false; 
            var agree= false; 
            var disagree= false; 
            var terrible= false; 
            var goodguy= false; 
            
            var kids = false;  
            var strange= false;
          }
       }
    
     if(state==49){//goodguy continue
       if(dist(115, height*.85, mouseX, mouseY)<=50){
          state= 48; //accidental bystander 
      }
     }
       
    if(state==46){
        if(dist(115, height*.80, mouseX, mouseY)<=50){
             state=48; //accidental bystander
        }
    }
    
    if(state==51 && hazard==false){
        if(dist(115, height*.75, mouseX, mouseY)<=40){
           state=48; //continue to blank    
      }
        if(dist(115, height*.85, mouseX, mouseY)<=40){
            state= 0;   
            var hazard= false;
            var oregon= false; 
            var connecticut= false; 
            var colorado= false; 
            var sc= false; 
            var NEBRASKA= false; 
            var NY= false;   
            
            var movies= false; 
            var mall= false; 
            var school= false; 
            var agree= false; 
            var disagree= false; 
            var terrible= false; 
            var goodguy= false; 
            
            var kids = false;  
            var strange= false;
     }
    
    }
    
    if(state==51 && hazard==true){
        if(dist(115, height*.85, mouseX, mouseY)<=40){
           state=49; //good guy     
      }
    }
      
     if(state==53 && hazard==true){
        if(dist(115, height*.75, mouseX, mouseY)<=40){
           state=46; //continue to blank    
      }
        if(dist(115, height*.85, mouseX, mouseY)<=40){
           state=47; //take your own advice   
           println("state= 47");     
      }
    }
    
    if(state==53 && hazard==false){
        if(dist(115, height*.75, mouseX, mouseY)<=40){
           state=46; //continue to blank    
      }
      //go back to purchase 
        if(dist(115, height*.85, mouseX, mouseY)<=40){
            state= 0;   
            var hazard= false;
            var oregon= false; 
            var connecticut= false; 
            var colorado= false; 
            var sc= false; 
            var NEBRASKA= false; 
            var NY= false;   
            
            var movies= false; 
            var mall= false; 
            var school= false; 
            var agree= false; 
            var disagree= false; 
            var terrible= false; 
            var goodguy= false; 
            
            var kids = false;  
            var strange= false;
     }
    }
    
    if(state==45 && hazard==true){
        if(dist(115, height*.80, mouseX, mouseY)<=40){
           state=12; //go home
        }
        if(dist(115, height*.75, mouseX, mouseY)<=40){
           state=48; //continue to blank    
      }
    }
    
    if(state==45 && hazard==false){
        if(dist(115, height*.80, mouseX, mouseY)<=40){
           state=12; //go home
        }
        if(dist(115, height*.75, mouseX, mouseY)<=40){
           state=48; //continue to blank    
      }
    }
    
    if(state==44){
       if(dist(115, height*.80, mouseX, mouseY)<=40){
            state=53;  
            agree= true;  
            println("agree true");    
         }
       if(dist(115, height*.85, mouseX, mouseY)<=40){
            state=45; 
            disagree= true; 
            println("disagree true"); 
         }          
    }
    if(state==50 && hazard==false){
         if(dist(115, height*.75, mouseX, mouseY)<=40){
           state=48; //continue to blank    
      }
      if(dist(115, height*.80, mouseX, mouseY)<=40){
           state=12; 
        }
    }
    
    if(state==50 && hazard==true){
      if(dist(115, height*.75, mouseX, mouseY)<=40){
           state=48; //continue to blank    
      }  
      
      if(dist(115, height*.80, mouseX, mouseY)<=40){
           state=12; 
        }
    }
    
    if(state==43 && hazard==false){
        if(dist(115, height*.75, mouseX, mouseY)<=40){
           state=48; //continue to blank    
      }  
      
        if(dist(115, height*.80, mouseX, mouseY)<=40){
           state=12; 
        }
    }
       
    if(state==43 && hazard==true){
        if(dist(115, height*.75, mouseX, mouseY)<=40){
           state=48; //continue to blank    
      }  
      
        if(dist(115, height*.80, mouseX, mouseY)<=40){
           state=12; 
        }
    }
    
//    if(state==43){
//       if(dist(115, height*.75, mouseX, mouseY)<=50){
//           state=45;        
//      } 
//    }   
       
    
    
    if(state==41){
      if(dist(115, height*.75, mouseX, mouseY)<=50){
            state=50 ;
            //that's terrible, terrible=true      
      }
       if(dist(115, height*.85, mouseX, mouseY)<=40){
            state=51;      
           //clicks more good guys; goodguys=true 
       }  
    }
       
    if(state==40){
      if(dist(115, height*.75, mouseX, mouseY)<=50){
            state=44 ;//give advice
          }
       if(dist(115, height*.85, mouseX, mouseY)<=40){
            state=43 ;//that was strange, continue to destination 
            strange= true; 
         }
        
    }
    if(state==23){
     if(dist(115, height*.75, mouseX, mouseY)<=50){
          state=40; //4chan
       }
       if(dist(115, height*.85, mouseX, mouseY)<=40){
          state=41; //facebook  
         } 
    }
    
     if(state==33){
       if(dist(115, height*.75, mouseX, mouseY)<=50){
         state=34; 
      }
     
     }
      
     if(state==30){
       //watch tv with kids? 
      if(dist(115, height*.75, mouseX, mouseY)<=50){
             state=31; //yes
          }
       if(dist(115, height*.85, mouseX, mouseY)<=40){
             state=33; //no 
             println("state=33"); 
         }
     }
     
     if(state==62){
         if(dist(115, height*.90, mouseX, mouseY)<=50){
            state=30; 
      }
     }
         
      if(state==22 && hazard==false){
         //home, no kids, no hazard
         if(dist(115, height*.75, mouseX, mouseY)<=50){
            state= 29; //clicks watch tv
         }
      }
      
     if(state==22 && hazard==true){
        if(dist(115, height*.75, mouseX, mouseY)<=50){
            state= 29; 
       }
     }
     
     if(state==28){
       if(dist(115, height*.75, mouseX, mouseY)<=50){
            state=60; //yes you can know combo, takes to badguys
      }
      
       if(dist(115, height*.85, mouseX, mouseY)<=40){
            state=62; //no ccant know combo
         }
     
     }
      
      if(state==28){
        //home with kids, hazard
        //PUT IN SAFE
        //WATCH TV  
        if(dist(115, height*.75, mouseX, mouseY)<=50){
           state= 30; //CLICK WATCH TV
        }
      }
      if(state==61){
         if(dist(115, height*.85, mouseX, mouseY)<=50){
          state= 30;  //watch tv with kids? 
      }
     }
     
      if(state==21 && hazard==false){
        //home with kids no hazard
         if(dist(115, height*.75, mouseX, mouseY)<=50){
           state= 61; //CLICK WATCH TV
        }
      }
      
      if(state==60 && hazard==true){
          if(dist(115, height*.85, mouseX, mouseY)<=50){
          state=61; //WATCH TV 
      }
      
       if(dist(115, height*.90, mouseX, mouseY)<=40){
          state=61; //watch tv
         }
      }
      
      if(state==27 && hazard==true){
         if(dist(115, height*.85, mouseX, mouseY)<=50){
            state=28; //PUTS IN SAFE
      }
      
         if(dist(115, height*.90, mouseX, mouseY)<=40){
            state=60; //NO, IT WILL BE FINE
         }
      }
      
      if(state==21 && hazard==true){
        //WHERE TO PUT HAZARD
        if(dist(115, height*.85, mouseX, mouseY)<=40){
            state= 27; //closet
        }
       if(dist(115, height*.89, mouseX, mouseY)<=40){
            state= 28; //child asks for combo 
         }
       }
      
      if(state==19){
        //ARE THERE KIDS AT HOME? 
          if(dist(115, height*.75, mouseX, mouseY)<=50){
           state = 21; // YES
           kids= true; 
          }
       if(dist(115, height*.85, mouseX, mouseY)<=40){
           state = 22; //NO
           kids= false; 
           println("state=22"); 
         }
      }
      
      if(state==20){
          if(dist(115, height*.75, mouseX, mouseY)<=50){
             state=23; //movies 
              movies= true; 
          }
       if(dist(115, height*.85, mouseX, mouseY)<=40){
            state= 23; //school
            school= true; 
         }
       if(dist(115, height*.89, mouseX, mouseY)<=40){
            state=23; //mall 
            mall= true; 
            
         }
      }
      
      if(state==12){
         if(dist(115, height*.80, mouseX, mouseY)<=30){
               state=19; //oregon 
               oregon= true; 
               }
         if(dist(300, height*.80, mouseX, mouseY)<=30){
               state=19; //conneticut  
               connecticut= true; 
               }
         if(dist(115, height*.85, mouseX, mouseY)<=30){
               state=19; //colorado  
               colorado = true; 
               }
         if(dist(300, height*.85, mouseX, mouseY)<=30){
               state=19; //south carolina
               sc= true;   
               }
         if(dist(115, height*.90, mouseX, mouseY)<=30){
               state=19; //NY 
               NY= true; 
               }
         if(dist(300, height*.90, mouseX, mouseY)<=30){
               state=19; //NEBRASKA 
               NEBRASKA= true; 
               }
             } 
             
      if(state==13){
        //ARE YOU GOING HOME   
        if(dist(115, height*.75, mouseX, mouseY)<=50){
            state= 12; //yes
          }
       if(dist(115, height*.85, mouseX, mouseY)<=40){  
            state= 20; //no
         } 
        }
       
      if(state==11 || state==32){
          if(dist(115, height*.75, mouseX, mouseY)<=50){
               state=13; //are you going home
               }
      }
      
      if(state==9 || state==10){
          if(dist(115, height*.87, mouseX, mouseY)<=50){
               state=11; //warning label
               }
      }
      
      if(state==5){
         if(dist(115, height*.75, mouseX, mouseY)<=50){
               state=9; //yes
               }
                if(dist(115, height*.85, mouseX, mouseY)<=40){
               state=10; //no
               }
           } 
     if(state==4){      
      if(dist(115, height*.75, mouseX, mouseY)<=50){
              state=32; 
        }
     }
        
         
     if(state==3){
         if(dist(115, height*.75, mouseX, mouseY)<=40){
                     state= 5; //chose virus1 
                }
         if(dist(115, height*.8, mouseX, mouseY)<=50){
                     state= 5; //chose virus 2
                     println("state = 6");
                }
         if(dist(115, height*.85, mouseX, mouseY)<=50){
                    state= 5; //chose virus 3
                    println("state = 7");
               }
     }
     if(state==2){
        if(dist(115, height*.75, mouseX, mouseY)<=50){
             state= 3; //chose make a purchase 
             println("state = 3"); 
             hazard= true; 
        }
        if(dist(115, height*.90, mouseX, mouseY)<=50){
             state= 4; //chose nothing 
             hazard= false; 
             println("hazard= false"); 
          }
        }
        
     if(state==1){ 
       if(dist(width*.75, height*.80, mouseX, mouseY)<=300){
            state= 2; 
            println("state = 2"); 
         }
       }
    
    if(state==0){    
    if(dist(width*.5, height*.25, mouseX, mouseY)<=200 && mousePressed){
         state= 1; 
       }
    }
     
     if(state==-1){
         state=0; 
     }
     
    }
