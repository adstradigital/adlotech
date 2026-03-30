'use client'

export default function OpenContactMenuButton({ className = '', children }) {
  const handleOpenContactMenu = () => {
    window.dispatchEvent(new Event('open-contact-menu'))
  }

  return (
    <button type="button" onClick={handleOpenContactMenu} className={className}>
      {children}
    </button>
  )
}
