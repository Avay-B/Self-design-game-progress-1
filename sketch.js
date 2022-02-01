var computer_paddle; player_paddle;
var ball;
var edges;
var computer_score; player_score;
var game_state;





function setup(){
   


    createCanvas(1000,900);

    computer_paddle = createSprite(10, 500, 20, 100);
    player_paddle = createSprite(990 , 500, 20, 100);
    ball = createSprite(500, 500, 25, 25);

    ball.velocityX = 10;
    ball.velocityY = 7;
    edges = createEdgeSprites();
     computer_score = 0;
    player_score = 0;
    game_state = "serve";


}


function draw(){
    background("white");
    for (var i = 0; i < 900; i+=20) {
        line(500,i,500,i+10);
     }

    

    

    
    if (ball.isTouching(edges[0]) || ball.isTouching(edges[1]) || ball.isTouching(edges[2]) || ball.isTouching(edges[3]) || ball.isTouching(computer_paddle) || ball.isTouching(player_paddle))  {
        ball.bounceOff(computer_paddle);
        ball.bounceOff(player_paddle);
        ball.bounceOff(edges[0]);
        ball.bounceOff(edges[1]);
        ball.bounceOff(edges[2]);
        ball.bounceOff(edges[3]);
    }

    

    

    
    
    drawSprites();

    



}
