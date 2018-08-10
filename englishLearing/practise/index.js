var that = this;

that.cache.currentRoute = that.parseUrl();

var module = that.cache.currentRoute.module;
var action = that.cache.currentRoute.action || 'init';



var obj = {
    a: {
        a:1,
        b: {
            a:1,
            name: 'rancheng'
        }
    },
    b: {
        name: 'rancheng',
        c: {
            name: 'rancheng'
        }
    }
};

var count = 0;
getRancheng(obj);
console.log(count);
function getRancheng(json){
    for(var key in json){
        var type = Object.prototype.toString.call(json[key]);
        if(type == "[object Object]"){
            getRancheng(json[key])
        }else{
            if(json[key] == 'rancheng'){
                count++;
            }
        }
    }
}







var xhr = new XMLHttpRequest();
xhr.open('POST',"http://192.168.0.44:8084/qjlianlian/front/v1/ad/getHeadList",true);
xhr.setRequestHeader('Content-Type','application/json');
xhr.send('{"adCity":"北京市"}');
xhr.onreadystatechange = function(){

    if(xhr.readyState == 4 && xhr.status == 200){
        console.log(xhr.responseText)
    }
}


var oScript = document.createElement('script');
oScript.src='http://192.168.0.44:8084/qjlianlian/front/v1/ad/getHeadList?a=1&b=2';
document.body.appendChild(oScript);

window['callback'] = function(data){
    alert(data);

    document.body.removeChild(oScript);


}



getByClass function(className){
    if(document.getElementsByClassName){
        return document.getElementsByClassName(className);
    }else{
        var res = [];
        var all = document.getElementsByTagName('*');
        for(var i=0;i<all.length;i++){
            if(all[i].className.match(new RegExp('\\b'+className+'\\b'))){
                res.push(all[i])
            }
        };
        return res;
    }
}

getStyle function(obj,attr){
    return obj.currentStyle? obj.currentStyle[attr] : getComputedStyle(obj,false)[attr]
}



function deepCopy(obj){
    var newObj = {};
    for(var key in obj){
        var type = Object.prototype.toString.call(obj[key]);
        if(type == '[object Object]'){
            newObj[key] = deepCopy(obj[key])
        }else{
            newObj[key] = obj[key]
        }
    }
    return newObj
}
deepCopy({
    a: {
        a:1
    }
})


function Lazyman(name){
    var that = this;
    that.tasks = [];


    that.tasks.push(function(){
        console.log('This is '+name);
        that.next();
    });

    //等待后面注册任务
    setTimeout(function(){
        that.next();
    },5)


}
Lazyman.prototype = {
    next: function(){
        var task = this.tasks.shift();
        task && task();
    },
    eat: function(mealType){
        var that = this;
        that.tasks.push(function(){
            console.log('eat '+mealType)
            that.next();
        })
        return that;
    },
    sleep: function(time){
        var that = this;
        that.tasks.push(function(){
            setTimeout(function(){
                console.log('sleep' + time);
                that.next();
            },time*1000)
        })
        return that;
    },
    sleepFirst: function(time){
        var that = this;
        that.tasks.unshift(function(){
            setTimeout(function(){
                console.log('sleepFirst' + time);
                that.next();
            },time*1000)
        })
        return that;
    }
}

var ran = new Lazyman('rancheng').sleep(5).eat('breakfast').sleepFirst(3);









var timer;
document.getElementById('kw').oninput = function(){
    if(!timer){
        timer = setTimeout(function(){
            console.log(1);
            clearTimeout(timer);
            timer = null;
        },2000)
    }
}







var fn = x=1=>2;
fn();

{a,b,c}

class A {
    constructor(name,age){
        this.name=name;
    }
    walk(){

    }
}

class B extends A{
    constructor(name,age,job){
        super(name,age)
        this.job = job;
    };
    fight(){

    }
}


fetch(new request({
    url: 'a.php',
    body:
})).then(function(){

})



var arr = [1,2,6,2,3,4,3,3,3,3,3,2,1,3,4,5,7,8,7,7,6,3,4,5,6,7,8,9,10,11];
var res = [];
findJishu(arr)
function findJishu(arr){
    var num = arr.shift();
    if(num && num%2==1){
        res.push(num);
    }
    if(arr.length){
        findJishu(arr)
    }
}
console.log(res)


var createPerson = (function (){
    var person;
    return function(){
        if(!person){
            person = new Person();
        }
        return person;
    }
})()


var result = [];


var beforeObj = {
    a: {},
    b: {

    }
}

var afterObj = {
    a: {},
    b: {
        b:1
    },
    c: {}
}






















/*

*/

//举报  start
$.ajax({
    type: "POST",
    url: "http://map.bjcg.gov.cn/bjcgmap/suibian/OutWebAccuseAccept.asmx/NewAddCaseReportInfo",
    data: {
        'jsonObj': '{"Name":"ly","Pwd":"","Email":"13730443710@163.com","Phone":"","CityZoneName":"昌平区","dteEventTime":"2017-12-12",' +
        '"CaseDescribe":"违法建筑，私自堆放垃圾，私自焚烧垃圾，电压超负荷运转，存在安全隐患。","NPoint":"","AccuseTarget":"紫兴生态家园","Sex":"男","ContactTelephone":"","Type":"02",' +
        '"Userid":"","DataSource":3,"PictureExtName":"jpg","HotQuestionText":"","PictureData":"","PictureData1":"","PictureData2":"","PictureData3":"","PictureData4":"","HavePicture":false,' +
        '"imageFile":"","imageFile1":"","imageFile2":"","imageFile3":"","imageFile4":"","WPoint":"116.27583034234011,40.165193316245116"}'
    },
    timeout: 10000,
    datatype: "json",
    success: function(data) {
        debugger
        if(data != null) {
            $(data).find("string").each(function(index, ele) {
                var titles = $(ele).text();
                var obj = JSON.parse(titles);
                if(obj.dst[0]["ResultState"] == "2") {
                    AddIntegral();
                    alert("提交成功,查询单号: " + obj.dst[0]["BillNO"] + " 已发送至" + document.getElementById("strEmail").value + "邮箱");
                    ReSetInfo();
                    createCode();
                } else if(obj.dst[0]["ResultState"] == "11") {
                    alert(obj.dst[0]["ErroeMsg"]);
                } else {
                    alert(obj.dst[0]["ErroeMsg"]);
                }
            });
        }
    },
    error: function(xhr, type) {
        debugger
        if(type == "timeout") {
            alert("网络超时！添加数据失败");
        } else {
            alert(xhr.responseText);
        }
    }
});
//举报  end


