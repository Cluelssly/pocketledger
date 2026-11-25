import Link from "next/link";
import Navbar from "./components/Navbar";
import FeatureCard from "./components/FeatureCard";
import "./home.css";

const features = [
  { icon: "💸", title: "Track every peso", text: "Log income and expenses in seconds with categories, dates and notes." },
  { icon: "🎯", title: "Budgets that warn you", text: "Set monthly limits per category. Bars turn amber at 80% and red when you go over." },
  { icon: "📊", title: "Clear reports", text: "See where your money goes and compare income vs expenses over six months." },
  { icon: "📅", title: "Month by month", text: "Switch months with one click to review any period of your spending." },
  { icon: "⬇️", title: "Export & backup", text: "Download your data as CSV or JSON, and restore it any time." },
  { icon: "🔒", title: "Private by design", text: "Everything stays in your browser. No account, no server, no tracking." },
];

const steps = [
  { n: "1", title: "Add a transaction", text: "Enter the amount, pick a category and save." },
  { n: "2", title: "Set your budgets", text: "Choose a monthly limit for the categories you care about." },
  { n: "3", title: "Review your month", text: "Check the overview and reports to see how you did." },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <section id="top" className="home-hero">
          <div className="home-hero-text">
            <span className="home-pill">Free · No sign-up · Works offline</span>
            <h1>Know where your money goes.</h1>
            <p>
              PocketLedger is a simple personal expense and budget tracker. Record
              spending, set monthly limits and see clear reports, all in your browser.
            </p>
            <div className="home-actions">
              <Link href="/pocket" className="home-btn">Open PocketLedger</Link>
              <a href="#features" className="home-btn ghost">See features</a>
            </div>
          </div>
        </section>

        <section id="features" className="home-section">
          <h2>Everything you need, nothing you don&apos;t</h2>
          <div className="home-grid">
            {features.map((f) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} text={f.text} />
            ))}
          </div>
        </section>

        <section id="how" className="home-section alt">
          <h2>How it works</h2>
          <div className="home-steps">
            {steps.map((s) => (
              <div className="home-step" key={s.n}>
                <span className="home-num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="home-footer">
          <span>💰 PocketLedger</span>
          <span>Simple budgeting, right in your browser.</span>
        </footer>
      </div>
    </>
  );
}