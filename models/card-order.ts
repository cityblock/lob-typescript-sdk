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
 * @class CardOrder
 */
export class CardOrder {
  constructor(input?: any) {
    if (typeof input?.id !== "undefined") {
      this.id = input.id;
    }
    if (typeof input?.card_id !== "undefined") {
      this.card_id = input.card_id;
    }
    if (typeof input?.status !== "undefined") {
      this.status = input.status;
    }
    if (typeof input?.inventory !== "undefined") {
      this.inventory = input.inventory;
    }
    if (typeof input?.quantity_ordered !== "undefined") {
      this.quantity_ordered = input.quantity_ordered;
    }
    if (typeof input?.unit_price !== "undefined") {
      this.unit_price = input.unit_price;
    }
    if (typeof input?.cancelled_reason !== "undefined") {
      this.cancelled_reason = input.cancelled_reason;
    }
    if (typeof input?.availability_date !== "undefined") {
      this.availability_date = input.availability_date;
    }
    if (typeof input?.expected_availability_date !== "undefined") {
      this.expected_availability_date = input.expected_availability_date;
    }
    if (typeof input?.date_created !== "undefined") {
      this.date_created = input.date_created;
    }
    if (typeof input?.date_modified !== "undefined") {
      this.date_modified = input.date_modified;
    }
    if (typeof input?.deleted !== "undefined") {
      this.deleted = input.deleted;
    }
    if (typeof input?.object !== "undefined") {
      this.object = input.object;
    }
  }

  /**
   * Unique identifier prefixed with `co_`.
   * @type {string}
   * @memberof CardOrder
   */
  private "_id"?: string;
  public get id() {
    return (this._id || undefined) as string;
  }
  public set id(newValue: string) {
    if (newValue && !/^co_[a-zA-Z0-9]+$/.test(newValue)) {
      throw new Error("Invalid id provided");
    }
    this._id = newValue;
  }

  /**
   * Unique identifier prefixed with `card_`.
   * @type {string}
   * @memberof CardOrder
   */
  private "_card_id"?: string;
  public get card_id() {
    return (this._card_id || undefined) as string;
  }
  public set card_id(newValue: string) {
    if (newValue && !/^card_[a-zA-Z0-9]+$/.test(newValue)) {
      throw new Error("Invalid card_id provided");
    }
    this._card_id = newValue;
  }

  /**
   * The status of the card order.
   * @type {string}
   * @memberof CardOrder
   */
  "status"?: CardOrderStatusEnum;

  /**
   * The inventory of the card order.
   * @type {number}
   * @memberof CardOrder
   */
  "inventory"?: number;

  /**
   * The quantity of cards ordered
   * @type {number}
   * @memberof CardOrder
   */
  "quantity_ordered"?: number;

  /**
   * The unit price for the card order.
   * @type {number}
   * @memberof CardOrder
   */
  "unit_price"?: number;

  /**
   * The reason for cancellation.
   * @type {string}
   * @memberof CardOrder
   */
  "cancelled_reason"?: string;

  /**
   * A timestamp in ISO 8601 format of the date the resource was created.
   * @type {string}
   * @memberof CardOrder
   */
  "availability_date"?: string;

  /**
   * The fixed deadline for the cards to be printed.
   * @type {string}
   * @memberof CardOrder
   */
  "expected_availability_date"?: string;

  /**
   * A timestamp in ISO 8601 format of the date the resource was created.
   * @type {string}
   * @memberof CardOrder
   */
  "date_created": string;

  /**
   * A timestamp in ISO 8601 format of the date the resource was last modified.
   * @type {string}
   * @memberof CardOrder
   */
  "date_modified": string;

  /**
   * Only returned if the resource has been successfully deleted.
   * @type {boolean}
   * @memberof CardOrder
   */
  "deleted"?: boolean;

  /**
   * Value is type of resource.
   * @type {string}
   * @memberof CardOrder
   */
  "object": string;

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
export enum CardOrderStatusEnum {
  Pending = "pending",
  Printing = "printing",
  Available = "available",
  Cancelled = "cancelled",
  Depleted = "depleted",
}

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
