"use client"

import { useEffect, useState } from "react"

export function TypewriterText({ phrases }: { phrases: string[] }) {
  const [i, setI] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[i % phrases.length]
    const delta = deleting ? 40 : 80
    const id = setTimeout(
      () => {
        const nextText = deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)
        setText(nextText)
        if (!deleting && nextText === current) {
          setDeleting(true)
        } else if (deleting && nextText === "") {
          setDeleting(false)
          setI((v) => v + 1)
        }
      },
      deleting && text === "" ? 700 : delta,
    )
    return () => clearTimeout(id)
  }, [text, deleting, i, phrases])

  return (
    <span className="inline-block">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  )
}
