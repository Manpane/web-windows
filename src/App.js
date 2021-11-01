import './App.css';
import React from 'react';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
class App extends React.Component {
    render() { 
        return <div className="windows">
            <Desktop/>
            <Taskbar/>
        </div>;
    }
}
 
export default App;