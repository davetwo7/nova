const BasicHeader = ({title}) => {
  return (
    <div className="border-b border-t border-rose-50/20 text-rose-50 py-4 flex items-center gap-1">
      <span className="text-xl font-satoshi-medium">{title}</span>
    </div>
  )
}

export default BasicHeader;