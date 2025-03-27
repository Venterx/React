import { NavLink } from "react-router-dom"
import logo from "../../../src/assets/avtotorgLogo 1.svg"
import BlueButton from "../BlueButton/BlueButton.jsx"
import styles from "./Header.module.css"

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.header__inner}>
				<div className={styles.nav}>
					<NavLink className={`${styles.nav__item} nav__item`} to="/">О нас</NavLink>
					<NavLink className={`${styles.nav__item} nav__item`} to="/catalog">Каталог</NavLink>
					<NavLink className={`${styles.nav__item} nav__item`} to="/info">Где нас найти</NavLink>
				</div>
				<div className="logo">
					<img src={logo} alt="logo" />
				</div>
				<div className={styles.buttons}>
					<BlueButton value="Регистрация" type="btnBlack"></BlueButton>
					<BlueButton value="Вход" type="btnBlue"></BlueButton>
				</div>
			</div>
		</header>
	)
}
