var posts=["2025/08/19/114514/","2025/08/19/LuckyGameTools下载/","2025/08/19/hello-world/","2025/08/19/推荐typora/","2025/08/18/经典版Flash Player下载/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };