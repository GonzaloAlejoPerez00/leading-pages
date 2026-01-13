import Image from 'next/image'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
  fill?: boolean
}

export default function OptimizedImage({
  src,
  alt,
  width = 800,
  height = 600,
  priority = false,
  className = '',
  fill = false
}: OptimizedImageProps) {
  
  // Si es URL externa (Unsplash, etc)
  if (src.startsWith('http')) {
    if (fill) {
      return (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={className}
          style={{ objectFit: 'cover' }}
          sizes="100vw"
        />
      )
    }

    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={className}
        style={{ objectFit: 'cover' }}
      />
    )
  }

  // Si es imagen local (public/)
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={className}
        style={{ objectFit: 'cover' }}
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  )
}