/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PortfolioQuery
// ====================================================

export interface PortfolioQuery_mdx_frontmatter_banner_childImageSharp_fluid {
  srcSet: string;
  base64: string | null;
  aspectRatio: number;
  src: string;
  sizes: string;
}

export interface PortfolioQuery_mdx_frontmatter_banner_childImageSharp {
  fluid: PortfolioQuery_mdx_frontmatter_banner_childImageSharp_fluid | null;
  id: string;
}

export interface PortfolioQuery_mdx_frontmatter_banner {
  /**
   * Copy file to static directory and return public url to it
   */
  publicURL: string | null;
  childImageSharp: PortfolioQuery_mdx_frontmatter_banner_childImageSharp | null;
}

export interface PortfolioQuery_mdx_frontmatter {
  title: string;
  date: any | null;
  description: string | null;
  banner: PortfolioQuery_mdx_frontmatter_banner | null;
}

export interface PortfolioQuery_mdx {
  body: string;
  frontmatter: PortfolioQuery_mdx_frontmatter | null;
}

export interface PortfolioQuery {
  mdx: PortfolioQuery_mdx | null;
}

export interface PortfolioQueryVariables {
  slug: string;
}
