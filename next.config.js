/** @type {import('next').NextConfig} */

const nextConfig = {
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */

  output: 'export',

  /**
   * Set base path. This is the slug of your GitHub repository.
   * For example, if the Github repo is named 'xyz', then by default,
   * the site will be deployed to https://user.github.io/xyz.
   * This means basePath should be be set to '/xyz'.
   *
   * Note: If a custom domain is used (ie. virufy.org), basePath can be removed
   * or set to an empty string.
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: '',

  /**
   * Add a custom server route for redirection
   */
  trailingSlash: false,
  async rewrites() {
    return [
      {
        source: '/clinic/:path*',
        destination: '/clinic/index.html',
      },
      {
        source: '/demo/:path*',
        destination: '/demo/index.html',
      },
      {
        source: '/elderlycare/:path*',
        destination: '/elderlycare/index.html',
      },
      {
        source: '/study/:path*',
        destination: '/study/index.html',
      },
      {
        source: '/join',
        destination: '/join-us',
      },
      {
        source: '/team',
        destination: '/advisors',
      },
      {
        source: '/apply',
        destination:
          'https://docs.google.com/forms/d/e/1FAIpQLSdmlecMmXr3FqO1HajJFBmfpji8Blyjfs9U5jK3WT6BrSmDAA/viewform',
      },
    ];
  },

  /**
   * Add basic configs to optimize static images at build time
   *
   * @see https://github.com/Niels-IO/next-image-export-optimizer?tab=readme-ov-file#basic-configuration
   */
  images: {
    loader: 'custom',
    imageSizes: [256, 384],
    deviceSizes: [750, 1080, 1920, 3840],
  },
  transpilePackages: ['next-image-export-optimizer'],
  env: {
    nextImageExportOptimizer_imageFolderPath: 'public/images',
    nextImageExportOptimizer_exportFolderPath: 'out',
    nextImageExportOptimizer_quality: '75',
    nextImageExportOptimizer_storePicturesInWEBP: 'true',
    nextImageExportOptimizer_exportFolderName: 'nextImageExportOptimizer',
    nextImageExportOptimizer_generateAndUseBlurImages: 'true',
    nextImageExportOptimizer_remoteImageCacheTTL: '0',
  },
  reactStrictMode: true,
};

export const { basePath } = nextConfig;
export default nextConfig;
