import { useState, useRef, useEffect } from "react";

const SUGGESTION_CATEGORIES = [
  {
    label: "Projects",
    questions: [
      "Tell me about the Hospital Management System",
      "Tell me about Nexus Trading Platform",
      "Tell me about HomeFlow",
      "Tell me about the AWS Serverless Quiz App",
      "Tell me about Moores Life Insurance",
      "Tell me about the Moores Life CRM",
    ],
  },
  {
    label: "Skills & Tech",
    questions: [
      "What AWS services have you used?",
      "What are your top skills?",
      "What databases have you worked with?",
      "What frontend frameworks do you know?",
      "Do you have DevOps experience?",
    ],
  },
  {
    label: "Background",
    questions: [
      "What is your education background?",
      "Are you AWS certified?",
      "What kind of role are you looking for?",
      "Are you open to work?",
      "What makes you stand out as a candidate?",
    ],
  },
];

export default function PortfolioChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I'm Valerie's portfolio assistant. Ask me anything about her skills, projects, or experience. 👋",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [activeCategory, setActiveCategory] = useState(0);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const sendMessage = async (text) => {
    const userText = text || input.trim();
    if (!userText || isLoading) return;

    setInput("");
    const newMessages = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const apiMessages = newMessages
        .filter((m) => m.role !== "assistant" || newMessages.indexOf(m) > 0)
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message || "Sorry, something went wrong." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I'm having trouble connecting right now." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const showSuggestions = messages.length <= 2;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap');

        .pchat-bubble {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          font-family: 'DM Sans', sans-serif;
        }

        .pchat-toggle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #38bdf8, #0ea5e9);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 24px rgba(56,189,248,0.45);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          position: relative;
        }

        .pchat-toggle:hover {
          transform: scale(1.08);
          box-shadow: 0 6px 32px rgba(56,189,248,0.6);
        }

        .pchat-toggle svg {
          width: 26px;
          height: 26px;
          color: white;
        }

        .pchat-unread {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 14px;
          height: 14px;
          background: #f43f5e;
          border-radius: 50%;
          border: 2px solid white;
          animation: pchat-pulse 2s infinite;
        }

        @keyframes pchat-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        .pchat-window {
          position: fixed;
          bottom: 100px;
          right: 28px;
          width: 370px;
          max-height: 580px;
          background: #0f172a;
          border: 1px solid rgba(56,189,248,0.2);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(56,189,248,0.1);
          overflow: hidden;
          animation: pchat-slide-up 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 9998;
        }

        @keyframes pchat-slide-up {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .pchat-header {
          padding: 16px 20px;
          background: linear-gradient(135deg, rgba(56,189,248,0.12), rgba(14,165,233,0.06));
          border-bottom: 1px solid rgba(56,189,248,0.15);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-shrink: 0;
        }

        .pchat-header-info {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .pchat-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, #38bdf8, #0ea5e9);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 600;
          color: white;
          flex-shrink: 0;
        }

        .pchat-header-text h3 {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
          color: #f1f5f9;
        }

        .pchat-header-text p {
          margin: 0;
          font-size: 11px;
          color: #38bdf8;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .pchat-status-dot {
          width: 6px;
          height: 6px;
          background: #4ade80;
          border-radius: 50%;
          display: inline-block;
        }

        .pchat-close {
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;
          padding: 4px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          transition: color 0.2s, background 0.2s;
        }

        .pchat-close:hover {
          color: #94a3b8;
          background: rgba(255,255,255,0.05);
        }

        .pchat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          scrollbar-width: thin;
          scrollbar-color: rgba(56,189,248,0.2) transparent;
          min-height: 0;
        }

        .pchat-messages::-webkit-scrollbar { width: 4px; }
        .pchat-messages::-webkit-scrollbar-thumb {
          background: rgba(56,189,248,0.2);
          border-radius: 4px;
        }

        .pchat-msg {
          display: flex;
          gap: 8px;
          max-width: 100%;
        }

        .pchat-msg.user { flex-direction: row-reverse; }

        .pchat-msg-bubble {
          padding: 10px 14px;
          border-radius: 16px;
          font-size: 13.5px;
          line-height: 1.5;
          max-width: 82%;
          word-break: break-word;
        }

        .pchat-msg.assistant .pchat-msg-bubble {
          background: rgba(255,255,255,0.06);
          color: #cbd5e1;
          border-bottom-left-radius: 4px;
          border: 1px solid rgba(255,255,255,0.06);
        }

        .pchat-msg.user .pchat-msg-bubble {
          background: linear-gradient(135deg, #38bdf8, #0ea5e9);
          color: white;
          border-bottom-right-radius: 4px;
        }

        .pchat-typing {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 10px 14px;
          background: rgba(255,255,255,0.06);
          border-radius: 16px;
          border-bottom-left-radius: 4px;
          width: fit-content;
          border: 1px solid rgba(255,255,255,0.06);
        }

        .pchat-typing span {
          width: 6px;
          height: 6px;
          background: #38bdf8;
          border-radius: 50%;
          animation: pchat-bounce 1.2s infinite;
        }

        .pchat-typing span:nth-child(2) { animation-delay: 0.2s; }
        .pchat-typing span:nth-child(3) { animation-delay: 0.4s; }

        @keyframes pchat-bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-6px); opacity: 1; }
        }

        /* ── SUGGESTIONS ── */
        .pchat-suggestions-wrapper {
          flex-shrink: 0;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 12px 16px;
        }

        .pchat-suggestion-tabs {
          display: flex;
          gap: 6px;
          margin-bottom: 10px;
        }

        .pchat-suggestion-tab {
          background: none;
          border: 1px solid rgba(56,189,248,0.2);
          color: #64748b;
          border-radius: 20px;
          padding: 4px 12px;
          font-size: 11px;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: all 0.2s;
          font-weight: 500;
          letter-spacing: 0.02em;
        }

        .pchat-suggestion-tab:hover {
          color: #38bdf8;
          border-color: rgba(56,189,248,0.4);
        }

        .pchat-suggestion-tab.active {
          background: rgba(56,189,248,0.12);
          border-color: rgba(56,189,248,0.4);
          color: #38bdf8;
        }

        .pchat-suggestion-list {
          display: flex;
          flex-direction: column;
          gap: 5px;
          max-height: 130px;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: rgba(56,189,248,0.15) transparent;
        }

        .pchat-suggestion-list::-webkit-scrollbar { width: 3px; }
        .pchat-suggestion-list::-webkit-scrollbar-thumb {
          background: rgba(56,189,248,0.15);
          border-radius: 3px;
        }

        .pchat-suggestion {
          background: rgba(56,189,248,0.05);
          border: 1px solid rgba(56,189,248,0.12);
          color: #94a3b8;
          border-radius: 10px;
          padding: 7px 12px;
          font-size: 12.5px;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: all 0.2s;
          text-align: left;
          white-space: normal;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .pchat-suggestion:hover {
          background: rgba(56,189,248,0.1);
          border-color: rgba(56,189,248,0.3);
          color: #cbd5e1;
        }

        /* ── INPUT ── */
        .pchat-input-area {
          padding: 12px 16px;
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex;
          gap: 8px;
          align-items: flex-end;
          flex-shrink: 0;
        }

        .pchat-input {
          flex: 1;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 10px 14px;
          color: #f1f5f9;
          font-size: 13.5px;
          font-family: 'DM Sans', sans-serif;
          resize: none;
          outline: none;
          transition: border-color 0.2s;
          line-height: 1.4;
          max-height: 80px;
          overflow-y: auto;
        }

        .pchat-input::placeholder { color: #475569; }
        .pchat-input:focus { border-color: rgba(56,189,248,0.4); }

        .pchat-send {
          width: 38px;
          height: 38px;
          background: linear-gradient(135deg, #38bdf8, #0ea5e9);
          border: none;
          border-radius: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: opacity 0.2s, transform 0.15s;
        }

        .pchat-send:hover:not(:disabled) { transform: scale(1.05); }
        .pchat-send:disabled { opacity: 0.4; cursor: not-allowed; }
        .pchat-send svg { width: 16px; height: 16px; color: white; }

        @media (max-width: 420px) {
          .pchat-window {
            right: 12px;
            left: 12px;
            width: auto;
            bottom: 90px;
          }
          .pchat-bubble {
            right: 16px;
            bottom: 20px;
          }
        }
      `}</style>

      {/* Toggle Button */}
      <div className="pchat-bubble">
        <button className="pchat-toggle" onClick={() => setIsOpen((o) => !o)} aria-label="Open chat">
          {isOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          )}
          {hasUnread && !isOpen && <span className="pchat-unread" />}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="pchat-window">
          {/* Header */}
          <div className="pchat-header">
            <div className="pchat-header-info">
              <div className="pchat-avatar">VD</div>
              <div className="pchat-header-text">
                <h3>Valerie's Assistant</h3>
                <p><span className="pchat-status-dot" /> Online</p>
              </div>
            </div>
            <button className="pchat-close" onClick={() => setIsOpen(false)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="pchat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`pchat-msg ${msg.role}`}>
                <div className="pchat-msg-bubble">{msg.content}</div>
              </div>
            ))}
            {isLoading && (
              <div className="pchat-msg assistant">
                <div className="pchat-typing">
                  <span /><span /><span />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {showSuggestions && (
            <div className="pchat-suggestions-wrapper">
              <div className="pchat-suggestion-tabs">
                {SUGGESTION_CATEGORIES.map((cat, i) => (
                  <button
                    key={cat.label}
                    className={`pchat-suggestion-tab ${activeCategory === i ? "active" : ""}`}
                    onClick={() => setActiveCategory(i)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
              <div className="pchat-suggestion-list">
                {SUGGESTION_CATEGORIES[activeCategory].questions.map((q) => (
                  <button
                    key={q}
                    className="pchat-suggestion"
                    onClick={() => sendMessage(q)}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="pchat-input-area">
            <textarea
              ref={inputRef}
              className="pchat-input"
              placeholder="Ask about skills, projects..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
            />
            <button className="pchat-send" onClick={() => sendMessage()} disabled={!input.trim() || isLoading}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}