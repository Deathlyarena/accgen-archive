function additionalPatreonInfo(a, e) {
    var i = {
            name: $("input[name=acc_username]").val(),
            realName: $("input[name=acc_realname]").val(),
            summary: $("textarea[name=acc_bio]").val(),
            country: $("select[name=acc_country]").val(),
            state: $("input[name=acc_state]").val(),
            city: $("input[name=acc_city]").val(),
            customURL: $("input[name=acc_profileurl]").val()
        },
        t = {
            profile: parseInt($("select[name=profile_privacy]").val()),
            comments: parseInt($("select[name=comments_privacy]").val()),
            inventory: parseInt($("select[name=inv_privacy]").val()),
            inventoryGifts: "true" == $("#invgifts_priv").val(),
            gameDetails: parseInt($("#gameDetails_priv").val()),
            playtime: "true" == $("#playtime_priv").val(),
            friendsList: parseInt($("#friendsList_priv").val())
        };
    return Object.keys(i).forEach((a => {
        "" === i[a] && delete i[a]
    })), Object.keys(t).forEach((a => {
        "" === t[a] && delete t[a]
    })), {
        profile: i,
        privacy: t,
        image: $("input[name=acc_profileimage]").val()
    }
}

function generate_pressed() {
    commonGeneratePressed(), localStorage.setItem("custom_gen_settings", JSON.stringify({
        name: $("input[name=acc_username]").val(),
        realName: $("input[name=acc_realname]").val(),
        summary: $("textarea[name=acc_bio]").val(),
        country: $("select[name=acc_country]").val(),
        state: $("input[name=acc_state]").val(),
        city: $("input[name=acc_city]").val(),
        customURL: $("input[name=acc_profileurl]").val(),
        image: $("input[name=acc_profileimage]").val(),
        profile_priv: $("#profile_privacy").val(),
        comments_priv: $("#comments_privacy").val(),
        inventory_priv: $("#inv_privacy").val(),
        invgifts_priv: $("#invgifts_priv").val(),
        gameDetails_priv: $("#gameDetails_priv").val(),
        playtime_priv: $("#playtime_priv").val(),
        friendsList_priv: $("#friendsList_priv").val()
    }))
}

function change_visibility(a) {
    commonChangeVisibility(a)
}

function init() {
    var a = localStorage.getItem("custom_gen_settings");
    null != a && (a = JSON.parse(a), $("input[name=acc_username]").val(a.name), $("input[name=acc_realname]").val(a.realName), $("textarea[name=acc_bio]").val(a.summary), $("select[name=acc_country]").val(a.country), $("input[name=acc_state]").val(a.state), $("input[name=acc_city]").val(a.city), $("input[name=acc_profileurl]").val(a.customURL), $("input[name=acc_profileimage]").val(a.image), $("#profile_privacy").val(a.profile_priv), $("#comments_privacy").val(a.comments_priv), $("#inv_privacy").val(a.inventory_priv), $("#invgifts_priv").val(a.invgifts_priv), $("#gameDetails_priv").val(a.gameDetails_priv), $("#playtime_priv").val(a.playtime_priv), $("#friendsList_priv").val(a.friendsList_priv)), $.ajax({
        url: "/userapi/patreon/check",
        type: "GET"
    }).done((function(a) {
        switch (a = parseInt(a)) {
            case 1:
                $("#patreon_signin").show(), $("#accgen_ui").hide(), $("#recap").hide(), $("#generate_button").hide();
                break;
            case 2:
                $("#patreon_pay").show(), $("#accgen_ui").hide(), $("#recap").hide(), $("#generate_button").hide();
                break;
            case 3:
                $("#patreon_error").show(), $("#accgen_ui").hide(), $("#recap").hide(), $("#generate_button").hide();
                break;
            case 0:
                common_init()
        }
    })).fail((function() {
        $("#patreon_error").show(), $("#accgen_ui").hide()
    }))
}