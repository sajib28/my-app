import React, { Component } from 'react'
import axios from 'axios';
class Welcome extends Component {
    state={
        posts:[]
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(res => {
            this.setState({ posts: res.data});
          })
          .catch(function(error){
            console.log(error);
          })
      }
    render() {
      const posts = this.state.posts;
       const allPosts = posts.map((post,index)=> {
          return(
              <div className="postarea" key={index}>
                   <h1>{post.title}</h1>
                   <p>{post.body}</p>
              </div>
          )
       })
        return (
            <div>
               {allPosts}
            </div>
        )
    }
}
export default Welcome