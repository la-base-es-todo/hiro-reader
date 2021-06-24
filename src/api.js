import history from "./db";

export default function getPageHistory({page}) {
  const result = history.filter((item) => item.page === page);
  return result;
}
