---
title: My Second Post!
date: "2018-03-03T12:49:47.602Z"
path: "/my-second-post/"
author: "AlejandroHerr"
tags: ["animals", "Barcelona", "Raspberry Pi"]
---

There are lots of powerful things you can do with the Ghost editor

If you've gotten pretty comfortable with [all the basics](/the-editor/) of writing in Ghost, then you may enjoy some more advanced tips about the types of things you can do with Markdown!

As with the last post about the editor, you'll want to be actually editing this post as you read it so that you can see all the Markdown code we're using.


## Special formatting

As well as bold and italics, you can also use some other special formatting in Markdown when the need arises, for example:

* ~~strike through~~
- `other code`
- ==highlight==
- \*escaped characters\*
- *asterisks*
- _lines_
- **bold?**

1. antialiased
2. asdasd
1. Bupkins
1. Cars

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.

[Assemble](http://assemble.io)



| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

## Writing code blocks

There are two types of code elements which can be inserted in Markdown, the first is inline, and the other is block. Inline code is formatted by wrapping any word or words in back-ticks, `like this`. Larger snippets of code can be displayed across multiple lines using triple back ticks:

```jsx
/* globals window,document */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './CoverHeader.module.scss';

export default class CoverImage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      translateY: 0,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const scrollTop = (window.pageYOffset || document.documentElement.scrollTop) || 0;

    this.setState({ translateY: scrollTop / 5 });
  }
  render() {
    const { image } = this.props;
    const { translateY } = this.state;

    return (
      <div
        className={styles.coverHeader__image}
        style={{ backgroundImage: `url(${image})`, transform: `translate3d(0px, ${translateY}px, 0px)` }}
      >
        <div className={styles.coverHeader__imageShadow} />
      </div>
    );
  }
}

CoverImage.propTypes = {
  image: PropTypes.string.isRequired,
};
```

If you want to get really fancy, you can even add syntax highlighting using [Prism.js](http://prismjs.com/).


## Full bleed images

One neat trick which you can use in Markdown to distinguish between different types of images is to add a `#hash` value to the end of the source URL, and then target images containing the hash with special styling. For example:

![walking](https://casper.ghost.org/v1.0.0/images/walking.jpg#full)

which is styled with...

```css
img[src$="#full"] {
    max-width: 100vw;
}
```

This creates full-bleed images in the Casper theme, which stretch beyond their usual boundaries right up to the edge of the window. Every theme handles these types of things slightly differently, but it's a great trick to play with if you want to have a variety of image sizes and styles.


## Reference lists

**The quick brown [fox][1], jumped over the lazy [dog][2].**

[1]: https://en.wikipedia.org/wiki/Fox "Wikipedia: Fox"
[2]: https://en.wikipedia.org/wiki/Dog "Wikipedia: Dog"

Another way to insert links in markdown is using reference lists. You might want to use this style of linking to cite reference material in a Wikipedia-style. All of the links are listed at the end of the document, so you can maintain full separation between content and its source or reference.


## Creating footnotes

The quick brown fox[^1] jumped over the lazy dog[^2].

[^1]: Foxes are red
[^2]: Dogs are usually not red

Footnotes are a great way to add additional contextual details when appropriate. Ghost will automatically add footnote content to the very end of your post.


## Full HTML

Perhaps the best part of Markdown is that you're never limited to just Markdown. You can write HTML directly in the Ghost editor and it will just work as HTML usually does. No limits! Here's a standard YouTube embed code as an example:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Cniqsc9QfDo?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
