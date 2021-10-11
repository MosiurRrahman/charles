import React, { Component } from 'react';
import BlogPostWrapper from './BlogPostWrapper';

class BlogDetailsInner extends Component {
    render() {
        return (
            <>
             <div className="col-xl-9 col-lg-8 col-12">
                 {/* there component show */}
                 <BlogPostWrapper/>
            </div>   
            </>
        );
    }
}

export default BlogDetailsInner;