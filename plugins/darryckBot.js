$.plugin({
    name: "darryckBot",
    onSend: function (msg) {
        return this.replaceAll(msg, false);
    },
    onWrite: function (msg, nick) {
        return this.replaceAll(msg, true, nick);
    },
    replaceAll: function (msg, tags, nick) {
        var joueurFrancaisRandom = Math.floor(Math.random() * 10);
        if (joueurFrancaisRandom == 2) {
            if (
                msg.charAt(0) != "/" &&
                msg.indexOf("plugin") === -1 &&
                (!tags || (tags && nick)) &&
                nick != $.chat.myNick()
            ) {
                var namesArray = [
                    "jeff",
                    "ben",
                    "arthur",
                    "qrthur",
                    "kevin",
                    "daoulas",
                    "fabien",
                    "darryck",
                    "nerevar",
                    "maxime",
                    "gollwu",
                    "hycariss",
                    "azexpli",
                    "lardon",
                    "ostracil",
                ];
                namesArray.forEach(function (element, index, array) {
                    msg = msg.replace(
                        element,
                        element + ", le joueur francais, "
                    );
                });
            }
        }
        if (
            msg.charAt(0) != "/" &&
            msg.indexOf("plugin") === -1 &&
            (!tags || (tags && nick)) &&
            nick != $.chat.myNick()
        ) {
            var darryckArray = [
                "les acouphènes qu'il doit avoir, ses tampons ont du exploser",
            ];
            if (msg.indexOf("rryck") > -1) {
                setTimeout(function () {
                    $.chat.write(
                        darryckArray[
                            Math.floor(Math.random() * darryckArray.length)
                        ],
                        "Darryck"
                    );
                }, 500);
            }
        }
        return msg;
    },
});
