window.onload =function(){
    var news = new News()
    news.title='腾讯入股京东'
    news.comments=200
    news.date='2015-09-09'
    news.author='王书奎'
    news.source='新浪网'
    news.content='这里是主题内容'
    var dom = document.getElementById('content')
    news.bindDetailDom(dom)
}