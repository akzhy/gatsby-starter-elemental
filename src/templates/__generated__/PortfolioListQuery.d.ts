/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PortfolioListQuery
// ====================================================

export interface PortfolioListQuery_allMdx_edges_node_frontmatter_image_childImageSharp_fluid {
  srcSet: string;
  base64: string | null;
  aspectRatio: number;
  src: string;
  sizes: string;
}

export interface PortfolioListQuery_allMdx_edges_node_frontmatter_image_childImageSharp {
  fluid: PortfolioListQuery_allMdx_edges_node_frontmatter_image_childImageSharp_fluid | null;
  id: string;
}

export interface PortfolioListQuery_allMdx_edges_node_frontmatter_image {
  /**
   * Copy file to static directory and return public url to it
   */
  publicURL: string | null;
  childImageSharp: PortfolioListQuery_allMdx_edges_node_frontmatter_image_childImageSharp | null;
}

export interface PortfolioListQuery_allMdx_edges_node_frontmatter {
  title: string;
  description: string | null;
  image: PortfolioListQuery_allMdx_edges_node_frontmatter_image | null;
}

export interface PortfolioListQuery_allMdx_edges_node_fields {
  slug: string | null;
}

export interface PortfolioListQuery_allMdx_edges_node {
  id: string;
  frontmatter: PortfolioListQuery_allMdx_edges_node_frontmatter | null;
  fields: PortfolioListQuery_allMdx_edges_node_fields | null;
}

export interface PortfolioListQuery_allMdx_edges {
  node: PortfolioListQuery_allMdx_edges_node;
}

export interface PortfolioListQuery_allMdx {
  edges: PortfolioListQuery_allMdx_edges[];
}

export interface PortfolioListQuery {
  allMdx: PortfolioListQuery_allMdx;
}

export interface PortfolioListQueryVariables {
  skip: number;
  limit: number;
}
