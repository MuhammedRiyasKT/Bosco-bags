import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageTransition } from "@/components/page-transition";
import { AnimatedBG } from "@/components/animated-bg";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SiteHeader />
      <main>
        <AnimatedBG subtle />
        <PageTransition>
          {/* Hero Section */}
          <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-balance">About Bosco Bags</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl leading-relaxed">
                With over 30 years of experience, we've grown from humble beginnings into a trusted name in designing and producing high-quality bags for every need.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span className="text-sm">Est. 1995</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span className="text-sm">Made in India</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span className="text-sm">Nationwide Supply</span>
                </div>
              </div>
            </div>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted shadow-lg">
              <Image
                src="/bag-collection.jpg"
                alt="Collection of Bosco Bags"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
          </section>

          {/* Our Story */}
          <section className="py-12 bg-card/50 backdrop-blur-sm">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted shadow-lg">
                <Image
                  src="/story.jpg"
                  alt="Bosco Bags manufacturing process"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold">Our Story</h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  Founded in 1995, Bosco Bags has over 30 years of experience in the bag manufacturing industry. From humble beginnings, we have grown into a trusted name in designing and producing high-quality bags for every need.
                </p>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Today, Bosco Bags proudly supplies its products across India, catering to both retail and wholesale markets. Whether it's a school in need of bulk orders, a business requiring branded promotional bags, or retailers looking for a reliable supplier, Bosco Bags continues to deliver quality that stands out.
                </p>
              </div>
            </div>
          </section>

          {/* Our Specialties */}
          <section className="py-12">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">Our Specialties</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "School Bags",
                    description: "Durable and ergonomic designs that withstand daily use while providing comfort for students.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v6l9-5m-9 5l-9-5m9 5v-6m0 0l-9-5m9 5l9-5" />
                      </svg>
                    )
                  },
                  {
                    title: "Sports Bags",
                    description: "Spacious and versatile bags designed for athletes with dedicated compartments for equipment.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    )
                  },
                  {
                    title: "Ladies' Bags",
                    description: "Elegant and fashionable designs that combine functionality with style for everyday use.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    )
                  },
                  {
                    title: "Tote Bags",
                    description: "Versatile and eco-friendly totes perfect for shopping, beach trips, or everyday carry.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    )
                  },
                  {
                    title: "Custom & Promotional Bags",
                    description: "Customizable solutions for businesses looking to promote their brand with quality bags.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                      </svg>
                    )
                  },
                  {
                    title: "Retail & Wholesale",
                    description: "Supplying quality bags to retailers and wholesalers across India with reliable service.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14h.01M12 14h.01M16 14h.01" />
                      </svg>
                    )
                  }
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border bg-background p-6 shadow-lg flex flex-col items-center text-center">
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Journey (Timeline) */}
          <section className="py-12 bg-card/50 backdrop-blur-sm">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">Our Journey</h2>
              <div className="relative border-l-2 border-primary/20 pl-8">
                {[
                  { year: "1995", title: "Foundation", text: "Bosco Bags was established with a vision for quality bag manufacturing." },
                  { year: "2005", title: "Expansion", text: "Expanded our product line to include school and sports bags." },
                  { year: "2015", title: "National Reach", text: "Began supplying products across India to retail and wholesale markets." },
                  { year: "2020", title: "Innovation", text: "Introduced eco-friendly materials and sustainable practices." },
                  { year: "2024", title: "30 Years Celebration", text: "Celebrating three decades of quality craftsmanship and customer trust." },
                ].map((m, index) => (
                  <div key={m.year} className="mb-8 relative last:mb-0">
                    <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-sm font-bold text-primary-foreground">{index + 1}</span>
                    </div>
                    <p className="text-sm font-medium text-primary">{m.year}</p>
                    <h3 className="mt-1 text-xl font-semibold">{m.title}</h3>
                    <p className="mt-2 text-muted-foreground max-w-2xl">{m.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="py-12">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  {
                    title: "Quality First",
                    icon: "👜",
                    text: "We use strong, tested materials to ensure durability and longevity in all our products.",
                  },
                  {
                    title: "Customer Commitment",
                    icon: "🤝",
                    text: "Every bag is designed keeping the end user in mind, prioritizing comfort and functionality.",
                  },
                  {
                    title: "Innovation",
                    icon: "🎨",
                    text: "Continuously blending functionality with modern trends to meet evolving customer needs.",
                  },
                  {
                    title: "Sustainability",
                    icon: "🌱",
                    text: "Moving towards eco-friendly materials and processes to minimize environmental impact.",
                  },
                  {
                    title: "Trust & Reliability",
                    icon: "🔒",
                    text: "Building long-term relationships with clients and partners through consistent quality.",
                  },
                ].map((v) => (
                  <div key={v.title} className="rounded-2xl border bg-background p-6 shadow-lg text-center flex flex-col">
                    <div className="text-4xl mb-4">{v.icon}</div>
                    <h3 className="text-lg font-semibold mb-3">{v.title}</h3>
                    <p className="mt-auto text-sm text-muted-foreground leading-relaxed">{v.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Production */}
          <section className="py-12 bg-card/50 backdrop-blur-sm">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">Our Production Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Premium Materials",
                    description: "Sourcing only the finest materials including durable fabrics, reliable zippers, and quality hardware.",
                    items: ["Durable fabrics", "Reliable zippers", "Quality hardware"],
                  },
                  {
                    title: "Expert Craftsmanship",
                    description: "Each piece is meticulously crafted with attention to detail, reinforced stitching, and careful finishing.",
                    items: ["Precision cutting", "Reinforced stitching", "Careful finishing"],
                  },
                  {
                    title: "Rigorous Quality Control",
                    description: "Undergoing extensive quality checks, durability testing, and sustainable packaging solutions.",
                    items: ["Quality checks", "Durability tests", "Sustainable packaging"],
                  },
                ].map((col) => (
                  <div key={col.title} className="rounded-2xl border bg-background p-8 shadow-lg">
                    <h3 className="text-2xl font-semibold">{col.title}</h3>
                    <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{col.description}</p>
                    <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                      {col.items.map((it) => (
                        <li key={it} className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-2 text-primary flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Meet Our Team */}
          <section className="py-12">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">Meet Our Team</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                {[
                  { name: "Aboobacker", role: "owner", image: "/team-1.jpg" }, // Replace with actual images
                  { name: "Rashid", role: "Master", image: "/team-2.jpg" },
                  { name: "Rahoof", role: "Quality checker", image: "/team-3.jpg" },
                  { name: "Kannan", role: "Finishing Specialist", image: "/team-4.jpg" },
                ].map((member) => (
                  <div key={member.name} className="text-center group">
                    <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors duration-300">
                      <Image
                        src={member.image}
                        alt={member.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="mt-4 text-lg font-medium">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-12 pb-16">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Experience the Bosco Bags Difference</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who have trusted our quality bags for over three decades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/catalogue"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors duration-300 text-lg font-medium"
                >
                  Explore Our Catalogue
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300 text-lg font-medium"
                >
                  Get in Touch <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </section>
        </PageTransition>
      </main>
      <SiteFooter />
    </div>
  );
}