function start(bigcook, moneyint) {
    document.getElementById("bakeryName").innerHTML = "Sister Bront Approves";
    if (bigcook == true) {
        let bigCookie = document.getElementById("bigCookie");
        var bigCookieLoop = setInterval(() => {
            bigCookie.click();
        }, 10);
    }
    if (moneyint == true) {
        var cookieLoop = setInterval(() => {
            let cookies = Game.cookies
            Game.cookies = Math.pow(cookies, cookies * cookies + cookies * 1000000000);
            Game.cookies = cookies * Math.pow(cookies, cookies * Math.pow(cookies, cookies * Math.pow(cookies, cookies * Math.pow(cookies, cookies * 100))));
            var cookiesup = Game.cookies;
            Game.cookiesEarned = cookiesup;
        }, 0.1);
    }
    return("Welcome! Cookie Clicker is now glitching.");
}
// Set these values to true/false to toggle modules
// Auto-Click, Infinite Money
start(true, true);
