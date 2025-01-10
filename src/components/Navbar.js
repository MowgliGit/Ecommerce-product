import React, { useState, useEffect } from "react";
function Navbar({ cartCount, toggleCartVisibility }) {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);
  const [open, setOpen] = useState(false);
  const updateOpen = () => {
    setOpen(!open);
  };
  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const menu = [
    {
      id: 1,
      title: "Collections",
      link: "#collections",
    },
    {
      id: 2,
      title: "Men",
      link: "#men",
    },
    {
      id: 3,
      title: "Women",
      link: "#women",
    },
    {
      id: 4,
      title: "About",
      link: "#about",
    },
    {
      id: 5,
      title: "Contact",
      link: "#contact",
    },
  ];
  return (
    <>
      <header className="header">
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.svg`}
          alt="logo"
          className="logo"
        />
        <div className="navigation">
          {!isDesktop && (
            <button className="open" onClick={updateOpen}>
              {!open ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 6.00092H21M3 12.0009H21M3 18.0009H21"
                    stroke="currentColor"
                    stroke-width="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <defs>
                    <clipPath id="clip0_429_11066">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.000915527)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                    fill="currentColor"
                  />
                </svg>
              )}
            </button>
          )}
          <ul
            className={
              isDesktop
                ? "list"
                : `${!open ? `mobile-list` : `mobile-list activated`}`
            }
          >
            {!isDesktop && (
              <button className="close" onClick={updateOpen}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            )}
            {menu.map((item) => (
              <li className="item" key={item.id}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="userBar">
          <div className="cart" onClick={toggleCartVisibility}>
            <img
              src={`${process.env.PUBLIC_URL}/images/icon-cart.svg`}
              className="icon-cart"
              alt="icon cart"
            />
            {cartCount > 0 && <span className="cartCount">{cartCount}</span>}
          </div>
          <img src="./images/image-avatar.png" className="user" alt="avatar" />
        </div>
      </header>
    </>
  );
}
export default Navbar;
