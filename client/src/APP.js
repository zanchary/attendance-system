import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// 暫時性頁面組件（後續會替換為實際組件）
const Dashboard = () => <div>儀表板頁面</div>;
const Login = () => <div>登入頁面</div>;

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;