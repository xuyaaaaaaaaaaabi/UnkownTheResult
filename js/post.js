$(function()
{
    var key=[0,0,0,0];
    var index=0;
    $("#shangchuan").change(function()
    {
        $("#filename").html($("#shangchuan").val());
        $("#sc").css("borderColor","black");
        key[3]=1;
    })
    $(".yangshi_input").change(function()
    {
        if($(this).val()!="")
        {
            $(this).css("borderColor","black");
            if($(this).attr("name")=="Bookname")
            {
                key[0]=1;
            }
            else if($(this).attr("name")=="Author")
            {
                key[1]=1;
            }
            else if($(this).attr("name")=="Brief")
            {
                key[2]=1;
            }
        }
    })
    $("#fasong").click(function()
    {
        if($(".yangshi_input:eq(0)").val()=="")
        {
            $(".yangshi_input:eq(0)").css("borderColor","red");
            key[0]=0;
        }
        if($(".yangshi_input:eq(1)").val()=="")
        {
            $(".yangshi_input:eq(1)").css("borderColor","red");
            key[1]=0;
        }
        if($(".yangshi_input:eq(2)").val()=="")
        {
            $(".yangshi_input:eq(2)").css("borderColor","red");
            key[2]=0;
        }
        if($("#shangchuan").val()=="")
        {
            $("#sc").css("borderColor","red");
            key[3]=0;
        }
        if(key[0]+key[1]+key[2]+key[3]==4)
        {
            var shuju=new FormData(document.getElementById("biaodan") );
            $.ajax(
            {
                cache: false,
                contentType: false,                   
                type: "POST",                   
                dataType:"text",                
                url:"/BookUpload",                
                data:shuju,
                processData:false,              
                async: false,            
                error: function() {                
                    alert("发送失败！");                   
                },                   
                success: function(data) {
                        alert("传输成功！");
                        location.reload();
                }
            })
        }
        else
        {
            alert("请检查哪里没有写哦");
        }
    })
})