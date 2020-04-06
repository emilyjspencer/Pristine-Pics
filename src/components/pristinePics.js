import React, {Component} from 'react';
import Photo from './photo'

class PristinePics extends Component {
    render() {
       return <div>
         {this.props.posts.map((post, index) => <Photo key={index}post={post} />)}
        </div>
    } 
}

export default PristinePics