const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');

// 載入環境變數
dotenv.config();

// 初始化 Express 應用
const app = express();

// 中間件
app.use(express.json()); // 解析 JSON 請求體
app.use(cors()); // 允許跨域請求
app.use(morgan('dev')); // 日誌記錄

// 連接數據庫
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
  .then(() => console.log('MongoDB 連接成功'))
  .catch(err => console.error('MongoDB 連接失敗:', err));

// 路由（後續添加）
// app.use('/api/users', require('./routes/userRoutes'));
// app.use('/api/attendance', require('./routes/attendanceRoutes'));
// app.use('/api/leave', require('./routes/leaveRoutes'));

// 生產環境配置
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
}

// 設置端口
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`服務器運行在端口 ${PORT}`));