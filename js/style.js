//Ham get page HTML into HTML
function getPage(show, get) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var a = document.getElementsByClassName(show)
            a[0].innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", get, true);
    xhttp.send();
}
//add page HTML header
getPage("page-header", "header.html");


let ahead = document.getElementsByClassName("go-ahead");

// click cuộn lên đầu trang "top=0"
ahead[0].onclick = () => window.scrollTo({ top: 0 })

//hàm hiện "go-ahead"
window.addEventListener("scroll", () => {
    let scroll = window.scrollY // lấy vị trí thanh cuộn scroll
    if (!scroll == 0) ahead[0].style.display = "block";
    else ahead[0].style.display = "none";
});

//tao element class "pop-up__area"
function callPopup(thisElement) {
    let popUp = document.getElementsByClassName("pop-up");

    //tao element div moi co class la "pop-up__area"
    let popUp_Area = document.createElement("div");
    popUp_Area.classList.add("pop-up__area");

    let popUp_content = document.createElement("div");
    popUp_content.classList.add("pop-up__area-content");

    //set thisElement la element con cua popUp_content
    popUp_content.appendChild(thisElement);
    popUp_Area.appendChild(popUp_content);
    popUp[0].appendChild(popUp_Area);

}

//hàm remove popUp
function removePopUp(this_E, class_E) {
    let popUp = document.getElementsByClassName("pop-up");
    let popUpContent = document.getElementsByClassName(class_E);
    let clickInside = popUpContent[0].contains(event.target);

    if (!clickInside) {
        popUp[0].removeChild(this_E);
    }
}

//////////////////////////////////////////////////////////////////////////////////////

//jquery slideShow (page-1)
$(document).ready(function () {
    let time = 5000;
    let setTime = time;
    let img = $('.page-1__slideShow-img').children('img')
    let length = img.length;
    let select = 0
    //create circle slideShow
    img.each(function () {
        let divCircle = document.createElement("div");
        divCircle.className = 'slideShow-circle';
        $('.page-1__slideShow-chose').append(divCircle);
    })
    //add class select and remove another
    function addClass() {
        img.eq(select).addClass('image-show');
        img.each(function (i) {
            if (i !== select) { $(this).removeClass('image-show'); }
        })
        $('.slideShow-circle').eq(select).addClass('bgBlack');
        $('.slideShow-circle').each(function (i) {
            if (i !== select) { $(this).removeClass('bgBlack'); }
        })
    }
    //click circle to run slideShow
    $('.slideShow-circle').each(function (i) {
        $(this).click(function () {
            select = i;
            addClass()
        })
    })
    //set 1st slide image
    addClass()
    select++
    //set time loop
    setInterval(function () {
        addClass()
        select++;
        if (select == length) select = 0;
    }, setTime)

})
//jquery select panel header (page-1)
function headerSelect(classSelect, number, numberChange) {
    $(classSelect + '-head-' + number).click(function () {
        $(this).css({ "background": "#000", "color": "#fff" })
        $(classSelect + '-head-' + numberChange).css({ "background": "#f0f0f0", "color": "#000" })
        $(classSelect + '-main-' + number).css("display", "flex")
        $(classSelect + '-main-' + numberChange).css("display", "none")
    })
}
//jquery show panel (page-1)
function showList(classShow) {
    headerSelect(classShow, 1, 2)
    headerSelect(classShow, 2, 1)
    
    let htmlPage = 'page-3.html'

    //add list item class="itemCategory-show__item"
    function listItem(img1, img2, itemNum) {
        let item = `
                    <div class="itemCategory-show__item">
                        <div class="itemCategory-show__item-img">
                            <a href=${htmlPage}>
                                <span class="brandNew">New ${itemNum}</span>
                                <img src="${img1}" class="item-img1">
                                <img src="${img2}" class="item-img2">
                            </a>
                        </div>
                        <div class="itemCategory-show__item-info">
                            <span>Tui xach lon</span>
                            <div class="currency">
                                <span>878.000</span><span>đ</span>
                            </div>
                        </div>
                        <div class="itemCategory-show__item-hide">
                            <div class="item-hide">
                                <div class="item-color">
                                        <div class="color-red-black"></div>
                                        <div class="color-nude"></div>
                                        <div class="color-red"></div>
                                </div>
                                <a href="#"><span>MUA NGAY</span></a>
                            </div>
                        </div>
                    </div>`;
        return item;
    }
    //show list item
    function showListItem(image_1, image_2, num1) {
        let minShow = 0;
        let limitShow = 4;
        let maxShow = 10;
        $(classShow).find(classShow + '-main-' + num1).each(function () {

            let getNum = -1;
            let removeNum = 0;
            //show list
            while (minShow < limitShow) {
                minShow++;
                getNum++;
                $(this).find('.itemCategory-show').append(listItem(image_1, image_2, getNum));
            }
            //click right arrow
            $(this).find('.itemCategory-arrow-right').click(function () {
                removeNum++;
                getNum++;
                if (getNum >= maxShow) getNum = 0;
                if (removeNum >= maxShow) removeNum = 0;
                //'append' add element to last
                $(classShow + '-main-' + num1).find('.itemCategory-show').append(listItem(image_1, image_2, getNum));
                //remove 1st element
                $(classShow + '-main-' + num1).find('.itemCategory-show').children('.itemCategory-show__item').first().remove();
            })
            //click left arrow
            $(this).find('.itemCategory-arrow-left').click(function () {
                getNum--;
                removeNum--;
                if (removeNum < 0) removeNum = maxShow - 1;
                if (getNum < 0) getNum = maxShow - 1;
                //'prepend' add element to first
                $(classShow + '-main-' + num1).find('.itemCategory-show').prepend(listItem(image_1, image_2, removeNum));
                //remove last element
                $(classShow + '-main-' + num1).find('.itemCategory-show').children('.itemCategory-show__item:last-child').remove();
            })
        })

    }
    let image_1 = 'images/Bags-women/bag-woman-1.jpg'
    let image_2 = 'images/Bags-women/bag-woman-2.jpg'
    let image_3 = 'images/Bags-man/bag-man2.jpg'
    let image_4 = 'images/Bags-man/bag-man1.jpg'
    showListItem(image_1, image_2, 1) //List item 1
    showListItem(image_3, image_4, 2) //List item 2
}
//show list category (page-1)
$(window).ready(function () {
    showList('.page-1__itemCategory')
    showList('.page-1__itemCollection')
    showList('.page-1__itemSale')
})


