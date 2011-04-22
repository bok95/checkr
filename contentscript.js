var flag = false;

var ebooks = new Array();

$('a').each(function() {
    if ($(this).is('[href$=.epub],[href$=.pdf],[src$=.GIF],[type="application/epub+zip"]')){
		var ebook = new Object;
		
		var pathname = window.location.host;
		var href = $(this).attr('href');
		var link = "http://" + pathname + href;
		var file_name = href.substring(href.lastIndexOf('/')+1, href.length);
		ebook.link = link;
		ebook.name = file_name;
		ebooks.push(ebook);
		flag = true;
	}
});

if(flag == true){
	chrome.extension.sendRequest(JSON.stringify(ebooks), function(response) {});
}
