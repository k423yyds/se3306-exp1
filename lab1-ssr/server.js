const express = require("express");
const app = express();
const posts = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1, title: `文章标题 ${i + 1}`, body: `这是第 ${i + 1} 篇文章的正文内容……`
}));
app.get("/", (req, res) => {
  const renderTime = new Date().toLocaleTimeString("zh-CN", { hour12: false });
  const html = `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8" /><title>SSR 文章列表</title></head><body>
<h1>文章列表</h1>
<p>本次页面由服务器在请求时拼接生成，生成时间：${renderTime}</p>
${posts.map(p => `<article><h2>${p.title}</h2><p>${p.body}</p></article>`).join("")}
</body></html>`;
  res.send(html);
});
app.listen(3000, () => console.log("SSR on http://localhost:3000"));
