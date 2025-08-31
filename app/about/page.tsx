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
              <h1 className="text-4xl md:text-5xl font-bold text-balance">About Us</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl leading-relaxed">
                Crafting timeless carry solutions. We believe in products that last, combining exquisite design with
                uncompromising durability.
              </p>
            </div>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted">
              {/* This image would be replaced with an actual brand image */}
              <Image
                src="/bag-collection.jpg" // Replace with your actual hero image
                alt="Collection of bags"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
          </section>

          {/* Our Story */}
          <section className="py-12 bg-card/50 backdrop-blur-sm">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted">
                {/* Image of someone crafting or a studio */}
                <Image
                  src="/story.jpg" // Replace with your actual crafting image
                  alt="Crafting a bag"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold">Our Story</h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  What started as a passionate pursuit in a small workshop has evolved into a brand synonymous with
                  quality and craftsmanship. We meticulously design and handcraft each item, focusing on the finer
                  details that make our products stand out. Our journey is one of dedication, innovation, and an
                  unwavering commitment to our customers.
                </p>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Every stitch tells a story of tradition, modern design, and a future where durability meets elegance.
                </p>
              </div>
            </div>
          </section>

          {/* Our Journey (Timeline) */}
          <section className="py-12">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">Our Journey</h2>
              <div className="relative border-l-2 border-primary/20 pl-8">
                {/* Vertical timeline */}
                {[
                  { year: "2019", title: "Founded Our Studio", text: "Starting with a vision in a small workshop." },
                  {
                    year: "2021",
                    title: "First Major Milestone",
                    text: "Successfully shipped our initial 5,000 units.",
                  },
                  {
                    year: "2023",
                    title: "Embracing Sustainability",
                    text: "Introduced recycled linings in all new collections.",
                  },
                  {
                    year: "2024",
                    title: "Global Reach",
                    text: "Expanded our distribution to international stockists.",
                  },
                  {
                    year: "2025",
                    title: "Certified Excellence",
                    text: "Achieved certification for our sustainable materials.",
                  },
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

          {/* Our Production */}
          <section className="py-12 bg-card/50 backdrop-blur-sm">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">Our Production</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Premium Materials",
                    description:
                      "Sourcing only the finest full-grain leather, durable textiles, and YKK hardware for longevity.",
                    items: ["Full‑grain leather", "Premium textiles", "YKK zippers & metal hardware"],
                  },
                  {
                    title: "Artisan Craftsmanship",
                    description:
                      "Each piece is meticulously crafted with precision cutting, reinforced stitching, and careful edge finishing.",
                    items: ["Precision cutting", "Reinforced stitching", "Edge finishing"],
                  },
                  {
                    title: "Rigorous Quality",
                    description:
                      "Undergoing extensive quality control, load testing, and utilizing sustainable packaging solutions.",
                    items: ["Rigorous QC", "Load & abrasion tests", "Sustainable packaging"],
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

          {/* Our Values */}
          <section className="py-12 pb-16 bg-card/50 backdrop-blur-sm">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Uncompromising Quality",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ),
                    text: "We believe in creating products that are built to last and age beautifully, reflecting superior craftsmanship.",
                  },
                  {
                    title: "Sustainable Practices",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                    ),
                    text: "Our commitment extends to responsible sourcing, mindful production, and minimizing environmental impact.",
                  },
                  {
                    title: "Complete Transparency",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 13v-1m4 1v-1m4 1v-1M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                        />
                      </svg>
                    ),
                    text: "We foster clear communication and honest practices throughout our entire supply chain and operations.",
                  },
                  {
                    title: "Dedicated Service",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18 10a6 6 0 00-12 0v2H3a1 1 0 00-1 1v4a1 1 0 001 1h18a1 1 0 001-1v-4a1 1 0 00-1-1h-3v-2z"
                        />
                      </svg>
                    ),
                    text: "Providing exceptional support that stands firmly behind the quality and longevity of our products.",
                  },
                ].map((v) => (
                  <div key={v.title} className="rounded-2xl border bg-background p-8 shadow-lg text-center">
                    <div className="flex justify-center mb-4">{v.icon}</div>
                    <h3 className="text-xl font-semibold">{v.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300 text-lg font-medium"
                >
                  Get in touch <span className="ml-2">→</span>
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