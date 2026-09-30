import styles from './ProductCard.module.css'

function ProductCard({ product }) {
  const strainBadge = (strain) => {
    if (Array.isArray(strain)) {
      return (
        <div className="flex gap-1">
          {strain.includes('Sativa') && <span className={`${styles.badge} text-accent bg-[rgba(255, 47, 208, 0.15)] border-solid border border-[rgba(255, 47, 208, 0.4)]`}>Sativa</span>}
          {strain.includes('Indica') && <span className={`${styles.badge} text-[#3399ff] bg-[rgba(51, 153, 255, 0.15)] border-solid border boder-[rgba(51, 153, 255, 0.15)]`}>Indica</span>}
        </div>
      )
    } else if (strain === 'Sativa') {
      return (
        <span className={`${styles.badge} text-accent bg-[rgba(255, 47, 208, 0.15)] border-solid border border-[rgba(255, 47, 208, 0.4)]`}>{strain}</span>
      )
    } else if (strain === 'Indica') {
      return (
        <span className={`${styles.badge} text-[#3399ff] bg-[rgba(51, 153, 255, 0.15)] border-solid border boder-[rgba(51, 153, 255, 0.15)]`}>{strain}</span>
      )
    }
  }
  return (
    <article className={styles.card}>
      {strainBadge(product.strainType)}
      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.description}>{product.description}</p>
      <div className={styles.meta}>
        <div className={styles.information}>
          <span className={styles.thc}>THC {product.thcPercent}%</span>
          <span className={styles.thc}>THCA {product.thcaPercent}%</span>
        </div>
        <span className={styles.price}>
          ${product.price.toFixed(2)} <span className={styles.unit}>/ {product.unit}</span>
        </span>
      </div>
      <button type="button" className="btn btn-outline" disabled>
        In-Store Purchase Only
      </button>
    </article>
  )
}

export default ProductCard
