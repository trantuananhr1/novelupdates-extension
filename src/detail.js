function execute(url) {
  url = url.replace(/\/$/, ""); // loại bỏ dấu / cuối
  const doc = fetch(url).html();

  return Response.success({
    name: doc.select("div.seriestitlenu").text(),
    cover: doc.select("div.seriesimg img").attr("src"),
    host: "www.novelupdates.com",
    author: doc.select("div#showauthors a").text(),
    description: doc.select("div#editdescription").text(),
    detail: doc.select("div#showtags").text(),
    ongoing: doc.select("div#editstatus").text().toLowerCase().includes("ongoing")
  });
}
