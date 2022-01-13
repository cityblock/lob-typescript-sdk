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


import { Template } from './template';

/**
 * 
 * @export
 * @interface TemplateList
 */
export class TemplateList {
    /**
     * list of templates
     * @type {Array<Template>}
     * @memberof TemplateList
     */
    'data'?: Array<Template>;
    /**
     * Value is type of resource.
     * @type {string}
     * @memberof TemplateList
     */
    'object'?: string;
    /**
     * url of next page of items in list.
     * @type {string}
     * @memberof TemplateList
     */
    'next_url'?: string | null;
    /**
     * url of previous page of items in list.
     * @type {string}
     * @memberof TemplateList
     */
    'previous_url'?: string | null;
    /**
     * number of resources in a set
     * @type {number}
     * @memberof TemplateList
     */
    'count'?: number;
    /**
     * indicates the total number of records. Provided when the request specifies an \"include\" query parameter
     * @type {number}
     * @memberof TemplateList
     */
    'total_count'?: number;
}


/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

