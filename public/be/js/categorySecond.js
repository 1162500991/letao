// 上传输入框
$(".fileupload input").fileupload({  
  url:"/category/addSecondCategoryPic",//文件上传地址，当然也可以直接写在input的data-url属性内  
  // formData:{param1:"p1",param2:"p2"},//如果需要额外添加参数可以在这里添加  
  done:function(e,result){  
      //done方法就是上传完毕的回调函数，其他回调函数可以自行查看api  
      //注意result要和jquery的ajax的data参数区分，这个对象包含了整个请求信息  
      //返回的数据在result.result中，假设我们服务器返回了一个json对象  
      // console.log(JSON.stringify(result.result));  

      // 如果你要找图片的地址 在result.result
      console.log(result.result);
  }  
})  