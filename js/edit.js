$(function()
{
    $("#shangchuan").change(function()
    {
        $("#filename").html($("#shangchuan").val());
        $("#sc").css("borderColor","black");
    })
    $("#ziliao input").click(function()
    {
        $("#ziliao input").css("backgroundColor","transparent").css("color","black");
        $(this).css("backgroundColor","black").css("color","white");
        if($(this).index()==1)
        {
            var a=confirm("确定要将该书的所有资料全部移除吗？");
            if(a==true)
            {
                
            }
        }
    })
})