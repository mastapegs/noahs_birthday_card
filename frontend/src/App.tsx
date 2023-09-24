import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainContainer}>
          <h1>Hello Noah!</h1>
          <p>I love you so much!</p>
          <p>
            I wanted to let you know that you'll be getting Robux every single
            month for an entire year as part of your birthday present.
          </p>
          <p>
            Specifically, you'll be getting 2,200 Robux every month for 12
            months!
          </p>
          <p>That's 2,200 x 12 = 26,400 Robux!!!</p>
          <p>Don't spend it all in one obby!</p>
          <p>Love,</p>
          <p>Mommy and Daddy</p>
          <img src="./src/assets/noah.png" />
        </div>
      </div>
    </>
  );
}

export default App;
