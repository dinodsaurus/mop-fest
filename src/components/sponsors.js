import '../styles/sponsors.styl'
import React from 'react';
import SponsorList from './sponsors/sponsorList';
import Title from './title'

class Sponsors extends React.Component {
  constructor() {
    super()
    this.state = {
      main: [{
        img: 'studentskizbor.png',
        link: 'http://sz.unin.hr/'
      },
      {
        img: 'tzgv_vz_htz_.png',
        link: 'http://www.tourism-varazdin.hr/'
      },
      {
        img: 'varazdin.png',
        link: 'http://varazdin.hr/en/',
        big: true
      }],
      partners: [
        {
          img: 'pan.png',
          link: 'http://www.pan.com.hr/gl/hr/'
        },
        {
          img: 'coca_cola.png',
          link: 'http://www.coca-cola.hr/hr/home/'
        },
        {
          img: 'somersby.png',
          link: 'http://www.somersby.hr/hr/'
        },
        {
          img: '404.png',
          link: 'http://404.agency/'
        },
        {
          img: '42.png',
          link: 'http://www.broj42.com/'
        },
        {
          img: 'gmv.png',
          link: 'http://www.gmv.hr/en/',
          big: true
        },
        {
          img: 'galerijski_centar.png',
          link: 'http://gcv.hr/',
          big: true
        },
        {
          img: 'twobucks.png',
          link: 'http://twobucks.co/'
        },
        {
          img: 'toptal.png',
          link: 'http://toptal.com/'
        },
        {
          img: 'unin_logo.png',
          link: 'https://www.unin.hr/'
        },
        {
          img: 'dobarkod.png',
          link: 'http://goodcode.io/',
          big: true
        }
      ],
      media: [
        {
          img: 'Logo_Varazdinski.png',
          link: 'http://varazdinski.rtl.hr/',
          big: true
        },
        {
          img: 'vizkultura.png',
          link: 'http://vizkultura.hr/'
        },
        {
          img: 'SjeveroZapad.png',
          link: 'http://www.sjeverozapad.hr/'
        },
        {
          img: 'netokracija.png',
          link: 'http://www.netokracija.com/',
          big: true
        },
        {
          img: 'bug.png',
          big: true,
          link: 'http://www.bug.hr/'
        },
        {
          img: 'dsd.png',
          link: 'http://dizajnsvakidan.com/'
        },
        {
          img: 'kulturpunkt.png',
          link: 'http://www.kulturpunkt.hr/',
          big: true
        },
        {
          img: 'presedan.png',
          link: 'http://pressedan.unin.hr/',
          big: true
        },
        {
          img: 'logo_hdnp.png',
          link: 'http://hdnp.hr/',
          big: true
        }
      ]
    }
  }
  render() {
    return (
      <div className='sponsors'>
        <Title title="Partners"/>
        <div className='container'>
          <SponsorList title='Main Partners' size={3} list={this.state.main}/>
          <SponsorList title='Partners' size={4} list={this.state.partners}/>
          <SponsorList title='Media Partners' size={4} list={this.state.media}/>
          <di className='text'>
            <p className='small'>Big</p>
            <p className='big'>Tnx</p>
            <p className='desc'>Many thanks to all who support us and without whom the festival would not exist. As a small organizers special thank you for the financial support goes to Varaždin Tourist Board, Student Union of the University North and our sponsors without whom this festival would not be realized.</p>
          </di>
        </div>
      </div>
    );
  }
}

Sponsors.defaultProps = {
};

export default Sponsors;
