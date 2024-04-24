export function bibliotecaMw(req, res, next) {
  const { orderBy } = req.body;

  if (!orderBy || ['tipo', 'tema'].includes(orderBy)) {
    return res.status(400).json({ success: false, message: 'El filtro no es válido' })
  }

  next();
}
