/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CommentsQuery
// ====================================================

export interface CommentsQuery_site_siteMetadata {
  siteUrl: string | null;
  disqus: string | null;
}

export interface CommentsQuery_site {
  siteMetadata: CommentsQuery_site_siteMetadata | null;
}

export interface CommentsQuery {
  site: CommentsQuery_site | null;
}
