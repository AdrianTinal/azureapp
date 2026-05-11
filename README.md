# Instrucciones del Proyecto (IaC + CI/CD)

## Estructura
- `/app`: Código Node.js y Docker.
- `/iac`: Infraestructura como Código (Terraform).
- `/evidencias`: Documentación del despliegue.

## Pipelines
- `webstatic.yml`: Despliega el front-end en Azure Static Web Apps.
- `appservice.yml`: Construye imagen Docker, sube a ACR y despliega en App Service.
