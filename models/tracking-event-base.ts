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
 * As mail pieces travel through the mail stream, USPS scans their unique barcodes, and Lob processes these mail scans to generate tracking events.
 * @export
 * @interface TrackingEventBase
 */
export class TrackingEventBase {
    /**
     * Unique identifier prefixed with `evnt_`.
     * @type {string}
     * @memberof TrackingEventBase
     */
    private '_id': string;
    public get id() { return this._id || ""; }
    public set id(newValue: string) {
        if(newValue && !/^evnt_[a-zA-Z0-9]+$/.test(newValue)) {
            throw new Error("Invalid id provided");
        }
        this._id = newValue;
    }
    /**
     * A timestamp in ISO 8601 format of the date USPS registered the event.
     * @type {string}
     * @memberof TrackingEventBase
     */
    'time'?: string;
    /**
     * A timestamp in ISO 8601 format of the date the resource was created.
     * @type {string}
     * @memberof TrackingEventBase
     */
    'date_created': string;
    /**
     * A timestamp in ISO 8601 format of the date the resource was last modified.
     * @type {string}
     * @memberof TrackingEventBase
     */
    'date_modified': string;
    /**
     * 
     * @type {string}
     * @memberof TrackingEventBase
     */
    'object': string;
}


/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

