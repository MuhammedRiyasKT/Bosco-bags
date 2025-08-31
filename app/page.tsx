import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSlider } from "@/components/hero-slider"
import { TypewriterText } from "@/components/typewriter-text"
import { PageTransition } from "@/components/page-transition"
import { AnimatedBG } from "@/components/animated-bg"
import { ParallaxSection } from "@/components/parallax-section"
import { ProductCard } from "@/components/product-card"
import { AnimatedCursor } from "@/components/animated-cursor"
import { GlobalEffects } from "@/components/global-effects"
import { products } from "@/data/products"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export default function HomePage() {
  const featured = products.slice(0, 6)
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <GlobalEffects />
      <AnimatedCursor />
      <SiteHeader />
      <main>
        <AnimatedBG />
        <PageTransition>
          <section className="relative overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-16">
              <div className="flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-10">
                <div className="w-full lg:w-1/2">
                  <p className="uppercase tracking-widest text-xs text-muted-foreground mb-3">Handcrafted Quality</p>
                  <h1 className="text-3xl md:text-5xl font-semibold text-pretty">
                    <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#111,#d4af37,#111)] bg-[length:200%_100%] animate-[shine_6s_linear_infinite]">
                      Premium Bags
                    </span>{" "}
                    for Everyday Elegance
                  </h1>
                  <div className="mt-3 md:mt-4 text-muted-foreground leading-relaxed">
                    <TypewriterText
                      phrases={[
                        "Minimal design. Maximum utility.",
                        "Genuine materials. Lasting comfort.",
                        "Crafted to stand out.",
                      ]}
                    />
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <Link href="/catalogue">
                      <Button className="relative group ripple overflow-hidden">
                        <span className="relative flex items-center gap-2">
                          Browse Catalogue
                          <Sparkles className="size-4" />
                        </span>
                      </Button>
                    </Link>
                    <Link href="/about">
                      <Button variant="outline" className="relative group overflow-hidden bg-transparent">
                        <span className="relative">Our Story</span>
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <HeroSlider />
                </div>
              </div>
            </div>
          </section>

          <ParallaxSection speed={-0.15} className="py-8 md:py-16">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
                <h2 className="text-xl md:text-2xl font-semibold">Featured Catalogue</h2>
                <Link href="/catalogue" className="text-sm underline underline-offset-4 hover:text-foreground/70">
                  View all
                </Link>
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featured.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </div>
          </ParallaxSection>

          <section className="py-12 md:py-20">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold">Modern Craft, Timeless Aesthetic</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    From premium materials to meticulous stitching, every bag blends durability with refined design.
                    Subtle textures, balanced proportions, and thoughtful compartments ensure a seamless daily carry.
                  </p>
                  <div className="mt-6 flex gap-3">
                    <Link href="/contact">
                      <Button className="relative group ripple overflow-hidden">
                        <span className="relative">Contact Us</span>
                      </Button>
                    </Link>
                    <a
                      href={`https://wa.me/9745561967?text=${encodeURIComponent("Hello, I’d like to know more about your bags.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="secondary" className="relative group overflow-hidden">
                        <span className="relative">Chat on WhatsApp</span>
                      </Button>
                    </a>
                  </div>
                </div>
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden border bg-card">
                  <video
                    className="absolute inset-0 h-full w-full object-cover opacity-40 dark:opacity-30"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/bag-texture.png"
                  >
                    <source src="/videos/hero.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/70 to-background/10" />
                  <div className="relative h-full w-full grid place-items-center">
                    <div className="text-center">
                      <p className="text-sm uppercase tracking-widest text-muted-foreground">Attention to detail</p>
                      <p className="mt-2 text-2xl font-semibold">Designed for movement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </PageTransition>
      </main>
      <SiteFooter />
    </div>
  )
}
