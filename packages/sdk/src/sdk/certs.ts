/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { certsGetCertById } from "../funcs/certsGetCertById.js";
import { certsIssueCert } from "../funcs/certsIssueCert.js";
import { certsRemoveCert } from "../funcs/certsRemoveCert.js";
import { certsUploadCert } from "../funcs/certsUploadCert.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import {
  GetCertByIdRequest,
  GetCertByIdResponseBody,
} from "../models/operations/getcertbyid.js";
import {
  IssueCertRequest,
  IssueCertResponseBody,
} from "../models/operations/issuecert.js";
import {
  RemoveCertRequest,
  RemoveCertResponseBody,
} from "../models/operations/removecert.js";
import {
  UploadCertRequest,
  UploadCertResponseBody,
} from "../models/operations/uploadcert.js";
import { unwrapAsync } from "../types/fp.js";

export class Certs extends ClientSDK {
  /**
   * Get cert by id
   *
   * @remarks
   * Get cert by id
   */
  async getCertById(
    request: GetCertByIdRequest,
    options?: RequestOptions,
  ): Promise<GetCertByIdResponseBody> {
    return unwrapAsync(certsGetCertById(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove cert
   *
   * @remarks
   * Remove cert
   */
  async removeCert(
    request: RemoveCertRequest,
    options?: RequestOptions,
  ): Promise<RemoveCertResponseBody> {
    return unwrapAsync(certsRemoveCert(
      this,
      request,
      options,
    ));
  }

  /**
   * Issue a new cert
   *
   * @remarks
   * Issue a new cert
   */
  async issueCert(
    request: IssueCertRequest,
    options?: RequestOptions,
  ): Promise<IssueCertResponseBody> {
    return unwrapAsync(certsIssueCert(
      this,
      request,
      options,
    ));
  }

  /**
   * Upload a cert
   *
   * @remarks
   * Upload a cert
   */
  async uploadCert(
    request: UploadCertRequest,
    options?: RequestOptions,
  ): Promise<UploadCertResponseBody> {
    return unwrapAsync(certsUploadCert(
      this,
      request,
      options,
    ));
  }
}
