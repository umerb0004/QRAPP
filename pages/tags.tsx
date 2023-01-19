import PageTitle from '@components/pageTitle'
import MenuSidebar from '../components/menuSidebar'
import SearchBar from '../components/SearchBar/SearchBar'


const Tags = () => (
  <main className='h-full flex flex-row justify-start'>
    <MenuSidebar />
    <div className='h-screen flex-1 p-4 bg-slate-50'>
      <section className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <div className='text-top'>
            <PageTitle title='Tags' />
          </div>
        </div>
        <div className='flex flex-col w-full mt-4'>
          <SearchBar/>
        </div>
      </section>
    </div>
  </main>
)
  
export default Tags
