const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// 載入環境變數
dotenv.config();

// 初始化 Express 應用
const app = express();

// 中間件
app.use(express.json());
app.use(cors());

// 連接數據庫 - 修改連接選項
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB 連接成功'))
  .catch(err => console.error('MongoDB 連接失敗:', err));

// 測試路由
app.get('/api/test', (req, res) => {
  res.json({ message: '打卡系統 API 正常運行中!' });
});

// 設置端口
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`服務器運行在端口 ${PORT}`));