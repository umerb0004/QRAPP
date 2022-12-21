import Sidebar from '../Sidebar'

export const Layout = () => {
  return (
    <div className = 'h-full flex flex-row justify-start'>
      <Sidebar />
      <div className = 'h-screen flex-1 p-4 bg-slate-50'>RAPP APP</div>
    </div>
  )
}
