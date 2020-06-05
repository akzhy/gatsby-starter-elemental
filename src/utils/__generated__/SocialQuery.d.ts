/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SocialQuery
// ====================================================

export interface SocialQuery_site_siteMetadata_social {
  name: string | null;
  url: string | null;
  icon: string | null;
}

export interface SocialQuery_site_siteMetadata {
  social: (SocialQuery_site_siteMetadata_social | null)[] | null;
}

export interface SocialQuery_site {
  siteMetadata: SocialQuery_site_siteMetadata | null;
}

export interface SocialQuery {
  site: SocialQuery_site | null;
}
