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

     Hertfordshire？？



     Bingley
     Miss Caroline Bingley
     Mr. Darcy  -->
        Colonel Fitzwilliam



     Sir William Lucas
     Miss Lucas( Charlotte Lucas )

     Bennet  (Netherfield, Meryton, Longbourn)

         Mrs. Bennet
            sister  Mrs. Gardiner

         Jane
         Elizabeth
         Mary
        Catherine
        Lydia

        relatives
            Mrs. Philips



            Mr. Collins （Hunsford ）
                Lady Catherine de Bourgh
                Miss Catherine de Bourgh
                Mrs.Jenkinson



     Mr. Denny
     Mr. Wickham





     diminution  abide  resign放弃; 屈从;  discreditable  man-servant  repent  chagrin  giddiness  weak-spirited  self-willed  careless  vain无用的  implicitness
     replete  promising  packing  urgent  trunk  afresh
     indispensably  domestic佣人,仆人  spring发源  trunk行李箱  parcel  consternation
     appoint约定  inn  coachman  milliner  sentinel  sallad  cucumber  larder  satin  encamp  papa  Mamma  campful  overset

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

                    $('body').html('');
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
                    console.log(res);


                }
            });

        }
        anaysis(10000,100000)s
       // anaysis(100000,10000000000)
        describe('removeHeaders', function() {
            indulgance
            before(function() {
                cors_anywhere = createServer({
                    removeHeaders: ['cookie', 'cookie2'],
                });
                cors_anywhere_port = cors_anywhere.listen(0).address().port;
            });
            after(stopServer);
            disoblige.mature = function(){
            /*
                reform health,language,mind
             */
            }

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
            /*
            chapter 39


             "Now I have got some news for you," said Lydia, as they sat down to table. "What do you think? It is excellent news, capital news, and about a certain person that we all like."
             Jane and Elizabeth looked at each other, and the waiter was told that he need not stay. Lydia laughed, and said, "Aye, that is just like your formality and discretion. You thought
             the waiter must not hear, as if he cared! I dare say he often hears worse things said than I am going to say. But he is an ugly fellow! I am glad he is gone. I never saw such a
             long chin in my life. Well, but now for my news: it is about dear Wickham; too good for the waiter, is not it? There is no danger of Wickham's marrying Mary King. There's for you!
             She is gone down to her uncle at Liverpool; gone to stay. Wickham is safe."
             "And Mary King is safe!" added Elizabeth; "safe from a connection imprudent as to fortune."
             "She is a great fool for going away, if she liked him."
             "But I hope there is no strong attachment on either side," said Jane.
             "I am sure there is not on his. I will answer for it he never cared three straws about her. Who could about such a nasty little freckled thing?"
             Elizabeth was shocked to think that, however incapable of such coarseness of expression herself, the coarseness of the sentiment was little other than her own breast had formerly
              harboured and fancied liberal!
             As soon as all had ate, and the elder ones paid, the carriage was ordered; and, after some contrivance, the whole party, with all their boxes, workbags, and parcels, and the
             unwelcome addition of Kitty's and Lydia's purchases, were seated in it.
             "How nicely we are crammed in!" cried Lydia. "I am glad I bought my bonnet, if it is only for the fun of having another bandbox! Well, now let us be quite comfortable and snug,
             and talk and laugh all the way home. And in the first place, let us hear what has happened to you all, since you went away. Have you seen any pleasant men? Have you had any flirting?
              I was in great hopes that one of you would have got a husband before you came back. Jane will be quite an old maid soon, I declare. She is almost three and twenty! Lord, how ashamed
              I should be of not being married before three and twenty! My aunt Philips wants you so to get husbands, you can't think. She says Lizzy had better have taken Mr. Collins; but I do
              not think there would have been any fun in it. Lord! how I should like to be married before any of you; and then I would chaperon you about to all the balls. Dear me! we had such a
              good piece of fun the other day at Colonel Foster's. Kitty and me were to spend the day there, and Mrs. Forster promised to have a little dance in the evening (by the bye, Mrs. Forster
               and me are such friends!); and so she asked the two Harringtons to come, but Harriet was ill, and so Pen was forced to come by herself; and then, what do you think we did? We dressed
                up Chamberlayne in woman's clothes, on purpose to pass for a lady, -- only think what fun! Not a soul knew of it but Col. and Mrs. Forster, and Kitty and me, except my aunt, for we
                 were forced to borrow one of her gowns; and you cannot imagine how well he looked! When Denny, and Wickham, and Pratt, and two or three more of the men came in, they did not know
                 him in the least. Lord! how I laughed! and so did Mrs. Forster. I thought I should have died. And that made the men suspect something, and then they soon found out what was the
                 matter."
             With such kind of histories of their parties and good jokes did Lydia, assisted by Kitty's hints and additions, endeavour to amuse her companions all the way to Longbourn. Elizabeth
             listened as little as she could, but there was no escaping the frequent mention of Wickham's name.
             Their reception at home was most kind. Mrs. Bennet rejoiced to see Jane in undiminished beauty; and more than once during dinner did Mr. Bennet say voluntarily to Elizabeth,
             "I am glad you are come back, Lizzy."
             Their party in the dining-room was large, for almost all the Lucases came to meet Maria and hear the news: and various were the subjects which occupied them. Lady Lucas was enquiring
              of Maria, across the table, after the welfare and poultry of her eldest daughter; Mrs. Bennet was doubly engaged, on one hand collecting an account of the present fashions from Jane,
               who sat some way below her, and on the other, retailing them all to the younger Miss Lucases; and Lydia, in a voice rather louder than any other person's, was enumerating the
               various pleasures of the morning to any body who would hear her.
             "Oh! Mary," said she, "I wish you had gone with us, for we had such fun! as we went along, Kitty and me drew up all the blinds, and pretended there was nobody in the coach; and I
             should have gone so all the way, if Kitty had not been sick; and when we got to the George, I do think we behaved very handsomely, for we treated the other three with the nicest
             cold luncheon in the world, and if you would have gone, we would have treated you too. And then when we came away it was such fun! I thought we never should have got into the coach.
              I was ready to die of laughter. And then we were so merry all the way home! we talked and laughed so loud, that any body might have heard us ten miles off!"
             To this, Mary very gravely replied, "Far be it from me, my dear sister, to depreciate such pleasures. They would doubtless be congenial with the generality of female minds. But I
             confess they would have no charms for me. I should infinitely prefer a book."
             But of this answer Lydia heard not a word. She seldom listened to any body for more than half a minute, and never attended to Mary at all.
             In the afternoon Lydia was urgent with the rest of the girls to walk to Meryton, and see how every body went on; but Elizabeth steadily opposed the scheme. It should not be said,
             that the Miss Bennets could not be at home half a day before they were in pursuit of the officers. There was another reason too, for her opposition. She dreaded seeing Wickham
             again, and was resolved to avoid it as long as possible. The comfort to her of the regiment's approaching removal was indeed beyond expression. In a fortnight they were to go, and
             once gone, she hoped there could be nothing more to plague her on his account.
             She had not been many hours at home, before she found that the Brighton scheme, of which Lydia had given them a hint at the inn, was under frequent discussion between her parents.
             Elizabeth saw directly that her father had not the smallest intention of yielding; but his answers were at the same time so vague and equivocal, that her mother, though often
             disheartened, had never yet despaired of succeeding at last.

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

            }
        });


        var cors_proxy = require('./lib/cors-anywhere');
        cors_proxy.createServer({
            originBlacklist: originBlacklist,
            originWhitelist: originWhitelist,
            requireHeader: ['origin', 'x-requested-with'],
            checkRateLimit: checkRateLimit,
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
            /*
             
             */
            httpProxyOptions: {
                xfwd: false,
            },
        }).listen(port, host, function() {
            console.log('Running CORS Anywhere on ' + host + ':' + port);
        });




        /*

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
 eloquent 有口才的; 有说明力的;

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