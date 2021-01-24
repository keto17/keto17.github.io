var yandex = {
    "v38": 65867671,
    "v39": 66200815,
    "v40": 66200887,
    "v42": 66184915,
    "v43": 66420895,
    "v44": 66568585,
    "v45": 67238038,
    "v46": 66987190,
	"v47": 67510129,
	"v48": 67509685,
	"v49": 67639809,
    "v50": 67163617,
	"v51": 67944175,
	"v52": 67944286,
    "v53": 68063263,
    "v54": 70866214,
    "v55": 67552342,
    "v56": 70866232,
    "v57": 70866235,
    "v58": 70866238,
    "v59": 70866241,
    "v60": 70866217,
    "v61": 70866220,
    "v62": 70866223,
    "v63": 70866226,
    "v64": 68863978,
    "v65": 68864008,
	"v66": 67967845,
	"v67": 68010604,
    "v68": 68484691,
    "v69": 70555795,
    "v70": 70555825,
    "v71": 70555876,
    "v72": 68589661,
    "v73": 69829834,
    "v74": 70008367,
    "v75": 70902148,
    "v76": 70614667,
    "v77": 70787167,
	"v78": 70618909,
    "v79": 70377496,
    "v80": 70813297,
    "v81": 70633396,
    "v82": 70910095,
    "v84": 70899952,
};


function $_GET(key) {
    var s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : '';
}

var site = $_GET('version').replace('186', '').replace('prelp', '')

if (!site) {
    var site = document.location.pathname
        .replace(/\/+/g, '')
        .replace('index.html', '')
        .replace('index2.html', '')
        .replace('prelp', '')
        .replace('confirm.html', '')
        .replace('186', '');
}

(function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () {
        (m[i].a = m[i].a || []).push(arguments)
    };
    m[i].l = 1 * new Date();
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(yandex[site], "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
});