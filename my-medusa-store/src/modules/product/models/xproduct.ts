import { model } from "@medusajs/framework/utils"

const XProduct = model.define("xproduct", {
  id: model.id().primaryKey(),
  product_expiry_date: model.dateTime().nullable(),
})

export default XProduct
