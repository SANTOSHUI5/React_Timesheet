import React from 'react';
import './footer.css';
import MessageToast from './messageToast.js';
const $ = window.jQuery;
export default  class Footer extends React.Component{
  constructor(props) {
super(props);
this.state = {
  messType : 'none',
  messTitle : "",
  messText : ""
}
  }
  componentDidMount = ()=>{
  }
  onBtClick = (oEvent) =>{
    switch (oEvent) {
      case 'save':
        this.setState({
          messType : 'Success',
          messTitle : "Succeded!",
          messText : "data got saved successfully!"
        });
        break;
        case 'review':
        this.setState({
          messType : 'Warning',
          messTitle : "Warning!",
          messText : "please connect to server!"
        });
          break;
          case 'refresh':
          this.setState({
            messType : 'Warning',
            messTitle : "refreshed!",
            messText : "no function to handle this!"
          });
            break;
      default:

    }
    $("#myToast").toast({ delay: 3000 });
            $("#myToast").toast('show');
  }
render(){
  return(
    <div>
  <div className="footer">
  <div className="footerBtn">
  <button type="button" onClick={()=>{this.onBtClick('save')}}>Save</button>
  <button type="button" onClick={()=>{this.onBtClick('review')}}>Review To Post</button>
  <button type="button" onClick={()=>{this.onBtClick('refresh')}}>Refresh</button>
  </div>
</div>
<MessageToast title={this.state.messTitle} text={this.state.messText} type={this.state.messType}/>
</div>
  )
}

}
