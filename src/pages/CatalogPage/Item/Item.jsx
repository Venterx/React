import BlueButton from "../../../components/BlueButton/BlueButton"
import styles from "./Item.module.css"
import { Link } from "react-router-dom"

export default function Item({id, title, price, imagePath}) {
	return (
		<>
			<div className={styles.catalog}>
				<div >
					<img src={imagePath} alt="item" style={{width:"420px", height:"344px"}}/>
				</div>
				<div className={styles.content}>
					<p className={styles.text}>
						<h2>{title}</h2>
                        Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"
					</p>
					<div className={styles.footer}>
						<h3 className={styles.price}>{price} ₽</h3>

						
						<Link to={`/catalog/${id}`}>
                            <BlueButton value="Добавить в корзину" type="btnBlueBig" />
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}
