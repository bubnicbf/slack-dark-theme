document.addEventListener('DOMContentLoaded', function() {

    let tt__customCss = `
        body, .channel_header, #footer, .channel_title_info, #channel_topic_text, .p-message_pane .c-message_list.c-virtual_list--scrollbar > .c-scrollbar__hider, .p-classic_nav, footer, .p-classic_nav__team_header, .p-prefs_modal, .c-fullscreen_modal__header { background: rgb(29, 30, 33) !important; }
        .p-prefs_modal .c-radiogroup .c-label--with_formatted_text { background:  rgba(255, 255, 255, 0.85); }
        .p-emoji_picker__content, .p-emoji_picker__input_container, .p-emoji_picker__list_container, .p-emoji_picker__footer, .p-emoji_picker__heading, .p-emoji_picker__preview_text, .ReactModal__Overlay--after-open .c-dialog__content, .c-dialog__header, .c-dialog__footer, .p-member_profile_card { background: rgb(1, 21, 34); }
        .p-workspace__input .p-message_input_field, .p-flexpane { background: rgb(1, 24, 34); border-color: rgb(27, 139, 210); }
        .p-workspace__input .p-message_input_field { border-color: rgba(25,255,255, 0.4); }
        .p-workspace__input .p-message_input_field.focus { border-color: rgb(27, 139, 210); }
        .c-message--hover { background: rgba(64, 78, 84, 0.7) !important; }
        .p-classic_nav__team_header__team__name, .p-classic_nav, .p-classic_nav__model__title__name__button, .c-message_attachment, .c-message--light .c-message__sender .c-message__sender_link, .c-message_attachment__author_name, .c-texty_input__placeholder, .ql-editor, .p-notification_bar__formatting, .p-emoji_picker__heading, .p-emoji_picker__preview_text, body, .c-message__sender a, .p-classic_nav__channel_header .c-button-unstyled, .p-classic_nav__model__title__info__topic__content, .p-classic_nav__right_header i, .p-classic_nav__right__search__placeholder, .c-dialog__title, .p-share_dialog__warning_message, .c-message_attachment__author_name, .c-message_attachment__author_name.c-link--button, .p-channel_details__heading, .c-link--button, .c-mrkdwn__code, .c-mrkdwn__pre, .p-member_profile_field__label, .p-prefs_modal h2, .p-prefs_modal h3, .p-prefs_modal p, .p-prefs_modal .c-label__text, .p-prefs_modal .c-channel_name__text, .p-classic_nav__model__title span, .channel_header__title__info, .p-classic_nav__model__title__info__secondary_name, .p-classic_nav__model__title__info__presence, .c-app_badge, .c-texty_input.focus .c-texty_input__button, .p-workspace__input .p-message_input_field.focus~.p-message_input_file_button:not(:hover) { color: rgba(255,255,255,0.8); }
        .p-prefs_modal .p-prefs_modal__radiogroup p, .c-message--editing p, .p-notification_bar__formatting code { color: rgba(0,0,0,0.8); }
        .c-mrkdwn__code, .c-mrkdwn__pre { background: rgb(1, 13, 19) !important;}
        .c-message--highlight.c-message--editing { background: rgb(27, 139, 210);}
        .p-classic_nav__model__title__name--dim, .c-texty_input .c-texty_input__button, .p-workspace__input .p-message_input_file_button { color: rgba(25,255,255,0.3); }
        .c-message__body { color: rgb(153, 174, 177); }
        .p-message_pane__unread_banner__banner { color: #24b6d4; text-shadow: none; }
        .c-message_list__unread_divider__separator { border-color: rgb(51, 133, 145); }
        .c-message_list__unread_divider__label, .p-message_pane__unread_banner__banner, .c-mrkdwn__member--mention { background: rgb(51, 133, 145) !important; }
        .c-presence--active {color: rgb(51, 133, 145) !important;}
        #team_menu, .p-channel_sidebar { background: #2a2f30 !important; }
        nav.p-channel_sidebar .p-channel_sidebar__channel--selected, .p-channel_sidebar__link--selected, .c-message_list__day_divider__label__pill, .p-message_pane .c-message_list.c-virtual_list--scrollbar > .c-scrollbar__hider:before, .c-button--primary { color: #eee !important; background: rgb(50, 82, 102) !important; }
        .p-channel_sidebar__channel:hover { color: #eee !important; background: rgba(155, 183, 201, 0.5) !important; }
        .c-mrkdwn__member--link { background: rgb(27, 139, 210); color: rgb(0, 43, 54) !important; }
        .c-message_list__day_divider__line { border-top-color: rgb(50, 82, 102) !important}
        #msg_input, #primary_file_button { background: rgb(41, 51, 54) !important; }
        #msg_form #msg_input { border-color: transparent; }
        #msg_input.texty_legacy .ql-placeholder, .c-message_kit__file__meta, .c-message_kit__labels__link, .p-threads_view_header__participant_list { color: #fff; opacity: 0.5; }
        .c-message--starred { background: #1b3f5f; }
        #client-ui.flex_pane_showing #col_flex, #col_flex { border-left-color: #000; }
        #flex_contents, #threads_msgs_scroller_div, ts-thread, .p-threads_view .c-virtual_list__scroll_container { background: #0e2e4a }
        #flex_contents .heading, .p-flexpane_header, ts-thread .thread_messages, .p-threads_view__default_background { background: rgba(0,0,0,0.5); }
        .c-icon_button--light, .c-icon_button--light.c-button-unstyled, .c-icon_button--light:link, .p-threads_flexpane__header_channel_name, .p-threads_flexpane__separator_count, .p-threads_view_header__channel_name, .p-classic_nav { color: white;}
        .p-threads_view_reply, .p-threads_view_root, .p-threads_view__footer, .p-classic_nav__right__search { border: 1px solid rgba(255,255,255,0.4); }
    `;
    var head = document.head;
    var darkStyles  = document.createElement('style');
    darkStyles.appendChild(document.createTextNode(tt__customCss));
    head.appendChild(darkStyles);
});