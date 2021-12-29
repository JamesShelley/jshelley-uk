/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
     <p>
        Built with GatsbyJS. Thanks to <Link to="https://www.netlify.com">Netlify</Link> for hosting,
        <Link to="https://stackrole.com/">Stackrole</Link> for the site template and <Link to="https://undraw.co/">Undraw</Link>
        for the images!
      </p>
    </div>
  </footer>
)

export default Footer
