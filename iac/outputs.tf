output "app_service_url" {
  value = "https://${azurerm_linux_web_app.app.default_hostname}"
}

output "static_site_url" {
  value = "https://${azurerm_static_site.static.default_host_name}"
}

output "static_site_api_key" {
  value     = azurerm_static_site.static.api_key
  sensitive = true
}
