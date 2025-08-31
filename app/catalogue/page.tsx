import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageTransition } from "@/components/page-transition"
import { products } from "@/data/products"
import { CatalogueClient } from "@/components/catalogue-client"

export default function CataloguePage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SiteHeader />
      <main>
        <PageTransition>
          <section className="container mx-auto px-4 pt-10 md:pt-16">
            <h1 className="text-3xl md:text-4xl font-semibold">Catalogue</h1>
            <p className="mt-3 text-muted-foreground">Explore our full range. Click a card to view details.</p>

            <div className="mt-8">
              <CatalogueClient products={products} />
            </div>
          </section>
        </PageTransition>
      </main>
      <SiteFooter />
    </div>
  )
}
