var request = makeHttpObject();
request.open("GET", url, true);
request.send(null);
request.onreadystatechange = function() {
var htmlcode = htmlEncode(request.responseText);
 document.getElementById("code").innerHTML=htmlcode;
};
setTimeout(function(){
    hljs.initHighlightingOnLoad();
}, 1000);
