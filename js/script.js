    $(function() {
        $('.index-btn').click(function() {
        $('.active').removeClass('active');
        
        // 変数clickedIndexを定義し、クリックしたボタンのインデックス番号を代入してください
        var clickedIndex=$('.index-btn').index($(this));
        
        // eqの引数をclickedIndexに書き換えてください
        $('.slide').eq(clickedIndex).addClass('active');
        
        });

    // $('.twitter-share-button').hover(function(){
    //     $(this).animate({
    //         'font-size':'35px'
    //     }, 300);
        
    //     },
    //     function(){
    //     $(this).animate({
    //         'font-size':'24px'
    //     }, 300);
    //     });
    });