  # vuetest

> a vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

2018/7/17  图片在循环的时候报404，就需要加上require
参考网址 https://www.cnblogs.com/crazycode2/p/8689992.html


小的定时器
var a = true;
			var len = 60;
			 if (a) {
			 	$.post("<?php echo BASE ?>Ajax/VerifySMSCodeGet",{
                  },function (res){
                 	console.log(res);
                 		if(res.result_code==0){
                 			e.removeClass("zwlcol32").addClass("zwlcoldf");
							e.parents().siblings(".tips").addClass("active");
			       			e.html(len + 's');
					        var time = setInterval(function() {
					            e.html(parseFloat(e.html()) - 1 + 's');
					            if (e.html() == '50s') {
					                clearInterval(time);
					                a = true;
					                e.addClass("zwlcol32").removeClass("zwlcoldf");
					                e.html("重新获取")
					            }
					        }, 1000);
					        a = false;
			       		}else{
			       			YDUI.dialog.alert(res.result_desc);
			       		}
                  },"json");
		    } else {
		        return false;
		    }
