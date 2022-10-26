## FPTU Tech Insights — "[isomorphic](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/)" web app &nbsp; <a href="https://github.com/gosu-team/fptu-app/stargazers"><img src="https://img.shields.io/github/stars/gosu-team/fptu-app.svg?style=social&label=Star&maxAge=3600" height="20"></a>

[fptu-app](https://fuhcm.com) is an isomorphic web app built on top of [Node.js](https://nodejs.org/),
[Express](http://expressjs.com/) and [React](https://facebook.github.io/react/), containing modern web development
tools such as [Webpack](http://webpack.github.io/) and [Babel](http://babeljs.io/).

The webpack configuration now support both Babel and TypeScript, so you can have both `.js` and `.ts` files in the source code.

## FaceBook Api

Need PAGE_ID & PAGE_TOKEN

Get LONG-LIVED-USER-ACCESS-TOKEN:

`$ curl -i -X GET "https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=APP-ID&client_secret=APP-SECRET&fb_exchange_token=SHORT-LIVED-USER-ACCESS-TOKEN"`

Get Page Access:
`$ curl -i -X GET "https://graph.facebook.com/PAGE-ID?fields=access_token&access_token=USER-ACCESS-TOKEN"`

PAGE-ID=113016957969174
USER-ACCESS-TOKEN=EAALNMLKi8bUBAA6kAUgZCFlvgqJyYslSS9xyUuHSwhCjCwZAosLoDhQb8IPBu3ZBnDGAsZCzpVAIBllORBB4rn6AYFC9Vo1iHiHRKRuykGkjWELBc35ZCeBgLqRaZBMQlT9SYU8uRKZA6PuQUVRXD1KQ188AWgqwbZC61KxHszcFf7LTmAt4MxKHrccV9QoFK6QZD

WE will get:
PAGE-TOKEN:"EAALNMLKi8bUBALXvqVuQas3coEJYd3z4u7mtFrwRqrSpSIzlOuMcRZBH0bb8WvzZBDPOHMdVuTUXHCZBwMjDzzPc7stIonZBAZCXRewZCOm4U4fdLxPeNamX1R2ZBWCfo3AcBwjygUIXNGIithmoow5taYsfzS0ZC8WyylN2zBuQqV2rMyDsuesXqZCZC3vUIZA4mtk7gcYXiRVHAZDZD

## Environment

Assuming you have a working `DockerCE`.

## Development

Run with develop container:

`$ docker-compose up`

## Production

Build production image:

`$ docker build -t fptu-app .`

Run production container:

`$ docker run -d --name fptu-app -p 3001:3000 fptu-app:latest`

## License

Copyright © 2018-present **Huynh Minh Tu**. This source code is licensed under the MIT
license found in the [LICENSE.txt](https://github.com/gosu-team/fptu-app/blob/master/LICENSE.txt)
file. The documentation to the project is licensed under the
[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/) license.

Made with ♥ by Huynh Minh Tu ([https://mrhmt.com](mrhmt.com))
