export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5df25afac31607b61587eaa9',
                  title: 'Sanity Studio',
                  name: 'max-portfolio-studio',
                  apiId: '96e318ab-7f72-48ec-801d-6d88a27a3079'
                },
                {
                  buildHookId: '5df25afaa6bb7e8be9fc4561',
                  title: 'Portfolio Website',
                  name: 'max-portfolio-web',
                  apiId: '19163d29-b970-44c0-81c2-b868b91ae25b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mxmgilbert/max-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://max-portfolio-web.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
