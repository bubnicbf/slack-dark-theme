## DISABLING SLACK UPDATES IN V4.0+!

Tucked into the release notes on today’s standalone download of Slack is a particularly awesome nugget that many of us have been yelling about for a long time:

<p style="text-align:center;">
    <img alt="Damn right we know what that means." src="https://github.com/bubnicbf/slack-dark-theme/blob/master/v4/img/update.png" sizes="(max-width: 750px) 100vw, 750px" />
</p>

Long story short, the com.tinyspeck.slackmacgap preferences domain now respects a boolean (true/false) value called SlackNoAutoUpdates instead of requiring admins to set an environmental variable. Note that this functions slightly the opposite of what you might initially expect because the preference itself is worded and used as a negative value – setting it to true (yes) disables auto-updates. You can test this with the following in your terminal:

```
defaults write com.tinyspeck.slackmacgap SlackNoAutoUpdates -bool YES
```

Should you want to manage this with a configuration profile (AND WHO WOULDN’T?!) you can find an example one below.

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>PayloadContent</key>
    <array>
        <dict>
            <key>PayloadContent</key>
            <dict>
                <key>com.tinyspeck.slackmacgap</key>
                <dict>
                    <key>Forced</key>
                    <array>
                        <dict>
                            <key>mcx_preference_settings</key>
                            <dict>
                                <key>SlackNoAutoUpdates</key>
                                <true/>
                            </dict>
                        </dict>
                    </array>
                </dict>
            </dict>
            <key>PayloadEnabled</key>
            <true/>
            <key>PayloadIdentifier</key>
            <string>MCXToProfile.16ee47bc-3b52-486d-b274-f962a95002d0.alacarte.customsettings.3ef60939-3c00-45e0-b21c-1c21a4da2d48</string>
            <key>PayloadType</key>
            <string>com.apple.ManagedClient.preferences</string>
            <key>PayloadUUID</key>
            <string>3ef60939-3c00-45e0-b21c-1c21a4da2d48</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDescription</key>
    <string>Disables Slack auto updates</string>
    <key>PayloadDisplayName</key>
    <string>Disable Slack Auto-Updates</string>
    <key>PayloadIdentifier</key>
    <string>com.company.slack-no-auto-updates</string>
    <key>PayloadOrganization</key>
    <string></string>
    <key>PayloadRemovalDisallowed</key>
    <true/>
    <key>PayloadScope</key>
    <string>System</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>16ee47bc-3b52-486d-b274-f962a95002d0</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```