import React from "react";
import "./NotFound.css";

export default function NotFound() {
    return (
        <div className="not-found-container">
            <div>
                <h1 className="not-found-title">404 - Page Not Found</h1>
                <p className="not-found-text">The page you're looking for doesn't exist.</p>
            </div>
        </div>
    );
}
