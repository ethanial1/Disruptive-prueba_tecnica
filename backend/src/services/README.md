## Controladores
auth.service.js
- **login**: Iniciar sesión
    + email: `string`
    + password": `string`
    ```javascript

    login(data);

    {
      success: true,
      payload: {
        accessToken: "",
        refreshToken: "",
      }
    }
    ```
> La función regresa un payload con los token de acceso.

- **registerUser**: Registar usuario
    + username: `string`
    + email: `string`
    + password": `string`
    + type: `lector | creador`
    ```javascript

    registerUser(data);

    {
      success: true
    }
    ```
> La función regresa success en true si el usaurio se guardo de forma correcta.

biblioteca.service.js

- **raddContent**: Agregar un nuevo contenido a la biblioteca.
    - user
    + id: `string`
    + username: `string`
    - body
    + tematica: `string`
    + categoria: `string`
    + contenido: `string`
    + titulo: `string`
    ```javascript

    registerUser(user, body);

    {
      success: true
    }
    ```
> La función regresa success en true si el contenido se guardo de forma correcta.

- **getContent**: Lista el contenido de la biblioteca.
    - user
    + id: `string`
    + username: `string`
    - body
    + tematica: `string`
    + categoria: `string`
    ```javascript

    getContent(user, body);

    {
      success: true,
      payload: [
        {
          "_id": "12343",
          "categoria": "texto",
          "titulo": "Volleybol",
          "contenido": "El voleibol",
          "credito": "usuario123"
        }
      ]
    }
    ```
> La función regresa la lista em base a la tematica y la categoria.


- **getGeneralStatistics**: Lista el contenido de la biblioteca.
    + tematica?: `string`
    ```javascript

    getGeneralStatistics(body);

    {
      "success": true,
      "payload": [
          {
              "_id": "texto",
              "count": 1
          }
      ]
    }
    ```
> La función regresa el número de elementos de agrupados por categoría, si se quieren solo los de una tematica en especial, se debe de mandar el uname en el campo temática.

categoria.service.js

- **createTematica**: Agregar una nueva temática
    + nombre: `string`
    + permisos: `string`
    + imagen: `string`
    ```javascript

    createTematica(body);

    { success: true, message: '', payload: { nombre, unombre } }
    ```
> La función regresa success en true si el contenido se guardo de forma correcta.


- **getTematicas**: Agregar una nueva temática
    ```javascript
    getTematicas(body);

    {
      "success": true,
      "payload": [
        {
          "nombre": "Deportes",
          "unombre": "deportes",
          "imagen": "url"
        }
      ]
    }
    ```
> La función regresa una lista de las tématicas disponibles.

user.service.js

- **getUserInfo**: Obtiene la información de un usuario
    + username: `string`
    ```javascript
    getUserInfo(username);

    {
      "success": true,
      "payload": {
          "username": "admin",
          "email": "admin@gmail.com",
          "role": "admin"
      }
    }
    ```
> La función regresa la información del usuario.
