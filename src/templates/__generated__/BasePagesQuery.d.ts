/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BasePagesQuery
// ====================================================

export interface BasePagesQuery_mdx_frontmatter_image {
  /**
   * Copy file to static directory and return public url to it
   */
  publicURL: string | null;
}

export interface BasePagesQuery_mdx_frontmatter {
  title: string;
  image: BasePagesQuery_mdx_frontmatter_image | null;
  description: string | null;
}

export interface BasePagesQuery_mdx {
  body: string;
  frontmatter: BasePagesQuery_mdx_frontmatter | null;
}

export interface BasePagesQuery {
  mdx: BasePagesQuery_mdx | null;
}

export interface BasePagesQueryVariables {
  slug: string;
}
