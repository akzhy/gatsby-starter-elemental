/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FooterLinksQuery
// ====================================================

export interface FooterLinksQuery_site_siteMetadata_footerLinks {
  name: string | null;
  url: string | null;
}

export interface FooterLinksQuery_site_siteMetadata {
  title: string | null;
  footerLinks: (FooterLinksQuery_site_siteMetadata_footerLinks | null)[] | null;
}

export interface FooterLinksQuery_site {
  siteMetadata: FooterLinksQuery_site_siteMetadata | null;
}

export interface FooterLinksQuery {
  site: FooterLinksQuery_site | null;
}
