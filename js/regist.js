var em=0;
    var ac=0;
    var mi=0;
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
            var danxuan = document.getElementsByClassName("ra");
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
            $(".box_input:eq(1)").blur(function () 
            { 
                if(account($(this).val()))
                {
                    $("#mima").css("display","none");
                    mi=1;
                }
                else
                {
                    $("#mima").css("display","block");
                    mi=0;
                }
            })
            $(".box_input:eq(2)").blur(function () {
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
                if(ac&&em&&mi)
                {
                    if(danxuan[0].checked||danxuan[1].checked)
                    {
                        var a=confirm("确定要提交信息吗？");
                        if(a==true)
                        {
                               $.post("/Register",
                                {
                                    Username : $(".box_input:eq(0)").val(),
                                    Password : $(".box_input:eq(1)").val(),
                                    Email : $(".box_input:eq(2)").val(),
                                    Usertype : $(".ra:checked").val()
                                })
                            alert("注册成功！");
                            window.open("first.html",+"_self")
                        }
                    }
                    else
                    {
                        alert("请选择读者账号还是作者账号");
                    }
                }
                else
                {
                    alert("请检查账户名，密码或邮箱格式是否正确")
                }
            })
      })