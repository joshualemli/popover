'use strict';

function popover(a) {
    if ((!a.containerId && !a.container) || !a.html) return console.log('popover -- `containerId` or `html` not provided');
    var _c = a.container || document.getElementById(a.containerId);
    var msg = document.createElement('div');
    msg.innerHTML = a.html;
    msg.style.background = a.background || '#000';
    msg.style.color = a.color || '#FFF';
    msg.style.font = a.font || '16px sans-serif';
    msg.style.animationDuration = a.speed? a.speed+'s' : '3s';
    setTimeout(function(){_c.removeChild(msg);}, a.speed*1000 || 3000);
    _c.appendChild(msg);
    msg.classList.add(a.type ? 'popup-' + a.type : 'popover-ribbon');
}

require([
    
    // for testing...
    'dojo/parser',
    'dijit/layout/ContentPane',
    'dojo/domReady!'
],function(parser){
    
    // for testing...
    parser.parse();
    console.log("ASDF");


});