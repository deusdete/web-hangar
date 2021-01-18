import React from "react"
import ContentLoader from "react-content-loader"

const CardPlaceholder  = (props) => (
  <ContentLoader
    speed={2}
    width={313}
    height={418}
    viewBox="0 0 313 418"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="37" cy="39" r="25" />
    <path d="M 78.239 22.475 h 94.737 v 15.789 H 78.239 z" />
    <path d="M 78.239 46.822 h 125.172 v 9.703 H 78.239 z" />
    <circle cx="282" cy="24" r="5" />
    <circle cx="282" cy="35" r="5" />
    <circle cx="282" cy="46" r="5" />
    <path d="M 0.568 79.723 h 315.254 v 215.254 H 0.568 z M 7.347 314.469 h 296.61 v 9.322 H 7.347 z M 7.347 331.418 h 296.61 v 9.322 H 7.347 z M 7.347 348.367 H 199.72 v 9.322 H 7.347 z" />
  </ContentLoader>
)

export default CardPlaceholder
