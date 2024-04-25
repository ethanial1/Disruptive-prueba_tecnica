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
