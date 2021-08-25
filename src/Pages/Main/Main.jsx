import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import './Main.scss';
import { Container } from '../../Components/Container/styled';
import ReadAll from '../ReadAll/ReadAll';
import Create from '../Create/Create';
import DeleteAll from '../DeleteAll/DeleteAll';
import About from '../About/About';
import Read from '../Read/Read'
import Delete from '../Delete/Delete'
import Update from '../Update/Update';

export default function Main() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Container>
          <Switch>
            <Route path='/' exact={true} component={ReadAll}></Route>
            <Route path='/create' component={Create}></Route>
            <Route path='/deleteall' component={DeleteAll}></Route>
            <Route path='/delete/:id' component={Delete}></Route>
            <Route path='/about'  component={About}></Route>
            <Route path='/view/:id'  component={Read}></Route>
            <Route path='/update/:id'  component={Update}></Route>
          </Switch>
        </Container>
      </BrowserRouter>
    </>
  )
}