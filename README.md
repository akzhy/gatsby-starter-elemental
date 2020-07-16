# Gatsby Starter Elemental

![](https://img.shields.io/badge/version-2.1.2-green.svg) ![](https://img.shields.io/badge/License-MIT-orange.svg)


Elemental is a portfolio template suitable for artists, photographers, designers etc. With the starter you can create blog, portfolio and miscellaneous posts (such as privacy-policy).

**[Live Demo](https://elemental.netlify.app)** 

## Getting Started.

You will need node and [Gatsby](https://www.gatsbyjs.org/tutorial/part-zero/) installed.

Start the project by 

```
gatsby new project-name https://github.com/akzhy/gatsby-starter-elemental
cd project-name
gatsby develop
```

And for the final build

```
gatsby build
```

### Configuring

Almost all features of this starter are editable. In order to personalize, open the `config.js` file and start editing.

```javascript
// Do not remove any of the properties below.

const siteMetadata = {
    title: `Elemental`, // Title of your webpage
    siteUrl: `http://localhost`, // You sites URL
    capitalizeTitleOnHome: true, // Whether to capitalize the letter on homepage
    logo: `/images/logo.png`, // Logo 
    icon: `/images/icon.png`, // Favicon, shown in the browsers "tab"
    titleImage: `/images/wall.jpg`, // The main title is filled with an image.
    ogImage: `/images/wall.png`, // open graph image (shown when link is shared in social media)
    twoColumnWall: true, // If true, the wall will be split into two with titleImage on left side and text on the right. If false, the title image will be used as the background of the text.
    about:"", // The short about text shown on front page
    introTag: `PHOTOGRAPHER | VIDEOGRAPHER`, // Intro tag shown below title
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Proin ac consequat arcu.`,
    author: `@_akzhy`, // Author
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true, // Whether to enable the darkmode by default. Change to false if you want the light mode
    switchTheme: true, // Whether to show a switch theme button on the navbar
    // The links shown on the navbar and footer, follow the same structure to add or remove more items.
    navLinks: [{
            name: "HOME",
            url: "/"
        },
        {
            name: "ABOUT",
            url: "/about"
        },
        {
            name: "BLOG",
            url: "/blog"
        },
        {
            name: "PORTFOLIO",
            url: "/portfolio"
        },
        {
            name: "CONTACT",
            url: "/contact"
        }
    ],
    // Same as navbar links, except these are shown on the footer
    footerLinks: [{
        name: "PRIVACY POLICY",
        url: "/privacy-policy"
    }],
    // Your social profile links. The icons of the given social medias are available in the static folder. If you are adding a new item, include the icon in the static/images folder.
    social: [{
            name: "Facebook",
            icon: "/images/Facebook.svg",
            url: "#"
        },
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "#"
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "#"
        },
        {
            name: "Youtube",
            icon: "/images/Youtube.svg",
            url: "#"
        }
    ],
    contact: {
        api_url: "https://getform.io/f/f227a36xxxxxx", // leave empty ('') or false to hide form
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Proin ac consequat arcu.`,
        mail: "hi@akzhy.com",
        phone: "000-000-0000",
        address: "1234 \nLocation \nLocation"
    },
    disqus: `your-disqus-shortname`  // Optional, remove this if you don't use disqus
}

```

#### Creating new blog posts.

Open the `contents/blog` folder and create a new folder with the name you wish to see as the URL. Inside the folder create an `index.md` file and also include any files you wish to add.

The frontmatter should be of the below structure

```
---
title: Title of your post
date: 2019-06-29 <-- Date should be in the given format
image: ./image.jpg <-- Image shown on the list pages and also used as open graph image
banner: ./banner.jpg <-- Banner shown in the blog post
description: The description shown in the listing page. Also used for SEO description. 
---
```

If you don't want the blog section, simply delete everything inside the `contents/blog` folder. (Do not delete the folder itself)

#### Creating new portfolio posts.

Open the `contents/portfolio` folder and create a new folder with the name you wish to see as the URL. Inside the folder create an `index.md` file and also include any files you wish to add.

The frontmatter should be of the below structure

```
---
title: Title of your post
date: 2019-06-29 <-- Date should be in the given format
banner: ./banner.jpg <-- Banner shown in the portfolio post and also used as open graph image
image: ./image.jpg <-- Image shown on the list pages 
description: The description shown in the listing page. Also used for SEO description. 
---
```

Portfolio pages support the creation of grids.

To create a grid, follow the below structure

```
<Row>
<Col>

**Markdown**

</Col>
</Row>
```

The columns will have equal width on wide screens, and will expand on smaller screens.

#### Creating miscellaneous posts

These posts follow the URL structure of `http://example.com/miscellaneous-post/`. They are useful for creating pages like `privacy-policy`

The "About" page is created as a miscellaneous post.

Open the `contents/basepages` folder and create a new folder with the name you wish to see as the URL. Inside the folder create an `index.md` file and also include any files you wish to add.

The frontmatter should be of the below structure

```
---
title: Title of your post
image: ./image.jpg <-- Image  used as open graph image
description: The description used for SEO. 
---
```

### Contact Form

The contact form will appear only if you have provided an api url. You can control the data sent to the server and can execute callback functions on response from the server.

To customize these functions, edit the `config.js` file.

The `beforeContactFormSubmit` function is used to validate the form data before it is sent to the server. It has one argument that contains the object 

```
{
    name: string,
    email: string,
    message: string
}
```

You can validate the data and return 
```
{
    data: {
        name: data.name,
        email: data.email,
        message: data.message,
    },
    result: true,
}
```
if the data is valid. Otherwise return 

```
errors = [
    {
        code: int, // 1-4
        /* Codes
         Code 1 - Name
         Code 2 - Email
         Code 3 - Message
         Code 4 - Other
        */
        message: string
    }
]
return {
    result: false,
    errors: errors,
}

```

You can also handle how data is sent to the server by editing the `contactFormSubmit` function. It should return the below object to indicate whether the message was sent.
```
{
    result: boolean // true for success, false for fail
}
```

## Contributing

Any kind of contributions are welcome. Bump the version and create a PR.





