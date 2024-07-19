Jesús Miguel Palos.

He desarrollado esta pequeña aplicación intentando ceñirme a las especificaciones dadas:
    
Para poner a prueba la aplicación he usado Xampp, añadiendo la carpeta audax directamente en el directorio htdocs de Xampp y he creado una base de datos en local, llamada: search_history_db
A partir de ahí creo que se puede entender bien lo que he hecho.
Con respecto a la parte de style he intentado hacerlo todo con css nativo, para no usar Bootstrap ni ninguna otra librería
Y a parte de la funcionalidad que se solicitaba, he añadido un segundo evento que permite consultar el historial de búsquedas realizados. Es verdad que no es algo que se hubiera solicitado, y no es algo que estaría en una aplicación real, porque el usuario a priori no debería poder consultar el historial de búsquedas, pero me parecía algo útil para tener presente en todo momento que se estén registrando correctamente las búsquedas sin tener que ir en todo momento a phpmyadmin a consultar la tabla

Por último, y para tenerlas presentes, estas eran las especificaciones solicitadas para el proyecto:

    Se desea crear una pequeña aplicación web que permita al usuario ingresar un término de búsqueda y mostrar una lista de resultados obtenidos a través de una API externa. Además, se desea guardar el historial de búsquedas realizadas por el usuario en una base de datos SQL.

    Requerimientos técnicos:

    ·   La aplicación debe ser desarrollada en HTML5, CSS3, JavaScript y PHP.

    ·   Se debe utilizar la API pública de Wikipedia (https://www.mediawiki.org/wiki/API:Main_page) para realizar la búsqueda de términos y obtener los resultados.

    ·   Se deben utilizar eventos de JavaScript para capturar el término de búsqueda ingresado por el usuario y realizar la llamada a la API de Wikipedia.

    ·   Los resultados obtenidos deben mostrarse en la misma página de manera clara y legible.

    ·   Se debe crear una base de datos SQL para guardar el historial de búsquedas realizadas por el usuario.

    ·   Se deben utilizar consultas preparadas de SQL para evitar inyecciones SQL.

    ·   Se debe utilizar PHP para conectarse a la base de datos y guardar el historial de búsquedas.

    

    Especificaciones técnicas:

    ·   Se debe utilizar HTML5 para la estructura de la página.

    ·   Se debe utilizar CSS3 para dar estilo a la página.

    ·   Se debe utilizar JavaScript para capturar el término de búsqueda ingresado por el usuario y realizar la llamada a la API de Wikipedia.

    ·   Se debe utilizar PHP para conectarse a la base de datos SQL y guardar el historial de búsquedas.

    ·   Se debene entregar el código fuente completo de la aplicación.