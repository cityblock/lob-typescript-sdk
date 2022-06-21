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

import { TrackingEventDetails } from "./tracking-event-details";

/**
 *
 * @export
 * @class TrackingEventCertified
 */
export class TrackingEventCertified {
  constructor(input?: any) {
    if (typeof input?.type !== "undefined") {
      this.type = input.type;
    }
    if (typeof input?.name !== "undefined") {
      this.name = input.name;
    }
    if (typeof input?.details !== "undefined") {
      this.details = input.details;
    }
    if (typeof input?.location !== "undefined") {
      this.location = input.location;
    }
    if (typeof input?.id !== "undefined") {
      this.id = input.id;
    }
    if (typeof input?.time !== "undefined") {
      this.time = input.time;
    }
    if (typeof input?.date_created !== "undefined") {
      this.date_created = input.date_created;
    }
    if (typeof input?.date_modified !== "undefined") {
      this.date_modified = input.date_modified;
    }
    if (typeof input?.object !== "undefined") {
      this.object = input.object;
    }
  }

  /**
   * a Certified letter tracking event
   * @type {string}
   * @memberof TrackingEventCertified
   */
  "type": TrackingEventCertifiedTypeEnum;

  /**
   * Name of tracking event for Certified letters. Letters sent with USPS Certified Mail are fully tracked by USPS, therefore their tracking events have an additional details object with more detailed information about the tracking event. Some certified tracking event names have multiple meanings, noted in the list here. See the description of the details object for the full set of combined certified tracking event name meanings.    * `Mailed` - Package has been accepted into the carrier network for delivery.    * `In Transit` - Maps to four distinct stages of transit.    * `In Local Area` - Package is at a location near the end destination.    * `Processed for Delivery` - Maps to two distinct stages of delivery.    * `Pickup Available` - Package is available for pickup at carrier location.    * `Delivered` - Package has been delivered.    * `Re-Routed` - Package has been forwarded.    * `Returned to Sender` - Package is to be returned to sender.    * `Issue` - Maps to (at least) 15 possible issues, some of which are actionable.
   * @type {string}
   * @memberof TrackingEventCertified
   */
  "name": TrackingEventCertifiedNameEnum;

  /**
   *
   * @type {TrackingEventDetails}
   * @memberof TrackingEventCertified
   */
  "details"?: TrackingEventDetails;

  /**
   * The zip code in which the event occurred if it exists, otherwise will be the name of a Regional Distribution Center if it exists, otherwise will be null.
   * @type {string}
   * @memberof TrackingEventCertified
   */
  "location"?: string | null;

  /**
   * Unique identifier prefixed with `evnt_`.
   * @type {string}
   * @memberof TrackingEventCertified
   */
  private "_id": string;
  public get id() {
    return this._id;
  }
  public set id(newValue: string) {
    if (newValue && !/^evnt_[a-zA-Z0-9]+$/.test(newValue)) {
      throw new Error("Invalid id provided");
    }
    this._id = newValue;
  }

  /**
   * A timestamp in ISO 8601 format of the date USPS registered the event.
   * @type {string}
   * @memberof TrackingEventCertified
   */
  "time"?: string;

  /**
   * A timestamp in ISO 8601 format of the date the resource was created.
   * @type {string}
   * @memberof TrackingEventCertified
   */
  "date_created": string;

  /**
   * A timestamp in ISO 8601 format of the date the resource was last modified.
   * @type {string}
   * @memberof TrackingEventCertified
   */
  "date_modified": string;

  /**
   *
   * @type {string}
   * @memberof TrackingEventCertified
   */
  "object": TrackingEventCertifiedObjectEnum;

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
export enum TrackingEventCertifiedTypeEnum {
  Certified = "certified",
}
/**
 * @export
 * @enum {string}
 */
export enum TrackingEventCertifiedNameEnum {
  Mailed = "Mailed",
  InTransit = "In Transit",
  InLocalArea = "In Local Area",
  ProcessedForDelivery = "Processed for Delivery",
  PickupAvailable = "Pickup Available",
  Delivered = "Delivered",
  ReRouted = "Re-Routed",
  ReturnedToSender = "Returned to Sender",
  Issue = "Issue",
}
/**
 * @export
 * @enum {string}
 */
export enum TrackingEventCertifiedObjectEnum {
  TrackingEvent = "tracking_event",
}

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
