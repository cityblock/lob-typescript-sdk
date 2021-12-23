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
 * @interface SortBy1
 */
export interface SortBy1 {
    /**
     * 
     * @type {string}
     * @memberof SortBy1
     */
    'date_created'?: SortBy1DateCreatedEnum;
    /**
     * 
     * @type {string}
     * @memberof SortBy1
     */
    'send_date'?: SortBy1SendDateEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum SortBy1DateCreatedEnum {
    Asc = 'asc',
    Desc = 'desc'
}
/**
    * @export
    * @enum {string}
    */
export enum SortBy1SendDateEnum {
    Asc = 'asc',
    Desc = 'desc'
}


