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



$(function()//ajax
{
   var btn="";
   var check_key=0;
   $.ajax({
            url : '123',
            success : function(data)
            {
                $.each(data,function(index,book)
                {
                    if((index%2)==0)
                    {
                        if(index==0)
                        {
                            check_key++;  
                        btn+="<div class='box1'><div class='box_b1'><div class='box_img'><img src='"                      
                            +book["Imgurl"]+"'></div><div id='shoucang'>收藏量:</div><div id='shuzi'>"
                            +book["Fans"]+"</div><div class='box_name'>"
                            +book["Name"]+"</div><img src='../img/gold.png' class='cup'><span class='box_type'>"
                            +book["Booktype"]+"</span><span class='box_small_line'></span><span class='box_author'>"
                            +book["Author"]+"</span><a href='../book/?"
                            +book["Bookid"]+"'><span class='box_add'><img src='../img/add.png'></span></a><div class='box_include'><p>"
                            +book["Brief"]+"</p></div></div>";
                        }
                        else if(index==2)
                        {
                            check_key++;  
                        btn+="<div class='box1'><div class='box_b1'><div class='box_img'><img src='"                      
                            +book["Imgurl"]+"'></div><div id='shoucang'>收藏量:</div><div id='shuzi'>"
                            +book["Fans"]+"</div><div class='box_name'>"
                            +book["Name"]+"</div><img src='../img/tong.png'><span class='box_type'>"
                            +book["Booktype"]+"</span><span class='box_small_line'></span><span class='box_author'>"
                            +book["Author"]+"</span><a href='../book/?"
                            +book["Bookid"]+"'><span class='box_add'><img src='../img/add.png'></span></a><div class='box_include'><p>"
                            +book["Brief"]+"</p></div></div>"
                        }
                        else
                        {
                            check_key++;  
                        btn+="<div class='box1'><div class='box_b1'><div class='box_img'><img src='"                      
                            +book["Imgurl"]+"'></div><div id='shoucang'>收藏量:</div><div id='shuzi'>"
                            +book["Fans"]+"</div><div class='box_name'>"
                            +book["Name"]+"</div><span class='box_type'>"
                            +book["Booktype"]+"</span><span class='box_small_line'></span><span class='box_author'>"
                            +book["Author"]+"</span><a href='../book/?"
                            +book["Bookid"]+"'><span class='box_add'><img src='../img/add.png'></span></a><div class='box_include'><p>"
                            +book["Brief"]+"</p></div></div>"
                        }
                    }
                    if((index%2)==1)
                    {
                        if(index==1)
                        {
                            check_key--;
                        btn+="<div class='box_big_line'></div><div class='box_b2'><div class='box_img'><img src='"
                            +book["Imgurl"]+"'></div><div id='shoucang'>收藏量:</div><div id='shuzi'>"
                            +book["Fans"]+"</div><div class='box_name'>"
                            +book["Name"]+"</div><img src='../img/silver.png'><span class='box_type'>"
                            +book["Booktype"]+"</span><span class='box_small_line'></span><span class='box_author'>"
                            +book["Author"]+"</span><a href='../book/?"
                            +book["Bookid"]+"'><span class='box_add'><img src='../img/add.png'></span></a><div class='box_include'><p>"
                            +book["Brief"]+"</p></div></div></div>"
                        }
                        else
                        {
                            check_key--;
                        btn+="<div class='box_big_line'></div><div class='box_b2'><div class='box_img'><img src='"
                            +book["Imgurl"]+"'></div><div id='shoucang'>收藏量:</div><div id='shuzi'>"
                            +book["Fans"]+"</div><div class='box_name'>"
                            +book["Name"]+"</div><span class='box_type'>"
                            +book["Booktype"]+"</span><span class='box_small_line'></span><span class='box_author'>"
                            +book["Author"]+"</span><a href='../book/?"
                            +book["Bookid"]+"'><span class='box_add'><img src='../img/add.png'></span></a><div class='box_include'><p>"
                            +book["Brief"]+"</p></div></div></div>"
                        }
                    }
                })
                if(check_key)
            {
                btn+="</div>";
                $("#book_block2").append(btn);
            }
            else
            {
                $("#book_block2").append(btn);
            }
            }
   })
})