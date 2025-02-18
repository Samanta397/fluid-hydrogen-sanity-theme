import {Container} from "~/components/common/container";
import Button from "~/components/common/button";
import {BsSearch, BsPerson, BsCart3} from "react-icons/bs";
import React from "react";
import {NavLink} from "react-router";

type NavLinks = {
  title: string;
  url: string;
}

type HeaderProps = {
  enableCart: boolean;
  enableLogin: boolean;
  enableSearch: boolean;
  navLinks: NavLinks[];
  title: string;
}

export function Header({
                         enableCart,
                         enableLogin,
                         enableSearch,
                         navLinks,
                         title,
                       }: HeaderProps) {
  return (
    <Container>
      <header className={'grid  grid-rows-2 gap-4'}>
        <div className={'flex justify-between items-center'}>
          {enableSearch && <Button icon={<BsSearch className={'h-[20px] w-[20px]'}/>}/>}
          <h2 className={'font-[--font-heading-family] text-4xl font-light'}>{title}</h2>
          <div className={'flex'}>
            {enableLogin && <Button icon={<BsPerson className={'h-[25px] w-[25px]'}/>}/>}
            {enableCart && <Button icon={<BsCart3 className={'h-[25px] w-[25px]'}/>}/>}
          </div>
        </div>
        <nav>
          <ul className={'flex justify-center gap-4'}>
            {navLinks.map((link, index) => (
              <NavLink to={'/'} key={index}
                       className={'active:text-[var(--text-base-color)] active:border-b hover:text-[var(--text-base-color)] hover:border-b'}>
                <li>{link.title}</li>
              </NavLink>
            ))}
          </ul>
        </nav>
      </header>

    </Container>
  );
}