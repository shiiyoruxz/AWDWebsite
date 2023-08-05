$(document).ready(function() 
{
    var arr = new Array(50);
    for (var i = 1; i < 21; i++) 
    { 
        var array = arr[i] = i;
        $(".dropDown2").append("<option value= "+ array + ">" + array + "</option>");
        $(".dropDown4").append("<option value= "+ array + ">" + array + "</option>");
    }   

    $("form").submit(function()
    {
        var i = $(".dropDown option:selected").val();
        var q = $(".dropDown2 option:selected").val();
        var text1 = $("#text1").val();
        var r1 = $('.formInput2 input[name="p"]:checked').val();
        var c = $("#country").val();
        var ass = $("#address").val();
        var ct = $("#contact").val();
        var e = $("#email").val();
        var r2 = $('.formInput4 input[name="pay"]:checked').val();

        var n = 0;
        var a = e.indexOf("@");
        var dot = e.indexOf(".");
        var first = e.substr(0, 1);
        var last = e.substr(-1, 1);

        var submit = false;
        
        if(i == 0)
        {
            $(".error1").text("請選擇商品！").addClass("error");
            var submit = true;
        }
        else
        {
            $(".error1").text("").removeClass("error");
        }

        if(q == 0)
        {
            $(".error2").text("請選擇數量！").addClass("error");
            var submit = true;
        }
        else
        {
            $(".error2").text("").removeClass("error");
        }

        if(text1 == "")
        {
            $(".error3").text("請輸入名字！").addClass("error");
            var submit = true;
        }
        else
        {
            $(".error3").text("").removeClass("error");
        }

        if(!r1)
        {
            $(".error4").text("請選擇本地或非本地人！").addClass("error");
            var submit = true;
        }   
        else
        {
            $(".error4").text("").removeClass("error");
        }

        if(c == "")
        {
            $(".error5").text("請輸入國家！").addClass("error");
            var submit = true;
        }
        else
        {
            $(".error5").text("").removeClass("error");
        }

        if(ass == "")
        {
            $(".error6").text("請輸入地址！").addClass("error");
            var submit = true;
        }
        else
        {
            $(".error6").text("").removeClass("error");
        }

        if(ct == "")
        {
            $(".error7").text("請輸入電話號碼！").addClass("error");
            var submit = true;
        }
        else
        {
            if(isNaN(ct))
            {
                $(".error7").text("請輸入號碼！").addClass("error");
                var submit = true;
            }  
            else
            {
                $(".error7").text("").removeClass("error"); 
            }
        }

        if(e == "")
        {
            $(".error8").text("請出入電子郵件！").addClass("error");
            var submit = true;
        }
        else
        {
            if(a == -1)
            {
                $(".error8").text("至少一個 “@”！").addClass("error");
                var submit = true;
            }
            else
            {
                if(first == "@" || last == "@")
                {
                    $(".error8").text("“@” 不能再最前面和最後面！").addClass("error");
                    var submit = true;
                }
                else
                {
                    for(i = 0; i <= e.length; i++)
                    {                            
                        if(e.charAt(i) == "@")
                        {
                            n++;
                        }
                        if(n>1)
                        {
                            $(".error8").text("只能有一個 “@”！").addClass("error");
                            var submit = true;
                        }
                        else
                        {
                            if(dot == -1)
                            {
                                $(".error8").text("只是一個 “.”！").addClass("error");
                                var submit = true;
                            }   
                            else
                            {
                                if(first == "." || last == ".")
                                {
                                    $(".error8").text("“.” 不能再最前面和最後面！").addClass("error");
                                    var submit = true;
                                }
                                else
                                {
                                    if(dot == a-1 || dot == a+1)
                                    {
                                        $(".error8").text("“@” 和 “.” 不能在一起！").addClass("error");
                                        var submit = true;
                                    } 
                                    else
                                    {
                                        $(".error8").text("").removeClass("error");  
                                    }  
                                }   
                            }    
                        }
                    }   
                }   
            }      
        }

        if(!r2)
        {
            $(".error9").text("請選擇付款方式！").addClass("error");
            var submit = true;
        }  
        else
        {
            $(".error9").text("").removeClass("error");
        }

        if (submit) 
        {
            return false;
        } 
        else 
        {
            return true;
        }
    });
});