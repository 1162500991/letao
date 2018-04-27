$(function(){
  render();
  $('#btn-1').on('click',function(){
    // console.log(1);
    var value=$('[name="categoryName"]').val();
    if(!value){
      return false;
    }
    $.ajax({
      type: 'POST',
      url: '/category/addTopCategory',
      data: {
        categoryName: value
      },
      success: function (data) {
        // getFirstCatrgory();
        // console.log(data);
        // data.rows=data.rows.reverse();
        // console.log(data.rows);
        if(data.success){
          $('#addModal').modal('hide');
          render();
          element.bootstrapPaginator(options);
        }
      }
    });
  });
});
/**
 * 
 * @param {number} page 
 * @param {number} pageSize 
 */
var render=function(page,pageSize){
  $.ajax({
    url:'/category/queryTopCategoryPaging',
    type:'get',
    data:{
      page:page||1,
      pageSize:pageSize||5
    },
    success:function(data){
      // console.log(data);
      data.rows=data.rows.reverse();
      // console.log(data);
      var html=template('first-tpl',data);
      $('tbody').html(html);
      $(".pagination").bootstrapPaginator({
        bootstrapMajorVersion: 3,// 规定了bootstrap的版本 必须写 
        currentPage: data.page,//当前页面  
        numberOfPages: 5,//一页显示几个按钮（在ul里面生成5个li）
        // total一共有6条数据  一页显示 5个  2页
        // Math.ceil(data.total/data.size )
        totalPages: Math.ceil(data.total / data.size), //总页数 
        // onPageChanged 改成 onPageClicked
        onPageClicked: function (event, originalEvent, typePage, currentPage) {
          // 点几就把几传给页码
          console.log(currentPage);
          render(currentPage);
        }

      })
    }
  });
}