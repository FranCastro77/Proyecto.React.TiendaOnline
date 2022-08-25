import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (

    <><header className="NavBar">
      <NavBar />
    </header>
    
    <section className="Productos">

    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

        <h2>Quienes somos</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ligula malesuada, fringilla nulla et, pellentesque mi. Vivamus ultrices, quam nec egestas dictum, est ex porta risus, eget sodales ex massa consequat ante. Curabitur eget dolor eget diam volutpat commodo laoreet eu enim. Donec sed erat nibh. Morbi sit amet sapien at odio vulputate pellentesque. Praesent tincidunt erat nunc. Donec ac porttitor orci. Sed sit amet ligula sit amet orci interdum sodales. Donec at enim sit amet sapien suscipit mollis. Phasellus id lacus sed metus scelerisque fringilla. Donec vel arcu viverra, pretium nunc a, aliquet eros. Quisque congue a dui quis porta.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ligula malesuada, fringilla nulla et, pellentesque mi. Vivamus ultrices, quam nec egestas dictum, est ex porta risus, eget sodales ex massa consequat ante. Curabitur eget dolor eget diam volutpat commodo laoreet eu enim. Donec sed erat nibh. Morbi sit amet sapien at odio vulputate pellentesque. Praesent tincidunt erat nunc. Donec ac porttitor orci. Sed sit amet ligula sit amet orci interdum sodales. Donec at enim sit amet sapien suscipit mollis. Phasellus id lacus sed metus scelerisque fringilla. Donec vel arcu viverra, pretium nunc a, aliquet eros. Quisque congue a dui quis porta.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ligula malesuada, fringilla nulla et, pellentesque mi. Vivamus ultrices, quam nec egestas dictum, est ex porta risus, eget sodales ex massa consequat ante. Curabitur eget dolor eget diam volutpat commodo laoreet eu enim. Donec sed erat nibh. Morbi sit amet sapien at odio vulputate pellentesque. Praesent tincidunt erat nunc. Donec ac porttitor orci. Sed sit amet ligula sit amet orci interdum sodales. Donec at enim sit amet sapien suscipit mollis. Phasellus id lacus sed metus scelerisque fringilla. Donec vel arcu viverra, pretium nunc a, aliquet eros. Quisque congue a dui quis porta.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ligula malesuada, fringilla nulla et, pellentesque mi. Vivamus ultrices, quam nec egestas dictum, est ex porta risus, eget sodales ex massa consequat ante. Curabitur eget dolor eget diam volutpat commodo laoreet eu enim. Donec sed erat nibh. Morbi sit amet sapien at odio vulputate pellentesque. Praesent tincidunt erat nunc. Donec ac porttitor orci. Sed sit amet ligula sit amet orci interdum sodales. Donec at enim sit amet sapien suscipit mollis. Phasellus id lacus sed metus scelerisque fringilla. Donec vel arcu viverra, pretium nunc a, aliquet eros. Quisque congue a dui quis porta.
          </p>

        <h2>Como Contactarnos</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ligula malesuada, fringilla nulla et, pellentesque mi. Vivamus ultrices, quam nec egestas dictum, est ex porta risus, eget sodales ex massa consequat ante. Curabitur eget dolor eget diam volutpat commodo laoreet eu enim. Donec sed erat nibh. Morbi sit amet sapien at odio vulputate pellentesque. Praesent tincidunt erat nunc. Donec ac porttitor orci. Sed sit amet ligula sit amet orci interdum sodales. Donec at enim sit amet sapien suscipit mollis. Phasellus id lacus sed metus scelerisque fringilla. Donec vel arcu viverra, pretium nunc a, aliquet eros. Quisque congue a dui quis porta.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ligula malesuada, fringilla nulla et, pellentesque mi. Vivamus ultrices, quam nec egestas dictum, est ex porta risus, eget sodales ex massa consequat ante. Curabitur eget dolor eget diam volutpat commodo laoreet eu enim. Donec sed erat nibh. Morbi sit amet sapien at odio vulputate pellentesque. Praesent tincidunt erat nunc. Donec ac porttitor orci. Sed sit amet ligula sit amet orci interdum sodales. Donec at enim sit amet sapien suscipit mollis. Phasellus id lacus sed metus scelerisque fringilla. Donec vel arcu viverra, pretium nunc a, aliquet eros. Quisque congue a dui quis porta.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ligula malesuada, fringilla nulla et, pellentesque mi. Vivamus ultrices, quam nec egestas dictum, est ex porta risus, eget sodales ex massa consequat ante. Curabitur eget dolor eget diam volutpat commodo laoreet eu enim. Donec sed erat nibh. Morbi sit amet sapien at odio vulputate pellentesque. Praesent tincidunt erat nunc. Donec ac porttitor orci. Sed sit amet ligula sit amet orci interdum sodales. Donec at enim sit amet sapien suscipit mollis. Phasellus id lacus sed metus scelerisque fringilla. Donec vel arcu viverra, pretium nunc a, aliquet eros. Quisque congue a dui quis porta.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ligula malesuada, fringilla nulla et, pellentesque mi. Vivamus ultrices, quam nec egestas dictum, est ex porta risus, eget sodales ex massa consequat ante. Curabitur eget dolor eget diam volutpat commodo laoreet eu enim. Donec sed erat nibh. Morbi sit amet sapien at odio vulputate pellentesque. Praesent tincidunt erat nunc. Donec ac porttitor orci. Sed sit amet ligula sit amet orci interdum sodales. Donec at enim sit amet sapien suscipit mollis. Phasellus id lacus sed metus scelerisque fringilla. Donec vel arcu viverra, pretium nunc a, aliquet eros. Quisque congue a dui quis porta.
          </p>

        
        <a name="catalogo" id="#catalogo"></a>
        <h2>Catalogo de productos</h2>
          
        <ItemListContainer product='100-A' description='esmaltes No tóxico para uñas  Efecto Gel  - COLOR ELLE ' cantidad='1000'  />
        <ItemListContainer product='200-A' description='esmaltes No tóxico para uñas  Efecto Gel  - COLOR ADDISON' cantidad='350'  />
        <ItemListContainer product='400-A' description='esmaltes No tóxico para uñas  Efecto Gel  - COLOR EMMA ' cantidad='800'  />
      </section></>
    
    
);
}

export default App;
