//TO DO
const Stats = () => {
  return (
    <div className="lg:flex grid gap-8">
      <Stat title={"3+ years"} text={"Editing experience"} />
      <Stat title={"3+ years"} text={"Editing experience"} />
      <Stat title={"3+ years"} text={"Editing experience"} />
    </div>
  )
}
  
const Stat = ({ title, text }) => {
  return (
    <div>
      <div className="bg-primary w-64 h-24 rounded-xl text-center grid place-items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl">{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>

  )
}
export default Stats