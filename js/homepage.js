$(function()//个人出来
    {
        var index=-1;
        var slideKey=0;
        var last_index=-1;
        var time_record=1;
        var t=0;
        $(".block1_sp_li").hide();
        $(".block1_span").css("cursor","pointer");
        $(".block1_sp_li").css("cursor","pointer");
        $(".block1_span").hover(function()
        {
            if(slideKey)
            {
                if(last_index===0)
                    {
                        $(".block1_sp_li:eq(0)").slideUp("fast");
                        slideKey=0;
                    }
                    else if(last_index===1)
                    {
                        $(".block1_sp_li:eq(1)").slideUp("fast");
                        slideKey=0;
                    }
                    else if(last_index===2)
                    {
                        $(".block1_sp_li:eq(2)").slideUp("fast");
                        slideKey=0;
                    }
                    else if(last_index===3)
                    {
                        $(".block1_sp_li:eq(3)").slideUp("fast");
                        slideKey=0;
                    }
            }
            slideKey=1;
            index=$(this).index();
            last_index=index;
            var $this=$(this);
            setTimeout(function()
            {
                    if(index===0)
                    {
                        $(".block1_sp_li:eq(0)").slideDown("fast");
                    }
                    else if(index===1)
                    {
                        $(".block1_sp_li:eq(1)").slideDown("fast");
                    }
                    else if(index===2)
                    {
                        $(".block1_sp_li:eq(2)").slideDown("fast");
                    }
                    else if(index===3)
                    {
                        $(".block1_sp_li:eq(3)").slideDown("fast");
                    }
            },500);
        },
        function()
        {
            $(".block1_sp_li").mouseover(function()
            {
                $(this).slideDown();
                $("#block1_list  li").hover(function()
                {
                    $(this).css("backgroundColor","white");
                    time_record=1;
                    $(this).click(function()
                    {
                           if($(this).html()=="退出账号")
                           {
                               if(time_record==1)
                               {
                                    time_record++;
                                    var a=confirm("确定要退出账号吗？");
                                    if(a==true)
                                    {
                                        window.open("first.html","_self");
                                    }
                               }
                           }
                           else if($(this).html()=="个人主页")
                           {
                               if(time_record==1)
                               {
                                   window.open("homepage.html","_self");
                                   time_record++;
                               }
                           }
                           else if($(this).html()=="添加书籍")
                           {
                               
                           }
                    })
                },
                function()
                {
                    $(this).css("backgroundColor","transparent");
                })
            })
            $(".block1_sp_li").mouseleave(function()
            {
                $(this).slideUp("fast");
            })
        })
    })

$(function()
    {
        $("#block1_inline").css("cursor","pointer");
        $("#block1_inline").hover(function()
        {
            $(this).css("backgroundColor","rgb(222,253,255)");
        },function()
        {
            $(this).css("backgroundColor","white");
        })
        $("#block1_inline").mousedown(function()
        {
            $(this).css("backgroundColor","rgb(222,253,255)");
        })
        $("#block1_inline").mouseup(function()
        {
            $(this).css("backgroundColor","white");
        })
    })



var index=0;
var t;
function time()
{
        index+=1;
            if(index>=5)
            {
                index-=5
            }
            PictureMove(index);
}

$(function()
    {
        $(".block1_cato_span").css("cursor","pointer").hover(function()
        {
            $(this).css("border-bottom","5px solid rgb(34,69,133)");
        },
        function()
        {
            $(this).css("border",0);
        });
        $(".block1_span:eq(3)").click(function()
        {
            window.open("../html/mybook.html","_blank");
        })
    })

$(function()//设置时间
{
        t=setInterval(time,5000);
})



$(function()
{
    $('._roll_roll_span').css('opacity',0.4).mouseover(function () { //追踪index切换图片
        index=$('._roll_roll_span').index(this);
        PictureMove(index);
}).eq(0).trigger("mouseover");
   
   
function PictureMove(index)//根据index进行图片切换
{
        var swidth = $('#_roll_play').height();
        var moveLeft = -index*swidth;
        $('#_roll_play ul').stop().animate({"top":moveLeft},300);
        $('._roll_roll_span').stop().animate({"opacity":0.4},300).eq(index).animate({"opacity":0.8},20);
}
    
    
    $('#_roll_PreNext_pre').css('opacity',0.2).hover(function()//向左切换
    {
        $(this).stop().animate({"opacity":0.8},200);
    },
    function()
    {
        $(this).stop().animate({"opacity":0.2},200);
    })
    $('#_roll_PreNext_pre').click(function(){
        index-=1;
        if(index<0)
        {
            index+=5;
        }
        PictureMove(index);
    })
    
    
    $('#_roll_PreNext_next').css('opacity',0.2).hover(function()//向右切换
    {
        $(this).stop().animate({"opacity":0.8},200);
    },
    function()
    {
        $(this).stop().animate({"opacity":0.2},200);
    })
    $('#_roll_PreNext_next').click(function(){
        index+=1;
        if(index>=5)
        {
            index-=5;
        }
        PictureMove(index);
    })
})