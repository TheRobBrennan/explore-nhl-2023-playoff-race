# Welcome

What kind of data is available for us to work with using the official NHL API:

## Current standings

Let's view the Wild Card standings for the NHL 2022-23 season at [https://www.nhl.com/standings/2022/wildcard](https://www.nhl.com/standings/2022/wildcard):

![](./images/example_screenshot_nhl_wildcard_standings.png)

If we use the Safari Web Inspector and select the `Network` tab to view traffic, let's zero in on the `statsapi.web.nhl.com` domain:

![](./images/example_screenshot_safari_web_inspector_network_nhl_api.png)

Let's select `wildCardWithLeaders`:

![](./images/example_screenshot_safari_web_inspector_network_preview_nhl_api_wildCardWithLeaders.png)

Let's look at the URL - [https://statsapi.web.nhl.com/api/v1/standings/wildCardWithLeaders?hydrate=record(overall),division,conference,team(nextSchedule(team),previousSchedule(team))&season=20222023&site=en_nhl](https://statsapi.web.nhl.com/api/v1/standings/wildCardWithLeaders?hydrate=record(overall),division,conference,team(nextSchedule(team),previousSchedule(team))&season=20222023&site=en_nhl) - and the [JSON](./json/wildCardWithLeaders.json) data it provides:

![](./images/example_screenshot_nhl_wildcard_standings_raw_json.png)
