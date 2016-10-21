module.exports = {
	upload(file,url,cb){
		var xhr=createXhr()

		xhr.open("post",url)
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4 ){
				if(xhr.status==200){
					let resJson=JSON.parse(xhr.responseText)
					cb(resJson)
				}
			}
		}
		xhr.send(file)
	}
}


function createXhr(){
	var xhr=null
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest()
	}else{
		xhr=new ActiveXObject("Microsoft.XMLHttpRequest")
	}
	return xhr
}