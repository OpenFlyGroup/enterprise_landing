import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'OpenFly',
    short_name: 'OpenFly',
    description: 'Tools for Conscious Living - Innovative apps and services building a powerful ecosystem.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/brand/logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
