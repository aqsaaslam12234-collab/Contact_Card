import { useEffect, useState } from "react";
interface QuotesType {
  id: number;
  quote: string;
  author: string;
}

const FetchQuotes = () => {
  const [quotesdata, setQuotesData] = useState<QuotesType[]>([]);
  useEffect(() => {
  const fetchData = async () => {
    const request = await fetch("https://dummyjson.com/quotes");
    const data = await request.json();
    setQuotesData(data.quotes);
};
    fetchData();
  },[]); 
  return (
    <div className="p-6">
        <div className="grid grid-rows-1 gap-4">
            {quotesdata.map((quotes) =>(
                <div key={quotes.id} className="border rounded-lg p-4">
                    <h1 className="font-semibold text-lg mb-2">{quotes.quote}</h1>
                    <h2 className="font-semibold text-lg mb-2">{quotes.author}</h2>

                </div>

            ) )}

        </div>

    {/* <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Inspirational Quotes</h1>
      <div className="grid grid-cols-1 gap-4">
      {quotesdata.map((quotes) => (
        <div key={quotes.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
        <p className="text-lg mb-2 italic">"{quotes.quote}"</p>
        <p className="text-sm text-gray-600 font-semibold">— {quotes.author}</p>
        </div>
        ))}
        </div>
        </div> */}
        </div>
  )
};

export default FetchQuotes;
