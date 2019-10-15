/* iTi Fish Hunter */

function start() {
<<<<<<< HEAD
    //Graping Audio files
=======

>>>>>>> 0a2cbf1aa981ac8a263f60600b67467f47da5ee4
    var audio = new Audio('Eating.mp3');      // yasser
    var audio2 = new Audio('underwater.mp3');  // yasser
    var audio3 = new Audio('SoundGameOver.mp3'); //yasser
    var audio4 = new Audio('cup.mp3'); //yasser

    var anim_id;
    var container = document.getElementById('container'); 
    var fish = document.getElementById('fish'); 
    var fishImg = document.getElementById('myFish');
    
    // for selecting character 
    fishImg.src = localStorage.getItem("selected_character");
<<<<<<< HEAD
    //Setting scores and high score
    var score = document.getElementById('score');
    var high_score = localStorage.getItem('high_score');
    document.getElementById('high_score').innerText = high_score;
    var levelNum = document.getElementById("levelNum"); 

    //Selecting Fish Divs
=======
    
    var levelNum = document.getElementById("levelNum"); 

>>>>>>> 0a2cbf1aa981ac8a263f60600b67467f47da5ee4
    var fish_1 = document.getElementById('fish_1'); 
    var fish_2 = document.getElementById('fish_2'); 
    var fish_3 = document.getElementById('fish_3');
    var fish_4 = document.getElementById("fish_4"); 
    var fish_5 = document.getElementById("fish_5");
    var fish_6 = document.getElementById("fish_6");

    var shark1 = document.getElementById("shark1");
    var shark3 = document.getElementById("shark3");
    var diamond = document.getElementById('diamond'); 
    var pearl = document.getElementById('pearl'); 
     
    var restart_div =  document.getElementById('restart_div');
    var restart_btn =  document.getElementById('restart'); 
    var win_div =  document.getElementById('win_div');
    var win_btn =  document.getElementById('win_restart'); 

<<<<<<< HEAD
    //saving some initial setup
=======
    var score = document.getElementById('score');
    var high_score = localStorage.getItem('high_score');
    
    document.getElementById('high_score').innerText = high_score;
    
    //saving some initial setup

    var container_left = parseInt(container.offsetLeft);
>>>>>>> 0a2cbf1aa981ac8a263f60600b67467f47da5ee4
    var container_width = parseInt(container.offsetWidth);
    var container_height = parseInt(container.offsetHeight); 
    var fish_width = parseInt(fish.offsetWidth); 
    var fish_height = parseInt(fish.offsetHeight); 

    //some other declarations
    var game_over = false;
<<<<<<< HEAD
    var score_counter = 1;
    var count  = 0;   // for eating fish counter  
    
    var speed = 2;   //Speed of the comming fishes
    var appear = 0; //to control appearing elements for the first time
=======

    var score_counter = 1;
    var count  = 0;   // for eating fish counter  
    var StagingCounter = 0;
    
    var speed = 2;
    var appear = 0; //to control appearin elements for once
>>>>>>> 0a2cbf1aa981ac8a263f60600b67467f47da5ee4

    var move_right = false;
    var move_left = false;
    var move_up = false;
    var move_down = false;

    /* ------------------------------GAME CODE STARTS HERE------------------------------------------- */

    /* Move the fishes */
    document.addEventListener('keydown' , function(e) {
        if (game_over === false) {
            var key = e.keyCode;
            if (key === 37 && move_left === false) {
                move_left = requestAnimationFrame(left);
            } else if (key === 39 && move_right === false) {
                move_right = requestAnimationFrame(right);
            } else if (key === 38 && move_up === false) {
                move_up = requestAnimationFrame(up);
            } else if (key === 40 && move_down === false) {
                move_down = requestAnimationFrame(down);
            }
        }
    });
    
    document.addEventListener('keyup' , function(e) {
        if (game_over === false) {
            var key = e.keyCode;
            if (key === 37) {
                cancelAnimationFrame(move_left);
                move_left = false;
            } else if (key === 39) {
                cancelAnimationFrame(move_right);
                move_right = false;
            } else if (key === 38) {
                cancelAnimationFrame(move_up);
                move_up = false;
            } else if (key === 40) {
                cancelAnimationFrame(move_down);
                move_down = false;
            }
        }
    });

<<<<<<< HEAD
=======

>>>>>>> 0a2cbf1aa981ac8a263f60600b67467f47da5ee4
    function left() {
        if (game_over === false && parseInt(fish.offsetLeft) > 0) {
            fish.style.left = parseInt(fish.offsetLeft) - 8 + "px"
            move_left = requestAnimationFrame(left);
        }
    }

    function right() {
<<<<<<< HEAD
        if (game_over === false && parseInt( fish.offsetLeft ) < container_width - fish_width) {
            fish.style.left = parseInt(fish.offsetLeft) + 8 +"px";
            move_right = requestAnimationFrame(right);  
=======

        if (game_over === false && parseInt( fish.offsetLeft ) < container_width - fish_width) {
            fish.style.left = parseInt(fish.offsetLeft) + 8 +"px";
            move_right = requestAnimationFrame(right);
           
>>>>>>> 0a2cbf1aa981ac8a263f60600b67467f47da5ee4
        }
    }

    function up() {
        if (game_over === false && parseInt(fish.offsetTop) > 0 ) {
            fish.style.top = parseInt(fish.offsetTop) - 3 + "px";
            move_up = requestAnimationFrame(up);
        }
    }

    function down() {
        if (game_over === false && parseInt(fish.offsetTop) < container_height - fish_height) {
            fish.style.top = parseInt(fish.offsetTop) + 3 + "px";
            move_down = requestAnimationFrame(down);
        }
    }

    /* Start the smooth moving */
    anim_id = requestAnimationFrame(repeat);
<<<<<<< HEAD
    /* Hide some elements to be used later */
    fish_4.style.display = "none";
    //to be shown in the 2nd level
    fish_5.style.display = "none";  
    shark1.style.display = "none";  
=======
  
    /* Hide some elements to be used later */
    fish_4.style.display = "none";
    
    //to be shown in the 2nd level
    fish_5.style.display = "none";  
    shark1.style.display = "none";  

>>>>>>> 0a2cbf1aa981ac8a263f60600b67467f47da5ee4
    //to be shown in the last level
    fish_6.style.display = "none";  
    shark3.style.display = "none";  
    pearl.style.display = "none"; 
    
    function repeat() {
<<<<<<< HEAD
=======
     
>>>>>>> 0a2cbf1aa981ac8a263f60600b67467f47da5ee4
        //level 1
        if (count >=0 && count <= 50){
            levelNum.innerHTML = "1";
        }
<<<<<<< HEAD
        //level 2
        if(count >=51 && count <= 100){
            levelNum.innerHTML = "2";
=======

        //level 2
        if(count >=51 && count <= 100){
            levelNum.innerHTML = "2";

>>>>>>> 0a2cbf1aa981ac8a263f60600b67467f47da5ee4
            //To display it once;
            if(appear == 0){
                fish_5.style.display = "block";
                shark1Fun(); 
                appear++;
<<<<<<< HEAD
            } 
        }
=======
            }
           
        }

>>>>>>> 0a2cbf1aa981ac8a263f60600b67467f47da5ee4
        //level 3
        if(count >=101 && count <= 150){
            levelNum.innerHTML = "3";
            if(appear == 1){
                pearl.style.display = "block";
                fish_6.style.display = "block";
                shark2Fun();
                appear++;
            }
<<<<<<< HEAD
        }
        //The cup
        if(count>150){
            levelNum.innerHTML = "Win";
            the_end();  
        }

=======
            
        }

        //The cup
        if(count>150){
            levelNum.innerHTML = "Win";
            the_end();
            
        }


>>>>>>> 0a2cbf1aa981ac8a263f60600b67467f47da5ee4
        //enemy collisions
        if (collision(fish, fish_4) || collision(fish, shark1) || collision(fish, shark3) ){
            stop_the_game()
            return;
        }
<<<<<<< HEAD
        //Play the background music
        audio2.play();  // yasser

        //Friendly Collisions
=======

         audio2.play();  // yasser


>>>>>>> 0a2cbf1aa981ac8a263f60600b67467f47da5ee4
        if (collision(fish, fish_1)){
            fish_1.style.display = "none";  
            fishImg.style.width = parseInt(fishImg.offsetWidth) + 1 +"px";
            fishImg.style.height = parseInt(fishImg.offsetHeight) + 1 +"px";
            setTimeout (audio.play() , 50) // yasser
<<<<<<< HEAD
=======

            
>>>>>>> 0a2cbf1aa981ac8a263f60600b67467f47da5ee4
            setTimeout(() => {
                fish_1.style.display = "block";
            }, 2000);
            count++;
            score.innerText = count;   
        }

<<<<<<< HEAD
=======
        //Friendly Collisions
>>>>>>> 0a2cbf1aa981ac8a263f60600b67467f47da5ee4
        if (collision(fish, fish_2)){
            fish_2.style.display = "none";
            fishImg.style.width = parseInt(fishImg.offsetWidth) + 1 +"px";
            fishImg.style.height = parseInt(fishImg.offsetHeight) + 1 +"px";
<<<<<<< HEAD
            setTimeout (audio.play() , 50) ;// yasser
=======

            setTimeout (audio.play() , 50) ;// yasser

            
>>>>>>> 0a2cbf1aa981ac8a263f60600b67467f47da5ee4
            setTimeout(() => {
                fish_2.style.display = "block";
            }, 2000);
            count++;
            score.innerText = count; 
        }

<<<<<<< HEAD
=======

>>>>>>> 0a2cbf1aa981ac8a263f60600b67467f47da5ee4
        if (collision(fish, fish_3)){
            fish_3.style.display = "none";
            fishImg.style.width = parseInt(fishImg.offsetWidth) + 1 +"px";
            fishImg.style.height = parseInt(fishImg.offsetHeight) + 1 +"px";
<<<<<<< HEAD
            setTimeout (audio.play() , 50) ;// yasser
=======

            setTimeout (audio.play() , 50) ;// yasser


>>>>>>> 0a2cbf1aa981ac8a263f60600b67467f47da5ee4
            setTimeout(() => {
                fish_3.style.display = "block";
            }, 2500);
            count++;
            score.innerText = count;
        }

        if (collision(fish, fish_5)){
            fish_5.style.display = "none";
            fishImg.style.width = parseInt(fishImg.offsetWidth) + 1 +"px";
            fishImg.style.height = parseInt(fishImg.offsetHeight) + 1 +"px";
            setTimeout (audio.play() , 50) ;// yasser
<<<<<<< HEAD
=======

>>>>>>> 0a2cbf1aa981ac8a263f60600b67467f47da5ee4
            setTimeout(() => {
                fish_5.style.display = "block";
            }, 3500);
            count++;
            score.innerText = count;
        }

        if (collision(fish, fish_6)){ 
            fish_6.style.display = "none";
            fishImg.style.width = parseInt(fishImg.offsetWidth) + 1 +"px";
            fishImg.style.height = parseInt(fishImg.offsetHeight) + 1 +"px";
<<<<<<< HEAD
            setTimeout (audio.play() , 50) ;// yasser
=======

            setTimeout (audio.play() , 50) ;// yasser

>>>>>>> 0a2cbf1aa981ac8a263f60600b67467f47da5ee4
            setTimeout(() => {
                fish_6.style.display = "block";
            }, 6000);
            count +=2;
            score.innerText = count;
        }

<<<<<<< HEAD
=======

>>>>>>> 0a2cbf1aa981ac8a263f60600b67467f47da5ee4
        if (collision(fish, diamond)){
            diamond.style.display = "none";
            fishImg.style.width = parseInt(fishImg.offsetWidth) + 1 +"px";
            fishImg.style.height = parseInt(fishImg.offsetHeight) + 1 +"px";
<<<<<<< HEAD
            setTimeout (audio.play() , 50) ;// yasser
=======

            setTimeout (audio.play() , 50) ;// yasser

            
>>>>>>> 0a2cbf1aa981ac8a263f60600b67467f47da5ee4
            setTimeout(() => {
                diamond.style.display = "block";
            }, 8000);
            count +=3;
            score.innerText = count;
        }

        if (collision(fish, pearl)){
            pearl.style.display = "none";
            fishImg.style.width = parseInt(fishImg.offsetWidth) + 3 +"px";
            fishImg.style.height = parseInt(fishImg.offsetHeight) + 3 +"px";
<<<<<<< HEAD
            setTimeout (audio.play() , 50) ;// yasser
=======

            setTimeout (audio.play() , 50) ;// yasser

            
>>>>>>> 0a2cbf1aa981ac8a263f60600b67467f47da5ee4
            setTimeout(() => {
                pearl.style.display = "block";
            }, 15000);
            count +=5;
            score.innerText = count;
        }


        //For Controlling the Speed
        score_counter++;
        if (score_counter % 1600 == 0 ) {
            speed++;     
        }

        //Friends
        fish_down(fish_1);
        fish_down(fish_2);
        fish_down(fish_3);
        fish_down(diamond);
        fish_down(fish_5);
        fish_down(pearl);
        fish_down(fish_6);
<<<<<<< HEAD
=======


>>>>>>> 0a2cbf1aa981ac8a263f60600b67467f47da5ee4
        // Enemy
        fish_down(shark1);
        fish_down(fish_4);
        fish_down(shark3);

        //this is for the first shark executed automatically
        setInterval(() => {
            fish_4.style.display = "block";
        }, 4000);
<<<<<<< HEAD
        //To start showing shark1
=======

>>>>>>> 0a2cbf1aa981ac8a263f60600b67467f47da5ee4
        function shark1Fun()
        {
            setInterval(() => {
                shark1.style.display = "block";
            }, 7000);
<<<<<<< HEAD
        }
        //Start showing shark2
        function shark2Fun()
=======

        }
            function shark2Fun()
