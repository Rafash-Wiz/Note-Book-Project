import React from 'react'

export default function Footer() {
    let currentYear = new Date().getFullYear();
  return (
    <footer>Copyright © {currentYear}</footer>
  )
}
