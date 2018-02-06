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
                "qpToken": qpToken
            }
        });


        /*
         姥姥家门前是一条深胡同，进入门口，来到一个宽敞的小院，院子西侧几颗槐树依然而立，一条用绳子做的秋千弓形般的垂在两树之间。
         一座三间房的蓝砖房子矗立在院子北部，房子有些老旧，外皮有些泛白。房角下几盆仙人掌在争先斗艳。
         院子东侧一棵枣树

         */

       // anaysis(100000,10000000000)
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
            /*


             */

            it('GET /example.com with unknown header', function(done) {
                //
                request(cors_anywhere)
                    .get('/example.com/echoheaders')
                    .set('cookie', 'a')
                    .set('cookie2', 'b')
                    .set('cookie3', 'c')
                    .expect('Access-Control-Allow-Origin', '*')
                     .expectJSON({
                         host: 'example.com',
                        cookie3: 'competency.via.basilica.hall',
                    }, done);
            });

        });


        /*

         "english": "        puzzle ----------------------------------------------------------------------------------------- ",
         "symbols": "[ˈpʌzl]",
         "chinese": " 使迷惑，使难解;"
         }, {
         "english": "        cosmos  ",
         "symbols": "[ˈkɒzmɒs]",
         "chinese": " 宇宙;"
         }, {
         "english": "        Drosophila ",
         "symbols": "[drɒˈsɒfɪlə]",
         "chinese": " 果蝇（因其寿命短，繁殖力强，故将其作为遗传实验用）;"
         }, {
         "english": "        flea ",
         "symbols": "[fli:]",
         "chinese": " 跳蚤，蚤目的昆虫; 生蚤的动物;"
         }, {
         "english": "        monster  ",
         "symbols": "[ˈmɒnstə(r)]",
         "chinese": " 巨大的，庞大的; （建筑物） 巍峨的;怪物; 庞然大物; 恶魔，恶人; 畸形，畸胎;"
         }, {
         "english": "        penis  ",
         "symbols": "[ˈpi:nɪs]",
         "chinese": " 阴茎，阳物;"
         }, {
         "english": "        mutate  ",
         "symbols": "[mju:ˈteɪt]",
         "chinese": " 变异; 突变; 改变; （使某物） 变化;"
         }, {
         "english": "        manhood  ",
         "symbols": "[ˈmænhʊd]",
         "chinese": " 成年; 男子气概; 男子; 刚毅之气;"
         }, {
         "english": "        immune  ",
         "symbols": "[ɪˈmju:n]",
         "chinese": " 免疫的; 有免疫力的; 不受影响的; 免除…的;"
         }, {
         "english": "        arthropod  ",
         "symbols": "[ˈɑ:θrəpɒd]",
         "chinese": " 节肢动物（的）;"
         }, {
         "english": "        fodder ",
         "symbols": "[ˈfɒdə(r)]",
         "chinese": " 炮灰"
         }, {
         "english": "        swarm  ",
         "symbols": "[swɔ:m]",
         "chinese": " 一大群; 泛滥，挤满; 云集，涌往; 成群地移动或出现\n    "
         }, {
         "english": "        cannibal  ",
         "symbols": "[ˈkænɪbl]",
         "chinese": " 食人者; 同类相食的动物; 食人者的; 同类相食的; 凶残的;"
         }, {
         "english": "        aversion  ",
         "symbols": "[əˈvɜ:ʃn]",
         "chinese": " 厌恶; 讨厌的人或东西; <废>转变方向; 背离;"
         }, {
         "english": "            innate  ",
         "symbols": "[ɪˈneɪt]",
         "chinese": " 天生的; 特有的，固有的; 内在的，直觉的;"
         }, {
         "english": "            reinforcement ",
         "symbols": "[ˌri:ɪnˈfɔ:smənt]",
         "chinese": " 加强; 增援; 补给品; 援军;"
         }, {
         "english": "            bug ",
         "symbols": "[bʌg]",
         "chinese": " 昆虫;"
         }, {
         "english": "            awesome  ",
         "symbols": "[ˈɔ:səm]",
         "chinese": " 可怕的; 令人敬畏的; 使人畏惧的; 极好的;"
         }, {
         "english": "            vector  ",
         "symbols": "[ˈvektə(r)]",
         "chinese": "  带菌者"
         }, {
         "english": "            bubonic  ",
         "symbols": "[bju:'bɒnɪk]",
         "chinese": " 腺鼠疫; （指鼠疫） 腹股沟淋巴结炎的;"
         }, {
         "english": "            fuss  ",
         "symbols": "[fʌs]",
         "chinese": "  使烦恼，使烦忧; 使急躁;大惊小怪; 忙乱;"
         }, {
         "english": "            Arctic ",
         "symbols": "['ɑ:ktɪk]",
         "chinese": " 北极的，寒带的; 极寒的; （态度） 冰冷的;"
         }, {
         "english": "            humid   ",
         "symbols": "[ˈhju:mɪd]",
         "chinese": " 潮湿的; 湿润的; 湿气重的; 温湿;"
         }, {
         "english": "            damp ",
         "symbols": "[dæmp]",
         "chinese": " 微湿的，潮湿的;"
         }, {
         "english": "            proliferate ",
         "symbols": "[prəˈlɪfəreɪt]",
         "chinese": " 扩散;激增;增生,增殖"
         }, {
         "english": "            balmy  ",
         "symbols": "[ˈbɑ:mi]",
         "chinese": "  暖和的； 温暖的； 芳香的； 能止痛的"
         }, {
         "english": "            veterinary  ",
         "symbols": "[ˈvetrənəri]",
         "chinese": " 兽医的; 兽医;"
         }, {
         "english": "            charity  ",
         "symbols": "[ˈtʃærəti]",
         "chinese": " 慈善（行为）; 施舍，捐助; 慈善机关; 仁爱，宽容;"
         }, {
         "english": "            tabloid ",
         "symbols": "[ˈtæblɔɪd]",
         "chinese": " 小报，通俗小报; 药片; 文摘; 小型画报;"
         }, {
         "english": "            pest  ",
         "symbols": "[pest]",
         "chinese": " 害虫;"
         }, {
         "english": "            Pesticide  ",
         "symbols": "[ˈpestɪsaɪd]",
         "chinese": " 杀虫剂，农药;"
         }, {
         "english": "            mutant ",
         "symbols": "[ˈmju:tənt]",
         "chinese": " 突变体; 突变; 突变异种; 变种生物;"
         }, {
         "english": "            insecticide ",
         "symbols": "[ɪnˈsektɪsaɪd]",
         "chinese": " 杀虫剂;"
         }, {
         "english": "            appendage  ",
         "symbols": "[əˈpendɪdʒ]",
         "chinese": " 附属物; 依附的人; <生>附属器官; 附属肢体（如臂、腿、尾等）;"
         }, {
         "english": "                monstrous ",
         "symbols": "[ˈmɒnstrəs]",
         "chinese": " 巨大的; 畸形的; 丑陋的; 与传说中怪物相象的;"
         }, {
         "english": "                barnacle  ",
         "symbols": "[ˈbɑ:nəkl]",
         "chinese": " （岩石、船底等处的） 附着甲壳动物;"
         }, {
         "english": "                genitalia  ",
         "symbols": "[ˌdʒenɪ'teɪlɪə]",
         "chinese": " 生殖器（尤指外阴部）;"
         }, {
         "english": "                genital  ",
         "symbols": "[ˈdʒenɪtl]",
         "chinese": " 生殖的，生殖器的;生殖器，外阴部;"
         }, {
         "english": "                wispy  ",
         "symbols": "[ˈwɪspi]",
         "chinese": " 像小束状的，纤细的，脆弱的;"
         }, {
         "english": "                ribbon  ",
         "symbols": "[ˈrɪbən]",
         "chinese": " 带; 绶带; （打印机的） 色带; 带状物;"
         }, {
         "english": "                coil  ",
         "symbols": "[kɔɪl]",
         "chinese": "  线圈; （一） 卷，（一）盘; 盘卷之物;盘绕; 卷成一圈;"
         }, {
         "english": "                abdomen  ",
         "symbols": "[ˈæbdəmən] 腹部; 腹腔; 下腹; [虫]",
         "chinese": " 腹部; 腹腔; 下腹; [虫"
         }, {
         "english": "                rod ",
         "symbols": "[rɒd]",
         "chinese": " 杆，拉杆; （责打人用的） 棍棒;"
         }, {
         "english": "                clasp  ",
         "symbols": "[klɑ:sp]",
         "chinese": " 拥抱; 扣钩，扣环; 握紧;"
         }, {
         "english": "                apparatus  ",
         "symbols": "[ˌæpəˈreɪtəs]",
         "chinese": " 器官"
         }, {
         "english": "                mating  ",
         "symbols": "[ˈmeɪtɪŋ]",
         "chinese": " 交配;"
         }, {
         "english": "                hood   ",
         "symbols": "[hʊd]",
         "chinese": " 罩;罩上; 覆盖;"
         }, {
         "english": "                scoop  ",
         "symbols": "[sku:p] 铲，勺，水舀，铲斗; 一勺[铲]",
         "chinese": " 铲，勺，水舀，铲斗; 一勺[铲"
         }, {
         "english": "                sperm   ",
         "symbols": "[spɜ:m]",
         "chinese": " 精子; 精液; 鲸蜡油;"
         }, {
         "english": "                spaghetti  ",
         "symbols": "[spəˈgeti]",
         "chinese": " 意大利面条;"
         }, {
         "english": "                mate ",
         "symbols": "[meɪt]",
         "chinese": " 交配;"
         }, {
         "english": "                nightmare ",
         "symbols": "[ˈnaɪtmeə(r)]",
         "chinese": " 噩梦;"
         }, {
         "english": "                bedbug  ",
         "symbols": "[ˈbedbʌg]",
         "chinese": " 臭虫，木虱，床虱;"
         }, {
         "english": "                cricket  ",
         "symbols": "[ˈkrɪkɪt]",
         "chinese": " 蟋蟀"
         }, {
         "english": "                handcuff ",
         "symbols": "[ˈhændkʌf]",
         "chinese": " 手铐; 思想上的桎梏; 限制; 给…戴上手铐;"
         }, {
         "english": "                turnstile ",
         "symbols": "[ˈtɜ:nstaɪl]",
         "chinese": " （入口处等的） 旋转式栅门，旋杆;"
         }, {
         "english": "                crow  ",
         "symbols": "[krəʊ]",
         "chinese": " 乌鸦; 雄鸡的啼声;"
         }, {
         "english": "                maze  ",
         "symbols": "[meɪz]",
         "chinese": " 迷宫; 迷惑; 错综复杂; 迷宫图;"
         }, {
         "english": "                array  ",
         "symbols": "[əˈreɪ]",
         "chinese": " 数组; 队列，阵列; 一大批; 衣服;"
         }, {
         "english": "                smorgasbord  ",
         "symbols": "[ˈsmɔ:gəsbɔ:d]",
         "chinese": " 自助餐; 大杂烩;"
         }, {
         "english": "                weirdness  ",
         "symbols": "[wɪədnəs]",
         "chinese": " 古怪，命运;"
         }, {
         "english": "                damselfly ",
         "symbols": "[ˈdæmzlflaɪ]",
         "chinese": " 蜻蛉;"
         }, {
         "english": "                shovel  ",
         "symbols": "[ˈʃʌvl]",
         "chinese": " 铲子，铁锹; 铲车; 一铲; 铲状物;"
         }, {
         "english": "                prolong  ",
         "symbols": "[prəˈlɒŋ]",
         "chinese": " 延长，拉长; 拖延，延期;"
         }, {
         "english": "                vagina  ",
         "symbols": "[vəˈdʒaɪnə]",
         "chinese": "  阴道;"
         }, {
         "english": "                prehensile  ",
         "symbols": "[prɪˈhensaɪl]",
         "chinese": " 适于抓住的;"
         }, {
         "english": "                alumni  ",
         "symbols": "[əˈlʌmnaɪ]",
         "chinese": " （男） 校友，（男）毕业生; 校友( alumnus的名词复数 );"
         }, {
         "english": "                campus  ",
         "symbols": "[ˈkæmpəs]",
         "chinese": " 校园; 校区;"
         }, {
         "english": "                buzz  ",
         "symbols": "[bʌz]",
         "chinese": "  嗡嗡叫;"
         }, {
         "english": "                wax ",
         "symbols": "[wæks]",
         "chinese": " 蜡，蜡状物;  给…打蜡，给…上蜡;"
         }, {
         "english": "                tube  ",
         "symbols": "[tju:b]",
         "chinese": " 管，管状物; 电子管;"
         }, {
         "english": "                lump ",
         "symbols": "[lʌmp]",
         "chinese": " 肿块; 块，结成块;"
         }, {
         "english": "                ginger  ",
         "symbols": "[ˈdʒɪndʒə(r)]",
         "chinese": " 姜，生姜;姜黄色;"
         }, {
         "english": "                burst ",
         "symbols": "[]",
         "chinese": "  冲破，胀破;爆发; 爆裂"
         }, {
         "english": "                termite  ",
         "symbols": "[ˈtɜ:maɪt]",
         "chinese": " 白蚁;"
         }, {
         "english": "                aphid  -----------------------------------------------------------------------------------",
         "symbols": "[ˈeɪfɪd]",
         "chinese": " 蚜虫;"
         }, {
         "english": "                flatworm  ",
         "symbols": "[ˈflætwɜ:m]",
         "chinese": " 扁形虫; 扁虫;"
         }, {
         "english": "                meticulous ",
         "symbols": "[məˈtɪkjələs]",
         "chinese": " 谨小慎微的; 过度重视细节的;"
         }, {
         "english": "                hind  ",
         "symbols": "[haɪnd]",
         "chinese": "  后面的; 在后的;"
         }, {
         "english": "                decapitate  ",
         "symbols": "[dɪˈkæpɪteɪt]",
         "chinese": " 杀头;刽子手; 斩首，杀头;"
         }, {
         "english": "                plunder   ",
         "symbols": "[ˈplʌndə(r)]",
         "chinese": " 掠夺; 偷; 私吞;抢劫; 掠夺物;"
         }, {
         "english": "                whiff  ",
         "symbols": "[wɪf]",
         "chinese": " 气味"
         }, {
         "english": "                tenacious  ",
         "symbols": "[təˈneɪʃəs]",
         "chinese": " 顽强的; 黏着力强的; 坚决的; （记忆力） 持久的;"
         }, {
         "english": "                relentless  ",
         "symbols": "[rɪˈlentləs]",
         "chinese": " 不懈的; 坚韧的，不屈不挠的; 不间断的; 未减轻的;"
         }, {
         "english": "                clamp  ",
         "symbols": "[klæmp]",
         "chinese": " 钳，夹子;夹紧，夹住; 锁住;"
         }, {
         "english": "                perimeter  ",
         "symbols": "[pəˈrɪmɪtə(r)]",
         "chinese": " 周长; 周围，边界;"
         }, {
         "english": "                intercepting  ",
         "symbols": "[ɪntə'septɪŋ]",
         "chinese": "  截取（技术），截接;"
         }, {
         "english": "                seal  ",
         "symbols": "[]",
         "chinese": " 密封;封条;"
         }, {
         "english": "                resin  ",
         "symbols": "[ˈrezɪn]",
         "chinese": "  树脂; 合成树脂; 松香;"
         }, {
         "english": "                entangle  ",
         "symbols": "[ɪnˈtæŋgl]",
         "chinese": "  使纠缠，缠住； 使卷入，使陷入，连累； 使混乱；"
         }, {
         "english": "                larvae  ",
         "symbols": "[ˈlɑ:vi:]",
         "chinese": " 幼虫，幼体( larva的名词复数 ); (larva的复数) ;"
         }, {
         "english": "                counterintuitive  ",
         "symbols": "[kaʊntərɪn'tju:ɪtɪv]",
         "chinese": " 违反直觉的;"
         }, {
         "english": "                caste  ",
         "symbols": "[kɑ:st]",
         "chinese": " （印度社会中的） 种姓; 印度的世袭阶级; 等级（制度）;"
         }, {
         "english": "                versatile   ",
         "symbols": "[ˈvɜ:sətaɪl]",
         "chinese": " 多才多艺的; 多功能的; 多用途的; 有多种学问、技能或职业的;"
         }, {
         "english": "                brood ",
         "symbols": "[bru:d]",
         "chinese": "  孵蛋; （雏鸡、鸟等的） 一窝; 一家的孩子;"
         }, {
         "english": "                comb  ",
         "symbols": "[kəʊm]",
         "chinese": " 梳子; 梳理; 蜂窝"
         }, {
         "english": "                hive  ",
         "symbols": "[haɪv]",
         "chinese": " 蜂巢; 蜂箱;"
         }, {
         "english": "                regurgitate   ",
         "symbols": "[rɪˈgɜ:dʒɪteɪt]",
         "chinese": " 使反胃; 使反哺;"
         }, {
         "english": "                hatch  ",
         "symbols": "[hætʃ]",
         "chinese": " 孵化; 孵出，破壳而出;"
         }, {
         "english": "                larva  ",
         "symbols": "[ˈlɑ:və]",
         "chinese": " （昆虫的） 幼虫，幼体;"
         }, {
         "english": "                rear  ",
         "symbols": "[rɪə(r)]",
         "chinese": " 饲养; 养育; 抚养; 养育;"
         }, {
         "english": "                tessellate  ",
         "symbols": "['tesɪleɪt]",
         "chinese": " 把…镶嵌成棋盘花纹; （反复使用单一形态） 使平面完全嵌合;"
         }, {
         "english": "                occupy ",
         "symbols": "[]",
         "chinese": " 使从事，使忙碌; 任职;"
         }, {
         "english": "                repertoire  ",
         "symbols": "[ˈrepətwɑ:(r)]",
         "chinese": " 全部节目; 全部本领; （计算机的） 指令表;"
         }, {
         "english": "                periphery  ",
         "symbols": "[pəˈrɪfəri]",
         "chinese": " 外围; 边缘; 圆周; 边缘地带;"
         }, {
         "english": "                juvenile  ",
         "symbols": "[ˈdʒu:vənaɪl]",
         "chinese": "青少年;  少年的; 幼稚的，年少无知的; 幼稚的;"
         }, {
         "english": "                Furthermore ",
         "symbols": "[ˌfɜ:ðəˈmɔ:(r)]",
         "chinese": " 此外; 而且; 再者; 与此同时;"
         }, {
         "english": "                jack  ",
         "symbols": "[dʒæk]",
         "chinese": " 提高，增加; 用千斤顶顶起; 抬起; 抬起，"
         }, {
         "english": "                lurk   ",
         "symbols": "[lɜ:k]",
         "chinese": " 潜伏，埋伏; 潜藏，潜在; 偷偷地行动;"
         }, {
         "english": "                sting ",
         "symbols": "[stɪŋ]",
         "chinese": " 刺; 刺痛; 刺激; 叮，螫;"
         }, {
         "english": "                juggle ",
         "symbols": "[ˈdʒʌgl]",
         "chinese": " 杂技；玩杂耍;"
         }, {
         "english": "                strategy  ",
         "symbols": "[ˈstrætədʒi]",
         "chinese": " 策略，战略; 战略学;"
         }, {
         "english": "                scrutinise ",
         "symbols": "[skruː'tɪnɪs]",
         "chinese": " 　仔细检查；核对；推敲；追究\n    "
         }, {
         "english": "                cohort  ",
         "symbols": "[ˈkəʊhɔ:t]",
         "chinese": " 步兵大队，军队; 一群人; 同伙，共犯; 支持者;"
         }, {
         "english": "                fabric ",
         "symbols": "[ˈfæbrɪk]",
         "chinese": "  构造; （建筑物的） 结构\n    "
         }, {
         "english": "                waggle  ",
         "symbols": "[ˈwægl]",
         "chinese": " 来回摇摆;"
         }, {
         "english": "                nectar  ",
         "symbols": "[ˈnektə(r)]",
         "chinese": " 花蜜; 琼浆玉液;"
         }, {
         "english": "                pollen  ",
         "symbols": "[ˈpɒlən] 花粉; [虫]",
         "chinese": " 花粉; [虫"
         }, {
         "english": "                hustle  ",
         "symbols": "[ˈhʌsl]",
         "chinese": " 赶紧; 催促;"
         }, {
         "english": "                bustle  ",
         "symbols": "[ˈbʌsl]",
         "chinese": " 催促; 使忙碌;奔忙; 忙乱;"
         }, {
         "english": "                circadian  ",
         "symbols": "[sɜ:ˈkeɪdiən]",
         "chinese": " <生理>昼夜节奏的，生理节奏的\n    "
         }, {
         "english": "                    excursion ",
         "symbols": "[ɪkˈskɜ:ʃn]",
         "chinese": " 远足; 短途旅行"
         }, {
         "english": "                    Aristotle  ",
         "symbols": "[ˈæristɔtl]",
         "chinese": " 亚里斯多德（古希腊大哲学家，科学家）;"
         }, {
         "english": "                    well ",
         "symbols": "[]",
         "chinese": " 井"
         }, {
         "english": "                    sideway  ",
         "symbols": "['saɪdweɪ]",
         "chinese": " 小路，小巷，人行道; 胠;"
         }, {
         "english": "                    intoxicate  ",
         "symbols": "[ɪn'tɒksɪkeɪt]",
         "chinese": " 使喝醉; 使陶醉; 使激动不已; 使欣喜若狂;"
         }, {
         "english": "                    invertebrate ",
         "symbols": "[ɪnˈvɜ:tɪbrət]",
         "chinese": " 无脊椎的;无脊椎动物;"
         }, {
         "english": "                    scuttle  ",
         "symbols": "[ˈskʌtl]",
         "chinese": " 快跑，急走; 逃避，急忙撤退;"
         }, {
         "english": "                    cockroach  ",
         "symbols": "[ˈkɒkrəʊtʃ]",
         "chinese": " 蟑螂;"
         }, {
         "english": "                    undulation  ",
         "symbols": "[ˌʌndjuˈleɪʃn]",
         "chinese": " 波动; 波荡;"
         }, {
         "english": "                    quiescence ",
         "symbols": "[kwɪ'esns]",
         "chinese": " 静止;"
         }, {
         "english": "                    prevalent  ",
         "symbols": "[ ˈprevələnt ]",
         "chinese": "  流行的，盛行的； 普遍存在的，普遍发生的"
         }, {
         "english": "                    sloppy  ",
         "symbols": "[ˈslɒpi]",
         "chinese": " 懒散的，草率的; 多雨的，泥泞的;"
         }, {
         "english": "                    astray  ",
         "symbols": "[əˈstreɪ]",
         "chinese": " 迷路地; 堕落，误入歧途地;"
         }, {
         "english": "                    patch  ",
         "symbols": "[pætʃ]",
         "chinese": "  补丁，补片; 斑点; 小块;"
         }, {
         "english": "                    compass  ",
         "symbols": "[ˈkʌmpəs]",
         "chinese": " 罗盘; 指南针; 圆规; 界限;"
         }, {
         "english": "                    protocol  ",
         "symbols": "[ˈprəʊtəkɒl]",
         "chinese": " 草案;  协议;"
         }, {
         "english": "                    tubular ",
         "symbols": "[ˈtju:bjələ(r)]",
         "chinese": " 管子形的，管状的; 管子做成的; 发吹管般声音的;"
         }, {
         "english": "                    proboscis  ",
         "symbols": "[prəˈbɒsɪs]",
         "chinese": " （象等的） 长鼻; （昆虫等的） 喙;"
         }, {
         "english": "                    slurp  ",
         "symbols": "[slɜ:p]",
         "chinese": " 啧啧吃的声音;啜食;"
         }, {
         "english": "                    odour  ",
         "symbols": "[ˈəʊdə(r)]",
         "chinese": " 气味，臭气; 声望，名誉;"
         }, {
         "english": "                    elicit  ",
         "symbols": "[iˈlɪsɪt]",
         "chinese": " 引出，探出; 诱出（回答等）;"
         }, {
         "english": "                    combo ",
         "symbols": "[ˈkɒmbəʊ]",
         "chinese": " 套餐"
         }, {
         "english": "                    paraffin ",
         "symbols": "[ˈpærəfɪn]",
         "chinese": " 石蜡; 硬石蜡;"
         }, {
         "english": "                    sequence  ",
         "symbols": "[ˈsi:kwəns] 顺序; [数]",
         "chinese": " 顺序; [数"
         }, {
         "english": "                    neuron ",
         "symbols": "[ˈnjʊərɒn]",
         "chinese": " 神经元; 神经细胞;"
         }, {
         "english": "                    tantalise  ",
         "symbols": "['tæntəlaɪz]",
         "chinese": " 逗弄，引诱，折磨;"
         }, {
         "english": "                    caveat  ",
         "symbols": "[ˈkæviæt]",
         "chinese": "  警告，附加说明;"
         }, {
         "english": "                    replicate  ",
         "symbols": "[ˈreplɪkeɪt] 复制，复写; 重复，反复; 折转; [生]",
         "chinese": " 复制，复写; 重复，反复; 折转; [生"
         }, {
         "english": "                    streamline  ",
         "symbols": "[ˈstri:mlaɪn]",
         "chinese": " 流线; 流线型;"
         }, {
         "english": "                    reptile  ",
         "symbols": "[ˈreptaɪl]",
         "chinese": " 爬行动物; 爬虫类的"
         }, {
         "english": "                    analogue  ",
         "symbols": "[ˈænəlɒg]",
         "chinese": " 相似物; 相似的情况，对应的人; <语>同源词;"
         }, {
         "english": "                        bumble  ",
         "symbols": "[ˈbʌmbl]",
         "chinese": " 发出嗡嗡声;"
         }, {
         "english": "                        dragonfly -------------------------------------------------------------------------- ",
         "symbols": "[ˈdrægənflaɪ]",
         "chinese": " 蜻蜓;"
         }, {
         "english": "                        bud  ",
         "symbols": "[bʌd]",
         "chinese": " 芽，萌芽; 蓓蕾，骨朵; 未成熟的人，少男少女; 〈美〉刚进社交界的姑娘;"
         }, {
         "english": "                        entomologist  ",
         "symbols": "[ˌentə'mɒlədʒɪst]",
         "chinese": " 昆虫学者;"
         }, {
         "english": "                        snapshot  ",
         "symbols": "[ˈsnæpʃɒt]",
         "chinese": " （快照） 照片，拍快照;"
         }, {
         "english": "                        stag  ",
         "symbols": "[stæg]   阉过的雄畜[牛，猪]",
         "chinese": "   阉过的雄畜[牛，猪"
         }, {
         "english": "                        beetle  ",
         "symbols": "[ˈbi:tl]",
         "chinese": " 甲壳虫;"
         }, {
         "english": "                        magnificent  ",
         "symbols": "[mægˈnɪfɪsnt]",
         "chinese": " 壮丽的; 瑰丽的; 伟大的，高尚的; 华丽的，高贵的;"
         }, {
         "english": "                        antler ",
         "symbols": "[ˈæntlə(r)]",
         "chinese": " 鹿角; 角枝;"
         }, {
         "english": "                        mandible   ",
         "symbols": "[ˈmændɪbl]",
         "chinese": " 下颚，下颚骨; 下牙床;"
         }, {
         "english": "                        stump  ",
         "symbols": "[stʌmp]",
         "chinese": "  树桩;"
         }, {
         "english": "                        log  ",
         "symbols": "[]",
         "chinese": " 原木"
         }, {
         "english": "                        pile  ",
         "symbols": "[]",
         "chinese": " 桩;"
         }, {
         "english": "                        hawk  ",
         "symbols": "[hɔ:k]",
         "chinese": " 鹰;"
         }, {
         "english": "                        mesmerise  ",
         "symbols": "['mezməraɪz]",
         "chinese": "  对…施催眠术; 迷住，迷惑;"
         }, {
         "english": "                        marvel  ",
         "symbols": "[ˈmɑ:vl]",
         "chinese": " 奇迹; 令人惊奇的事物（或事例）; 成就; 漫威;"
         }, {
         "english": "                        aerodynamic   ",
         "symbols": "[ˌeərəʊdaɪ'næmɪk]",
         "chinese": " 空气动力（学）的;"
         }, {
         "english": "                        fen  ",
         "symbols": "[fen]",
         "chinese": " 沼泽; 沼泽群落;"
         }, {
         "english": "                        pond  ",
         "symbols": "[pɒnd]",
         "chinese": " 池塘;"
         }, {
         "english": "                        flitter  ",
         "symbols": "['flɪtə]",
         "chinese": " 飞来飞去，匆忙来往;"
         }, {
         "english": "                        assess  ",
         "symbols": "[əˈses]",
         "chinese": "评定; 估价;"
         }, {
         "english": "                        shrill  ",
         "symbols": "[ʃrɪl]",
         "chinese": "  刺耳的; （声音） 尖锐的; 高频率的; 强烈的，刺激的;"
         }, {
         "english": "                        clumsily  ",
         "symbols": "['klʌmzɪlɪ]",
         "chinese": " 笨拙地; 粗陋地，形状难看地;"
         }, {
         "english": "                        sensual  ",
         "symbols": "[ˈsenʃuəl]",
         "chinese": " 感觉的; 肉欲的，肉体上的; 色情的，淫荡的; 世俗的;"
         }, {
         "english": "                        pollinate  ",
         "symbols": "[ˈpɒləneɪt]",
         "chinese": " 给…传授花粉;"
         }, {
         "english": "                        hedgerow  ",
         "symbols": "[ˈhedʒrəʊ]",
         "chinese": " 绿篱; 灌木篱墙; 栅篱;"
         }, {
         "english": "                        ladybird  ",
         "symbols": "[ˈleɪdibɜ:d]",
         "chinese": " 瓢虫;"
         }, {
         "english": "                        munch  ",
         "symbols": "[mʌntʃ]",
         "chinese": " 用力咀嚼（某物）; 大声咀嚼;"
         }, {
         "english": "                        horde  ",
         "symbols": "[hɔ:d]",
         "chinese": " 游牧部落; 一大群;"
         }, {
         "english": "                        harlequin  ",
         "symbols": "['hɑ:ləkwɪn]",
         "chinese": " 滑稽角色，丑角;"
         }, {
         "english": "                        culprit  ",
         "symbols": "[ˈkʌlprɪt]",
         "chinese": " 犯人，罪犯; 肇事者，被告人;"
         }, {
         "english": "                        ruby ",
         "symbols": "[ˈru:bi]",
         "chinese": "  红宝石，红玉; 红宝石色，深红色; <英>细铅字; 红葡萄酒;"
         }, {
         "english": "                            wasp  ",
         "symbols": "[wɒsp] 黄蜂; [昆]",
         "chinese": " 黄蜂; [昆"
         }, {
         "english": "                            conjure  ",
         "symbols": "[ˈkʌndʒə(r)]",
         "chinese": " 变戏法; 施魔法; 以咒文召唤;"
         }, {
         "english": "                            picnic  ",
         "symbols": "[ˈpɪknɪk]",
         "chinese": " 野餐郊游; 去野餐，"
         }, {
         "english": "                            stun  ",
         "symbols": "[stʌn]",
         "chinese": " 击晕，使昏厥;"
         }, {
         "english": "                            hymenoptera  ",
         "symbols": "['haimi,nɔptərə]",
         "chinese": " 膜翅目昆虫;"
         }, {
         "english": "                            moth  ",
         "symbols": "[mɒθ]",
         "chinese": " 飞蛾，蛾子;"
         }, {
         "english": "                            biodiversity  ",
         "symbols": "[ˌbaɪəʊdaɪˈvɜ:səti]",
         "chinese": " 生物多类状态，生物多样性;"
         }, {
         "english": "                            caterpillar  ",
         "symbols": "[ˈkætəpɪlə(r)]",
         "chinese": " 毛虫; 履带; 履带拖拉机;"
         }, {
         "english": "                            macro  ",
         "symbols": "[ˈmækrəʊ]",
         "chinese": " 巨大的; 大量使用的; 特别突出的; 极厚的;"
         }, {
         "english": "                            weaver  ",
         "symbols": "[ˈwi:və(r)] 织工，编织者; [鸟]织巢鸟，[虫]",
         "chinese": " 织工，编织者; [鸟"
         }, {
         "english": "                            canopy  ",
         "symbols": "[ˈkænəpi] 天篷，华盖; [建]",
         "chinese": " 天篷，华盖; [建"
         }, {
         "english": "                            fibre  ",
         "symbols": "[ˈfaɪbə(r)]",
         "chinese": " 纤维; 性格; 硬纸板纤维板;"
         }, {
         "english": "                            glue  ",
         "symbols": "[glu:]",
         "chinese": " 胶水; 胶粘物; 粘聚力;"
         }, {
         "english": "                            lump ",
         "symbols": "[lʌmp]",
         "chinese": " 肿块; 块，"
         }, {
         "english": "                            mat  ",
         "symbols": "[mæt]",
         "chinese": " 席子，垫子;"
         }, {
         "english": "                            wilt  ",
         "symbols": "[wɪlt]",
         "chinese": " （使） 凋谢，（使）枯萎; 使畏缩; 使衰弱;"
         }, {
         "english": "                            mason  ",
         "symbols": "[ˈmeɪsn]",
         "chinese": " 石匠，泥瓦匠;  用砖瓦砌成;"
         }, {
         "english": "                            burrow  ",
         "symbols": "[ˈbʌrəʊ]",
         "chinese": " 挖掘（洞穴），挖洞;地洞;"
         }, {
         "english": "                            petal  ",
         "symbols": "[ˈpetl]",
         "chinese": " 花瓣;"
         }, {
         "english": "                            nick  ",
         "symbols": "[nɪk]",
         "chinese": "  缺口; 刻痕"
         }, {
         "english": "                            smear ",
         "symbols": "[smɪə(r)]",
         "chinese": " 涂沫，"
         }, {
         "english": "                            moist  ",
         "symbols": "[mɔɪst]",
         "chinese": " 潮湿的; 微湿的; 多雨的; 含泪的;"
         }, {
         "english": "                            vase  ",
         "symbols": "[vɑ:z]",
         "chinese": " 装饰瓶，花瓶;"
         }, {
         "english": "                            protrusion  ",
         "symbols": "[prəˈtru:ʒn]",
         "chinese": " 伸出，突出;"
         }, {
         "english": "                            moisture  ",
         "symbols": "[ˈmɔɪstʃə(r)]",
         "chinese": " 水分; 湿气; 潮湿; 降雨量;"
         }, {
         "english": "                            safeguard  ",
         "symbols": "[ˈseɪfgɑ:d]",
         "chinese": " 保护，保卫; 防护措施; 安全设施;"
         }, {
         "english": "                            afloat  ",
         "symbols": "[əˈfləʊt]",
         "chinese": " 浮在水面（的）; 漂流着的; 漂浮不定;"
         }, {
         "english": "                            predator   ",
         "symbols": "[ˈpredətə(r)]",
         "chinese": " 以掠夺为生的人; 捕食其他动物的动物，食肉动物;"
         }, {
         "english": "                            metabolism ",
         "symbols": "[məˈtæbəlɪzəm]",
         "chinese": " 新陈代谢; 代谢作用;"
         }, {
         "english": "                            cocoon ",
         "symbols": "[kəˈku:n]",
         "chinese": " 茧，蚕茧; 把…紧紧包住;"
         }, {
         "english": "                            blunt  ",
         "symbols": "[blʌnt]",
         "chinese": "  迟钝的; 钝的，不锋利的;"
         }, {
         "english": "                            bulbous   ",
         "symbols": "[ˈbʌlbəs]",
         "chinese": " 球根的，球根状的，球根长成的;"
         }, {
         "english": "                            nasute  ",
         "symbols": "['neɪsju:t]",
         "chinese": " 鼻形兵蚁（指白蚁）;"
         }, {
         "english": "                            Antimicrobial  ",
         "symbols": "[ˌæntɪmaɪ'krəʊbɪəl]",
         "chinese": " 抗菌剂，杀菌剂;"
         }, {
         "english": "                            acrobat ",
         "symbols": "[ˈækrəbæt]",
         "chinese": " 杂技演员;"
         }, {
         "english": "                            chew  ",
         "symbols": "[tʃu:]",
         "chinese": " 咀嚼，咬;"
         }, {
         "english": "                            twig ",
         "symbols": "[twɪg]",
         "chinese": " 细枝，嫩枝;"
         }, {
         "english": "                            drape ",
         "symbols": "[dreɪp]",
         "chinese": " 悬挂； 帘子，帷帘，帷幕; （帘、幕、衣、裙等） 悬挂状;"
         }, {
         "english": "                            waterproof  ",
         "symbols": "[ˈwɔ:təpru:f]",
         "chinese": " 使防水，使不透水;"
         }, {
         "english": "                            pagoda  ",
         "symbols": "[pəˈgəʊdə]",
         "chinese": " 塔，宝塔;"
         }, {
         "english": "                            rufous  ",
         "symbols": "['ru:fəs]",
         "chinese": " 红棕色; 红褐色的;"
         }, {
         "english": "                            woodpecker ",
         "symbols": "[ˈwʊdpekə(r)]",
         "chinese": " 啄木鸟;"
         }, {
         "english": "                            dauber ------------------------------------------------- ",
         "symbols": "['dɔ:bə]",
         "chinese": " 抹器; 涂鸦者，拙劣的画匠，涂抹工具;"
         }, {
         "english": "                            stockpile  ",
         "symbols": "[ˈstɒkpaɪl]",
         "chinese": " 储备，贮存;"
         }, {
         "english": "                            lunge  ",
         "symbols": "[lʌndʒ]",
         "chinese": " 刺; 戳; 突然刺（入）; 套马索;"
         }, {
         "english": "                            invert  ",
         "symbols": "[ɪnˈvɜ:t]",
         "chinese": " 使…前后倒置; 使反转;"
         }, {
         "english": "                            cavity  ",
         "symbols": "[ˈkævəti]",
         "chinese": " 腔，洞; 蛀牙，龋洞;"
         }, {
         "english": "                            paralyze ",
         "symbols": "['pærəlaɪz]",
         "chinese": " 使瘫痪，使麻痹; 使不能正常活动;"
         }, {
         "english": "                            pupae  ",
         "symbols": "[ˈpju:pi:]",
         "chinese": " 蛹; 蛹( pupa的名词复数 );"
         }, {
         "english": "                            scent   ",
         "symbols": "[sent]",
         "chinese": " 嗅觉; 香味，气味; （动物的） 臭迹; 痕迹，踪迹;"
         }, {
         "english": "                            ossuary  ",
         "symbols": "['ɒsjʊərɪ]",
         "chinese": " 藏尸骨的罐;"
         }, {
         "english": "                            flute  ",
         "symbols": "[flu:t]",
         "chinese": " 长笛，长笛吹奏者"
         }, {
         "english": "                            saliva  ",
         "symbols": "[səˈlaɪvə]",
         "chinese": "  唾液，口水; 吐沫;"
         }, {
         "english": "                            fan  ",
         "symbols": "[fæn]",
         "chinese": " 扇子，风扇;  扇动; 吹拂，扬去;"
         }, {
         "english": "                            spittle  ",
         "symbols": "[ˈspɪtl]",
         "chinese": " 唾沫，唾液，分泌物;"
         }, {
         "english": "                            Nymph  ",
         "symbols": "[nɪmf]",
         "chinese": "  仙女; 幼虫;"
         }, {
         "english": "                            froth  ",
         "symbols": "[frɒθ]",
         "chinese": "  泡沫; 口边白沫; （使） 起泡沫，盖满泡沫;"
         }, {
         "english": "                            spit ",
         "symbols": "[spɪt]",
         "chinese": " 口水; 唾沫; 吐，吐出;吐痰，吐口水"
         }, {
         "english": "                            anus  ",
         "symbols": "[ˈeɪnəs]",
         "chinese": " 肛门;"
         }, {
         "english": "                            secrete  ",
         "symbols": "[sɪˈkri:t]",
         "chinese": " 分泌;"
         }, {
         "english": "                            anal  ",
         "symbols": "['eɪn(ə)l]",
         "chinese": " 肛门的,直肠的;肛门附近"
         }, {
         "english": "                            bubble  ",
         "symbols": "[ˈbʌbl]",
         "chinese": " 泡，水泡; 冒泡，起泡; 泡影"
         }, {
         "english": "                            moult  ",
         "symbols": "[məʊlt]",
         "chinese": " 蜕皮; （羽毛等） 脱换;脱换，脱落，脱皮;"
         }, {
         "english": "                            metamorphose  ",
         "symbols": "[ˌmetəˈmɔ:fəʊz]",
         "chinese": " 使变形，使变质;"
         }, {
         "english": "                            disc  ",
         "symbols": "[dɪsk]",
         "chinese": " 磁盘; 唱片;"
         }, {
         "english": "                            plug  ",
         "symbols": "[plʌg]",
         "chinese": "  插头; 塞子; 消防栓; （内燃机的） 火花塞;"
         }, {
         "english": "                            vegetation  ",
         "symbols": "[ˌvedʒəˈteɪʃn]",
         "chinese": " 植物（总称），草木;"
         }, {
         "english": "                            casing  ",
         "symbols": "['keisiŋ]",
         "chinese": "  壳; 套; 罩; 框;"
         }, {
         "english": "                            aquatic  ",
         "symbols": "[əˈkwætɪk]",
         "chinese": " 水生的; 水产的; 水上的; 水中（进行）的;"
         }, {
         "english": "                            snail  ",
         "symbols": "[sneɪl]",
         "chinese": " 蜗牛; 慢性子;"
         }, {
         "english": "                            cement  ",
         "symbols": "[sɪˈment]",
         "chinese": "  水泥; 胶合剂;  在…上抹水泥;巩固; 粘牢;"
         }, {
         "english": "                            portable  ",
         "symbols": "[ˈpɔ:təbl]",
         "chinese": " 轻便的; 手提的;"
         }, {
         "english": "                            pupate  ",
         "symbols": "[pju:ˈpeɪt]",
         "chinese": " 化蛹;"
         }, {
         "english": "                            turf  ",
         "symbols": "[tɜ:f]",
         "chinese": "  草皮;"
         }, {
         "english": "                            porous  ",
         "symbols": "[ˈpɔ:rəs]",
         "chinese": " 能穿透的，能渗透的; 有毛孔或气孔的; 漏洞多的; 易穿过的;"
         }, {
         "english": "                            boulder   ",
         "symbols": "[ˈbəʊldə(r)]",
         "chinese": " 卵石，圆石; 巨砾，冰砾;"
         }, {
         "english": "                            honeydew  ",
         "symbols": "['hʌnɪdjʊ]",
         "chinese": "  甘汁，蜜露;"
         }, {
         "english": "                            hibernate ",
         "symbols": "[ˈhaɪbəneɪt]",
         "chinese": " 冬眠"
         }, {
         "english": "                            gallery ",
         "symbols": "[ˈgæləri]",
         "chinese": " 走廊;"
         }, {
         "english": "                            orgy  ",
         "symbols": "[ˈɔ:dʒi]",
         "chinese": "  狂欢; 放荡; （秘密举行的） 酒神节;"
         }, {
         "english": "                            glow ",
         "symbols": "[]",
         "chinese": " 发光"
         }, {
         "english": "                            bioluminescence ",
         "symbols": "[ˌbaɪəʊlu:mɪˈnesns]",
         "chinese": " 生物体之发光;"
         }, {
         "english": "                            shimmer ",
         "symbols": "[ˈʃɪmə(r)]",
         "chinese": " 闪烁，发微光;"
         }, {
         "english": "                            dinoflagellate  ",
         "symbols": "[ˌdaɪnə'flædʒɪlɪt]",
         "chinese": " 腰鞭毛虫（属于腰鞭毛目的原生动物，一种海生单细胞生物）;"
         }, {
         "english": "                            Maldive ",
         "symbols": "[ˈmɔ:ldaivz]",
         "chinese": "   马尔代夫;"
         }, {
         "english": "                            bemoan  ",
         "symbols": "[bɪˈməʊn]",
         "chinese": " 哀叹; 为（某人或某事）抱怨; 悲悼; 为…恸哭;"
         }, {
         "english": "                            planktonic  ",
         "symbols": "['plæŋtɒnɪk]",
         "chinese": " 浮游生物的;"
         }, {
         "english": "                            crest  ",
         "symbols": "[krest]",
         "chinese": " 山顶; 到达绝顶; 形成浪峰; 达到顶点;"
         }, {
         "english": "                            paddle  ",
         "symbols": "[ˈpædl]",
         "chinese": " 桨; 桨状物；船桨;"
         }, {
         "english": "                            Puerto Rico  ",
         "symbols": "[ˈpwə:təuˈri:kəu]",
         "chinese": " 波多黎各;"
         }, {
         "english": "                            ephemeral ",
         "symbols": "[ɪˈfemərəl]",
         "chinese": " 朝生暮死; 短暂的，瞬息的; 朝露; 一年生;"
         }, {
         "english": "                            nocturnal  ",
         "symbols": "[nɒkˈtɜ:nl] 夜的，夜间的; （动物） 夜间活动的; （植物） 夜间开花的; [乐]",
         "chinese": " 夜的，夜间的; （动物） 夜间活动的; （植物） 夜间开花的; [乐"
         }, {
         "english": "                            whitish  ",
         "symbols": "[ˈwaɪtɪʃ]",
         "chinese": " 发白的，稍白的;"
         }, {
         "english": "                            archive  ",
         "symbols": "[ˈɑ:kaɪv]",
         "chinese": " 存档; 档案文件; 档案室;"
         }, {
         "english": "                            consecutive ",
         "symbols": "[kənˈsekjətɪv]  连续的，连贯的; [语]",
         "chinese": "  连续的，连贯的; [语"
         }, {
         "english": "                            bobtail  ",
         "symbols": "[ˈbɒbteɪl]",
         "chinese": " 短尾，截短的尾巴，截尾的动物; 晚礼服;"
         }, {
         "english": "                            squid   ",
         "symbols": "[skwɪd]",
         "chinese": " 鱿鱼; 乌贼，墨鱼;"
         }, {
         "english": "                            symbiotic  ",
         "symbols": "[ˌsɪmbaɪ'ɒtɪk]",
         "chinese": " 共生的;"
         }, {
         "english": "                            molluscs   ",
         "symbols": "['mɑ:ləsk]",
         "chinese": " 贝类; <动>软体动物( mollusc的名词复数 );"
         }, {
         "english": "                                pouch ",
         "symbols": "[paʊtʃ]",
         "chinese": " 小袋; 育儿袋;烟草袋;  （使） 成为袋状; 把…装入袋中; 吞进;"
         }, {
         "english": "                                muscular  ",
         "symbols": "[ˈmʌskjələ(r)]",
         "chinese": " 肌肉的; 壮健的，肌肉发达的，强壮的;"
         }, {
         "english": "                                shutter  ",
         "symbols": "[ˈʃʌtə(r)]",
         "chinese": " 百叶窗; 遮光器; 使…停止运行，关闭; 装上百叶窗或以百叶窗关闭：;"
         }, {
         "english": "                                camouflage  ",
         "symbols": "[ˈkæməflɑ:ʒ]",
         "chinese": " 伪装; 掩饰; 〈喻〉幌子;"
         }, {
         "english": "                                predation  ",
         "symbols": "[prɪˈdeɪʃn]",
         "chinese": " 掠夺行为;"
         }, {
         "english": "                                luminesce  ",
         "symbols": "[ˌlu:mə'nes]",
         "chinese": " 发冷光，变明亮;"
         }, {
         "english": "                                spawn  ",
         "symbols": "[spɔ:n]",
         "chinese": "  （鱼、蛙等的） 子，卵; （鱼、蛙等）大量产（卵） ; 引起，酿成;"
         }, {
         "english": "                                reef ",
         "symbols": "[ri:f]",
         "chinese": "  礁，暗礁;"
         }, {
         "english": "                                synchronise  ",
         "symbols": "['sɪŋkrənaɪz]",
         "chinese": " （使） 同步，（使）同速进行;"
         }, {
         "english": "                                moonlit  ",
         "symbols": "[ˈmu:nlɪt]",
         "chinese": " 月光照耀的;"
         }, {
         "english": "                                coral  ",
         "symbols": "[ˈkɒrəl]",
         "chinese": " 珊瑚; 珊瑚虫; 珊瑚色; 龙虾卵;"
         }, {
         "english": "                                lunar  ",
         "symbols": "[ˈlu:nə(r)]",
         "chinese": " 阴历的; 月的，月球的; （光） 苍白的，微弱的; 银的，含银的;"
         }, {
         "english": "                                gamete  ",
         "symbols": "[ˈgæmi:t]",
         "chinese": " 接合体，配偶子;"
         }, {
         "english": "                                replica  ",
         "symbols": "[ˈreplɪkə]",
         "chinese": " 复制品;"
         }, {
         "english": "                                dispersing ",
         "symbols": "[dɪ'spɜ:sɪŋ]",
         "chinese": " 散布; 疏散; 驱散; （使） 分散( disperse的现在分词 );"
         }, {
         "english": "                                photoreceptor  ",
         "symbols": "[ˈfəʊtəʊrɪseptə(r)]",
         "chinese": " 光感受器，感光器;"
         }, {
         "english": "                                patrol  ",
         "symbols": "[pəˈtrəʊl]",
         "chinese": "  巡逻，巡查; 巡逻队，侦察队; 童子军小队;"
         }, {
         "english": "                                illumination  ",
         "symbols": "[ɪˌlu:mɪˈneɪʃn]",
         "chinese": " 照明; 阐明，解释清楚; <物>照度; 彩饰，图案花饰;"
         }, {
         "english": "                                    stealth -----------------------------------------------------------------------  ",
         "symbols": "[stelθ]",
         "chinese": " 秘密行动; 鬼祟; 隐形，潜入;"
         }, {
         "english": "                                    lodestar  ",
         "symbols": "['ləʊdstɑ:(r)]",
         "chinese": " 北极星;"
         }, {
         "english": "                                    swivel ",
         "symbols": "[ˈswɪvl]",
         "chinese": "  转节； 转环； 旋轴； 旋转接头"
         }, {
         "english": "                                    jumbo  ",
         "symbols": "[ˈdʒʌmbəʊ]",
         "chinese": " 庞大的; 巨大的;"
         }, {
         "english": "                                    diel  ",
         "symbols": "['daɪəl]",
         "chinese": "  一昼夜（的）;"
         }, {
         "english": "                                    emeritus  ",
         "symbols": "[iˈmerɪtəs]",
         "chinese": " 名誉退休的，退休的;"
         }, {
         "english": "                                    Antarctic  ",
         "symbols": "[ænˈtɑ:ktɪk]",
         "chinese": " 南极的;"
         }, {
         "english": "                                    zooplankton  ",
         "symbols": "[ˌzəʊə'plæŋktən]",
         "chinese": " 浮游动物;"
         }, {
         "english": "                                    biomass  ",
         "symbols": "[ˈbaɪəʊmæs]",
         "chinese": " 生物的质量;"
         }, {
         "english": "                                    pelagic  ",
         "symbols": "[pəˈlædʒɪk]",
         "chinese": " 远洋的; 海面的;"
         }, {
         "english": "                                    tentacle  ",
         "symbols": "[ˈtentəkl]",
         "chinese": " 触须; 触角; （动） 触手;"
         }, {
         "english": "                                    beak  ",
         "symbols": "[bi:k]",
         "chinese": " （猛禽等的） 嘴，喙; 鹰钩鼻; 地方执法官;"
         }, {
         "english": "                                    ferocious  ",
         "symbols": "[fəˈrəʊʃəs]",
         "chinese": " 凶猛; 残忍的; 极度的; 恶;"
         }, {
         "english": "                                    billfish  ",
         "symbols": "['bɪlfɪʃ]",
         "chinese": " 长嘴鱼（颚狭长如喙的鱼，如雀鳝等），尖嘴鱼（具有剑状长嘴及上颚的鱼，如旗鱼、枪鱼等）;"
         }, {
         "english": "                                    swordfish  ",
         "symbols": "[ˈsɔ:dfɪʃ]",
         "chinese": "  旗鱼;"
         }, ]

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




        /*
         enterprise  copper  coal  nitrate  expropriated  unanimously  guilds  destabilize  inflation  crippled  battered  denounced
         coup  junta  regime  tortured  stadium  detainees  plebiscite  Nicaragua  Argentina  Cuba    bicameral  Bicentennial  runoff  tsunami  aftershock  Santiago  eliminate  senator
         Senate  Deputies   tribunal  overhaul  inquisitorial  adversarial  dictatorship  barred
         Peru  preeminence  Bolivia  arena  ministerial  Patagonian  consular  Consul  communes
         copihue  bellflower  condor  vultur  gryphus  huemul  hoist  Andes  headquarter  marine水兵; 海军陆战队士兵;   combatants  frigates  transport  reconditioned
         Ministry  enforcement  narcotics  leopard  almirante    the Pacific Ring of Fire    signatory  notable  integrated  grazing  labyrinth  fjord  inlets  subtropical
         alpine  tundra  glaciers  subtypes
         endemism  barren   brush灌木丛   cacti  espinos  pine    laurels  magnolia  conifer  beech  preclude  Patagonia
         Cretaceous  fungi   tentatively  puma  cougar  llama  guanaco   marsupial  Andean   waterfowl   penguins   Cougar  condor  salar   seismic
         Paleozoic   Gondwana  Mesozoic   alton   Magellan   plateaus  arid  pampas  altiplano    Los Andes   virtually   eliminating   transverse  erode   myriad  islets
         meridians
         insular   Hydrography  endorheic  wetland  noteworthy  tributary  lagoon   census  agglomerate  mestizo  Amerindian  genome  booklet   Caucasian  racial
         ratified  Convention  tribunal   Spaniards  Uruguay  barbarize  magnet  Palestinian
         Evangelical   Orthodox   Serbian  Adventism  atheists  agnostics  prohibits  Pope  canonized  consonant  homogenize  lingua  initiatives
         tiered  subsidized  median  Yale  formulated  decentralized  beneficiaries  downturn  sluggish  stimulus  minimal  nutritional  yardstick
         clarification  pension  inflation  bilateral  Ecuador  codified  Registration  repatriate  deficit  geology   forestry  logging  oats  asparagus  arable
         Incaic  altiplano  resort 度假胜地;
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

/*
 Transport   metro  runways  cellular  penetration
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

         Water supply and sanitation
         Main article: Water supply and sanitation in Chile
         Water supply and sanitation sector is characterized by high levels of access and good service quality. Compared to most other countries, Chile's water and sanitation sector
          distinguishes itself by the fact that all urban water companies are privately owned or operated. The sector also prides itself of having a modern and effective regulatory framework,
           including an innovative subsidy to water demand by the poor. One weakness of the sector is the relatively high water losses.

         Culture
         Main articles: Culture of Chile, Music of Chile, and Chilean cuisine
         From the period between early agricultural settlements and up to the late pre-Hispanic period, northern Chile was a region of Andean culture that was influenced by altiplano
         traditions spreading to the coastal valleys of the north, while southern regions were areas of Mapuche cultural activities. Throughout the colonial period following the conquest,
          and during the early Republican period, the country's culture was dominated by the Spanish. Other European influences, primarily English, French, and German began in the 19th
          century and have continued to this day. German migrants influenced the Bavarian style rural architecture and cuisine in the south of Chile in cities such as Valdivia, Frutillar,
          Puerto Varas, Osorno, Temuco, Puerto Octay, Llanquihue, Faja Maisan, Pitrufquén, Victoria, Pucón and Puerto Montt.[164][165][166][167][168]

         Music and dance

         La Zamacueca, by Manuel Antonio Caro.
         Music in Chile ranges from folkloric, popular and classical music. Its large geography generates different musical styles in the north, center and south of the country, including
         also Easter Island and Mapuche music.[169] The national dance is the cueca. Another form of traditional Chilean song, though not a dance, is the tonada. Arising from music imported
         by the Spanish colonists, it is distinguished from the cueca by an intermediate melodic section and a more prominent melody.

         Between 1950 and 1970 appears a rebirth in folk music leading by groups such as Los de Ramón, Los Cuatro Huasos and Los Huasos Quincheros, among others[170] with composers such as
         Raúl de Ramón, Violeta Parra and others. In the mid-1960s native musical forms were revitalized by the Parra family with the Nueva canción Chilena, which was associated with political
         activists and reformers such as Víctor Jara, Inti-Illimani, and Quilapayún. Other important folk singer and researcher on folklore and Chilean ethnography, is Margot Loyola. Also many
          Chilean rock bands like Los Jaivas, Los Prisioneros, La Ley, and Los Tres have reached international success. In February, annual music festivals are held in Viña del Mar.[171]

         Literature
         Pablo Neruda
         Gabriela Mistral
         Pablo Neruda and Gabriela Mistral, Nobel Prize recipients in literature
         Chile is a country of poets.[172][173] Gabriela Mistral was the first Latin American to receive a Nobel Prize in Literature (1945). Chile's most famous poet is Pablo Neruda, who
          received the Nobel Prize for Literature (1971) and is world-renowned for his extensive library of works on romance, nature, and politics. His three highly personalized homes in
          Isla Negra, Santiago and Valparaíso are popular tourist destinations.

         Among the list of other Chilean poets are Carlos Pezoa Véliz, Vicente Huidobro, Gonzalo Rojas, Pablo de Rokha, Nicanor Parra and Raúl Zurita. Isabel Allende is the best-selling
         Chilean novelist, with 51 millions of her novels sold worldwide.[174] Novelist José Donoso's novel The Obscene Bird of Night is considered by critic Harold Bloom to be one of the
          canonical works of 20th-century Western literature. Another internationally recognized Chilean novelist and poet is Roberto Bolaño whose translations into English have had an
           excellent reception from the critics.[175][176][177]

         Cuisine

         Chilean asado and marraqueta
         Chilean cuisine is a reflection of the country's topographical variety, featuring an assortment of seafood, beef, fruits, and vegetables. Traditional recipes include asado, cazuela,
          empanadas, humitas, pastel de choclo, pastel de papas, curanto and sopaipillas.[178] Crudos is an example of the mixture of culinary contributions from the various ethnic
          influences in Chile. The raw minced llama, heavy use of shellfish and rice bread were taken from native Quechua Andean cuisine, (although now beef brought to Chile by Europeans
          is also used in place of the llama meat), lemon and onions were brought by the Spanish colonists, and the use of mayonnaise and yogurt was introduced by German immigrants, as was
           beer.

         Folklore
         The folklore of Chile, cultural and demographic characteristics of the country, is the result of mixture of Spanish and Amerindian elements that occurred during the colonial
         period. Due to cultural and historical reasons, they are classified and distinguished four major areas in the country: northern areas, central, southern and south. Most of the
         traditions of the culture of Chile have a festive purpose, but some, such as dances and ceremonies, have religious components.[citation needed]

         Mythology
         Main article: Chilean mythology
         Chilean mythology, is the mythology and beliefs of the Folklore of Chile.

         This includes Chilote mythology, Rapa Nui mythology and Mapuche mythology.

         Cinema
         Main article: Cinema of Chile
         The film originated in Valparaíso on 26 May 1902 with the premiere of the documentary Exercise General Fire Brigade, the first film completely filmed and processed in the country.
          In the following decades, marked milestones The deck of Death (or The Enigma of Lord Street) (1916), considered the first film Chilean story, The transmission of presidential
          (1920), the first animated film in the country, and North and South (1934), the first sound film of Chile.

         Sports
         Main article: Sport in Chile

         Estadio Nacional de Chile
         Chile's most popular sport is association football. Chile has appeared in nine FIFA World Cups which includes hosting the 1962 FIFA World Cup where the national football team
          finished third. Other results achieved by the national football team include two Copa América titles (2015 and 2016), and two runners up positions, one silver and two bronze
          medals at the Pan American Games, a bronze medal at the 2000 Summer Olympics and two third places finishes in the FIFA under-17 and under-20 youth tournaments. The top league
          in the Chilean football league system is the Chilean Primera División, which is named by the IFFHS as the ninth strongest national football league in the world.[179]

         The main football clubs are Colo-Colo, Universidad de Chile and Universidad Católica. Colo-Colo is the country's most successful football club, having both the most national and
         international championships, including the coveted Copa Libertadores South American club tournament. Universidad de Chile was the last international champion (Copa Sudamericana 2011).

         Tennis is Chile's most successful sport. Its national team won the World Team Cup clay tournament twice (2003 & 2004), and played the Davis Cup final against Italy in 1976. At
         the 2004 Summer Olympics the country captured gold and bronze in men's singles and gold in men's doubles. Marcelo Ríos became the first Latin American man to reach the number one
          spot in the ATP singles rankings in 1998. Anita Lizana won the US Open in 1937, becoming the first woman from Latin America to win a Grand Slam tournament. Luis Ayala was twice
          a runner-up at the French Open and both Ríos and Fernando González reached the Australian Open men's singles finals. González also won a silver medal in singles at the 2008
          Summer Olympics in Beijing.

         At the Summer Olympic Games Chile boasts a total of two gold medals (tennis), seven silver medals (athletics, equestrian, boxing, shooting and tennis) and four bronze medals
         (tennis, boxing and football). In 2012, Chile won its first Paralympic Games medal (gold in Athletics).


         The Chilean national polo team with President Michelle Bachelet and the trophy of the 2015 World Polo Championship.
         Rodeo is the country's national sport and is practiced in the more rural areas of the nation. A sport similar to hockey called chueca was played by the Mapuche people during the
          Spanish conquest. Skiing and snowboarding are practiced at ski centers located in the Central Andes, and in southern ski centers near to cities as Osorno, Puerto Varas, Temuco
          and Punta Arenas. surfing is popular at some coastal towns. Polo is professionally practiced within Chile, with the country achieving top prize in the 2008 and 2015 World Polo
           Championship.

         Basketball is a popular sport in which Chile has earned a bronze medal in the first men's FIBA World Championship held in 1950 and winning a second bronze medal when Chile hosted
         the 1959 FIBA World Championship. Chile hosted the first FIBA World Championship for Women in 1953 finishing the tournament with the silver medal. San Pedro de Atacama is host to
          the annual "Atacama Crossing", a six-stage, 250-kilometre (160 mi) footrace which annually attracts about 150 competitors from 35 countries. The Dakar Rally off-road automobile
           race has been held in both Chile and Argentina since 2009.

         Cultural heritage

         The historical district of the port city of Valparaíso
         The cultural heritage of Chile consists, first, of their intangible heritage, composed of various cultural events, such as visual arts, crafts, dances, holidays, cuisine, games,
         music and traditions, and, secondly, by its tangible, consists of those buildings, objects and sites of archaeological, architectural, traditional, artistic, ethnographic,
         folkloric, historical, religious or technological scattered through Chilean territory, among them, those goods are declared World Heritage Site by UNESCO, in accordance with
         the provisions of the Convention concerning the Protection of World Cultural and Natural Heritage of 1972, ratified by Chile in 1980. These cultural sites are the Rapa Nui
         National Park (1995), the Churches of Chiloé (2000), the historical district of the port city of Valparaíso (2003), Humberstone and Santa Laura Saltpeter Works (2005) and the
         mining city Sewell (2006).

         In 1999 the Cultural Heritage Day was established as a way to honour and commemorate Chiles cultural heritage. It is an official national holiday celebrated in May every year.

         See also
        }*/



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