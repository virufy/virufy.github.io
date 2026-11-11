const basePath = '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  images: {
    unoptimized: true,
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
    ];
  },
};

export default nextConfig; // Correct ES module syntax
export { basePath }; // Properly export basePath
