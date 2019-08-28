import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { globalHistory } from "@reach/router"

let path = globalHistory.location.pathname;
if(path !== "/"){
	path = path.split("/");
	path = path[1];
}

function ListItem(props){
	const data = props.data;
	let anchorAttrs = {
		href: data.url,
		className: ("/"+path === data.url ? "active" : ""),
		title: data.name
	}
	return(
		<li>
			<Link to={data.url} {...anchorAttrs}><span>{data.name}</span></Link>
		</li>
	)
}

export default function(){
	const data = useStaticQuery(graphql`
	    query NavbarLinkQuery {
	      	site {
	        	siteMetadata {
	          		navLinks{
						name
						url
					}
	        	}
	      	}
	    }
	`)
	const items = data.site.siteMetadata.navLinks;
	let list = [];

	items.forEach(function(e,i){
		list.push(
			<ListItem key={e.url+"-"+i} data={e}/>
		)
	})

	return(
		<ul className="navbar-links">{list}</ul>
	)
}
