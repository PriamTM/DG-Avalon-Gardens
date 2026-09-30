import { CATEGORIES, products } from '../../data/products'
import ProductCard from '../../components/ProductCard/ProductCard'
import SectionHero from '../../components/Hero/SectionHero';
import { Link } from 'react-router-dom'
import styles from './Menu.module.css'
import menuImage from '../../assets/menu-image.jpg'

function Menu() {
  return (
    <>
      <SectionHero image={menuImage} alt="blurred image of cannabis products" title="Menu" />
      <div className={`container ${styles.page}`}>
        {CATEGORIES.map((category) => {
          const items = products.filter((product) => product.category === category.key)
          return (
            <section key={category.key} className={styles.section}>
              <h2>{category.label}</h2>
              <div className={styles.grid}>
                {items.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          )
        })}
        <section>
          <p>Still on the fence?</p>
          <Link to="/branhorn">Check out the multiple benefits of Cannabis!</Link>
        </section>
      </div>
    </>
  )
}

export default Menu
