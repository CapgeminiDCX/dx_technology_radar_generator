---
title: "Spring REST Docs"
ring: assess
quadrant: tools
---

[Spring REST Docs](https://projects.spring.io/spring-restdocs/) auto generates [Asciidoctor](http://asciidoctor.org/) snippets with the help of [Spring MVC Test](http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle#spring-mvc-test-framework) or [RestAssured](/tools/rest-assured.html).
So you can be sure that your tests are inline with the documentation.

At DCX, we use [Spring REST Docs](https://projects.spring.io/spring-restdocs/) to document our Rest Services and Hal Resources.
We also use it to auto generate [WireMock](/tools/wiremock.html) Stubs, so the consumer of the service can test against the exact API of the service.
