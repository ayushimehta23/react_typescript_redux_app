import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/action';

interface HomeProps {
    posts: any;
    fetchPosts: () => void;
  }

const Home = ({ posts, fetchPosts }: HomeProps) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts?.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps, { fetchPosts })(Home);