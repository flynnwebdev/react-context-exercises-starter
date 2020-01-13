import React from "react"
import {Heading, Button} from "react-bulma-components"

const BlogPostTitle = props => {

    const {id, title, showEditDelete, deleteBlogPost} = props
    return (
        <div>
        <Heading>{title}</Heading>
        {showEditDelete && (
            <div className="level-right">
            <Button className="add-margin" color="info">Edit</Button>
            <Button className="add-margin" color="info" onClick={() => deleteBlogPost(id, props)}>Delete</Button>
            </div>
        )}
        </div>
    )
}

export default BlogPostTitle