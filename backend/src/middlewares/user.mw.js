export class UserMiddleware {
  static login(req, res, next) {
    const { email, password } = req?.body;
    const erros = [];

    if (!password || password.length < 5) {
      erros.push('Contraseña: Debe de tener más de 5 caracteres');
    }

    if (!email) {
      erros.push('Correo: Debe de ser un correo válido');
    }

    if (erros.length) {
      return res.status(400).json({success: false, message: 'Error', payload: erros})
    }
    req.body.email = req.body.email.toLowerCase();
    next();
  }

  static register(req, res, next) {
    const { username, password, email, type } = req.body;
    const erros = [];

    if (!username || !username?.trim()) {
      erros.push('Nombre de usuario: Campo requerido');
    }

    if (!password || password.length < 5) {
      erros.push('Contraseña: Debe de tener más de 5 caracteres');
    }

    if (!email) {
      erros.push('Correo: Debe de ser un correo válido');
    }

    if (!['lector', 'creador'].includes(type)) {
      erros.push('El tipo de usuarios no es válido');
    }

    if (erros.length) {
      return res.status(400).json({success: false, message: 'Error', payload: erros})
    }

    req.body.email = req.body.email.toLowerCase();
    next();
  }
}
