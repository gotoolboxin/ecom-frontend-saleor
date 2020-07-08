/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCodeEnum } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL query operation: Article
// ====================================================

export interface Article_page_translation {
  __typename: "PageTranslation";
  title: string;
  contentJson: any;
}

export interface Article_page {
  __typename: "Page";
  contentJson: any;
  /**
   * The ID of the object.
   */
  id: string;
  seoDescription: string | null;
  seoTitle: string | null;
  slug: string;
  title: string;
  /**
   * Returns translated page fields for the given language code.
   */
  translation: Article_page_translation | null;
}

export interface Article_shop_homepageCollection_backgroundImage {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface Article_shop_homepageCollection {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  backgroundImage: Article_shop_homepageCollection_backgroundImage | null;
}

export interface Article_shop {
  __typename: "Shop";
  /**
   * Collection displayed on homepage.
   */
  homepageCollection: Article_shop_homepageCollection | null;
}

export interface Article {
  /**
   * Look up a page by ID or slug.
   */
  page: Article_page | null;
  /**
   * Return information about the shop.
   */
  shop: Article_shop;
}

export interface ArticleVariables {
  slug: string;
  locale: LanguageCodeEnum;
}
