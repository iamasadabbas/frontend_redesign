'use client'

import { useEffect, useState } from 'react'
import { Toaster as Sonner, ToasterProps } from 'sonner'

/**
 * App-wide toaster. There is no next-themes provider in this app; the only dark
 * mode is the cashier's, which toggles the `dark` class on <html> while mounted
 * (see CashierThemeContext). Follow that class so toasts match the cashier theme.
 */
const Toaster = ({ ...props }: ToasterProps) => {
  const [theme, setTheme] = useState<ToasterProps['theme']>('light')

  useEffect(() => {
    const root = document.documentElement
    const sync = () => setTheme(root.classList.contains('dark') ? 'dark' : 'light')
    sync()
    const observer = new MutationObserver(sync)
    observer.observe(root, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
