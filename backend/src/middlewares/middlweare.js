export class Middleware {
  validatePermissionByUser(user, action) {
    const role = user.role;
    const includeAction = user.permisos.includes(action);

    if (action === 'r') return includeAction;
    return includeAction && role === 'admin';
  }
}
