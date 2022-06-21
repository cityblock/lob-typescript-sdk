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

import * as Models from "./index";

import { EngineHtml } from "./engine-html";

/**
 *
 * @export
 * @class TemplateWritable
 */
export class TemplateWritable {
  constructor(input?: any) {
    if (typeof input?.description !== "undefined") {
      this.description = input.description;
    }
    if (typeof input?.html !== "undefined") {
      this.html = input.html;
    }
    if (typeof input?.metadata !== "undefined") {
      this.metadata = input.metadata;
    }
    if (typeof input?.engine !== "undefined") {
      this.engine = input.engine;
    }
  }

  /**
   * An internal description that identifies this resource. Must be no longer than 255 characters.
   * @type {string}
   * @memberof TemplateWritable
   */
  "description"?: string | null;

  /**
   * An HTML string of less than 100,000 characters to be used as the `published_version` of this template. See [here](#section/HTML-Examples) for guidance on designing HTML templates. Please see endpoint specific documentation for any other product-specific HTML details: - [Postcards](#operation/postcard_create) - `front` and `back` - [Self Mailers](#operation/self_mailer_create) - `inside` and `outside` - [Letters](#operation/letter_create) - `file` - [Checks](#operation/check_create) - `check_bottom` and `attachment` - [Cards](#operation/card_create) - `front` and `back`  If there is a syntax error with your variable names within your HTML, then an error will be thrown, e.g. using a `{{#users}}` opening tag without the corresponding closing tag `{{/users}}`.
   * @type {string}
   * @memberof TemplateWritable
   */
  "html": string;

  /**
   * Use metadata to store custom information for tagging and labeling back to your internal systems. Must be an object with up to 20 key-value pairs. Keys must be at most 40 characters and values must be at most 500 characters. Neither can contain the characters `\"` and `\\`. i.e. \'{\"customer_id\" : \"NEWYORK2015\"}\' Nested objects are not supported.  See [Metadata](#section/Metadata) for more information.
   * @type {{ [key: string]: string; }}
   * @memberof TemplateWritable
   */
  "metadata"?: { [key: string]: string };

  /**
   *
   * @type {EngineHtml}
   * @memberof TemplateWritable
   */
  "engine"?: EngineHtml | null;

  public toJSON() {
    let out = {};
    for (const [key, value] of Object.entries(this)) {
      out = Object.assign({}, out, {
        [key[0] === "_" ? key.substr(1, key.length) : key]: value,
      });
    }
    return out;
  }
}

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
