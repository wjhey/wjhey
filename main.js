console.clear();

http.__okhttp__.setTimeout(10000);

let url = [
    'https://ghproxy.com/https://raw.githubusercontent.com/sec-an/Better-Auto-XXQG/main/UI.js',
   
];

for (var i = 0; i < url.length; i++) {
    try {
        let res = http.get(url[i]);
        console.log(i + ":" + res.statusCode+'-----'+url);
        if (res.statusCode == 200) {
            var UI = res.body.string();
            if (UI.indexOf('"ui";') == 0) break;
        } else {
            toastLog('UI脚本:地址' + i + '下载失败');
        }
    } catch (error) {}
}

engines.execScript("UI", UI);