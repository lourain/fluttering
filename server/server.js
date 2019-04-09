import csshook from 'css-modules-require-hook/preset'
import assetHook from 'asset-require-hook'
import express from 'express'
import path, { dirname } from 'path'
import React from 'react'
import { renderToNodeStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Route from '../src/route'
import proxy from 'http-proxy-middleware'
import manifestPath from '../build/asset-manifest.json'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import request from '../src/request'
import reducer from '../src/store/rootReducer'
import marked from 'marked'
import http2 from 'spdy'
import http from 'http2'
import fs from 'fs'
// console.log(manifestPath);

assetHook({
    extensions: ['jpg', 'png', 'webp', 'ttf'],
    // name: 'static/media/[name].[hash:8].[ext]'
    name: 'static/media/[name].[ext]'
})

const app = express()
const ssl_options = {
    cert: fs.readFileSync('/Users/lyw/Downloads/www.fluttering.cn/Nginx/1_www.fluttering.cn_bundle.crt'),
    key: fs.readFileSync('/Users/lyw/Downloads/www.fluttering.cn/Nginx/2_www.fluttering.cn.key'),
     //cert: fs.readFileSync('/etc/nginx/ssl/1_www.fluttering.cn_bundle.crt'),
     //key: fs.readFileSync('/etc/nginx/ssl/2_www.fluttering.cn.key'),
    //cert:fs.readFileSync(path.resolve(__dirname,'../certificate/localhost-cert.pem')),
    //key:fs.readFileSync(path.resolve(__dirname,'../certificate/localhost-privkey.pem'))
}


app.use('/api', proxy({
    target: 'http://localhost:9999',
    changeOrigin: true,
    pathRewrite: {
        '^/api': ''
    }
}))
function preRequest(url) {
    switch (url) {
        case '/':
            var address = 'http://www.fluttering.cn/api/directory'
            break;
        default:
            var address = `http://www.fluttering.cn/api${url}`
            break;
    }
    return new Promise((resolve, reject) => {
        request('get', address).then(res => {
            if (url.indexOf('detail') !== -1) {
                let data = res.data
                data.content = marked(data.content || "", { sanitize: true })
            }
            resolve(res)


        })
    })
}

app.get('/',async (req, res, next) => {
    // serverPush(res,'/static/media/logo.png',{'content-type': 'image/png'})
    // serverPush(res,'/static/media/lotus.png',{'content-type': 'image/png'})
    // serverPush(res,'/static/js/main.9a9f0dc6.chunk.js',{'content-type': 'iapplication/javascript'})
    
    if (req.url.indexOf('/static') !== -1) {
        return next()
    }
    if (req.url === '/favicon.ico') {
        return next()
    }

    var preloadedState = await preRequest(req.url)

    let store = createStore(reducer, { receive_data: preloadedState, count: 10 })

    const context = {}

    const ReactSSR = renderToNodeStream(
        (
            <Provider store={store}>
                <StaticRouter location={req.url}
                    context={context}>
                    <Route />
                </StaticRouter>
            </Provider>
        )
    )
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <title>風滿樓</title>
            <link rel="shortcut icon"  href="/favicon.ico"/>
            <link rel="preload stylesheet" as="style" href="${manifestPath['main.css']}"/>
            <link rel="preload stylesheet" as="style" href="${manifestPath["static/css/1.81851846.chunk.css"]}"/>
            <link rel="prefetch" as="font" href="https://www.fluttering.cn/uploads/lixuke.css">
            <link rel="preload" as="image" href="${manifestPath['static/media/Home.less']}">
            </head>
        <body>
            <div id="root">
   ` 

    // res.send(ReactSSR)
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    res.write(html)
    ReactSSR.pipe(res, { end: false })
    ReactSSR.on('end', function () {
        res.write(`
                </div>
                <script>window.__initData__ = ${JSON.stringify(preloadedState)}</script>
                <script>!function (l) { function e(e) { for (var r, t, n = e[0], o = e[1], u = e[2], f = 0, i = []; f < n.length; f++)t = n[f], p[t] && i.push(p[t][0]), p[t] = 0; for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (l[r] = o[r]); for (s && s(e); i.length;)i.shift()(); return c.push.apply(c, u || []), a() } function a() { for (var e, r = 0; r < c.length; r++) { for (var t = c[r], n = !0, o = 1; o < t.length; o++) { var u = t[o]; 0 !== p[u] && (n = !1) } n && (c.splice(r--, 1), e = f(f.s = t[0])) } return e } var t = {}, p = { 2: 0 }, c = []; function f(e) { if (t[e]) return t[e].exports; var r = t[e] = { i: e, l: !1, exports: {} }; return l[e].call(r.exports, r, r.exports, f), r.l = !0, r.exports } f.m = l, f.c = t, f.d = function (e, r, t) { f.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t }) }, f.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, f.t = function (r, e) { if (1 & e && (r = f(r)), 8 & e) return r; if (4 & e && "object" == typeof r && r && r.__esModule) return r; var t = Object.create(null); if (f.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: r }), 2 & e && "string" != typeof r) for (var n in r) f.d(t, n, function (e) { return r[e] }.bind(null, n)); return t }, f.n = function (e) { var r = e && e.__esModule ? function () { return e.default } : function () { return e }; return f.d(r, "a", r), r }, f.o = function (e, r) { return Object.prototype.hasOwnProperty.call(e, r) }, f.p = "./"; var r = window.webpackJsonp = window.webpackJsonp || [], n = r.push.bind(r); r.push = e, r = r.slice(); for (var o = 0; o < r.length; o++)e(r[o]); var s = n; a() }([])</script>                    
                <script src="${manifestPath["static/js/1.37e8ee76.chunk.js"]}"></script>
                <script src="${manifestPath["main.js"]}"></script>
            </body>
        </html>`)
        res.end()
    })
})
const options = {
    maxAge: 3600 * 24 * 100 * 100,
    etag: true
}
app.use('/', express.static(path.resolve(__dirname, '../build'), options))

app.listen(9000)
// http2.createServer(ssl_options, app)
// .listen(9000,function(){
//     console.log('runing...9000');
    
//     }
// )

var serverPush = function(res,_path,response){
    res.push(_path, {
        status: 200, // optional
        method: 'GET', // optional
        request: { "accept": "*/*" },
        response: response
    })
    .end(fs.readFileSync(path.resolve(__dirname,`../build${_path}`)))
}