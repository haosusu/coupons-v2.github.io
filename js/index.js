// 页面加载生成
// $(function () {
//   'use strict';
//   $.ajax({
//     type: "POST", // 用POST方式传输
//     dataType: "json", // 数据格式:JSON
//     url: "forgetPasswdServlet", // 目标地址
//     success: function (data) {
//       var template = '';
//       var imgUrl = data[0].url;
//       var len = data.length;
//       for (var i = 0; i < len; i++) {
//         template += `
//             <li>
//               <div class="conpon-inner-wrap">
//                 <div class="conpon-use-info fail" data-type="${data[i].disabled}">
//                   <div class="conpon-info-wrap-center">
//                     <div class="conpon-showinfo">${data[i].name}</div>
//                     <div class="conpon-detail-info">${data[i].limit}</div>
//                     <div class="conpon-detail-info">${data[i].time}</div>
//                     <div class="conpon-detail-info">${data[i].range}</div>
//                   </div>
//                 </div>
//                 <div class="conpon-border">
//                   <ul class="circle_list">
//                     <li></li>
//                     <li></li>
//                     <li></li>
//                     <li></li>
//                     <li></li>
//                     <li></li>
//                     <li></li>
//                     <li></li>
//                   </ul>
//                 </div>
//                 <div class="conpon-value fail" data-type="${data[i].disabled}">
//                   <div class="conpon-value-inner">
//                     <div class="conpon-value-detail">
//                       <span class="conpon-unit">￥</span>
//                       <span class="conpon-number">${data[i].money}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </li>
//           `;
//        }
//       $('.store-coupon-list').append(template);
//       $('.banner>img').attr('src', imgUrl);
//     }
//   })
// })
// login部分
$(function () {
  var isPhone = 1;
  $("#getCode").on("click", function () {
    var phone = $('#tel').val();
    var pattern = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
    isPhone = 1;
    if (phone == '') {
      alert('请输入手机号码');
      isPhone = 0;
      return;
    }
    if (!pattern.test(phone)) {
      alert('请输入正确的手机号码');
      isPhone = 0;
      return;
    }
    // $.ajax({
    //   async: false,
    //   cache: false,
    //   type: 'POST',
    //   url: forgetConfirmUrl, // 请求的action路径
    //   data: {
    //     phone: phone
    //   },
    //   dataType: "json",
    //   success: function (data) {
    //     console.log(data);
    //     if (data.error_code == 1) {
    //       alert("网络异常", 1);
    //     }
    //   }
    // });
    addCookie("secondsremained", 60, 60); //添加cookie记录,有效时间60s
    settime($("#getCode")); //开始倒计时
  })
  var v = getCookieValue("secondsremained") ? getCookieValue("secondsremained") : 0; //获取cookie值
  if (v > 0) {
    settime($("#getCode")); //开始倒计时
  }
})
//发送验证码时添加cookie
function addCookie(name, value, expiresHours) {
  var cookieString = name + "=" + encodeURIComponent(value);
  //判断是否设置过期时间,0代表关闭浏览器时失效
  if (expiresHours > 0) {
    var date = new Date();
    date.setTime(date.getTime() + expiresHours * 1000);
    cookieString += ";expires=" + date.toGMTString();
  }
  document.cookie = cookieString;
}
//修改cookie的值
function editCookie(name, value, expiresHours) {
  var cookieString = name + "=" + decodeURIComponent(value);
  if (expiresHours > 0) {
    var date = new Date();
    date.setTime(date.getTime() + expiresHours * 1000); //单位是毫秒
    cookieString = cookieString + ";expires=" + date.toGMTString();
  }
  document.cookie = cookieString;
}
//根据名字获取cookie的值
function getCookieValue(name) {
  var strCookie = document.cookie;
  var arrCookie = strCookie.split("; ");
  for (var i = 0; i < arrCookie.length; i++) {
    var arr = arrCookie[i].split("=");
    if (arr[0] == name) {
      return decodeURIComponent(arr[1]);
      break;
    }
  }
}
//倒计时
var countdown;

function settime(obj) {
  countdown = getCookieValue("secondsremained");
  if (!document.cookie) {
    countdown = 60;
  }
  var timer = setInterval(function () {
    countdown--;
    $(obj).attr("disabled", true);
    $(obj).val(countdown + 's')
    if (countdown <= 0) {
      clearInterval(timer);
      $(obj).removeAttr("disabled");
      $(obj).val("请重新获取");
    }
    editCookie("secondsremained", countdown, countdown + 1);
  }, 1000) //每1000毫秒执行一次
}
// 立即领取事件
$(function () {
  $('#coupon-login-box').bind('input propertychange', 'input', function () {
    var tel = $('#tel').val();
    var password = $('#password').val();
    if (tel && password) {
      $('#receive').removeAttr("disabled");
    } else {
      $('#receive').attr("disabled", true);
    }
  })
  $('#receive').click(doCompare);

  function doCompare() {
    // $.ajax({
    //   type: "POST", // 用POST方式传输
    //   dataType: "text", // 数据格式
    //   url: "forgetPasswdServlet", // 目标地址
    //   data: "codelast=" + codelast,
    //   success: function (data) {
    //     data = parseInt(data, 10);
    //     if (data == 1) {
    //       $('.coupon-login-text1').html('已获得！').css('fontSize', '47px')//验证成功
    //       $('.coupon-login-text2').html('进入商城即可使用')
    //       $('.user-phone-box').removeClass('hide');
    //       $('.store-coupon-login').addClass('hide')
    //     } else if (data == 0) {
    //       alert('验证码输入错误，请重新输入')
    //     } else if (data == 2) {
    //       alert('验证码已失效,请重新获取验证码');
    //     }else if(data == 3){
    //       $('.store-coupon-login').addClass('hide')
    //       $('.coupon-login-text1').html('活动已经结束！').css('color', '#666').css('fontSize', '47px')
    //       $('.coupon-login-text2').addClass('over');
    //     }else{
    //       $('.store-coupon-login').addClass('hide')
    //       $('.coupon-login-text1').html('活动未开始！').css('color', '#666').css('fontSize', '47px')
    //       $('.coupon-login-text2').addClass('over');
    //     }
    //   }
    // })
  }
})
// alert样式
// 参数custom--原url代替字符
//参数inenum--换行数
function customAlertUrl(custom, linenum) {
  window.alert = function (name) {
    var hh = '\r\n';
    var huangNnm = hh.repeat(linenum);
    iframe = document.createElement("IFRAME");
    iframe.style.display = "none";
    iframe.setAttribute("src", 'data:text/plain,');
    document.documentElement.appendChild(iframe);
    window.frames[0].window.alert(custom + huangNnm + name);
    iframe.parentNode.removeChild(iframe);
  }
}
