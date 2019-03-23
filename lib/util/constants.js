module.exports = Object.freeze({
    ASCIIDOCTOR: {
        LINE_BREAK: '[%hardbreaks]',
        ICONS: {
            NOTE: 'NOTE:',
            TIP: 'TIP:',
            IMPORTANT: 'IMPORTANT:',
            WARNING: 'WARNING:',
            CAUTION: 'CAUTION:'
        },
        TITLE: {
            DOC_HEAD: "=",
            LEVEL_1: "==",
            LEVEL_2: "===",
            LEVEL_3: "====",
            LEVEL_4: "=====",
            LEVEL_4: "======"
        },
        OPTIONS: {
            "backend": "html5",
            "doctype": "article",
            "safe": "unsafe",
            "header_footer": true,
            "verbose": 1,
            "timings": false,
            "trace": false,
            "mkdirs": true,
            "attributes": []
        }
    },
    OUTPUT_DIR: '../../../docs/',
});