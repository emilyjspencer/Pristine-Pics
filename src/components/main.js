import React, { Component } from "react";
import ReactDOM from "react-dom";
import Title from "./title";
import PristinePics from "./pristinePics";
import UploadPhoto from "./uploadPhoto";
import { Route } from "react-router-dom";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id: "0",
          description: "Beach shot",
          imageLink:
            "https://aspenchamber.org/sites/default/files/images/Beach.stockimage.jpg",
        },
        {
          id: "1",
          description: "Mountain shot",
          imageLink:
            "https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg?t=st=1683643657~exp=1683644257~hmac=1e8b36233f8885f170054cfcba0b81f900c1e73450fadf7e4372f5d81ebd0e6b",
        },
        {
          id: "2",
          description: "Forest shot",
          imageLink:
            "http://allpicts.in/wp-content/uploads/2018/09/High-Resolution-Nature-Photo-with-Picture-of-Autumn-Forest.jpg",
        },
      ],
      page: "photos",
    };
    this.deletePhoto = this.deletePhoto.bind(this);
  }

  addPhoto(postSubmitted) {
    this.setState((state) => ({
      posts: state.posts.concat([postSubmitted]),
    }));
  }

  deletePhoto(photoDeleted) {
    console.log(photoDeleted.description);
    this.setState((state) => ({
      posts: state.posts.filter((photo) => photo !== photoDeleted),
    }));
  }

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Title title={"Pristine Pics"} />
              <PristinePics
                posts={this.state.posts}
                onDeletePhoto={this.deletePhoto}
                onChangePage={this.changePage}
              />
            </div>
          )}
        />

        <Route
          path="/AddPhoto"
          render={({ history }) => (
            <UploadPhoto
              onAddPhoto={(addedPost) => {
                this.addPhoto(addedPost);
                history.push("/");
              }}
            />
          )}
        />
      </div>
    );
  }
}

export default Main;
