			$.ajax({
				
				url: './ran.php',
				
				type: 'GET',
				
				async:false/*默认*/, //异步： 无需等待响应, JS继续执行
				
				
				//( processData:true )
				//自动转成 &a=1&b=2    
				data: {
					a:1,
					b:2	
				},
				
				//自动加一个时间戳
				cache: false, //缓存			
				
				//发送时  编码类型
				contentType: 'content-json',
						//  application/json
						//默认 "application/x-www-form-urlencoded" 
				
				
				
				//返回时  数据类型
				dataType: 'json',
						 // 'script' 解析为 JavaScript代码 并执行 
						 // 'text'
						 // 'html'
						 // 'jsonp'  ??????????
				
			
				success: function(responseData, status, XML){
					console.log(responseData)
					console.log('---------------')		
				},
				
				error: function(XML, status, errorThrown){
					console.log(status)
					console.log(errorThrown)	
				},
				
				//对应状态码  调用相应函数
				statusCode: {
					404: function() {
						alert('page not found');
					},
					200: function() {
						alert('success')	
					}
				}
				
					
			})  
	
	
	