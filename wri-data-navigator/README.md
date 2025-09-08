# WRI Data Navigator

A web application for navigating World Resources Institute (WRI) datasets, models, and tools relevant to Climate Risk Screening (CRS).

## Features

- **Browse Datasets**: View all available WRI datasets in an organized card layout
- **Search & Filter**: Search datasets by name, summary, or domain
- **Domain Filtering**: Filter datasets by their domain (Water, Land, Climate, etc.)
- **Detailed Views**: Click on any dataset to see comprehensive metadata
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **CRS Indicators**: Clearly marked datasets that are relevant for CRS applications

## Tech Stack

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React Hooks**: State management with useState and useEffect

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tth4vb/data_navigator.git
cd data_navigator/wri-data-navigator
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
wri-data-navigator/
├── app/
│   ├── layout.tsx          # Root layout with header
│   ├── page.tsx            # Homepage with dataset listing
│   └── dataset/
│       └── [id]/
│           └── page.tsx    # Dataset detail page
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Breadcrumb.tsx      # Breadcrumb navigation
│   └── DatasetCard.tsx     # Dataset card component
├── types/
│   └── dataset.ts          # TypeScript type definitions
├── public/
│   └── data.json          # Dataset JSON data
└── README.md
```

## Data Source

The dataset information is sourced from the Excel file "For Discussion - CRS Relevant Data, Applications, and Tools from WRI.xlsx" and converted to JSON format for web consumption.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is part of the World Resources Institute data tools.
