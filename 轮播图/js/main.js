//     ____ ___                   ___                  _ __ ___ _ __   
//    |   ____  \               /  __ \               /_____///_____/  
//    |  |    |__|           __/  /__\ \                   |///|       
//    |  |                  __/   ____  \                  |\\\|       
//    |  | ______     _      /  /      \ \      _          |///|         _
//     \ ___ _ __\   |_|    /__/        \_\    |_|         /__//        |_|





function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

//渐变弹出函数
document.addEventListener("scroll", function () {
    //获取浏览器窗口高度
    var w_height = window.innerHeight;

    //获取当前可视区域距离浏览器顶部的距离
    var s_height = document.documentElement.scrollTop;
    if (s_height > 800) {
        main_show("main_1_pc");
    }
    if (s_height > 1400) {
        main_show("main_2_pc");
    }
    if (s_height > 2600) {
        main_show("main_3_pc");
    }
    if (s_height > 3000) {
        main_show("main_4_pc");
    }
});


function main_show(ele) {
    var show = document.getElementById(ele);
    show.style.transform = "translateY(0)";
    show.style.opacity = 1;

}






// ===================================================================================||
// =====================================首页==========================================||
// ===================================================================================\/



// 副标题文字信息数组
var writing_array = ["| c r e a t i v e   &   a m b i t i o n   &   t e a m  <span style = \"color :red\">❥ ❥ ❥</span>....",
    "| The content of this page is a rotation chart〓〓〓.....",
    "| Welcome to <span style = \"color:black\">C.A.T </span>....",
    "Bear... Seek... Seek... Lest..."
]

//当前写入的文字信息初始化
var now_str = "";

//计数器
var writing_count = 0;

var writing = document.getElementById('writing');

//写入状态：是否正在写入
var writing_status = true;

//正在写入的信息的序数
var writing_array_count = 0;

//写入信息
function funcWriting(now) {

    //判断是否有信息正在写入，若无则初始化写入信息
    if (undefined != now) {
        now_str = now;
    }

    if (writing_count <= now_str.length && writing_status) {

        //写入信息
        writing.innerHTML = now_str.slice(0, writing_count++) + "|";

        //若写入结束，则修改写入状态
        if (writing_count == now_str.length) {
            writing_status = false;
        }

        //定时器，递归调用
        var time = setTimeout("funcWriting()", 60);
    } else {

        //删掉上一个写入的信息后，切换至下一个信息写入
        if (writing_count == 0) {
            writing_array_count++

            //若超过计数器，则清零
            if (writing_array_count >= writing_array.length) {
                writing_array_count = 0;
            }

            //开启写入状态
            writing_status = true;
            funcWriting(writing_array[writing_array_count]);
            return;
        }

        //删除写入信息
        writing.innerHTML = now_str.slice(0, writing_count--) + "|";

        //定时器，递归调用
        var time = setTimeout("funcWriting()", 30);
    }
}

funcWriting(writing_array[writing_array_count]);




var arrowEle = document.getElementById("main_bottom").getElementsByTagName("span")[0];
//箭头运动状态
var arrow_status = true;

function arrowRun() {

    //箭头往返运动
    if (arrow_status) {
        arrowEle.style.color = "black";
        arrowEle.style.fontSize = "30px";
        arrowEle.style.transform = "translateY(-30px) scale(2.3,1)";
        arrow_status = false;
        setTimeout("arrowRun()", 1100);
    } else {
        arrowEle.style.color = "#aaa";
        arrowEle.style.fontSize = "18px";
        arrowEle.style.transform = "translateY(0px) scale(2.3,1)";
        arrow_status = true;
        setTimeout("arrowRun()", 1100);
    }
}
arrowRun();


//点击箭头后跳转至第一页
arrowEle.addEventListener("click", function () {
    var now = document.documentElement.scrollTop;

    //跳转目标
    var target = 934;

    //单次运动幅度
    var speed = Math.ceil((target - now) / 10);

    document.documentElement.scrollTop = now + speed;

    //跳转结束条件
    if (now >= 934) {
        return;
    }

    setTimeout(function () {
        arrowEle.click();
    }, 15);

});

var change_btn = document.getElementById("aside").getElementsByTagName("li");
var H_target = [0, 934, 1879, 2814, 3754];


