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

  ### Enlazar index.html con sass 
  Ya creando un script en package.json es hora de enlazar el sass con tu index.html
  - Crear tu index.html
  - Llamar al elemento o etiqueta
  `<link rel="stylesheet" href="build/css/app.css">`
  Ahi estamos llamando a la carpeta build/css/app.cs que creamos en el script 

  ###  Añadiendo watch en script

  Watch escucha los cambios que sucedan en un archivo y si sucede el cambio se ejecuta la acción

  Para añadir watch en el script tiene que ir a tu package.json y buscar el script y en la tarea que añadiste en tu script añadir el watch. Un ejemplo seria este
  `"sass": "sass --watch src/scss:build/css"`

4.Instalando gulp
Gulp es una herramienta que automatiza tareas comunes y repetitivas 
en el desarrollo de aplicacione
 ### Instalando gulp

- Con `npm install --save-dev gulp` instalamos la dependencia de gulp en Devdependencies.
### Creando archivo gulpfile.js para automatizar tareas con gulp 
- Creamos el archivo "gulpgile.js" en la carpeta Festival-Music.

### Instalando dependencias de gulp
- `npm i --save-dev gulp-sass`
