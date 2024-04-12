#  Festival Music Documents

## Inicializar un proyecto y crear un archivo package.json con

1. Inicializando proyecto y archivo package.json
`npm install`
2. Instalando sass 
`npm install sass`
3. Instalando devDependencies 
`npm install sass --save-dev
[!NOTE]
 Las devDependencies son paquetes que solo se necesitan para el desarrollo y las pruebas locales.

 4. Creando las carpetas src y scss, mas el archivo app.scss
  
 ![](/screnshoot/carpetaSrc.png)

 5. Enlazando la sass con css
    ### Añadir un script en package.json
    El archivo package.json es el corazón de cualquier  proyecto Node.js. Aquí es donde se especifican las  dependencias del proyecto, scripts de inicio, -prueba, compilación, entre otros. Para añadir un script que compile archivos Sass, sigue estos pasos:

- Abre el archivo package.json en la raíz de tu proyecto.

- Busca la sección "scripts".

- Añade un nuevo script con una clave descriptiva (por ejemplo, "sass").

- Define el comando que quieres ejecutar para compilar tus archivos Sass. Este comando utilizará el ejecutable de Sass que instalamos anteriormente.

  ACA TIENES UN EJEMPLO:
  >`"scripts": {
  "sass": "sass src/sass:build/css"
  }`
  ### Ejecutar el Script
    - Abrir una terminal
    - Escribir en la terminal 
    `npm run sass`   
     
    Esto iniciará el proceso de compilación de tus archivos Sass según las configuraciones especificadas en el script.


