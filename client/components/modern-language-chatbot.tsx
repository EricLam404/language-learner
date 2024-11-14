'use client'

import { useState, useEffect } from 'react'
import { Mic, Send, Volume2, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ScrollArea } from "@/components/ui/scroll-area"

export function ModernLanguageChatbot() {
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hello! I\'m your AI language tutor. What would you like to practice today?' }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('')
  const [difficulty, setDifficulty] = useState('beginner')
  const [mode, setMode] = useState('conversation')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Scroll to bottom of message list when new messages are added
    const scrollArea = document.querySelector('.scroll-area')
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight
    }
  }, [messages])

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { role: 'user', content: inputMessage }])
      setInputMessage('')
      setIsLoading(true)
      // Simulating AI response
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'bot', content: `You said: ${inputMessage}` }])
        setIsLoading(false)
      }, 1000)
    }
  }

  const handleSpeechRecognition = () => {
    // Implement speech recognition logic here
    console.log('Speech recognition activated')
  }

  const handleTextToSpeech = (text: string) => {
    // Implement text-to-speech logic here
    console.log('Text-to-speech activated for:', text)
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Card className="w-full bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 shadow-lg">
        <CardHeader className="border-b border-gray-200 dark:border-gray-700">
          <CardTitle className="text-2xl font-bold text-purple-700 dark:text-purple-400">AI Language Tutor</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-6 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="language" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">Language</Label>
                <Select onValueChange={setSelectedLanguage}>
                  <SelectTrigger id="language" className="w-full">
                    <SelectValue placeholder="Select a language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="spanish">Spanish</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                    <SelectItem value="german">German</SelectItem>
                    <SelectItem value="italian">Italian</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="difficulty" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">Difficulty</Label>
                <RadioGroup id="difficulty" defaultValue="beginner" onValueChange={setDifficulty} className="flex space-x-4">
                  <div className="flex items-center">
                    <RadioGroupItem value="beginner" id="beginner" className="text-purple-600" />
                    <Label htmlFor="beginner" className="ml-2 text-sm">Beginner</Label>
                  </div>
                  <div className="flex items-center">
                    <RadioGroupItem value="intermediate" id="intermediate" className="text-purple-600" />
                    <Label htmlFor="intermediate" className="ml-2 text-sm">Intermediate</Label>
                  </div>
                  <div className="flex items-center">
                    <RadioGroupItem value="advanced" id="advanced" className="text-purple-600" />
                    <Label htmlFor="advanced" className="ml-2 text-sm">Advanced</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div>
              <Label htmlFor="mode" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">Learning Mode</Label>
              <Select onValueChange={setMode}>
                <SelectTrigger id="mode" className="w-full">
                  <SelectValue placeholder="Select a mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="conversation">Conversation</SelectItem>
                  <SelectItem value="flashcards">Flashcards</SelectItem>
                  <SelectItem value="pronunciation">Pronunciation Practice</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <ScrollArea className="h-[400px] w-full rounded-md border border-gray-200 dark:border-gray-700 p-4 scroll-area">
            <AnimatePresence>
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
                >
                  <div className={`rounded-lg p-3 max-w-[70%] ${
                    message.role === 'user' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md'
                  }`}>
                    {message.content}
                    {message.role === 'bot' && (
                      <Button variant="ghost" size="sm" className="ml-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" onClick={() => handleTextToSpeech(message.content)}>
                        <Volume2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="rounded-lg p-3 bg-white dark:bg-gray-800 shadow-md">
                  <Loader2 className="h-5 w-5 animate-spin text-purple-600" />
                </div>
              </div>
            )}
          </ScrollArea>
        </CardContent>
        <CardFooter className="border-t border-gray-200 dark:border-gray-700 p-4">
          <div className="flex w-full items-center space-x-2">
            <Input
              type="text"
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-grow"
            />
            <Button type="submit" onClick={handleSendMessage} className="bg-purple-600 hover:bg-purple-700 text-white">
              <Send className="h-4 w-4" />
            </Button>
            <Button type="button" variant="outline" onClick={handleSpeechRecognition} className="border-purple-600 text-purple-600 hover:bg-purple-100 dark:hover:bg-purple-900">
              <Mic className="h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}