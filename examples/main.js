var http   = require('http');
var Weibo2 = require('../lib/weibo_v2.js');
var url    =  require('url');
var querystring = require('querystring');

APP_KEY    = '3187963899';
APP_SECRET = '246c1493c9ba7b68ae78135aacca8de5';


/*
home = function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<a href="/auth">auth</a>');
};

auth = function(req, res) {
    var opts = {
        'callback' : 'http://dev.vzhishu.com:2000/sina_auth_cb'
    };
    var api = new weibo2.Api(APP_KEY, APP_SECRET, opts);
    var auth_url = api.getAuthorizeUrl();
    console.log(auth_url);
    res.writeHead(
        302, 
        {
            'Location': auth_url,
        }
    );
    res.end();    
};

sina_auth_cb = function(req, res, query_info) {
    var code = query_info.query.code;
    console.log(code)

    var opts = {
        'callback' : 'http://dev.vzhishu.com:2000/sina_auth_cb'
    };
    var api = new weibo2.Api(APP_KEY, APP_SECRET, opts);
    api.getAccessToken(
        code, 
        function(api) {
            
        }
    );
    res.end()
};


URI_DISPATCH = {
    '/'             : home,
    '/auth'         : auth,
    '/sina_auth_cb' : sina_auth_cb,
};

http.createServer(
    function (req, res) {
        console.log(req.url);
        var query_info = url.parse(req.url, true);
        func = URI_DISPATCH[query_info.pathname];
        if (func) {
            func(req, res, query_info);
        } else {
            res.writeHead(404);
            res.end('404');
        }
    }
).listen(2000, "127.0.0.1");
*/

var api = new Weibo2.WeiboApi(
    {
        app_key    : APP_KEY,
        app_secret : APP_SECRET,
        redirect_uri : 'http://dev.vzhishu.com:2000/sina_auth_cb',

    }
);

var auth_url = api.getAuthorizeUrl(
    {
        
    }
);
console.log(auth_url);

//url = 'http://dev.vzhishu.com:2000/sina_auth_cb?code=e64d91ca6b77c71963f604c68faf07c8';
//console.log(querystring.parse(url));
api.accessToken(
    {
        code : 'e64d91ca6b77c71963f604c68faf07c8',
    },
    function(data) {
        console.log(data);
    }
);
