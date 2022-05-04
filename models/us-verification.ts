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

import { DeliverabilityAnalysis } from "./deliverability-analysis";
import { LobConfidenceScore } from "./lob-confidence-score";
import { UsComponents } from "./us-components";

/**
 *
 * @export
 * @class UsVerification
 */
export class UsVerification {
  constructor(input?: any) {
    if (typeof input?.id !== "undefined") {
      this.id = input.id;
    }
    if (typeof input?.recipient !== "undefined") {
      this.recipient = input.recipient;
    }
    if (typeof input?.primary_line !== "undefined") {
      this.primary_line = input.primary_line;
    }
    if (typeof input?.secondary_line !== "undefined") {
      this.secondary_line = input.secondary_line;
    }
    if (typeof input?.urbanization !== "undefined") {
      this.urbanization = input.urbanization;
    }
    if (typeof input?.last_line !== "undefined") {
      this.last_line = input.last_line;
    }
    if (typeof input?.deliverability !== "undefined") {
      this.deliverability = input.deliverability;
    }
    if (typeof input?.components !== "undefined") {
      this.components = input.components;
    }
    if (typeof input?.deliverability_analysis !== "undefined") {
      this.deliverability_analysis = input.deliverability_analysis;
    }
    if (typeof input?.lob_confidence_score !== "undefined") {
      this.lob_confidence_score = input.lob_confidence_score;
    }
    if (typeof input?.object !== "undefined") {
      this.object = input.object;
    }
  }

  /**
   * Unique identifier prefixed with `us_ver_`.
   * @type {string}
   * @memberof UsVerification
   */
  private "_id"?: string;
  public get id() {
    return (this._id || undefined) as string;
  }
  public set id(newValue: string) {
    if (newValue && !/^us_ver_[a-zA-Z0-9_]+$/.test(newValue)) {
      throw new Error("Invalid id provided");
    }
    this._id = newValue;
  }

  /**
   * The intended recipient, typically a person\'s or firm\'s name.
   * @type {string}
   * @memberof UsVerification
   */
  "recipient"?: string | null;

  /**
   * The primary delivery line (usually the street address) of the address. Combination of the following applicable `components`: * `primary_number` * `street_predirection` * `street_name` * `street_suffix` * `street_postdirection` * `secondary_designator` * `secondary_number` * `pmb_designator` * `pmb_number`
   * @type {string}
   * @memberof UsVerification
   */
  "primary_line"?: string;

  /**
   * The secondary delivery line of the address. This field is typically empty but may contain information if `primary_line` is too long.
   * @type {string}
   * @memberof UsVerification
   */
  "secondary_line"?: string;

  /**
   * Only present for addresses in Puerto Rico. An urbanization refers to an area, sector, or development within a city. See [USPS documentation](https://pe.usps.com/text/pub28/28api_008.htm#:~:text=I51.,-4%20Urbanizations&text=In%20Puerto%20Rico%2C%20identical%20street,placed%20before%20the%20urbanization%20name.) for clarification.
   * @type {string}
   * @memberof UsVerification
   */
  "urbanization"?: string;

  /**
   * Combination of the following applicable `components`: * City (`city`) * State (`state`) * ZIP code (`zip_code`) * ZIP+4 (`zip_code_plus_4`)
   * @type {string}
   * @memberof UsVerification
   */
  "last_line"?: string;

  /**
   * Summarizes the deliverability of the `us_verification` object. For full details, see the `deliverability_analysis` field. Possible values are: * `deliverable` – The address is deliverable by the USPS. * `deliverable_unnecessary_unit` – The address is deliverable, but the secondary unit information is unnecessary. * `deliverable_incorrect_unit` – The address is deliverable to the building\'s default address but the secondary unit provided may not exist. There is a chance the mail will not reach the intended recipient. * `deliverable_missing_unit` – The address is deliverable to the building\'s default address but is missing secondary unit information. There is a chance the mail will not reach the intended recipient. * `undeliverable` – The address is not deliverable according to the USPS.
   * @type {string}
   * @memberof UsVerification
   */
  "deliverability"?: UsVerificationDeliverabilityEnum;

  /**
   *
   * @type {UsComponents}
   * @memberof UsVerification
   */
  "components"?: UsComponents;

  /**
   *
   * @type {DeliverabilityAnalysis}
   * @memberof UsVerification
   */
  "deliverability_analysis"?: DeliverabilityAnalysis;

  /**
   *
   * @type {LobConfidenceScore}
   * @memberof UsVerification
   */
  "lob_confidence_score"?: LobConfidenceScore;

  /**
   *
   * @type {string}
   * @memberof UsVerification
   */
  "object"?: UsVerificationObjectEnum;

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
export enum UsVerificationDeliverabilityEnum {
  Deliverable = "deliverable",
  DeliverableUnnecessaryUnit = "deliverable_unnecessary_unit",
  DeliverableIncorrectUnit = "deliverable_incorrect_unit",
  DeliverableMissingUnit = "deliverable_missing_unit",
  Undeliverable = "undeliverable",
}
/**
 * @export
 * @enum {string}
 */
export enum UsVerificationObjectEnum {
  UsVerification = "us_verification",
}

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