for (let change_btn_count = 0; change_btn_count < change_btn.length; change_btn_count++) {
    change_btn[change_btn_count].onclick = function () {

        changeBtn(H_target[change_btn_count]);
    }
}

function changeBtn(target) {
    var now = document.documentElement.scrollTop;

    if(target>now){

        //单次运动幅度
        var speed = Math.ceil((target - now) / 10);
    
        document.documentElement.scrollTop = now + speed;
    
        //跳转结束条件
        if (now >= target) {
            return;
        }
    }

    setTimeout(function () {
        changeBtn(target);
    }, 15);
}







// ===================================================================================||
// =================================第1个轮播图========================================||
// ===================================================================================\/



var img = document.getElementsByClassName("pc");


//当前图片 轮播计数
var main1_count = 0;
var main1_time = setInterval(function () {
    main1Start();
}, 2000);


function main1Start() {
    //初始化，让所有图片不显示
    for (var i = 0, len = img.length; i < len; i++) {
        img[i].style.opacity = 0;
    }

    //显示出当前图片
    img[main1_count].style.opacity = 1;
    main1_count++;

    //超过数量时，计数器清零
    if (main1_count == img.length) {
        main1_count = 0;
    }

}

var mian_1_left = document.getElementById("mian_1_left");
var mian_1_right = document.getElementById("mian_1_right");

mian_1_left.onclick = function () {
    if (main1_count == 0) {
        main1_count = img.length - 2;
        main1Start();
    } else {
        main1_count = main1_count - 2;
        main1Start();
    }
}

mian_1_right.onclick = function () {
    main1Start();
}










// ===================================================================================||
// =================================第2个轮播图========================================||
// ===================================================================================\/


//轮播图 图片class数组
var main2array = ["list1", "list2", "list3", "list4", "list5", "list6", "list7"];

//遍历轮播图中所有图片
var main2AllLi = document.getElementById("main_2_pc").getElementsByTagName("li");

//定时播放轮播图
function main2Start() {

    var main2Time = setInterval(function () {
        main2Change("next");
    }, 2000);
}
addLoadEvent(main2Start);

//切换轮播图
function main2Change(which) {

    //切换至下一张图
    if (which == "pre") {
        //开始重新排列数组
        main2array.push(main2array[0]); //复制数组第一项并添加至最后一项
        main2array.shift(); //删除数组第一项

        //遍历数组，给轮播图图片加class，以此达到切换图片的目的 
        for (var i = 0, len = main2array.length; i < len; i++) {
            main2AllLi[i].className = main2array[i];
        }
    }
    if (which == "next") {

        //开始重新排列数组
        main2array.unshift(main2array[main2array.length - 1]); //复制数组最后一项并添加至第一项
        main2array.pop(); //删除数组最后一项

        //遍历数组，给轮播图图片加class，以此达到切换图片的目的
        for (var i = 0, len = main2array.length; i < len; i++) {
            main2AllLi[i].className = main2array[i];
        }

    }
}
addLoadEvent(main2Change);


var main_2_left = document.getElementById("main_2_left");
var main_2_right = document.getElementById("main_2_right");


main_2_left.onclick = function () {
    main2Change("pre");

}


main_2_right.onclick = function () {
    main2Change("next");

}





// ===================================================================================||
// =================================第3个轮播图========================================||
// ===================================================================================\/

var main3_ul = document.getElementById("main_3_pc").getElementsByTagName("ul")[0];
main3_ul.style.left = 0;



//目标缓冲运动函数：第一个参数为目标元素 第二个参数为最终目标位置
function main3Run(ele, target) {

    //获取目标元素当前位置
    var now = parseInt(ele.style.left);
    //目标位置的数值转换
    var target = parseInt(target);


    if (target < 0) {
        //计算本次运动的偏移量(向下取整)
        var speed = Math.floor((target - now) / 10);

        ele.style.left = now + speed + "px";
    } else {
        //计算本次运动的偏移量(向上取整)
        var speed = Math.ceil((target - now) / 10);

        ele.style.left = now + speed + "px";
    }

    if (now == target) {
        return;
    }

    setTimeout(function () {
        main3Run(ele, target);
    }, 15);
}

var main3_count = 0;
var pos = ["0", "-455px", "-910px", "-1365px"];
var main3_time = setInterval(function () {
    main3_count++;

    if (main3_count > pos.length - 1) {
        main3_count = 0;
    }

    main3Run(main3_ul, pos[main3_count]);
}, 2000);