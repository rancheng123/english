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



/*
 长途跋涉;远距离行走
 寿命; 存在期; 使用期; 有效期;
 战略性的; 战略（上）的; 有战略意义的; 至关重要的;
 喉的，颈的
 静脉;脉络;血管
 使负债，
 负债的;
 完全地; 彻底地;
 股权;股份
 股东; 股票持有者;
 回归线; 热带，热带地方;
 比利时



 整齐的，有秩序的; 有组织的，有规则的;
 从根基处破坏; 挖…的墙脚;
 争抢，争夺，抢夺;
 规范;标准，准则;
 名义上的; 名字的，列名的;
 完全所有权，土地所有权;
 严峻的; 严厉的; 剧烈的; 苛刻的;


 自主权; 自治，自治权; 自治国，
 分裂，分散; 崩裂;
 部分地; 一部分
 造成（威胁、问题等）; 引起; 产生;
 都市;
 整体，全面; 作为一个整体;
 对手; 敌手; 反对者;对立的; 敌对的;
 伸展; 延伸;伸展; 弹性; 可伸缩的; 弹性的;
 [军] 师
 战后的
 泄露; 暴露; 揭发;
 入伍; 征募;
 志愿者,自愿的，志愿的;
 影响

--------------------------------------


 知觉; 觉悟; 意识，观念; 感觉;
 分水岭; 转折点;
 柜橱; 内阁;内阁的;
 程度; 长度; 广大地域; 扣押;
 托管;委托,委托办理;
 巴勒斯坦
 喀麦隆
 顶峰，山峰; 最高点;
 评定;评定； 估价
 使结盟


 平等,同等，;
 辩论; 辩论; 争论; 讨论;
 军国主义的;
 同时的; 同时发生的，同时存在的; 同声翻译
 至关重要的; 维持生命所必需的; 生死攸关的;
 耽搁; 延迟，拖延;
 僵局;使陷入僵局;


 由…组成
 共产主义者，共产主义的支持者; 共产党党员;
 一块地，区域
 约束;
 大屠杀，成批屠宰，残杀


 道德; 道德观; 道德准则; 品德高尚的行为;
 混乱; 无政府状态; 无秩序;
 使极其厌恶，激起…的强烈反感;
 炖; 煮
 受保护国，受保护领地;



 面对，面临
 调停，调解，斡旋;借助第三方参与 达成和解，间接的;
 决定,（使） 下决心，（使）做出决定;
 受托者;受委托的;
 站姿，态度，立场;
 暴动; 起义; 叛变;
 束缚,限制
 自治的; 有自主权的; [生，植] 自发的;
 部属; 部下，下级; 使服从; 使从属;
 立法的; 立法决定的; 有权立法的，
 使抵消; 使无效;
 恢复; 使恢复原状;
 纳粹主义
 中立的; （化学中） 中性的;


 游说，说服
 珍珠;
 不可更改地，不可挽回地，不可反转地;
 身份，地位;
 声誉; 威信，威望，声望
 堡垒，要塞;
 攻不破的，坚不可摧的;
 公约; 条约，公约;
 破产的，倒闭的; 枯竭的;垮了的;使破产，使枯竭，使极端贫困;

 破产; 无力偿付债务; 倒闭; 无偿债能力;
 防止，避免;
 分期付款;
 使复杂化;复杂的; 麻烦的;
 共产主义; 共产主义制度;


 获胜，占优势;
 在控制中，被阻止，
 不再从事.. , 脱离
 工资;支付工资
 完好无损; 未受损伤的;


 然而; 但是; 反之;
 紧迫; 急迫; 急事; 紧要;
 （代表国王管辖行省或殖民地等的） 总督;
 少数; 少数民族; 未成年;  minority
 反之亦然; 反过来也一样;
 斯里兰卡
 多数;
 大屠杀; 浩劫; 毁灭
 抵抗; 抗力;
 橡胶; 橡皮; 避孕套
 锡; 镀锡，包锡;;
 起义，暴动;
 消除; 减轻; 压制，镇压;
 后果; 余波;
 运河，沟渠; 管道; 气管; 食道;
 怨恨; 恶意;
 虽然， 尽管…
 片面的; 单边的，一方的;
 借口,辩解,作为借口;
 干预，介入，干涉
 储备 ，保留;
 由此，由于这个原因
 使蒙羞，使丢脸，使出丑; 屈辱，羞辱;
 从今以后，今后;
 默认，默许;不说话的同意
 伤害
 降临到（某人）头上
 （使） 贬值;
 人员，员工; 人事部门;
 总理，首相的职位与任期;
 将…再次（重新）分类;
 （使） 散开，（使）分散，驱散;撒布
 长期存在的; 存在已久的;
 向下的，往下的;
 出租; 租借;
 过期，到期，去世
 交接; 移交
 包含，包括; 由…组成; 由…构成;
 起源于
 占优势的; 统治的，支配的;
 发挥; 运用;
 法令，法规; 规则，条例;
 拘束; 抑制，克制; 控制，限制; 约束力;
 难和解的; 难平息的; 仇恨深的; 不能改变的;


 */


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




var router = express.Router();
var count = 0;
var root = '../../frontEnd/qianjia/dist/';
router.get('/*', function(req, res){
    var route = req.url.split('?')[0];
    if(route == '/'){
        responseIndexPage(req, res);
    }
    else if(route.match(/\.(js|css|html|gif|jpg|jpeg|png|bmp|ico|txt|swf)/)){
        var source = path.resolve(current_path, root + route  );
        res.sendFile( source  );
    }

    else if(route.match(/^\/api\//)){
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
                res.jsonp(data)

            }
        });

        /*

         */

        var arr = $('.lie_right_center li').map(function(i,ele){
            return {
                builderName: $(ele).find('a').text(),
                programName: $(ele).find('tr').eq(0).find('td').eq(0).text(),
                programTime:$(ele).find('tr').eq(1).find('td').eq(0).text().substring(8)
            }
        })

        var json = {};
        $.each(arr,function(i,ele){
            //debugger
            if(!json[ele.builderName]){
                json[ele.builderName] = [];
            }
            json[ele.builderName].push(ele.programName)
        })
        console.log(JSON.stringify(json))


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

        /*var json = {
            33: {
                name: 'aaa',
                    program: {

            }
            }
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