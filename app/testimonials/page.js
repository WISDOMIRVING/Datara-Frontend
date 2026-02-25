import Card from "../../components/Card";

export default function Testimonials() {
    const reviews = [
        {
            name: "Sarah J.",
            role: "Entrepreneur",
            text: "Datara has saved me so much time. The data plans are cheap and delivery is instant!",
            rating: 5,
        },
        {
            name: "Michael O.",
            role: "Student",
            text: "Best platform for students. I get affordable data bundles that keep me online for my studies.",
            rating: 5,
        },
        {
            name: "Chinedu K.",
            role: "Freelancer",
            text: "Reliable and fast. I've never had a failed transaction. Highly recommended!",
            rating: 4,
        },
    ];

    return (
        <div className="bg-[var(--bg-primary)] py-20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-[var(--text-primary)]">
                        What Our Users Say
                    </h1>
                    <p className="mt-4 text-[var(--text-primary)] opacity-80">
                        Join thousands of happy customers who trust Datara.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <Card key={idx} className="relative">
                            <div className="text-4xl text-blue-200 absolute top-4 right-6">
                                "
                            </div>
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i}>{i < review.rating ? "★" : "☆"}</span>
                                ))}
                            </div>
                            <p className="text-[var(--text-primary)] opacity-70 mb-6 italic">
                                {review.text}
                            </p>
                            <div>
                                <h4 className="font-bold text-[var(--text-primary)]">
                                    {review.name}
                                </h4>
                                <span className="text-sm text-[var(--text-primary)] opacity-60">
                                    {review.role}
                                </span>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
