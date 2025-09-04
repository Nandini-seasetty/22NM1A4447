# URL Shortener Application

This is a URL Shortener web application built with React and TypeScript. The application allows users to shorten long URLs, view a list of shortened URLs, and analyze their performance through various metrics.

## Features

- **URL Shortening**: Users can input a long URL, specify an optional validity period, and create a custom shortcode.
- **URL List**: Displays a list of all shortened URLs along with their original URLs and expiry dates.
- **Analytics Dashboard**: Provides insights into the performance of shortened URLs, including click data, timestamps, sources, and geographical locations.

## Project Structure

```
frontend test submission
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── components          # React components
│   │   ├── UrlShortenerForm.tsx
│   │   ├── UrlList.tsx
│   │   └── AnalyticsDashboard.tsx
│   ├── pages               # Application pages
│   │   ├── Home.tsx
│   │   └── Analytics.tsx
│   ├── services            # API service functions
│   │   └── api.ts
│   ├── types               # TypeScript interfaces
│   │   └── index.ts
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Entry point for React application
├── package.json            # npm configuration file
├── tsconfig.json           # TypeScript configuration file
└── README.md               # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd url-shortener-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- To shorten a URL, enter the long URL in the input field on the home page and click the "Shorten" button.
- View the list of shortened URLs and their details on the same page.
- Navigate to the Analytics page to view detailed insights about the shortened URLs.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.
