export default function Page() {
  const faqs = [
    {
      q: "Which Slack channels can I monitor?",
      a: "Any public or private channel your Slack bot is invited to. You configure the source and destination channels from the dashboard after connecting your workspace."
    },
    {
      q: "How does the AI classify messages?",
      a: "Each message is analyzed and tagged as a feature request, bug report, or general feedback, then forwarded to the matching product team channel with context preserved."
    },
    {
      q: "Is there a free trial?",
      a: "Yes — you get a 7-day free trial with full access. No credit card required until the trial ends."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          For SaaS Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-route customer feedback<br />
          <span className="text-[#58a6ff]">from Slack to your product teams</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your customer-facing Slack channels. AI classifies every message as a feature request or bug and forwards it to the right team — instantly, without manual triage.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start Free Trial
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">7-day free trial · No credit card required</p>
      </section>

      {/* Feature highlights */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid sm:grid-cols-3 gap-4 text-center">
        {[
          { icon: "⚡", title: "Real-time routing", desc: "Messages forwarded in seconds via Slack Events API" },
          { icon: "🤖", title: "AI classification", desc: "Automatically tags bugs, feature requests, and feedback" },
          { icon: "📊", title: "Analytics dashboard", desc: "Track volume, categories, and team response rates" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white text-sm mb-1">{f.title}</div>
            <div className="text-xs text-[#8b949e]">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$35</div>
          <div className="text-sm text-[#8b949e] mb-6">/month per workspace</div>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Unlimited monitored channels",
              "AI-powered message classification",
              "Custom routing rules",
              "Analytics & reporting dashboard",
              "Slack OAuth — 1-click connect",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-1">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        &copy; {new Date().getFullYear()} Slack Feedback Router. All rights reserved.
      </footer>
    </main>
  );
}
