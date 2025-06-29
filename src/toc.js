function execute(url) {
    let doc = fetch(url).html();
    let list = [];

    doc.select("div#myTable tbody tr").forEach(row => {
        let name = row.select("td:nth-child(1)").text();
        let link = row.select("td:nth-child(1) a").attr("href");

        if (name && link) {
            list.push({
                name: name,
                url: link,
                host: new URL(link).host
            });
        }
    });

    return Response.success(list);
}
