const StatusBox = ({
  count,
  label,
  color,
}: {
  count: number | string;
  label: string;
  color: string;
}) => {
  return (
    <div>
      <div className="flex justify-start items-center gap-1.5">
        <div
          className="w-[22px] h-[22px] rounded-lg"
          style={{ backgroundColor: color }}
        />
        <span className="text-[32px] text-[#333333] font-semibold">
          {count}
        </span>
      </div>
      <span className="font-semibold text-[#828282] text-xs block">
        {label}
      </span>
    </div>
  );
};

export default StatusBox;
