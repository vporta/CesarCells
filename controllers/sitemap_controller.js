var express = require('express');
var router = express.Router();

var sm = require('sitemap');

/// Generate sitemap for SEO once per day
var sitemap = sm.createSitemap ({
      hostname: 'https://cesarcells.com/',
      cacheTime: 600000,        // 1,440 minutes (one day) regenerate sitemap
      urls: [
        { url: '/',  changefreq: 'daily', priority: 0.3 },
        { url: '/contact_us/contact' },
        { url: '/about_us/aboutus' },
        { url: '/whats-stargardts-disease' },
        { url: '/stargardts-clinical-trials' },
        { url: '/stargardts-glossary' },
        { url: '/stargardts-stemcell-story' },
        { url: '/stargardts-assistive-technologies' },
        { url: '/tools/stemcell-assessment' },
        { url: '/tools/genetic' },
        { url: '/tools/all-trials' },
        { url: '/tools/amsler-test' },
        { url: '/clinical-trials/zero' },
        { url: '/clinical-trials/one' },
        { url: '/clinical-trials/two' },
        { url: '/clinical-trials/three' },
        { url: '/clinical-trials/four' },
        { url: '/clinical-trials/five' },
        { url: '/clinical-trials/six' },
        { url: '/clinical-trials/seven' },
        { url: '/users/dashboard' },
        { url: '/users/details_new' },
        { url: '/users/sign-out' },
        { url: '/users/view-results' },
        { url: '/users/stargardt-disease-registry' },
        { url: '/users/my-appointments' }
     
      ]
    });

/// We need a route for the xml sitemap for Google to crawl
    router.get('/sitemap.xml', function(req, res) {
      sitemap.toXML( function (err, xml) {
          if (err) {
            return res.status(500).end();
          }
          res.header('Content-Type', 'application/xml');
          res.send( xml );
      });
    });


module.exports = router;