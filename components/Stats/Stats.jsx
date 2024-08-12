//TO DO
const Stats = ({stats}) => {
  return (
    <div className="lg:flex grid gap-8">
      {stats.map((stat, i) => {
        return <Stat title={stat.title} text={stat.text} />
      })}
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