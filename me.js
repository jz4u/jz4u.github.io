
// firebase connections

console.log(firebase);

var database = firebase.database();
var ref = database.ref('response');


//date and time

var d = new Date();
d.getHours(); 
d.getMinutes();
d.getSeconds();


var love = setInterval(function(){
  var r_num = Math.floor(Math.random() * 40) + 1;
	var r_size = Math.floor(Math.random() * 65) + 10;
	var r_left = Math.floor(Math.random() * 100) + 1;
	var r_bg = Math.floor(Math.random() * 25) + 100;
  var r_time = Math.floor(Math.random() * 5) + 5;
  $('.bg_heart').append("<div class='heart' style='width:"+r_size+"px;height:"+r_size+"px;left:"+r_left+"%;background:rgba(255,"+(r_bg-25)+","+r_bg+",1);-webkit-animation:love "+r_time+"s ease;-moz-animation:love "+r_time+"s ease;-ms-animation:love "+r_time+"s ease;animation:love "+r_time+"s ease'></div>");
  
  $('.bg_heart').append("<div class='heart' style='width:"+(r_size-10)+"px;height:"+(r_size-10)+"px;left:"+(r_left+r_num)+"%;background:rgba(255,"+(r_bg-25)+","+(r_bg+25)+",1);-webkit-animation:love "+(r_time+5)+"s ease;-moz-animation:love "+(r_time+5)+"s ease;-ms-animation:love "+(r_time+5)+"s ease;animation:love "+(r_time+5)+"s ease'></div>");
  
  
},500);

var i = 0;
var txt1 = "<<<<<Hi SweetHeart.....!  <<               Now I wan't to say something special to you. <<<                So , Please hear to my heart carefully...!                                                                           > <<I still remember the very first day we met ! < from the very moment i saw you, i knew you were the one for me,< the one that i know i want to spend my life with <<<                  I promise to grow along with you, < to be willing to face change as we both change,< keeping our relationship alive and exciting..!<<<                           when you need someone to encourage you < i want it to be me. <when you need a helping hand,< i want it to be mine.<<                                I promise to be fair and honest and <to always be available for all of you, < whenever and however you need me.              ><<<<< And finally ....., < I promise to love you with all i have to give and all that i am,<the only way i know how       <<<< \"completely and forever\"                         >I Love U <SweetHeart.....! |                  <<<< Give me One chance to Prove my Love ...!";
var speed = 50;
typeWriter();

function acceptMsg(){
  $(".bg_heart").css("background-image","url('acceptMsg.jpg')");
  $(".res-heart").css("visibility","hidden");
  var data = {
    accept: "yes" + d,
    reject: "no" + d
  };
  ref.push(data);
  document.getElementById("text1").innerHTML = ''
  i=0;
  txt1 = "<<< Thank you, < for bringing joy to my heart, < beauty to my world < and love to my life. <<<<< you are the best thing that ever happened to me << love you forever and ever ";  
  typeWriter();
}

function rejectMsg(){
  $(".bg_heart").css("background-image","url('rejectMsg.jpg')");
  $(".res-heart").css("visibility","hidden");
  $(".text1").css("font-color","#404040");
    var data = {
    accept: "no" + d,
    reject: "yes" + d
  };
  ref.push(data);
  document.getElementById("text1").innerHTML = '';
  i=0;
  txt1 = "<<< you are gone !! <<But, thank you, < for all these soft,sweet things<you have left behind<in my heart,<in my head,<in my life...   <<<<< sorry ! for messing the things up";
  typeWriter();
}


function typeWriter() {
  if (i < txt1.length) {        
     if(txt1.charAt(i)=='<')
      document.getElementById("text1").innerHTML += '</br>';
    else if(txt1.charAt(i)=='>')
      document.getElementById("text1").innerHTML = '';
    else if(txt1.charAt(i)=='|')
      {
        $(".bg_heart").css("background-image","url('hih2.jpg')");
        $(".res-heart").css("visibility","visible");
      } else if(txt1.charAt(i)=='&')
      {
        $(".bg_heart").css("background-image","url('hih2.jpg')");
      }
    else
      document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}





