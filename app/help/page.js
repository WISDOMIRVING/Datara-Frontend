"use client";

import { useState, useEffect, useRef } from "react";

export default function Help() {
    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: "Hello! I am the Datara AI Assistant. How can I help you today? You can ask about data plans, funding your wallet, or checking transaction status.",
        },
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const suggestions = [
        "How do I fund my wallet?",
        "Check my transaction status",
        "What are the data rates?",
        "How to contact human support"
    ];

    const handleSend = (text) => {
        if (!text.trim()) return;

        const userMsg = { sender: "user", text };
        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        // Mock AI Response with logic
        setTimeout(() => {
            let botText = "I can help with that. Please login to your dashboard to view specific transaction details.";
            const t = text.toLowerCase();

            if (t.includes("fund") || t.includes("money") || t.includes("pay"))
                botText = "To fund your wallet, go to the Dashboard and click the '+ Fund Wallet' button. We use Paystack for secure instant funding.";
            else if (t.includes("data"))
                botText = "We offer data plans for MTN, Airtel, Glo, and 9mobile. Check the 'Buy Data' section on your dashboard for the latest rates!";
            else if (t.includes("status") || t.includes("where"))
                botText = "You can track all your purchases in the 'Recent Transactions' table on your Dashboard. If a transaction is 'Pending', it usually resolves within minutes.";
            else if (t.includes("contact") || t.includes("human") || t.includes("support"))
                botText = "If you need human assistance, please email support@datara.com or call our hotline at +234 800 DATARA.";

            setMessages((prev) => [...prev, { sender: "bot", text: botText }]);
            setIsTyping(false);
        }, 800);
    };

    return (
        <div className="bg-[var(--bg-primary)] min-h-screen">
            <div className="max-w-4xl mx-auto px-4 py-8 h-[calc(100vh-80px)] flex flex-col">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-extrabold text-[var(--text-primary)]">
                        AI Support Hub
                    </h1>
                    <p className="text-[var(--text-primary)] opacity-60">Instant answers 24/7</p>
                </div>

                <div className="flex-grow glass rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-gray-100 dark:border-gray-800">
                    {/* Chat Window */}
                    <div className="flex-grow p-4 md:p-6 overflow-y-auto space-y-4 bg-gray-50/50 dark:bg-gray-900/50">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[85%] px-5 py-3 rounded-2xl shadow-sm text-sm md:text-base ${msg.sender === "user"
                                            ? "bg-blue-900 text-white rounded-tr-none"
                                            : "bg-white dark:bg-gray-800 text-[var(--text-primary)] rounded-tl-none border border-gray-100 dark:border-gray-700"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white dark:bg-gray-800 px-5 py-3 rounded-2xl rounded-tl-none border border-gray-100 dark:border-gray-700">
                                    <div className="flex gap-1">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Suggestions */}
                    <div className="px-4 py-2 border-t border-gray-100 dark:border-gray-800 flex gap-2 overflow-x-auto no-scrollbar">
                        {suggestions.map((s, i) => (
                            <button
                                key={i}
                                onClick={() => handleSend(s)}
                                className="whitespace-nowrap px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-medium text-[var(--text-primary)] hover:border-blue-500 transition shadow-sm"
                            >
                                {s}
                            </button>
                        ))}
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-800">
                        <form
                            onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
                            className="flex gap-3 items-center bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-1"
                        >
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-grow bg-transparent py-3 text-sm text-[var(--text-primary)] outline-none"
                                placeholder="Describe your issue..."
                            />
                            <button
                                type="submit"
                                disabled={!input.trim()}
                                className="bg-blue-900 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-800 transition disabled:opacity-50"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

