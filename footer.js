$(function(){
    var topBtn=$('#pagetop');
    topBtn.hide();
   
    //ボタンの表示設定
    $(window).scroll(function(){
      if($(this).scrollTop()>500){
        //---- 画面を800pxスクロールしたら、ボタンを表示する
        topBtn.fadeIn();
      }else{
        //---- 画面が800pxより上なら、ボタンを表示しない
        topBtn.fadeOut();
      } 
    });
   
    //ボタンをクリックしたら、スクロールして上に戻る
    topBtn.click(function(){
      $('body,html').animate({
      scrollTop: 0},500);
      return false;
    });
  });