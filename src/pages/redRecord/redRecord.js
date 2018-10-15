bui.ready(function() {
    //点击跳转
    $(".recordList li").on("click", function(e) {
        bui.load({ url: "/pages/redRecordDetail/redRecordDetail.html" });
    })

    //返回
    $(".icon-back").on("click", function(e) {
        history.back()
    })
})