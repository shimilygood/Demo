var $loading = $('#js_loading');


function execJs() {
  loadingAll();
//第一部分图片
  function loadingImgs(loadCallback){
    var $ele = $('#container').find('img'),
        len = $ele.length;
    loadImg($ele, 0,function(index){
        var $speed = $('#js_speed');
        $speed.html(Math.floor(((len - (len - index)) / len) * 100) + '%');
    },loadCallback);
  }


  //loading开始
  function loadingAll(){
    loadingImgs(function(){
        alert("加载完成！");
         $loading.fadeOut(500);
        // setTimeout(function(){
        //   $loading.fadeOut(500);
        // },1000);
        // $(".home-page .rose").animate({"opacity":'1'},500);

    });
  }

}


window.onload=function(){
    execJs();

}


