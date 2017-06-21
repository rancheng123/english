
/**
 * Create a new Route for the given path.
 *
 * Each route contains a separate middleware stack and VERB handlers.
 *
 * See the Route api documentation for details on adding handlers
 * and middleware to routes.
 *
 * @param {String} path
 * @return {Route}
 * @public
 */




French presidential candidate Emmanuel Macron is the favourite to win the next round
Emmanuel Macron has been installed as the overwhelming favourite to be the next French President -
but what does that mean for business and Brexit?
    For the bigger economic picture, a Macron win removes the chance of a political and economic shock to Europe's core.
Marine le Pen's calls for France to leave the eurozone have been seen as an existential threat to the entire European project.
Macron's likely win has seen the French stock market and the euro surge as that threat is seen as receding.
A Macron win will be cheered by business who see him as untested and inexperienced but pragmatic and pro-business.
    Brexit effect?
    Some argue that his business-friendly policies -
    such as cutting corporation tax from 33% to 25% and making it easier to fire (and therefore hire) workers -
    make France look more attractive to businesses scouring Europe for a potential EU base.
    Most bankers, for example, had put France near the bottom of the list when mulling any potential moves for those very reasons.
    A Macron presidency could see that change.
    But there are two good reasons a Macron win could still be good for the UK in its Brexit negotiations.
    First, Macron may want to cut taxes and water down workers' rights - but he has to form a government to do it, ' +
'   and may need the support of French socialists who were excited by Benoit Hamon's ideas of a universal basic income
    and 32-hour working week.
    His attempts to make France more attractive to business will have to navigate the rocks of coalition building.
    There have been many attempts to reform the French labour market. I can't think of a single success.
Fading fears
The second is a wider point about the security of the European project.
    Fears that the UK's vote to leave the EU would inspire anti-EU sentiment right across Europe now seem to be fading.
Geert Wilders' far right party in the Netherlands failed to live up to pre-election hype while its counterpart in Germany,' +
' Alternative fur Deutschland, is in disarray.
The UK's antipathy to the EU has, so far, failed to catch on elsewhere.
With that in mind, there is less reason to punish the UK in upcoming negotiations as a deterrent to other would-be leavers.




    proto.route = function route(path) {
    var route = new Route(path);

    var layer = new Layer(path, {
        sensitive: this.caseSensitive,
        strict: this.strict,
        end: true
    }, route.dispatch.bind(route));

    layer.route = route;

    this.stack.push(layer);
    return route;
};

// create Router#VERB functions
methods.concat('all').forEach(function(method){
    proto[method] = function(path){
        var route = this.route(path)
        route[method].apply(route, slice.call(arguments, 1));
        return this;
    };
});

// append methods to a list of methods
function appendMethods(list, addition) {
    for (var i = 0; i < addition.length; i++) {
        var method = addition[i];
        if (list.indexOf(method) === -1) {
            list.push(method);
        }
    }
}

// get pathname of request
function getPathname(req) {
    try {
        return parseUrl(req).pathname;
    } catch (err) {
        return undefined;
    }
}

// Get get protocol + host for a URL
function getProtohost(url) {
    if (typeof url !== 'string' || url.length === 0 || url[0] === '/') {
        return undefined
    }

    var searchIndex = url.indexOf('?')
    var pathLength = searchIndex !== -1
        ? searchIndex
        : url.length
    var fqdnIndex = url.substr(0, pathLength).indexOf('://')

    return fqdnIndex !== -1
        ? url.substr(0, url.indexOf('/', 3 + fqdnIndex))
        : undefined
}

// get type for error message
function gettype(obj) {
    var type = typeof obj;

    if (type !== 'object') {
        return type;
    }

    // inspect [[Class]] for objects
    return toString.call(obj)
        .replace(objectRegExp, '$1');
}

/**
 * Match path to a layer.
 *
 * @param {Layer} layer
 * @param {string} path
 * @private
 */

function matchLayer(layer, path) {
    try {
        return layer.match(path);
    } catch (err) {
        return err;
    }
}

// merge params with parent params
function mergeParams(params, parent) {
    if (typeof parent !== 'object' || !parent) {
        return params;
    }

    // make copy of parent for base
    var obj = mixin({}, parent);

    // simple non-numeric merging
    if (!(0 in params) || !(0 in parent)) {
        return mixin(obj, params);
    }

    var i = 0;
    var o = 0;

    // determine numeric gaps
    while (i in params) {
        i++;
    }

    while (o in parent) {
        o++;
    }

    // offset numeric indices in params before merge
    for (i--; i >= 0; i--) {
        params[i + o] = params[i];

        // create holes for the merge when necessary
        if (i < o) {
            delete params[i];
        }
    }

    return mixin(obj, params);
}

// restore obj props after function
function restore(fn, obj) {
    var props = new Array(arguments.length - 2);
    var vals = new Array(arguments.length - 2);

    for (var i = 0; i < props.length; i++) {
        props[i] = arguments[i + 2];
        vals[i] = obj[props[i]];
    }

    return function () {
        // restore vals
        for (var i = 0; i < props.length; i++) {
            obj[props[i]] = vals[i];
        }

        return fn.apply(this, arguments);
    };
}

// send an OPTIONS response
function sendOptionsResponse(res, options, next) {
    try {
        var body = options.join(',');
        res.set('Allow', body);
        res.send(body);
    } catch (err) {
        next(err);
    }
}

// wrap a function
function wrap(old, fn) {
    return function proxy() {
        var args = new Array(arguments.length + 1);

        args[0] = old;
        for (var i = 0, len = arguments.length; i < len; i++) {
            args[i + 1] = arguments[i];
        }

        fn.apply(this, args);
    };
}


/*
candidate 求职者
overwhelming 压倒一切的
whelming 压倒, 巨大的
 economic 经济的
 shock 震动; 打击
*/
/*

eurozone  欧元区

existent  存在的

threat    威胁

entire   全部的

stock    库存,股票

surge   汹涌; 大浪，波涛;

recede  跌落

untested 未经试验的
inexperienced  无经验的

pragmatic  实用主义的

pro-business  重视商业的

argue      争论
arguement  争论

corporation  公司;
  operation  手术; 操作

tax 税


therefore 所以
    so

hire  雇用
    employ

attractive  吸引的

scouring    擦[洗]净

potential   有可能的

mulling     研磨（磨成粉）; 反复思考

negotiations 谈判

socialists  社会上的人

income  收入


universal 全世界的; 宇宙的;
    universe 宇宙

attempts  进攻 ;尝试;

navigate 航行; 驾驶

coalition  联合; 同盟; 结合体;
    unite

rock  岩石  摇晃

reform  改良,改善,重新形成
    form 形成

labour  劳动;

fade   凋谢，衰老，失去光泽

fears 害怕

security 安全
    secure 安全的

inspire 鼓动他人的

anti 反对者
    aginst

antipathy  反感
    hate
    dislike


ant  蚂蚁

sentiment  情绪
    feeling
    emotion

election  选举
    selection

hype    夸张地宣传

counterpart  相对物(参照物)

alternative  备选的; 其他的

disarray   混乱，紊乱

elsewhere  在其他的地方

punish   处罚

upcoming  即将来到的

deter  阻止
    deterrent  阻止的

    prevent
    stop


terminate  结束
    end

Deutschland  德国
*/

