hexo.extend.filter.register('after_post_render', function(data) {
	var readmoreConfig = hexo.config.plugins.readmore;
	if (readmoreConfig) {
		data.content = '<div id="vip-container">' + data.content + '</div>';

		var str = `
			<script src="https://my.openwrite.cn/js/readmore.js" type="text/javascript"></script>
			<script>
			var isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
			if (!isMobile) {
			    var btw = new BTWPlugin();
			    btw.init({
			        "id": "vip-container",
			        "blogId": "${readmoreConfig.blogId}",
			        "name": "${readmoreConfig.name}",
			        "qrcode": "${readmoreConfig.qrcode}",
			        "keyword": "${readmoreConfig.keyword}"
			    });
			}
			</script>
		`;

		data.content = data.content + '\n' + str;
	}

	return data;
});