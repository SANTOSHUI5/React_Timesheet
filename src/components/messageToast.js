import React from 'react';
import './footer.css'
export default  class MessageToast extends React.Component{
  constructor(props) {
super(props);
  }
render(){
  return(
    <div class="toast" id="myToast">
    <div class="toast-header">
          <strong class="mr-auto">
          <i className={this.props.type === "Warning" ? "fa fa-exclamation-triangle" : "fa fa-thumbs-up"}
          style={{color: this.props.type === "Warning" ?'#e5e83c' : '#73e83c',padding:'10px'}}></i>
          {this.props.title}
          </strong>
    </div>
    <div class="toast-body">
          {this.props.text}
    </div>
    </div>
  )
}
}
