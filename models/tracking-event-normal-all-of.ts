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
 * 
 * @export
 * @interface TrackingEventNormalAllOf
 */
export class TrackingEventNormalAllOf {
    /**
     * non-Certified postcards, self mailers, letters, and checks
     * @type {string}
     * @memberof TrackingEventNormalAllOf
     */
    'type': TrackingEventNormalAllOfTypeEnum;
    /**
     * Name of tracking event (for normal postcards, self mailers, letters, and checks):    * `In Transit` - The mailpiece is being processed at the entry/origin facility.    * `In Local Area` - The mailpiece is being processed at the destination facility.    * `Processed for Delivery` - The mailpiece has been greenlit for     delivery at the recipient\'s nearest postal facility. The mailpiece     should reach the mailbox within 1 business day of this tracking     event.    * `Re-Routed` - The mailpiece is re-routed due to recipient change of     address, address errors, or USPS relabeling of barcode/ID tag     area.    * `Returned to Sender` - The mailpiece is being returned to sender due     to barcode, ID tag area, or address errors.    * `Mailed` - The mailpiece has been handed off to and accepted by USPS     and is en route. [More about     Mailed.](https://support.lob.com/hc/en-us/articles/360001724400-What-does-a-Mailed-tracking-event-mean-)     Note this data is only available in Enterprise editions of     Lob. [Contact Sales](https://lob.com/support/contact#contact) if     you want access to this feature.  [More about tracking](https://support.lob.com/hc/en-us/articles/115000097404-Can-I-track-my-mail-) 
     * @type {string}
     * @memberof TrackingEventNormalAllOf
     */
    'name': TrackingEventNormalAllOfNameEnum;
    /**
     * Will be `null` for `type=normal` events
     * @type {object}
     * @memberof TrackingEventNormalAllOf
     */
    'details'?: TrackingEventNormalAllOfDetailsEnum;
    /**
     * The zip code in which the scan event occurred. Null for `Mailed` events. 
     * @type {string}
     * @memberof TrackingEventNormalAllOf
     */
    'location'?: string | null;
}

/**
    * @export
    * @enum {string}
    */
export enum TrackingEventNormalAllOfTypeEnum {
    Normal = 'normal'
}
/**
    * @export
    * @enum {string}
    */
export enum TrackingEventNormalAllOfNameEnum {
    InTransit = 'In Transit',
    InLocalArea = 'In Local Area',
    ProcessedForDelivery = 'Processed for Delivery',
    ReRouted = 'Re-Routed',
    ReturnedToSender = 'Returned to Sender',
    Mailed = 'Mailed'
}
/**
    * @export
    * @enum {string}
    */
export enum TrackingEventNormalAllOfDetailsEnum {
    Null = 'null'
}



/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

