import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-dvh grid place-items-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Not Found</h1>
        <p className="mt-2 text-muted-foreground">We couldn’t find that product.</p>
        <Link href="/catalogue" className="mt-4 inline-block underline underline-offset-4">
          Back to catalogue
        </Link>
      </div>
    </div>
  )
}
