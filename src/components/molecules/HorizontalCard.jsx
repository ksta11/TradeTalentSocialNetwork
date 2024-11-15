import React from 'react';
import './HorizontalCard.css'; // Asegúrate de importar el CSS correspondiente

export function HorizontalCard({ className, title, content, imageUrl }) {
    return (
        <div className={`horizontal-card ${className}`}>
            <img src={imageUrl} alt={title} className="horizontal-card-img" />
            <div className="horizontal-card-body">
                <h5 className="horizontal-card-title">{title}</h5>
                <p className="horizontal-card-text">{content}</p>
            </div>
        </div>
    );
}
