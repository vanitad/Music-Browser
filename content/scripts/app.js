function expandMusic() {
    var expand = document.getElementById("expand");
    var sidebarEl = document.getElementsByClassName('side-bar')[0];
    var style = sidebarEl.style;
    if (!style.height || style.height === '180px') {
        expand.innerHTML = '&#x2C4';
        style.height = 'auto'
    } else {
        expand.innerHTML = '&#x2C5';
        style.height = '180px';
    }
    return false;
}