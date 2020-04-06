import React, {Component} from 'react';

class Photo extends Component {
    render() {
      const post = this.props.post
      return <figure className="captionAndPic">
        <img src={post.imageLink} alt={post.description}></img>
      </figure>
    }
}

 
export default Photo