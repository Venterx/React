import BlueButton from "../../../../src/components/BlueButton/BlueButton"
import Item from "../../CatalogPage/Item/Item"
import styles from "./Catalog.module.css"
import { products } from "../../../products"

export default function Catalog() {
	return (
		<div className={styles.catalog}>
			<h2 className={styles.catalog__title}>Каталог товаров</h2>
			<div className={styles.catalog__line}>
				<p>Категории:</p>
				<BlueButton value="Все товары" type="btnBlueSmall" />
				<BlueButton value="Шины/колеса" type="btnWhite" />
				<BlueButton value="Масла" type="btnWhite" />
				<BlueButton value="Ароматизаторы" type="btnWhite" />
			</div>
			<div className={styles.wrap}>
				{products.map((product) => (
					<Item
						id={product.id}
						title={product.title}
						price={product.price}
						imagePath={product.imagePath}
					/>
				))}
			</div>
			<div className={styles.catalog__footer}>
				<BlueButton value="Загрузить еще товары" type="btnGrayBig" />
			</div>
		</div>
	)
}
