import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Phone,
  UserRound,
} from "lucide-react";
import { brand, nav } from "../data/site";

/**
 * Floating translucent pill header, matching the live site: it sits over the
 * hero/page banner, the menu nests three levels deep, and the two red pill
 * buttons (Contact / hire) are desktop-only. The mobile drawer slides in from
 * the left over a light panel, as on bitsbayltd.com.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const [openSub, setOpenSub] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenGroup(null);
    setOpenSub(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5"
      >
        <nav
          className={`mx-auto flex h-[74px] max-w-[1140px] items-center justify-between gap-4 rounded-full px-4 backdrop-blur-xl transition-all duration-300 sm:px-6 ${
            scrolled
              ? "bg-ink/85 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.55)]"
              : "bg-white/20"
          }`}
        >
          <Link
            to="/"
            className="flex shrink-0 items-center"
            aria-label="Bitsbay home"
          >
            <img src={brand.logoIcon} alt="Bitsbay" className="h-11 w-auto" />
          </Link>

          {/* Desktop menu — three levels deep */}
          <ul className="hidden items-center xl:flex">
            {nav.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenGroup(item.label)}
                onMouseLeave={() => {
                  if (item.children) {
                    setOpenGroup(null);
                    setOpenSub(null);
                  }
                }}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `nav-link flex items-center gap-1.5 px-3.5 py-3 transition-colors ${
                      isActive ? "text-brand" : "text-white hover:text-brand"
                    }`
                  }
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3 w-3" />}
                </NavLink>

                <AnimatePresence>
                  {item.children && openGroup === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="absolute left-0 top-full pt-4"
                    >
                      <ul className="w-[290px] bg-white py-2 shadow-[0_20px_60px_-20px_rgba(7,11,24,0.45)] r-diag-sm">
                        {item.children.map((child) => (
                          <li
                            key={child.to}
                            className="relative"
                            onMouseEnter={() => setOpenSub(child.label)}
                            onMouseLeave={() => setOpenSub(null)}
                          >
                            <Link
                              to={child.to}
                              className="nav-link flex items-center justify-between gap-2 px-5 py-3 leading-snug text-ink-soft transition-colors hover:text-brand"
                            >
                              <span className="normal-case tracking-normal">
                                {child.label}
                              </span>
                              {child.children && (
                                <ChevronRight className="h-3.5 w-3.5 shrink-0" />
                              )}
                            </Link>

                            <AnimatePresence>
                              {child.children && openSub === child.label && (
                                <motion.ul
                                  initial={{ opacity: 0, x: -8 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -6 }}
                                  transition={{ duration: 0.2 }}
                                  className="absolute left-full top-0 ml-1 w-[290px] bg-white py-2 shadow-[0_20px_60px_-20px_rgba(7,11,24,0.45)] r-diag-sm"
                                >
                                  {child.children.map((leaf) => (
                                    <li key={leaf.to}>
                                      <Link
                                        to={leaf.to}
                                        className="nav-link block px-5 py-3 leading-snug text-ink-soft transition-colors hover:text-brand"
                                      >
                                        <span className="normal-case tracking-normal">
                                          {leaf.label}
                                        </span>
                                      </Link>
                                    </li>
                                  ))}
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          <div className="hidden shrink-0 items-center gap-2.5 xl:flex">
            <Link to="/contact" className="btn-pill">
              <Phone className="h-3.5 w-3.5" />
              Contact
            </Link>
            <a
              href={brand.upwork}
              target="_blank"
              rel="noreferrer"
              className="btn-pill"
            >
              <UserRound className="h-3.5 w-3.5" />
              hire
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="grid h-11 w-14 shrink-0 place-items-center bg-brand text-white transition-colors hover:bg-black xl:hidden"
            style={{ borderRadius: "10px 0 10px 0" }}
            aria-label="Open menu"
          >
            <Menu className="h-4 w-4" />
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer — slides in from the left, light panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-black/20 xl:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 260 }}
              className="fixed inset-y-0 left-0 z-[70] flex w-[90%] max-w-[360px] flex-col bg-[#fafafa] xl:hidden"
            >
              <div className="flex items-center justify-between px-5 py-5">
                <img
                  src={brand.logoIcon}
                  alt="Bitsbay"
                  className="h-12 w-auto"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="grid h-11 w-12 place-items-center bg-brand text-white"
                  style={{ borderRadius: "10px 0 10px 0" }}
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 pb-10">
                {nav.map((item) => (
                  <div key={item.label} className="border-b border-line/70">
                    {item.children ? (
                      <button
                        type="button"
                        onClick={() =>
                          setOpenGroup(
                            openGroup === item.label ? null : item.label,
                          )
                        }
                        className="nav-link flex-1 py-4 text-left text-ink transition-colors hover:text-brand"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        to={item.to}
                        className="nav-link flex-1 py-4 text-ink transition-colors hover:text-brand"
                      >
                        {item.label}
                      </Link>
                    )}

                    <AnimatePresence initial={false}>
                      {item.children && openGroup === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pb-3 pl-3">
                            {item.children.map((child) => (
                              <div key={child.to}>
                                <div className="flex items-center justify-between">
                                  <Link
                                    to={child.to}
                                    className="flex-1 py-2.5 text-sm text-ink-soft transition-colors hover:text-brand"
                                  >
                                    {child.label}
                                  </Link>
                                  {child.children && (
                                    <button
                                      onClick={() =>
                                        setOpenSub(
                                          openSub === child.label
                                            ? null
                                            : child.label,
                                        )
                                      }
                                      aria-label={`Toggle ${child.label}`}
                                      className="grid h-8 w-8 place-items-center text-ink/50"
                                    >
                                      <ChevronDown
                                        className={`h-3.5 w-3.5 transition-transform ${
                                          openSub === child.label
                                            ? "rotate-180"
                                            : ""
                                        }`}
                                      />
                                    </button>
                                  )}
                                </div>

                                <AnimatePresence initial={false}>
                                  {child.children &&
                                    openSub === child.label && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.25 }}
                                        className="overflow-hidden pl-4"
                                      >
                                        {child.children.map((leaf) => (
                                          <Link
                                            key={leaf.to}
                                            to={leaf.to}
                                            className="block py-2 text-sm text-body transition-colors hover:text-brand"
                                          >
                                            {leaf.label}
                                          </Link>
                                        ))}
                                      </motion.div>
                                    )}
                                </AnimatePresence>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                <Link
                  to="/contact"
                  className="btn-primary mt-7 w-full justify-center"
                >
                  Contact
                </Link>
                <a
                  href={brand.upwork}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline mt-3 w-full justify-center"
                >
                  hire
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
