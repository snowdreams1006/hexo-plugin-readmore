const hexo = hexo || {};
const config = hexo.config;
// const addlink = hexo.config.addlink;

// hexo.extend.filter.register('before_post_render', data => {
//   if (!addlink || !config.url || data.layout !== 'post') {
//     return data;
//   }

//   let domain = config.url;
//   let beforeText = addlink.before_text || '';
//   let afterText = addlink.after_text || '';
//   let layout = data.layout;
//   let href = `${domain}/${data.path}`;
//   let hrefText = `${beforeText} [${href}](${href}) ${afterText}`;

//   data.content += `\n\n${hrefText}`;
// });

hexo.extend.filter.register('before_post_render', function(data){
  data.title = data.title.toLowerCase();

  console.log(`before_post_render=${data}`);

  return data;
});

hexo.extend.filter.register('after_post_render', function(data){
  data.content = data.content.replace(/@(\d+)/, '<a href="http://twitter.com/$1">#$1</a>');

  console.log(`after_post_render=${data}`);

  return data;
});