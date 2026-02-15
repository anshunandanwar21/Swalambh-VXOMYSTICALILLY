import React, { useState } from 'react';
import '../styles/Community.css';

const Community = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'John Doe',
      title: 'Had a phishing attempt today',
      content: 'I received an email claiming to be from my bank. Fortunately, I recognized it as a phishing attempt. Remember to always verify sender addresses!',
      timestamp: '2 hours ago',
      likes: 45,
    },
    {
      id: 2,
      author: 'Jane Smith',
      title: 'Tips for securing your WiFi',
      content: 'Change your default WiFi password, use WPA3 encryption, and disable WPS. These simple steps can significantly improve your network security.',
      timestamp: '1 day ago',
      likes: 78,
    },
  ]);

  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.title && newPost.content) {
      const post = {
        id: posts.length + 1,
        author: 'You',
        title: newPost.title,
        content: newPost.content,
        timestamp: 'just now',
        likes: 0,
      };
      setPosts([post, ...posts]);
      setNewPost({ title: '', content: '' });
    }
  };

  return (
    <div className="community-container">
      <h1>Community Forum</h1>
      <p className="intro">Share your experiences and learn from the community</p>

      <div className="post-form">
        <h2>Share Your Experience</h2>
        <form onSubmit={handlePostSubmit}>
          <input
            type="text"
            placeholder="Post title..."
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
          <textarea
            placeholder="Share your thoughts, tips, or experiences..."
            rows="4"
            value={newPost.content}
            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          />
          <button type="submit">Post</button>
        </form>
      </div>

      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <h3>{post.title}</h3>
              <span className="timestamp">{post.timestamp}</span>
            </div>
            <p className="author">By {post.author}</p>
            <p className="post-content">{post.content}</p>
            <div className="post-footer">
              <button className="like-btn">👍 {post.likes}</button>
              <button className="reply-btn">💬 Reply</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
