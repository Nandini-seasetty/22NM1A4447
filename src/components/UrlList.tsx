import React from 'react';

interface Url {
    id: string;
    originalUrl: string;
    shortenedUrl: string;
    expiryDate: string;
}

interface UrlListProps {
    urls: Url[];
}

const UrlList: React.FC<UrlListProps> = ({ urls }) => {
    return (
        <div>
            <h2>Shortened URLs</h2>
            <ul>
                {urls.map((url) => (
                    <li key={url.id}>
                        <p>Original URL: <a href={url.originalUrl} target="_blank" rel="noopener noreferrer">{url.originalUrl}</a></p>
                        <p>Shortened URL: <a href={url.shortenedUrl} target="_blank" rel="noopener noreferrer">{url.shortenedUrl}</a></p>
                        <p>Expiry Date: {url.expiryDate}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UrlList;