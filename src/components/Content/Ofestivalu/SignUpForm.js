import Button from "../../UI/Button";
import styles from "./SignUpForm.module.css";
import useInput from "../../../hooks/use-input";

const SignUpForm = ({ status, message, onSend }) => {
  const {
    value: nameInputValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    inputBlurHandler: nameBlurHandler,
    valueChangeHandler: nameChangeHandler,
    reset: nameReset,
  } = useInput((value) => {
    return value !== "" && value.trim().length >= 3;
  });

  const {
    value: emailInputValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    reset: emailReset,
  } = useInput((value) => {
    return (
      value !== "" &&
      value.trim().length >= 6 &&
      value.includes("@") &&
      value.includes(".")
    );
  });

  const formIsValid = nameIsValid && emailIsValid;

  const submitHandler = async (event) => {
    event.preventDefault();
    onSend({
      MERGE0: emailInputValue,
      MERGE1: nameInputValue,
    });

    nameReset();
    emailReset();
  };

  return (
    <form onSubmit={submitHandler}>
      <h3>Psst! Chceš novinky?</h3>
      {!status && (
        <p>
          Buďte první, kdo se dozví o nových jménech v lineupu, ale i
          celoročních aktivitách Žižkovské noci. Náš newsletter je cool, a
          přestože neznáme hranice, posíláme ho uvážlivě.
        </p>
      )}
      {status === "sending" && <p className={styles.status}>Odesílám...</p>}
      {status === "error" && <p className={styles.status + ' ' + styles.error}>Chyba, zkuste to, prosím, později...</p>}
      {status === "success" && <p className={styles.status}>Přihlášení k odběru proběhlo úspěšně, děkujeme!</p>}
      {nameHasError && <p className={styles.error}>Jméno musí mít alespoň 3 znaky</p>}
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Jméno"
        onChange={nameChangeHandler}
        onBlur={nameBlurHandler}
        value={nameInputValue}
        className={nameHasError ? styles.invalid : ""}
        />
        {emailHasError && <p className={styles.error}>Neplatná e-mailová adresa</p>}
      <input
        type="email"
        name="email"
        id="email"
        placeholder="E-mail"
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        value={emailInputValue}
        className={emailHasError ? styles.invalid : ""}
      />
      <input
        type="text"
        name="b_d0f2beb42b80d333a7787b47c_0b3a6d5082"
        tabIndex="-1"
        defaultValue=""
        className={styles.botTrap}
      />
      <Button
        type="submit"
        className={styles.submit + (!formIsValid ? " " + styles.invalid: "")}
        disabled={!formIsValid}
      >
        Přihlásit se k odběru
      </Button>
    </form>
  );
};

export default SignUpForm;
