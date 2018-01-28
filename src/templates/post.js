import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import PageTransition from '../components/PageTransition'
import hljs from 'highlight.js'
import moment from 'moment'

export default class PostPage extends Component {
    constructor() {
        super();
        this.state = { in: true }
    }

    componentDidMount() {
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
        console.log(post);
        return (
            <PageTransition
                timeout={350}
                classNames="fade"
                shouldShow={this.state.in}
            >
                <div className="pageWrap">
                    <div className="banner" style={{backgroundImage: `url(${post.banner.file.url})`}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-sm-10 offset-sm-1">
                                    <div className="banner__cont">
                                        <p className="banner__tags">
                                            <small>
                                                <i className="icon-tag"></i>&nbsp;
                                                {post.tags.map((tag, index)=>{
                                                    return post.tags.length !== (index + 1) ? `${tag.name}, ` : `${tag.name}` 
                                                })}
                                            </small>
                                        </p>
                                        <h1 className="banner__title">{post.title}</h1>
                                        <ReactMarkdown className="banner__intro" source={post.intro.intro} escapeHtml={false}/>
                                        <p className="banner__published"><small>Posted {moment(post.published).fromNow()}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="banner__ovly"></div>
                    </div>
                    <div className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-10 offset-sm-1" ref={(elem) => { this.content = elem; }}>
                                    <ReactMarkdown source={post.content.content} escapeHtml={false}/>
                                </div>
                            </div>
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
        banner {
          id
          file {
            url
            fileName
            contentType
          }
        }
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
        intro {
            intro
        }
    }
}
`