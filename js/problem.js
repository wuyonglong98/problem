var data = [{
        id: "2、以下球员不是灰熊队的是？",
        op: "D",
        content: { "A": "A.伊戈达拉", "B": "B.瓦兰丘纳斯", "C": "C.杰克逊", "D": "D.乔治" }
    },
    {
        id: "3、以下球员不是老鹰队的是？",
        op: "B",
        content: { "A": "A.帕克", "B": "B.东契奇", "C": "C.卡特", "D": "D.琼斯" }
    },
    {
        id: "4、以下球员不是马刺队的是？",
        op: "C",
        content: { "A": "A.阿尔德里奇", "B": "B.盖伊", "C": "C.路威", "D": "D.德罗赞" }
    },
    {
        id: "5、以下球员不是骑士队的是？",
        op: "A",
        content: { "A": "A.格兰特", "B": "B.乐福", "C": "C.汤普森", "D": "D.克拉克森" }
    }
]
$(function() {
    var k = 10;
    var quesCount = -1;
    var ten = 0;
    var add = 0;
    var fal = 0;

    var date = new Date();
    var ti = date.getTime();

    var date2 = new Date(2019, 10, 11, 16, 0);
    var ti2 = date2.getTime();

    if (ti >= ti2) {

        $(".answer").click(function() {
            $(".index").css("display", "none");
            $(".main").css("display", "block");

            var time = setInterval(function ha() {

                $(".clock").text(k);
                k--;
                if (k == -1) {
                    // clearInterval(time);
                    k = 10;
                    quesCount++;
                };

                $(".opList").each(function(i) {
                    $(this).click(function(e) {
                        var evt = e || window.event;
                        evt.cancelBubble = true;
                        evt.stopPropagation();

                        if ($(".opList").attr("rel") == "0") {
                            // console.log($(".opList:contains(" + $(".opti").attr("op") + ")"));


                            if ($(this).text().indexOf($(".opti").attr("op")) != -1) {
                                $(".opList").attr("rel", "1");
                                // console.log(k);
                                // setTimeout(function() {
                                k = 10;
                                // }, 1000)

                                quesCount++;

                                ten += 10;
                                $(".fen").text(ten);

                                $(this).append('<img src="images/true.png" alt="" class="true">');
                                $(this).css({
                                    border: "0.01rem solid #53be69",
                                    color: "#53be69"
                                });
                                $(this).siblings(".opList").css({
                                    border: "0.01rem solid #f98423",
                                })
                            } else {
                                if (fal == 1) {
                                    $(".opList").attr("rel", "1");
                                    k = 10;
                                    quesCount++;
                                }

                                if (add == 0) {
                                    $(".bg").show();
                                    $(".autoAdd").show();
                                    add = 1;
                                }

                                $(".continu").click(function() {
                                    $(".bg").hide();
                                    $(".autoAdd").hide();

                                    $(".opList").attr("rel", "1");
                                    k = 10;
                                    quesCount++;

                                    fal = 1;
                                })

                                $(this).siblings(".opList").css({
                                    border: "0.01rem solid #f98423",
                                });
                                $(this).css({
                                    border: "0.01rem solid #ea6484",
                                    color: "#ea6484"
                                });
                                $(this).append('<img src="images/false.png" alt="" class="true">');
                                $(".opList:contains(" + $(".opti").attr("op") + ")").css({
                                    border: "0.01rem solid #53be69",
                                    color: "#53be69"
                                });
                                $(".opList:contains(" + $(".opti").attr("op") + ")").append('<img src="images/true.png" alt="" class="true">');
                            };
                        };

                    });
                });

                if ($(".clock").text() == 1 || $(".opList").attr("rel") == "1") {
                    // setTimeout(function() {
                    $(".opList:contains(" + $(".opti").attr("op") + ")").append('<img src="images/true.png" alt="" class="true">');
                    $(".opList:contains(" + $(".opti").attr("op") + ")").css({
                        border: "0.01rem solid #53be69",
                        color: "#53be69"
                    });
                    $(".opList:contains(" + $(".opti").attr("op") + ")").siblings(".opList").css({
                        border: "0.01rem solid #f98423",
                    });
                    // }, 500)
                };
                // console.log($(".opList").attr("rel"));
                // console.log($(".clock").text());
                if ($(".clock").text() == 0 || $(".opList").attr("rel") == "1") {
                    // $(".opList:contains(" + $(".opti").attr("op") + ")").append('<img src="images/true.png" alt="" class="true">');
                    // $(".opList:contains(" + $(".opti").attr("op") + ")").css({
                    //     border: "0.01rem solid #53be69",
                    //     color: "#53be69"
                    // });
                    // $(".opList:contains(" + $(".opti").attr("op") + ")").siblings(".opList").css({
                    //     border: "0.01rem solid #f98423",
                    // });

                    // console.log(i);
                    // $.each(data, function(quesCount) {

                    // setTimeout(function() {
                    if (quesCount < 4) {
                        $(".questionCount").text(data[quesCount].id);
                        $(".opti").attr("op", data[quesCount].op);
                        $(".opti").html("<p class='opList' rel='0'>" + data[quesCount].content.A + "</p>" + "<p class='opList' rel='0'>" + data[quesCount].content.B + "</p>" + "<p class='opList' rel='0'>" + data[quesCount].content.C + "</p>" + "<p class='opList' rel='0'>" + data[quesCount].content.D + "</p>");
                    }
                    // console.log(quesCount);
                    // }, 1000);
                    // });
                };

                if ($(".fen").text() == "50" && $(".allRight").attr("rel") == "0") {
                    $(".bg").show();
                    $(".allRight").show();
                };

                if (quesCount == 4) {
                    clearInterval(time);
                }

                $(".close").click(function() {
                    $(".bg").hide();
                    $(".allRight").hide();
                    $(".allRight").attr("rel", "1")
                });

            }, 1000);

        })
    }

})