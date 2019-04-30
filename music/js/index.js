$(document).ready(function(){

  var playlist = [
	{
      title:"只想做你的超级英雄，伴你一辈子",
      artist:"糖糖",
      mp3:"http://tool.qc5u.net/music/qq/004JaCzc1KhTrU.mp3",
      poster: "http://pqpwa2jrr.bkt.clouddn.com/kelianbukeshuo.jpg"
    },
    {
      title:"可恋不可说",
      artist:"糖糖",
      mp3:"http://tool.qc5u.net/music/qq/001fk9Xm2SUhla.mp3",
      poster: "http://pqpwa2jrr.bkt.clouddn.com/meinv_01.jpg"
    },
    {
      title:"已寻找到夜空中最亮的星",
      artist:"糖糖",
      mp3:"http://tool.qc5u.net/music/qq/001NmPTG1fVsUw.mp3",
      poster: "http://pqpwa2jrr.bkt.clouddn.com/yekong.jpg"
    },
	];
	
/*	{
      title:"Cro Magnon Man",
      artist:"The Stark Palace",
      mp3:"http://jq22.qiniudn.com/i2.mp3",
      poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
    },
	这个可以自己随便加了  嘎嘎嘎嘎嘎啊噶
	/mxlogo/web/fmbox/mp3/
	*/
  
  
  
  
  
  var cssSelector = {
    jPlayer: "#jquery_jplayer",
    cssSelectorAncestor: ".music-player"
  };
  
  var options = {
    swfPath: "http://cdnjs.cloudflare.com/ajax/libs/jplayer/2.6.4/jquery.jplayer/Jplayer.swf",
    supplied: "ogv, m4v, oga, mp3"
  };
  
  var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);

  setInterval(function(){
	  $(".music-player").css({ top : ( $(window).height() - $(".music-player").height())/2 });
  }, 1);
	
 	$(".download img").hover(function(){
		$(this).attr({ "src" : "img/link2.png" });
	}, function(){
		$(this).attr({ "src" : "img/link1.png" });
	});
	
});