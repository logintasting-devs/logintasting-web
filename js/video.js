document.addEventListener("DOMContentLoaded", e => {
// Plugin isInViewport
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("jquery"),require("window")):"function"==typeof define&&define.amd?define("isInViewport",["jquery","window"],n):n(e.$,e.window)}(this,function(e,n){"use strict";function t(n){var t=this;if(1===arguments.length&&"function"==typeof n&&(n=[n]),!(n instanceof Array))throw new SyntaxError("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions");return n.forEach(function(n){"function"!=typeof n?(console.warn("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions"),console.warn("isInViewport: Ignoring non-function values in array and moving on")):[].slice.call(t).forEach(function(t){return n.call(e(t))})}),this}function o(n){var t=e("<div></div>").css({width:"100%"});n.append(t);var o=n.width()-t.width();return t.remove(),o}function r(t,i){var a=t.getBoundingClientRect(),u=a.top,c=a.bottom,f=a.left,l=a.right,d=e.extend({tolerance:0,viewport:n},i),s=!1,p=d.viewport.jquery?d.viewport:e(d.viewport);p.length||(console.warn("isInViewport: The viewport selector you have provided matches no element on page."),console.warn("isInViewport: Defaulting to viewport as window"),p=e(n));var w=p.height(),h=p.width(),v=p[0].toString();if(p[0]!==n&&"[object Window]"!==v&&"[object DOMWindow]"!==v){var g=p[0].getBoundingClientRect();u-=g.top,c-=g.top,f-=g.left,l-=g.left,r.scrollBarWidth=r.scrollBarWidth||o(p),h-=r.scrollBarWidth}return d.tolerance=~~Math.round(parseFloat(d.tolerance)),d.tolerance<0&&(d.tolerance=w+d.tolerance),l<=0||f>=h?s:s=d.tolerance?u<=d.tolerance&&c>=d.tolerance:c>0&&u<=w}function i(n){if(n){var t=n.split(",");return 1===t.length&&isNaN(t[0])&&(t[1]=t[0],t[0]=void 0),{tolerance:t[0]?t[0].trim():void 0,viewport:t[1]?e(t[1].trim()):void 0}}return{}}e="default"in e?e.default:e,n="default"in n?n.default:n,
e.extend(e.expr[":"],{"in-viewport":e.expr.createPseudo?e.expr.createPseudo(function(e){return function(n){return r(n,i(e))}}):function(e,n,t){return r(e,i(t[3]))}}),e.fn.isInViewport=function(e){return this.filter(function(n,t){return r(t,e)})},e.fn.run=t});
//# isInViewport

// Play Video
$(function() {
  var $video = $('.video');
  var $window = $(window);

  $window.scroll(function() {
    if ($video.is(":in-viewport")) {
      $video[0].play();
    } else {
      $video[0].pause();
    }
  });
});
})