"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntlVerificationObjectEnum =
  exports.IntlVerificationStatusEnum =
  exports.IntlVerificationDeliverabilityEnum =
  exports.IntlVerificationCoverageEnum =
  exports.IntlVerification =
    void 0;
/**
 *
 * @export
 * @class IntlVerification
 */
var IntlVerification = /** @class */ (function () {
  function IntlVerification(input) {
    if (
      typeof (input === null || input === void 0 ? void 0 : input.id) !==
      "undefined"
    ) {
      this.id = input.id;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.recipient) !==
      "undefined"
    ) {
      this.recipient = input.recipient;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.primary_line) !== "undefined"
    ) {
      this.primary_line = input.primary_line;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.secondary_line) !== "undefined"
    ) {
      this.secondary_line = input.secondary_line;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.last_line) !==
      "undefined"
    ) {
      this.last_line = input.last_line;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.country) !==
      "undefined"
    ) {
      this.country = input.country;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.coverage) !==
      "undefined"
    ) {
      this.coverage = input.coverage;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.deliverability) !== "undefined"
    ) {
      this.deliverability = input.deliverability;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.status) !==
      "undefined"
    ) {
      this.status = input.status;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.components) !== "undefined"
    ) {
      this.components = input.components;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.object) !==
      "undefined"
    ) {
      this.object = input.object;
    }
  }
  Object.defineProperty(IntlVerification.prototype, "id", {
    get: function () {
      return this._id || undefined;
    },
    set: function (newValue) {
      if (newValue && !/^intl_ver_[a-zA-Z0-9]+$/.test(newValue)) {
        throw new Error("Invalid id provided");
      }
      this._id = newValue;
    },
    enumerable: false,
    configurable: true,
  });
  return IntlVerification;
})();
exports.IntlVerification = IntlVerification;
/**
 * @export
 * @enum {string}
 */
var IntlVerificationCoverageEnum;
(function (IntlVerificationCoverageEnum) {
  IntlVerificationCoverageEnum["Subbuilding"] = "SUBBUILDING";
  IntlVerificationCoverageEnum["HousenumberBuilding"] = "HOUSENUMBER/BUILDING";
  IntlVerificationCoverageEnum["Street"] = "STREET";
  IntlVerificationCoverageEnum["Locality"] = "LOCALITY";
  IntlVerificationCoverageEnum["Sparse"] = "SPARSE";
})(
  (IntlVerificationCoverageEnum =
    exports.IntlVerificationCoverageEnum ||
    (exports.IntlVerificationCoverageEnum = {}))
);
/**
 * @export
 * @enum {string}
 */
var IntlVerificationDeliverabilityEnum;
(function (IntlVerificationDeliverabilityEnum) {
  IntlVerificationDeliverabilityEnum["Deliverable"] = "deliverable";
  IntlVerificationDeliverabilityEnum["DeliverableMissingInfo"] =
    "deliverable_missing_info";
  IntlVerificationDeliverabilityEnum["Undeliverable"] = "undeliverable";
  IntlVerificationDeliverabilityEnum["NoMatch"] = "no_match";
})(
  (IntlVerificationDeliverabilityEnum =
    exports.IntlVerificationDeliverabilityEnum ||
    (exports.IntlVerificationDeliverabilityEnum = {}))
);
/**
 * @export
 * @enum {string}
 */
var IntlVerificationStatusEnum;
(function (IntlVerificationStatusEnum) {
  IntlVerificationStatusEnum["Lv4"] = "LV4";
  IntlVerificationStatusEnum["Lv3"] = "LV3";
  IntlVerificationStatusEnum["Lv2"] = "LV2";
  IntlVerificationStatusEnum["Lv1"] = "LV1";
  IntlVerificationStatusEnum["Lf4"] = "LF4";
  IntlVerificationStatusEnum["Lf3"] = "LF3";
  IntlVerificationStatusEnum["Lf2"] = "LF2";
  IntlVerificationStatusEnum["Lf1"] = "LF1";
  IntlVerificationStatusEnum["Lm4"] = "LM4";
  IntlVerificationStatusEnum["Lm3"] = "LM3";
  IntlVerificationStatusEnum["Lm2"] = "LM2";
  IntlVerificationStatusEnum["Lu1"] = "LU1";
})(
  (IntlVerificationStatusEnum =
    exports.IntlVerificationStatusEnum ||
    (exports.IntlVerificationStatusEnum = {}))
);
/**
 * @export
 * @enum {string}
 */
var IntlVerificationObjectEnum;
(function (IntlVerificationObjectEnum) {
  IntlVerificationObjectEnum["IntlVerification"] = "intl_verification";
})(
  (IntlVerificationObjectEnum =
    exports.IntlVerificationObjectEnum ||
    (exports.IntlVerificationObjectEnum = {}))
);
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