>>>>>>> 0a2cbf1aa981ac8a263f60600b67467f47da5ee4
        {
            setInterval(() => {
                shark3.style.display = "block";
            }, 10000);
        }
          
<<<<<<< HEAD
        //To continuosly repeat sliding the fishes
        anim_id = requestAnimationFrame(repeat);
    }

    //To randomly slide the fishes down
=======
        //To continuosly respond on pressing the key
        anim_id = requestAnimationFrame(repeat);
    }



>>>>>>> 0a2cbf1aa981ac8a263f60600b67467f47da5ee4
    function fish_down(fish) {
        var fish_current_top = parseInt(fish.offsetTop);
        if (fish_current_top > container_height) {
            fish_current_top = -200;
            var fish_left = parseInt(Math.random() * (container_width - fish_width));
            fish.style.left = fish_left + "px";
        }
        fish.style.top = fish_current_top + speed +"px";
    }

    restart_btn.onclick = function() {
        location.reload();
    };

    win_btn.onclick = function() {
        location.reload();
    };

<<<<<<< HEAD
=======
    

>>>>>>> 0a2cbf1aa981ac8a263f60600b67467f47da5ee4
    function stop_the_game() {
        game_over = true;
        cancelAnimationFrame(anim_id);
        cancelAnimationFrame(move_right);
        cancelAnimationFrame(move_left);
        cancelAnimationFrame(move_up);
        cancelAnimationFrame(move_down);
        audio2.pause(); //yasser
        audio3.play(); //yasser
        restart_div.style.display = "block";
        restart_btn.focus();
        setHighScore();
    }

    function the_end() {
        game_over = true;
        cancelAnimationFrame(anim_id);
        cancelAnimationFrame(move_right);
        cancelAnimationFrame(move_left);
        cancelAnimationFrame(move_up);
        cancelAnimationFrame(move_down);
        audio2.pause(); //yasser
<<<<<<< HEAD
        win_div.style.display = "block";
        win_btn.focus();
        setTimeout (audio4.play() , 4000)//yasser
        setHighScore();
    }

