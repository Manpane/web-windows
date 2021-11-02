const DesktopSelection = (props) => {
    return ( 
    <div className="desktop-selection" 
        style={{ width:`${props.getSW()}px`,
        height:`${props.getSH()}px`,
        top:`${props.getSTM()}px`,
        left:`${props.getSLM()}px` }}
    />
    );
}
 
export default DesktopSelection;