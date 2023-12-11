import './App.scss';
import { Taskbar } from './components/taskbar/organisms/Taskbar';
import { Desktop } from './components/desktop/organisms/Desktop';
import { StartMenu } from './components/start-menu/organisms/StartMenu';
import { Shell } from './components/shell/organisms/Shell';

function App() {
  return (
    <div className="App">
      <div className="shaders">
        <div className="crt"></div>
        <div className="glass"></div>
      </div>
      <Shell />
      <StartMenu />
      <Desktop />
      <Taskbar />
    </div>
  );
}

export default App;
