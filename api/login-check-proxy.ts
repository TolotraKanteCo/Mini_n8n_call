// import type { VercelRequest, VercelResponse } from '@vercel/node';

// export default async function handler(
//   req: VercelRequest,
//   res: VercelResponse
// ) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   try {
//     const payload = req.body;

//     const response = await fetch(process.env.N8N_CHECK_LOGIN as string, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(payload)
//     });

//     return res.status(200).json({
//       ok: true,
//       forwarded: true,
//       n8n_status: response.status
//     });

//   } catch (err: any) {
//     return res.status(500).json({
//       ok: false,
//       error: err.message
//     });
//   }
// }

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const payload = req.body;

    const response = await fetch(process.env.N8N_CHECK_LOGIN as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    return res.status(200).json({
      ok: true,
      forwarded: true,
      n8n_status: response.status
    });

  } catch (err: any) {
    return res.status(500).json({
      ok: false,
      error: err.message
    });
  }
}
