import React, { Component } from 'react';
import reqHandler from './../../utils/reqHandler';
import notifiy from './../../notifications/notify';

class CreateComment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posted: false
        }

    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state === null) {
            notifiy.showError('The content of the comment cannot be empty!');
            return;
        }
        let data = {
            postId: this.props.id,
            content: this.state.content,
            author: localStorage.getItem('username')
        };
        reqHandler.createComment(data)
            .then(response => {
                notifiy.showInfo('Comment created!');
                window.location.replace(`/details/${this.props.id}`);
            })
    }

    render() {
        return (
            <div className="post post-content">
                <form id="commentForm" onSubmit={this.onSubmit}>
                    <label>Comment</label>
                    <textarea onChange={this.onChange} name="content" type="text"/>
                    <input type="submit" value="Add Comment" id="btnPostComment" />
                </form>
            </div>
        )
    }
}

export default CreateComment;