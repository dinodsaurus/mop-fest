import React from 'react';
import Header from './header'
import Footer from './footer'
import Paralax from './paralax/paralax'
import LoadingStore from 'stores/loading';
import Loading from './Loading';

class AppComponent extends React.Component {
  constructor(ref) {
    super(ref);
    this.state = {
      loading: LoadingStore.getState()
    }
    LoadingStore.subscribe(this.checkLoading.bind(this))
  }
  checkLoading() {
    this.setState({
      loading: LoadingStore.getState()
    })
  }
  render() {
    return (
      <div className="home">
        <Header/>
        <Paralax/>
        {this.props.children}
        <Footer/>
        <Loading active={this.state.loading}/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
