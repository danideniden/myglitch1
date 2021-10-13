import * as React from "react";


export default class Student extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      num:0,
      gap:1000
    };
    this.fastOrSlow = this.fastOrSlow.bind(this);
  }
  
  fastOrSlow(){
    this.setState({gap:this.state.gap===1000?100:1000});
  }
  
  componentDidMount(){
    this.intrId = setInterval(()=>this.setState({num:this.state.num+1}), this.state.gap);
  }
  
  componentDidUpdate(){
    clearInterval(this.intrId)
    this.intrId = setInterval(()=>this.setState({num:this.state.num+1}), this.state.gap);
  }
  
  componentWillUnmount(){
    clearInterval(this.intrId)
  }
  
  
  
  render(){
    return(
      <>
      <div>Num is {this.state.num}</div>
      <button onClick={this.fastOrSlow}>Touch me</button>
      </>
    )
  }
}
