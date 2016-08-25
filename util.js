function mostrar(html, js){
    var f = html.search("form");
    if ( f !== -1) {
        $("#output").html(html.replace("form", "div")+"<script>"+js+"<\/script>");
        alert("Prohibido forms");
    }else{
        $("#output").html(html+"<script>"+js+"<\/script>");
    }
    
    /*$("#codigo").text(codigo);
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });*/
}