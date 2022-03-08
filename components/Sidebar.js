import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Sidebar.module.css";
import { useRouter } from "next/router";

const Sidebar = ({ categories }) => {
  const router = useRouter();
  const { id } = router.query;
  const [active, setActive] = useState(id);

  return (
    <div className={styles.sidebar__container}>
      {categories.map((el) => (
        <Link key={el.ID} href={`/categories/${el.ID}`} passHref>
          <div className={styles.sidebar__category}>
            <p
              className={active === el.ID && styles.active}
              onClick={() => setActive(el.ID)}
            >
              {el.Name}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
