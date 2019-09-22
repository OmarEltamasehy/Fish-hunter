/* Arshad Muhammed */
function start() {

    
    var anim_id;
    var container = document.getElementById('container'); console.log("container :" + container);
    var car = document.getElementById('car'); console.log("car :" + car);
    
    var car_1 = document.getElementById('car_1'); console.log("car 1 :" + car_1);
    var car_2 = document.getElementById('car_2'); console.log("car 1 :" + car_2);
    var car_3 = document.getElementById('car_3'); console.log("car 1 :" + car_3);
    
    // var line_1 = document.getElementById('line_1'); console.log("car 1 :" + line_1);
    // var line_2 = document.getElementById('line_2'); console.log("car 1 :" + line_2);
    // var line_3 = document.getElementById('line_3'); console.log("car 1 :" + line_3);
    
    var restart_div =  document.getElementById('restart_div');
    var restart_btn =  document.getElementById('restart'); 

    var score = document.getElementById('score');
    var high_score = localStorage.getItem('high_score');
    //var high_score = 42;
    document.getElementById('high_score').innerText = high_score;
    
    //saving some initial setup

    var container_left = parseInt(container.offsetLeft);console.log("container_left :" + container_left);
    var container_width = parseInt(container.offsetWidth);console.log("container_width :" + container_width);
    var container_height = parseInt(container.offsetHeight); console.log("container_height :" + container_height);
    var car_width = parseInt(car.offsetWidth); console.log("car_width :" + car_width);
    var car_height = parseInt(car.offsetHeight); console.log("car_height :" + car_height);

    //some other declarations
    var game_over = false;

    var score_counter = 1;

    var speed = 2;
    var line_speed = 5;

    var move_right = false;
    var move_left = false;
    var move_up = false;
    var move_down = false;

    /* ------------------------------GAME CODE STARTS HERE------------------------------------------- */

    /* Move the cars */
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



    
    function left() {
        if (game_over === false && parseInt(car.offsetLeft) > 0) {
            car.style.left = parseInt(car.offsetLeft) - 5 + "px"
            move_left = requestAnimationFrame(left);
        }
    }

    function right() {

        if (game_over === false && parseInt( car.offsetLeft ) < container_width - car_width) {
            car.style.left = parseInt(car.offsetLeft) + 5 +"px";
            move_right = requestAnimationFrame(right);
           
        }
    }

    function up() {
        if (game_over === false && parseInt(car.offsetTop) > 0 ) {
            //car.css('top', parseInt(car.css('top')) - 3);
            car.style.top = parseInt(car.offsetTop) - 3 + "px";
            move_up = requestAnimationFrame(up);
        }
    }

    function down() {
        if (game_over === false && parseInt(car.offsetTop) < container_height - car_height) {
            //car.css('top', parseInt(car.css('top')) + 3);
            car.style.top = parseInt(car.offsetTop) + 3 + "px";
            move_down = requestAnimationFrame(down);
        }
    }

    /* Move the cars and lines */
    anim_id = requestAnimationFrame(repeat);



    var count  = 0;   // for eating fish counter  
    Huntedfish = document.getElementById('Huntedfish');

    var car_4 = document.getElementById("car_4");
    car_4.style.display = "none"

    function repeat() {
        // if (collision(car, car_1) || collision(car, car_2) || collision(car, car_3)) {
        //     //stop_the_game()
        //     return;
        // }



        if (collision(car, car_4)){
            stop_the_game()
            return;
        }

        if (collision(car, car_1)){
            car_1.style.display = "none";
           
            car.style.width = parseInt(car.style.width) +10 +"px";
             
            
            setTimeout(() => {
                car_1.style.display = "block";
            }, 2000);
            count++;
            Huntedfish.innerText = count;


        }

        if (collision(car, car_2)){
            car_2.style.display = "none";
            

            setTimeout(() => {
                car_2.style.display = "block";
            }, 2000);
            count++;
            Huntedfish.innerText = count;

        }

        if (collision(car, car_3)){
            car_3.style.display = "none";
            
            setTimeout(() => {
                car_3.style.display = "block";
            }, 2000);
            count++;
            Huntedfish.innerText = count;
        }

        score_counter++;

        if (score_counter % 20 == 0) {
           // score.text(parseInt(score.text() + 1);
           score.innerText = parseInt(score.innerText) +1 ;
        }
        if (score_counter % 500 == 0) {
            speed++;
            line_speed++;
        }

        car_down(car_1);
        car_down(car_2);
        car_down(car_3);
        car_down(car_4);

        // line_down(line_1);
        // line_down(line_2);
        // line_down(line_3);


        setInterval(() => {
            car_4.style.display = "block";
        }, 5000);

        anim_id = requestAnimationFrame(repeat);
    }



    function car_down(car) {
        var car_current_top = parseInt(car.offsetTop);
        if (car_current_top > container_height) {
            car_current_top = -200;
            var car_left = parseInt(Math.random() * (container_width - car_width));
            //car.css('left', car_left);
            car.style.left = car_left + "px";
        }
        //car.css('top', car_current_top + speed);
        car.style.top = car_current_top + speed +"px";
    }

    // function line_down(line) {
    //     var line_current_top = parseInt(line.offsetTop);
    //     if (line_current_top > container_height) {
    //         line_current_top = -300;
    //     }
    //     line.style.top = line_current_top + line_speed + "px";
    // }

    restart_btn.onclick = function() {
        location.reload();
    };

    

    function stop_the_game() {
        game_over = true;
        cancelAnimationFrame(anim_id);
        cancelAnimationFrame(move_right);
        cancelAnimationFrame(move_left);
        cancelAnimationFrame(move_up);
        cancelAnimationFrame(move_down);
        
        restart_div.style.display = "block";
        //alert("Game Over");
        //
        restart_btn.focus();
        setHighScore();
    }

    function setHighScore() {
        if (high_score < parseInt(score.innerText)) {
            high_score = parseInt(score.innerText);
            localStorage.setItem('high_score', parseInt(score.innerText));
        }
        //$('#high_score').text(high_score);
        document.getElementById('high_score').innerText = high_score;
    }

    /* ------------------------------GAME CODE ENDS HERE------------------------------------------- */
    //Some Outer JavaScript Functions
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
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = div2.offsetLeft;
        var y2 = div2.offsetTop;
        var h2 = outerHeight(div2);
        var w2 = outerWidth(div2);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
        return true;
    }



}


start();