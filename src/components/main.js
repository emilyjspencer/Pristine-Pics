import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Title from './title'
import PristinePics from './pristinePics'
import UploadPhoto from './uploadPhoto'
import {Route} from 'react-router-dom'





class Main extends Component {
    constructor() {
        super()
        this.state = {
            posts: [{
                id: "0",
                description: "Night shot",
                imageLink: "http://i1.ytimg.com/vi/Bb0EeDT0meQ/maxresdefault.jpg"
                }, {
                id: "1",
                description: "Space shot",
                imageLink: "http://i1.ytimg.com/vi/Bb0EeDT0meQ/maxresdefault.jpg"
                }, {
                id: "2",
                description: "Lake shot",
                imageLink: "http://i1.ytimg.com/vi/8w-bKttzA-0/maxresdefault.jpg"
                }],

                page: 'photos'
        }
        this.deletePhoto = this.deletePhoto.bind(this);
    }

    addPhoto(postSubmitted) {
        this.setState(state => ({
            posts: state.posts.concat([postSubmitted])
        }))
    }
    
        
    deletePhoto(photoDeleted) {
        console.log(photoDeleted.description)
        this.setState((state) => ({
            posts: state.posts.filter(photo => photo !== photoDeleted)
        })) 
    }



  render() {
      return (
     
      <div>
        <Route exact path = "/" render={() => (
          <div>
            <Title title={'Pristine Pics'}/>
            <PristinePics posts={this.state.posts} onDeletePhoto={this.deletePhoto} onChangePage = {this.changePage}/>
          </div>
        )}/>
        
          <Route path="/AddPhoto" render ={({history}) => (
          
              <UploadPhoto onAddPhoto={(addedPost) => {
                 this.addPhoto(addedPost)
                 history.push('/')
               
              }} />
          )}/>
            
            </div>
       
         
      )
    }
}


export default Main