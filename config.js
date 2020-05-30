const siteMetadata = {
    title: `Elemental`,
    siteUrl: `http://localhost`,
    capitalizeTitleOnHome: false,
    logo: `/images/logo.png`,
    icon: `/images/icon.png`,
    titleImage: `/images/wall.png`,
    twoColumnWall: true,
    introTag: `PHOTOGRAPHER | VIDEOGRAPHER`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Proin ac consequat arcu.`,
    about:
        "Cras accumsan a lectus at tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus elementum dapibus dictum. Mauris auctor quam nec est tincidunt hendrerit. Donec pulvinar lobortis mauris. Cras vulputate ullamcorper ligula a rhoncus. Nunc venenatis elementum ligula in semper. Mauris malesuada purus nunc, et ultricies leo aliquam ac. Ut sit amet nunc id magna accumsan hendrerit in eget metus.",
    author: `@_akzhy`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/",
        },
        {
            name: "ABOUT",
            url: "/about",
        },
        {
            name: "BLOG",
            url: "/blog",
        },
        {
            name: "PORTFOLIO",
            url: "/portfolio",
        },
        {
            name: "CONTACT",
            url: "/contact",
        },
    ],
    footerLinks: [
        {
            name: "PRIVACY POLICY",
            url: "/privacy-policy",
        },
        {
            name: "GitHub",
            url: "https://github.com/akzhy/gatsby-starter-elemental",
        },
    ],
    social: [
        {
            name: "Facebook",
            icon: "/images/Facebook.svg",
            url: "#",
        },
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "#",
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "#",
        },
        {
            name: "Youtube",
            icon: "/images/Youtube.svg",
            url: "#",
        },
    ],
    contact: {
        /* Leave the below value completely empty (no space either) if you don't want a contact form. */
        api_url: "./test.json",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Proin ac consequat arcu.`,
        mail: "hi@akzhy.com",
        phone: "000-000-0000",
        address: "1234 \nLocation \nLocation",
    },
}

const beforeContactFormSubmit = data => {
    // Code 0 - success
    // Code 1 - Name
    // Code 2 - Email
    // Code 3 - Message
    // Code 4 - Other
    if (!data.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        return {
            result: false,
            code: 2,
            message: "Enter a valid email address",
        }
    }

    if (!data.name.trim().length < 2) {
        return {
            result: false,
            code: 2,
            message: "Enter a name",
        }
    }

    if (data.message.trim().length < 15) {
        return {
            result: false,
            code: 2,
            message: "Enter a message with atleast 15 characters",
        }
    }

    return {
        data: data,
        result: true,
    }
}

const contactFormSubmit = async ({ api, data }) => {
    let fetch = await fetch(api, {
        method: "POST",
        data: JSON.stringify(data),
    })
    let res = fetch.json()

    if (res.success) {
        return {
            result: true,
        }
    }
    return {
        result: false,
        ...res,
    }
}

export { siteMetadata, beforeContactFormSubmit, contactFormSubmit }
