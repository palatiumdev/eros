//TO DO
const Stats = ({ stats }) => {
  return (
    <div className="lg:flex grid place-content-center gap-16 w-full">
      {stats.map((stat, i) => {
        return <Stat title={stat.title} text={stat.text} cards={stats.length} key={i} />
      })}
    </div>
  )
}

const Stat = ({ title, text, cards }) => {
  return (
    <div className="w-full">
      <div className="bg-primary w-full h-fit p-5 rounded-xl text-center grid place-items-center text-yellow">
        <div>
          <h1 className="text-4xl sm:text-5xl">{title}</h1>
          <p className="text-3xl">{text}</p>
        </div>
      </div>
    </div>

  )
}
export default Stats