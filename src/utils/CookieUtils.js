var CookieUtils = {}

CookieUtils.setCookie = function(key, value, expireMinutes) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getMinutes() + expireMinutes);
    document.cookie = key + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
},

CookieUtils.getCookie = function(key) {
    var result = null;
    var cookie = document.cookie.split(';');
    cookie.some(function (item) {
        // 공백을 제거
        item = item.replace(' ', '');

        var dic = item.split('=');

        if (key === dic[0]) {
            result = dic[1];
            return true;    // break;
        }
    });
    return result;
}

export default CookieUtils
