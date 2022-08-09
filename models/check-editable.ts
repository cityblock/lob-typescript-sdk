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

/**
 *
 * @export
 * @class CheckEditable
 */
export class CheckEditable {
  constructor(input?: any) {
    if (typeof input?.from !== "undefined") {
      this.from = input.from;
    }
    if (typeof input?.to !== "undefined") {
      this.to = input.to;
    }
    if (typeof input?.bank_account !== "undefined") {
      this.bank_account = input.bank_account;
    }
    if (typeof input?.amount !== "undefined") {
      this.amount = input.amount;
    }
    if (typeof input?.logo !== "undefined") {
      this.logo = input.logo;
    }
    if (typeof input?.check_bottom !== "undefined") {
      this.check_bottom = input.check_bottom;
    }
    if (typeof input?.attachment !== "undefined") {
      this.attachment = input.attachment;
    }
    if (typeof input?.description !== "undefined") {
      this.description = input.description;
    }
    if (typeof input?.metadata !== "undefined") {
      this.metadata = input.metadata;
    }
    if (typeof input?.merge_variables !== "undefined") {
      this.merge_variables = input.merge_variables;
    }
    if (typeof input?.send_date !== "undefined") {
      this.send_date = input.send_date;
    }
    if (typeof input?.mail_type !== "undefined") {
      this.mail_type = input.mail_type;
    }
    if (typeof input?.memo !== "undefined") {
      this.memo = input.memo;
    }
    if (typeof input?.check_number !== "undefined") {
      this.check_number = input.check_number;
    }
    if (typeof input?.message !== "undefined") {
      this.message = input.message;
    }
    if (typeof input?.billing_group_id !== "undefined") {
      this.billing_group_id = input.billing_group_id;
    }
  }

  /**
   * Must either be an address ID or an inline object with correct address parameters.
   * @type {string}
   * @memberof CheckEditable
   */

  "from": string | Models.AddressDomestic;

  /**
   * Must either be an address ID or an inline object with correct address parameters.
   * @type {string}
   * @memberof CheckEditable
   */

  "to": string | Models.AddressDomestic;

  /**
   *
   * @type {string}
   * @memberof CheckEditable
   */
  "bank_account": string | null;

  /**
   * The payment amount to be sent in US dollars.
   * @type {number}
   * @memberof CheckEditable
   */
  "amount": number;

  /**
   * Accepts a remote URL or local file upload to an image to print (in grayscale) in the upper-left corner of your check.
   * @type {string}
   * @memberof CheckEditable
   */
  "logo"?: string;

  /**
   * The artwork to use on the bottom of the check page.  Notes: - HTML merge variables should not include delimiting whitespace. - PDF, PNG, and JPGs must be sized at 8.5\"x11\" at 300 DPI, while supplied HTML will be rendered and trimmed to fit on a 8.5\"x11\" page. - The check bottom will always be printed in black & white. - Must conform to [this template](https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/check_bottom_template.pdf).  Need more help? Consult our [HTML examples](#section/HTML-Examples).
   * @type {string}
   * @memberof CheckEditable
   */
  "check_bottom"?: string;

  /**
   * A document to include with the check.
   * @type {string}
   * @memberof CheckEditable
   */
  "attachment"?: string;

  /**
   * An internal description that identifies this resource. Must be no longer than 255 characters.
   * @type {string}
   * @memberof CheckEditable
   */
  "description"?: string | null;

  /**
   * Use metadata to store custom information for tagging and labeling back to your internal systems. Must be an object with up to 20 key-value pairs. Keys must be at most 40 characters and values must be at most 500 characters. Neither can contain the characters `\"` and `\\`. i.e. \'{\"customer_id\" : \"NEWYORK2015\"}\' Nested objects are not supported.  See [Metadata](#section/Metadata) for more information.
   * @type {{ [key: string]: string; }}
   * @memberof CheckEditable
   */
  "metadata"?: { [key: string]: string };

  /**
   * You can input a merge variable payload object to your template to render dynamic content. For example, if you have a template like: `{{variable_name}}`, pass in `{\"variable_name\": \"Harry\"}` to render `Harry`. `merge_variables` must be an object. Any type of value is accepted as long as the object is valid JSON; you can use `strings`, `numbers`, `booleans`, `arrays`, `objects`, or `null`. The max length of the object is 25,000 characters. If you call `JSON.stringify` on your object, it can be no longer than 25,000 characters. Your variable names cannot contain any whitespace or any of the following special characters: `!`, `\"`, `#`, `%`, `&`, `\'`, `(`, `)`, `*`, `+`, `,`, `/`, `;`, `<`, `=`, `>`, `@`, `[`, `\\`, `]`, `^`, `` ` ``, `{`, `|`, `}`, `~`. More instructions can be found in [our guide to using html and merge variables](https://lob.com/resources/guides/general/using-html-and-merge-variables). Depending on your [Merge Variable strictness](https://dashboard.lob.com/#/settings/account) setting, if you define variables in your HTML but do not pass them here, you will either receive an error or the variable will render as an empty string.
   * @type {object}
   * @memberof CheckEditable
   */
  "merge_variables"?: object | null;

  /**
   * A timestamp in ISO 8601 format which specifies a date after the current time and up to 180 days in the future to send the letter off for production. Setting a send date overrides the default [cancellation window](#section/Cancellation-Windows) applied to the mailpiece. Until the `send_date` has passed, the mailpiece can be canceled. If a date in the format `2017-11-01` is passed, it will evaluate to midnight UTC of that date (`2017-11-01T00:00:00.000Z`). If a datetime is passed, that exact time will be used. A `send_date` passed with no time zone will default to UTC, while a `send_date` passed with a time zone will be converted to UTC.
   * @type {string}
   * @memberof CheckEditable
   */
  "send_date"?: string;

  /**
   * Checks must be sent `usps_first_class`
   * @type {string}
   * @memberof CheckEditable
   */
  "mail_type"?: CheckEditableMailTypeEnum;

  /**
   * Text to include on the memo line of the check.
   * @type {string}
   * @memberof CheckEditable
   */
  "memo"?: string | null;

  /**
   * An integer that designates the check number.
   * @type {number}
   * @memberof CheckEditable
   */
  "check_number"?: number;

  /**
   * Max of 400 characters to be included at the bottom of the check page.
   * @type {string}
   * @memberof CheckEditable
   */
  "message"?: string;

  /**
   * An optional string with the billing group ID to tag your usage with. Is used for billing purposes. Requires special activation to use. See [Billing Group API](https://lob.github.io/lob-openapi/#tag/Billing-Groups) for more information.
   * @type {string}
   * @memberof CheckEditable
   */
  "billing_group_id"?: string;

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
 * @export
 * @enum {string}
 */
export enum CheckEditableMailTypeEnum {
  UspsFirstClass = "usps_first_class",
}

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
