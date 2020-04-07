import React, {Component} from 'react';
import Photo from './photo'

class PristinePics extends Component {
    render() {
    
       return <div>
           <a className="add-photo-link" onClick={this.props.onChangePage} href="#AddPhoto"></a>
        
          <div className="photoPage">
         {this.props.posts.map((post, index) => <Photo key={index}post={post} onDeletePhoto={this.props.onDeletePhoto} />)}
          </div>
        </div>
  
    } 
}

export default PristinePics