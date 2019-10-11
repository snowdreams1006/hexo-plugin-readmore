hexo.extend.filter.register('before_post_render', function(data) {
	console.log('before_post_render:' + data);
});