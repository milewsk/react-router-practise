import { Fragment } from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "konrad", text: "siemanko witam w mojej kuchni" },
  { id: "q2", author: "marysia", text: "olala co za bramka" },
  { id: "q3", author: "jacek", text: "gdzie jest moja bluza" },
];

const AllQuotes = () => {
  return (
    <Fragment>
      <div>Wszyystkie cytaty</div>
      <QuoteList quotes={DUMMY_QUOTES}></QuoteList>
    </Fragment>
  );
};

export default AllQuotes;
