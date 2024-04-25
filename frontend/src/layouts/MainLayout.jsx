import { SearchHeader } from "../features/header/SearchHeader";

export function MainLayout({ children }) {
  return (
    <section>
      <header>
        <SearchHeader />
      </header>
      <main>{children}</main>
    </section>
  )
}
