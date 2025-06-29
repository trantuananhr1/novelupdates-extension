function execute(key, page) {
    let searchUrl = "https://www.novelupdates.com/?s=" + encodeURIComponent(key);
    let doc = fetch(searchUrl).html();
    let list = [];

    doc.select("div.search_main_box_nu").forEach(card => {
        let name = card.select("div.search_title a").text();
        let link = card.select("div.search_title a").attr("href");
        let cover = card.select("img").attr("src");
        let desc = card.select("div.search_intro").text();

        list.push({
            name: name,
            link: link,
            cover: cover,
            description: desc,
            host: "www.novelupdates.com"
        });
    });

    return Response.success(list);
}
