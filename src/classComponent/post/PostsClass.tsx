import React from "react";
import {IPostModel} from "../../models/post/IPostModel";
import {getAllPostsByUserId} from "../../services/api.service";

type MyState = {
    posts: IPostModel[]
}

type myProps = {
    id:number
}

class PostsClass extends React.Component<myProps, MyState> {
    state: MyState = {
        posts: []
    }
    props: myProps ={
        id: 1
    }

    componentDidMount() {
        getAllPostsByUserId(this.props.id).then(value => this.setState({posts: value.data.posts}))
    }

    render() {
        return (<div>
            {
                this.state.posts.map(posts=> (<div key={posts.id}>{posts.title}</div>))
            }
        </div>)
    }

}

export default PostsClass;