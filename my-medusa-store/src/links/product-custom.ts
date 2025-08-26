import { defineLink } from "@medusajs/framework/utils"
import XProduct from "../modules/product"
import ProductModule from "@medusajs/medusa/product"

export default defineLink(
  ProductModule.linkable.product,
  XProduct.linkable.xproduct
)