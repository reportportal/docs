## How to activate markdown syntax recognition for log messages

If you need to support more complex formatting in your test log, Report Portal has its own integrated support of markdown syntax.

You can activate this option by adding this magic message into your log:

```
!!!MARKDOWN_MODE!!!
```

This message removed due to rendering your test log in ui service and all information right after this magic text is going to be rendered as a markdown.
