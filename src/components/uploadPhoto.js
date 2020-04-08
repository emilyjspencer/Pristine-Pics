import React, {Component} from 'react'


class UploadPhoto extends Component {

render() {
    return (
  <div>
    <h1>Pristine Pics</h1>
    <div className="form">
      <form>
        <input type ="text" placeholder="url" />
        <input type="text" placeholder="description" />
        <button> Post </button>
      </form>
    </div>
  </div>
    )
}

}

export default UploadPhoto 