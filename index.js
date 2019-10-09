hexo.extend.filter.register('before_post_render', function(data){
  console.log('before_post_render');

  data.title = data.title.toLowerCase();

  console.log(`before_post_render=${data}`);

  return data;
});

hexo.extend.filter.register('after_post_render', function(data){
  console.log('after_post_render');
  
  data.content = data.content.replace(/@(\d+)/, '<a href="http://twitter.com/$1">#$1</a>');

  console.log(`after_post_render=${data}`);

  return data;
});