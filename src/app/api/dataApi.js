import axios from 'axios'


export async function fetchData(stock){
    
    const ticker = stock.ticker

    const {REACT_APP_IEX} = process.env;
    const data = await axios.get(`https://cloud.iexapis.com/stable/stock/${ticker}/previous?token=${REACT_APP_IEX}`)

    return {ticker: stock.ticker, qty:stock.qty, close: data.data.close }
}