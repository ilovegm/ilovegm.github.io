const WHADRURL = "https://kh108gm.kkd666.com/whby/wuhuangbuyu.apk"; // 安卓
const WHIOSURL = "itms-services://?action=download-manifest&url=https://kh108gm.kkd666.com/whby/whby.plist"; // iOS

// 备用
const WHSPARE = "";
const APPEAR = false;

isWechatBrowser();

isShowSpare();

function isShowSpare() {
    const ua = navigator.userAgent;
    const iOSType = ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 || ua.indexOf('Mac OS X') > -1;
    if (iOSType && APPEAR) {
        $("#whbyquick").show();
    } else {
        $("#whbyquick").hide();
    }
}

const $btnDown = $('#download');
$btnDown.click(function () {
    deviceType("");
});

const $btnDownquick = $('#downquick');
$btnDownquick.click(function () {
    deviceType("spare");
});

$('.whbymask').click(function () {
});

function isWechatBrowser() {
    const ua = window.navigator.userAgent.toLocaleLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger' || ua.match(/ QQ\//i) == " qq\/") {
        $('.whbymask').show();
        $('.showbg').hide();
    } else {
        $('.whbymask').hide();
        $('.showbg').show();
    }
}

function deviceType(v) {
    //   alert("正在马不停蹄的处理，请稍等片刻！");
    //   return;
    const u = navigator.userAgent;
    const AdrType = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 || u.indexOf('android') > -1 || u.indexOf('linux') > -1 || u.indexOf('Windows') > -1;
    const iOSType = u.indexOf('iphone') > -1 || u.indexOf('ipad') > -1 || !!u.match(/AppleWebKit.*Mobile.*/) || u.indexOf('Mac OS X') > -1;
    if (AdrType) {
        window.location.href = WHADRURL;
    } else if (iOSType) {
        //	alert("正在马不停蹄的处理，请稍等片刻！");
        //	return;
        if (v == "spare") {
            window.location.href = WHSPARE;
        } else {
            window.location.href = WHIOSURL;
        }
    }
}