import React from "react"
import { Send, Mail, MapPin, Loader } from "react-feather"
import { ContactQuery_site_siteMetadata_contact } from "../pages/__generated__/ContactQuery"

const Form: React.FC = () => {
    return (
        <>
            <iframe
                src="https://www.cognitoforms.com/f/cblW39x2VUy0KWpShfvCFA/1"
                style={{
                    border: 0,
                    width: "100%",
                    height: 513,
                }}
            />
            <script src="https://www.cognitoforms.com/f/iframe.js"></script>
        </>
    )
}

const Description: React.FC<{
    data: ContactQuery_site_siteMetadata_contact
}> = ({ data }) => {
    return (
        <div>
            {data.description && (
                <p className="text-color-default">{data.description}</p>
            )}
            <ul className="my-4">
                {data.mail && (
                    <li className="flex items-center">
                        <span className="text-secondary icon">
                            <Mail />
                        </span>
                        <a className="ml-4" href={"mailto:" + data.mail}>
                            {data.mail}
                        </a>
                    </li>
                )}
                {/* {data.phone && (
                    <li className="flex items-center mt-4">
                        <span className="text-secondary icon">
                            <Phone />
                        </span>
                        <a className="ml-4" href={"tel:" + data.phone}>
                            {data.phone}
                        </a>
                    </li>
                )} */}
                {data.address && (
                    <li className="flex items-start mt-4">
                        <span className="mt-1 text-secondary icon">
                            <MapPin />
                        </span>
                        <p className="whitespace-pre ml-4">{data.address}</p>
                    </li>
                )}
                {/* <li>
                    <SocialLinks />
                </li> */}
            </ul>
        </div>
    )
}

export { Form, Description }
