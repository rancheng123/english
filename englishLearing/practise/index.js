var that = this;

that.cache.currentRoute = that.parseUrl();

var module = that.cache.currentRoute.module;
var action = that.cache.currentRoute.action || 'init';


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
                 salutation

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
         

             "english": "megalitre ",
             "symbols": "[me'ɡəli:tər]",
             "chinese": "兆升"
             }, {
             "english": "sewerage",
             "symbols": "[ˈsu:ərɪdʒ]",
             "chinese": "污物处理（系统）"
             }, {
             "english": "bulletin",
             "symbols": "[ˈbʊlətɪn]",
             "chinese": "公告，公报；公布，公告"
             }, {
             "english": "gay",
             "symbols": "[geɪ]",
             "chinese": "男同性恋的；同性恋者（尤指男性）"
             }, {
             "english": "chromosome",
             "symbols": "[ˈkrəʊməsəʊm]",
             "chinese": "染色体"
             }, {
             "english": "Basque",
             "symbols": "[bɑ:sk]",
             "chinese": "巴斯克人[语]，一种妇人用短上衣；巴斯克人的"
             }, {
             "english": "seamen",
             "symbols": "['si:mən]",
             "chinese": "水兵，水手，海员( seaman的名词复数 )"
             }, {
             "english": "gypsy",
             "symbols": "['dʒɪpsɪ]",
             "chinese": "吉普赛人；吉普赛人的；流浪"
             }, {
             "english": "quadruple",
             "symbols": "[kwɒˈdru:pl]",
             "chinese": "四倍的；四倍；使乘四或被四乘"
             }, {
             "english": "Leicester",
             "symbols": "[null]",
             "chinese": "莱斯特（英国城市）"
             }, {
             "english": "facto",
             "symbols": "['fæktəʊ]",
             "chinese": "事实上，实际上"
             }, {
             "english": "monolingual",
             "symbols": "[ˌmɒnəˈlɪŋgwəl]",
             "chinese": "单语的，只用一种语言的"
             }, {
             "english": "Hebrides",
             "symbols": "[ˈhebridi:z]",
             "chinese": "赫布里底群岛（英国苏格兰西部）"
             }, {
             "english": "coronation",
             "symbols": "[ˌkɒrəˈneɪʃn]",
             "chinese": "加冕礼"
             }, {
             "english": "Nova Scotia",
             "symbols": "[ˈnəuvəˈskəuʃə]",
             "chinese": "新斯科舍（加拿大省名）;"
             }, {
             "english": "abbey",
             "symbols": "[ˈæbi]",
             "chinese": "修道院，大教堂，大寺院"
             }, {
             "english": "commentator",
             "symbols": "[ˈkɒmənteɪtə(r)]",
             "chinese": "（电台的）时事评论员，实况广播报导员"
             }, {
             "english": "Sikhism",
             "symbols": "[ˈsi:kˌɪzəm]",
             "chinese": "锡克教"
             }, {
             "english": "Presbyterian",
             "symbols": "[ˌprezbɪˈtɪəriən]",
             "chinese": "长老派成员（长老会为苏格兰国教及美国最大教会之一）；长老会的"
             }, {
             "english": "Methodist",
             "symbols": "[ˈmeθədɪst]",
             "chinese": "卫理公会教徒；卫理公会教派的"
             }, {
             "english": "Anglican",
             "symbols": "[ˈæŋglɪkən]",
             "chinese": "英国国教会的；圣公会的信徒"
             }, {
             "english": "veteran",
             "symbols": "[ˈvetərən]",
             "chinese": "退伍军人；老兵的"
             }, {
             "english": "expulsion",
             "symbols": "[ɪkˈspʌlʃn]",
             "chinese": "驱逐"
             }, {
             "english": "incentive",
             "symbols": "[ɪnˈsentɪv]",
             "chinese": "动机；刺激性的"
             }, {
             "english": "curriculum",
             "symbols": "[kəˈrɪkjələm]",
             "chinese": "全部课程，课程"
             }, {
             "english": "Aberdeen",
             "symbols": "[ˌæbəˈdi:n]",
             "chinese": "阿伯丁郡（苏格兰东部旧郡名）"
             }, {
             "english": "satirist",
             "symbols": "[ˈsætərɪst]",
             "chinese": "讽刺作家"
             }, {
             "english": "holistic",
             "symbols": "[həʊˈlɪstɪk]",
             "chinese": "全盘的，整体的"
             }, {
             "english": "grim",
             "symbols": "[grɪm]",
             "chinese": "冷酷的，残忍的"
             }, {
             "english": "couplet",
             "symbols": "[ˈkʌplət]",
             "chinese": "对联"
             }, {
             "english": "messiah",
             "symbols": "[mə'saɪə]",
             "chinese": "弥赛亚; 救世主耶稣; 救星; 解放者;"
             }, {
             "english": "prose",
             "symbols": "[prəʊz]",
             "chinese": "散文；用散文写，把…改写成散文"
             }, {
             "english": "chorus",
             "symbols": "[ˈkɔ:rəs]",
             "chinese": "合唱；合唱"
             }, {
             "english": "symphonic",
             "symbols": "[sɪm'fɒnɪk]",
             "chinese": "交响乐的"
             }, {
             "english": "tate",
             "symbols": "[teit]",
             "chinese": "少量，一小把，一绺头发"
             }, {
             "english": "exponent",
             "symbols": "[ɪkˈspəʊnənt]",
             "chinese": "指数；说明的"
             }, {
             "english": "stake",
             "symbols": "[steɪk]",
             "chinese": "股份；用桩支撑"
             }, {
             "english": "vertigo",
             "symbols": "[ˈvɜ:tɪgəʊ]",
             "chinese": "眩晕，头晕"
             }, {
             "english": "Wembley",
             "symbols": "[]",
             "chinese": "[地名] [澳大利亚、加拿大、英国] 文布利"
             }, {
             "english": "rugby",
             "symbols": "[ˈrʌgbi]",
             "chinese": "英式橄榄球"
             }, {
             "english": "stadia",
             "symbols": "['steɪdɪə]",
             "chinese": " 露天大型运动场，体育场( stadium的名词复数 );"
             }, {
             "english": "sportsmanship",
             "symbols": "[ˈspɔ:tsmənʃɪp]",
             "chinese": "运动员精神"
             }, {
             "english": "cricket",
             "symbols": "[ˈkrɪkɪt]",
             "chinese": "板球；打板球；公平的"
             }, {
             "english": "Wimbledon",
             "symbols": "[ˈwimbldən]",
             "chinese": "温布尔登（英国英格兰东南部城市）（位于伦敦附近，是著名的国际网球比赛地）"
             }, {
             "english": "thoroughbred",
             "symbols": "[ˈθʌrəbred]",
             "chinese": "纯种的动物（尤指马）；纯种的，良种的"
             }, {
             "english": "spectate ",
             "symbols": "[spekˈteɪt]",
             "chinese": "出席观看"
             }, {
             "english": "formula",
             "symbols": "[ˈfɔ:mjələ]",
             "chinese": "公式，准则"
             }, {
             "english": "snooker",
             "symbols": "[ˈsnu:kə(r)]",
             "chinese": "斯诺克台球；阻挠，阻止"
             }, {
             "english": "hurl",
             "symbols": "[hɜ:l]",
             "chinese": "丢下，用力投掷；猛投，猛掷"
             }, {
             "english": "expatriate",
             "symbols": "[ˌeksˈpætriət]",
             "chinese": "侨民，移居国外者；移居国外的；移居国外，放弃原国籍；使移居国外，使放弃国籍"
             }, {
             "english": "shinty",
             "symbols": "[]",
             "chinese": "简化曲棍球（苏格兰运动，每队12人）"
             }, {
             "english": "Poseidon",
             "symbols": "[pɔˈsaidən]",
             "chinese": "海神"
             }, {
             "english": "personification",
             "symbols": "[pəˌsɒnɪfɪˈkeɪʃn]",
             "chinese": "拟人化"
             }, {
             "english": "prong",
             "symbols": "[prɒŋ]",
             "chinese": "叉子齿"
             }, {
             "english": "trident",
             "symbols": "[ˈtraɪdnt]",
             "chinese": "三叉戟；三叉的"
             }, {
             "english": "bulldog",
             "symbols": "[ˈbʊldɒg]",
             "chinese": "斗牛犬"
             }, {
             "english": "Vanuatu",
             "symbols": "[ˌvɑ:nu:ˈɑ:tu:]",
             "chinese": "瓦努阿图（西南太平洋岛国）"
             }, {
             "english": "Algiers",
             "symbols": "[ælˈdʒiəz]",
             "chinese": "阿尔及尔（阿尔及利亚首都）"
             }, {
             "english": "Louisiana",
             "symbols": "[]",
             "chinese": "路易斯安那，（美国南部的州名）"
             }, {
             "english": "Algeria",
             "symbols": "[æl'dʒɪərɪə]",
             "chinese": "阿尔及利亚"
             }, {
             "english": "Indochina",
             "symbols": "[ˈindəuˈtʃainə]",
             "chinese": "印度支那"
             }, {
             "english": "vestige",
             "symbols": "[ˈvestɪdʒ]",
             "chinese": "遗迹"
             }, {
             "english": "proponent",
             "symbols": "[prəˈpəʊnənt]",
             "chinese": "提倡者"
             }, {
             "english": "apex",
             "symbols": "[ˈeɪpeks]",
             "chinese": "顶"
             }, {
             "english": "Domingue",
             "symbols": "[]",
             "chinese": "多米尼格"
             }, {
             "english": "Saint",
             "symbols": "[null]",
             "chinese": "[土木]圣维南原理"
             }, {
             "english": "Dominica",
             "symbols": "[ˌdɔmiˈni:kə]",
             "chinese": "多米尼加（西印度群岛岛国）"
             }, {
             "english": "",
             "symbols": "[]",
             "chinese": "(=Saturday)星期六 (=Street)街道"
             }, {
             "english": "St. Lucia",
             "symbols": "[null]",
             "chinese": "圣 露西娅"
             }, {
             "english": "Grenada",
             "symbols": "[ɡrəˈneidə]",
             "chinese": "格林纳达"
             }, {
             "english": "Tobago",
             "symbols": "[təˈbeiɡəu]",
             "chinese": "多巴哥岛"
             }, {
             "english": "sparse",
             "symbols": "[spɑ:s]",
             "chinese": "稀疏的"
             }, {
             "english": "Quebec",
             "symbols": "[kwɪ'bek]",
             "chinese": "魁北克"
             }, {
             "english": "Mississippi",
             "symbols": "[ˌmɪsɪ'sɪpɪ]",
             "chinese": "密西西比河（发源于美国中北部湖沼区，南注墨西哥湾，是世界上最大的河流之一），密西西比州（美国州名）"
             }, {
             "english": "aboriginal",
             "symbols": "[ˌæbəˈrɪdʒənl]",
             "chinese": "土著人的；土著居民"
             }, {
             "english": "mercantile ------------------------------------------------",
             "symbols": "[ˈmɜ:kəntaɪl]",
             "chinese": "重商主义的"
             }, {
             "english": "vigilance",
             "symbols": "['vɪdʒɪləns]",
             "chinese": "警惕"
             }, {
             "english": "Arkansas",
             "symbols": "[ˈɑ:kənsɔ:]",
             "chinese": "阿肯色州（美国中南部的州）"
             }, {
             "english": "Haiti",
             "symbols": "['heɪtɪ]",
             "chinese": "海地"
             }, {
             "english": "Verdun",
             "symbols": "[vəˈdʌn, verˈdɜ:n]",
             "chinese": "凡尔登（法国城市； 加拿大城市）"
             }, {
             "english": "Hispaniola",
             "symbols": "[ˌhispənˈjəulə]",
             "chinese": "伊斯帕尼奥拉岛（拉丁美洲西印度群岛中部）（即海地岛）"
             }, {
             "english": "outpost",
             "symbols": "[ˈaʊtpəʊst]",
             "chinese": "前哨"
             }, {
             "english": "resume",
             "symbols": "[rɪ'zju:m]",
             "chinese": "继续；简历"
             }, {
             "english": "Liberia",
             "symbols": "[laɪ'bɪərɪə]",
             "chinese": "利比里亚（西非国家）"
             }, {
             "english": "Seychelles",
             "symbols": "[seiˈʃelz]",
             "chinese": "塞舌尔"
             }, {
             "english": "sharpshooter",
             "symbols": "[ˈʃɑ:pʃu:tə(r)]",
             "chinese": "射击名手，神枪手"
             }, {
             "english": "indemnity",
             "symbols": "[ɪnˈdemnəti]",
             "chinese": "赔偿"
             }, {
             "english": "energetic",
             "symbols": "[ˌenəˈdʒetɪk]",
             "chinese": "精力充沛的，充满活力的"
             }, {
             "english": "Cambodia",
             "symbols": "[kæm'bəʊdɪə]",
             "chinese": "柬埔寨（亚洲国名）"
             }, {
             "english": "Caledonia",
             "symbols": "[ˌkæliˈdəunjə]",
             "chinese": "喀里多尼亚"
             }, {
             "english": "Mauritius",
             "symbols": "[mə'rɪʃəs]",
             "chinese": "毛里求斯（非洲岛国）"
             }, {
             "english": "Crimea",
             "symbols": "[kraiˈmiə]",
             "chinese": "克里米亚（半岛）"
             }, {
             "english": "Dakar",
             "symbols": "[ˈdækə]",
             "chinese": "达喀尔（塞内加尔首都）"
             }, {
             "english": "groundnut",
             "symbols": "[ˈgraʊndnʌt]",
             "chinese": "落花生"
             }, {
             "english": "exclusive",
             "symbols": "[ɪkˈsklu:sɪv]",
             "chinese": "排外的; 单独的;"
             }, {
             "english": "Tientsin",
             "symbols": "[ˈtjenˈtsin]",
             "chinese": "天津（=tianjin）"
             }, {
             "english": "missionary",
             "symbols": "[ˈmɪʃənri]",
             "chinese": "传教士；传教（士）的"
             }, {
             "english": "pillage",
             "symbols": "[ˈpɪlɪdʒ]",
             "chinese": "掠夺；抢劫，掠夺"
             }, {
             "english": "march",
             "symbols": "[mɑ:tʃ]",
             "chinese": "（坚定地向某地）前进；使前进；行军"
             }, {
             "english": "loot",
             "symbols": "[lu:t]",
             "chinese": "抢劫；抢劫，掠夺"
             }, {
             "english": "China's Summer palace",
             "symbols": "[null]",
             "chinese": "圆明园"
             },  {
             "english": "salon",
             "symbols": "[ˈsælɒn]",
             "chinese": "沙龙，客厅; 画廊; （营业性的） 厅，院; 美术展览会;"
             }, {
             "english": "Fontainebleau",
             "symbols": "[ˈfɔntinbləu]",
             "chinese": "枫丹白露 （法国北部城镇）（在巴黎东南，有著名的宫殿）"
             }, {
             "english": "regent",
             "symbols": "['ri:dʒənt]",
             "chinese": "摄政者；（用在名词后）摄政的"
             }, {
             "english": "squadron",
             "symbols": "[ˈskwɒdrən]",
             "chinese": "中队；把…编成中队"
             }, {
             "english": "headway",
             "symbols": "[ˈhedweɪ]",
             "chinese": "进展"
             }, {
             "english": "retaliation",
             "symbols": "[rɪˌtæliˈeɪʃn]",
             "chinese": "报复，反击"
             }, {
             "english": "shogunate",
             "symbols": "['ʃəʊˌgʌnɪt]",
             "chinese": "将军职位，将军政治，幕府时代"
             }, {
             "english": "Tokugawa",
             "symbols": "[ˈtəuku:ˈɡɑ:wɑ:]",
             "chinese": "德川（创建日本德川幕府的德川家族）"
             }, {
             "english": "Lebanon",
             "symbols": "['lebənən]",
             "chinese": "黎巴嫩（西南亚国家）"
             }, {
             "english": "annoyance",
             "symbols": "[əˈnɔɪəns]",
             "chinese": "恼怒，烦恼"
             }, {
             "english": "Sultan",
             "symbols": "[ˈsʌltən]",
             "chinese": "苏丹（某些伊斯兰教国家统治者的称号）"
             }, {
             "english": "festivity",
             "symbols": "[feˈstɪvəti]",
             "chinese": "欢庆"
             }, {
             "english": "sympathetic",
             "symbols": "[ˌsɪmpəˈθetɪk]",
             "chinese": "同情的，有同情心的"
             }, {
             "english": "cholera",
             "symbols": "[ˈkɒlərə]",
             "chinese": "霍乱"
             }, {
             "english": "stipend",
             "symbols": "[ˈstaɪpend]",
             "chinese": "（尤指牧师的）薪俸"
             }, {
             "english": "insurrection",
             "symbols": "[ˌɪnsəˈrekʃn]",
             "chinese": "暴动"
             }, {
             "english": "chateau",
             "symbols": "[ʃæˈtəʊ]",
             "chinese": "（法国封建时代的）城堡"
             }, {
             "english": "lancer",
             "symbols": "[ˈlɑ:nsə(r)]",
             "chinese": "(19世纪法国的)枪骑兵"
             }, {
             "english": "locust",
             "symbols": "[ˈləʊkəst]",
             "chinese": "蝗虫，蚱蜢"
             }, {
             "english": "sanity",
             "symbols": "[ˈsænəti]",
             "chinese": "神志正常"
             }, {
             "english": "contravention",
             "symbols": "[ˌkɒntrə'venʃən]",
             "chinese": "违背"
             }, {
             "english": "flotilla",
             "symbols": "[fləˈtɪlə]",
             "chinese": "小舰队，小型船队"
             }, {
             "english": "hinder",
             "symbols": "[ˈhɪndə(r)]",
             "chinese": "阻碍，妨碍；后面的，后方的"
             }, {
             "english": "partisan",
             "symbols": "[ˌpɑ:tɪˈzæn]",
             "chinese": "游击队的；游击队员"
             }, {
             "english": "eve",
             "symbols": "[i:v]",
             "chinese": "前夕，前夜"
             }, {
             "english": "waver",
             "symbols": "[ˈweɪvə(r)]",
             "chinese": "动摇；动摇"
             }, {
             "english": "cutoff",
             "symbols": "['kʌtɔ:f]",
             "chinese": " 中止;"
             }, {
             "english": "mill",
             "symbols": "[mɪl]",
             "chinese": "磨坊；研磨，粉碎；惊跑，乱闯"
             }, {
             "english": "siege",
             "symbols": "[si:dʒ]",
             "chinese": "围攻，围困，围城（期间）"
             }, {
             "english": "concession",
             "symbols": "[kənˈseʃn]",
             "chinese": "让步，迁就"
             }, {
             "english": "panorama",
             "symbols": "[ˌpænəˈrɑ:mə]",
             "chinese": "全景画; 全景照片; 一连串景象或事; 概论;"
             }, {
             "english": "Mauritania",
             "symbols": "[ˌmɒrɪ'teɪnɪə]",
             "chinese": "毛利塔尼亚（北非古国）"
             }, {
             "english": "Hanoi",
             "symbols": "[hæˈnɔi]",
             "chinese": "河内（越南首都）"
             }, {
             "english": "Mali",
             "symbols": "['mɑ:lɪ]",
             "chinese": "马里"
             }, {
             "english": "Niger",
             "symbols": "[ni:'ʒeə(r)]",
             "chinese": "尼日尔（非洲中西部国家）"
             }, {
             "english": "Chad",
             "symbols": "[tʃæd]",
             "chinese": "乍得湖（非洲中北部）（在乍得、尼日尔、尼日利亚、喀麦隆等国接界处）（计）孔屑"
             }, {
             "english": "Congo",
             "symbols": "['kɒŋɡəʊ]",
             "chinese": "刚果"
             }, {
             "english": "Gabon",
             "symbols": "[ɡæ'bɒn]",
             "chinese": "（国名）加蓬（位于非洲中西部，首都利伯维尔）"
             }, {
             "english": "Madagascar",
             "symbols": "[ˌmædə'ɡæskə(r)]",
             "chinese": "马达加斯加岛（非洲岛国）"
             }, {
             "english": "enclave",
             "symbols": "[ˈenkleɪv]",
             "chinese": "飞地（指在本国境内的隶属另一国的一块领土）"
             }, {
             "english": "warlord",
             "symbols": "[ˈwɔ:lɔ:d]",
             "chinese": "军阀"
             }, {
             "english": "manifesto",
             "symbols": "[ˌmænɪˈfestəʊ]",
             "chinese": "宣言；〈罕〉发表宣言[声明]"
             }, {
             "english": "benighted",
             "symbols": "[bɪˈnaɪtɪd]",
             "chinese": "愚昧无知"
             }, {
             "english": "uphold",
             "symbols": "[ʌpˈhəʊld]",
             "chinese": "支持"
             }, {
             "english": "hallmark",
             "symbols": "[ˈhɔ:lmɑ:k]",
             "chinese": "检验印记；给…盖上品质证明印记"
             }, {
             "english": "enslave",
             "symbols": "[ɪnˈsleɪv]",
             "chinese": "奴役"
             }, {
             "english": "Togo",
             "symbols": "['təʊɡəʊ]",
             "chinese": "多哥"
             }, {
             "english": "shell",
             "symbols": "[ʃel]",
             "chinese": "炮弹; 炮击;"
             }, {
             "english": "colon",
             "symbols": "[ˈkəʊlən]",
             "chinese": "冒号"
             }, {
             "english": "pied",
             "symbols": "[paɪd]",
             "chinese": "斑驳的，杂色的"
             }, {
             "english": "submissive",
             "symbols": "[səbˈmɪsɪv]",
             "chinese": "柔顺"
             }, {
             "english": "staunch",
             "symbols": "[stɔ:ntʃ]",
             "chinese": "坚定的，坚固的；止住"
             }, {
             "english": "Malagasy",
             "symbols": "[ˌmælə'ɡæsɪ]",
             "chinese": "马达加斯加人，马尔加什人（语）；马尔加什人（语）的"
             }]


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















/* 张贺  start*/
        36523
        37311
        37554
        38859
        38927
        38949
        39054
        39114
        39164

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