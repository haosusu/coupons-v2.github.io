// 事件兼容
var EventUtil = {
    // 添加事件
    addHandler: function (ele, type, handler) {
        if (ele.addEventListener) {
            ele.addEventListener(type, handler, false);
        } else if (ele.attachEvent) {
            ele.attachEvent('on' + type, handler);
        } else {
            ele['on' + type] = handler;
        }
    },
    // 移除事件
    removeHandler: function (ele, type, handler) {
        if (ele.removeEventListener) {
            ele.removeEventListener(type, handler, false);
        } else if (ele.detachEvent) {
            ele.detachEvent('on' + type, handler);
        } else {
            ele['on' + type] = null;
        }
    },
    getEvent: function (event) {
        return event ? event : window.event;
    },
    // 获取事件目标
    getTarget: function (event) {
        return event.target || event.srcElement;
    },
    // 取消事件默认行为
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    // 阻止事件冒泡
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
};
window.onload = function(){
    // 轮播1
    var mySwiper = new Swiper('#swiper1', {
        direction: 'horizontal', // 切换选项
        loop: true, // 循环模式选项
        loopAdditionalSlides: 1,
        speed: 1000,
        // slidesPerView: 1.2,
        autoplay: true,
        pagination: {
            el: '.swiper-pagination1',
        },
        // slidesOffsetBefore: 30,
        // grabCursor: true,
        // clickable: true,
    });
}
// 课程tab点击事件
var tabBtn = document.getElementById('tab_list');
var tabBtn1 = document.getElementById('tab_list1');
var handler4 = function (event) {
    event = EventUtil.getEvent(event);
    let target = EventUtil.getTarget(event);
    let tabList = document.querySelectorAll('.tab_item');
    let tabItem = document.querySelectorAll('.box5_item');
    for (let j = 0; j < tabList.length; j++) {
        if (target.nodeName == 'LI') {
            tabList[j].classList.remove('active_tab');
        }
    }
    if (target.nodeName == 'LI') {
        target.classList.add('active_tab');
    }
    let nums = target.getAttribute('data-uname');
    if (target.nodeName == 'LI') {
        if (nums == 11) {
            tabItem[0].classList.add('active_item');
        } else {
            tabItem[0].classList.remove('active_item');
        }
        if (nums == 12) {
            tabItem[1].classList.add('active_item');
        } else {
            tabItem[1].classList.remove('active_item');
        }
    }
};
var handler6 = function (event) {
    event = EventUtil.getEvent(event);
    let target = EventUtil.getTarget(event);
    let tabList = document.querySelectorAll('.tab_item1');
    let tabItem = document.querySelectorAll('.school_box');
    for (let j = 0; j < tabList.length; j++) {
        if (target.nodeName == 'LI') {
            tabList[j].classList.remove('active_tab');
        }
    }
    if (target.nodeName == 'LI') {
        target.classList.add('active_tab');
    }
    let nums = target.getAttribute('data-uname');
    if (target.nodeName == 'LI') {
        if (nums == 71) {
            tabItem[0].classList.add('active_item');
        } else {
            tabItem[0].classList.remove('active_item');
        }
        if (nums == 72) {
            tabItem[1].classList.add('active_item');
        } else {
            tabItem[1].classList.remove('active_item');
        }
    }
};
EventUtil.addHandler(tabBtn, 'click', handler4);
EventUtil.addHandler(tabBtn1, 'click', handler6);