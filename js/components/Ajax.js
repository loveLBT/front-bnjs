module.exports = {
	upload(file,url,cb){
		let xhr =new XMLHttpRequest()

		xhr.onreadystatechange=()=>{
			if(xhr.readyState===4 && xhr.status===200){
				cb("aaa")
			}else{
				cb("bbb")
			}
		}
		xhr.open("post",url)
		let formdata=new FormData(file)
		xhr.send(formdata)
	}
}
