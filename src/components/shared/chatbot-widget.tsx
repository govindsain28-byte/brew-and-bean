"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface Msg {
  from: "bot" | "user";
  text: string;
}

const FAQ: { q: RegExp; a: string }[] = [
  { q: /hour|open|time/i, a: "We're open every day from 7:00 AM to 11:00 PM!" },
  { q: /locat|address|where/i, a: "You'll find us on MG Road, Governorpet, Vijayawada." },
  { q: /reserv|table|book/i, a: "You can reserve a table right from our Reservations page — want me to take you there?" },
  { q: /menu|food|coffee/i, a: "We've got 51 items across 14 categories — coffee, tea, mocktails, breakfast, pizza, pasta, desserts and more. Check out the Menu page!" },
  { q: /deliver/i, a: "Yes, we deliver! You can choose delivery or pickup at checkout." },
  { q: /event/i, a: "We host live music, open mic nights, comedy shows and workshops — see our Events page for the latest lineup." },
  { q: /contact|phone|call/i, a: "Reach us at +91 866 123 4567 or hello@brewandbean.in." },
];

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { from: "bot", text: "Hi! I'm the Brew & Bean assistant. Ask me about our hours, menu, reservations, or events." },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    const userMsg: Msg = { from: "user", text: input };
    const match = FAQ.find((f) => f.q.test(input));
    const botMsg: Msg = { from: "bot", text: match?.a ?? "I'm not sure about that — feel free to call us at +91 866 123 4567 for more help!" };
    setMessages((m) => [...m, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 z-40 w-80 max-w-[90vw] h-96 bg-cream rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-primary/10">
          <div className="bg-primary text-cream px-4 py-3 flex items-center justify-between">
            <span className="font-semibold text-sm">Brew & Bean Assistant</span>
            <button onClick={() => setOpen(false)} aria-label="Close chat"><X size={18} /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={m.from === "bot" ? "flex justify-start" : "flex justify-end"}>
                <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-[13px] ${m.from === "bot" ? "bg-white text-ink" : "bg-accent text-primary"}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-primary/10 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask a question..."
              className="flex-1 rounded-full border border-primary/20 px-3 py-2 text-sm outline-none focus:border-accent"
            />
            <button onClick={send} className="w-9 h-9 rounded-full bg-primary text-cream flex items-center justify-center shrink-0" aria-label="Send">
              <Send size={15} />
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-24 z-40 w-14 h-14 rounded-full bg-accent text-primary flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
        aria-label="Open chat assistant"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </>
  );
}
