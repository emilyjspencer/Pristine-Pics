import React, {Component} from 'react'


class UploadPhoto extends Component {

  constructor() {
      super()
      this.handleSubmit = this.handleSubmit.bind(this)

   }  

 handleSubmit(event) {
     event.preventDefault();
     const imageLink = event.target.elements.url.value
     const description = event.target.elements.description.value
     const post = {
         id: 0,
         description: description,
         imageLink: imageLink
     }
     if(description && imageLink) {
       this.props.onAddPhoto(post)
     }

 }

render() {
    return (
  <div>
    <h1>Pristine Pics</h1>
    <div className="form">
      <form onSubmit={this.handleSubmit}>
        <input type ="text" name="url" placeholder="url" />
        <input type="text" name="description" placeholder="description" />
        <button> Post </button>
      </form>
    </div>
  </div>
    )
}

}

export default UploadPhoto 