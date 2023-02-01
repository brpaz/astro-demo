const baseURL = process.env.BASE_URL || 'http://localhost:3000';

module.exports = {
  ci: {
    collect: {
      url: [`${baseURL}/`],
      numberOfRuns: 2,
      staticDistDir: './dist',
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'first-contentful-paint': [
          'warn',
          {
            maxNumericValue: 2500,
            aggregationMethod: 'optimistic',
          },
        ],
        interactive: [
          'warn',
          {
            maxNumericValue: 5000,
            aggregationMethod: 'optimistic',
          },
        ],
        'uses-long-cache-ttl': 'off',
        'uses-http2': 'off',
        'csp-xss': 'off',
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: './reports/lighthouseci',
    },
  },
};
