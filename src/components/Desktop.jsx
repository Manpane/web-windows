import React from 'react';
import DesktopSelection from './DesktopSelection';
class Desktop extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selecting : false,
            selectStartPos : {x:0,y:0},
            selectEndPos : {x:null,y:null}
        }
    }
    selectionStyle={
    }
    getSW = () =>(this.state.selectEndPos.x!==null && this.state.selectEndPos.x<this.state.selectStartPos.x)? this.state.selectStartPos.x-this.state.selectEndPos.x :this.state.selectEndPos.x-this.state.selectStartPos.x;//selected area width
    getSH = () => (this.state.selectEndPos.x!==null && this.state.selectEndPos.y<this.state.selectStartPos.y) ? this.state.selectStartPos.y-this.state.selectEndPos.y : this.state.selectEndPos.y-this.state.selectStartPos.y;//selected area height
    getSTM = () => (this.state.selectEndPos.x!==null && this.state.selectEndPos.y<this.state.selectStartPos.y) ? this.state.selectEndPos.y :this.state.selectStartPos.y;//selected area top margin
    getSLM = () => (this.state.selectEndPos.x!==null && this.state.selectEndPos.x<this.state.selectStartPos.x)? this.state.selectEndPos.x:this.state.selectStartPos.x;//selected area left margin
    handleMouseDown = (e) => {
        this.setState({
            selectStartPos : {x:e.nativeEvent.x,y:e.nativeEvent.y},
            selecting:true
        });
    }
    resetSelection = () => {
        if (this.state.selecting){
            this.setState({
                selecting:false,
                selectStartPos : {x:0,y:0},
                selectEndPos : {x:null,y:null}
            });
        }
    }
    handleMOuseMove = (e) => {
        if (this.state.selecting){
            this.setState({
                selectEndPos : {x:e.nativeEvent.x,y:e.nativeEvent.y}
            });
        }
    } 
    render() { 
        return (
        <div className="desktop" onMouseDown={this.handleMouseDown} onMouseUp={this.resetSelection} onMouseMove={this.handleMOuseMove} onMouseLeave = {this.resetSelection}>
            <DesktopSelection getSW={this.getSW} getSH = {this.getSH} getSLM ={this.getSLM} getSTM = {this.getSTM}/>
        </div>
        );
    }
}
 
export default Desktop;