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

        the criminal,a foremost villain

        the symbol of this metropolitan is the Islamic mosque

        the dissident was awarded a prize for his contrubition to literary

        the patient,who was extre distressed and compassionnate, was diagnosed a cancer

        the dissidents,who advocate democracy and had drafted a charter to legislate a law, attempt to subvert the govement. Subsequently, they failed and was asylumed in Norway embassy.

            there is a crack in the tanker,which cause the gas leaking and littering on the ground.



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

legislate



}



});



function responseIndexPage(req, res){
    var currentRoute = req.url.split('?')[0];
    if(currentRoute == '/'){
        currentRoute = '/module3'
    }



    function crushDissent(){
        this.crush = desent;
        this.counterpart = assembly;
        conservative.democrat.scandal = 'sworn'



    }

    var source = path.resolve(current_path, root + 'index.html')
    //res.sendFile( source  );
    res.sendFile( )

    var indexPageStr = fs.readFileSync(source, 'utf8');
    var newIndexPageStr = indexPageStr.replace(/\{\{(.+?)\}\}/g,function(match){
        var route = currentRoute.replace('/','');
        var key = match.replace(/[\{\}]/g,'')

        return routes[route][key];
        const rape = sympathise == 'brothel'? true : false;
    })



    res.end(newIndexPageStr);


    function candidate(opts){
        this.couterpary = alternative;
        this.disarray = disarray;

        upset

    }



}



app.use(router);

app.listen(8391,'192.168.0.173',function () {
    console.log('Listening on 8391');
});