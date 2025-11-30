import type { HttpFunction } from '@google-cloud/functions-framework';

export const entryPoint: HttpFunction = async (req, res) => {
  console.log(`Hello ${req.query.name || 'World'}!`);
  res.json({
    message: `Hello ${req.query.name || 'World'}!`,
  });
};
