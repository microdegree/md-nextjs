import React from "react";
import Link from "next/link";
import errorStyles from "../styles/404.module.css";

const errorPage = () => {
  return (
    <div className={errorStyles.container}>
      <div className={errorStyles.parent}>
        <h3>Something went wrong..!!</h3>
        <p>
          Please go back{" "}
          <Link href='/'>
            <a>HomePage</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default errorPage;
