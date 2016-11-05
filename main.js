var pulldown=0;
var recovery;
var deletenodes=[];
function main(){
  $('#pulldownbtn').mouseenter(function(){
      $('#pulldownmenu').slideDown('slow');
      pulldown=1;
    });
  $('#mainpulldown').mouseleave(function(){
      $('#pulldownmenu').slideUp('slow');
      pulldown=0;
  });
  $('#pulldownbtn').click(function(){
    if(pulldown==1){
        $('#pulldownmenu').slideUp('slow');
        pulldown=0;
    }
    else{
        $('#pulldownmenu').slideDown('slow');
        pulldown=1;
    }
  });
  if(document.getElementById('mainrow')!=null){
    recovery=document.getElementById('mainrow').innerHTML;
  }
  dynamic();
  dynamicsort();
}
$(document).ready(main);

//dynamic sidebar
function dynamic(){
  var alltitles=document.getElementsByClassName('articletitle');
  if(document.getElementById('postrecently')!=null){
    document.getElementById('postrecently').innerHTML='';
  }
  for(var i=0;i<10&&i<alltitles.length;i++){
    var antitle=alltitles.item(i);
    var text=antitle.innerHTML;
    $('#postrecently').append("<p class='navgator' onclick='navgation(this.innerHTML)'>"+text+"</p><br>");
  }
  $('#friendlinkbox').append('<a href="https://blog.chionlab.moe">ChionLab</a><br>');
  $('#friendlinkbox').append('<a href="http://www.csdn.net">CSDN.NET</a><br>');
  $('#friendlinkbox').append('<a href="http://www.v2ex.com">V2EX</a><br>');
  $('#friendlinkbox').append('<a href="http://www.w3school.com.cn">W3SCHOOL</a><br>');
  $('#friendlinkbox').append('<a href="https://www.codecademy.com">CODECADEMY</a>');
}
//动态分类
function dynamicsort(){
  $('#mainpage').click(function(){
    window.location.href='index.html';
  });
  $('#aboutme').click(function(){
    window.location.href='aboutme.html';
  });
  $('#list-linux').click(function(){
    $('.select').removeClass('actived');
    $('#list-linux').addClass('actived');
    document.getElementById('mainrow').innerHTML=recovery;
    document.title='Stephen_Blog(linux)';
    var allarticle=document.getElementsByClassName('articles');
      for(var i=0;i<allarticle.length;i++){
        var anarticle=allarticle.item(i);
        if(!anarticle.classList.contains('linux')){
          deletenodes.push(anarticle);
        }
      }
      for(var j=0;j<deletenodes.length;j++){
        var articleparent=deletenodes[j].parentNode;
        articleparent.removeChild(deletenodes[j]);
      }
      deletenodes=[];
      dynamic();
  });
  $('#list-javascript').click(function(){
    $('.select').removeClass('actived');
    $('#list-javascript').addClass('actived');
    document.getElementById('mainrow').innerHTML=recovery;
    document.title='Stephen_Blog(javascript)';
    var allarticle=document.getElementsByClassName('articles');
    for(var i=0;i<allarticle.length;i++){
      var anarticle=allarticle.item(i);
      if(!anarticle.classList.contains('javascript')){
        deletenodes.push(anarticle);
      }
    }
    for(var j=0;j<deletenodes.length;j++){
      var articleparent=deletenodes[j].parentNode;
      articleparent.removeChild(deletenodes[j]);
    }
    deletenodes=[];
    dynamic();
  });
  $('#list-github').click(function(){
    $('.select').removeClass('actived');
    $('#list-github').addClass('actived');
    document.getElementById('mainrow').innerHTML=recovery;
    document.title='Stephen_Blog(github)';
    var allarticle=document.getElementsByClassName('articles');
    for(var i=0;i<allarticle.length;i++){
      var anarticle=allarticle.item(i);
      if(!anarticle.classList.contains('github')){
        deletenodes.push(anarticle);
      }
    }
    for(var j=0;j<deletenodes.length;j++){
      var articleparent=deletenodes[j].parentNode;
      articleparent.removeChild(deletenodes[j]);
    }
    deletenodes=[];
    dynamic();
  });
}
//导航函数
function navgation(name){
  var obj=document.getElementById(name);
  var y=obj.offsetTop
  console.log(y);
  window.scrollTo(0,y+340);
}
