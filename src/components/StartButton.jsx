import React from 'react';

class StartButton extends React.Component {
    render() { 
        return <div className="start-button">
            <div className="start-button-boxes boxes-1">
                <div className="start-button-box" />
                <div className="start-button-box" />
            </div>
            <div className="start-button-boxes boxes-2">
                <div className="start-button-box" />
                <div className="start-button-box" />
            </div>

        </div>;
    }
}
 
export default StartButton;