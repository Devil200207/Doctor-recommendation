import {Suspense, lazy,memo} from 'react';
import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom';
const Doctor = lazy(() => import('./components/Doctor'));
const Patient = lazy(() => import('./components/Patient'));

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Suspense fallback={"loading...."}><Patient/></Suspense>}/>
          <Route path='/addDoctor' element={ <Suspense fallback={"loading...."}><Doctor/></Suspense>}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
