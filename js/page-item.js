//hàm tính height class "page-3__itemShow-info" (page-item)
function page_itemHeight() {
    let itemImg = document.getElementsByClassName("page-3__itemShow-img");
    let itemInfo = document.getElementsByClassName("page-3__itemShow-info");
    itemInfo[0].style.height = (itemImg[0].offsetHeight - 20) + "px";
}
setInterval(page_itemHeight, 500)    //gọi hàm liên tục trong 0.5s

//Click hide/show 2 table
document.getElementsByClassName("item-describe__head-1")[0].onclick = function () {
    describe_twoTable("item-describe__head", "item-describe__main", 1);
}
document.getElementsByClassName("item-describe__head-2")[0].onclick = function () {
    describe_twoTable("item-describe__head", "item-describe__main", 2);
}
document.getElementsByClassName("page-3__warranty-head-1")[0].onclick = function () {
    describe_twoTable("page-3__warranty-head", "page-3__warranty-main", 1);
}
document.getElementsByClassName("page-3__warranty-head-2")[0].onclick = function () {
    describe_twoTable("page-3__warranty-head", "page-3__warranty-main", 2);
}

//Hàm click zoom Image (page-item)
for (let index = 0; index < 6; index++) {
    document.getElementsByClassName("itemShow-img")[index].onclick = function () {
        //tao element img moi voi class "popUp-img"
        let imgShow = document.createElement("img");
        imgShow.classList.add("popUp-img");
        imgShow.src = this.src;

        callPopup(imgShow)

        let popUpArea = document.getElementsByClassName("pop-up__area");
        // goi su kien "click" vao vung pop-up (hàm remove popUp)
        popUpArea[0].onclick = function (event) { removePopUp(this, "popUp-img") }
    }
}
//Hàm click log-in (page-item)
document.getElementsByClassName("log-in-popup")[0].onclick = function () {
    show = `<div class="pop-up__area">
    <div class="pop-up__area-content">
    
    </div>
    </div>`
    document.getElementsByClassName("pop-up")[0].innerHTML = show;
    getPage("pop-up__area-content", "sign-in.html");
    let popUpArea = document.getElementsByClassName("pop-up__area");
    // goi su kien "click" vao vung pop-up (hàm remove popUp)
    popUpArea[0].onclick = function (event) { removePopUp(this, "form-login") }

}

// jquery đổi màu star review (page-item)
$(document).ready(function () {
    $('.review__area-last-star').each(function () {
        let $count = $(this).find('.fa-star');
        if ($count.length > 4) $count.css('--colorStar', 'red');
        else if ($count.length > 2) $count.css('--colorStar', 'blue');
        else $count.css('--colorStar', 'grey');
    });
})
// jquery select star review (page-item)
$(document).ready(function () {
    let $customColor = 'white'
    let $slectColor = 'red'
    let $star = $('.page-3__review-input-star').find('.fa-star');
    $star.css('--starSelect', $customColor);
    $star.each(function (i) {
        $(this).mouseover(function () {
            $(this).css('--starHover', $slectColor);
        })
        $(this).click(function () {
            $star.each(function (j) {
                if (j <= i) {
                    $(this).css('--starSelect', $slectColor);
                    console.log(j + 1)
                } else $(this).css('--starSelect', $customColor);
            })

        })
    });
})