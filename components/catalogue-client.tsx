"use client"

import { useMemo, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ProductCard } from "@/components/product-card"
import type { Product } from "@/data/products"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

type Props = {
  products: Product[]
  pageSize?: number
}

export function CatalogueClient({ products, pageSize = 9 }: Props) {
  const categories = useMemo(() => {
    const set = new Set<string>()
    products.forEach((p) => set.add(p.category))
    return ["All", ...Array.from(set)]
  }, [products])

  const [category, setCategory] = useState<string>("All")

  const [page, setPage] = useState<number>(1)

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (category !== "All" && p.category !== category) return false
      return true
    })
  }, [products, category])

  useEffect(() => {
    setPage(1)
  }, [category])

  const resetFilters = () => {
    setCategory("All")
    setPage(1)
  }

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="rounded-2xl border bg-card/70 backdrop-blur px-4 py-4 md:px-6 md:py-5"
      >
        <div className="flex flex-col gap-4 md:grid md:grid-cols-12 md:items-end md:gap-4">
          {/* Category */}
          <div className="md:col-span-10">
            <label className="mb-1 block text-sm text-muted-foreground">Category</label>
            <Select value={category} onValueChange={(v) => setCategory(v)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Reset */}
          <div className="md:col-span-2">
            <Button onClick={resetFilters} variant="outline" className="w-full bg-transparent">
              Reset filters
            </Button>
          </div>
        </div>

        <div className="mt-3 text-xs text-muted-foreground">
          {filtered.length === 0 ? <>Showing 0 items</> : <>Showing {filtered.length} items</>}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {filtered.map((p) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.25 }}
          >
            <ProductCard product={p} />
          </motion.div>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full rounded-xl border bg-card/60 p-6 text-center text-sm text-muted-foreground">
            No products match your filters.
          </div>
        )}
      </motion.div>

      {filtered.length > 0 && (
        <nav aria-label="Catalogue pagination" className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <div className="text-xs text-muted-foreground">Total {filtered.length} items</div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              aria-label="Previous page"
              className="border-border"
            >
              Prev
            </Button>
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.ceil(filtered.length / pageSize) }).map((_, i) => {
                const num = i + 1
                const active = num === page
                return (
                  <button
                    key={num}
                    onClick={() => setPage(num)}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "h-9 w-9 rounded-md text-sm transition border",
                      active
                        ? "bg-foreground text-background"
                        : "bg-background text-foreground hover:bg-foreground/80 hover:text-background",
                    ].join(" ")}
                  >
                    {num}
                  </button>
                )
              })}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => Math.min(Math.ceil(filtered.length / pageSize), p + 1))}
              disabled={page === Math.ceil(filtered.length / pageSize)}
              aria-label="Next page"
              className="border-border"
            >
              Next
            </Button>
          </div>
        </nav>
      )}
    </div>
  )
}
