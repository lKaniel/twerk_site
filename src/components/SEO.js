import React from 'react';
import {Helmet} from "react-helmet";
import {useStaticQuery, graphql} from "gatsby";

export const query = graphql`
  {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`

const Seo = ({title, description}) => {

    const { site } = useStaticQuery(query)


    return (
        <Helmet
            title={title ? `${title} | ${site.siteMetadata.title}` : site.siteMetadata.title}
            htmlAttributes={{
                lang: "ua"
            }}
            meta={[
                {
                    name: `description`,
                    content: description ? description : site.siteMetadata.description
                }
            ]}
        >

        </Helmet>
    );
};

export default Seo;
