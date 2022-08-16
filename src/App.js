import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Faq from './components/Faq';
import Header from './components/Header';
import InfoBlock from './components/InfoBlock';
import SideBar from './components/SideBar';
import Contracts from './views/Contracts';
import Devices from './views/Devices';
import Home from './views/Home';
import Orders from './views/Orders';
import SignIn from './views/SignIn';
import Support from './views/Support';

const info = {
  deviceBroken: {
    title: 'Device Broken',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  deviceLostOrStolen: {
    title: 'Device Lost or Stolen',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id interdum velit. Eu sem integer vitae justo. Massa tincidunt dui ut ornare lectus sit. Nulla at volutpat diam ut venenatis tellus in metus vulputate. Dictum at tempor commodo ullamcorper a lacus vestibulum. Scelerisque mauris pellentesque pulvinar pellentesque. Urna duis convallis convallis tellus id. Enim neque volutpat ac tincidunt vitae semper quis. Tincidunt nunc pulvinar sapien et ligula. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. Congue mauris rhoncus aenean vel elit scelerisque mauris. Gravida arcu ac tortor dignissim.'
  },
  returnDevice: {
    title: 'Return Device',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl suscipit adipiscing bibendum est. Scelerisque mauris pellentesque pulvinar pellentesque. Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Id diam vel quam elementum pulvinar. Id neque aliquam vestibulum morbi blandit cursus risus at. Maecenas pharetra convallis posuere morbi leo. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Leo urna molestie at elementum eu facilisis. Nulla porttitor massa id neque. Id ornare arcu odio ut sem nulla pharetra diam sit. Tellus molestie nunc non blandit. Sollicitudin aliquam ultrices sagittis orci. Duis ultricies lacus sed turpis tincidunt id. Nulla pharetra diam sit amet nisl suscipit. Elit pellentesque habitant morbi tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada.'
  },
}

function App() {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route index element={<Navigate to="signin" replace />} />
        <Route path="/signin" element={<SignIn />} />
				<Route element={<SideBar />}>
          <Route element={<Header />}>
            <Route path="/home" element={<Home />}>
            </Route>
            <Route path="/devices" element={<Devices />}>
            </Route>
            <Route path="/contracts" element={<Contracts />}>
            </Route>
            <Route path="/orders" element={<Orders />}>
            </Route>
            <Route path="/support" element={<Support />}>
              <Route path="questions" element={<Faq />} />
              <Route path="deviceBroken" element={<InfoBlock info={info.deviceBroken} title='Device Broken'/>} />
              <Route path="deviceLostOrStolen" element={<InfoBlock info={info.deviceLostOrStolen} title='Device Lost or Stolen'/>} />
              <Route path="deviceReturn" element={<InfoBlock info={info.returnDevice} title='Return Device'/>} />
            </Route>
          </Route>
        </Route>
			</Routes>
    </div>
  );
}

export default App;
