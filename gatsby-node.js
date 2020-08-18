const pagesJson = require("./pages.json")

exports.createPages = ({ actions: { createPage } }) => {
  for (const page of pagesJson) {
    createPage({
      path: page.path,
      component: require.resolve(page.template),
      context: { props: page },
    })
  }
}
