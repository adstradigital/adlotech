import Image from 'next/image'

const BrandLogo = ({ className = '', priority = false }) => {
  return (
    <Image
      src="/images/adlotech-logo.svg"
      alt="ADLOTECH logo"
      width={960}
      height={788}
      priority={priority}
      className={`h-auto w-full ${className}`}
    />
  )
}

export default BrandLogo
