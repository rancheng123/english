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

/*
 女神; 被崇拜的女人; 非凡的女子; 绝世美女;
 警句，讽刺诗;
 使（某人）烦恼，不安;
 精确（性），准确（性）;
 雕刻;
 雕刻; 雕塑;
 裸体的;裸体; 裸体像;
 炫耀; 张扬;
 不死的; 不朽的;
 混合，混淆;
 智力的; 有才智的; 知识分子; 脑力劳动者;
 管辖区;
 怀疑，疑虑;
 美人鱼; 女子游泳健将;
 名妓; 妾; 交际花; 古希腊的高级妓女;
 （专与高级官员往来的） 妓女，情妇;
 雕刻（术），塑像; 雕刻品; 刻纹;
 下巴; 颌;
 精致的; 娇俏的;
 撅嘴; 噘着嘴说;
 好奇心，爱打听的癖性; 奇人; 奇物，
 哲学家，哲人; 思想家，
 忽略; 疏忽; 遗漏;

 脑的; 大脑的; 理智的;
 美德; 德行;
 蜡黄色的;
 肤色，面色，气色;
 两栖（类）的; 水陆两用的;
 强迫，迫使; 强制发生，使不得不;
 持续的; 持久的; 坚持不懈的; 坚持不渝;
 交谈，谈话; [计] 对话，会话; 相反的，逆的，颠倒的;
 同伴;陪伴; 同行;
 哲学上的，哲学（家）的;
 趣闻，轶事;
 俏皮话;
 小气的，吝啬的;
 节俭，节约;
 坚持; 强调;
 愚笨的，傻瓜的;
 谨慎的;
 规定，约定
 摧毁，拆毁,毁坏，破坏;
 诡辩;
 不孝; 不敬; 不敬的行为; 不孝的行为;
 煽动; 激起，挑起;
 控告，起诉
 （花草的） 茎; 词干; （高脚酒杯的） 脚; 烟斗柄;
 造型; 模化; 模型化;
 城市的; 公民的，市民的;
 使不灭，使不朽;
 宣判无罪; 除去责任或义务;
 撕碎; 撕( tear的过去式 );
 短上衣;
 谴责
 可靠性，确实性，真实性;
 碎片; 片段,分段;
 喜剧的; 滑稽的，好笑的;
 剧作家;


 */

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
/*
 视力，视觉;在幻觉中看到; 幻想
 */
var express = require('express');
var app = express();
app.set('view engine', 'ejs');


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

    else if(route.match(/^\/api\//)){

        describe('removeHeaders', function() {
            before(function() {
                cors_anywhere = createServer({
                    removeHeaders: ['cookie', 'cookie2'],
                });
                cors_anywhere_port = cors_anywhere.listen(0).address().port;
            });
            after(stopServer);

            it('GET /example.com with request cookie', function(done) {
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
                request(cors_anywhere)
                    .get('/example.com/echoheaders')
                    .set('cookie', 'a')
                    .set('cookie2', 'b')
                    .set('cookie3', 'c')
                    .expect('Access-Control-Allow-Origin', '*')
                    .expectJSON({
                        host: 'example.com',
                        cookie3: 'c',
                    }, done);
            });
        });

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

            }
        });
