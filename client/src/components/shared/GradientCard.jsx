export const GradientCard = ({ color, className, children }) => {
  const gradient = {
    green: 'bg-greenGradient',
    brown: 'bg-brownGradient'
  }

  return (
    <div className={`${gradient[color]} rounded-[30px] ${className}`}>
      {children}
    </div>
  )
}
