resource "azurerm_static_site" "static" {
  name                = "front1"
  resource_group_name = azurerm_resource_group.rg.name
  location            = var.location_static
}
