"use client"

export function GlobalEffects() {
  return (
    <style jsx global>{`
      /* Custom thin scrollbar with accent */
      ::-webkit-scrollbar { height: 10px; width: 10px; }
      ::-webkit-scrollbar-track { background: transparent; }
      ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #0b0b0b, #d4af37); border-radius: 999px; }

      /* Button ripple helper (use with overflow-hidden on buttons if needed) */
      .ripple { position: relative; overflow: hidden; isolation: isolate; }
      .ripple::after {
        content: ""; position: absolute; inset: 0;
        background: radial-gradient(circle, rgba(212,175,55,0.3) 10%, transparent 10%) center/0% 0% no-repeat;
        transition: background-size 0.6s ease-out;
      }
      .ripple:active::after { background-size: 200% 200%; transition: 0s; }

      @keyframes shine { 0% { background-position: 200% 0; } 100% { background-position: 0 0; } }
    `}</style>
  )
}
