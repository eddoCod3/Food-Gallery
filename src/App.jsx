import "./App.css";
import DishCard from "./dish/dishCard";

function Navbar(){
  return(
    <>
      <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div> 
          <div className="flex-1 px-2 mx-2">Comida Mx</div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              <li><a>Navbar Item 1</a></li>
              <li><a>Navbar Item 2</a></li>
            </ul>
          </div>
        </div></div> 
      <div className="drawer-side">
        <label for="my-drawer-3" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 h-full bg-base-200">

          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
          
        </ul>
        
      </div>
    </div>
</>
  )
}

function Footer(){
  return( 
  <footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <div>
    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
  </div>
</footer>
  )
}
function App() {
  return (
    <><Navbar/>
      <DishCard/>
      <Footer/>
    </>
  );
}

export default App;
