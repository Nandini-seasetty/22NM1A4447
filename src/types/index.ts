export interface ShortenedUrl {
    id: string;
    originalUrl: string;
    shortenedUrl: string;
    expiryDate?: Date;
    shortcode?: string;
}

export interface AnalyticsData {
    urlId: string;
    clicks: ClickData[];
}

export interface ClickData {
    timestamp: Date;
    source: string;
    location: string;
}