import { useState } from 'react'

/* Image with a soft placeholder and graceful fallback if the URL fails. */
export default function SmartImage({ src, alt, className = '', ...rest }) {
  const [state, setState] = useState('loading')
  return (
    <span className={`smart-img ${state} ${className}`}>
      {state !== 'error' && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setState('loaded')}
          onError={() => setState('error')}
          {...rest}
        />
      )}
      {state === 'error' && <span className="smart-img__fallback">{alt}</span>}
    </span>
  )
}
