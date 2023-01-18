# Croquetas

## Instrucciones de instalación

1. Instalar NodeJS (versión 12 o superior):
   - La versión a fecha de 18/01/2023 es la **18.13.0 LTS** en https://nodejs.org/en/

2. Descargar este proyecto:
   - En un archivo .zip (que hay que descomprimir).
   - En forma de repositorio GIT.

3. Instalar dependencias (como Eleventy.js y otros). Ejecutar en el directorio del proyecto la siguiente orden:

   ```npm install ```

4. Ejecutar el generador (el resultado se guarda en el archivo ```dist``` del proyecto):
   - Arrancar el servidor web:

   ```npm run serve``` ó ```npm run start```

     - Sirve para ver el sitio web generado en http://localhost:8080/ que cambia automáticamente (mientras está funcionando) si cambia algún archivo del proyecto (p.e. 

   - Generar el sitio web:

   ```npm run build```

    - Sólo genera los archivos.
