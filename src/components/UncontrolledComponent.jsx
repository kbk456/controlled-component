import React from 'react';

class UncontrolledComponent extends React.Component{
    inputRef = React.createRef();

    render() {
        console.log('iniial render',this.inputRef);
        return (
            <div>
                <input ref={this.inputRef}/>
                <button onClick={this.click}>전송</button>
            </div>
        );
    }
     click = () => {
     console.log(this.inputRef.current.value);
    }
    componentDidMount() {
        console.log("componentDidMount",this.inputRef);
    }
}
export default UncontrolledComponent;