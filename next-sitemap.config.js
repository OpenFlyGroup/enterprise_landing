/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://openfly.tech',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapPath: '/sitemap.xml',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    // Custom transform for specific pages
    const defaultPriority = config.priority;
    const defaultChangefreq = config.changefreq;

    if (path === '/' || path === '/en' || path === '/ru') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
      };
    }

    if (path.includes('/projects/')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
      };
    }

    return {
      loc: path,
      changefreq: defaultChangefreq,
      priority: defaultPriority,
    };
  },
  additionalPaths: async () => {
    const result = [];
    // Add additional paths if needed
    return result;
  },
  exclude: ['/server-sitemap.xml'], // Exclude dynamically generated sitemaps
};