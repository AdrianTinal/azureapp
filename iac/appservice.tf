resource "random_string" "suffix" {
  length  = 6
  special = false
  upper   = false
}

resource "azurerm_service_plan" "asp" {
  name                = "asp-${var.project_name}"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  os_type             = "Linux"
  sku_name            = "B1"
}

resource "azurerm_linux_web_app" "app" {
  name                = "app-${var.project_name}-${random_string.suffix.result}"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  service_plan_id     = azurerm_service_plan.asp.id

  site_config {
    application_stack {
      node_version = "20-lts"
    }
  }
}
