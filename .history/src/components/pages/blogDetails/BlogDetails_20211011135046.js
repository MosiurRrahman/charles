import React, { Component } from 'react';
import BlogSIdear from '../blog/BlogSIdear';
import BlogDetailsInner from './BlogDetailsInner';

class BlogDetails extends Component {
    render() {
        return (
            <>
             <div className="our-blog section-spacing">
                 <div className="container">
                     <div className="row">
                         <BlogDetailsInner/>
                         
                         <BlogSIdear/>
                     </div>
                 </div>
                 </div>   
            </>
        );
    }
}

export default BlogDetails;