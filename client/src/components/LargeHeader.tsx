interface LargeHeaderProps {
  title: string;
}

const LargeHeader = ({ title }: LargeHeaderProps) => {
  return (
    <div className="border-b border-t border-rose-50/20 text-rose-50 py-4 flex items-center gap-1">
      <h2 className="text-2xl font-satoshi-regular">{title}</h2>
    </div>
  );
};

export default LargeHeader;
