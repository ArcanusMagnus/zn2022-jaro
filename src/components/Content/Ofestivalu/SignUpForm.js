import Card from "../../UI/Card";
import Button from "../../UI/Button";
import styles from "./SignUpForm.module.css";

const SignUpForm = (props) => {
  return (
    <Card className={styles.signUpForm}>
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
        <label htmlFor="email">E-mail</label>
        <div className={styles.linebreaker}></div>
        <input type="email" name="email" id="email"/>
        <div className={styles.linebreaker}></div>
        <label htmlFor="name">Jméno</label>
        <div className={styles.linebreaker}></div>
        <input type="text" name="name" id="name"/>
        <div className={styles.linebreaker}></div>
        <input type="text" name="b_d0f2beb42b80d333a7787b47c_0b3a6d5082" tabIndex="-1" value="" className={styles.botTrap}/>
        <div className={styles.linebreaker}></div>
        <Button type="submit" className={styles.submit}>Přihlásit se k odběru</Button>
      </form>
    </Card>
  );
};

export default SignUpForm;
