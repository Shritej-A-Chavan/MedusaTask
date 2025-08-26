import { createProductsWorkflow } from "@medusajs/medusa/core-flows"
import { 
  createCustomFromProductWorkflow, 
  CreateCustomFromProductWorkflowInput,
} from "../custom"

createProductsWorkflow.hooks.productsCreated(
	async ({ products, additional_data }, { container }) => {
    const workflow = createCustomFromProductWorkflow(container)
    
    for (const product of products) {
      await workflow.run({
        input: {
          product,
          additional_data,
        } as CreateCustomFromProductWorkflowInput,
      })
    }
	}
)