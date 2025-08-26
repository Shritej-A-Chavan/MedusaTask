import { MedusaService } from "@medusajs/framework/utils"
import XProduct from "./models/xproduct"

class XProductModuleService extends MedusaService({
  XProduct,
}){
}

export default XProductModuleService