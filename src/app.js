import React, { Component } from 'react';
import Navbar from './navbar'
import Search from './search';
import Tags from './tags';
import Range from './range'
import Sort from './sort'
import Card from './card';


class App extends Component{

    render(){
        return(
            <div>
                <Navbar/>

                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3 filters mt-5'>
                            <div className='col-md-12'><Search/></div>

                            <div className='col-md-12 mt-4'>
                                <label className='disp-block'><b><h5>Search Brand</h5></b></label>
                                <Tags tag='Xiaomi'/>
                                <Tags tag='Oppo'/>
                                <Tags tag='Vivo'/>
                                <Tags tag='OnePlus'/>
                                <Tags tag='Apple'/>
                            </div>
                            <div className='col-md-12 mt-4'>
                                <Range/>
                            </div>
                        </div>

                        <div className='col-md-9 mt-5'>
                            <div className='row'>
                               <div className='col-md-12'><Sort/></div> 
                            </div>
                            <div className='row'>
                                <div className='col-md-4'><Card title="IPhone XR" price="Rs: 47,900/-" img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWcUUzVx5FczbTUanIltpFt_M181PNHlXlBw&usqp=CAU"/></div>
                                <div className='col-md-4'><Card title="Xiaomi Redmi Note 9" price="Rs: 11,999 /-" img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXAyw1Bzy1VCCBNeqbZ5F2GtKR_c1GMDpGjQ&usqp=CAU"/></div>
                                <div className='col-md-4'><Card title="Poco M2 Pro" price="Rs: 13,999 /-" img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtiZQ1vpq-N85Zh_-lkXkl73_csm3m4mrUhg&usqp=CAU"/></div>
                                <div className='col-md-4'><Card title="Samsung M1" price="Rs: 11,340 /-" img="https://i1.wp.com/www.mobilebd.co/wp-content/uploads/2020/03/Samsung-Galaxy-M01--500x500.png"/></div>
                                <div className='col-md-4'><Card title="Poco F1" price="Rs: 18,999 /-" img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1RE_4C0Xbi7I7naARyyOXEbhoxUc6jJM4_4fdIEZTBw&usqp=CAU&ec=45714077"/></div>
                                <div className='col-md-4'><Card title="Redmi Note 9 Pro" price="Rs: 12,999 /-" img="https://cdn.shopify.com/s/files/1/0231/3627/2464/products/1024x1024-Mi-Note-9-Pro_grande.png?v=1599418872"/></div>
                                <div className='col-md-4'><Card title="Realme 7i" price="Rs: 11,999 /-" img="https://fdn.gsmarena.com/imgroot/news/20/09/realme-7i-official/-315/gsmarena_004.jpg"/></div>
                                <div className='col-md-4'><Card title="Realme 6 pro" price="Rs: 20,250 /-" img="https://www.powerplanetonline.com/cdnassets/realme_6_pro_8gb_128gb_azul_04_ad_l.jpg"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default App