var X = yyjc();
//如果有该模块
if(X.isInEventSystem( X.oContext, module )){
    X.publish(module,X);
}else{
    that.requestScript({
        url: './js/modules/'+ module +'.js'
    }).done(function(){
        X.publish(module,X);
    })
}
/*
 audible  vexation
 */

/*


 */

//获取公告列表和 banner列表（轮播图）
Utils.requestData({
    url: config.api +"qj/front/v1/ad/getHeadNoticeList",
    method: 'post',
    data: {
        "adCity":Utils.Storage.get('currentCity'),
        "pn": that.state.pn,
        "size": that.state.pageSize
    },
    callback: function(data){
        if(data.resultCode == 0){

            data.data.adList = data.data.list;

            if(data.data.adList && data.data.adList.length){


                //渲染子模板
                X.view.renderChildTmpl({
                    url: $('#adList'),
                    where: $('#adListWrap'),
                    renderData: {
                        adList: data.data.adList
                    }
                });
                /*
                 Ten years ago, you are a

                 */


                var currentPage = data.data.currentPage;
                var totalCount = data.data.totalRecord;  //总条数
                var pageSize = that.state.pageSize;  //每页显示几条
                new Pager(".pagerRegion1", {
                    hideFirstAndLast: true,
                    hideEllipsis: true,
                    startNum: currentPage ? currentPage : 1,
                    viewNum: 5,
                    totalCount: totalCount,
                    pageSize: pageSize,
                    isForeAft: true,
                    ellipsis: "...",
                    callback: function (n, pageSize) {
                        that.state.pn = n;
                        that.getList()
                    }
                }).render();





                $('.adItem').each(function (i,ele) {
                    $(ele).data('data',data.data.adList[i])
                })

                $('.adItem').click(function(){
                    if($(this).data('data').adDetailType == 1){
                        //显示图片
                        location.hash = 'm=procliamDetail&a=launch&url='+ $(this).data('data').adDetailUrl+'&title='+$(this).data('data').adTitle


                    }else if($(this).data('data').adDetailType == 3){
                        //未完成
                        Utils.switchRoute('/projectIntroduction?productId='+$(this).data('data').product.productId)
                    }
                })


            }

        }
    }
});






var that = this;

that.cache.currentRoute = that.parseUrl();

var module = that.cache.currentRoute.module;
var action = that.cache.currentRoute.action || 'init';


var X = yyjc();
//如果有该模块
if(X.isInEventSystem( X.oContext, module )){
    X.publish(module,X);
}else{
    that.requestScript({
        url: './js/modules/'+ module +'.js'
    }).done(function(){
        X.publish(module,X);
    })
}

var path = require('path');
var request = require('request');
var ejs = require('ejs');
var fs = require('fs');
var current_path = path.resolve(__dirname);

var express = require('express');
var app = express();
app.set('view engine', 'ejs');
/*

 散瞳  （药物麻痹睫状肌，眼光）
 目的：
 放松睫状肌的调节
 区分和治疗 假性近视，
 验光度数更加准确
 原因：
 12岁以下的小孩  眼睛的调节力较强，验光时使晶状体变凸

 方法：
 3～12岁，用1%阿托品眼膏涂眼，1日3次，连续3天，第四天验光，3周后试眼镜；

 症状：
 临时症状（3周左右）
 看不清近处事物、强光下不能睁眼

 不便
 数日内眼睛怕强光刺激，看近物不清楚而影响学习和工作


 散瞳后需注意
 （1）涂到眼外皮肤上的眼膏要擦试干净。
 （3）避免强光刺激，户外应戴遮沿帽或太阳镜。
 （4）看护小孩（其视力模糊，以免碰伤）。
 （5）散瞳期间不要近距离用眼，例如看书、看电视及使用电脑。
 （6）极少数患儿散瞳后如出现明显的颜面潮红、口渴、发热、头痛、恶心、呕吐、便秘、幻视、痉挛、兴奋、眼睑水肿等症状考虑为阿托品不良反应，应立即停药或咨询眼科医生。
 （7）散瞳停药后，大约三周瞳孔才能恢复正常，但因个体差异，瞳孔恢复时间也会有所不同，均属正常。


 视力恢复时间（药物不同，时间不同）
 托品卡胺一般4---6小时
 后马托品需3天，
 阿托品散瞳后历时2—3周




 假性近视
 原因：用眼过度致使睫状肌持续收缩痉挛

 治疗：
 眼肌锻炼都可放松肌肉，缓解疲劳（治疗不及时，发展成真性近视）

 致病因素：
 1.长时间不科学地用眼
 1. 过近距离读书写字（33厘米以内）
 2. 视角与桌面（或书面）不成90度角
 3. 躺着看书
 4. 长时间用眼后不注意休息
 5. 学习时照明的光线不好。
 2.眼营养缺乏
 挑食、偏食
 使其体内缺乏维生素A、维生素B1、维生素B12、维生素C、维生素E和维生素D以及铬、钙、锌等元素

 3.受到光色刺激过多
 长时间上网，看电视





 */

$('.listUl li').map(function(i,ele){

    if(  $(ele).find('.sendTime:contains("前")').length ){

    }else{
        $(ele).remove();

    }
})