//////////////////////////////////////////////////////////////////////////////////////
let filterMenu = document.getElementById("page-2__select");
//ham add class "page-2__select" (page-menu)
function filter() {
    var c_Menu = document.getElementsByClassName("page-2__select");
    if (c_Menu[0]) {//neu ton tai class "page-2__select"
        filterMenu.classList.remove("page-2__select");
    } else c_Menu = filterMenu.classList.add("page-2__select");
}

let bodyArea = document.getElementsByTagName("body");

//goi su kien "click" vao vung "body" (page-menu)
bodyArea[0].addEventListener('click', function (event) {
    var c_Menu = document.getElementsByClassName("page-2__select");
    var clickBtn = document.getElementsByClassName("page-2__setting-filter")

    if (c_Menu[0]) {//neu ton tai class "page-2__select"

        //click trong vung cua class "page-2__select"
        var clickInside = c_Menu[0].contains(event.target);
        //click trong vung cua class "page-2__setting-filter"
        var clickInsideBtn = clickBtn[0].contains(event.target);

        if (!clickInside && !clickInsideBtn) {
            filterMenu.classList.remove("page-2__select");
        }
    }
});
//jquery show Item
$(document).ready(function () {  
    let numberRow = 10;
    let get_Item = `
                <div class="page-2__menu-item-img">
                    <a href="page-3.html">
                        <span class="brandNew">New</span>
                        <img src="images/Bags-women/bag-woman-1.jpg" class="item-img1">
                        <img src="images/Bags-women/bag-woman-2.jpg" class="item-img2">
                    </a>
                </div>
                <div class="page-2__menu-item-info">
                    <span>Tui xach lon</span>
                    <div class="currency">
                        <span>878.000</span><span>đ</span>
                    </div>
                </div>
                <div class="page-2__menu-item-hide">
                    <div class="item-hide">
                        <div class="item-color">
                                <div class="color-red-black"></div>
                                <div class="color-nude"></div>
                                <div class="color-red"></div>
                        </div>
                        <a href="#"><span>MUA NGAY</span></a>
                    </div>
                </div>`
    //set item with normal size
    let item_normal = `<div class="page-2__menu-item">${get_Item}</div>`
    //set item with big size
    let item_big = `<div class="page-2__menu-item page-2__menu-item-bigsize">${get_Item}</div>`
    //set 2 item in cloumn
    let item_small = `<div class="page-2__menu-item page-2__menu-item-smallsize">${get_Item}</div>`
    let Item_column = `<div class="page-2__menu-item-column">${item_small}${item_small}</div>`

    let pack_1 = Item_column+item_big+Item_column;
    let pack_2 = Item_column+Item_column+item_big;
    let pack_3 = item_big+Item_column+Item_column;
    let arr=[pack_1,pack_2,pack_3];

    let showMenu = $('.page-2__menu')
    //show list Item
    for (let i = 0; i < numberRow; i++) {
        if(i%3==0 && i!=0) {
            let randomNum = Math.floor(Math.random() * arr.length);
            arr[randomNum];
            showMenu.append(arr) 
        }else showMenu.append(item_normal,item_normal,item_normal,item_normal) 
    }
})
//////////////////////////////////////////////////////////////////////////////////////

//hàm show/hide 2 bảng (page-item)
function describe_twoTable(thisElement, showElement, a) {
    if (a == 1) {
        document.getElementsByClassName(thisElement + "-1")[0].style.borderColor = "black";
        document.getElementsByClassName(thisElement + "-2")[0].style.borderColor = "hsl(0, 0%, 80%)";
        document.getElementsByClassName(showElement + "-1")[0].style.display = "block";
        document.getElementsByClassName(showElement + "-2")[0].style.display = "none";

    } else {
        document.getElementsByClassName(thisElement + "-1")[0].style.borderColor = "hsl(0, 0%, 80%)";
        document.getElementsByClassName(thisElement + "-2")[0].style.borderColor = "black";
        document.getElementsByClassName(showElement + "-1")[0].style.display = "none";
        document.getElementsByClassName(showElement + "-2")[0].style.display = "block";
    }
}








