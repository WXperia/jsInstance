$(function(){
        var $banner = $('.sn_banner');
        var $imgbox = $banner.find('ul:first');
        var $pointbox = $banner.find('ul:last');
        var point = $pointbox.find('li');
        
        
        var index = 1;
        var anim = function (){
            console.log('1')
            $imgbox.animate({transform:'translate('+(-index*10)+'%)'},200,function(){
                if(index >=9){
                    index = 1 ;
                    $imgbox.css({transform:'translate('+(-index*10)+'%)'})
                }else if(index <=0){
                    index = 8;
                    $imgbox.css({transform:'translate('+(-index*10)+'%)'})
                }
                point.removeClass('now').eq(index-1).addClass('now')    
            })
            
        }
        var banAuto = function(){
            index++;
            anim();
        }
        
        var time = setInterval(banAuto,2000)
        $banner.on('swipeRight',function (){
            clearInterval(time);
            index --
            anim();
            time = setInterval(banAuto,2000);
        })
        $banner.on('swipeLeft',function (){
            clearInterval(time);
            index ++
            anim();
            time = setInterval(banAuto,2000);
        })
})

