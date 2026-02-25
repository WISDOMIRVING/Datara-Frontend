"use client";

import { useState, useEffect, useRef } from "react";

export default function Help() {
    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: "Hello! I am the Datara AI Assistant. How can I help you with your data or airtime today?",
        },
    ]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { sender: "user", text: input };
        setMessages((prev) => [...prev, userMsg]);
        setInput("");

        // Mock AI Response
        setTimeout(() => {
            let botText =
                "I can help with that. Please login to your dashboard to view specific transaction details.";
            if (input.toLowerCase().includes("data"))
                botText =
                    "We offer data plans for all major networks. Check the Services page for rates!";
            if (input.toLowerCase().includes("airtime"))
                botText =
                    "Airtime top-ups are instant. Is there a specific network you are having trouble with?";
            if (input.toLowerCase().includes("failed"))
                botText =
                    "I'm sorry to hear that. Please provide your Transaction ID so our human support team can investigate.";

            setMessages((prev) => [...prev, { sender: "bot", text: botText }]);
        }, 1000);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 h-[calc(100vh-64px)] flex flex-col">
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900">
                    AI Support Center
                </h1>
                <p className="text-gray-600">Instant answers to your questions.</p>
            </div>

            <div className="flex-grow bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex flex-col">
                {/* Chat Window */}
                <div className="flex-grow p-6 overflow-y-auto bg-gray-50 space-y-4">
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                        >
                            <div
                                className={`max-w-[80%] px-5 py-3 rounded-2xl ${msg.sender === "user" ? "bg-blue-900 text-white rounded-br-none" : "bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm"}`}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-gray-200">
                    <form onSubmit={handleSend} className="flex gap-4">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-grow px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
                            placeholder="Type your message..."
                        />
                        <button
                            type="submit"
                            className="bg-blue-900 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-800 transition"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
