import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import About from './pages/About/About';
import Header from './components/Header/Header';
import Counter from './pages/hooks/Counter';
import UseEffectDemo from './pages/hooks/UseEffectDemo';
import ApiRcc from './pages/hooks/ApiRcc';
import ApiRfc from './pages/hooks/ApiRfc';
import UseCallBackDemo from './pages/hooks/UseCallBackDemo';
import useMemoDemo from './pages/hooks/useMemoDemo';
import UseRefDemo from './pages/hooks/UseRefDemo';
import ReduxDemo from './pages/ReduxDemo/ReduxDemo';
import ApiMiddleWare from './pages/ReduxDemo/ApiMiddleWare';
import Detail from './pages/Detail/Detail';
import Profile from './pages/Profile/Profile';
import { HomeTemplate } from './templates/HomeTemplate';
import { FormTemplate } from './templates/FormTemplate';

// hỗ trợ sử dụng history của Router cho các file không phải component
import {createBrowserHistory} from 'history';
import LoginUser from './pages/LoginUser/LoginUser';
import AntdDemo from './pages/AntdDemo/AntdDemo';
import { AdminTemplate } from './templates/AdminTemplate';

export const history = createBrowserHistory();



//cấu hình routing
function App() {
  return (
    <Router history={history}>

      {/* <Header /> // dùng cho tất cả trang*/}
      {/* đường path /home sẽ hiện component Home */}
      {/* nếu không có exact thì so sanh đường dẫn có chứa (inclued) ký tự thì thỏa đk 
          exact: so sánh bằng chính xác đường dẫn
      */}
      {/* Template: mẫu UI được dùng chung cho nhiều trang
          + HomeTemplate (Header - dùng chung cho các trang bình thường)
          + FormTemplate (thiêt kế không dùng header)
          + AdminTempate (sidebar, header riêng của admin)
       */}
      {/* HOC: truyền component này vào props của component khác 
       Home => props của HomeTemplate */}
      <Switch>
        {/* <Route exact path="/home" render={(propsRoute) => {
          return <div>
            <Header />
            <Home {...propsRoute} />
          </div>
        }} />
        <Route exact path="/about" render={(propsRoute) => {
          return <div>
            <Header />
            <About {...propsRoute} />

          </div>
        }} /> */}


        <HomeTemplate exact path="/home" component={Home} />
        <HomeTemplate exact path="/about" component={About} />

        <FormTemplate exact path="/login" component={LoginUser} />
        <FormTemplate exact path="/register" component={Register} />

        <HomeTemplate exact path="/counter" component={Counter} />
        <HomeTemplate exact path="/use-effect" component={UseEffectDemo} />
        <HomeTemplate exact path="/apircc" component={ApiRcc} />
        <HomeTemplate exact path="/apirfc" component={ApiRfc} />
        <HomeTemplate exact path="/usecallback" component={UseCallBackDemo} />
        <HomeTemplate exact path="/usememo" component={useMemoDemo} />
        <HomeTemplate exact path="/useref" component={UseRefDemo} />
        <HomeTemplate exact path="/reduxdemo" component={ReduxDemo} />
        <HomeTemplate exact path="/apiredux" component={ApiMiddleWare} />
        <HomeTemplate exact path="/detail/:maPhim" component={Detail} />
        <HomeTemplate exact path="/profile" component={Profile} />
        <AdminTemplate exact path="/antddemo" component={AntdDemo} />
        {/* khi không có / trang cụ thể thì mặc đinh hiện Home */}
        <HomeTemplate exact path="/" component={Home} />
      </Switch>


    </Router>
  );
}

export default App;
