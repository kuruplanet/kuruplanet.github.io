var posts=["2025/08/21/CS1.6推荐/","2025/08/19/LuckyGameTools下载/","2025/08/19/hello-world/","2026/08/19/意大利诗人邓南遮的介绍/","2025/08/19/推荐typora/","2025/08/18/经典版Flash Player下载/","2026/08/19/赛博人物志：维亚切斯拉夫·巴兰尼科夫/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };