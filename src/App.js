
// import logo from './logo.svg';
//  import './App.css';

// function App() {
//  return (

//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.

//         </p>   
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>

//       </header>

//     </div>
//   );

//  }
// export default App;
//login form 
// import './App.css';
// function App() {
//     return (
//       <div  className="container">
//         <div className="text">
//         <h1>Login Form</h1>
//     <input className="inp1" type="text"   placeholder="Enter User Name"/>
//     <input className="inp2" type="password"placeholder="Enter Password"/>
//             <p>orget Password ?</p>
//             <button>Login</button>
//            <p>Not A Member ?<span>Sign Up</span></p> 
//         </div>
//     </div>
//       );
//  }
//  export default App;
//registration form
//       import './App.css';
//      function App()
// {
//   return(
//     <div className='main'>
//       <div className='register'>
//       <h2>Registration Form</h2>
//       <form>
//       <lable class="g1">First Name :</lable>
//       <br></br>
//       <input class="text" type="text" placeholder='Enter Your First Name'/>
//       <br></br>      <br></br>
//       <lable class="g1">Last Name :</lable>
//       <br></br>
//       <input  class="text" type='text' placeholder='Enter Your Last Name'/>
//       <br></br>      <br></br>
//       <lable class="g1">Your Age :</lable>
//       <br></br>
//       <input  class="text" type='number'placeholder='How Old Are You'/>
//       <br></br>      <br></br>
//       <label class="g1">Email :</label>
//       <br></br>
//       <input  class="text"type='email'placeholder='Enter Your Email id'/>
//       <br></br><br></br>
//       <lable class="g1">Gender :</lable>
//       <br/>
//       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//        <input type='radio' name='gen'/>&nbsp;&nbsp;Female
//        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//       <input type='radio' name='gen'/>&nbsp;&nbsp;male
//       <br></br><br></br>
//       <lable class="g1">known Language :</lable>
//       <br></br>
//       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//       &nbsp;&nbsp;
//       <input type='checkbox' name="lang"/>&nbsp;&nbsp;Hindi
//       &nbsp;&nbsp;&nbsp;&nbsp;
//       <input type='checkbox' name='lang'/>&nbsp;&nbsp;English
//       &nbsp;&nbsp;&nbsp;&nbsp;
//       <input type='checkbox' name='lang'/>&nbsp;&nbsp;Urdu
//       <br></br><br></br>
//       <input  className="sub"type='submit' value='submit'/>
//       </form>
//       </div>
//     </div>
//   );
// }
// export default App;

import './App.css';
function App() {
  return (
  <div>
    
  <section>
      <header>
        <div className='circle'></div>
        <div className='circles'></div>
        <a href='#' class='logo'>Shop<span>ifty</span></a>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Products</a></li>
          <li><a href='#'>News</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
        <p>Sign Up</p>
      </header>
      <div className='texts'>
        <h1>Online <span>Shop</span> </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Velit maxime aliquid recusandae odit nostrum esse officiis
          blanditiis asperiores, distinctio impedit possimus, autem
          sapiente sit ullam et voluptas rem laboriosam consectetur ad
          voluptates! In, sequi repellat? Sunt nam asperiores eum similique
          consectetur laboriosam eveniet. Inventore, quia vitae? Asperiores
          ,eaque quis accusantium recusandae fuga rem, quaerat ipsa consequatu
          doloribus corporis at ad officiis enim culpa fugit laborum sunt
          facere amet.
        </p>
      </div>
      <div className='background_image'>
        <img src={require('../src/image/bg1.png')}/>
      </div>
      <div className="btn">
        <p className='read'>Read More</p>
        <p>Shop Now</p>
      </div>
  
    </section>
    
<div className='about'>
<div className="box">
  <div className="card">
  <img src={require('../src/image/Computer.png')}/>
  </div>
  <div className="card">
  <img src={require('../src/image/gift.png')}/>
  </div>
  <div className="card">
  <img src={require('../src/image/t-shirt.png')}/>
  </div>
  <div className="card">
  <img src={require('../src/image/food.png')}/>
  </div>
  <div className="card">
  <img src={require('../src/image/mobile.png')}/>
  </div>
</div>
<hr></hr>
<div className="Clothes">

  <h1>Products</h1>
  <p>---Clothes----</p>
  <div className="clothes_box">
  <div className='clothes_card'>
  <img src={require('../src/image/jerci1.png')}/>
  <h1>Clothes</h1>
  <p>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

  </p>
  <a href="#"className='btn'>Read More</a>
  </div>

  <div className='clothes_card'>
  <img src={require('../src/image/jerci2.png')}/>
  <h1>Clothes</h1>
  <p>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
  </p>
  <a href="#"className='btn'>Read More</a>

  </div>

  <div className='clothes_card'>
  <img src={require('../src/image/jerci3.png')}/>
  <h1>Clothes</h1>
  <p>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
  </p>
  <a href="#"className='btn'>Read More</a>

  </div>

  <div className='clothes_card'>
  <img src={require('../src/image/jerci4.png')}/>
  <h1>Clothes</h1>
  <p>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
  </p>
  <a href="#"className='btn'>Read More</a>

  </div>
  </div>


</div>
<div className='Food'>

  <p>----Food----</p>
  <div className='food_box'>

    <div className='food_card'>

    <img src={require('../src/image/Burger.png')}/>
    <h1>Food</h1>
    <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

    </p>
    <a href='#' className='btn'>Read More</a>
    </div>

    <div className='food_card'>

<img src={require('../src/image/Hotdog.png')}/>
<h1>Food</h1>
<p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

</p>
<a href='#' className='btn'>Read More</a>
</div>

<div className='food_card'>

    <img src={require('../src/image/pizza.png')}/>
    <h1>Food</h1>
    <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

    </p>
    <a href='#' className='btn'>Read More</a>
    </div>

    <div className='food_card'>
<img src={require('../src/image/sandvich.png')}/>
<h1>Food</h1>
<p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
</p>
<a href='#' className='btn'>Read More</a>

</div>



  </div>

</div>
</div>





</div>

);
}
export default App;