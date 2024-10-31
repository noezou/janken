// alert(1);
// 演習2 じゃんけんアプリ
// jQueryを使って作ってみる

// 変数の定義
let user_choice_num = "";
let computer_choice_num = "";

let timer = 5000;
let fn = function() {
    $("#re_challenge").html("もう一度挑戦するのであれば、「再挑戦」を押してください");
    $("#clr_btn").show();
}

// ユーザーが「グー」をクリックしたとき
$("#rock").on("click", function () {
    let user_choice_num = 0;
    let computer_choice_num = Math.floor(Math.random() * 3);
    console.log(computer_choice_num, "コンピュータ");
    if (computer_choice_num == 0) {
        console.log("user:", user_choice_num, " VS ", "computer:グー", computer_choice_num);
        $("#computer_choice").html("グー");
        $("#computer_choice").css("color", "blue");
        $("#judgment").html("引き分け");
        console.log("判定：引き分け グー同士");
        setTimeout(fn, timer);
    } else if (computer_choice_num == 1) {
        console.log("user:", user_choice_num, " VS ", "computer:チョキ", computer_choice_num);
        $("#computer_choice").html("チョキ");
        $("#computer_choice").css("color", "green");
        $("#judgment").html("あなたの勝ち");
        console.log("判定：あなたの勝ち（あなた：グー、コンピュータ：チョキ");
        setTimeout(fn, timer);
    } else if (computer_choice_num == 2) {
        console.log("user:", user_choice_num, " VS ", "computer:パー", computer_choice_num);
        $("#computer_choice").html("パー");
        $("#computer_choice").css("color", "red");
        $("#judgment").html("コンピュータの勝ち");
        console.log("判定：コンピュータの勝ち（あなた：グー、コンピュータ：パー");
        setTimeout(fn, timer);
    }
});
// ユーザーが「チョキ」をクリックしたとき
$("#scissors").on("click", function () {
    let user_choice_num = 1;
    let computer_choice_num = Math.floor(Math.random() * 3);
    console.log(computer_choice_num, "コンピュータ");
    if (computer_choice_num == 0) {
        console.log("user:", user_choice_num, " VS ", "computer:グー", computer_choice_num);
        $("#computer_choice").html("グー");
        $("#computer_choice").css("color", "blue");
        $("#judgment").html("コンピュータの勝ち");
        console.log("判定：コンピュータの勝ち（あなた：チョキ、コンピュータ：グー");
        setTimeout(fn, timer);
    } else if (computer_choice_num == 1) {
        console.log("user:", user_choice_num, " VS ", "computer:チョキ", computer_choice_num);
        $("#computer_choice").html("チョキ");
        $("#computer_choice").css("color", "green");
        $("#judgment").html("引き分け");
        console.log("判定：引き分け チョキ同士");
        setTimeout(fn, timer);
    } else if (computer_choice_num == 2) {
        console.log("user:", user_choice_num, " VS ", "computer:パー", computer_choice_num);
        $("#computer_choice").html("パー");
        $("#computer_choice").css("color", "red");
        $("#judgment").html("あなたの勝ち");
        console.log("判定：あなたの勝ち（あなた：チョキ、コンピュータ：パー");
        setTimeout(fn, timer);
    }
});
// ユーザーが「パー」をクリックしたとき
$("#paper").on("click", function () {
    let user_choice_num = 2;
    let computer_choice_num = Math.floor(Math.random() * 3);
        console.log(computer_choice_num, "コンピュータ");
    if (computer_choice_num == 0) {
        console.log("user:", user_choice_num, " VS ", "computer:グー", computer_choice_num);
        $("#computer_choice").html("グー");
        $("#computer_choice").css("color", "blue");
        $("#judgment").html("あなたの勝ち");
        console.log("判定：あなたの勝ち（あなた：パー、コンピュータ：グー");
        setTimeout(fn, timer);
    } else if (computer_choice_num == 1) {
        console.log("user:", user_choice_num, " VS ", "computer:チョキ", computer_choice_num);
        $("#computer_choice").html("チョキ");
        $("#computer_choice").css("color", "green");
        $("#judgment").html("コンピュータの勝ち");
        console.log("判定：コンピュータの勝ち（あなた：パー、コンピュータ：チョキ");
        setTimeout(fn, timer);
    } else if (computer_choice_num == 2) {
        console.log("user:", user_choice_num, " VS ", "computer:パー", computer_choice_num);
        $("#computer_choice").html("パー");
        $("#computer_choice").css("color", "red");
        $("#judgment").html("引き分け");
        console.log("判定：引き分け パー同士");
        setTimeout(fn, timer);
    }
});

$("#clr_btn").on("click", function () {
    console.log("初期値に戻します");
    user_choice_num = "";
    computer_choice_num = "";
    console.log("user:", user_choice_num, " VS ", "computer:", computer_choice_num);
    $("#judgment").html("結果は...");
    $("#judgment").css("color", "black");
    $("#computer_choice").html("なに？");
    $("#computer_choice").css("color", "black");
    $("#re_challenge").html("");
    $("#clr_btn").hide();
});
