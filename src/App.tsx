import './App.css';
import { Taskbar } from './components/taskbar/organisms/Taskbar';
import { Desktop } from './components/desktop/organisms/Desktop';
import { StartMenu } from './components/start-menu/organisms/StartMenu';
import { Shell } from './components/shell/organisms/Shell';

function App() {
  return (
    <div className="App">
      <Shell />
      <StartMenu />
      <Desktop />
      <Taskbar />
    </div>
  );
}

export default App;
