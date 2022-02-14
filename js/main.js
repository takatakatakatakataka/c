

document.querySelector('video').playbackRate = 0.5;


  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/

  $('.hamburger').on('click', function() {

    hamburger();
  });

  $('#navi a').on('click', function() {

    hamburger();
  })

/*=================================================
ハンバーガ―メニューfunction
===================================================*/

function hamburger() {

  $('.hamburger').toggleClass('active');

  if ($('.hamburger').hasClass('active')) {

    $('#navi').addClass('active');
  } else {

    $('#navi').removeClass('active');
  }
  
}




const animationTargetElements = document.querySelectorAll('.textAnimation');
for (let i = 0; i < animationTargetElements.length; i++) {
  const targetElement =animationTargetElements[i],
  texts=targetElement.textContent,
  textsArray=[];

  targetElement.textContent='';

  for (let j = 0; j < texts.split('').length; j++) {
    const t =texts.split('')[j]
    if(t===' '){
      textsArray.push(' ');
    }else{
     
      textsArray.push('<span><span style="animation-delay:'+(j*0.1)+'s">'+ t + '</span></span>')

    }
  }

  for (let k = 0; k < textsArray.length; k++) {
    targetElement.innerHTML+= textsArray[k];
    
  }
  
}

$('a').hide()
$('a').fadeIn(1000)

/*=================================================
  スクロールフェード表示
  ===================================================*/

  $(window).scroll(function() {

    $('.fadein').each(function() {

      let scroll = $(window).scrollTop();

      let target = $(this).offset().top;

      let windowHeight = $(window).height();

      if (scroll > target - windowHeight + 200) {
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });


  /*=================================================
  タブ切り替え
  ===================================================*/
  $(function(){

    $('.tab2,.tab3').hide()
  
    $(".tab a").click(function(){

      $(".item").hide();

      $($(this).attr("href")).show();
  
      $(".current").removeClass("current");
  
      $(this).addClass("current");
  
      return false;
    });
  });
  

  $(function() {

    $(".alert").hide();
  
    $("#submitBtn").click(function(){

      let sendFlag = true;
  

      if(!$("#text").val()){

        $("#textSection .alert").show();
        sendFlag = false; 
      }else{
 
        $("#textSection .alert").hide();
      }
      if(!$("#email").val()){

        $("#emailSection .alert").show();
        sendFlag = false; 
      }else{

        $("#emailSection .alert").hide();
      }

      let radioChk = $('input[name = "radio"]:checked').length;
  

      if(radioChk == 0){

        $("#radioSection .alert").show();
        sendFlag = false; 
      }else{

        $("#radioSection .alert").hide();
      }
  

      let chkboxChk = $('input[name = "checkbox"]:checked').length;
  

      if(chkboxChk < 1){

        $("#checkboxSection .alert").show();
        sendFlag = false; 
      }else{

        $("#checkboxSection .alert").hide();
      }
  

      if($("select").val() == "none"){

        $("#selectSection .alert").show();
        sendFlag = false;
      }else{

        $("#selectSection .alert").hide();
      }
  

      if(!$("#textarea").val()){

        $("#textareaSection .alert").show();
        sendFlag = false; 
      }else{

        $("#textareaSection .alert").hide();
      }
  

      if(sendFlag == false){
        return false; 
      }
    });
  });
  