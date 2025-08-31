"use client"

import { useToast } from "@/hooks/use-toast"
import { Copy } from "lucide-react"

export function SKUCopy({ sku }: { sku: string }) {
  const { toast } = useToast()
  return (
    <div className="mt-4 flex items-center gap-3">
      <span className="text-sm text-muted-foreground">SKU: {sku}</span>
      <button
        onClick={async () => {
          await navigator.clipboard.writeText(sku)
          toast({ title: "Copied", description: "SKU copied to clipboard." })
        }}
        className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md border hover:-translate-y-0.5 hover:shadow transition"
      >
        <Copy className="size-3.5" />
        Copy
      </button>
    </div>
  )
}
