import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import PageTransition from '../components/PageTransition'
import hljs from 'highlight.js'

export default class PostPage extends Component {
    constructor() {
        super();
        this.state = { in: true }
    }

    componentDidMount() {
        // hljs.initHighlightingOnLoad();
        let codeblocks = this.content.querySelectorAll('pre code');
        codeblocks.forEach((block) => {
            hljs.highlightBlock(block);
        });
    }

    componentWillUnmount() {
      this.setState({in: false})
    }

    render() {
        const post = this.props.data.contentfulPost; 
        return (
            <PageTransition
                timeout={350}
                classNames="fade"
                shouldShow={this.state.in}
            >
            <div className="container">
                <div className="row">
                    <div className="col-sm-10 offset-sm-1" ref={(elem) => { this.content = elem; }}>
                        <h1>{post.title}</h1>
                        <ReactMarkdown source={post.content.content} escapeHtml={false}/>
                    </div>
                </div>
            </div>
            </PageTransition>
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