angular.module("ct", ["lastfm-nowplaying"]).controller("mainCtrl", ["$scope", function(n) {
    n.lastFmConfig = {
        apiKey: "f3c3bb60dc23d1431a15c557e1db8de6",
        user: "curty_",
        containerClass: "lastfm-content"
    }
}]),
function(n) {
    n && ga && (n.onpopstate = function(n) {
        ga("send", "pageview", document.location.pathname)
    })
}(window);