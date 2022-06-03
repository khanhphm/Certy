const MORALIS_APP_ID = "ERpaelo8j5rMwc4uFZKyhItKjQ08oIKJIJzRZbp4";
const MORALIS_KEY = "265fmjEpwD6x8L9Jf7h3KxNWjGM7xlNTfXGMZZmpjeA0FGeSNgvYWT7rgPLrm4jO";
const MOLARIS_SERVER_URL = "https://0pi3aryzbveg.usemoralis.com:2053/server";

const MoralisFactory = (function() {
    const Moralis = require('moralis');

    function MoralisInstance(applicationId, javascriptKey, url) {
        Moralis.initialize(
            applicationId,
            javascriptKey,
        );

        Moralis.serverURL = url;

        return Moralis;
    }

    let instance = null;

    return {
        getInstance: function() {
            if (instance == null) {
                instance = MoralisInstance(MORALIS_APP_ID, MORALIS_KEY, MOLARIS_SERVER_URL);
                instance.constructor = null;
            }
            return instance;
        },
    };
})();

export default MoralisFactory;