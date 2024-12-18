
function App() {

  return (
    <div>
       <BrowserRouter>
       <Routes>
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Signin" element={<Signin/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/SendMoney" element={<SendMoney/>} />
       </Routes>
       </BrowserRouter>

    </div>
  )
}

export default App
