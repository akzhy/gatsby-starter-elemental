import React, { useState } from "react"
import { Send, Mail, Phone, MapPin, Loader } from "react-feather"

import { TextInput, Button } from "./ui"

import { beforeContactFormSubmit, contactFormSubmit } from "../../config"

import SocialLinks from "../utils/sociallinks"
import { ContactQuery_site_siteMetadata_contact } from "../pages/__generated__/ContactQuery"

type FeedbackState = { [id: number]: { message?: string, type?: string }}

const Form: React.FC<{ api: string }> = ({ api }) => {
    const [data, changeData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [feedback, setFeedback] = useState<FeedbackState>({})

    const [ transactionState, setTransactionState] = useState(false);

    const updateData = v => changeData({ ...data, ...v })

    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                setTransactionState(true);

                const validate = beforeContactFormSubmit(data);

                if (validate.result) {
                    setFeedback({});
                    contactFormSubmit(api, validate.data).then(res => {
                        if (res.result) {
                            setFeedback({
                                4: {
                                    type: "success",
                                    message:
                                        "Your message has been sent.",
                                },
                            })
                        } else {
                            setFeedback({
                                4: {
                                    message:
                                        "There was an error sending the message. Please try again.",
                                },
                            })
                        }
                        setTransactionState(false);
                    }).catch(err => {
                        setFeedback({
                            4: {
                                message:
                                    "There was an error sending the message. Please try again.",
                            },
                        })
                        setTransactionState(false);
                    })
                } else {
                    const errs = {}

                    validate.errors.forEach(err => {
                        errs[err.code] = { message: err.message }
                    })

                    setFeedback(errs)
                    setTransactionState(false);
                }
            }}
        >
            <TextInput
                label="Name"
                name="name"
                onChange={e =>
                    updateData({
                        name: e.target.value,
                    })
                }
                footer={
                    <FormMessage
                        show={feedback[1] !== undefined}
                        type="error"
                        message={feedback[1]?.message}
                    />
                }
            />
            <TextInput
                label="Email"
                name="email"
                type="email"
                onChange={e =>
                    updateData({
                        email: e.target.value,
                    })
                }
                footer={
                    <FormMessage
                        show={feedback[2] !== undefined}
                        type="error"
                        message={feedback[2]?.message}
                    />
                }
            />
            <TextInput
                label="Message"
                name="message"
                type="textarea"
                onChange={e =>
                    updateData({
                        message: e.target.value,
                    })
                }
                footer={
                    <FormMessage
                        show={feedback[3] !== undefined}
                        type="error"
                        message={feedback[3]?.message}
                    />
                }
            />
            <div className="py-3 lg:p-4">
                <FormMessage
                    show={feedback[4] !== undefined}
                    type={feedback[4]?.type || "error"}
                    message={feedback[4]?.message}
                />

                <Button
                    type="button,submit"
                    title="Send"
                    disabled={transactionState}
                    iconRight={<IconRight spin={transactionState}/>}
                />
            </div>
        </form>
    )
}

const Description: React.FC<{ data: ContactQuery_site_siteMetadata_contact }> = ({ data }) => {
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

const IconRight = ({ spin = false }) => {
    if(spin) {
        return (
            <span className="spin" style={{
                display: "inline-block",
                verticalAlign: "middle",
                animationDuration: "5s"
            }}>
                <Loader />
            </span>
        )
    }
    return <Send />
}

type FormMessageProps = { show: boolean, type: string, message: string }
const FormMessage: React.FC<FormMessageProps> = ({ show, type, message }) => {
    if (!show) return null
    return <p className={`text-${type} my-2`}>{message}</p>
}

export { Form, Description }
