import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchPosts} from './actions/PostActions'
class Home extends Component{

 
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  
  render(){
    const {posts} = this.props;
    const postList = posts.length? (
      posts.map(post =>{
              return(
                        <div className="post card" key={post.id}>
                          <div className="card-content">
                            
                            <Link to ={'/'+ post.id}>
                              <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                          </div>
                        </div>
              )
      })
      
    ):(
      <div className="center">
        <p>Thre is no post</p>
      </div>
    );

        return(
                <div className="container">
                  <h1 className="center">Home</h1>
                    {postList}
                </div>
              )
          }
        }
const mapStateToProps=(state)=>{
  return ({
      posts: state.posts
  })
}
  export default connect(mapStateToProps)(Home);