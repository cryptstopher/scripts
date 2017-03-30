function makeNiceMyHtmlEntities() {
    var fun = document.getElementById("content").innerHTML; 
    var makingNice = fun.replace(/ -- /g, "&mdash;");
    document.getElementById("content").innerHTML = makingNice;
}
window.onload = makeNiceMyHtmlEntities;
/* 
INSTRUCTIONS FOR ADDDING THIS TO ORG MODE FILES
===============================================

Can be added remotely:

#+OPTIONS: -:nil
#+HTML_HEAD: <script type="text/javascript" src="https://raw.githubusercontent.com/stanordan/scripts/master/makeNice.js"></script>

Or surround it with script tags to load it locally.
*/
