module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: '/English-Study/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'Japanese', link: '/language/japanese' }
        ]
      }
    ],
    // sidebar: [
    //   '/',
    //   '/page-a',
    //   ['/test', 'Explicit link text']
    // ]
  }
};
