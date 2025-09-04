import React, { useEffect, useState } from 'react';
import { getAnalytics } from '../services/api';
import { AnalyticsData } from '../types';

const AnalyticsDashboard: React.FC = () => {
    const [analyticsData, setAnalyticsData] = useState<AnalyticsData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const data = await getAnalytics();
                setAnalyticsData(data);
            } catch (err) {
                setError('Failed to fetch analytics data');
            } finally {
                setLoading(false);
            }
        };

        fetchAnalytics();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Analytics Dashboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>Shortened URL</th>
                        <th>Clicks</th>
                        <th>Timestamp</th>
                        <th>Source</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {analyticsData.map((item) => (
                        <tr key={item.shortenedUrl}>
                            <td>{item.shortenedUrl}</td>
                            <td>{item.clicks}</td>
                            <td>{item.timestamp}</td>
                            <td>{item.source}</td>
                            <td>{item.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AnalyticsDashboard;