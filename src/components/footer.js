import React from 'react';
import './footer.css';
export default  class Footer extends React.Component{
  constructor(props) {
super(props);
  }
render(){
  return(
        <div className="footer">
        <div className="footerBtn">
  <button type="button">Save</button>
  <button type="button" >Review To Post</button>
  <button type="button">Refresh</button>
  </div>
</div>

  )
}

}
