import Button from "../../UI/Button";
import styles from "./SignUpForm.module.css";

const SignUpForm = (props) => {
  return (
    <div className={styles.signUpForm}>
      <form
        action="https://zizkovskanoc.us6.list-manage.com/subscribe/post?u=d0f2beb42b80d333a7787b47c&amp;id=0b3a6d5082"
        method="post"
        target="_blank"
        name="mc-embedded-subscribe-form"
        noValidate
      >
        <h3>Psst! Chceš novinky?</h3>
        <p>
          Buďte první, kdo se dozví o nových jménech v lineupu, ale i
          celoročních aktivitách Žižkovské noci. Náš newsletter je cool, a
          přestože neznáme hranice, posíláme ho uvážlivě.
        </p>
        <input type="text" name="name" id="name" defaultValue="Jméno"/>
        <input type="email" name="email" id="email" defaultValue="E-mail"/>
        <input type="text" name="b_d0f2beb42b80d333a7787b47c_0b3a6d5082" tabIndex="-1" defaultValue="" className={styles.botTrap}/>
        <Button type="submit" className={styles.submit}>Přihlásit se k odběru</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
