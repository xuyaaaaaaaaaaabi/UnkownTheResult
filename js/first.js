$(function()
{
    $("#wow1").css("cursor","pointer");
    $("#wow2").css("cursor","pointer");
    $("#wow1").hover(function()
    {
        $("#two").append("We know you do not have any problem ,<br/>meanwhile it is hard to guess yours but testing.<br/>Please return back.");
    },
    function () {
        $("#two").html("");
      })
    $("#wow2").hover(function()
    {
        $("#two").append("TEL:13994788199<br/>QQ:1241859128");
    },
    function()
    {
        $("#two").html("");
    })


    $("#login_buttom").click(
    function()
    {
        
    }
    )
})
