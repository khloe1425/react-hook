import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import About from './pages/About/About';
import Header from './components/Header/Header';
import Counter from './pages/hooks/Counter';
import UseEffectDemo from './pages/hooks/UseEffectDemo';
import ApiRcc from './pages/hooks/ApiRcc';
import ApiRfc from './pages/hooks/ApiRfc';

//cấu hình routing



function App() {
  return (
    <BrowserRouter>

      <Header/>
      
      {/* đường path /home sẽ hiện component Home */}
      {/* nếu không có exact thì so sanh đường dẫn có chứa (inclued) ký tự thì thỏa đk 
          exact: so sánh bằng chính xác đường dẫn
      */}


      <Switch>

        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/about" component={About} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/use-effect" component={UseEffectDemo} />
        <Route exact path="/apircc" component={ApiRcc} />
        <Route exact path="/apirfc" component={ApiRfc} />

        {/* khi không có / trang cụ thể thì mặc đinh hiện Home */}
        <Route exact path="/" component={Home} />
      </Switch>


    </BrowserRouter>
  );
}

export default App;
