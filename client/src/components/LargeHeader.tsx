const LargeHeader = ({title}) => {
  return (
    <div className="border-b border-t border-rose-50/20 text-rose-50 py-4 flex items-center gap-1">
      <span className="text-2xl font-satoshi-regular">{title}</span>
    </div>
  )
}

export default LargeHeader;