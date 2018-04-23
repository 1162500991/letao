$(function () {
  showLocalHistory();
  $('.lt-search-span').click(function () {
    var value = $(this).prev().val();
    $(this).prev().val('');
    // console.log(value);
    if (!value.trim()) {
      mui.alert("请输入关键字");
      return;
    }
    setLocalHistory(value);
    showLocalHistory();
    location.href="searchList.html?keyword="+value;
  });
  $('.lt-history-list').on('click', '.sp2', function () {
    var value = $(this).prev().html();
    // alert(value); 
    delLocalHistory(value);
    showLocalHistory();
  });
  $('.lt-history-list').on('click', '.sp1', function () {
    var value=$(this).text();
    // alert(value);
    location.href="searchList.html?keyword="+value;
  });
  $('.clear-history').click(function(){
    // alert(1);
    clearLocalHistory();
    showLocalHistory();
  });
});
// 1.获取本地History
var getLocalHistory = function () {
  return JSON.parse(window.localStorage.getItem('History') || '[]');
}
// 测试
// console.log(getLocalHistory());
// 2.设置本地History
var setLocalHistory = function (keyword) {
  var historyData = getLocalHistory();

  historyData.forEach(function (item, index) {
    if (item == keyword) {
      historyData.splice(index, 1);
    }

  });

  historyData.unshift(keyword);
  // console.log(historyData);
  window.localStorage.setItem('History', JSON.stringify(historyData));
}
// setLocalHistory('adidas');
// 3.删除一个
var delLocalHistory = function (keyword) {
  var historyData = getLocalHistory();
  historyData.forEach(function (item, index) {
    if (item == keyword) {
      historyData.splice(index, 1);
    }
  });
  // console.log(historyData);
  window.localStorage.setItem('History', JSON.stringify(historyData));
}
// 4.清除历史记录
var clearLocalHistory = function () {
  window.localStorage.removeItem('History');
}
// 5.展示历史记录
var showLocalHistory = function () {
  var historyData = getLocalHistory();
  if(historyData.length==0){
    $('.lt-history-title').html('无搜索记录！！');
  }
  var json = { 'list': historyData };
  var html = template('tpl1', json);
  $('.lt-history-list').html(html);
  
}
// showLocalHistory();
