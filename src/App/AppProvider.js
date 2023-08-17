import React from 'react';
import _ from 'lodash';

const cc=require('cryptocompare');
export const AppContext = React.createContext()

export class AppProvider extends React.Component{
   
    constructor(props){
        super(props);

        this.state = {
            page:'DashBoard',
            favourites: ['BTC','ETH','XMR','DOGE'],
            ...this.savedSettings(),
            setPage: this.setPage,
            addCoin: this.addCoin,
            removeCoin: this.removeCoin,
            confirmFavourites: this.confirmFavourites
        }

    }

    componentDidMount= () =>
    {
        this.fetchCoins();
    }

    fetchCoins=async () =>
    {
        let coinList=(await cc.coinList()).Data;
        this.setState({coinList});
    }
    
    addCoin = key=> {

         let favourites=[...this.state.favourites];

         if(favourites.length < 10)
         {
            favourites.push(key);
            this.setState({favourites});
         }

    }

    removeCoin=key=>{
        let favourites=[...this.state.favourites];
        this.setState({favourites: _.pull(favourites,key)})
    }

    confirmFavourites= ()=>{
       
         this.setState({
            firstVisit: false,
            page: 'DashBoard'
         });

         localStorage.setItem('cryptodash',JSON.stringify({test: 'hello'}));
        
    }

    savedSettings(){

        let cryptoDashData= JSON.parse(localStorage.getItem('cryptodash'));

        if(!cryptoDashData)
        {
            return {page: 'Settings',firstVisit: true}
        }
        
        return {};

    }


    setPage= page=> this.setState({page})

    render(){
        return(

            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>

        )
    }


}