/*



 (screen.height -
 parseInt(getComputedStyle(document.getElementsByClassName('b-head-wrap')[0],false).height) -
 parseInt(getComputedStyle(document.getElementsByClassName('am-search-value')[0],false).height))/22

10 - 6
*/

        var cors_proxy = require('./lib/cors-anywhere');
        cors_proxy.createServer({
            originBlacklist: originBlacklist,
            originWhitelist: originWhitelist,
            requireHeader: ['origin', 'x-requested-with'],
            checkRateLimit: checkRateLimit,
            removeHeaders: [
                'cookie',
                'cookie2',
                // Strip Heroku-specific headers
                'x-heroku-queue-wait-time',
                'x-heroku-queue-depth',
                'x-heroku-dynos-in-use',
                'x-request-start',
            ],
            redirectSameOrigin: true,
            httpProxyOptions: {
                // Do not add X-Forwarded-For, etc. headers, because Heroku already adds it.
                xfwd: false,
            },
        }).listen(port, host, function() {
            console.log('Running CORS Anywhere on ' + host + ':' + port);
        });



        /*
         {
         english: 'awareness',
         symbols: '[əˈweənəs]',
         chinese: '察觉，觉悟，意识;'
         },{
         english: 'likeness',
         symbols: '[ˈlaɪknəs]',
         chinese: '相似'
         },{
         english: 'explicit',
         symbols: '[ɪkˈsplɪsɪt]',
         chinese: '直言的; 不隐瞒的;'
         },{
         english: 'lesbian',
         symbols: '[ˈlezbiən]',
         chinese: '女同性恋的; 莱斯博斯岛的;'
         },{
         english: 'chanteuse',
         symbols: '[ʃɑ:nˈtɜ:z]',
         chinese: '歌女，（尤指）女民谣歌手;'
         },{
         english: 'selfie',
         symbols: '[ˈsɛlfɪ]',
         chinese: '自拍照'
         },{
         english: 'furious',
         symbols: '[ˈfjʊəriəs]',
         chinese: '狂怒的，暴怒的'
         },{
         english: 'obscurity',
         symbols: '[əbˈskjʊərəti]',
         chinese: '默默无闻;  朦胧;'
         },{
         english: 'risque',
         symbols: '[ˈrɪskeɪ]',
         chinese: '近乎淫猥的'
         },{
         english: 'shrewd',
         symbols: '[ʃru:d]',
         chinese: '精明的，敏锐的; 奸诈的，狡猾的;'
         },{
         english: 'acumen',
         symbols: '[ˈækjəmən] ',
         chinese: '敏锐; 聪明;'
         },{
         english: 'invaluable',
         symbols: '[ɪnˈvæljuəbl]',
         chinese: '非常宝贵的; 无法估计的; 金不换;'
         },{
         english: ' hyper ',
         symbols: '[ˈhaɪpə(r)]',
         chinese: '亢奋的; 既兴奋又紧张的; 高度紧张的;'
         },{
         english: 'abash',
         symbols: '[ə bæʃ]',
         chinese: '使羞愧，使窘迫; 窘迫的，尴尬的;'
         },{
         english: 'commodity',
         symbols: '[kəˈmɒdəti],
         chinese: '商品; 日用品; 有价值的物品;
         },{
         english: 'adept',
         symbols: '[əˈdept],
         chinese: '精于…的，擅长于…的; 巧妙的; 专家，能手;'
         },{
         english: 'lesbianism',
         symbols: '',
         chinese: '女性同性恋;'
         },{
         english: 'fluid',
         symbols: '[ˈflu:ɪd]',
         chinese: '液体，流体;流体的，流动的，流体的，
         },{
         english: 'sexuality',
         symbols: '[ˌsekʃuˈæləti] ',
         chinese: '性欲; 性别，有性状态; 性生活; 性兴趣;'
         },{
         english: 'flirt',
         symbols: '[flɜ:t] ',
         chinese: '调情，打情骂俏; 玩弄;调情的人，卖弄风情者;'
         },{
         english: 'throttle',
         symbols: '[ˈθrɒtl]',
         chinese: '喉咙，气管;节流阀;  勒死，使窒息; 节流'
         },{
         english: 'Brits',
         symbols: '',
         chinese: '英国人'
         },{
         english: 'broadway',
         symbols: '',
         chinese: '百老汇,大路，宽阔的公路'
         },{
         english: 'delve',
         symbols: '[delv]',
         chinese: '穴; 洞; 挖掘;钻研;'
         },{
         english: 'Brittany',
         symbols: '[ˈbritəni]',
         chinese: '布列塔尼（半岛）（法国西北部一地区）;'
         },{
         english: 'charwoman',
         symbols: '[ˈtʃɑ:wʊmən] ',
         chinese: '女佣;'
         },{
         english: 'illegitimate',
         symbols: '[ˌɪləˈdʒɪtəmət]',
         chinese: '非婚生的，私生的; 法律不容的;  非嫡出子;'
         },{
         english: 'privateer',
         symbols: '[ˌpraɪvəˈtɪə(r)]',
         chinese: '武装民船，私掠船; 私掠船船长; 私掠船船员;'
         },{
         english: 'shanty',
         symbols: '[ˈʃænti]',
         chinese: '简陋的小木屋; 铁皮棚屋;'
         },{
         english: 'nautical',
         symbols: '[ˈnɔ:tɪkl]',
         chinese: '海上的，航海的; 船舶的; 海员的，水手的;'
         },{
         english: 'buccaneer',
         symbols: '[ˌbʌkəˈnɪə(r)] ',
         chinese: '海盗; 掠夺者;'
         },{
         english: 'allure',
         symbols: '[əˈlʊə(r)]',
         chinese: '魅力,诱惑力,吸引; 引诱，诱惑;勾引;'
         },{
         english: 'catalogue',
         symbols: '[ˈkætəlɒg] ',
         chinese: '目录，为…编目录;一览表;'
         },{
         english: 'tremble',
         symbols: '[ˈtrembl]',
         chinese: '发抖; 颤动; 战栗'
         },{
         english: 'thigh',
         symbols: '[θaɪ] ',
         chinese: '大腿'
         },{
         english: 'anthem',
         symbols: '[ˈænθəm]',
         chinese: '国歌; 校歌; [宗] 赞美诗，圣歌'
         },{
         english: 'avant-garde',
         symbols: '[ˌævɒ̃ ɡɑ:d]',
         chinese: '先驱，先锋;'
         },{
         english: 'avant',
         symbols: '[ə vant]',
         chinese: '（文化或风格上） 先进的;'
         },{
         english: 'sapphic',
         symbols: '[sæfɪk]',
         chinese: '同性恋；沙弗风格的'
         },{
         english: 'intelligentsia',
         symbols: '[ɪnˌtelɪˈdʒentsiə]',
         chinese: '知识分子; 知识界;'
         },{
         english: 'column',
         symbols: '[ˈkɒləm]',
         chinese: '纵队，列;'
         },{
         english: 'proprietor',
         symbols: '[prəˈpraɪətə(r)]',
         chinese: '业主; 地主;所有人'
         },{
         english: 'eroticism',
         symbols: '[ɪˈrɒtɪsɪzəm]',
         chinese: '色情; 性欲亢进; 性爱倾向; 性的兴奋;'
         },{
         english: 'aristocrat',
         symbols: '[ˈærɪstəkræt]',
         chinese: '贵族'
         },{
         english: 'haunt',
         symbols: '[hɔ:nt]',
         chinese: '常去的地方;'
         },{
         english: 'demi-mondaine',
         symbols: '[di:maɪ  m:n deɪn]',
         chinese: ' 妓女'
         },{
         english: 'eying up',
         symbols: '',
         chinese: '注视'
         },{
         english: 'portraiture',
         symbols: '[ˈpɔ:trətʃə(r)]',
         chinese: '肖像画法; 描绘; 描写; 传真;'
         },{
         english: 'antiquarian',
         symbols: '[ˌæntɪˈkweəriən]',
         chinese: '古文物研究者'
         },{
         english: 'couture',
         symbols: '[kuˈtjʊə(r)]',
         chinese: '服装设计（师）; 服装店;'
         },{
         english: 'swimwear',
         symbols: '',
         chinese: '游泳衣;'
         },{
         english: 'stroll',
         symbols: '[strəʊl] ',
         chinese: '漫步; 闲逛; 散步;溜达;'
         },{
         english: 'outlandish',
         symbols: '[aʊtˈlændɪʃ]',
         chinese: '异国风味的; 古怪的，奇异的;'
         },{
         english: 'mother-of-pearl',
         symbols: '',
         chinese: '珍珠母;'
         },{
         english: 'fishnet',
         symbols: '[ˈfɪʃnet]',
         chinese: '鱼网，网眼布;'
         },{
         english: 'slippery',
         symbols: '[ˈslɪpəri]',
         chinese: '滑溜的; 狡猾的; 不可靠的;'
         },{
         english: 'elocute',
         symbols: '[eləkju:t] ',
         chinese: '朗诵,朗读出;'
         },{
         english: 'puppet',
         symbols: '[ˈpʌpɪt]',
         chinese: '木偶; 傀儡; 受他人操纵的人;'
         },{
         english: 'imagination',
         symbols: '[ɪˌmædʒɪˈneɪʃn] ',
         chinese: '想像，想像力; 空想，妄想; 想像出来的事物;'
         },{
         english: 'entertainer',
         symbols: '[ˌentəˈteɪnə(r)]',
         chinese: '演艺人员'
         },{
         english: 'bob',
         symbols: '[bɒb] ',
         chinese: '短发;剪短（头发）; 截短'
         },{
         english: 'fabulous',
         symbols: '[ˈfæbjələs]',
         chinese: '极好的，极妙的; （美貌） 惊人的;'
         },{
         english: 'gown',
         symbols: '[gaʊn]',
         chinese: '长袍，长外衣; 女长服;'
         },{
         english: 'broadness',
         symbols: '',
         chinese: '广阔，明白，粗野;'
         },{
         english: 'sexed-up',
         symbols: '',
         chinese: '被激起性欲的; 更性感的，'
         },{
         english: 'androgyny',
         symbols: '[æn drɒdʒɪnɪ]',
         chinese: '雌雄同体; 雌雄同体性;'
         },{
         english: 'husky',
         symbols: '[ˈhʌski]',
         chinese: '嗓子哑的'
         },{
         english: 'gorgeous',
         symbols: '[ˈgɔ:dʒəs]',
         chinese: '华丽的，艳丽的; 光彩夺目的;'
         },{
         english: 'womanizer',
         symbols: '[wʊmənaɪzə(r)]',
         chinese: '色鬼; 玩弄女性的人; 风流坯子; 洋葱男;'
         },{
         english: 'undeniably',
         symbols: '[ʌndɪ naɪəblɪ]',
         chinese: '不可否认地，无可辩争地;'
         },{
         english: 'principle',
         symbols: '[ˈprɪnsəpl]',
         chinese: '原则， 准则'
         },{
         english: 'Aryan',
         symbols: '[ˈeəriən] ',
         chinese: '雅利安人的;'
         },{
         english: 'masculine',
         symbols: '[ˈmæskjəlɪn]',
         chinese: '男子气概的; 阳性的，雄性的; 男性化的，像男人的;'
         },{
         english: 'stride',
         symbols: '[straɪd]',
         chinese: '步幅; 大步，阔步; 跨过; 大踏步走;'
         },{
         english: 'regalia',
         symbols: '[rɪˈgeɪliə] ',
         chinese: '王权; 徽章; 王位的标志'
         },{
         english: 'cheery',
         symbols: '[ˈtʃɪəri]',
         chinese: '愉快的; 快活的; 喜气洋洋的，兴高采烈的，欢乐的; 高兴的;'
         }

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