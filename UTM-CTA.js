<!--Unbounce - Script Manager. Make sure the placement is in Head, and included on option is set to Main Landing Page-->
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

function getArabicSource(source) {
    switch (source) {
        case 'snapchat':
        case 'Snapchat':
            return '%D8%B3%D9%86%D8%A7%D8%A8%20%D8%B4%D8%A7%D8%AA';
            break;

        case 'instagram':
        case 'Instagram_Explore':
        case 'Instagram_Feed':
        case 'Instagram_Stories':
            return '%D8%A7%D9%86%D8%B3%D8%AA%D9%82%D8%B1%D8%A7%D9%85';
            break;

        case 'facebook':
        case 'Facebook_Instream_Video':
        case 'Facebook_Mobile_Feed':
        case 'Facebook_Right_Column':
        case 'Facebook_Instant_Articles':
            return '%D9%81%D9%8A%D8%B3%20%D8%A8%D9%88%D9%83';
            break;

        case 'google':
        case 'search':
        case 'display':
            return '%D9%82%D9%88%D9%82%D9%84';
            break;
        
		case 'twitter':
            return '%D8%AA%D9%88%D9%8A%D8%AA%D8%B1';
            break;

		case 'twitter-post':
            return '%D8%AA%D8%BA%D8%B1%D9%8A%D8%AF%D8%A9%20%D9%81%D9%8A%20%D8%AA%D9%88%D9%8A%D8%AA%D8%B1';
            break;
        
		case 'whatsapp':
            return '%D9%88%D8%A7%D8%AA%D8%B3%D8%A7%D8%A8';
            break;

		case 'email':
            return '%D8%A7%D9%84%D8%A7%D9%8A%D9%85%D9%8A%D9%84';
            break;
        
		case 'website':
            return '%D8%A7%D9%84%D9%85%D9%88%D9%82%D8%B9%20%D8%A7%D9%84%D8%A7%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A';
            break;
        
		case 'DoctorBrowser':
            return '%D8%A7%D9%84%D8%AA%D8%B7%D8%A8%D9%8A%D9%82';
            break;

        default:
            return '%D8%A7%D9%84%D8%A5%D9%86%D8%AA%D8%B1%D9%86%D8%AA';
    }
}

$(document).ready(function () {
    var source = getArabicSource(getURLParameter('utm_source'));
		var name = document.getElementById("bundlename").textContent;

  	var text = `%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%B4%D8%A7%D9%87%D8%AF%D8%AA%20%D8%A5%D8%B9%D9%84%D8%A7%D9%86%D9%83%D9%85%20%D8%B9%D9%84%D9%89%20${source} %D9%88%D8%A3%D8%B1%D8%BA%D8%A8%20%D8%A8%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC%20${name}.`;

  
    var phone = '966590183838';
    var url = `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;

    $(".source-btn").attr('href', url);
});

</script>
