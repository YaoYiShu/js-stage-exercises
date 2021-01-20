$(".li-box .li-top .li-right .li-user").click(function(){
    // console.log("454")
    $(".li-box .li-top .li-pop").toggle()
})


var distance 
var wrapWidth = $(window).width()

function appear() {
    
    $("#li-show").show()
    $(".li-box .li-wrap").css("left" , "15%")
    // $(".li-box .li-wrap").css("display" , "block")

}

function hide() {
    
    $("#li-show").hide()
    $(".li-box .li-wrap").css("left" , "100%")
    // $(".li-box .li-wrap").css("display" , "none")

}


$(function () {
    $(".li-box .li-top .li-right .li-button").click(function (event) {
        event.stopPropagation();
        appear()
        return false;
    });
    
    $(document).click(function (event) {
        var _con = $(".li-box .li-wrap");
        if (!_con.is(event.target) && _con.has(event.target).length === 0) {
                hide()
    }
    });
})












function open(father , son) {
    $(father).click(function () {
        // console.log($(this).parent().find(".li-sup").css("display") )
        var arr = $(this).parent().find(".li-sup").css("display") || $(this).parent().find(".li-lis").css("display")
        if(arr == "none"){
            $(this).find(son).addClass("iconfont icon-up").removeClass("icon-zhankai")
        }else{
            $(this).find(son).addClass("iconfont icon-zhankai").removeClass("icon-up ")
        }
        $(this).parent().find(".li-sup").toggle()
        $(this).parent().find(".li-lis").toggle()
    })
}

open(".li-box .li-wrap .li-list ul li .li-title" , "i")



function opttp(father , son) {
    $(father).click(function () {
        // console.log($(this).find(son))
        var brr = $(this).parent().find("ul").css("display")
        // console.log(brr)
        if(brr == "none"){
            $(this).find(son).addClass("iconfont icon-up").removeClass("icon-zhankai")
        }else{
            $(this).find(son).addClass("iconfont icon-zhankai").removeClass("icon-up")
        }
        $(this).parent().find("ul").toggle()
    })
}
opttp(".li-box .li-wrap .li-list .li-bk li .li-bkli" , "a i")


