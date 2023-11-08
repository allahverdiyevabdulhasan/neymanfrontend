import { useEffect, useState } from "react";
// import { AiOutlineSearch } from "react-icons/Ai";
import { FaAngleRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import UseFetch from "../../UseFetch";

import Loading from "../../Components/Loading/Loading";
import "./BlogDetails.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { motion } from "framer-motion"

const BlogDetails = () => {
  const { slug } = useParams();
  const apiUrl = import.meta.env.VITE_API_URL;
  const { data: blogs, error } = UseFetch(`${apiUrl}blog_api/blog/${slug}`);
  const { data: bloges } = UseFetch(`${apiUrl}blog_api/blog`);
  




 

 

  const [loading, setLoading] = useState(false);

  // CARD FILTER

  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <motion.section  initial={{ opacity: 0 }}
        transition={{duration:0.5}}
        whileInView={{ opacity: 1 }} className="blogDetails">
          {/* BlogDetails Component start */}

          {error && <div>{error}</div>}
          {blogs && (
            <div className="blogDetails-container">
              <div className="blogHeader">
                <div className="blogDetailsHeader">
                  <div className="blogTitle">
                    <h2>
                      {/* The Rise Of Marketin<span>g</span>And Why You Need It */}
                      {blogs.title.split("").map((char, index) => (
                        <span
                          key={index}
                          style={
                            index === Math.floor(blogs.title.length / 2)
                              ? { borderBottom: "2px solid #f78da7" }
                              : {}
                          }
                        >
                          {char}
                        </span>
                      ))}
                    </h2>
                  </div>

                  <div className="blogLinks">
                    <Link to="/home" className="blogLink">
                      Home
                    </Link>
                    <FaAngleRight className="angleIcon" />
                    <Link to="blog" className="blogLink">
                      Blog
                    </Link>
                    <FaAngleRight className="angleIcon" />
                    <p>{blogs.title}</p>
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="right-left-container">
                  <div className="left">
                    <div className="cards-container">
                      <div className="card">
                        <div className="cardImgContainer">
                          {/* r */}
                          <img src={blogs.photo} />
                        </div>
                        <div className="bottom-content">
                          <h2>{blogs.title}</h2>
                          {/* <p>{blogs.description}</p> */}
                          {/* <p>{blogs.long_descriptions}</p> */}
                          <p dangerouslySetInnerHTML={{ __html: blogs.long_descriptions }} />
                          
                        </div>
                      </div>
                    </div>

                    {/* BlogDetails Component end */}
                  </div>
                  <div className="right">
                    <div className="search">
                      <div className="input-button-container">
                        <input type="text" placeholder="search..." />
                        <div className="search-icon-container">
                          <AiOutlineSearch className="search-icon" />
                        </div>
                      </div>
                    </div>
                    <div className="recent-posts-container">
                      <h2>Recent Posts</h2>
                      {blogs && (
                       
                          <div className="post-details">
                          <div className="details-img">
                            <img src={blogs.photo} alt="" />
                          </div>
                          <div className="description">
                            <p className="date">
                              {blogs.created_at.slice(0, 10)}
                            </p>
                            {/* <p className="title">{blogs.short_descriptions}</p> */}
                            <p className="title" dangerouslySetInnerHTML={{ __html: blogs.short_descriptions }} />
                          </div>
                        </div>
                     
                      )}
                    </div>

                    <div className="category-container">
                      <h2 className="title">Categories</h2>
                      <div className="category-list-container">
                        {bloges&&bloges.map((_blog) => (
                          <p key={_blog.blog_category.id}>
                            {_blog.blog_category.name}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="tags-container">
                  <h2 className="title">Tags</h2>
                  <div className="tags">
                  {bloges &&
              [...new Set(bloges.flatMap((blog) => blog.tag.map((t) => t.name)))].map(
                (name, index) => (
                  <Link key={index}>
                    <p onClick={() => setSearch(name)}>{name}</p>
                  </Link>
                )
              )}
                  </div>
                </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.section>
      )}
    </>
  );
};

export default BlogDetails;
