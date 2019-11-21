export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dd6d4af13a961f6e99ef4cb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ng26pem6',
                  apiId: '7f852274-8249-439b-a911-1209df41439d'
                },
                {
                  buildHookId: '5dd6d4afa78fd498bdc98a8f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-m1e9gem3',
                  apiId: '5e06b328-7d09-4563-a2d8-8abce9e7e80a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gurjarshakti/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-m1e9gem3.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
