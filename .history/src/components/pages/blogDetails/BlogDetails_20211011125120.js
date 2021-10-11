import React, { Component } from 'react';
import BlogSIdear from '../blog/BlogSIdear';

class BlogDetails extends Component {
    render() {
        return (
            <>
             <div className="our-blog section-spacing">
                 <div className="container">
                     <div className="row">
                         <BlogSIdear/>
                     </div>
                 </div>
                 </div>   
            </>
        );
    }
}

export default BlogDetails;