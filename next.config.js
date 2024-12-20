const isProd = process.env.GH_PAGES === 'true';

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/alberatung/' : './',
  basePath: isProd ? '/alberatung' : '',
  trailingSlash: true,
};

module.exports = nextConfig;
