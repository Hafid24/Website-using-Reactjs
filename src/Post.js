import React, {Component} from 'react'
import axios from 'axios'
class Post extends Component{

    state={
        post: null
    }
    componentDidMount(){
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(resp=>{
            console.log(resp);
        
            this.setState({
                post: resp.data
            })
        })
    }
    render(){
        
        const post = this.state.post? (
            <div className="post">
                <h1 className="center">{this.state.post.title}</h1>
                <p className="center">{this.state.post.body}</p>
            </div>
        ):(
            <h3 className="center">Post does not exist</h3>
        );

        return(
            <div className="container">
                {post}
            </div>
        )
    }
}



export default Post