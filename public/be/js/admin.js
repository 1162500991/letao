// 删除进度条圆圈：
NProgress.configure({ showSpinner: false });


$(document).ajaxStart(function () {
  NProgress.start();
});
$(document).ajaxComplete(function () {
  NProgress.done();
});



$('a[data-menu]').on('click', function () {
  // alert(1);
  // $('.ad_aside').toggle(500);
  $('.ad_aside').toggleClass('left');
  $('.ad_section').toggleClass('menu');
});
// 二级菜单栏
$('.menu').on('click', 'a', function () {
  $(this).siblings().toggle(500);
});
// 退出
$('a[data-logout]').on('click', function () {
  // alert(1)
  var html = `<div class="modal fade bs-example-modal-sm  bs-example-modal-lg" id="myModal" tabindex="-1">
  <div class="modal-dialog modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">温馨提示</h4>
      </div>
      <div class="modal-body">
      <p class="alert alert-danger"><i class="glyphicon glyphicon-info-sign"></i> 您确定要退出后台管理系统吗？</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
        <button type="button" class="btn btn-primary">确定</button>
      </div>
    </div>
  </div>
</div>`;
  $('body').append(html);
  $('#myModal').modal('show');  
});

$('body').on('click','.modal-footer .btn-primary',function(){
  // console.log(1);
  $.ajax({
    url:'/employee/employeeLogout',
    type:'GET',
    data:null,
    success:function(data){
      // console.log(data);
      if(data.success){
        $('#myModal').modal('hide')
        location.href='login.html';
      }
    }
  });
});