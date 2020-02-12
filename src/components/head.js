import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Head = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    author
                }
            }
        }
    `)
    return (
      <Helmet title={`${title} | ${data.site.siteMetadata.title}`}>
        <html lang="en" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
        <meta property="og:type" content="website" />

        <meta
          property="description"
          name="description"
          content="Number 1 trusted Propane delivery and service in the High Country. Friendly full service delivery, service and sales. Serving NC and TN. Avery | Watauga | Carter counties."
        />
      </Helmet>
    )
}

export default Head;