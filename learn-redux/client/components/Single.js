import React from 'react';
import Photo from './Photo';
import Comment from './Comment'

const Single = React.createClass({
    render(){
        const { postId } = this.props.params;
        const index = this.props.posts.findIndex((post) => post.code === postId)
        const post =this.props.posts[index];
        const postComments = this.props.comments[postId] || []
        return (
            <div className="single-photo">
                <Photo index={ index } post={ post } {...this.props} />
                <Comment postComments={ postComments }  {...this.props} /> 
            </div> 
        )
    }
})

export default Single;