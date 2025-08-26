import XProductModuleService from "./service"
import { Module } from "@medusajs/framework/utils"

export const XProduct_MODULE = "xproduct"

export default Module(XProduct_MODULE, {
  service: XProductModuleService,
})