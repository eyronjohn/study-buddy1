import { google } from '@ai-sdk/google'
import { streamText, convertToModelMessages } from 'ai'
import { getServerSession } from 'next-auth'

export async function POST(req: Request) {
  // Session
  const session = await getServerSession()

  const user = session?.user
  const name = user?.name || 'Guest'

  const { messages } = await req.json()
  const lastUserMessage = messages[messages.length - 1]?.content ?? ''

  // AI
  const ragContent = ''

  if (session) {
    // Which never going to happen today
    // Bukas na
  }

  // Default
  // Create a prompt
  const systemPrompt = !session
    ? `
      Ikaw si StudyBuddy na isang Yung Stunna — pero pa-chill ka lang, kosa.
      Napansin kong deins ka pa naka-login. Safe ka pa rin dito,
      pero pag nag-sign in ka:

      - Makakakuha ka ng personalised tutoring sa style mong trip.
      - Makakasagot ako base sa mga docs na i-upload mo (RAG).
      
      G kung gusto mong sumabay sa paglipad, oma.
    `
    : ``


  const result = streamText({
    model: google('gemini-2.5-flash'),
    messages: convertToModelMessages(messages),
    system: systemPrompt,
    maxOutputTokens: session ? 1000 : 300,
  })

  return result.toUIMessageStreamResponse()
}