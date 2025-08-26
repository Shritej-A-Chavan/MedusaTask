import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import XProductModuleService from "../../../modules/product/service"
import { XProduct_MODULE } from "../../../modules/product"

type CreateCustomStepInput = {
  product_expiry_date?: Date
}

export const createCustomStep = createStep(
  "create-custom",
  async (data: CreateCustomStepInput, { container }) => {
    if (!data.product_expiry_date) {
      return
    }

    const xProductModuleService: XProductModuleService = container.resolve(
      XProduct_MODULE
    )

    const custom = await xProductModuleService.createXProducts(data)

    return new StepResponse(custom, custom)
  },
  async (custom, { container }) => {
    const xProductModuleService: XProductModuleService = container.resolve(
      XProduct_MODULE
    )

    await xProductModuleService.deleteXProducts(custom!.id)
  }
)