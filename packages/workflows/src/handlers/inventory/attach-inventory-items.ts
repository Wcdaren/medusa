import { InventoryItemDTO, ProductTypes } from "@medusajs/types"
import { WorkflowArguments } from "../../helper"

export async function attachInventoryItems({
  container,
  context,
  data,
}: Omit<WorkflowArguments, "data"> & {
  data: {
    attachInventoryItemsData: {
      variant: ProductTypes.ProductVariantDTO
      inventoryItem: InventoryItemDTO
    }[]
  }
}) {
  const { manager } = context

  const productVariantInventoryService = container
    .resolve("productVariantInventoryService")
    .withTransaction(manager)

  const data_ = data.attachInventoryItemsData

  if (!data_?.length) {
    return
  }

  const inventoryData = data_.map(({ variant, inventoryItem }) => ({
    variantId: variant.id,
    inventoryItemId: inventoryItem.id,
  }))

  return await productVariantInventoryService.attachInventoryItem(inventoryData)
}

attachInventoryItems.aliases = {
  attachInventoryItemsData: "attachInventoryItemsData",
}
