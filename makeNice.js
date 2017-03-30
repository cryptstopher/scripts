function makeNiceMyHtmlEntities() {
    var fun = document.getElementById("content").innerHTML; 
    var makingNice = fun.replace(/ -- /g, "&mdash;");
    document.getElementById("content").innerHTML = makingNice;
}

window.onload = makeNiceMyHtmlEntities;

/* 
#+OPTIONS: -:nil
#+HTML_HEAD: <script type="text/javascript" src="https://raw.githubusercontent.com/stanordan/scripts/master/makeNice.js"></script>
*/
