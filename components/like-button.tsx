"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function LikeButton() {
  const [liked, setLiked] = useState(false)
  return (
    <motion.button
      onClick={() => setLiked((v) => !v)}
      className="relative inline-flex items-center justify-center rounded-full border size-10"
      whileTap={{ scale: 0.9 }}
      aria-pressed={liked}
      aria-label="Toggle favorite"
    >
      <motion.span
        initial={false}
        animate={{ scale: liked ? 1.2 : 1, color: liked ? "rgb(239 68 68)" : "currentColor" }}
        transition={{ type: "spring", stiffness: 500, damping: 20 }}
      >
        <Heart className={`size-5 ${liked ? "fill-red-500" : ""}`} />
      </motion.span>
      {liked && (
        <motion.span
          className="absolute"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.6, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      )}
    </motion.button>
  )
}
