#說明

測試 nodejs socket memory leak 問題

## 執行方式

> yarn

1. 開啟 server 端:

   > pm2 start app.js

2. 開啟 client 端, 進入 test/ 並執行

   > node client.js

於 pm2 輸出 log 中可看到 process 使用量 每一分鐘取樣一次
放置幾個小時後 可明顯看到 rss 不斷上升
