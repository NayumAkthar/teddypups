import {Link} from 'react-router-dom'
import {ArrowUpRight} from 'lucide-react'

const fallbackImage = 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=85'

export default function PuppyCard({puppy}) {
  const handleImageError = (event) => {
    const image = event.currentTarget
    if (!image.dataset.fallbackApplied) {
      image.dataset.fallbackApplied = 'true'
      image.src = fallbackImage
    }
  }

  return (
    <article className="puppy-card">
      <Link to={`/puppies/${puppy.id}`} className="puppy-photo">
        <img
          src={puppy.image}
          alt={`${puppy.name} puppy`}
          loading="lazy"
          onError={handleImageError}
        />
        <span className="available">Available</span>
        <span className="photo-arrow"><ArrowUpRight size={18}/></span>
      </Link>
      <div className="puppy-info">
        <div>
          <h3>{puppy.name}</h3>
          <p>{puppy.breed} · {puppy.gender} · {puppy.age}</p>
        </div>
        <Link to={`/puppies/${puppy.id}`} className="text-link">Meet {puppy.name} ↗</Link>
      </div>
    </article>
  )
}
