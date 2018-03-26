﻿
2. 合理设置 HTTP缓存
      
      1.不缓存页面
       
            //html设置  不缓存页面
            <meta http-equiv="pragma" content="no-cache">
            <meta http-equiv="cache-control" content="no-cache">  //浏览器和缓存服务器都不应该缓存页面信息；
            <meta http-equiv="expires" content="0">               //缓存过期时间（过期后，重新请求服务器）
            
            
      2. 缓存页面
            <meta http-equiv="cache-control" content="max-age=2592000e">  
            <meta http-equiv="expires" content="Sun, 19 Jun 2016 13:35:04 GMT">              


3.DNS预获取

    <link rel=”dns-prefetch” href=”http://a0.twimg.com”/>

5. 将 CSS放在 HEAD中
　

   原因： 
	先渲染html,后渲染css  
		导致页面由无 CSS状态跳转到 CSS状态，用户体验差
                有些浏览器先 下载CSS 后渲染页面  ，如果 CSS放在靠下的位置则会导致浏览器将渲染时间推迟。





7. 减少不必要的 HTTP跳转
　  （等待验证？？？？？？？？？）
   　对于以目录形式访问的 HTTP链接，很多人都会忽略链接最后是否带 ’/'，假如你的服务器对此是区别对待的话，那么你也需要注意，这其中很可能隐藏了 301跳转，增加了多余请求。具体参见下图，其中第一个链接是以无 /结尾的方式访问的，于是服务器有了一次跳转。


8. 避免重复的资源请求

      同样的资源 避免重复请求（每个模块中请求了同样的资源时，会导致资源的重复请求）




二、代码级优化

　　1. Javascript

   　　(1). DOM
　　
          原因： DOM操作最耗性能（增、删、改、查） 

          
                 
               
               
               
               
               
     //设置关键字（利于爬虫搜索）       
     <meta name="Keywords" content="小笨鸟,XBN,xbniao.com,小笨鸟网络,跨境电商,外贸b2c,外贸电商,外贸平台,电子商务,出口贸易, ebay工具,ebay,amazon,newegg">
     <meta name="Description" content="小笨鸟，小笨鸟网络(xbniao.com)是为中国中小型企业提供的开展跨境电商贸易的网络平台，通过对接Ebay等海外知名的电子商务网站，为用户提供一键式的操作管理流程，简单易用的用户界面，安全可靠的技术平台，帮助企业更加便捷及高效的处理跨境电商业务。">
  
                 





		
         
         
http请求分解为以下几步：
      1.Connection Setup（建立连接）
      		
            1.Queueing（队列）	      20.43 ms
            
            2.Stalled（延迟）	      410.58 ms
      
      
      2.Request/Response（请求/相应）
      		
            1.Request sent	3.67 ms
            2.Waiting (TTFB)	60.07 ms
            3.Content Download	341.27 ms
            
//页面全局刷新完成时间    
      应该做到2秒内完成
      单个文件
            请求时间不超过300 ms
            大小不超过 160KB
            
            
            
163邮箱 与 小笨鸟 性能对比


                                  163邮箱               小笨鸟
 1.页面刷新完成时间               1s -- 2s             2.5s -- 3s   
 
 2.单个文件请求时间（最长的）      386 ms *1个          1.66s * 3个
 
 3.单个文件大小    （最大的）      160KB*1个           300KB * 3个
 
 4. 请求次数                     33个                 64个
                  
            
            
            
            
      
           
            
//小笨鸟性能分析
      1.代码压缩（减少代码体积）
      
      2.不用太大的组件库 （减少代码体积）
      
      3.文件按需加载（减少请求数量）
      
      4.大量数据必须存在服务器（必须不能放在本地），否则会造成文件体积过于庞大
      
      5.主页请求次数过多，造成请求延迟时间加长
      
            解决：
                  1. 图片合并
                  2. js请求合并   或者放内部js
                  3. css请求合并  或者放内部css
                  
                  
                  
      
      
      6.第一次的DNS查找时间过长
      
      7.图片延迟时间为什么过长？？？？
      
      8.文件没有合并压缩
      
      9.我的product-common.js 文件体积过大，没有拆成小模块（失败）
      
            注意：每个文件的体积，最好不要超过1000行（太大，会对文件下载造成影响）
            
      10. 首页图标库如何处理？     
            
            第一次就加载，还是按需加载？
            
       11. 设计的失败，造成性能的耗损
            
            1. 小笨鸟商品详情页，左侧还加载商品列表（商品列表的重复加载，造成资源浪费）
                  解决方案：
                        去掉左侧商品列表
                 
            2. 小笨鸟登录页几乎有一张大图撑起，此图不加在，页面几乎全白（设计比较失败）
                  推荐解决方案：
                  小笨鸟登录页放入框架内 （参考163邮箱登录，或者网易云课堂登录）   
            
      
      
      

            