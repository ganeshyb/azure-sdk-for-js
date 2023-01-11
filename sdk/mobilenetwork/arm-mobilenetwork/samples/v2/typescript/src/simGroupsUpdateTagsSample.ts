/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  TagsObject,
  MobileNetworkManagementClient
} from "@azure/arm-mobilenetwork";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates SIM group tags.
 *
 * @summary Updates SIM group tags.
 * x-ms-original-file: specification/mobilenetwork/resource-manager/Microsoft.MobileNetwork/stable/2022-11-01/examples/SimGroupUpdateTags.json
 */
async function updateSimGroupTags() {
  const subscriptionId =
    process.env["MOBILENETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["MOBILENETWORK_RESOURCE_GROUP"] || "rg1";
  const simGroupName = "testSimGroup";
  const parameters: TagsObject = { tags: { tag1: "value1", tag2: "value2" } };
  const credential = new DefaultAzureCredential();
  const client = new MobileNetworkManagementClient(credential, subscriptionId);
  const result = await client.simGroups.updateTags(
    resourceGroupName,
    simGroupName,
    parameters
  );
  console.log(result);
}

async function main() {
  updateSimGroupTags();
}

main().catch(console.error);