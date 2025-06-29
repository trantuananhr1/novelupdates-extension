function execute(key, page) {
  const url = `https://www.novelupdates.com/?s=${encodeURIComponent(key)}&post_type=seriesplans`;
  const doc = fetch(url).html();
  const list = [];

  doc.select(".search_main_box_nu").forEach(item => {
    list.push({
      name: item.select(".search_title a").text(),
      link: item.select(".search_title a").attr("href"),
      cover: item.select("img").attr("src"),
      description: item.select(".search_intro").text()
    });
  });

  return Response.success(list);
}
