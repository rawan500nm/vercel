/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dataCacheBillingSettings } from "../funcs/dataCacheBillingSettings.js";
import { datacachePurgeall } from "../funcs/datacachePurgeall.js";
import { getCerts } from "../funcs/getCerts.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import {
  DataCacheBillingSettingsRequestBody,
  DataCacheBillingSettingsResponseBody,
} from "../models/operations/datacachebillingsettings.js";
import { DatacachePurgeallRequest } from "../models/operations/datacachepurgeall.js";
import { GetCertsResponseBody } from "../models/operations/getcerts.js";
import { unwrapAsync } from "../types/fp.js";
import { AccessGroups } from "./accessgroups.js";
import { Aliases } from "./aliases.js";
import { Artifacts } from "./artifacts.js";
import { Authentication } from "./authentication.js";
import { Certs } from "./certs.js";
import { Checks } from "./checks.js";
import { Deployments } from "./deployments.js";
import { Dns } from "./dns.js";
import { Domains } from "./domains.js";
import { EdgeConfig } from "./edgeconfig.js";
import { Integrations } from "./integrations.js";
import { LogDrains } from "./logdrains.js";
import { ProjectMembers } from "./projectmembers.js";
import { Projects } from "./projects.js";
import { Secrets } from "./secrets.js";
import { Security } from "./security.js";
import { Teams } from "./teams.js";
import { User } from "./user.js";
import { Webhooks } from "./webhooks.js";

export class Vercel extends ClientSDK {
  private _accessGroups?: AccessGroups;
  get accessGroups(): AccessGroups {
    return (this._accessGroups ??= new AccessGroups(this._options));
  }

  private _artifacts?: Artifacts;
  get artifacts(): Artifacts {
    return (this._artifacts ??= new Artifacts(this._options));
  }

  private _checks?: Checks;
  get checks(): Checks {
    return (this._checks ??= new Checks(this._options));
  }

  private _projects?: Projects;
  get projects(): Projects {
    return (this._projects ??= new Projects(this._options));
  }

  private _deployments?: Deployments;
  get deployments(): Deployments {
    return (this._deployments ??= new Deployments(this._options));
  }

  private _domains?: Domains;
  get domains(): Domains {
    return (this._domains ??= new Domains(this._options));
  }

  private _dns?: Dns;
  get dns(): Dns {
    return (this._dns ??= new Dns(this._options));
  }

  private _edgeConfig?: EdgeConfig;
  get edgeConfig(): EdgeConfig {
    return (this._edgeConfig ??= new EdgeConfig(this._options));
  }

  private _user?: User;
  get user(): User {
    return (this._user ??= new User(this._options));
  }

  private _integrations?: Integrations;
  get integrations(): Integrations {
    return (this._integrations ??= new Integrations(this._options));
  }

  private _logDrains?: LogDrains;
  get logDrains(): LogDrains {
    return (this._logDrains ??= new LogDrains(this._options));
  }

  private _projectMembers?: ProjectMembers;
  get projectMembers(): ProjectMembers {
    return (this._projectMembers ??= new ProjectMembers(this._options));
  }

  private _security?: Security;
  get security(): Security {
    return (this._security ??= new Security(this._options));
  }

  private _teams?: Teams;
  get teams(): Teams {
    return (this._teams ??= new Teams(this._options));
  }

  private _authentication?: Authentication;
  get authentication(): Authentication {
    return (this._authentication ??= new Authentication(this._options));
  }

  private _webhooks?: Webhooks;
  get webhooks(): Webhooks {
    return (this._webhooks ??= new Webhooks(this._options));
  }

  private _aliases?: Aliases;
  get aliases(): Aliases {
    return (this._aliases ??= new Aliases(this._options));
  }

  private _certs?: Certs;
  get certs(): Certs {
    return (this._certs ??= new Certs(this._options));
  }

  private _secrets?: Secrets;
  get secrets(): Secrets {
    return (this._secrets ??= new Secrets(this._options));
  }

  async datacachePurgeall(
    request: DatacachePurgeallRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(datacachePurgeall(
      this,
      request,
      options,
    ));
  }

  async dataCacheBillingSettings(
    request?: DataCacheBillingSettingsRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<DataCacheBillingSettingsResponseBody> {
    return unwrapAsync(dataCacheBillingSettings(
      this,
      request,
      options,
    ));
  }

  async getCerts(
    options?: RequestOptions,
  ): Promise<GetCertsResponseBody> {
    return unwrapAsync(getCerts(
      this,
      options,
    ));
  }
}
