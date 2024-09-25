export default function pluginCookiePro() {
  return {
    name: 'plugin-cookie-pro',
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'script',
            attributes: {
              src: 'https://cookie-cdn.cookiepro.com/consent/77055ecd-ec2c-461a-bf1c-3e84d715e668/OtAutoBlock.js',
              async: true,
            },
          },
          {
            tagName: 'script',
            attributes: {
              src: 'https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js',
              async: true,
              charset: 'UTF-8',
              'data-domain-script': '77055ecd-ec2c-461a-bf1c-3e84d715e668',
            },
          },
          {
            tagName: 'script',
            innerHTML: `function OptanonWrapper() { }`,
          },
        ],
      };
    },
    getClientModules() {
      return ['./index.css'];
    },
  };
}
