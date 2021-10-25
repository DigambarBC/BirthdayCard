// confetti.start()
$(document).ready(function () {


    $("#startBtn").click(function (e) {
        $("#start").attr("hidden", true);
        $("#Banner").attr("hidden", false);
        var audio = new Audio('asset/mp3/shot_B_day.mp3');
        audio.play();

    
        var audio1 = new Audio('asset/mp3/cheer.mp3');
        window.setTimeout(function(){
            startConfetti()
            audio1.play();
            window.setTimeout(function(){
                console.log("hi")
                stopConfetti();
    
                window.setTimeout(function(){
                    $("#Banner").addClass("animated slideOutLeft");
                    $("#Banner").attr("hidden", true);
    
                    $("#features").addClass("animated slideInRight");
                    $("#features").attr("hidden", false);
    
                    window.setTimeout(function(){
                        $("#features").removeClass("animated slideInRight");
                    },2000)
    
                },1000)
            },2000)
            
        },19000)


        
        $(".box-body").click(function () {

            $(this).addClass("box-body-js");
            party.confetti(this);
    
            window.setTimeout(function () {
                $('#centralModalInfo').modal('show')
            }, 4000)
    
        });


        
    });

   
  
    

});