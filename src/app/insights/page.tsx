import Header from "@/components/Header";
import { Footer } from "@/components/LowerSections";
import Image from "next/image";

export default function InsightsPage() {
    const posts = [
        { cat: "Finance", date: "Feb 21, 2026", title: "Cash Flow Chaos: How to Stop Chasing Payments and Start Predicting Problems", desc: "You're profitable on paper but scrambling for cash in reality. Welcome to the small business cash flow nightmare, and how automation can fix it.", gradient: "from-amber-900/40", link: "/insights/cash-flow-chaos-how-to-stop-chasing-payments-and-start-predicting-problems", image: "/blog/cash-flow-automation-hero.png" },
        { cat: "Productivity", date: "Feb 21, 2026", title: "The Hidden Tax on Small Business: Why Manual Data Entry Is Killing Your Growth", desc: "This is the hidden tax that's slowly bleeding small businesses dry—not in dollars directly, but in something far more valuable: your time and mental energy.", gradient: "from-red-900/40", link: "/insights/the-hidden-tax-on-small-business-why-manual-data-entry-is-killing-your-growth", image: "/blog/manual-data-entry-hero.png" },
        { cat: "Automation", date: "Feb 21, 2026", title: "Drowning in Social Media: How to Automate Your Content Without Losing Your Voice", desc: "You're spending 10-15 hours per week on social media management. What should be a powerful marketing tool has become a soul-crushing time drain.", gradient: "from-sky-900/40", link: "/insights/drowning-in-social-media-how-to-automate-your-content-without-losing-your-voice", image: "/blog/social-media-automation-hero.png" },
        { cat: "Automation", date: "Feb 21, 2026", title: "Solving Small Business Hiring Headaches with Smart Automation", desc: "The reality check: What small business owners are saying about the difficulties of finding and screening qualified employees.", gradient: "from-purple-900/40", link: "/insights/solving-small-business-hiring-headaches-with-smart-automation", image: "/blog/hiring-automation-hero.png" },
        { cat: "Marketing", date: "Feb 21, 2026", title: "How to Ask for Reviews: A Complete Guide to Boost Your Business", desc: "Reviews influence customer decisions and shape public perception. Boost visibility, build trust, and increase revenue.", gradient: "from-blue-900/40", link: "/insights/how-to-ask-for-reviews-a-complete-guide-to-boost-your-business", image: "/blog/how-to-ask-for-reviews-hero.png" },
        { cat: "SEO", date: "Feb 21, 2026", title: "Mastering Google Reviews: The Ultimate Guide for Your Business", desc: "Why Google Reviews are non-negotiable: boost your online reputation, improve local SEO, and build customer trust.", gradient: "from-green-900/40", link: "/insights/mastering-google-reviews-the-ultimate-guide-for-your-business", image: "/blog/mastering-google-reviews-hero.png" },
    ];

    return (
        <div className="bg-zinc-950 min-h-screen text-zinc-300 antialiased font-light relative text-base md:text-lg">
            {/* Background Details */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px]" />
                <div className="absolute top-[40%] right-[-10%] w-[30%] h-[30%] rounded-full bg-sky-900/10 blur-[120px]" />
            </div>

            <div className="relative z-10 font-sans">
                <Header />

                <main className="max-w-7xl mx-auto px-6 py-32 md:py-40 min-h-screen">
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Insights</h1>
                    <p className="text-xl text-zinc-400 mb-20 max-w-2xl">
                        Deep dives into AI voice technology, automation strategy, and the future of work.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="insights-grid">
                        {posts.map((p) => (
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
                                        Read Article {/* @ts-expect-error iconify */}<iconify-icon icon="solar:arrow-right-linear" width="1.2em" height="1.2em" />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    );
}
