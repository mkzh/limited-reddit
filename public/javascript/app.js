!function(){function a(a){var b=document.createElement("div");return b.innerHTML=a,0===b.childNodes.length?"":b.childNodes[0].nodeValue}var b=angular.module("LimitedReddit",[]);b.controller("ContentController",["$http",function(b){var c=this;c.links=[],c.loading=!0,this.htmlDecode=a,this.thumbnailAvailable=function(a){return a&&"self"!==a&&"default"!==a&&"nsfw"!==a?!0:!1},b.get("/data").success(function(a){c.links=a.links,c.loading=!1}).error(function(a){console.error(a)})}])}();