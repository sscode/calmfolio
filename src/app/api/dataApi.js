import axios from 'axios'
import { toast } from 'react-toastify';


export async function fetchData(stock){
    
    const ticker = stock.ticker

    const {REACT_APP_IEX} = process.env;

    // try {
    const data = await axios.get(`https://cloud.iexapis.com/stable/stock/${ticker}/previous?token=${REACT_APP_IEX}`)
    return {ticker: stock.ticker, qty:stock.qty, close: data.data.close }
    // } catch(error) {
    //     return {}
    // }
        // toast.error("This stock does not exist.")

}