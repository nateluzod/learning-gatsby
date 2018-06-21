import React from 'react'
import Link from 'gatsby-link'

import '../css/tailwind.css'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    
    let header
    let siteTitle = "Gatsby, Tailwind and Contentful"
    let rootPath = `/`
    
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    header = (
      <h1 
        className='text-4xl font-sans font-bold mb-4'
      >
        <Link
          className="no-underline text-blue-dark hover:text-red"
          to={'/'}
        >
          {siteTitle}
        </Link>
      </h1>
    )

    return (
      <div className="container mx-auto font-sans p-6"
      >
        {header}
        {children()}
      </div>
    )
  }
}

export default Template
