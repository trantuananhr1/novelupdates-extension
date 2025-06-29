function execute(url) {
  const doc = fetch(url).html();
  const list = [];

  doc.select("div#myTable > table > tbody > tr").forEach(row => {
    const link = row.select("td > a");
    const name = link.text();
    const href = link.attr("href");

    if (name && href) {
      list.push({
        name: name,
        url: href,
        host: "external"
      });
    }
  });

  return Response.success(list);
}
