import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Logo from "./logo"
import Navlinks from "./navlinks"
import FooterLinks from "./footer-links"
import "../style/footer.less"

export default function(){
	const query = useStaticQuery(graphql`
		query{
			site{
				siteMetadata{
					title
				}
			}
		}
	`)

	return(
		<footer className="footer">
			<div className="container">
				<div className="logo">
					<a href="/" title={query.site.siteMetadata.title}>
						<Logo/>
					</a>
				</div>
				<div className="navlinks text-secondary">
					<Navlinks/>
				</div>
				<div className="navlinks text-secondary" style={{ marginTop: "20px" }}>
					<FooterLinks/>
				</div>
				<p className="text-primary f-d">Copyright &copy; {query.site.siteMetadata.title} {new Date().getFullYear()}</p>
			</div>
		</footer>
	)
}
