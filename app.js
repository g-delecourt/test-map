var map = document.querySelector("#map"),
    paths = map.querySelectorAll(".map__image a"),
    links = map.querySelectorAll(".map__list a");
void 0 === NodeList.prototype.forEach && (NodeList.prototype.forEach = function (e) {
    [].forEach.call(this, e)
});
var activeArea = function (e) {
    map.querySelectorAll(".is-active").forEach(function (e) {
        e.classList.remove("is-active")
    }), void 0 !== e && (document.querySelector("#list-" + e).classList.add("is-active"), document.querySelector("#country-" + e).classList.add("is-active"))
};
paths.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var e = this.id.replace("country-", "");
        activeArea(e)
    })
}), links.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var e = this.id.replace("list-", "");
        activeArea(e)
    })
}), map.addEventListener("mouseover", function () {
    activeArea()
});