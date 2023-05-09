import React, { Component } from "react";
import Photo from "./photo";
import { Link } from "react-router-dom";

class PristinePics extends Component {
  render() {
    return (
      <div>
        <Link className="add-photo-link" to="/AddPhoto">
          {" "}
        </Link>

        <div className="photoPage">
          {this.props.posts.map((post, index) => (
            <Photo
              key={index}
              post={post}
              onDeletePhoto={this.props.onDeletePhoto}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default PristinePics;
