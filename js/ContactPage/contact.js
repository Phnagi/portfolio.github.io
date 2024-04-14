let submit = document.querySelector(".submit");
function submitForm() { //這裡要對應到自己的 javascript 名稱
    //宣告欄位
    var name = $("[name='name']").val();
    var tel = $("[name='tel']").val();
    var email = $("[name='email']").val();
    var other = $("[name='other']").val();
    $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdYKITEU5RH425OoYsFQ2nrA5FBpWAQVc1wp0W6CbeOJ0fPOg/formResponse", //Google Form 裡面的 form action 網址 ＊＊記得要填＊＊
        data: { //Google Form 裡面的欄位 name ＊＊記得要改＊＊
            "entry.774436725":name,
            "entry.886580561":tel,
            "entry.1200253117":email,
            "entry.1412886636":other,
        },
        type: "POST",
        dataType: "xml",
        statusCode: {
            0: function () {
                alert("已送出!"); //完成送出表單的警告視窗
            },
            200: function () {
                alert("已送出!"); //完成送出表單的警告視窗
            }
        }
    });

    



}

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    submitForm();
    
})