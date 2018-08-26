$(function () {
  var data = [{
    "id": 1,
    "url": "./images/未登录-底图_02.jpg",
    "code": 8566,
    "name": "水果1",
    "limit": "满888使用",
    "time": "有效期（2018年11日当天有效)",
    "range": "仅限元稹桃礼盒、元稹桃家庭使用",
    "money": 500,
    "disabled": "nomore",
  }, {
    "id": 2,
    "name": "水果2",
    "limit": "满888使用",
    "time": "有效期（2018年11日当天有效)",
    "range": "仅限元稹桃礼盒、元稹桃家庭使用",
    "money": 600,
    "disabled": "disabled",
  }, {
    "id": 3,
    "name": "水果3",
    "limit": "满888使用",
    "time": "有效期（2018年11日当天有效)",
    "range": "仅限元稹桃礼盒、元稹桃家庭使用",
    "money": 800,
    "disabled": "available",
  }];
  var template = '';
  var imgUrl = data[0].url;
  var len = data.length;
  for (var i = 0; i < len; i++) {
    template += `
        <li>
          <div class="conpon-inner-wrap">
            <div class="conpon-use-info fail" data-type="${data[i].disabled}">
              <div class="conpon-info-wrap-center">
                <div class="conpon-showinfo">${data[i].name}</div>
                <div class="conpon-detail-info">${data[i].limit}</div>
                <div class="conpon-detail-info">${data[i].time}</div>
                <div class="conpon-detail-info">${data[i].range}</div>
              </div>
            </div>
            <div class="conpon-border">
              <ul class="circle_list">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="conpon-value fail" data-type="${data[i].disabled}">
              <div class="conpon-value-inner">
                <div class="conpon-value-detail">
                  <span class="conpon-unit">￥</span>
                  <span class="conpon-number">${data[i].money}</span>
                </div>
              </div>
            </div>
          </div>
      </li>
        `;
  }
  $('.store-coupon-list').append(template);
  $('.banner>img').attr('src', imgUrl);
})