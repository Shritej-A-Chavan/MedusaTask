import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import XProductModuleService from "../../../modules/product/service"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const remoteQuery = req.scope.resolve("remoteQuery")

  const query = {
    entryPoint: "xProduct",
    fields: [
      "id",
      "title",
      "status",
      "product_expiry_date",
      "type.value",
    ],
    variables: {
      filters: {
        type: "digital",
      },
    },
  }

  const { rows: products } = await remoteQuery(query)

  res.json({ digital_products: products })
}

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  const productModule = req.scope.resolve("xProductModuleService") as XProductModuleService

  const product = await productModule.createXProducts({

    product_expiry_date: new Date("2025-12-31"),
  })

  res.json({ product })
}
