export default function handler(req, res) {
  const {
    method,
  } = req

  switch (method) {
    case 'POST':
      res.status(200).json({msg: method})
      break;
    case 'GET':
      res.status(200).json({msg: method})
      break;
    default:
      res.setHeader('allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
