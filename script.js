const player1 = "X"
const player2 = "O"
var playTime = player1;
var gameOver = false;


atualizaMostrador();
inicializarEspacos();

function atualizaMostrador(){
    if(gameOver){return;}
    if(playTime == player1){
        let player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src", "imagens/x.png");
    }else{
        let player = document.querySelectorAll("div#mostrador img")[0];
    player.setAttribute("src", "imagens/o.png");


    }
};

function inicializarEspacos(){
    var espaco = document.getElementsByClassName("espaco");
    for (var i = 0; i < espaco.length; i++){
        
        espaco[i].addEventListener("click",function(){
            if (gameOver){return;}
            if(this.getElementsByTagName("img").lenght == 0){
                if(playTime ==  player1){
                    this.innerHTML="<img src='imagens/x.png'>";
                    this.setAttribute("jogada", player1);
                    playTime = player2;
                }else{
                    this.innerHTML="<img src='imagens/o.png'>";
                    this.setAttribute("jogada", player2);
                    playTime = player1;

                }
                
            }atualizaMostrador();
        });
    }
}