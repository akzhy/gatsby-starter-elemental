/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ContactQuery
// ====================================================

export interface ContactQuery_site_siteMetadata_contact {
  api_url: string | null;
  description: string | null;
  mail: string | null;
  phone: string | null;
  address: string | null;
}

export interface ContactQuery_site_siteMetadata {
  contact: ContactQuery_site_siteMetadata_contact | null;
}

export interface ContactQuery_site {
  siteMetadata: ContactQuery_site_siteMetadata | null;
}

export interface ContactQuery {
  site: ContactQuery_site | null;
}
