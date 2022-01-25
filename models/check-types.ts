/* tslint:disable */
/* eslint-disable */
/**
 * Lob
 * The Lob API is organized around REST. Our API is designed to have predictable, resource-oriented URLs and uses HTTP response codes to indicate any API errors. <p> Looking for our [previous documentation](https://lob.github.io/legacy-docs/)?
 *
 * The version of the OpenAPI document: 1.3.0
 * Contact: lob-openapi@lob.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Unique identifier referring to status of check
 * @export
 * @enum {string}
 */

export enum CheckTypes {
  Created = "check.created",
  RenderedPdf = "check.rendered_pdf",
  RenderedThumbnails = "check.rendered_thumbnails",
  Deleted = "check.deleted",
  Mailed = "check.mailed",
  InTransit = "check.in_transit",
  InLocalArea = "check.in_local_area",
  ProcessedForDelivery = "check.processed_for_delivery",
  ReRouted = "check.re-routed",
  ReturnedToSender = "check.returned_to_sender",
}

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
