console.log("b");

function parseSoniu(data){
	var html = '';
	html = getSoniuHTML(data.txt[0]);
	
	return html;
}

function getSoniuHTML(data){
	var info = {}
	try{
		info = JSON.parse(data.content);
	}
	catch(e){
		
	}	
	info = info.item;
	
	switch( info.type ){
		case 'baike':
			return soniuTpl1(info.title, info.summ);
			break;
		case 'hotnews':
		case 'news':
		case 'knowledge':
			/*
			$.each(info.group, function(k, v){
				 soniuTpl1(title, content);
			});
			break;
			*/
		default:
			return defaultsOptions.answerE1;
	}
	
}

function soniuTpl1(title, content){
	var $tpl = $('<div><h1>--</h1><p style="color: #949494;"></p></div>');
	try{
		/*
		$tpl.find('a').attr('href', info.URL);
		$tpl.find('a').html(info.title+ new Date(info.pubtime*1000).toJSON().substr(0, 10));
		*/
		var rp1 = new RegExp('['+decodeURIComponent('%EE%81%BE')+decodeURIComponent('%EE%81%BF')+']', 'g');
		$tpl.find('h1').html(title.toString().replace(rp1,'&nbsp;'));
		$tpl.find('p').html(content.toString().replace(rp1,'&nbsp;'));
		
		return $tpl.html();
	}
	catch(e){		
		return '';
	}
}
