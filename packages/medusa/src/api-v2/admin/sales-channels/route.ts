import { createSalesChannelsWorkflow } from "@medusajs/core-flows"
import { CreateSalesChannelDTO } from "@medusajs/types"
import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@medusajs/utils"
import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "../../../types/routing"
import { defaultAdminSalesChannelFields } from "./query-config"

export const GET = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse
) => {
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)

  const variables = {
    filters: req.filterableFields,
    order: req.listConfig.order,
    skip: req.listConfig.skip,
    take: req.listConfig.take,
  }

  const queryObject = remoteQueryObjectFromString({
    entryPoint: "sales_channels",
    variables,
    fields: defaultAdminSalesChannelFields,
  })

  const { rows: sales_channels, metadata } = await remoteQuery(queryObject)

  res.json({
    sales_channels,
    count: metadata.count,
    offset: metadata.skip,
    limit: metadata.take,
  })
}

export const POST = async (
  req: AuthenticatedMedusaRequest<CreateSalesChannelDTO>,
  res: MedusaResponse
) => {
  const salesChannelsData = [req.validatedBody]

  const { errors } = await createSalesChannelsWorkflow(req.scope).run({
    input: { salesChannelsData },
    throwOnError: false,
  })

  if (Array.isArray(errors) && errors[0]) {
    throw errors[0].error
  }

  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)

  const queryObject = remoteQueryObjectFromString({
    entryPoint: "sales_channels",
    variables: { id: req.params.id },
    fields: defaultAdminSalesChannelFields,
  })

  const [sales_channel] = await remoteQuery(queryObject)

  res.status(200).json({ sales_channel })
}
