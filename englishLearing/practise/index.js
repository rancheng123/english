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



             "english": "lexicon ",
             "symbols": "[ˈleksɪkən]",
             "chinese": "词典"
             }, {
             "english": "phonology",
             "symbols": "[fəˈnɒlədʒi]",
             "chinese": "音韵学，语音体系"
             }, {
             "english": "syntax",
             "symbols": "[ˈsɪntæks]",
             "chinese": "语法"
             }, {
             "english": "supervision",
             "symbols": "[ˌsju:pə'vɪʒn]",
             "chinese": "监督"
             }, {
             "english": "Kurdish",
             "symbols": "[kə:diʃ,kuədiʃ]",
             "chinese": "库尔德人的；库尔德语"
             }, {
             "english": "gymnasium，",
             "symbols": "[dʒɪmˈneɪziəm]",
             "chinese": "健身房，体育馆; 大学预科，高级中学;"
             }, {
             "english": "apprenticeship",
             "symbols": "[əˈprentɪʃɪp]",
             "chinese": "学徒期"
             }, {
             "english": "enrol",
             "symbols": "[ɪnˈrəʊl]",
             "chinese": "登记；注册"
             }, {
             "english": "state",
             "symbols": "[steɪt]",
             "chinese": "国家；规定；国家的"
             }, {
             "english": "spital",
             "symbols": "['spɪtl]",
             "chinese": "医院（尤指为贫民或麻疯病人等开设的医院）"
             }, {
             "english": "hospice",
             "symbols": "[ˈhɒspɪs]",
             "chinese": "（宗教团体开办的）旅客招待所"
             }, {
             "english": "precursor",
             "symbols": "[pri:ˈkɜ:sə(r)]",
             "chinese": "前辈，前驱，先锋，前任"
             }, {
             "english": "run",
             "symbols": "[rʌn]",
             "chinese": "跑；奔跑；逃跑；使奔跑；融化的"
             }, {
             "english": "criteria",
             "symbols": "[kraɪ'tɪərɪə]",
             "chinese": "（批评、判断等的）标准，准则( criterion的名词复数 )"
             }, {
             "english": "cardiovascular",
             "symbols": "[ˌkɑ:diəʊˈvæskjələ(r)]",
             "chinese": "心血管的"
             }, {
             "english": "cumulative",
             "symbols": "[ˈkju:mjələtɪv]",
             "chinese": "累积的"
             }, {
             "english": "malignant",
             "symbols": "[məˈlɪgnənt]",
             "chinese": "恶性的，致命的；怀有恶意的人"
             }, {
             "english": "organ",
             "symbols": "[ˈɔ:gən]",
             "chinese": "器官"
             }, {
             "english": "oratorio",
             "symbols": "[ˌɒrəˈtɔ:riəʊ]",
             "chinese": "（以宗教为主题的）清唱剧，神剧"
             }, {
             "english": "obesity",
             "symbols": "[əʊ'bi:sətɪ]",
             "chinese": "肥胖症"
             }, {
             "english": "tenure",
             "symbols": "[ˈtenjə(r)]",
             "chinese": "占有（职位，不动产等）; 占有期; 终身职位;"
             }, {
             "english": "violinist",
             "symbols": "[ˌvaɪəˈlɪnɪst]",
             "chinese": "小提琴家"
             }, {
             "english": "composer",
             "symbols": "[kəmˈpəʊzə(r)]",
             "chinese": "（尤指古典音乐）作曲家"
             }, {
             "english": "mentor",
             "symbols": "[ˈmentɔ:(r)]",
             "chinese": "（无经验之人的）有经验可信赖的顾问；做…的良师；指导"
             }, {
             "english": "renaissance",
             "symbols": "[rɪˈneɪsns]",
             "chinese": "文艺复兴"
             }, {
             "english": "idiom",
             "symbols": "[ˈɪdiəm]",
             "chinese": "习语，成语"
             }, {
             "english": "genre",
             "symbols": "['ʒɒ̃rə]",
             "chinese": "类型，种类"
             }, {
             "english": "conceptualism",
             "symbols": "[kənˈseptʃuəlɪzəm]",
             "chinese": "概念论"
             }, {
             "english": "plasterer",
             "symbols": "[ˈplɑ:stərə(r)]",
             "chinese": "泥水匠，石膏师"
             }, {
             "english": "surrealism",
             "symbols": "[səˈri:əlɪzəm]",
             "chinese": "超现实主义"
             }, {
             "english": "craftsman",
             "symbols": "[ˈkrɑ:ftsmən]",
             "chinese": "工匠"
             }, {
             "english": "carpentry",
             "symbols": "[ˈkɑ:pəntri]",
             "chinese": "木工手艺，木匠业"
             }, {
             "english": "stucco",
             "symbols": "[ˈstʌkəʊ]",
             "chinese": "粉饰灰泥；用拉毛粉饰法粉饰"
             }, {
             "english": "rationalism",
             "symbols": "[ˈræʃnəlɪzəm]",
             "chinese": "理性主义，唯理论"
             }, {
             "english": "cradle",
             "symbols": "[ˈkreɪdl]",
             "chinese": "摇篮；将…置于摇篮中"
             }, {
             "english": "spa",
             "symbols": "[spɑ:]",
             "chinese": "休闲健身中心"
             }, {
             "english": "metaphysical",
             "symbols": "[ˌmetə'fɪzɪkl]",
             "chinese": "抽象的; "
             }, {
             "english": "pessimism",
             "symbols": "[ˈpesɪmɪzəm]",
             "chinese": "悲观"
             }, {
             "english": "auteur",
             "symbols": "[əʊ'tɜ:(r)]",
             "chinese": "电影导演"
             }, {
             "english": "cable",
             "symbols": "[ˈkeɪbl]",
             "chinese": "缆绳，绳索；发电报至；拍发电报"
             }, {
             "english": "bratwurst",
             "symbols": "['brætwɜ:rst]",
             "chinese": "（供煎食的） 德国式小香肠;"
             }, {
             "english": "weisswurst",
             "symbols": "[waɪs wɜ:rst]",
             "chinese": "（白色）小牛肉香肠;"
             }, {
             "english": "relevant",
             "symbols": "[ˈreləvənt]",
             "chinese": "有关的，中肯的"
             }, {
             "english": "litre",
             "symbols": "[ˈli:tə(r)]",
             "chinese": "（容量单位）升"
             }, {
             "english": "gal",
             "symbols": "[gæl]",
             "chinese": "女孩，少女"
             }, {
             "english": "ubiquitous",
             "symbols": "[ju:ˈbɪkwɪtəs]",
             "chinese": "无所不在的"
             },  {
             "english": "saltire",
             "symbols": "[ˈsæltaɪə(r)]",
             "chinese": "X形十字，圣安得鲁十字"
             }, {
             "english": "demonym",
             "symbols": "['dɛmənɪm] ",
             "chinese": "对当地居民的称呼（比如德国人：German、加拿大人：Canadian等）"
             }, {
             "english": "unicorn",
             "symbols": "[ˈju:nɪkɔ:n]",
             "chinese": "（传说中身体似马的）独角兽"
             }, {
             "english": "rowing",
             "symbols": "[ˈrəʊɪŋ]",
             "chinese": "赛艇运动；划船(row的现在分词)"
             }, {
             "english": "athlete",
             "symbols": "[ˈæθli:t]",
             "chinese": "运动员"
             }, {
             "english": "Briton",
             "symbols": "[ˈbrɪtn]",
             "chinese": "英国人，（大）不列颠人"
             }, {
             "english": "house of Lords",
             "symbols": "[haʊs]",
             "chinese": "上议院；"
             },{
             "english": "house of Commons",
             "symbols": "[əv]",
             "chinese": "英国国会下院"
             },{
             "english": "bailiwick",
             "symbols": "['beɪləˌwɪk]",
             "chinese": "（郡副司法长官的）辖区"
             }, {
             "english": "secede",
             "symbols": "[sɪˈsi:d]",
             "chinese": "从…中脱离；脱离"
             }, {
             "english": "remnant",
             "symbols": "[ˈremnənt]",
             "chinese": "残余；残留的"
             }, {
             "english": "connotation",
             "symbols": "[ˌkɒnəˈteɪʃn]",
             "chinese": "内涵，含义"
             }, {
             "english": "Stonehenge",
             "symbols": "[ˌstəʊnˈhendʒ]",
             "chinese": "（英国 Salisbury 平原上的）史前巨石柱"
             }, {
             "english": "anatomically",
             "symbols": "[ˌænə'tɒmɪklɪ]",
             "chinese": "在解剖学上"
             }, {
             "english": "privateering",
             "symbols": "[praɪvə'tɪrɪŋ]",
             "chinese": "以私掠船巡逻，掳获商船；（战时特准攻击敌方商船的）武装民船，私掠船( privateer的现在分词 )"
             }, {
             "english": "tapestry",
             "symbols": "[ˈtæpəstri]",
             "chinese": "挂毯；用挂毯装饰"
             }, {
             "english": "Gaelic",
             "symbols": "[ˈgælɪk]",
             "chinese": "盖尔语；盖尔人的，盖尔语的"
             }, {
             "english": "feudalism",
             "symbols": "[ˈfju:dəlɪzəm]",
             "chinese": "封建制度，封建主义"
             }, {
             "english": "interregnum",
             "symbols": "[ˌɪntəˈregnəm]",
             "chinese": "中断; 过渡期; 停顿; （新旧王朝或新旧政府） 更迭的政权空白期"
             }, {
             "english": "absolutism",
             "symbols": "[ˈæbsəlu:tɪzəm]",
             "chinese": "专制主义，绝对论"
             },{
             "english": "blockade",
             "symbols": "[blɒˈkeɪd]",
             "chinese": "封锁；实行封锁"
             }, {
             "english": "suffragette",
             "symbols": "[ˌsʌfrəˈdʒet]",
             "chinese": "妇女参政权论者"
             }, {
             "english": "aristocracy",
             "symbols": "[ˌærɪˈstɒkrəsi]",
             "chinese": "贵族"
             }, {
             "english": "enclosure",
             "symbols": "[ɪnˈkləʊʒə(r)]",
             "chinese": "圈占; 围绕; 圈占地;"
             }, {
             "english": "helmet",
             "symbols": "[ˈhelmɪt]",
             "chinese": "头盔；给…戴上头盔"
             }, {
             "english": "rifle",
             "symbols": "[ˈraɪfl]",
             "chinese": "步枪；快速搜寻"
             }, {
             "english": "Ottoman",
             "symbols": "[ˈɔtəmən]",
             "chinese": "土耳其人的；土耳其民族的；土耳其帝国的（等于Turkish）"
             }, {
             "english": "disruption",
             "symbols": "[dɪs'rʌpʃn]",
             "chinese": "中断"
             }, {
             "english": "Burma",
             "symbols": "['bɜ:mə]",
             "chinese": "缅甸"
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

         utility  arsenal  strife  inflow  statutory  austerity  estuary  firth  demarcation  borough  plurality  Provost  Convenor  cemetery   Gibraltar  Cyprus  jurisdiction
         privy   alphabetised  emulate  oath
         devolution  diarchal  legislature  contingent 取决于…的;  Intergovernmental  prorogued  relevant  continuation  appellate  privy  explanatory  sheriff
         verdicts  acquittal  cordiale  amplify  supercarrier  chair 主持;   swear  oath   garrison  Ascension island  Belize  Brunei  Kenya  Bosnia
         Sierra Leone  exchequer
         sterling  issue发行; 发布;   jaguar  Boeing   subcontractor  prototype  chalk  gypsum  lead铅  silica  canary  wharf  inequality  lax  launder  proceeds收入，获利;
         illicit  dodger  keystone  cosmology  quantum  penicillin  locomotive  incandescent  bulb
         encircle  terminus  commuter  Lille   barrel  crude原油;  gasification    the water table   plant工厂   sewer  abstraction  megalitre  sewerage
         bulletin   gay 男同性恋者
         chromosome  Basque  seamen  quadruple  Leicester  gypsy  facto  monolingual  Hebrides    Nova Scotia  abbey  coronation   commentator   Sikhism
         Presbyterian  Methodist  Anglican  expulsion
         veteran 老兵  incentive  curriculum  Aberdeen  holistic  satirist  grim  prose  couplet  symphonic  chorus  coronation  messiah
         abstract  tate  vertigo  stake  exponent 倡导者   Wembley  stadia  rugby  cricket  sportsmanship  curriculum  Wimbledon  thoroughbred  formula  snooker  hurl
         spectate  expatriate  shinty  personification  Poseidon  prong  trident  bulldog



         Louisiana  Vanuatu  onward  Algiers  Algeria  Indochina  proponent  apex  vestige  Saint-Domingue  Dominica  St. Lucia   Grenada Tobago  vigilance  sparse  Quebec
         aboriginal  mercantile  Mississippi  Arkansas  Haiti  Verdun  outpost
         Hispaniola  Liberia  resume  Seychelles  Mauritius  indemnity  Caledonia  Cambodia  energetic  sharpshooter  Crimea  Dakar  groundnut  exclusive  Tientsin  missionary
         pillage   China's Summer Palace   march  loot  salon  Fontainebleau  regent  squadron  retaliation  headway  Tokugawa  shogunate
         Lebanon  contingent  Sultan  annoyance  chateau  festivity  sympathetic  stipend  insurrection  cholera  locust  hinder
         flotilla  contravention  lancer  sanity  partisan游击队的;  eve  siege  mill  cutoff  waver  concession租借地;  Panorama  Hanoi  Mauritania  Mali  Niger  Chad  Congo
         Gabon  enclave  Madagascar  warlord  Togo  hallmark  benighted  uphold  enslave  manifesto  shell炮弹  Malagasy  staunch  colon  pied

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




        /* 张贺  end*/

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
         This article is about colonies of the German Empire. For the territories of National Socialist Germany, see Reichskommissariat. For the Templer colonies in Israel, see German
         Colony (disambiguation).
         German colonial empire
         Deutsches Kolonialreich
         Colonial empire
         1884–1918
         Flag
         Flag
         Coat of arms
         Coat of arms

         German colonies and protectorates in 1914
         Capital	Berlin
         Languages	German
         Local:
         Political structure	Colonial empire
         History
         • 	Established	1884
         • 	Heligoland–Zanzibar Treaty	1890
         • 	Herero Wars	1904
         • 	Disestablished	1918
         • 	Treaty of Versailles	28 June 1919
         Area
         • 	1912[1] (not including Imperial Germany proper)	2,658,161 km2 (1,026,322 sq mi)

         An East African native Askari holding the German Empire's colonial flag
         The German colonial empire (German: Deutsches Kolonialreich) constituted the overseas colonies, dependencies and territories of Imperial Germany. Short-lived attempts of
         colonization by individual German states had occurred in preceding centuries, but crucial colonial efforts only began in 1884 with the Scramble for Africa. Claiming much
         of the left-over colonies that were yet unclaimed in the Scramble of Africa, Germany managed to build the third largest colonial empire after the British and the French,
         at the time.[2] Germany lost control when World War I began in 1914 and its colonies were seized by its enemies in the first weeks of the war. However some military units
         held out for a while longer: German South West Africa surrendered in 1915, Kamerun in 1916 and German East Africa only in 1918 at the end of the war. Germany's colonial
         empire was officially confiscated with the Treaty of Versailles after Germany's defeat in the war and the various units became League of Nations mandates under the supervision
          (but not ownership) of one of the victorious powers.

         Contents
         1	Origins
         1.1	German unification
         1.2	Scramble for colonies
         2	Acquisition of colonies
         2.1	Company land acquisitions and stewardship
         2.2	Growth
         3	End of the German colonial empire
         3.1	Conquest in World War I
         3.2	Confiscation
         3.3	Epilogue
         4	Administration and colonial policies
         4.1	Colonial governments
         4.2	German colonial population
         4.3	Medicine and science
         4.4	Rebellions and genocide
         4.5	Social Darwinism
         5	Colonies
         6	Legacy
         7	See also
         8	Footnotes
         9	Sources and references
         10	Bibliography
         10.1	In German
         10.2	In French
         11	External links
         Origins
         German unification
         Until their 1871 unification, the German states had not concentrated on the development of a navy, and this essentially had precluded German participation in earlier
         imperialist scrambles for remote colonial territory – the so-called "place in the sun". Germany seemed destined to play catch-up. The German states prior to 1870 had
         retained separate political structures and goals, and German foreign policy up to and including the age of Otto von Bismarck concentrated on resolving the "German question"
          in Europe and securing German interests on the continent.[3]

         On the other hand, Germans had traditions of foreign sea-borne trade dating back to the Hanseatic League; a tradition existed of German emigration (eastward in the direction
         of Russia and Transylvania and westward to the Americas); and North German merchants and missionaries showed interest in overseas engagements. The Hanseatic republics of
         Hamburg and Bremen sent traders across the globe. These trading houses conducted themselves as successful Privatkolonisatoren [independent colonizers] and concluded treaties
         and land purchases in Africa and the Pacific with chiefs or other tribal leaders. These early agreements with local entities, however, later formed the basis for annexation
          treaties, diplomatic support and military protection by the German government.[4]

         Scramble for colonies

         Groß-Friedrichsburg, a Brandenburg colony (1683–1717) in the territory of modern Ghana

         Kladderadatsch caricature, 1884. Bismarck is happy with other nations being busy "down there"
         Many Germans in the late 19th century viewed colonial acquisitions as a true indication of having achieved nationhood. Public opinion eventually arrived at an understanding
          that prestigious African and Pacific colonies went hand-in-hand with dreams of a High Seas Fleet. Both aspirations would become reality, nurtured by a press replete with
          Kolonialfreunde [supporters of colonial acquisitions] and by a myriad of geographical associations and colonial societies. Bismarck and many deputies in the Reichstag had
          no interest in colonial conquests merely to acquire square miles of territory.[5]

         In essence, Bismarck's colonial motives were obscure as he had said repeatedly "... I am no man for colonies"[6] and "remained as contemptuous of all colonial dreams as
         ever."[7] However, in 1884 he consented to the acquisition of colonies by the German Empire, in order to protect trade, to safeguard raw materials and export markets and
         to take opportunities for capital investment, among other reasons.[8] In the very next year Bismarck shed personal involvement when "he abandoned his colonial drive as
         suddenly and casually as he had started it" as if he had committed an error in judgment that could confuse the substance of his more significant policies.[9] "Indeed, in
         1889, [Bismarck] tried to give German South-West Africa away to the British. It was, he said, a burden and an expense, and he would like to saddle someone else with it."[10]

         Acquisition of colonies
         The development of German overseas protectorates (with the exception of concession territories) essentially followed three phases.

         Company land acquisitions and stewardship

         The Congo conference 1884/1885 in Berlin laid the basis for the Scramble for Africa, the colonial division of the continent
         The rise of German imperialism and colonialism coincided with the latter stages of the "Scramble for Africa" during which enterprising German individuals, rather than
          government entities, competed with other already established colonies and colonialist entrepreneurs. With the Germans joining the race for the last uncharted territories
           in Africa and the Pacific that had not yet been carved up, competition for colonies thus involved major European nations, and several lesser powers.

         The German effort included the first commercial enterprises in the 1850s and 1860s in West Africa, East Africa, the Samoan Islands and the unexplored north-east quarter
         of New Guinea with adjacent islands.[11] German traders and merchants began to establish themselves in the African Cameroon delta and the mainland coast across from
         Zanzibar.[12] At Apia and the settlements Finschhafen, Simpsonhafen and the islands Neu-Pommern and Neu-Mecklenburg, trading companies newly fortified with credit began
         expansion into coastal landholding.[13] Large African inland acquisitions followed — mostly to the detriment of native inhabitants. In eastern Africa the imperialist and
         “man-of-action” Karl Peters accumulated vast tracts of land for his colonization group, "emerging from the bush with X-marks [affixed by unlettered tribal chiefs] on
         documents ... for some 60 thousand square miles of the Zanzibar Sultanate’s mainland property."[14] Such exploratory missions required security measures that could be
         solved with small private, armed contingents recruited mainly in the Sudan and usually led by adventurous former military personnel of lower rank. Brutality, hanging and
         flogging prevailed during these land-grab expeditions under Peters’ control as well as others as no-one "held a monopoly in the mistreatment of Africans."[15]

         As Bismarck was converted to the colonial idea by 1884, he favored "chartered company" land management rather than establishment of colonial government due to financial
         considerations.[16] Although temperate zone cultivation flourished, the demise and often failure of tropical low-land enterprises contributed to changing Bismarck’s view.
          He reluctantly acquiesced to pleas for help to deal with revolts and armed hostilities by often powerful rulers whose lucrative slaving activities seemed at risk. German
          native military forces initially engaged in dozens of punitive expeditions to apprehend and punish freedom fighters, at times with British assistance.[17] The author Charles
           Miller offers the theory that the Germans had the handicap of trying to colonize African areas inhabited by aggressive tribes,[18] whereas their colonial neighbours had
           more docile peoples to contend with. At that time, the German penchant for giving muscle priority over patience contributed to continued unrest. Several of the African
           colonies remained powder kegs throughout this phase (and beyond). The transition to official acceptance of colonialism and to colonial government thus occurred during the
            last quarter of Bismarck’s tenure of office.[19]

         Growth

         Railway station in Lüderitz, Namibia, 2006

         German Colonial Secretary Bernhard Dernburg (2nd from right) on inspection tour in East Africa, shown on a courtesy visit with British officials at Nairobi in 1907

         Postcards depicted romanticized images of natives and exotic locales, such as this early 20th century card of the German colonial territory in New Guinea
         In the first years of the 20th century shipping lines had established scheduled services with refrigerated holds and agricultural products from the colonies, exotic fruits
          and spices, were sold to the public in Germany. The colonies were romanticized. Geologists and cartographers explored what were the unmarked regions on European maps,
          identifying mountains and rivers, and demarcating boundaries. Hermann Detzner and one Captain Nugent, R.A., had charge of a joint project to demarcate the British and
          German frontiers of Cameroon, which was published in 1913.[20] Travelers and newspaper reporters brought back stories of black and brown natives serving German managers
          and settlers. There were also suspicions and reports of colonial malfeasance, corruption and brutality in some protectorates, and Lutheran and Roman Catholic missionaries
           dispatched disturbing reports to their mission headquarters in Germany.[21]

         German colonial diplomatic efforts remained commercially inspired, "the colonial economy was thriving ... and roads, railways, shipping and telegraph communications were
         up to the minute."[22] Overhaul of the colonial administrative apparatus thus set the stage for the final and most promising period of German colonialism.[23] Bernhard
         Dernburg’s declaration that the indigenous population in the protectorates "was the most important factor in our colonies" was affirmed by new laws. The use of forced,
          unpaid labor went on the books as a criminal offense.[24] Governor Wilhelm Solf of Samoa would call the islanders "unsere braunen Schützlinge" [our brown charges], who
          could be guided but not forced.[25] Heinrich Schnee in East Africa proclaimed that "the dominant feature of my administration [will be] ... the welfare of the natives
          entrusted into my care."[26] Idealists often volunteered for selection and appointment to government posts, while others with an entrepreneurial bent labored to swell the
           dividends at home for the Hanseatic trading houses and shipping lines. Subsequent historians would commend German colonialism in those years as "an engine of modernization
            with far-reaching effects for the future."[27] The native population was forced into unequal treaties by the German colonial governments. This led to the local tribes
            and natives losing their influence and power and eventually forced some of them to become slave laborers. Although slavery was partially outlawed in 1905 by Germany,
            this caused a great deal of resentment and led eventually to revolts by the native population[further explanation needed]. The result was several military and genocidal
            campaigns by the Germans against the natives.[28] Political and economic subjugation of Herero and Nama was envisioned. Both the colonial authorities and settlers were
            of the opinion that native Africans were to be a lower class, their land seized and handed over to settlers and companies, while the remaining population was to be put
             in reservations; the Germans planned to make a colony inhabited predominately by whites: a "new African Germany".[29]

         The established merchants and plantation operators in the African colonies frequently managed to sway government policies. Capital investments by banks were secured with
         public funds of the imperial treasury to minimize risk. Dernburg, as a former banker, facilitated such thinking; he saw his commission to also turn the colonies into paying
          propositions. Every African protectorate built rail lines to the interior,[30] every colony in Africa and the Pacific established the beginnings of a public school system,
          [31] and every colony built and staffed hospitals.[32] Whatever the Germans constructed in their colonies was made to last.[33]


         Qingdao with German buildings, circa 1900
         Dar es Salaam evolved into "the showcase city of all of tropical Africa,"[33] Lomé grew into the "prettiest city in western Africa",[34] and Tsingtao, China was, "in
          miniature, as German a city as Hamburg or Bremen".[35] For indigenous populations in some colonies native agricultural holdings were encouraged and supported.[36]

         End of the German colonial empire
         Conquest in World War I

         December 1914: An Austrian lieutenant, Paul Fiedler,[37] bombards a South African military camp at the railway station of Tschaukaib, German South West Africa
         In the years before the outbreak of the World War, British colonial officers viewed the Germans as deficient in “colonial aptitude”, but “whose colonial administration
         was nevertheless superior to those of the other European states”.[38] Anglo-German colonial issues in the decade before 1914 were minor and both empires, the British and
          German, took conciliatory attitudes. Foreign Secretary Sir Edward Grey, considered still a moderate in 1911, was willing to “study the map of Africa in a pro-German
          spirit”.[39] Britain further recognized that Germany really had little of value to offer in territorial transactions; however, advice to Grey and Prime Minister H. H.
          Asquith hardened by early 1914 “to stop the trend of what the advisers considered Germany’s taking and Britain’s giving.”[40]

         Once war was declared in late July 1914 Britain and its allies promptly moved against the colonies. The public was informed that German colonies were a threat because
         "Every German colony has a powerful wireless station — they will talk to one another across the seas, and at every opportunity they [German ships] will dash from cover
         to harry and destroy our commerce, and maybe, to raid our coasts."[41] The British position that Germany was a uniquely brutal and cruel colonial power originated during
         the war; it had not been said during peacetime.[42]

         In the Pacific, Britain's ally Japan declared war on Germany in 1914 and quickly seized several of Germany's island colonies, the Mariana, Caroline and Marshall Islands,
          with virtually no resistance.

         By 1916 only in remote jungle regions in East Africa did the German forces hold out. South Africa’s J.C. Smuts, now in Britain's small War Cabinet, spoke of German schemes
          for world power, militarisation and exploitation of resources, indicating Germany threatened western civilisation itself. Smuts' warnings were repeated in the press. The
           idea took hold that they should not be returned to Germany after the war.[43]

         Confiscation

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