import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageTransition } from "@/components/page-transition"
import { products } from "@/data/products"
import { ProductGallery } from "@/components/product-gallery"
import { LikeButton } from "@/components/like-button"
import { Button } from "@/components/ui/button"
import { SKUCopy } from "@/components/sku-copy"

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) return notFound()

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SiteHeader />
      <main>
        <PageTransition>
          <section className="container mx-auto px-4 pt-10 md:pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ProductGallery images={product.images} />
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold">{product.title}</h1>
                <p className="mt-1 text-muted-foreground">{product.subtitle}</p>

                <div className="mt-4 flex items-center gap-4">
                  <p className="text-xl font-semibold">${product.price.toFixed(2)}</p>
                  <LikeButton />
                </div>

                <div className="mt-6 space-y-2">
                  <h3 className="font-medium">Materials</h3>
                  <ul className="text-muted-foreground list-disc list-inside">
                    {product.materials.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h3 className="font-medium">About this bag</h3>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </div>

                <SKUCopy sku={product.sku} />

                <div className="mt-6 flex gap-3">
                  <a
                    href={`https://wa.me/9745561967?text=${encodeURIComponent(
                      `Hi, I’m interested in ${product.title} (SKU: ${product.sku}) priced at $${product.price.toFixed(2)}.`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>Enquire on WhatsApp</Button>
                  </a>
                  <a href="/catalogue">
                    <Button variant="outline">Back to Catalogue</Button>
                  </a>
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
