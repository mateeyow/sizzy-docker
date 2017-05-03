import React from 'react';

const questions = [
  {
    id: 'blank-white-boxes',
    title: 'Why are some sites showing as a blank white box?',
    answer: (
      <div>
        Some websites are configured to prevent embedding into another site. Sizzy is showing the "devices" by embedding a website in multiple iframes.
        Unfortunately, this is configured from their side and there's nothing we can do about it, at least in the web version of Sizzy.
        The
        {' '}
        <a
          target="_blank"
          href="https://chrome.google.com/webstore/detail/sizzy/nfhlbmjiiogoelaflfclodlkncbdiefo"
        >
          Chrome Extension
        </a>
        {' '}can overcome this problem on
        <i><b> some </b></i>
        websites, but not on all of them.
      </div>
    )
  },
  {
    id: 'actual-device-comparison',
    title: 'How does Sizzy compare to an actual device?',
    answer: (
      <div>
        The app is missing a few core features in order to represent 100% of what's on an actual device:
        <ul>
          <li>
            {' '}
            Simulate real user agents (some devices aren't using media queries to optimize a mobile website, but are switching between desktop/mobile version based on the user agent)
            {' '}
          </li>
          <li> Take into consideration device pixel ratio </li>
          <li> Scrollbars of the devices (iframes) are using viewport size </li>
        </ul>

        All of these issues will be fixed soon, but for now it would be good to do few final tests on a real device.
      </div>
    )
  },
  {
    id: 'device-scroll-sync',
    title: `Why isn't the scroll synchronized between devices?`,
    answer: (
      <div>
        For now, it doesn't make sense because there's a mix of various devices and sizes which can either be in portrait on landscape.
        Imagine a situation where you have a huge iPad and a small iPhone next to it and the scroll is synchronized, with one scroll on the iPhone, you're going to reach the end of the site on the iPad.
        So the scroll won't really be "synced". This feature won't be implemented until there's a proper solution where the scroll is not actually "synced", but it's focusing on the same portion of the page on all devices.
      </div>
    )
  },

  {
    id: 'persisting-settings',
    title: 'Why are my settings lost after a refresh?',
    answer: (
      <div>
        Right now nothing is persisted in the local storage. So everything that you configure and change is just temporary.
        The feature of persisting the user settings in the local storage is coming soon and it has a high priority on the roadmap.
      </div>
    )
  },
  {
    id: 'manage-devices',
    title: 'How can I add, remove, or edit devices?',
    answer: (
      <div>
        For now the list of devices is static and cannot be changed. A bunch of new devices will be added soon, and the feature for adding/removing/configuring devices
        should come after the feature for persisting the user settings in the local storage.
      </div>
    )
  },
  {
    id: 'can-i-test-local-websites',
    title: 'Can I test local websites?',
    answer: (
      <div>
        Yes you can.

        If you're running a local server, just paste http://localhost:3000, or whatever the link of your local webserver is, into the url bar of Sizzy.
        Keep in mind that the link must start with https:// or http://.
        You cannot point to an index.html file that's starting with file://.
        If you need a simple server to run your local files you can use
        {' '}
        <a href="https://www.npmjs.com/package/http-server" target="_blank">
          http-server
        </a>
        {' '}
        (a zero-configuration command-line http server).
        Just start http-server, point it to the folder of your website and it will serve your app on http://localhost:8080. Then you can paste http://localhost:8080 in the url bar of Sizzy.
      </div>
    )
  },
  {
    id: 'webpack-hot-module-reloading',
    title: `Why is Webpack + Hot Module Reloading not working?`,
    answer: (
      <div>
        The problem is better explained in <a
          href="https://github.com/kitze/sizzy/issues/21"
          target="_blank"
        >
          this issue
        </a> on GitHub.

        Basically HMR in Webpack doesn't work accross different domains, so when you're developing an app locally and previewing it on Sizzy, HMR breaks (you can see the errors in the console).
        Hopefully we'll find a fix for this soon.
      </div>
    )
  },
  {
    id: 'chrome-extension-permissions',
    title: `Why does the Chrome Extension need a permission to read data on all websites?`,
    answer: (
      <div>
        First of all, you can keep your piece of mind because the extension is
        {' '}
        <a
          href="https://github.com/kitze/sizzy/tree/master/chrome-extension"
          target="_blank"
        >
          open sourced
        </a>
        , so you can explore it and see what it does.

        The extension has 2 basic functionalities:
        <ol>
          <li>
            When clicking the "S" button in the toolbar, it opens the current website in Sizzy.
          </li>
          <li>
            It blocks "x-frame-options" headers from the requests, so you can embed most of the websites that prevent embedding.
            {' '}
          </li>
        </ol>

        In order to block the headers from some requests, Chrome requires
        {' '}
        <a
          href="https://github.com/kitze/sizzy/blob/master/chrome-extension/manifest.json#L19"
          target="_blank"
        >
          the following permissions:
        </a>
        {' '}
        {`"[ "activeTab", "webRequest", "webRequestBlocking", "<all_urls>" ]`}

        I would understand your concern if the extension had a closed source, but in this case you have nothing to worry about.
        If you're not very technical and you need a further explanation, feel free to contact me anywhere!
      </div>
    )
  },
  {
    id: 'support-future-develompent',
    title: `I really like Sizzy! How can I make sure that it will stick around and be updated with awesome new features?`,
    answer: (
      <div>
        Currently, this project is being developed mostly
        {' '}
        <a href="https://kitze.io">by 1 person</a>
        .
        Development will continue as usual but it would help greatly if you support this project with a one-time, or a recurring donation
        {' '}
        <a target="_blank" href="https://opencollective.com/sizzy">
          {' '}on OpenCollective
        </a>
        .
        If you would like to discuss about a different way of supporting Sizzy, you can
        {' '}
        <a target="_blank" href="https://kitze.io"> contact me here</a>
        .
      </div>
    )
  }
];

export default questions;
