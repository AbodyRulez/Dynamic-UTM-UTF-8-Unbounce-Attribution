//Unbounce - Script Manager. Make sure the placement is in Head, and included on option is set to Main Landing Page
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script>
  
function getURLParameter(name) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] === name) {
            return pair[1];
        }
    }
    return "";
}

$(document).ready(function () {
  	let name;
  	let source;
  	let url;
    source = getURLParameter("utm_source");
		name = document.getElementById("bundlename").textContent || "%D8%A7%D9%84%D8%B9%D9%86%D8%A7%D9%8A%D8%A9%20%D8%A8%D8%A7%D9%84%D8%B5%D8%AD%D8%A9";
  	url = `https://get.cura.healthcare/chat/?bundle=${name}&utm_source=${source}`;
  	$(".source-btn").attr("href", url);
});

</script>
