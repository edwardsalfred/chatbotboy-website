import Header from "@/components/Header";
import { Footer } from "@/components/LowerSections";
import Image from "next/image";

export default function BlogPost() {
    return (
        <div className="bg-zinc-950 min-h-screen text-zinc-300 antialiased font-light relative text-base md:text-lg">
            {/* Background Details */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px]" />
                <div className="absolute top-[40%] right-[-10%] w-[30%] h-[30%] rounded-full bg-sky-900/10 blur-[120px]" />
            </div>

            <div className="relative z-10 font-sans">
                <Header />

                <main className="max-w-3xl mx-auto px-6 py-32 md:py-40 min-h-screen">
                    {/* Post Header */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 text-sm text-blue-400 font-medium mb-4">
                            <span>Marketing</span>
                            <span className="w-1 h-1 rounded-full bg-zinc-600" />
                            <span className="text-zinc-500">Feb 21, 2026</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6">
                            How to Ask for Reviews: A Complete Guide to Boost Your Business
                        </h1>
                    </div>

                    <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-12 border border-zinc-800">
                        <Image src="/blog/how-to-ask-for-reviews-hero.png" alt="How to ask for reviews" fill className="object-cover" />
                    </div>

                    {/* Post Content */}
                    <div className="prose prose-invert prose-blue max-w-none prose-lg">
                        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-12 not-prose">
                            <h2 className="text-xl font-medium text-white mb-4">Table of Contents</h2>
                            <ul className="space-y-3 text-zinc-400">
                                <li><a href="#why-reviews-matter" className="hover:text-blue-400 transition-colors">Why Reviews Matter More Than Ever</a></li>
                                <li><a href="#how-to-ask" className="hover:text-blue-400 transition-colors">How to Ask for Reviews: The Right Way</a></li>
                                <li><a href="#dos-and-donts" className="hover:text-blue-400 transition-colors">Dos and Don’ts of Asking for Reviews</a></li>
                                <li><a href="#chatbots-revolutionize" className="hover:text-blue-400 transition-colors">How Chatbots Can Revolutionize Review Requests</a></li>
                                <li><a href="#handling-negative-reviews" className="hover:text-blue-400 transition-colors">Handling Negative Reviews with Grace</a></li>
                                <li><a href="#conclusion" className="hover:text-blue-400 transition-colors">Conclusion</a></li>
                            </ul>
                        </div>

                        <h2 id="why-reviews-matter" className="text-2xl font-semibold text-white mt-12 mb-4 scroll-mt-32">Why Reviews Matter More Than Ever</h2>
                        <p className="mb-6 leading-relaxed">
                            Reviews influence customer decisions and shape public perception. Here’s why you should make them a top priority:
                        </p>
                        <ul className="list-disc pl-6 mb-8 space-y-4 text-zinc-300">
                            <li><strong className="text-white font-medium">Boost Visibility:</strong> Google’s algorithms favor businesses with consistent, high-quality reviews, pushing them higher in search results.</li>
                            <li><strong className="text-white font-medium">Build Trust:</strong> Reviews act as social proof, showing potential customers why they should choose your business over competitors.</li>
                            <li><strong className="text-white font-medium">Increase Revenue:</strong> A higher star rating correlates directly with more sales, as customers are willing to pay more for businesses they trust.</li>
                            <li><strong className="text-white font-medium">Gain Valuable Insights:</strong> Reviews offer unfiltered feedback, helping you improve your products or services.</li>
                        </ul>

                        <h2 id="how-to-ask" className="text-2xl font-semibold text-white mt-12 mb-4 scroll-mt-32">How to Ask for Reviews: The Right Way</h2>

                        <h3 className="text-xl font-medium text-white mt-8 mb-3">1. Choose the Right Moment</h3>
                        <p className="mb-6 leading-relaxed">
                            Timing is everything when requesting reviews. Aim for moments when customers are happiest, such as after a successful purchase, project completion, or positive interaction with your team. Happy customers are far more likely to share their experiences.
                        </p>

                        <h3 className="text-xl font-medium text-white mt-8 mb-3">2. Personalize Your Request</h3>
                        <p className="mb-6 leading-relaxed">
                            Generic, one-size-fits-all requests rarely succeed. Instead, personalize your approach. Mention the customer’s name, reference their recent purchase or interaction, and thank them for their support before requesting a review.
                        </p>
                        <blockquote className="border-l-4 border-blue-500 pl-4 my-6 italic text-zinc-400">
                            Example: Hi [Customer Name], thank you for choosing [Your Business]. Your feedback means the world to us! If you have a moment, we’d love for you to share your experience by leaving a quick review [insert link].
                        </blockquote>

                        <h3 className="text-xl font-medium text-white mt-8 mb-3">3. Make It Easy</h3>
                        <p className="mb-6 leading-relaxed">
                            Simplify the process for your customers. Provide a direct link to your review page and guide them on how to leave a review. The easier the process, the more likely they are to follow through.
                        </p>

                        <h3 className="text-xl font-medium text-white mt-8 mb-3">4. Automate the Process</h3>
                        <p className="mb-6 leading-relaxed">
                            Chatbots can handle review requests seamlessly. After a transaction, a chatbot can automatically send a polite request along with a link to your review page. This approach saves time and ensures you never miss an opportunity to gather feedback.
                        </p>

                        <h3 className="text-xl font-medium text-white mt-8 mb-3">5. Be Transparent and Honest</h3>
                        <p className="mb-6 leading-relaxed">
                            Let customers know why reviews are important. Explain how their feedback helps you improve and serves other customers. Authenticity goes a long way in building trust and encouraging participation.
                        </p>

                        <h2 id="dos-and-donts" className="text-2xl font-semibold text-white mt-12 mb-4 scroll-mt-32">Dos and Don’ts of Asking for Reviews</h2>
                        <h3 className="text-xl font-medium text-white mt-8 mb-3">Dos:</h3>
                        <ul className="list-disc pl-6 mb-8 space-y-4 text-zinc-300">
                            <li><strong className="text-white font-medium">Respond to Every Review:</strong> Acknowledge and thank customers for their feedback, whether positive or negative.</li>
                            <li><strong className="text-white font-medium">Train Your Team:</strong> Make sure your staff knows how to politely ask for reviews during in-person interactions.</li>
                            <li><strong className="text-white font-medium">Use Multiple Channels:</strong> Request reviews via email, text messages, or chatbots, depending on the customer’s preferred communication method.</li>
                            <li><strong className="text-white font-medium">Highlight Positive Reviews:</strong> Share glowing reviews on your website or social media to inspire others to contribute.</li>
                        </ul>

                        <h3 className="text-xl font-medium text-white mt-8 mb-3">Don’ts:</h3>
                        <ul className="list-disc pl-6 mb-8 space-y-4 text-zinc-300">
                            <li><strong className="text-white font-medium">Don’t Offer Bribes:</strong> Incentivizing reviews with discounts or gifts violates most review platforms’ policies and can harm your reputation.</li>
                            <li><strong className="text-white font-medium">Don’t Pressure Customers:</strong> A gentle nudge works better than aggressive tactics.</li>
                            <li><strong className="text-white font-medium">Don’t Ignore Feedback:</strong> Use reviews as an opportunity to learn and improve.</li>
                        </ul>

                        <h2 id="chatbots-revolutionize" className="text-2xl font-semibold text-white mt-12 mb-4 scroll-mt-32">How Chatbots Can Revolutionize Review Requests</h2>
                        <p className="mb-6 leading-relaxed">
                            Chatbots are powerful tools for managing and requesting reviews. Here’s why they’re a game-changer:
                        </p>
                        <ul className="list-disc pl-6 mb-8 space-y-4 text-zinc-300">
                            <li><strong className="text-white font-medium">Automated Follow-Ups:</strong> Chatbots can instantly follow up with customers after a transaction, sending a personalized message asking for feedback.</li>
                            <li><strong className="text-white font-medium">24/7 Availability:</strong> Unlike humans, chatbots never take breaks. They can engage customers anytime, ensuring no opportunity is missed.</li>
                            <li><strong className="text-white font-medium">Streamlined Process:</strong> By sharing a direct link to your review page, chatbots eliminate unnecessary steps, making it easier for customers to leave reviews.</li>
                            <li><strong className="text-white font-medium">Proactive Engagement:</strong> Chatbots can identify satisfied customers in real time and guide them to share their experiences online.</li>
                        </ul>
                        <blockquote className="border-l-4 border-blue-500 pl-4 my-6 italic text-zinc-400">
                            Example Scenario: After a customer interacts with your chatbot to resolve an issue, it can follow up with: “We’re glad we could assist you! If you’re happy with our service, we’d appreciate it if you could leave a quick review here: [insert link].”
                        </blockquote>


                        <h2 id="handling-negative-reviews" className="text-2xl font-semibold text-white mt-12 mb-4 scroll-mt-32">Handling Negative Reviews with Grace</h2>
                        <p className="mb-6 leading-relaxed">
                            Negative reviews are inevitable, but how you handle them matters:
                        </p>
                        <ul className="list-disc pl-6 mb-8 space-y-4 text-zinc-300">
                            <li><strong className="text-white font-medium">Stay Calm and Professional:</strong> Respond politely and avoid defensiveness.</li>
                            <li><strong className="text-white font-medium">Acknowledge the Issue:</strong> Show empathy and let the customer know you’re taking their concerns seriously.</li>
                            <li><strong className="text-white font-medium">Offer a Solution:</strong> Provide a resolution and invite the customer to discuss the matter offline.</li>
                            <li><strong className="text-white font-medium">Learn and Improve:</strong> Treat every negative review as an opportunity to refine your business.</li>
                        </ul>

                        <h2 id="conclusion" className="text-2xl font-semibold text-white mt-12 mb-4 scroll-mt-32">Conclusion</h2>
                        <p className="mb-6 leading-relaxed">
                            Asking for reviews doesn’t have to be a daunting task. By being thoughtful, transparent, and leveraging tools like chatbots, you can build a steady stream of customer feedback that boosts your reputation and drives growth.
                        </p>
                        <p className="mb-6 leading-relaxed">
                            Ready to elevate your customer interactions and streamline your review process? Explore how ChatbotBoy.ai can help you automate and optimize your approach today!
                        </p>
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    );
}
