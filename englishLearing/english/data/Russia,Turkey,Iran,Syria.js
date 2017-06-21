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
        stricrate
    }


});





The Russia-backed plan calls for a ceasefire
Russia, the US, Turkey, Iran and Syria are close to agreeing the establishment of "safe zones"
in Syria aimed at ensuring the viability of a ceasefire, Vladimir Putin says.
    The Russian president said they would amount to no-fly zones.
    Mr Putin said his US counterpart Donald Trump had told him in a phone call on Tuesday that he supported the idea.
    A final decision must be made at Syria talks currently taking place in the Kazakh capital Astana, Mr Putin said.
    However, Syrian rebels say they have suspended participation in the Astana talks because of continuing air strikes.
    Why is there a war in Syria?
    The Russian plan calls for safe zones to be established in rebel-held territory in the north-western province of Idlib,
in parts of Homs province in the centre, in the south and in the opposition enclave of Eastern Ghouta near Damascus,
    the AFP news agency reported citing a copy of the plan.
    The safe zones would end violence and allow for the return of refugees and the delivery of aid.
    They would be surrounded by checkpoints manned by rebels and government troops.
    Foreign troops could also be deployed in observer roles, the document said.







    What began as a peaceful uprising against Syria's President Bashar al-Assad six years ago ' +
'became a full-scale civil war that has left more than 300,000 people dead, devastated the country ' +
'and drawn in global powers.
How did the war begin?
    Long before the conflict began, many Syrians complained about high unemployment, widespread corruption, a lack of political freedom and state repression under President Bashar al-Assad, who succeeded his father, Hafez, in 2000.
In March 2011, pro-democracy demonstrations inspired by the Arab Spring erupted in the southern city of Deraa. The government's use of deadly force to crush the dissent soon triggered nationwide protests demanding the president's resignation.








    rotests in the southern city of Deraa in March 2011 were suppressed by security forces
As the unrest spread, the crackdown intensified. Opposition supporters began to take up arms, first to defend themselves and later to expel security forces from their local areas. Mr Assad vowed to crush "foreign-backed terrorism" and restore state control.
    Image copyrightREUTERS
Image caption
The city of Homs, dubbed "the capital of the revolution" suffered widespread destruction
The violence rapidly escalated and the country descended into civil war as hundreds of rebel brigades were formed to battle government forces for control of the country.
    Why has the war lasted so long?
    Image copyrightAP
Image caption
Government forces have lost control of large swathes of the country to various armed groups
In essence, it has become more than just a battle between those for or against Mr Assad.
    A key factor has been the intervention of regional and world powers, including Iran, Russia, Saudi Arabia and the United States. Their military, financial and political support for the government and opposition has contributed directly to the intensification and continuation of the fighting, and turned Syria into a proxy battleground.
    External powers have also been accused of fostering sectarianism in what was a broadly secular state, pitching the country's Sunni majority against the president's Shia Alawite sect. Such divisions have encouraged both sides to commit atrocities that have not only caused loss of life but also torn apart communities, hardened positions and dimmed hopes for a political settlement.
