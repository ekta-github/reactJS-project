import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './components/post'
export class Posts extends Component {

    render() {
       return(
       <div>
           <h1>Posts</h1>
           {
             this.props.postData.map((post)=><Post key={post.id} post={post}/>)  
           }
             
       </div>
     
       )
    }
}

const mapStateToProps = state => ({
    postData: state.core.postData
});

export default connect(mapStateToProps)(Posts);

