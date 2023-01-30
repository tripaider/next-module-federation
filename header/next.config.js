const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'header',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
            home: 'home@http://localhost:3001/_next/static/chunks/remoteEntry.js',
            shop: 'shop@http://localhost:3002/_next/static/chunks/remoteEntry.js',
            checkout: 'checkout@http://localhost:3000/_next/static/chunks/remoteEntry.js',
            header: 'header@http://localhost:3003/_next/static/chunks/remoteEntry.js',
          },
          exposes: {
            // './header': './pages/header',
            './pdp': './pages/p/[...slug].js',
            './pages-map': './pages-map.js',
            './customHook': './components/someHook.js',
            './menu': './components/websiteMenu.js',
          },
        }),
      );
    }
    return config;
  },
};
