import Container from '@/components/common/Container'
import { stats } from '@/data/stats'
import { useCountUp } from '@/hooks/useCountUp'

function StatItem({ stat }) {
  const { ref, value } = useCountUp(stat.value, { decimals: stat.decimals || 0 })
  const display = stat.decimals ? value.toFixed(stat.decimals) : Math.round(value)

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        {display}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-white/80 sm:text-base">{stat.label}</p>
    </div>
  )
}

export default function CustomerStats() {
  return (
    <section className="bg-accent py-14 sm:py-20">
      <Container className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatItem key={stat.id} stat={stat} />
        ))}
      </Container>
    </section>
  )
}
