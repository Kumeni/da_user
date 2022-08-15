import React from 'react';
import style from "./Header.module.css";
import Link from "next/link";
import {useRouter} from 'next/router'

function Header() {

  const router = useRouter();

  return (
    <div className={style.headerContainer}>
      <div className={style.header/*router.pathname=="/"?style.header:style.header2*/}>
          <span>
            {
              router.pathname!=="/" &&
                <button className={style.icon}><img src="/icons/back.png" alt="back icon" /></button>
            }
            <Link href="/">
              <div className={style.logo}>
                  <img src="/icons/dkutAssociatesSmall.png" />
                  <h1>Dkut Associates</h1>
              </div>
            </Link>
          </span>

          <div className={style.icons}>
            <div className={style.icon}>
              <img src="/icons/search.png" alt="search icon" />
            </div>
            <div className={style.icon + " " + style.icon_user}>
              <img src="/icons/user.png" alt="user icon" />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Header