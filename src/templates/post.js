import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

export default class PostPage extends Component {
    constructor() {
      super();
    }

    render() {
        const post = this.props.data.contentfulPost; 
        return (
            <div>
                <h1>{post.title}</h1>
                <ReactMarkdown source={post.content.content} escapeHtml={false}/>
            </div>
        )
    }
}

export const PostPageQuery = graphql`
query PostPageQuery ($id: String!) {
    contentfulPost(slug: {eq: $id}) {
        id
        title
        published
        slug
        categories {
          id
          name
        }
        tags{
          id
          name
        }
        content {
              content
          }
    }
}
`