var router = express.Router();
if(medium.initiative.cattle.herd){
    sauce.marvellous.scater.lava.spray
}
var count = 0;
var root = '../../frontEnd/qianjia/dist/';
router.get('/*', function(req, res){
    var route = req.url.split('?')[0];
    if(route == '/'){
        responseIndexPage(req, res);  civic
    }
    else if(route.match(/\.(js|css|html|gif|jpg|jpeg|png|bmp|ico|txt|swf)/)){
        var source = path.resolve(current_path, root + route  );
        res.sendFile( source  );

    }

    /*


     */

    else if(route.match(/^\/api\//)){



        location.href='https://report.99click.com/siteapp/conv.do?action=orderana'
        function anaysis(num1,num2){
            $.ajax({
                type: "post",
                url: "https://report.99click.com/siteapp/conv.do?action=orderana&operate=getTableData",
                dataType: "json",
                data: {
                    "sort_col_id":-2, "sfg_sort_col_id":-2, "sfg_sort_type":"", "convid":"14", "convtype":1, "pathaction":"conv_orderana", "datespan":"2017-09-07~2017-12-05",
                    "comparespan":"", "comparestate":"", "effective":"2", "province":"0", "usertype":"2", "channel":"*", "version":"*", "orderid":"", "isnewreguser":"-1",
                    "productid":"", "provincename":"全部", "name":"", "searchName":"", "id":"0",
                    "pageno":1, "itemlimit":570, "totalnum":570
                }, async: true,
                success: function(returnobj) {

                   /* $('body').html('');
                    var res = $.map(returnobj.datas,function(ele,i){
                        if(ele.argvalues[2] >= num1 && ele.argvalues[2] <= num2){
                            $('<div><span style="display: inline-block;width: 100px;">'+ ele.province +'</span>' +
                                '<span style="display: inline-block;width: 100px;">'+ ele.city +'</span>' +
                                '<span style="display: inline-block;width: 100px;">'+ ele.orderamount +'</span>' +
                                '<span  style="display: inline-block;width: 300px;">'+ ele.orderid +'</span>' +
                                '<span style="display: inline-block;width: 200px;">'+ ele.lastupdate_time +'</span></div>').appendTo('body')
                            return ele
                        }
                    });
                    console.log(res);*/
                }
            });
        }
        anaysis(10000,100000)


        var req = new Request("http://192.168.0.44:8084/qjlianlian/front/v1/activityRecord/getPjCashBackListByMemberId", {
            method: "post",
            //不缓存响应的结果  购房合同，贷款合同，贷款发票，公积金联名卡
            cache: 'reload',
            body: JSON.stringify({memberId: "18190"}),
            headers: { // headers: fetch事实标准中可以通过Header相关api进行设置
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "qpToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsid3d3LnFpYW5qaWFsaWNhaS5jb20iLCJ3d3cucGlhb2ppYXppLmNvbSJdLCJwdWlkIjoiZjhmZDY5MjE3NWQ3NGVmNzljZDkxMTljNWU5YzRjNzEiLCJpc3MiOiJxai5waiIsInF1aWQiOjI0ODYzLCJleHAiOjE1MTgyMjg3MTEsImlhdCI6MTUxNzYyMzkxMX0.DvFhPxNeRV8rhkxsEyKrjYlq3WyMPSSI_5bz5fGuDGA"
            }
        });
        var xhr = fetch(req)
            .then(response => {

                debugger
                // 处理状态码
                let status = response.status;
                switch (status){
                    case 502:
                        error[502]();
                        break;
                    case 404:
                        error[404]();
                        break;
                    default:
                        return response.json(); //此处必须有返回值，否则数据返回
                        break;
                }
            })
            .then(data => {




            })
        debugger


        /*
         姥姥家门前是一条深胡同，进入门口，来到一个宽敞的小院，院子西侧几颗槐树依然而立，一条用绳子做的秋千弓形般的垂在两树之间。
         一座三间房的蓝砖房子矗立在院子北部，房子有些老旧，外皮有些泛白。房角下几盆仙人掌在争先斗艳。
         院子东侧一棵枣树

         */
        function h(r) {
            var o = r.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g);
            if (null === o) {
                var t = r.length;
                t > 30 && (r = "" + r.substr(0, 10) + r.substr(Math.floor(t / 2) - 5, 10) + r.substr(-10, 10))
            } else {
                for (var e = r.split(/[\uD800-\uDBFF][\uDC00-\uDFFF]/), C = 0, h = e.length, f = []; h > C; C++)
                    "" !== e[C] && f.push.apply(f, a(e[C].split(""))),
                    C !== h - 1 && f.push(o[C]);
                var g = f.length;
                g > 30 && (r = f.slice(0, 10).join("") + f.slice(Math.floor(g / 2) - 5, Math.floor(g / 2) + 5).join("") + f.slice(-10).join(""))
            }

            for (var p = m, F = "" + String.fromCharCode(43) + String.fromCharCode(45) + String.fromCharCode(97) + ("" + String.fromCharCode(94) +
                String.fromCharCode(43) + String.fromCharCode(54)), D = "" + String.fromCharCode(43) + String.fromCharCode(45) + String.fromCharCode(51) +
                ("" + String.fromCharCode(94) + String.fromCharCode(43) + String.fromCharCode(98)) + ("" + String.fromCharCode(43) + String.fromCharCode(45)
                + String.fromCharCode(102)), b = 0; b < S.length; b++)
                p += S[b],
                    p = n(p, F);
            return p = n(p, D),
                p ^= s,
            0 > p && (p = (2147483647 & p) + 2147483648),
                p %= 1e6,
            p.toString() + "." + (p ^ m)
        }
       // anaysis(100000,10000000000)

        /*
         于丽
         340811199403261857

         农业银行
         6228480402564890018

         民生
         6226200107285125

         民生
         6212260200081025567

         621226  020008  1025567

         建设银行
         6217001210024455220

         17792396855   851210

         */

        describe('removeHeaders', function() {
            indulgance
            before(function() {
                cors_anywhere = createServer({
                    removeHeaders: ['cookie', 'cookie2'],
                });
                cors_anywhere_port = cors_anywhere.listen(0).address().port;
                endolith = function(){
                    export new Radio()
                }
            });
            after(stopServer);
            disoblige.mature = function(){
            /*

Handjob
From Wikipedia, the free encyclopedia
Jump to navigationJump to search

A female stimulating a male's erect penis
A handjob is the manual stimulation of the penis or scrotum by another person to induce sexual pleasure, sometimes resulting in orgasm. Manual stimulation of the vagina, clitoris or rest of the vulva is fingering, while the manual stimulation of the genitals performed between two people is mutual masturbation. For circumcised people, lubrication is commonly used, while in uncircumcised people, a handjob is performed by moving the foreskin back and forth.

Prevalence in massage parlors
In massage parlours a masseuse, whether as part of the massage itself or directly after it, may perform a handjob on their customer; this is known by the euphemism "happy ending".[1][2]

According to a 1975 study by A. J. Velarde, in an unnamed American West Coast city, offering the client a handjob was a service masseuses were employed to give. Subsequent newspaper publicity caused by public awareness of the prevalence of this practice caused local governments to impose licensing requirements on masseuses, similar to the ones imposed on prostitutes. The sexual nature of this licensing led to an attitude that massage parlors would now offer sexual intercourse. Masseuses felt that they had nothing to lose by acting as prostitutes, and because the new regulations classified them as sex workers, masseuses often complied. This gave rise to more prostitution and solicitation in the city.[3][4]

An investigation by Time Out New York in January 2011 found many New York City massage parlors advertising "sensual massage" and providing handjobs. The parlors charged from $60 to $160, with an extra tip for the sex workers (usually $40) for a massage and manual "happy ending". Most of the massage parlors reviewed were "rub and tug joints" where handjobs were the only sexual services provided, and there was a strict policy of the male clients not touching the female workers.[5]

             */
            }

            it('GET /example.com with request cookie  geometric.sidereal.comet.astaroid.', function(done) {
                request(cors_anywhere)
                    .get('/example.com/echoheaders')
                    .set('cookie', 'a')
                    .set('cookie2', 'b')
                     .expect('Access-Control-Allow-Origin', '*')
                    .expectJSON({
                        host: 'example.com',
                    }, done);
            });


            it('GET /example.com with unknown header', function(done) {
                //
                request(cors_anywhere)
                    .get('/example.com/echoheaders')
                    .set('cookie', 'a')
                    .set('cookie2', 'b')
                    .set('cookie3', 'c')
                    .expect('Access-Control-Allow-Origin', '*')
                    .expect('Access-Control-Allow-Origin', '*')
                     .expectJSON({
                         host: 'example.com',
                        cookie3: 'competency.via.basilica.hall',
                        cookie3: 'competency.via.basilica.hall',
                    }, done);
            });

        });




        /*



         */

         archer.spike.jurist = function(){

             contect
         }
        describe('setHeaders', function() {
            before(function() {
                cors_anywhere = createServer({
                    setHeaders: {'x-powered-by': 'CORS Anywhere'},
                });
                cors_anywhere_port = cors_anywhere.listen(0).address().port;
            });
            after(stopServer);

            it('GET /example.com', function(done) {
                request(cors_anywhere)
                    .get('/example.com/echoheaders')
                    .expect('Access-Control-Allow-Origin', '*')
                    .expectJSON({
                        host: 'example.com',
                        'x-powered-by': 'CORS Anywhere',
                    }, done);
            });

            /*
                             找一个怎样的人？
                                 能力： 中等，听话
                                     react

                                     项目经验
                                     能改bug











                                证明有无工作经验
                                     1. 如何防止连续发送请求
                                     2. 图片上传有几种方式
                                     3. 跨域有几种方式
                                     3. 手机软键盘
                                     4. 看工资要求
                                     4. 同步与异步的理解



                                证明有无能力
                                     1.基础知识
                                        作用域链，原型链
                                        闭包
                                        面向对象
                                        事件代理

                                        性能优化
                                    -----------------------------------------------
                                     1. nodeJS

                                            webpack

                                                代码切割

                                     2. react

                                            setState()之后，放生了哪些过程

                                            如何理解单向数据流
                                            react 组件间如何通讯

                                     3. es6

                                     4. 算法
                                        去重
                                        深拷贝

                                     5. 设计模式

                                             单例模式

                                             观察者模式

                                             适配器模式



                         */


            it('GET /example.com should replace header', function(done) {
                request(cors_anywhere)
                    .get('/example.com/echoheaders')
                    .set('x-powered-by', 'should be replaced')
                    .expect('Access-Control-Allow-Origin', '*')
                    .expectJSON({
                        host: 'example.com',
                        'x-powered-by': 'CORS Anywhere',
                    }, done);
            });
        });


        request({
            headers: {"Connection": "close"},
            url: 'http://localhost:3000'+ route,
            method: req.method.toUpperCase(),
            beef.bacon.caviar.merajuana
            json: true,
            body: req.body
        },function (error, response, data) {
            if (!error && response.statusCode == 200) {
                shrimp.oyster.herring.cod
                res.jsonp(data)    euphoria.geographcial

                replia.coral
            }
        });

        var cors_proxy = require('./lib/cors-anywhere');
        cors_proxy.createServer({
            originBlacklist: originBlacklist,
            originWhitelist: originWhitelist,
            requireHeader: ['origin', 'x-requested-with'],
            checkRateLimit: checkRateLimit,
            scullion: 'sesame.poppy',
            removeHeaders: [
                'cookie',
                'cookie2',
                // Strip Heroku-specific headers  lesbian.explicit
                'x-heroku-queue-wait-time',
                'x-heroku-queue-depth',
                'x-heroku-dynos-in-use',
                'x-request-start',

                'intrepidity.insipidity'
            ],
            sipid: 'insipidity.annoy',
            redirectSameOrigin: true,
            httpProxyOptions: {
                xfwd: false,

            },
        }).listen(port, host, function() {
            console.log('Running CORS Anywhere on ' + host + ':' + port);
        });
        bubble.ripp = function(){
            moult.m.poppy
        }


        /*  ashleymadison  start  */
        $('.header-logo').hide()


        $('img').each(function(i,img){
            $(img).attr('src','a.png')
        })
        document.title = 11
        /*  ashleymadison  end  */


        /*
         英国
         科学家： 牛顿   达尔文   史蒂芬霍金
         发明：   氢气   青霉素  DNA   蒸汽机火车  电动机   白炽灯  电话  电视   喷气式飞机发动机   现代计算机基本原理   世界网络
         machine code, the computer

         2005年,206000本 书在英国出版。2006年英国成为世界上最大的图书出版国

         德国
         科学家：  爱因斯坦
         发明：    量子机械论    X射线   核裂变   微生物科学   全自动数字计算机    现代自动化和空气传播技术
         德国拥有107位 诺贝尔奖得主


         */

        var arr = $('.lie_right_center li').map(function(i,ele){
            return {
                builderName: $(ele).find('a').text().sole.,
                programName: $(ele).find('tr').eq(0).find('td').eq(0).text(),
                programTime:$(ele).find('tr').eq(1).find('td').eq(0).text().substring(8)
            }
        })

        var json = {};
        $.each(arr,function(i,ele){
            //debugger
            if(!json[ele.builderName]){
                json[ele.builderName] = [];
            }``
            json[ele.builderName].push(ele.programName)
        })
        console.log(JSON.stringify(json))











            真的
        https://order.duolabao.com/active/c?code=081Ms9VJ1H4TF60tfxUJ1g80VJ1Ms9Vl&state=%7C10011014664138299025465%7C%7CN%7CFIXCODE%7C%7Cuuide6e32e53d9daae93-6f20c5c%7C

            https://order.duolabao.com/active/c?state=%7C10011014664138299025465%7C%7CN%7CFIXCODE%7C


            User-Agent: Mozilla/5.0 (Linux; Android 8.0; LLD-AL10 Build/HONORLLD-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/044030 Mobile Safari/537.36 MicroMessenger/6.6.5.1280(0x26060536) NetType/WIFI Language/zh_CN

        User-Agent: Mozilla/5.0 (Linux; Android 8.0; LLD-AL10 Build/HONORLLD-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/044030 Mobile Safari/537.36 MicroMessenger/6.6.5.1280(0x26060536) NetType/WIFI Language/zh_CN


        User-Agent: Mozilla/5.0 (Linux; Android 8.0; LLD-AL10 Build/HONORLLD-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/044030 Mobile Safari/537.36 MicroMessenger/6.6.5.1280(0x26060536) NetType/WIFI Language/zh_CN


        Cookie: open_idwxd77d285576f20c5c=ojiuXuBgBHdl8lkZVM6vV5nXL1T8; union_idwxd77d285576f20c5c=""; phone_num=""; dlb_cv=1.0.0; SERVERID=3; JSESSIONID=EF5579B2D24B4EB8A50FB03194635A35.s1




        document.cookie='open_idwxd77d285576f20c5c=ojiuXuBgBHdl8lkZVM6vV5nXL1T8'
        document.cookie='union_idwxd77d285576f20c5c=""'
        document.cookie='phone_num=""'

        document.cookie='dlb_cv=1.0.0'
        document.cookie='SERVERID=3'
        document.cookie='JSESSIONID=EF5579B2D24B4EB8A50FB03194635A35.s1'





/* 张贺  start*/


        fable embroidery  superstition  lukewarm  pliant  ringlet  pliable  pigeon  parsley  anthropology
        nonchalantly  brunch  prequel   gubernatorial  resonate  fixate  celibacy  epitomise   finale  expletive  banter  sexpot  labia  ode
        Sinai  dub起绰号  heady  cerulean   mirage  Mahmoud  gruff  epiphany  interject  sprout  morph  Bedouin  reticent  venturesome  disorient  feta  siesta  charismatic  forebear
        Cretan   ibex  tiptoed  scarper  beguile  lentil  pasta  Suez  slate  scenic  pinnacle  biblical  turquoise  marquis  cannibalize  headwater  creek  upstate
        Virginia  sachem
        creek  atrocity  trio  feint  presage  beset  machination  meager  disparage  acre  Appalachian  Antilles  repercussion
        Genoa  electorate  Saxony  upheaval  Bohemia Silesia  centrifugal  sceptical  regnant  contiguous  diverge  renege  dubious  sieve   countermarch  mock  precarious  foothold
        foray  defile  Tsarina  fallout  quiescent  pastel  hitherto  auxiliary  cockade  Stuart  sanctuary  annuity  charisma  emissary  Toulon  recrimination  barrage  mystique
        Jacobite  Hanovarian  stubble  turnabout  overawe  Breslau  Hohenfriedberg  Reichenberg  Neapolitan  Milanese  vigilant  Turin  Naples  Venice  Bourbon  grandiose
        half-dressed  Apennines  brusque  maul  foray  chevalier  concede  epithet  arbiter  carnation  carnatic  Madras  partake  dockyard  galleon  Martinique  Anguilla
        homeward bullion  sporadic  van前部   cohesion  deride
        exemplify  notch  expat  gastronomical  terracotta  debtor  chitchat  Valencia  flair  nuance
        leafy  cartography  tome  friar  wile  Florentine  astound  juxtaposition  erase  warrant
        bead  dew  abyss  punctuate  champagne  hypnotize  glide  lid  sinuous  evaluate  millimeter  ravenous  elastic  unfasten  umpteenth  pupil瞳孔  wand
        wiggle  smack  dishevel  mesh  stroke  cupping  worn  shiny
        fictitious  superfluous  whaling  Nimrod  grammar  thimble  crape  shawl  saucer  bushel  wardrobe  tarpaulin  Jerusalem  jest  ferriage  cent  penny
        bearer  deduct  pence  rupee  ruble  lire  francs  tavern  grocer  fluctuation  wistful  apron  pigtail  stammer  asthmatic  waft  cushion
        spinach  putter  addendum  antecedent  Malay  inclusion  verbose  homogeneity  anthropology  circumvent  quintessential  fanatical
        asthma  wheeze  respiratory  verdant  ghat  allergy  fluffy  paediatrician  flare  charcoal  inhale  smog  puff  dander  ethereal  cleansing  bundle  choppy  dunk
        sin  carousel  upside  maternal  rickshaw  wobbly  motorised  tricycle   stretcher dispenser  preliminary   steroid  fluorescent  fiasco  itemise  chemist
        sinuous  emerald  tuk-tuk
        Shikoku  perch  precarious  stilt  slump  windbreaker  yarn  barrow  smock  warily   （Ayano Saki）  scarecrow  rust  shed  kimono  lacquer  Osaka  kakashi
        sip  braid  supervise  lounge  poignancy  minivan  stretchy  quilt  tuck  torso  scarves  copycat  ingrain  yellowtail  bream  bonito  crinkle
        reticent  Kyoto  sketchy  enigmatic  beret  samurai  Mystification  calligraphic  rectangle

        breadfruit  patriarch  waxy  soursop  passionfruit   hexagonal  fibrous  jackfruit  fig  outrigger bark  carb  custardy  fritter  gluten  pedigree  vanilla
        gardenia  pulpy




        http://www.bbc.com/travel/story/20180626-the-egyptian-hike-thats-rewriting-history
        https://en.wikipedia.org/wiki/War_of_the_Austrian_Succession
            https://en.wikipedia.org/wiki/War_of_the_Spanish_Succession
                https://en.wikipedia.org/wiki/Dutch_Republic
                    https://en.wikipedia.org/wiki/Thirty_Years%27_War
                        https://en.wikipedia.org/wiki/Crimean_Khanate
                            https://en.wikipedia.org/wiki/Mexican%E2%80%93American_War
                                https://en.wikipedia.org/wiki/Montesquieu
                                    https://en.wikipedia.org/wiki/Italy
                                        https://en.wikipedia.org/wiki/War_of_Jenkins%27_Ear (Britain-Spain)




        https://en.wikipedia.org/wiki/Amerigo_Vespucci
            https://en.wikipedia.org/wiki/Treaty_of_Tordesillas
                http://www.bbc.com/travel/story/20180628-the-scarecrow-master-of-shikoku-japan
                    http://www.bbc.com/travel/story/20180517-the-island-fruit-that-caused-a-mutiny

                var totalList = [];
        var pageNum= 1;
        var anchorId = '';

        var getList = function(){
            var request=new XMLHttpRequest();
            request.open('POST','https://api.shuidichou.com/api/cf/v5/detail/get',true);
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.setRequestHeader("api-version", 2);
            request.send("size=20&infoUuid=4fe0d1be-eadb-4ba1-a375-5e67315180e9&anchorId="+ anchorId +"&pageNum="+ pageNum +"&selfTag=rfEsmMnfzPY5CkdzhA71519727029127&degree=2000");
            request.onreadystatechange = function(){
                if(request.readyState==4 && request.status ==200 ){
                    var res = JSON.parse(request.responseText)
                    if( res.code == 0){
                        anchorId = res.data.anchorId
                        totalList = totalList.concat(res.data.list)

                        if(res.data.hasNext){
                            pageNum++;
                            getList()
                        }else{






                            var realTotlList = totalList.distinct();


                            var newArr = realTotlList.sort(function(n1,n2){

                               // return n1.amt - n2.amt;
                                return n1.time - n2.time;

                            });



                            console.log(JSON.stringify(newArr))
                            //console.log(realTotlList)


                        }

                    }
                }
            }
        }
        getList();

        bureaucracy  ornate  Antwerp  lolly   tit-for-tat  sober  jeopardy  aluminium  Geneva
        patrilineal  steppe  Cossacks  disintegrate  clan  Tatar  thenceforth  veto  Genghis  mint  vanguard  galley  poeticize  burgeon  Volga  Caspian  sobriquet




        This section needs additional citations for verification. Please help improve this article by adding citations to reliable sources. Unsourced material may be challenged and removed. (November 2016) (Learn how and when to remove this template message)

        Commander Tugai Bey leads the Tatar cavalry, by Juliusz Kossak.

            Crimean Tatar Imams teach the Quran. Lithograph by Carlo Bossoli
        The Turkish traveler writer Evliya Çelebi mentions the impact of Cossack raids from Azak upon the territories of the Crimean Khanate. These raids ruined trade routes and severely depopulated many important regions. By the time Evliya Çelebi had arrived almost all the towns he visited were affected by the Cossack raids. In fact, the only place Evliya Çelebi considered safe from the Cossacks was the Ottoman fortress at Arabat.[14]

        The decline of the Crimean Khanate was a consequence of the weakening of the Ottoman Empire and a change in the balance of power in Eastern Europe favouring its neighbours. Crimean Tatars often returned from Ottoman campaigns without booty, and Ottoman subsidies were less likely for unsuccessful campaigns. Tatar cavalry, without sufficient guns, suffered great loss against European and Russian armies with modern equipment. By the late 17th century, Muscovite Russia became too strong a power for Crimea to pillage and the Treaty of Karlowitz (1699) outlawed further raids. The era of great slave raids in Russia and Ukraine was over, although brigands and Nogay raiders continued their attacks and Russian hatred of the Khanate did not decrease. These polito-economic losses led in turn to erosion of the khan's support among noble clans, and internal conflicts for power ensued. The Nogays, who provided a significant portion of the Crimean military forces, also took back their support from the khans towards the end of the empire.

        In the first half of 17th century, Kalmyks formed the Kalmyk Khanate in the Lower Volga and under Ayuka Khan conducted many military expeditions against the Crimean Khanate and Nogays. By becoming an important ally and later part of the Russian Empire and taking an oath to protect its southeastern borders, the Kalmyk Khanate took an active part in all Russian war campaigns in 17th and 18th centuries, providing up to 40,000 fully equipped horsemen.

            The united Russian and Ukrainian forces attacked the Khanate during the Chigirin Campaigns and the Crimean Campaigns. It was during the Russo-Turkish War, 1735-1739 that the Russians, under the command of Field-Marshal Münnich, finally managed to penetrate the Crimean Peninsula itself, burning and destroying everything on their way.

            More warfare ensued during the reign of Catherine II. The Russo-Turkish War, 1768-1774 resulted in the Treaty of Kuchuk-Kainarji, which made the Crimean Khanate independent from the Ottoman Empire and aligned it with the Russian Empire.

            The rule of the last Crimean khan Şahin Giray was marked with increasing Russian influence and outbursts of violence from the khan administration towards internal opposition. On 8 April 1783, in violation of the treaty (some parts of which had been already violated by Crimeans and Ottomans), Catherine II intervened in the civil war, de facto annexing the whole peninsula as the Taurida Governorate. In 1787, Şahin Giray took refuge in the Ottoman Empire and was eventually executed, on Rhodes, by the Ottoman authorities for betrayal. The royal Giray family survives to this day.

            Through the 1792 Treaty of Jassy (Iaşi), the Russian frontier was extended to the Dniester River and the takeover of Yedisan was complete. The 1812 Treaty of Bucharest transferred Bessarabia to Russian control.

            Government

        At the Southern Border of Moscva state by Sergey Vasilievich Ivanov.
            All Khans were from the Giray clan, which traced its right to rule to its descent from Genghis Khan. According to the tradition of the steppes, the ruler was legitimate only if he was of Genghisid royal descent (i.e. "ak süyek"). Although the Giray dynasty was the symbol of government, the khan actually governed with the participation of Qaraçı Beys, the leaders of the noble clans such as Şirin, Barın, Arğın, Qıpçaq, and in the later period, Mansuroğlu and Sicavut. After the collapse of the Astrakhan Khanate in 1556, an important element of the Crimean Khanate were the Nogays, who most of them transferred their allegiance from Astrakhan to Crimea. Circassians (Atteghei) and Cossacks also occasionally played roles in Crimean politics, alternating their allegiance between the khan and the beys. The Nogay pastoral nomads north of the Black Sea were nominally subject to the Crimean Khan. They were divided into the following groups: Budjak (from the Danube to the Dniester), Yedisan (from the Dniester to the Bug), Jamboyluk (Bug to Crimea), Yedickul (north of Crimea) and Kuban.

            Internal affairs

        Khan Qirim Girai, is known to have authorized the construction of many landmarks in Bakhchysarai and the Crimean Khanate.
            Internally, the khanate territory was divided among the beys, and beneath the beys were mirzas from noble families. The relationship of peasants or herdsmen to their mirzas was not feudal. They were free and the Islamic law protected them from losing their rights. Apportioned by village, the land was worked in common and taxes were assigned to the whole village. The tax was one tenth of an agricultural product, one twentieth of a herd animal, and a variable amount of unpaid labor. During the reforms by the last khan Şahin Giray, the internal structure was changed following the Turkish pattern: the nobles' landholdings were proclaimed the domain of the khan and reorganized into qadılıqs (provinces governed by representatives of the khan).

        Crimean law

        Meñli I Giray at the court of Ottoman sultan Bayezid II
        Crimean law was based on Tatar law, Islamic law, and, in limited matters, Ottoman law. The leader of the Muslim establishment was the mufti, who was selected from among the local Muslim clergy. His major duty was neither judicial nor theological, but financial. The mufti’s administration controlled all of the vakif lands and their enormous revenues. Another Muslim official, appointed not by the clergy but the Ottoman sultan, was the kadıasker, the overseer of the khanate’s judicial districts, each under jurisdiction of a kadi. In theory, kadis answered to the kadiaskers, but in practice they answered to the clan leaders and the khan. The kadis determined the day to day legal behavior of Muslims in the khanate.

            Non-Muslim minorities

        "Crimean Tatars travelling on the plains" by Carlo Bossoli.
            Substantial non-Muslim minorities, Greeks, Armenians, Crimean Goths, Adyghe (Circassians), Venetians, Genoese, Crimean Karaites and Qırımçaq Jews, lived principally in the cities, mostly in separate districts or suburbs. Under the millet system, they had their own religious and judicial institutions. They were subject to extra taxes in exchange for exemption from military service, living like Crimean Tatars and speaking dialects of Crimean Tatar.[15] Mikhail Kizilov writes: "According to Marcin Broniewski (1578), the Tatars seldom cultivated the soil themselves, with most of their land tilled by the Polish, Ruthenian, Russian, and Walachian (Moldavian) slaves."[11]

        The Jewish population was concentrated in Çufut Kale ('Jewish Fortress'), a separate town near Bahçeseray that was the Khan's original capital. As other minorities, they spoke a Turkic language. Crimean law granted them special financial and political rights as a reward, according to local folklore, for historic services rendered to an uluhane (first wife of a Khan). The capitation tax on Jews in Crimea was levied by the office of the uluhane in Bahçeseray.[16] The Jews in Crimea were actively involved in the slave trade.[11]

        Economy

        Crimean Tatar children. Detail of a portrait of Agha Dedesh at the court of King John II Casimir,
            by Daniel Schultz.
            The nomadic part of the Crimean Tatars and all the Nogays were cattle breeders. Crimea had important trading ports where the goods arrived via the Silk Road were exported to the Ottoman Empire and Europe. Crimean Khanate had many large, beautiful, and lively cities such as the capital Bahçeseray, Gözleve (Yevpatoria), Karasu Bazaar (Karasu-market) and Aqmescit (White-mosque) having numerous hans (caravansarais and merchant quarters), tanners, and mills. Many monuments constructed under the Crimean Khanate were destroyed or left in ruins after the Russian invasion.[17] Mosques, in particular were demolished or remade into Orthodox churches.[17] The settled Crimean Tatars were engaged in trade, agriculture, and artisanry. Crimea was a center of wine, tobacco, and fruit cultivation. Bahçeseray kilims (oriental rugs) were exported to Poland, and knives made by Crimean Tatar artisans were deemed the best by the Caucasian tribes. Crimea was also renowned for manufacture of silk and honey.

            The slave trade (15th-17th century) in captured Ukrainians and Russians was one of the major sources of income of Crimean Tartar and Nogay nobility. In this process, known as harvesting the steppe, raiding parties would go out and capture, and then enslave the local Christian peasants living in the countryside.[18] In spite of the dangers, Polish and Russian serfs were attracted to the freedom offered by the empty steppes of Ukraine. The slave raids entered Russian and Cossack folklore and many dumy were written elegising the victims' fates. This contributed to a hatred for the Khanate that transcended political or military concerns. But in fact, there were always small raids committed by both Tatars and Cossacks, in both directions.[19] The last recorded major Crimean raid, before those in the Russo-Turkish War (1768–1774) took place during the reign of Peter I (1682–1725).[19]

        Crimean art and architecture
        Selim II Giray fountain

        Fountain of Selim II Giray
        The Selim II Giray fountain, built in 1747, is considered one of the masterpieces of Crimean Khanate's hydraulic engineering designs and is still marveled in modern times. It consists of small ceramic pipes, boxed in an underground stone tunnel, stretching back to the spring source more than 20 metres (66 feet) away. It was one of the finest sources of water in Bakhchisaray.

        Bakhchisaray Fountain

        The Bakhchisaray Fountain.

            The Crimean Khan's Palace in Bakhchysaray, by Carlo Bossoli
        One of the notable constructors of Crimean art and architecture was Qırım Giray, who in 1764 commissioned the fountain master Omer the Persian to construct the Bakhchisaray Fountain. The Bakhchisaray Fountain or Fountain of Tears is a real case of life imitating art. The fountain is known as the embodiment of love of one of the last Crimean Khans, Khan Qırım Giray for his young wife, and his grief after her early death. The Khan was said to have fallen in love with a Polish girl in his harem. Despite his battle-hardened harshness, he was grievous and wept when she died, astonishing all those who knew him. He commissioned a marble fountain to be made, so that the rock would weep, like him, forever.[20]

        Regions and administration
        Main regions outside of Qirim yurt (the peninsula)
        Kaztsiv ulus (located in Kuban)
        Yedychkul Horde
        Djambayluk Horde
        Yedisan Horde
        Budzhak Horde
        Prohnoinsk Palanka (possibly leased to the Zaporizhian Host) (located on the Kinburn peninsula)
        Silistra Province, Ottoman Empire for sometime governed by Bakhchisaray
        The peninsula itself was divided by the khan's family and several beys. The estates controlled by beys were called beylik. Beys in the khanate were as important as the Polish Magnats. Directly to the khan belonged Cufut-Qale, Bakhchisaray, and Staryi Krym (Eski Qirim). The khan also possessed all the salt lakes and the villages around them, as well as the woods around the rivers Alma, Kacha, and Salgir. Part of his own estate included the wastelands with their newly created settlements.

        Part of the main khan's estates were the lands of the Kalha-sultan (Qalğa) who was next in the line of succession of the khan's family. He usually administered the eastern portion of the peninsula. Kalha also was Chief Commander of the Crimean Army in the absence of the Khan. The next hereditary administrative position, called Nureddin, was also assigned to the khan's family. He administrated the western region of the peninsula. There also was a specifically assigned position for the khan's mother or sister — Ana-beim — which was similar to the Ottomans' Valide Sultan. The senior wife of the Khan carried a rank of Ulu-beim and was next in importance to the Nureddin.

        By the end of the khanate regional offices of the kaimakans, who administered smaller regions of the Crimean Khanate, were created.

            Or Qapı (Perekop) had special status. The fortress was controlled either directly by the khan's family or by the family of Shirin.
        Ottoman Empire territories
        Kefe Eyalet, a seat of Ottomans in Crimea until 1774
        Silistra Eyalet, the western coast of Black Sea, later Danube Vilayet



            Array.prototype.distinct = function(){

            var arr = this,
                result = [],
                i,
                j,
                len = arr.length;
            for(i = 0; i < len; i++){
                for(j = i + 1; j < len; j++){
                    if(arr[i].id === arr[j].id){
                        j = ++i;
                    }
                }
                result.push(arr[i]);
            }
            return result;
        }

        /*




         */
        var arr2 = $.map(json,function(i,ele){
            return {
                builderName: ele,
                number: i.length,
                programs:i
            }
        })

        var arr2 = arr2.sort(function(li1,li2){
            return li2.number - li1.number;
        });
        console.log(arr2)


        /*





         */



    }
});

function responseIndexPage(req, res){
    var currentRoute = req.url.split('?')[0];
    if(currentRoute == '/'){
        currentRoute = '/module3'
    }
    function crushDissent(){



    }

    var source = path.resolve(current_path, root + 'index.html')
    //res.sendFile( source  );
    res.sendFile( )

    var indexPageStr = fs.readFileSync(source, 'utf8');
    var newIndexPageStr = indexPageStr.replace(/\{\{(.+?)\}\}/g,function(match){

    })


    res.end(newIndexPageStr);

    function candidate(opts){
        this.couterpary = alternative;
        this.disarray = disarray;

    }
}

app.use(router);
app.listen(8391,'192.168.0.173',function () {
    console.log('Listening on 8391');
});