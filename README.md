# DoxaLanding - Landing Page for DoxaV3

![DoxaV3 Logo](generated-icon.png)

## Overview

DoxaLanding is the official landing page for DoxaV3, a decentralized stablecoin platform built on the Internet Computer. This modern, responsive website showcases DoxaV3's features, benefits, and roadmap to potential users.

## Features

- **Modern React Frontend**: Built with React 18, TypeScript, and Vite for optimal performance
- **Beautiful UI Components**: Utilizes Radix UI primitives and custom components
- **Responsive Design**: Fully responsive design that works across all device sizes
- **Animation Effects**: Smooth animations powered by Framer Motion
- **Internet Computer Deployment**: Configured for deployment as an assets canister on the Internet Computer

## Technology Stack

- **Frontend**: React, TypeScript, TailwindCSS
- **State Management**: React Query
- **Router**: Wouter (lightweight routing)
- **Styling**: TailwindCSS with custom configurations
- **Animation**: Framer Motion
- **Deployment**: Internet Computer (ICP) via dfx

## Getting Started

### Prerequisites

- Node.js 16+ and npm
- dfx CLI (for Internet Computer deployment)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DoxaFoundation/doxa-landing.git
   cd doxa-landing
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. The app will be available at http://localhost:3000

## Building and Deployment

### Building for Production

```bash
npm run build
```

### Deploying to Internet Computer

1. Make sure dfx is installed and you're logged in:
   ```bash
   dfx identity use default
   ```

2. Deploy to the local replica:
   ```bash
   dfx deploy --network=local
   ```

3. Deploy to the IC mainnet:
   ```bash
   dfx deploy --network=ic
   ```

## Project Structure

```
├── client/                    # Frontend code
│   ├── src/                   # Source files
│   │   ├── components/        # React components
│   │   ├── pages/             # Page components
│   │   ├── lib/               # Utility functions
│   │   └── App.tsx            # Main app component
├── server/                    # Express server code (for dev environment)
├── dist/                      # Build output
├── public/                    # Static assets
├── dfx.json                   # Internet Computer configuration
└── package.json               # Project dependencies
```

## Main Features Showcased

- Stablecoin creation and management
- Staking rewards system
- Decentralized governance
- Multi-chain support
- Passive income opportunities

## Community and Resources

- Twitter: [@DoxaV3](https://twitter.com/DoxaV3)
- Discord: [DoxaV3 Community](https://discord.gg/doxav3)
- GitHub: [DoxaFoundation/doxa-v3](https://github.com/DoxaFoundation/doxa-v3)
- Documentation: [Developer Docs](https://sgv54-gyaaa-aaaag-qngxa-cai.icp0.io/)
- User Guide: [Doxa Guide](https://doxa-1.gitbook.io/doxa-guide/features/quickstart)

## Launch Doxa

Visit [Doxa App](https://i7m4z-gqaaa-aaaak-qddtq-cai.icp0.io/) to use the platform.

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact us at [doxadaooperations@gmail.com](mailto:doxadaooperations@gmail.com). 