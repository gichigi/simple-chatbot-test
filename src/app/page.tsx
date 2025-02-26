'use client';

import { useState } from 'react';
import { useChat } from 'ai/react';
import PromptSuggestions from './components/PromptSuggestions';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Main content area */}
      <main className="flex-1 flex flex-col max-w-3xl mx-auto w-full p-4">
        {/* Chat header */}
        <h1 className="text-3xl font-semibold text-center my-8">
          What can I help with?
        </h1>

        {/* Messages container */}
        <div className="flex-1 mb-8">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 ${
                message.role === 'user' ? 'text-right' : 'text-left'
              }`}
            >
              <div
                className={`inline-block max-w-[80%] px-4 py-2 rounded-lg ${
                  message.role === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-black'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>

        {/* Input form */}
        <div className="border border-gray-200 rounded-xl shadow-sm">
          <form onSubmit={handleSubmit} className="p-4">
            <div className="relative">
              <textarea
                value={input}
                onChange={handleInputChange}
                placeholder="Ask anything"
                rows={1}
                className="w-full px-4 py-2 text-gray-900 bg-white border-0 resize-none focus:ring-0 focus:outline-none"
                style={{ minHeight: '44px' }}
              />
              
              {/* File upload button */}
              <div className="absolute bottom-2 left-2 flex items-center">
                <label className="cursor-pointer">
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept="image/*,.pdf,.doc,.docx"
                  />
                  <svg
                    className="w-5 h-5 text-gray-500 hover:text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </label>
                {selectedFile && (
                  <span className="ml-2 text-sm text-gray-500">
                    {selectedFile.name}
                  </span>
                )}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center justify-between mt-4">
              <PromptSuggestions />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
