'use client'

import Image from 'next/image'
import { useChat } from '@ai-sdk/react'
import { useState, useEffect, useRef } from 'react'
import { ArrowUp, Pause, Plus, Mic, Paperclip } from "lucide-react"
import ReactMarkdown from 'react-markdown'

export default function FormChat() {
 
  // AI SDK
  const { messages, sendMessage } = useChat({
    onError: (error) => {
      console.log('error: ', error)
      setError(error.toString())
    },
  })

  // States
  const [error, setError] = useState('')
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Ref for auto-scrolling
  //const messagesEndRef = useRef<HTMLDivElement>(null)

  // Functions
  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()

      // trigger
      const form = e.currentTarget.form
      if (form && input.trim()) {
        form.requestSubmit()
      }
    }
  }

  // Handle chat
  async function handleChat(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!input) return

    try {
      setIsLoading(true)
      await sendMessage({ text: input })
      setInput('')
    } catch (error: any) {
      console.log('error: ', error)
      setError(error.toString())
    } finally {
      setIsLoading(false)
    }
  }

    const messagesEndRef = useRef<HTMLDivElement>(null)

    // Scroll to bottom whenever messages change
    useEffect(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    }, [messages])


  return (
    <div className="w-full mx-auto">
      {/* Welcome message - show when no messages */}
      {(!messages || messages.length === 0) && (
        <div className="w-200 mx-auto text-center mb-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Hello, Bisita!</h1>
            <div className='max-w-xl mx-auto text-center'>
              <p>
                Welcome sa StudyBuddy!{' '}
                <a className="underline" href="/register">
                  Gumawa ng libre mong account
                </a>{' '}
                at i-upload ang notes mo para makakuha ng instant, AI-powered na tulong sa pag-aaral.
              </p>
            </div>
          </div>
        </div>
      )}

      {messages && messages.length > 0 && (
        <div className="flex-1 flex flex-col gap-1 overflow-y-auto max-h-[60vh] no-scrollbar">
          {/*  {messages.map((message) => ( */}
          {messages.map((message) => (
            <div
              key={message.id}
              data-loading={isLoading}
              className={`flex p-2 ${
                message.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {/* Avatar — shown ONLY for AI */}
              {message.role !== 'user' && (
                // <div className="h-10 w-10 mr-2 aspect-square rounded-full border flex items-center justify-center bg-gray-300">
                //   <Bot />
                // </div>
                <div className="h-10 w-10 ml-2 rounded-full overflow-hidden mr-2">
                  <Image
                    src="/bot-avatar2.jpg"
                    alt="User avatar"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
              </div>
              )}

              {/* Chat bubble */}
              <div
                className={`max-w-2xl p-3 rounded-xl shadow wrap-break-words ${
                  message.role === 'user'
                    ? 'bg-[#cfe7d3] text-black rounded-br-none'
                    : 'bg-gray-200 text-black rounded-bl-none text-start'
                }`}
              >
                {message.parts.map((part, i) => {
                  if (part.type === 'text') {
                    return (
                      <div
                        key={`${message.id}-${i}`}
                        className="[&>p]:mb-3 [&>p]:last:mb-0 [&>ul]:mb-4 [&>ul>li]:list-disc [&>ul>li]:ml-5 [&>ol>li]:list-decimal [&>ol>li]:ml-5"
                      >
                        <ReactMarkdown>{part.text}</ReactMarkdown>
                      </div>
                    )
                  }
                })}
              </div>

              {/* User avatar — optional */}
              {message.role === 'user' && (
                // <div className="h-10 w-10 ml-2 aspect-square rounded-full border flex items-center justify-center bg-gray-300">
                //   <UserRound />
                // </div>
                <div className="h-10 w-10 ml-2 aspect-square rounded-full border overflow-hidden">
                  <Image
                    src="https://www.svgrepo.com/show/384670/account-avatar-profile-user.svg"
                    alt="User avatar"
                    className="w-full h-full object-cover"
                  />
              </div>
                
              )}
            </div>
          ))}

          {/* End of chat anchor */}
          <div ref={messagesEndRef} />
        </div>
      )}

      <form
        data-loading={isLoading}
        onSubmit={(e) => handleChat(e)}
        className="w-full mx-auto flex-1 sticky bottom-10 flex flex-col gap-2"
      >
        {/* <div className="form-control bg-yellow-100">
          <textarea
            name="message"
            placeholder="What do you want to know?"
            className="w-full p-2 border rounded resize-none"
            onKeyDown={handleKeyDown}
            value={input}
            onChange={(e) => {
              console.log(e.currentTarget.value)
              setInput(e.currentTarget.value)
            }}
          ></textarea>
        </div> */}
        {/* <div className="w-full p-3 z-50 relative">
          <textarea
            name="message"
            placeholder="What do you want to know?"
            className="w-full h-24 border rounded-xl shadow-md shadow-inner resize-none focus:ring-0 focus:outline-none focus:shadow-lg"
            onKeyDown={handleKeyDown}
            value={input}
            onChange={(e) => setInput(e.currentTarget.value)}
            rows={3}
          ></textarea>

          <button
            type="submit"
            disabled={isLoading}
            className="absolute bottom-6 right-6 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? (
              <Pause size={18} strokeWidth={2} />
            ) : (
              <ArrowUp size={18} strokeWidth={2} />
            )}
          </button>
        </div> */}

        <div className="relative w-full">
          {/* Textarea container */}
          <div className="w-full p-3 z-50relative flex items-end">
            <textarea
              name="message"
              placeholder="What do you want to know?"
              className="w-full h-24 border rounded-xl shadow-md shadow-inner resize-none focus:ring-0 focus:outline-none focus:shadow-lg pl-12 pr-28 p-3"
              onKeyDown={handleKeyDown}
              value={input}
              onChange={(e) => setInput(e.currentTarget.value)}
              rows={3}
            ></textarea>

            {/* Left: Plus icon */}
            <button className="absolute bottom-4 left-4 p-2 rounded-full hover:bg-gray-200 flex items-center justify-center cursor-pointer">
              <Plus size={18} />
            </button>

            {/* Right icons: Mic, Paperclip, Submit */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              <button className="p-2 rounded-full hover:bg-gray-200 flex items-center justify-center cursor-pointer">
                <Mic size={18} />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-200 flex items-center justify-center cursor-pointer">
                <Paperclip size={18} />
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-[#b2deba] text-white p-2 rounded-full cursor-pointer hover:bg-[#a8c9ae] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? <Pause size={18} strokeWidth={2} /> : <ArrowUp size={18} strokeWidth={2} />}
              </button>
            </div>
          </div>
        </div>
        {error && <div className="alert alert--error">{error}</div>}

        {/* <div className="flex justify-center mt-2">
          <button type="submit" className="button button-default">
            {isLoading ? 'Thinking...' : 'Send'}
          </button>
        </div> */}
      </form>
    </div>
  )
}