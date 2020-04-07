import React, {Component} from 'react';
import Photo from './photo'

class PristinePics extends Component {
    render() {
    
       return <div>
        <button className="add-button"></button>
          <div className="photoPage">
         {this.props.posts.map((post, index) => <Photo key={index}post={post} onDeletePhoto={this.props.onDeletePhoto} />)}
          </div>
        </div>
  
    } 
}

export default PristinePics