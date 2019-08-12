## Dark theme for Slack v4.0

1. Make sure Slack is not running/in the background.

2. Navigate to C:\Users\USERNAME\AppData\Local\slack\app-4.0.0\resources

3. Unpack app.asar as an archive via 7-zip. 7-zip cannot do this normally you will need an extension such as Asar7z:

<p style="text-align:center;">
  <a href="http://www.tc4shell.com/en/7zip/asar/" title="Asar7z">
    Asar7z
  </a>
</p>

4. Navigate to the `/dist/` folder in the archive

5. Search for ssb-interop.bundle.js and open it.  Append the usual CSS style you use.  Below is a link to my javascript with CSS config:

<p style="text-align:center;">
  <a href="https://github.com/bubnicbf/slack-dark-theme/blob/master/v4/dark.js" title="Slack dark theme CSS">
    dark.js
  </a>
</p>

6. Save the file. 7-Zip will prompt you if you want to update the archive, say yes of course

7. Close 7-Zip. Reopen Slack. Eyes rejoice.
