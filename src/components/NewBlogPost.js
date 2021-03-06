import React from "react"

const NewBlogPost = (props) => {

    const {addNewBlogPost} = props

    return (
		<form onSubmit={(event) => addNewBlogPost(event,props)}>
			<label className="label">Title</label>
			<input type="text" className="input" name="title" placeholder="Title" required></input>
            <label className="label">Category</label>
			<input type="text" className="input" name="category" placeholder="Category (optional)"></input>
			<label className="label">Content</label>
			<textarea className="input" name="content" placeholder="What's on your mind?" required></textarea>
			<input type="submit" value="Create Post" className="button is-info"></input>
		</form>
	)

}

export default NewBlogPost