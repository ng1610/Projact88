var canvas= new fabric.Canvas("MyCanvas");

player_x=10;
player_y=10;

block_width=30;
block_height=30;

player_image="";
block_image="";

function player(){
    fabric.Image.fromURL("player.png", function(Img){
        player_image=Img;

        player_image.scaleToWidth(150);
        player_image.scaleToHeight(140);
        player_image.set({
         top: player_y,
         left: player_x
        });
        canvas.add(player_image);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image=Img;

        block_image.scaleToWidth(block_width);
        block_image.scaleToHeight(block_height);
        block_image.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey==true && keypressed=="80"){
     console.log("p and shift pressed together");
     block_width=block_width+10;
     block_height=block_height+10;
     document.getElementById("current_width").innerHTML=block_width;
     document.getElementById("current_height").innerHTML=block_height;
    };
    if(e.shiftKey==true && keypressed=="77"){
        console.log("m and shift pressed together");
        block_width= block_width-10;
        block_height= block_height-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    };
    if(keypressed=="38"){
        up();
        console.log("up");
    };
    
    if(keypressed=="40"){
        down();
        console.log("down");
    };
    
    if(keypressed=="37"){
        left();
        console.log("left");
    };
    
    if(keypressed=="39"){
        right();
        console.log("right");
    };
    
    if(keypressed=="70"){
        new_image("ironman_face.png");
        console.log("f");
    };
    if(keypressed=="66"){
        new_image("spiderman_body.png");
        console.log("b");
    };
    if(keypressed=="76"){
        new_image("hulk_legs.png");
        console.log("l");
    };
    if(keypressed=="82"){
        new_image("thor_right_hand.png");
        console.log("r");
    };
    if(keypressed=="72"){
        new_image("captain_america_left_hand.png");
        console.log("h");
    };

};

function up(){
    if (player_y>=0){
        player_y= player_y- block_height;
        console.log("block height = "+block_height);
        console.log("When up arroe key pressed, x- " + player_x + "y- " + player_y);
        canvas.remove(player_image);
        player();
    }
}
function down(){
    if (player_y<460){
        player_y= player_y+ block_height;
        console.log("block height = "+block_height);
        console.log("When up arroe key pressed, x- " + player_x + "y- " + player_y);
        canvas.remove(player_image);
        player();
    }
}
function left(){
    if (player_x>0){
        player_x= player_x- block_height;
        console.log("block height = "+block_height);
        console.log("When up arroe key pressed, x- " + player_x + "y- " + player_y);
        canvas.remove(player_image);
        player();
    }
}
function right(){
    if (player_x<=850){
        player_x= player_x+ block_height;
        console.log("block height = "+block_height);
        console.log("When up arroe key pressed, x- " + player_x + "y- " + player_y);
        canvas.remove(player_image);
        player();
    }
}