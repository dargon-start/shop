$(function() {


    // var timer = null;
    // var width = 1226;
    // var i = 0;
    // var delay = 4000;
    // var speed = 400;
    // //复制第一张图片，追加到最后一张之后
    // var firstimg = $('.hot li').first().clone();
    // $('.hot').append(firstimg).width($('.hot li').length * width); //长度为6
    // timer = setInterval(imgChange, delay);

    // //图片的自动切换
    // function ischeck() {
    //     //显示第一张图
    //     if (i == $('.hot li').length) {
    //         i = 1;
    //         //如果i=length，下一张应该显示第二张图片，因为最后一张与第一张图片相同
    //         // ，将定为改为第一张图片，可以避免图片倒退
    //         $('.hot').css({
    //             left: 0
    //         })
    //     };
    //     $('.hot').stop().animate({
    //         left: -i * width
    //     }, speed);
    //     fadeOut($('.hot').find($('li').eq(i)), 1);
    //     fadeIn($('.hot').find($('li').eq(i + 1)), 1);

    // }
    // //自动切换对应点
    // function dotchange() {
    //     if (i == $('.hot li').length - 1) {
    //         $('.dot li').eq(0).addClass('on').siblings().removeClass('on');
    //     } else {
    //         $('.dot li').eq(i).addClass('on').siblings().removeClass('on');
    //     }
    // }

    // function imgChange() {
    //     i++;
    //     ischeck();
    //     dotchange();
    // }
    // //鼠标移入暂停移动，移除继续
    // $('.banner').hover(function() {
    //         clearInterval(timer);
    //     }, function() {
    //         timer = setInterval(imgChange, delay);
    //     })
    //     //鼠标划入圆点
    // $('.dot li').click(function() {
    //         i = $(this).index();
    //         $('.hot').stop().animate({
    //             left: -i * width
    //         }, 200)
    //         dotchange();
    //     })
    //     //左右切换
    // $('.prev').click(function() {
    //     i--;
    //     //如果为-1，下一张应该显示第五张图，将定位改为第6张的位置
    //     if (i == -1) {
    //         i = $('.hot li').length - 2;
    //         $('.hot').css({
    //             left: -($('.hot li').length - 1) * width
    //         })
    //     }
    //     $('.hot').stop().animate({
    //         left: -i * width
    //     }, speed)
    //     dotchange();
    // })
    // $('.next').click(function() {
    //     imgChange();
    // })

    //轮播图的缓慢切换




    // 淡入淡出效果
    var $hlis = $('.hot li');
    var $dlis = $('.dot li');
    var num = 0;
    $hlis.eq(0).show();
    //定时器控制切换图片
    function ftime() {
        num++;
        if (num > 4) {
            num = 0;
        }
        $hlis.eq(num).stop().fadeIn().siblings().stop().fadeOut();
        $dlis.eq(num).addClass('on').siblings().removeClass('on');
    }
    var tim = setInterval(ftime, 4000);

    //圆点切换
    $dlis.click(function() {
        num = $(this).index();
        $dlis.eq(num).stop().addClass('on').siblings().stop().removeClass('on');
        $hlis.eq(num).fadeIn().siblings().fadeOut();
        clearInterval(tim);
        tim = setInterval(ftime, 4000);
    });

    //左切换键
    var isclickp = true; //防止多次点击
    $('.arrow .prev').click(function() {
            if (isclickp) {
                isclickp = false;
                num--;
                if (num < 0) {
                    num = 4;
                }
                $hlis.eq(num).stop().fadeIn().siblings().stop().fadeOut();
                $dlis.eq(num).addClass('on').siblings().removeClass('on');
                clearInterval(tim);
                tim = setInterval(ftime, 4000);
            }
            setTimeout(function() {
                isclickp = true;
            }, 1000);
        })
        //右切换键
    var isclick = true;
    $('.arrow .next').click(function() {
            if (isclick) {
                isclick = false;

                num++;
                if (num > 4) {
                    num = 0;

                }
                $(this).attr('disabled', true);

                $hlis.eq(num).stop().fadeIn().siblings().stop().fadeOut();
                $dlis.eq(num).addClass('on').siblings().removeClass('on');
                clearInterval(tim);
                tim = setInterval(ftime, 4000);
            }

            setTimeout(function() {
                isclick = true;
            }, 1000);

        })
        //鼠标悬停事件
    $hlis.mouseover(function() {
            clearInterval(tim);
        }).mouseout(function() {
            tim = setInterval(ftime, 4000);
        })
        //防止左右切换键连续点击







    //倒计时
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth();
    var day = time.getDate();
    var datetime = new Date(year, month, day, 22, 00, 00);
    var endtime = datetime.getTime();

    function seckill() {
        var nowtime = new Date();
        var now = nowtime.getTime();
        //求时间差，并转换为秒
        var remainming = parseInt((endtime - now) / 1000);
        if (remainming > 0) {
            h = parseInt((remainming / 3600));
            m = parseInt((remainming / 60) % 60);
            s = parseInt(remainming % 60);

            h = h < 10 ? '0' + h : h;
            m = m < 10 ? '0' + m : m;
            s = s < 10 ? '0' + s : s;
        } else {
            clearInterval(id);
            h = m = s = '00';
        }
        document.getElementById('h').innerHTML = h;
        document.getElementById('m').innerHTML = m;
        document.getElementById('s').innerHTML = s;

    }
    seckill();
    var id = setInterval(seckill, 1000);

    // 轮播移动图
    //li顶部颜色
    for (let i = 0; i < 10; i += 4) {
        $('.container-ul li a').eq(i).css('borderTop', '1px solid #83c44e');
    }
    for (let i = 1; i < 10; i += 4) {
        $('.container-ul li a').eq(i).css('borderTop', '1px solid #2196f3');
    }
    for (let i = 2; i < 10; i += 4) {

        $('.container-ul li a').eq(i).css('borderTop', '1px solid #e53935');

    }
    // console.log($('.container-ul li a').length);
    //左右移动控制
    function examine() {
        var left = $('#container-ul').css('left');
        if (left === '0px') {
            $('.move-controls .move-prev').css('color', '#e0e0e0');
            $('.move-controls .move-prev').css('cursor', 'default');
            $('.move-controls .move-prev').removeClass('mo');

        } else if (left === '-1490px') {
            $('.move-controls .move-next').css('color', '#e0e0e0');
            $('.move-controls .move-next').css('cursor', 'default');
            $('.move-controls .move-next').removeClass('mo1');
        } else {

            $('.move-controls .move-prev').css('color', '#b0b0b0');
            $('.move-controls .move-prev').css('cursor', 'pointer');
            $('.move-controls .move-prev').addClass('mo');
            $('.move-controls .move-next').css('color', '#b0b0b0');
            $('.move-controls .move-next').css('cursor', 'pointer');
            $('.move-controls .move-next').addClass('mo1');
        }
    }
    examine();
    setInterval(examine, 30);

    $('.move-controls .move-prev').css('color', '#e0e0e0');
    $('.move-controls .move-prev').click(function() {
        clearInterval(movetm);

        $('.container-ul').width($('.container-ul li').length * 248);
        var left = $('.container-ul').css('left');
        if (left === '0px') {
            $(' #container-ul').stop().css({
                left: 0
            });
        } else if (left === '-992px') {
            $(' #container-ul').stop().animate({
                left: 0
            }, 1000);
        } else if (left === '-1490px') {
            $(' #container-ul').stop().animate({
                left: -992
            }, 1000);
        }
        movetm = setInterval(move, 5000);

    });
    $('.move-controls .move-next').click(function() {
        clearInterval(movetm);
        $('.container-ul').width($('.container-ul li').length * 248);

        var left = $('.container-ul').css('left');

        if (left === '0px') {
            $(' #container-ul').stop().animate({
                left: -992
            }, 1000);
        } else if (left === '-992px') {
            $(' #container-ul').stop().animate({
                left: -1490
            }, 1000);
        } else if (left === '-1490px') {
            $(' #container-ul').stop().css({
                left: -1490
            });
        }
        movetm = setInterval(move, 5000);
    })


    function move() {
        $('.container-ul').width($('.container-ul li').length * 248);
        var left = $('#container-ul').css('left');
        // console.log(left);
        if (left === '0px') {

            $(' #container-ul').stop().animate({
                left: -992
            }, 1000);
        } else if (left === '-992px') {
            $(' #container-ul').stop().animate({
                left: -1490
            }, 1000);
        } else if (left === '-1490px') {
            $(' #container-ul').stop().animate({
                left: 0
            }, 1000);
        }
    }
    var movetm = setInterval(move, 5000);
    //下滑列表
    var index = -1;
    $('.sou-zhong li').mouseover(function() {
        index = $(this).index();
        // console.log(index);
        if (index < 7) {
            $('.sou-zhong-container').stop().slideDown(500);
            $('.sou-zhong-child>li').eq(index).addClass('visible').siblings().removeClass('visible');
        }
    })

    $('.sou-zhong li').mouseout(function() {
        $('.sou-zhong-container').stop().slideUp();
    })

    $('.sou-zhong-container').mouseover(function() {
        // console.log(index);
        $(this).stop().show();
        $('.sou-zhong-child>li').eq(index).addClass('visible').siblings().removeClass('visible');
    })
    $('.sou-zhong-container').mouseout(function() {
        $(this).stop().slideUp();

    })

    //回到顶部按钮
    // console.log(window.pageYOffset);

    function totop() {
        var tp = document.getElementById('totop');
        var top = window.pageYOffset || document.documentElement.scrollTop;
        // var top = window.scrollY;
        if (top > screen.height) {
            tp.style.display = 'block';
        } else {
            tp.style.display = 'none';
        }
    }
    setInterval(totop, 30);
    var t = null;
    $('#totop').click(function() {
        t = setInterval(function() {
            var top = window.pageYOffset || document.documentElement.scrollTop;
            console.log(top);
            var isspeed = Math.floor(-top / 8);
            if (top == 0) {
                clearInterval(t);
            }
            window.pageYOffset = document.documentElement.scrollTop = top + isspeed;
        }, 30);
    })

    //轮播图左侧划出内容
    // console.log($('.lbox>ul>li>a'));

    $('.lbox>ul>li').mouseover(function() {
        var ind = $(this).index();
        // console.log(ind);
        $(this).find('.lbox-children').show();
    });
    $('.lbox>ul>li').mouseout(function() {
        $(this).find('.lbox-children').hide();
    });

    //热门切换
    var dex = 0;
    // $('.bd-right ul').eq(dex).addClass('list-show');
    $('.hd-more .tab-list li').mouseover(function() {
        $(this).addClass('list-active').siblings().removeClass('list-active');
        dex = $(this).index();
        $('.bd-right ul').eq(dex).addClass('list-show').siblings().removeClass('list-show');
    });
    // 打开视频窗口
    var $vdex;
    $('.goods-video .box-bd .vedio-item').click(function() {
        $vdex = $(this).index();
        console.log($vdex);
        $('.opt').eq($vdex).show();
    })
    var video = document.getElementsByTagName('video');
    console.log(video);
    $('.opt .opt-box a').click(function() {
        $('.opt').eq($vdex).hide();
        video[$vdex].pause();
    })
})