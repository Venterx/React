import img from "../../../src/assets/Banner.png"
import styles from "./Banner.module.css"
import BlueButton from "../BlueButton/BlueButton"
export default function Banner() {
	const banner = {
		height: "100vh",
		backgroundImage: `url(${img})`,
		backgroundSize: "100%",
		backgroundRepeat: "no-repeat",
	}

	return (
		<div style={banner}>
			<div className={styles.banner__inner}>
				{/* <div className={styles.bannerBtn}> */}
				<BlueButton value="О компании АвтоТорг" type="btnGray" />
			</div>
		</div>
	)
}
