
import styles from './ItemListContainer.module.css'


const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h1 className={styles.title}>
        {greeting}
      </h1>
    </>
  )
}

export default ItemListContainer
