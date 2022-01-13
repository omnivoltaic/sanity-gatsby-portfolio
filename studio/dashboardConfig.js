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
                  buildHookId: '61e007c1ce445551bd900e67',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-rwi15ogh',
                  apiId: 'e6995caa-5b6b-459b-af6c-f2e517f74ff6'
                },
                {
                  buildHookId: '61e007c17bcada16d105f0ed',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vte3s3ay',
                  apiId: '05c13d82-0d80-4ae5-aa2a-2ee3ad969001'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/omnivoltaic/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-vte3s3ay.netlify.app',
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
