/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ThemeQuery
// ====================================================

export interface ThemeQuery_site_siteMetadata {
  icon: string | null;
  switchTheme: boolean | null;
  darkmode: boolean | null;
  cookiePolicy: boolean | null;
}

export interface ThemeQuery_site {
  siteMetadata: ThemeQuery_site_siteMetadata | null;
}

export interface ThemeQuery {
  site: ThemeQuery_site | null;
}
