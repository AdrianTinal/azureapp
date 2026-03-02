
resource "azurerm_static_site" "front1"  {
    name                = "front1"
    resource_group_name = azurerm_resource_group.rg.name
    location            = "East US 2"
}

