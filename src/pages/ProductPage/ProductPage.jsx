import { Link, useParams } from "react-router-dom"
import BlueBtn from "../../components/BlueButton/BlueButton"
import { products } from "../../products"
import styles from "./ProductPage.module.css"

export default function ProductPage() {
	const { id } = useParams()

	const product = products.find((product) => product.id == id)
	return (
		<>
			<div className={styles.product} style={{ marginTop: "50px" }}>
				<Link to="../catalog">
					<BlueBtn value="На главную" type="btnGrayBig" />
				</Link>
				<div className="flex" style={{ display: "flex", marginTop: "26px" }}>
					<div className="product__img" >
						<img src={`/${product.imagePath}`} alt="#"  />
					</div>
					<div className={styles.product__about}>
						<h2 className="product__name" style={{ marginBottom: "30px" }}>
							{product.title}
						</h2>
						<p style={{ marginBottom: "50px" }}>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
							at, magnam fugit enim sint eveniet, optio odio temporibus
							reiciendis quis unde? Et at eligendi sed eveniet. Architecto eum
							in aperiam quidem tempore officia porro natus? Aspernatur sed
							tempora, quaerat expedita mollitia id ex et voluptatum repellendus
							optio. Magni, odit laboriosam provident consequuntur velit ab
							cumque nihil alias eligendi ex nemo fugiat dolores, maxime quod
							labore incidunt dolorum ea nesciunt, architecto iusto quos
							consectetur ipsam obcaecati aliquid. Dicta dolore qui esse, ab
							error libero dolorem provident fugiat voluptates at ratione id,
							sunt ea. Odit aut cupiditate expedita amet ratione blanditiis
							consectetur?
						</p>
						<div
							className="flex"
							style={{ display: "flex", justifyContent: "space-between" }}
						>
							<h3 className="product__price" style={{color:"blue"}}>{product.price}P</h3>
							<BlueBtn value="Добавить в корзину" type="btnBlueBig" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
