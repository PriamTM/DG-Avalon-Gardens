import { CATEGORIES, products } from '../../data/products'
import ProductCard from '../../components/ProductCard/ProductCard'
import SectionHero from '../../components/Hero/SectionHero';
import { Link } from 'react-router-dom'
import styles from './Menu.module.css'
import menuImage from '../../assets/menu-image.webp'

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
          <div className="flex justify-between">
            <div>
              <p>Still on the fence?</p>
              <Link to="/branhorn">Check out the multiple benefits of Cannabis!</Link>
            </div>
            <div>
              <p>Call the Avalon Gardens social media manager for special offers!</p>
              <Link>(303) 555-4139</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Menu
