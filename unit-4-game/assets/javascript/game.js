let wins=0,losses=0;

let crystalGame={
    cNumber:0,
    uTotal:0,
    
    init:()=>{
       
        $("#overlay").hide();
        $("#crystal-game").show();
        crystalGame.cNumber=Math.floor(Math.random() * (120 - 19) + 19);
        $("#c-total").text(crystalGame.cNumber);
        $("img[id^='crystal-img']").each((i,element) => {
            $(element).prop("alt",(Math.floor(Math.random() * (12 - 1) + 1)));
        });
        $("#u-total").text("0");
        crystalGame.uTotal=0;
        $("#score").text("");
    }
};

$(document).ready(function(){
    crystalGame.init();
});

$("img[id^='crystal-img']").click((event)=>{
        let element=$(event.target);
        crystalGame.uTotal+=parseInt(element.attr("alt"));
        $("#u-total").text(crystalGame.uTotal);
        if(crystalGame.uTotal==$("#c-total").text()){
            wins++;
            $("#wins").text(wins);
            $("#crystal-game").hide();
            $("#overlay").show();
            $("#status").text("Winner!!");
            setTimeout(()=>{
                crystalGame.init();
            },3000);
        }
        if(crystalGame.uTotal>parseInt($("#c-total").text())){
            losses++;
            $("#lost").text(losses);
            $("#crystal-game").hide();
            $("#overlay").show();
            $("#status").text("You lost!");
            setTimeout(()=>{
                crystalGame.init();
            },3000);
            
        }
});