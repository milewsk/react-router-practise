import { Fragment } from "react";
import { Redirect } from "react-router-dom";
import { Route, Switch, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "konrad", text: "siemanko witam w mojej kuchni" },
  { id: "q2", author: "marysia", text: "olala co za bramka" },
  { id: "q3", author: "jacek", text: "gdzie jest moja bluza" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => {
    return quote.id === params.quoteId;
  });

  if (!quote) {
    return <p>Quote not found</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote
        author={quote.author}
        text={quote.text}
      ></HighlightedQuote>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
