# 說明

測試 nodejs socket memory leak 問題

## 環境
node v10.13.0

Ubuntu 14.04.5 LTS (GNU/Linux 4.4.0-31-generic x86_64)

## 執行方式

> yarn

1. 開啟 server 端:

   > NODE_ENV=production pm2 start app.js

2. 開啟 client 端, 進入 test/ 並執行

   > node client.js

於 pm2 輸出 log 中可看到 process 使用量 每一分鐘取樣一次

放置幾個小時後 明顯看到 rss 不斷上升


# Note
1. 2/28 執行app時 pm2參數多帶production
2. 2/28 新增 node版本說明
3. 2/28 新增 運行環境版本說明
