import React from "react";
import {IPostModel} from "../../models/post/IPostModel";
import {getAllPostsByUserId} from "../../services/api.service";

type MyState = {
    posts: IPostModel[]
}

// type myProps = {
//     id:number
// }

class PostsClass extends React.Component<MyState> {
    // state: MyState = {
    //     posts: []
    // }
    // props: myProps ={
    //     id: 1
    // }
    //
    // componentDidMount() {
    //     getAllPostsByUserId(this.props.id).then(value => this.setState({posts: value.data.posts}))
    // }

    render() {
        return (<div>
            {
                this.props.posts.map(post=> (<div key={post.id}>{post.title}</div>))
            }
        </div>)
    }

}

export default PostsClass;