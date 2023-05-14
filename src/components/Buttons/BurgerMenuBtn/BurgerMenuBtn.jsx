import { RxTextAlignJustify,  RxCross1 } from 'react-icons/rx';
import css from "./BurgerMenuBtn.module.css"

const BurgerMenuBtn = ({menuOpen, setMenuOpen}) => {
  return <button
          className={css.btn}
          type="button"
          onClick={() => {
            setMenuOpen(prev => !prev);
          }}
        >
          {menuOpen && <RxCross1 className={css.burger} />}
          {!menuOpen && <RxTextAlignJustify className={css.burger} />}
        </button>
}

export default BurgerMenuBtn