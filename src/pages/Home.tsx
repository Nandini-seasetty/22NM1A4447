import React from 'react';
import UrlShortenerForm from '../components/UrlShortenerForm';
import UrlList from '../components/UrlList';

const Home: React.FC = () => {
    return (
        <div>
            <h1>URL Shortener</h1>
            <UrlShortenerForm />
            <UrlList />
        </div>
    );
};

export default Home;