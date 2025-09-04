import React, { useState } from 'react';

const UrlShortenerForm: React.FC = () => {
    const [longUrl, setLongUrl] = useState('');
    const [validity, setValidity] = useState('');
    const [shortcode, setShortcode] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!longUrl) {
            setError('Please enter a URL.');
            return;
        }

        // Call the API to shorten the URL
        try {
            const response = await fetch('/api/shorten', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ longUrl, validity, shortcode }),
            });

            if (!response.ok) {
                throw new Error('Failed to shorten URL');
            }

            const data = await response.json();
            console.log('Shortened URL:', data);
            // Reset form fields
            setLongUrl('');
            setValidity('');
            setShortcode('');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="longUrl">Long URL:</label>
                <input
                    type="url"
                    id="longUrl"
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="validity">Validity Period (optional):</label>
                <input
                    type="text"
                    id="validity"
                    value={validity}
                    onChange={(e) => setValidity(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="shortcode">Custom Shortcode (optional):</label>
                <input
                    type="text"
                    id="shortcode"
                    value={shortcode}
                    onChange={(e) => setShortcode(e.target.value)}
                />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Shorten URL</button>
        </form>
    );
};

export default UrlShortenerForm;