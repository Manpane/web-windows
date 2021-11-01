import React from 'react';
import StartButton from './StartButton';

class Taskbar extends React.Component {
    render() { 
        return <div className="taskbar">
            <StartButton/>
        </div>;
    }
}
export default Taskbar;