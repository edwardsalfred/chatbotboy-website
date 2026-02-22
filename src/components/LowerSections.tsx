const BOOKING_URL = "https://links.convertwave.ai/widget/booking/vTmxKNDLOVK17mpAYXot";

import Image from "next/image";

export function InsightsSection() {
    const posts = [
        { cat: "Finance", date: "Feb 21, 2026", title: "Cash Flow Chaos: How to Stop Chasing Payments and Start Predicting Problems", desc: "You're profitable on paper but scrambling for cash in reality. Welcome to the small business cash flow nightmare, and how automation can fix it.", gradient: "from-amber-900/40", link: "/insights/cash-flow-chaos-how-to-stop-chasing-payments-and-start-predicting-problems", image: "/blog/cash-flow-automation-hero.png" },
        { cat: "Productivity", date: "Feb 21, 2026", title: "The Hidden Tax on Small Business: Why Manual Data Entry Is Killing Your Growth", desc: "This is the hidden tax that's slowly bleeding small businesses dry—not in dollars directly, but in something far more valuable: your time and mental energy.", gradient: "from-red-900/40", link: "/insights/the-hidden-tax-on-small-business-why-manual-data-entry-is-killing-your-growth", image: "/blog/manual-data-entry-hero.png" },
        { cat: "Automation", date: "Feb 21, 2026", title: "Drowning in Social Media: How to Automate Your Content Without Losing Your Voice", desc: "You're spending 10-15 hours per week on social media management. What should be a powerful marketing tool has become a soul-crushing time drain.", gradient: "from-sky-900/40", link: "/insights/drowning-in-social-media-how-to-automate-your-content-without-losing-your-voice", image: "/blog/social-media-automation-hero.png" },
        { cat: "Automation", date: "Feb 21, 2026", title: "Solving Small Business Hiring Headaches with Smart Automation", desc: "The reality check: What small business owners are saying about the difficulties of finding and screening qualified employees.", gradient: "from-purple-900/40", link: "/insights/solving-small-business-hiring-headaches-with-smart-automation", image: "/blog/hiring-automation-hero.png" },
        { cat: "Marketing", date: "Feb 21, 2026", title: "How to Ask for Reviews: A Complete Guide to Boost Your Business", desc: "Reviews influence customer decisions and shape public perception. Boost visibility, build trust, and increase revenue.", gradient: "from-blue-900/40", link: "/insights/how-to-ask-for-reviews-a-complete-guide-to-boost-your-business", image: "/blog/how-to-ask-for-reviews-hero.png" },
        { cat: "SEO", date: "Feb 21, 2026", title: "Mastering Google Reviews: The Ultimate Guide for Your Business", desc: "Why Google Reviews are non-negotiable: boost your online reputation, improve local SEO, and build customer trust.", gradient: "from-green-900/40", link: "/insights/mastering-google-reviews-the-ultimate-guide-for-your-business", image: "/blog/mastering-google-reviews-hero.png" },
    ];
    return (
        <section id="insights" className="py-28 px-6 max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-6 text-white">Insights</h2>
            <p className="text-xl text-zinc-400 text-center mb-20 max-w-2xl mx-auto">Deep dives into AI voice technology, automation strategy, and the future of work.</p>
            <div className="grid md:grid-cols-3 gap-8">
                {posts.slice(0, 3).map((p) => (
                    <a key={p.title} href={p.link} className="glass-card p-0 rounded-2xl flex flex-col overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
                        <div className="h-48 w-full bg-zinc-900 relative overflow-hidden">
                            {p.image ? (
                                <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            ) : (
                                <>
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10" />
                                    <div className={`w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] ${p.gradient} via-zinc-900 to-zinc-950 group-hover:scale-105 transition-transform duration-700`} />
                                </>
                            )}
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <div className="flex items-center gap-3 text-sm text-blue-400 font-medium mb-3">
                                <span>{p.cat}</span>
                                <span className="w-1 h-1 rounded-full bg-zinc-600" />
                                <span className="text-zinc-500">{p.date}</span>
                            </div>
                            <h3 className="text-xl font-medium text-white mb-3 group-hover:text-blue-400 transition-colors">{p.title}</h3>
                            <p className="text-zinc-400 text-base leading-relaxed mb-6 line-clamp-2">{p.desc}</p>
                            <div className="mt-auto flex items-center text-sm font-medium text-white group-hover:gap-2 transition-all">
                                Read Article <iconify-icon icon="solar:arrow-right-linear" width="1.2em" height="1.2em" />
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

export function AboutSection() {
    return (
        <section className="bg-gradient-to-b from-zinc-950 to-zinc-900 border-zinc-800 border-t py-28" id="about">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="w-full md:w-5/12">
                        <div className="relative aspect-square rounded-2xl overflow-hidden border border-zinc-700 bg-zinc-800 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
                            <Image src="/highresgraybg_ae.png" alt="Chatbot Boy Founder" fill className="object-cover" />
                        </div>
                    </div>
                    <div className="md:w-7/12 w-full space-y-8">
                        <h2 className="text-4xl font-semibold text-white tracking-tight">Meet The Founder</h2>
                        <h3 className="text-2xl font-medium text-blue-400">10+ years building systems that work while you sleep.</h3>
                        <p className="leading-relaxed text-lg text-zinc-300">The AI space is full of people selling courses and showing off automations that fall apart the moment they go live. Alfred Edwards operates differently.</p>
                        <p className="leading-relaxed text-lg text-zinc-300">With over 10 years of experience across AI automation, software development, and digital marketing, Alfred has built real production systems for real businesses. From AI voice agents that qualify leads around the clock to CRM workflows that eliminate manual data entry entirely, every system is built to ship and built to scale.</p>
                        <p className="leading-relaxed text-lg text-zinc-300">His background spans Oracle enterprise consulting, outbound lead generation, and hands-on automation development using tools like n8n, Vapi, Retell, and Go High Level. He doesn&apos;t just know how the tools work. He knows how businesses work, and how to wire the two together in a way that delivers real results from day one.</p>
                        <div className="pt-6 flex gap-6">
                            <a href="https://www.linkedin.com/in/alfrededwards/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors text-2xl">
                                <iconify-icon icon="lucide:linkedin" width="24" height="24" />
                            </a>
                            <a href="https://www.youtube.com/@alfredaoneedwards" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors text-2xl">
                                <iconify-icon icon="lucide:youtube" width="24" height="24" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function CTASection() {
    return (
        <section className="overflow-hidden text-center py-36 px-6 relative" id="contact">
            <div className="absolute inset-0 bg-blue-900/20 blur-3xl rounded-full -z-10 transform scale-50" />
            <div className="max-w-3xl mx-auto space-y-10">
                <h2 className="md:text-6xl text-5xl font-semibold text-white tracking-tight">What would you do with 20 extra hours a week?</h2>
                <p className="text-xl text-zinc-300">Stop spending time on follow-ups, data entry, and missed calls. Let&apos;s build the system that handles it for you.</p>
                <div className="flex justify-center pt-6">
                    <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="shiny-cta">
                        <span>Book Your Strategy Call</span>
                    </a>
                </div>
                <p className="text-sm text-zinc-500 mt-10">No commitment required. 30-minute discovery chat.</p>
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="border-t border-zinc-800 py-16 bg-zinc-950">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-base text-zinc-500">© 2026 Chatbot Boy AI. All rights reserved.</div>
                <div className="flex gap-10 text-base font-medium text-zinc-400">
                    <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
                    <a href="/terms" className="hover:text-white transition-colors">Terms</a>
                    <a href="mailto:alfred@chatbotboy.ai" className="hover:text-white transition-colors">Email Us</a>
                </div>
            </div>
        </footer>
    );
}
