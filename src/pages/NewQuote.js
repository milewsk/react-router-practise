import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";

const NewQuote = () => {
  const history = useHistory();

  const addQuoteHandler = (data) => {
    const { author, text } = data;
    console.log(author);

    history.replace("/quotes");
  };

  return <QuoteForm onAddQuote={addQuoteHandler}></QuoteForm>;
};

export default NewQuote;