=======

        win_div.style.display = "block";
        win_btn.focus();
        setTimeout (audio4.play() , 4000)//yasser

        setHighScore();
    }

    

>>>>>>> 0a2cbf1aa981ac8a263f60600b67467f47da5ee4
    function setHighScore() {
        if (high_score < parseInt(score.innerText)) {
            high_score = parseInt(score.innerText);
            localStorage.setItem('high_score', parseInt(score.innerText));
        }
        document.getElementById('high_score').innerText = high_score;
    }

    /* ------------------------------GAME CODE ENDS HERE------------------------------------------- */
<<<<<<< HEAD

    function collision(div1, div2) {
        var x1 = div1.offsetLeft;
        var y1 = div1.offsetTop; 
        var h1 = div1.offsetHeight;
        var w1 = div2.offsetWidth/2;
=======
    
    //Some Outer size JavaScript Functions
    function outerHeight(el) {
        var height = el.offsetHeight;
        var style = getComputedStyle(el);
        height += parseInt(style.marginTop) + parseInt(style.marginBottom);
        return height;
    }

    function outerWidth(el) {
        var width = el.offsetWidth;
        var style = getComputedStyle(el);
        width += parseInt(style.marginLeft) + parseInt(style.marginRight);
        return width;
    }

    function collision(div1, div2) {
        var x1 = div1.offsetLeft;
        var y1 = div1.offsetTop;
        var h1 = outerHeight(div1);
        var w1 = outerWidth(div1);
>>>>>>> 0a2cbf1aa981ac8a263f60600b67467f47da5ee4
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = div2.offsetLeft;
        var y2 = div2.offsetTop;
<<<<<<< HEAD
        var h2 = div2.offsetHeight;
        var w2 = div2.offsetWidth/2;
=======
        var h2 = outerHeight(div2);
        var w2 = outerWidth(div2);
>>>>>>> 0a2cbf1aa981ac8a263f60600b67467f47da5ee4
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
        return true;
    }

}
<<<<<<< HEAD
//To start the whole function 
=======

>>>>>>> 0a2cbf1aa981ac8a263f60600b67467f47da5ee4
start();


