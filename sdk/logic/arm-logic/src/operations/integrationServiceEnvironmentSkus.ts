/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/integrationServiceEnvironmentSkusMappers";
import * as Parameters from "../models/parameters";
import { LogicManagementClientContext } from "../logicManagementClientContext";

/** Class representing a IntegrationServiceEnvironmentSkus. */
export class IntegrationServiceEnvironmentSkus {
  private readonly client: LogicManagementClientContext;

  /**
   * Create a IntegrationServiceEnvironmentSkus.
   * @param {LogicManagementClientContext} client Reference to the service client.
   */
  constructor(client: LogicManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of integration service environment Skus.
   * @param resourceGroup The resource group.
   * @param integrationServiceEnvironmentName The integration service environment name.
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationServiceEnvironmentSkusListResponse>
   */
  list(resourceGroup: string, integrationServiceEnvironmentName: string, options?: msRest.RequestOptionsBase): Promise<Models.IntegrationServiceEnvironmentSkusListResponse>;
  /**
   * @param resourceGroup The resource group.
   * @param integrationServiceEnvironmentName The integration service environment name.
   * @param callback The callback
   */
  list(resourceGroup: string, integrationServiceEnvironmentName: string, callback: msRest.ServiceCallback<Models.IntegrationServiceEnvironmentSkuList>): void;
  /**
   * @param resourceGroup The resource group.
   * @param integrationServiceEnvironmentName The integration service environment name.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroup: string, integrationServiceEnvironmentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IntegrationServiceEnvironmentSkuList>): void;
  list(resourceGroup: string, integrationServiceEnvironmentName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IntegrationServiceEnvironmentSkuList>, callback?: msRest.ServiceCallback<Models.IntegrationServiceEnvironmentSkuList>): Promise<Models.IntegrationServiceEnvironmentSkusListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroup,
        integrationServiceEnvironmentName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.IntegrationServiceEnvironmentSkusListResponse>;
  }

  /**
   * Gets a list of integration service environment Skus.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationServiceEnvironmentSkusListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.IntegrationServiceEnvironmentSkusListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.IntegrationServiceEnvironmentSkuList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IntegrationServiceEnvironmentSkuList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IntegrationServiceEnvironmentSkuList>, callback?: msRest.ServiceCallback<Models.IntegrationServiceEnvironmentSkuList>): Promise<Models.IntegrationServiceEnvironmentSkusListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.IntegrationServiceEnvironmentSkusListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName}/skus",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroup,
    Parameters.integrationServiceEnvironmentName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationServiceEnvironmentSkuList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationServiceEnvironmentSkuList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
