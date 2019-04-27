$(document).ready(function(){

  var playlist = [
   {
      title:"夜空中最亮的星",
      artist:"作者",
      mp3:"http://tool.qc5u.net/music/qq/001NmPTG1fVsUw.mp3",
      poster: "img/yekongzhong.jpg"
	  
      
    },
	
   {
      title:"我在呢",
      artist:"",
      mp3:"http://mz.mxlogo.com/mp3-2-wozaine.mp3",
      poster: "img/img-2-wozaine.jpg"
    },
	{
      title:"岚",
      artist:"",
      mp3:"http://mz.mxlogo.com/mp3-3-lan.mp3",
       poster: "img/img-3-lan.jpg"
    },
	
    {
      title:"电子音",
      artist:"",
      mp3:"http://mz.mxlogo.com/mp3-4-dz1.mp3",
      poster: "img/img-4-dz.jpg"
    },
	
	{
      title:"电子音",
      artist:"",
      mp3:"http://mz.mxlogo.com/mp3-4-dz2.mp3",
       poster: "img/img-4-dz.jpg"
    },


	{
      title:"电子音",
      artist:"",
      mp3:"http://mz.mxlogo.com/mp3-4-dz3.mp3",
      poster: "img/img-4-dz.jpg"
    }
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