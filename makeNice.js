function makeNiceMyHtmlEntities() {
    var fun = document.getElementById("content").innerHTML; 
    var makingNice = fun.replace(" -- ", "&mdash;");
    document.getElementById("content").innerHTML = makingNice;
}

window.onload = makeNiceMyHtmlEntities;

/* 
<script type="text/javascript" src="https://smasho.net/makeNice.js"></script>
*/