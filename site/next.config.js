const nextConfig = {
  env: {
    name: 'My Workspace',
    description: 'test',
    icon: '/img/logo.svg',
    listUrl: 'https://godu-lzr.github.io/kasm-registry/',
    contactUrl: 'https://godu-lzr.github.io/kasm-registry/issue',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
