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


import { CountryExtended } from './country-extended';

/**
 * 
 * @export
 * @interface AddressEditable
 */
export interface AddressEditable {
    /**
     * The building number, street name, street suffix, and any street directionals. For US addresses, the max length is 64 characters.
     * @type {string}
     * @memberof AddressEditable
     */
    'address_line1'?: string;
    /**
     * The suite or apartment number of the recipient address, if applicable. For US addresses, the max length is 64 characters.
     * @type {string}
     * @memberof AddressEditable
     */
    'address_line2'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressEditable
     */
    'address_city'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressEditable
     */
    'address_state'?: string | null;
    /**
     * Optional postal code. For US addresses, must be either 5 or 9 digits.
     * @type {string}
     * @memberof AddressEditable
     */
    'address_zip'?: string | null;
    /**
     * 
     * @type {CountryExtended}
     * @memberof AddressEditable
     */
    'address_country'?: CountryExtended;
    /**
     * An internal description that identifies this resource. Must be no longer than 255 characters. 
     * @type {string}
     * @memberof AddressEditable
     */
    'description'?: string | null;
    /**
     * Either `name` or `company` is required, you may also add both. Must be no longer than 40 characters. If both `name` and `company` are provided, they will be printed on two separate lines above the rest of the address. 
     * @type {string}
     * @memberof AddressEditable
     */
    'name'?: string | null;
    /**
     * Either `name` or `company` is required, you may also add both. Must be no longer than 40 characters. If both `name` and `company` are provided, they will be printed on two separate lines above the rest of the address. This field can be used for any secondary recipient information which is not part of the actual mailing address (Company Name, Department, Attention Line, etc). 
     * @type {string}
     * @memberof AddressEditable
     */
    'company'?: string | null;
    /**
     * Must be no longer than 40 characters.
     * @type {string}
     * @memberof AddressEditable
     */
    'phone'?: string | null;
    /**
     * Must be no longer than 100 characters.
     * @type {string}
     * @memberof AddressEditable
     */
    'email'?: string | null;
    /**
     * Use metadata to store custom information for tagging and labeling back to your internal systems. Must be an object with up to 20 key-value pairs. Keys must be at most 40 characters and values must be at most 500 characters. Neither can contain the characters `\"` and `\\`. i.e. \'{\"customer_id\" : \"NEWYORK2015\"}\' Nested objects are not supported.  See [Metadata](#section/Metadata) for more information.
     * @type {{ [key: string]: string; }}
     * @memberof AddressEditable
     */
    'metadata'?: { [key: string]: string; };
}

