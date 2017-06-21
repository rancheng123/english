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

    //��
    if(route == '/'){
        responseIndexPage(req, res);
    }
    //��̬��Դ
    else if(route.match(/\.(js|css|html|gif|jpg|jpeg|png|bmp|ico|txt|swf)/)){
        var source = path.resolve(current_path, root + route  );
        res.sendFile( source  );
    }
    //�ӿ�ת��
    else if(route.match(/^\/api\//)){
        request({
            headers: {"Connection": "close"},
            //����·��
            url: 'http://localhost:3000'+ route,
            method: req.method.toUpperCase(),
            json: true,
            body: req.body
        },function (error, response, data) {
            if (!error && response.statusCode == 200) {
                res.jsonp(data);
            }
        });

    }
    //ҳ��·��
    else{
        responseIndexPage(req, res)



        economic
        shock
    }


});





/*




 North Korea is being accused of parading fake weapons in its most recent show of military might.
 A former US Army intelligence officer says some of the guns and missiles on show were not real.
 Michael Pregent told right-wing TV network Fox News that some of the guns on display were "laughable".
 But pretend displays of strength have been used in warfare for decades - and effectively in many cases.
 "Tensions are particularly inflamed at the moment because of Trump," explains James Hannah, assistant head of the Asia Programme at Chatham House.




 That's because the US president has vowed to "solve" the North Korean nuclear threat.
 "Fake small arms are one thing but we know there are over a million soldiers in North Korea.
 "It's not that North Korea thinks it would defeat the US but a question of what they might do if attacked.
 "Some of the missiles demonstrated some sort of new capacity."
 Real or not, he says, these "sow the seed of 'we're on this road, we can't be stopped and we're not scared of you.'"
 A rich heritage of fakery
 This drawing from the National Archives shows plans for a tank seemingly made from bamboo canes and canvas.



 It's British and the diagrams come from the intriguingly named "Camouflage School".
 This was a centre for officers to learn techniques of concealment in World War One.
 This kind of phoney military hardware was designed to combat aerial bombardments,
 tricking enemy pilots into targeting fake tanks rather than anything of value.
 Large-scale strategic camouflage was also used to hide key landmarks which pilots might use for navigation.



*/