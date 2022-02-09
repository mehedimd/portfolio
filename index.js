      // navbar sticky
      window.onscroll = function() {stickyFunction()};

      var navbar = document.getElementById("sticky");
      var sticky = navbar.offsetTop;

      function stickyFunction() {
      if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
      } else {
      navbar.classList.remove("sticky");
      }
      }

      //navbar sticky section end


      function myFunction(){
      let x = document.querySelector("#headerId");
      if(x.className === "header"){
          x.className += " responsive";
          console.log("x")
      }
      else{
          x.className = "header";
      }
     }
     function bodyClick(){
      let x = document.querySelector("#headerId");
      if(x.classList[1] == "responsive"){
          x.className = "header"
          
     }
     else{
         console.log("not responsive")
     }
  }
  

//--------my skills 
$(".circle_percent").each(function() {
    var $this = $(this),
		$dataV = $this.data("percent"),
		$dataDeg = $dataV * 3.6,
		$round = $this.find(".round_per");
	$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");	
	$this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
	$this.prop('Counter', 0).animate({Counter: $dataV},
	{
		duration: 2000, 
		easing: 'swing', 
		step: function (now) {
            $this.find(".percent_text").text(Math.ceil(now)+"%");
        }
    });
	if($dataV >= 51){
		$round.css("transform", "rotate(" + 360 + "deg)");
		setTimeout(function(){
			$this.addClass("percent_more");
		},1000);
		setTimeout(function(){
			$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
		},1000);
	} 
});