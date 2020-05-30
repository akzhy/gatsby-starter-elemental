import React, { useState } from "react"
import { Send, Mail, Phone, MapPin } from "react-feather"

import { TextInput, Button } from "./ui"

import { beforeContactFormSubmit, contactFormSubmit  } from "../../config"

import SocialLinks from "../utils/sociallinks"

const Form = ({ api }) => {

    const [data, changeData] = useState({
        name: "",
        email: "",
        message: "",
        error: false,
        feedback: ""
    })

    const updateData = (v) => changeData({...data, ...v});

    return (
        <form onSubmit={() => {
            const validate = beforeContactFormSubmit(data);

            if(validate.result) {
                contactFormSubmit(api, validate.data).then(res => {
                    console.log(res);
                })
            }
        }}>
            <TextInput label="Name" name="name" onChange={(e) => updateData({
                name: e.current.value
            })}/>
            <TextInput label="Email" name="email" type="email" onChange={(e) => updateData({
                email: e.current.value
            })}/>
            <TextInput label="Message" name="message" type="textarea" onChange={(e) => updateData({
                message: e.current.value
            })}/>
            <div className="py-3 lg:p-4">
                <Button
                    type="button,submit"
                    title="Send"
                    iconRight={<Send />}
                />
            </div>
        </form>
    )
}

const Description = ({ data }) => {
    return (
        <div>
            {data.description && (
                <p className="text-color-default">
                    {data.description}
                </p>
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
                {data.phone && (
                    <li className="flex items-center mt-4">
                        <span className="text-secondary icon">
                            <Phone />
                        </span>
                        <a className="ml-4" href={"tel:" + data.phone}>
                            {data.phone}
                        </a>
                    </li>
                )}
                {data.address && (
                    <li className="flex items-start mt-4">
                        <span className="mt-1 text-secondary icon">
                            <MapPin />
                        </span>
                        <p className="whitespace-pre ml-4">{data.address}</p>
                    </li>
                )}
                <li>
                    <SocialLinks />
                </li>
            </ul>
        </div>
    )
}

export { Form, Description }
