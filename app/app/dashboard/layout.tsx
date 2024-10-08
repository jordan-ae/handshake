import Sidebar from "./components/sidebar/sidebar"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="flex">
        <Sidebar />
        <main className="flex-1"> {children}</main>
      </section>
    )
  }