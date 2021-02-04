$(function () {
    function display(bool) {
        if (bool) {
            $("#container").slideDown(400);
            $("#startscreen ").slideDown(400);
            $("#info").hide()
            $("#done").hide()            
        } else {
            $("#container").hide();
        }
    }
    display(false)
    window.addEventListener('message', function(event) {
        var item = event.data;
        if (item.type === "ui") {
            if (item.status == true) {
                display(true)
            } else {
                display(false)
            }
        }
    })
    document.onkeyup = function (data) {
        if (data.which == 27) {
            $.post(`http://${GetParentResourceName()}/exit`, JSON.stringify({}));
            return
        }
    };
    $("#start").click(function () {
       $("#startscreen").fadeOut(400)
       $("#info").fadeIn(500)
       $("#warn").hide()
       $("#warn2").hide()
       $("#warn3").hide()
       document.getElementById('firstname').value = ''
       document.getElementById('lastname').value = ''
       document.getElementById('age').value = ''
       document.getElementById('ager').value = ''
       document.getElementById('telef').value = ''
       document.getElementById('why').value = ''
       document.getElementById('why2').value = ''
       document.getElementById('why3').value = ''
       document.getElementById('why4').value = ''
       document.getElementById('why5').value = ''
       document.getElementById('why6').value = ''
       document.getElementById('why7').value = ''
       document.getElementById('why8').value = ''
       document.getElementById('why9').value = ''
       document.getElementById('why10').value = ''
        document.getElementById('foto').value = ''
    })

    var first = document.getElementById('firstname')
    var last = document.getElementById('lastname')
    var ageri = document.getElementById('age')
    var agerrido = document.getElementById('ager')
    var telefoneo = document.getElementById('telef')
    var whyy = document.getElementById('why')
    var whyy2 = document.getElementById('why2')
    var whyy3 = document.getElementById('why3')
    var whyy4 = document.getElementById('why4')
    var whyy5 = document.getElementById('why5')
    var whyy6 = document.getElementById('why6')
    var whyy7 = document.getElementById('why7')
    var whyy8 = document.getElementById('why8')
    var whyy9 = document.getElementById('why9')
    var whyy10 = document.getElementById('why10')
    var whyy10 = document.getElementById('foto')
    

        $(".sumbit").click(function() {
                if($(first).val() === '') {
                    $("#warn").fadeOut(400)
                    $("#warn2").fadeOut(400)
                    $("#warn3").fadeOut(400)
                    $("#warn").fadeIn(400)
                    $("#warn2").fadeIn(400)
                    return 
                }
                else if($(last).val() === '') {
                    $("#warn").fadeOut(400)
                    $("#warn2").fadeOut(400)
                    $("#warn3").fadeOut(400)
                    $("#warn").fadeIn(400)
                    $("#warn2").fadeIn(400)
                    return 
                }
                else if($(ageri).val() === '') {
                    $("#warn").fadeOut(400)
                    $("#warn2").fadeOut(400)
                    $("#warn3").fadeOut(400)
                    $("#warn").fadeIn(400)
                    $("#warn2").fadeIn(400)
                    return 
                }
                else if($(agerrido).val() === '') {
                    $("#warn").fadeOut(400)
                    $("#warn2").fadeOut(400)
                    $("#warn3").fadeOut(400)
                    $("#warn").fadeIn(400)
                    $("#warn2").fadeIn(400)
                    return 
                }

                else if($(agerrido).val() <= '15') {
                    $("#warn").fadeOut(400)
                    $("#warn2").fadeOut(400)
                    $("#warn3").fadeOut(400)
                    $("#warn3").fadeIn(400)
                    return 
                }
                else if($(telefoneo).val() === '') {
                    $("#warn").fadeOut(400)
                    $("#warn2").fadeOut(400)
                    $("#warn3").fadeOut(400)
                    $("#warn").fadeIn(400)
                    $("#warn2").fadeIn(400)
                    return 
                }
                else if($(whyy).val() === '') {
                    $("#warn").fadeOut(400)
                    $("#warn2").fadeOut(400)
                    $("#warn3").fadeOut(400)
                    $("#warn").fadeIn(400)
                    $("#warn2").fadeIn(400)
                    return 
                }
                else if($(whyy2).val() === '') {
                    $("#warn").fadeOut(400)
                    $("#warn2").fadeOut(400)
                    $("#warn3").fadeOut(400)
                    $("#warn").fadeIn(400)
                    $("#warn2").fadeIn(400)
                    return 
                }
                else if($(whyy3).val() === '') {
                    $("#warn").fadeOut(400)
                    $("#warn2").fadeOut(400)
                    $("#warn3").fadeOut(400)
                    $("#warn").fadeIn(400)
                    $("#warn2").fadeIn(400)
                    return 
                }
                else if($(whyy4).val() === '') {
                    $("#warn").fadeOut(400)
                    $("#warn2").fadeOut(400)
                    $("#warn3").fadeOut(400)
                    $("#warn").fadeIn(400)
                    $("#warn2").fadeIn(400)
                    return 
                }
                else if($(whyy5).val() === '') {
                    $("#warn").fadeOut(400)
                    $("#warn2").fadeOut(400)
                    $("#warn3").fadeOut(400)
                    $("#warn").fadeIn(400)
                    $("#warn2").fadeIn(400)
                    return 
                }
                else if($(whyy6).val() === '') {
                    $("#warn").fadeOut(400)
                    $("#warn2").fadeOut(400)
                    $("#warn3").fadeOut(400)
                    $("#warn").fadeIn(400)
                    $("#warn2").fadeIn(400)
                    return 
                }
                else if($(whyy7).val() === '') {
                    $("#warn").fadeOut(400)
                    $("#warn2").fadeOut(400)
                    $("#warn3").fadeOut(400)
                    $("#warn").fadeIn(400)
                    $("#warn2").fadeIn(400)
                    return 
                }
                else if($(whyy8).val() === '') {
                    $("#warn").fadeOut(400)
                    $("#warn2").fadeOut(400)
                    $("#warn3").fadeOut(400)
                    $("#warn").fadeIn(400)
                    $("#warn2").fadeIn(400)
                    return 
                }
                else if($(whyy9).val() === '') {
                    $("#warn").fadeOut(400)
                    $("#warn2").fadeOut(400)
                    $("#warn3").fadeOut(400)
                    $("#warn").fadeIn(400)
                    $("#warn2").fadeIn(400)
                    return 
                }
                else if($(whyy10).val() === '') {
                    $("#warn").fadeOut(400)
                    $("#warn2").fadeOut(400)
                    $("#warn3").fadeOut(400)
                    $("#warn").fadeIn(400)
                    $("#warn2").fadeIn(400)
                    return 
                }
                else{
                    $("#warn").fadeOut(400)
                    $("#warn2").fadeOut(400)
                    $("#warn3").fadeOut(400)
                    $("#info").fadeOut(400)
                    $("#done").fadeIn(400)
                    $.post(
                        `http://${GetParentResourceName()}/name`,
                        JSON.stringify({
                        plate: $("#firstname").val(),     
                        lastname: $("#lastname").val(),
                        age: $("#age").val(),
                        ager: $("#ager").val(),
                        telef: $("#telef").val(),
                        why: $("#why").val(),
                        why2: $("#why2").val(),
                        why3: $("#why3").val(),
                        why4: $("#why4").val(),
                        why5: $("#why5").val(),
                        why6: $("#why6").val(),
                        why7: $("#why7").val(),
                        why8: $("#why8").val(),
                        why9: $("#why9").val(),
                        why10: $("#why10").val(),
                        foto: $("#foto").val(),
                    })
                );
            }
    })
    $(".exit").click(function() {
        $("#container").slideUp();
        setTimeout(function(){
            $.post(`http://${GetParentResourceName()}/exit`, JSON.stringify({}));
        },400);
        return
    })
})
