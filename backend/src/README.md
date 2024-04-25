Fernando Tolentino Santiago

## Configuración
El proyecto se componde de dos carpetas, el front y el back.

#### Backend
Accedecer a la carpeta e inicar el servidor, por defecto corre en el puerto `5003`, es posible combiar el puerto editando la variable PORT en el archivo app.js de la cerpta config.

#### Frontend
Acceder a la cerpeta y ejecutar el comando run dev.
```bash
  npm run dev
```
La aplicacion iniciara en el puerto `5173` (http://localhost:5173/)


## Rutas
- **[ POST ] iniciar sesión** : Regresa el token de acceso
    + email: `string`
    + password": `string`

    ```javascript

    fetch('http://localhost:5003/v1/auth/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: "admin@mail.com",
        password: "admin"
      })
    })

    // json ----->
    /*
        {
          success: true,
          payload: {
            accessToken: "",
            refreshToken: "",
          }
        }
    */

    ```
