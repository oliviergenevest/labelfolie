const path = require('path');
const config = require('./gatsby-config');
const locales = config.siteMetadata.locales

    
exports.createSchemaCustomization = ({ actions, schema, getNode }) => {
  
  actions.createTypes([
    schema.buildObjectType({
      name: 'DatoCmsAgenda',
      interfaces: ['Node'],
      fields: {
        isFuture: {
          type: 'Boolean!',

          resolve:  (source) => {
            const today = new Date().setHours(0, 0, 0, 0);

        /*    console.log("source.entityPayload.attributes.date_debut:",source.entityPayload.attributes.date_debut);
            console.log("new date(source.entityPayload.attributes.date_debut):",new Date(source.entityPayload.attributes.date_debut));
           console.log("today:", today);
           console.log("new date(today):", new Date(today));
           */
           return (
            ((new Date(source.entityPayload.attributes.date_debut_evenement) >= new Date(today)) || new Date(source.entityPayload.attributes.date_fin_evenement) >= new Date(today)))
           
          },

        },
		
      },
    }),
  ]);
};


 
exports.onCreatePage = async ({ page, actions }) => {
  
  const { createPage, deletePage } = actions

  return new Promise(resolve => {
    deletePage(page)

    Object.keys(locales).map(lang => {
      const localizedPath = locales[lang].default
        ? page.path
        : locales[lang].path + page.path
 
      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: locales[lang].path
        }
      })

    })

    resolve()
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // eslint-disable-next-line
  const createProjetsFR = new Promise((resolve, reject) => {
    try {
      graphql(`
        {

          allDatoCmsSpectacle(
            sort: {meta: {updatedAt: DESC}}
     
          ) 
          {
            edges {
              node {
                slug
                nom
              }
            }
          }
        }
      `).then(res => {
        const projets = res.data.allDatoCmsSpectacle.edges;
        projets.forEach((projet, index) => {
          /*const previous = index === projets.length - 1 ? null : projets[index + 1].node
          const next = index === 0 ? null : projets[index - 1].node*/
          const { slug } = projet.node;
          createPage({
            path: `/spectacles/${slug}`,
            component: require.resolve('./src/templates/Spectacle.js'),
            context: {
              slug,
             /* previous,
              next,*/
              locale:"fr",
            },
          });
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });

 

  // eslint-disable-next-line
  const createActuFR = new Promise((resolve, reject) => {
    try {
      graphql(`
        {
          allDatoCmsActualite(
            sort: {meta: {updatedAt: DESC}}
          
          ) 
          {
            edges {
              node {
                slug
                titre
              }
            }
          }
        }
      `).then(res => {
      
        const news = res.data.allDatoCmsActualite.edges;
        news.forEach((item, index) => {
          /*const previous = index === news.length - 1 ? null : news[index + 1].node
          const next = index === 0 ? null : news[index - 1].node*/
          const { slug } = item.node;
          createPage({
            path: `/actualites/${slug}`,
            component: require.resolve('./src/templates/News.js'),
            context: {
              slug,
             /* previous,
              next,*/
              locale:"fr",
            },
          });
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });

  // eslint-disable-next-line
  return Promise.all([createProjetsFR,createActuFR]);
  
};