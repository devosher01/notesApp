# Navegar al directorio del backend
cd .\backend\

# Ejecutar docker-compose up --build en el backend
docker-compose up --build -d

# Esperar a que el contenedor de Docker se ejecute con éxito
do {
    Start-Sleep -Seconds 5
    $containerStatus = docker-compose ps --services --filter "status=running"
} while ($containerStatus -notcontains 'db' -or $containerStatus -notcontains 'server')


# Volver al directorio principal del proyecto
cd ..

# Navegar al directorio del frontend e instalar las dependencias
cd .\frontend\
npm install

#esperar a que se instalen las dependencias
do {
    Start-Sleep -Seconds 20
    $nodeModules = Test-Path .\node_modules
} while ($nodeModules -eq $false)

if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: No se pudieron instalar las dependencias de Node.js."
    exit $LASTEXITCODE
}


#imprimir directorio actual
Write-Host "El directorio actual es: $PWD"
# Iniciar el servidor del frontend
Start-Process npm -ArgumentList "run dev" -NoNewWindow
Write-Host "El backend se ha iniciado, las dependencias del frontend han sido instaladas, y el servidor del frontend se ha iniciado."

# Abrir el navegador web
Start-Process "http://localhost:5173"

# Esperar 20 segundos para cerrar el script
Start-Sleep -Seconds 20


