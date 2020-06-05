/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BlogListQuery
// ====================================================

export interface BlogListQuery_allMdx_edges_node_frontmatter_image_childImageSharp_fluid {
  srcSet: string;
  base64: string | null;
  aspectRatio: number;
  src: string;
  sizes: string;
}

export interface BlogListQuery_allMdx_edges_node_frontmatter_image_childImageSharp {
  fluid: BlogListQuery_allMdx_edges_node_frontmatter_image_childImageSharp_fluid | null;
  id: string;
}

export interface BlogListQuery_allMdx_edges_node_frontmatter_image {
  /**
   * Copy file to static directory and return public url to it
   */
  publicURL: string | null;
  childImageSharp: BlogListQuery_allMdx_edges_node_frontmatter_image_childImageSharp | null;
}

export interface BlogListQuery_allMdx_edges_node_frontmatter {
  title: string;
  description: string | null;
  date: any | null;
  image: BlogListQuery_allMdx_edges_node_frontmatter_image | null;
}

export interface BlogListQuery_allMdx_edges_node_fields {
  slug: string | null;
}

export interface BlogListQuery_allMdx_edges_node {
  id: string;
  frontmatter: BlogListQuery_allMdx_edges_node_frontmatter | null;
  fields: BlogListQuery_allMdx_edges_node_fields | null;
}

export interface BlogListQuery_allMdx_edges {
  node: BlogListQuery_allMdx_edges_node;
}

export interface BlogListQuery_allMdx {
  edges: BlogListQuery_allMdx_edges[];
}

export interface BlogListQuery {
  allMdx: BlogListQuery_allMdx;
}

export interface BlogListQueryVariables {
  skip: number;
  limit: number;
}
