var em=0;
    var ac=0;
    function email(str)
    {
        
        var reg=/^([a-zA-Z0-9_-]+)\@([a-zA-Z0-9]+)(\.[a-z]{2,3})$/;
        var ret=str.search(reg);
        if(ret==-1)
        {
            return false;
        }
        return true;
    }
    function account(str)
    {
        var reg=/^[a-zA-Z0-9!@#$%^&*()_+=-]{7,15}$/
        var ret=str.search(reg);
        if(ret==-1)
        {
            return false;
        }
        return true;
    }

    $(function () {
            $(".box_input:eq(0)").blur(function () 
            { 
                if(account($(this).val()))
                {
                    $("#account").css("display","none");
                    ac=1;
                }
                else
                {
                    $("#account").css("display","block");
                    ac=0;
                }
            })
            $(".box_input:eq(1)").blur(function () {
                if(email($(this).val()))
                {
                    $("#Email").css("display","none");
                    em=1;
                }
                else
                {
                    $("#Email").css("display","block");
                    em=0;
                }
            })

            $(".box_buttom").click(function () {
                if(ac&&em)
                {
                    var a=confirm("确定要提交信息吗？");
                    if(a==true)
                    {

                    }
                }
                else
                {
                    alert("请检查账户名或邮箱格式是否正确")
                }
            })
      })