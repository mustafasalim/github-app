interface infoBoxIntrf {
  title: string
  value: any
}
function InfoBox({ title, value }: infoBoxIntrf) {
  return (
    <div className="bg-[#111729] rounded-xl w-auto flex items-center justify-evenly p-1 ">
      <div className="text-[#364153] font-medium p-3">{title}</div>
      <div className="w-[0.1px] h-10 bg-[#4A5567]"></div>
      <div className="text-[#CDD5E0] p-3">{value}</div>
    </div>
  )
}

export default InfoBox
