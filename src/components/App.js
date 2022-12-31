import React from 'react';
import Header from './ui/Header';
import Footer from './ui/Footer';
import LandingPage from './LandingPage';
import Services from './Services';
import CustomSoftware from './CustomSoftware';
import MobileApps from './MobileApps';
import Websites from './Websites';
import Revolution from './Revolution';
import About from './About';
import Estimate from './Estimate';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Contact from './Contact';

function App() {

  const [value, setValue] = React.useState(0);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
   <ThemeProvider theme={theme}>
    <BrowserRouter>
     <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/> 
     <Switch>
      <Route exact path='/' render={(props)=><LandingPage {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}  />}/>
      <Route exact path='/services' render={(props)=><Services {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}  />}/>
      <Route exact path='/customsoftware' render={(props)=><CustomSoftware {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}  />}/>
      <Route exact path='/mobileapps' render={(props)=><MobileApps {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}  />}/>
      <Route exact path='/websites' render={(props)=><Websites {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}  />}/>
      <Route exact path='/revolution' render={(props)=><Revolution {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}  />}/>
      <Route exact path='/about' render={(props)=><About {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}  />}/>
      <Route exact path='/contact' render={(props)=><Contact {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}  />}/>
      <Route exact path='/estimate' render={(props)=><Estimate {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}  />}/>
     </Switch>
     <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
    </BrowserRouter> 
     </ThemeProvider>
    
  );
}

export default App;
