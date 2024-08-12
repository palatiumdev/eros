import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'

// Secret from environment variables
const secret = process.env.MY_WEBHOOK_SECRET

// Handler for the API route
export default async function handler(req, res) {
  const signature = req.headers[SIGNATURE_HEADER_NAME]

  // Read the body into a string
  const body = await readBody(req)

  // Validate the signature
  if (!(await isValidSignature(body, signature, secret))) {
    res.status(401).json({ success: false, message: 'Invalid signature' })
    return
  }

  // Parse the JSON body
  const jsonBody = JSON.parse(body)

  // Process the payload
  doSomeMagicWithPayload(jsonBody)

  // Send success response
  res.json({ success: true })
}

// Disable Next.js default body parsing
export const config = {
  api: {
    bodyParser: false,
  },
}

// Function to read the body of the request
async function readBody(readable) {
  const chunks = []
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
  }
  return Buffer.concat(chunks).toString('utf8')
}

// Replace with actual implementation
function doSomeMagicWithPayload(payload) {
  // Implement your logic here
}
