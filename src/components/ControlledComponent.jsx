import React from "react";
class ControlledComponent extends React.Component{
    state = {
        stateValue : "",
    };
    render() {
        const {stateValue} = this.state;
        return (
            <div>
                <input value={stateValue} onChange={this.change}/>
                <button onClick={this.click}>전송</button>
            </div>
        );
    }
    change = (e) => {
       //console.log(e.target.value);
       this.setState({stateValue:e.target.value});
    };
    click = () => {
        console.log(this.state.stateValue);
    }
}
export default ControlledComponent;