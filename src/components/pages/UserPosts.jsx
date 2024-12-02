import React, { useState } from 'react';
import { Card } from '../molecules/Card';
import IconLink from '../atoms/IconLink';

export function UserPosts() {
    const [posts, setPosts] = useState([
        { id: 1, content: 'Publicación 1', likes: 0, user: 'gato.arroyavep', image: '/gato.png' },
        { id: 2, content: 'Publicación 2', likes: 0, user: 'elpepe3212', image: '/publicacion2.png' },
        { id: 3, content: 'Publicación 3', likes: 0, user: 'zeus111111', image: '/zeus.jpg' }
        // Agrega más publicaciones según sea necesario
    ]);

    const handleLike = (id) => {
        setPosts(posts.map(post => 
            post.id === id ? { ...post, likes: post.likes + 1 } : post
        ));
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 display-4 text-primary font-weight-bold">
                Publicaciones de Usuarios
            </h1>
            <div className="row">
                {posts.map(post => (
                    <div key={post.id} className="col-12 col-md-6 col-lg-4 mb-4">
                        <Card 
                            className="post-card shadow-lg rounded"
                            title={post.user}
                            content={post.content}
                            imageUrl={post.image}
                        />
                        <div className="like-container text-center mt-3">
                            <button onClick={() => handleLike(post.id)} className="btn btn-primary btn-lg">
                                <IconLink icon="bi bi-heart-fill" to={null} tooltipText="Like" />
                                <span className="ml-2 h5">{post.likes}</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 