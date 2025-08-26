import { createWorkflow, transform, when, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { ProductDTO } from "@medusajs/framework/types"
import { createRemoteLinkStep } from "@medusajs/medusa/core-flows"
import { Modules } from "@medusajs/framework/utils"
import { XProduct_MODULE } from "../../modules/product"
import { createCustomStep } from "./steps/create-custom"

export type CreateCustomFromProductWorkflowInput = {
  product: ProductDTO
  additional_data?: {
    product_expiry_date?: Date
  }
}

export const createCustomFromProductWorkflow = createWorkflow(
  "create-custom-from-product",
  (input: CreateCustomFromProductWorkflowInput) => {
    const customName = transform(
      {
        input,
      },
      (data) => data.input.additional_data!.product_expiry_date || null
    )

    const custom = createCustomStep({
      product_expiry_date: customName,
    })

    when(({ custom }), ({ custom }) => custom !== undefined)
      .then(() => {
        createRemoteLinkStep([{
          [Modules.PRODUCT]: {
            product_id: input.product.id,
          },
          [XProduct_MODULE]: {
            custom_id: custom.id,
          },
        }])
      })

    return new WorkflowResponse({
      custom,
    })
  }
)