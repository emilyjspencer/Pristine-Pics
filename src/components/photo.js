import React, {Component} from 'react';

class Photo extends Component {
    render() {
      const post = this.props.post
      return <figure className="captionAndPic">
        <img className="pic" src={post.imageLink} alt={post.description} />
        <figcaption> <p> {post.description} </p> </figcaption>
        <div className="container-button">
          <button onClick = {() => {
            this.props.onDeletePhoto(post)
          }}>Delete</button>
        </div>
      </figure>
    }
}

 
export default Photo