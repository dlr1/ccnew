import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

export class RingLib {

    erp_ids = [
        { "ring_id": 1, "ring_id_east": 10, "ring_id_west": 11 },
        { "ring_id": 2, "ring_id_east": 12, "ring_id_west": 13 },
        { "ring_id": 3, "ring_id_east": 14, "ring_id_west": 15 },
        { "ring_id": 4, "ring_id_east": 16, "ring_id_west": 17 },
        { "ring_id": 5, "ring_id_east": 18, "ring_id_west": 19 },
        { "ring_id": 6, "ring_id_east": 20, "ring_id_west": 21 },
        { "ring_id": 7, "ring_id_east": 22, "ring_id_west": 23 },
        { "ring_id": 8, "ring_id_east": 24, "ring_id_west": 25 },
        { "ring_id": 9, "ring_id_east": 26, "ring_id_west": 27 },
        { "ring_id": 10, "ring_id_east": 28, "ring_id_west": 29 },
        { "ring_id": 11, "ring_id_east": 30, "ring_id_west": 31 },
        { "ring_id": 12, "ring_id_east": 32, "ring_id_west": 33 },
        { "ring_id": 13, "ring_id_east": 34, "ring_id_west": 35 },
        { "ring_id": 14, "ring_id_east": 36, "ring_id_west": 37 },
        { "ring_id": 15, "ring_id_east": 38, "ring_id_west": 39 },
        { "ring_id": 16, "ring_id_east": 40, "ring_id_west": 41 },
        { "ring_id": 17, "ring_id_east": 42, "ring_id_west": 43 },
        { "ring_id": 18, "ring_id_east": 44, "ring_id_west": 45 },
        { "ring_id": 19, "ring_id_east": 46, "ring_id_west": 47 },
        { "ring_id": 20, "ring_id_east": 48, "ring_id_west": 49 },
        { "ring_id": 21, "ring_id_east": 50, "ring_id_west": 51 },
        { "ring_id": 22, "ring_id_east": 52, "ring_id_west": 53 },
        { "ring_id": 23, "ring_id_east": 54, "ring_id_west": 55 },
        { "ring_id": 24, "ring_id_east": 56, "ring_id_west": 57 },
        { "ring_id": 25, "ring_id_east": 58, "ring_id_west": 59 },
        { "ring_id": 26, "ring_id_east": 60, "ring_id_west": 61 },
        { "ring_id": 27, "ring_id_east": 62, "ring_id_west": 63 },
        { "ring_id": 28, "ring_id_east": 64, "ring_id_west": 65 },
        { "ring_id": 29, "ring_id_east": 66, "ring_id_west": 67 },
        { "ring_id": 30, "ring_id_east": 68, "ring_id_west": 69 },
        { "ring_id": 31, "ring_id_east": 70, "ring_id_west": 71 },
        { "ring_id": 32, "ring_id_east": 72, "ring_id_west": 73 },
        { "ring_id": 33, "ring_id_east": 74, "ring_id_west": 75 },
        { "ring_id": 34, "ring_id_east": 76, "ring_id_west": 77 },
        { "ring_id": 35, "ring_id_east": 78, "ring_id_west": 79 },
        { "ring_id": 36, "ring_id_east": 80, "ring_id_west": 81 },
        { "ring_id": 37, "ring_id_east": 82, "ring_id_west": 83 },
        { "ring_id": 38, "ring_id_east": 84, "ring_id_west": 85 },
        { "ring_id": 39, "ring_id_east": 86, "ring_id_west": 87 },
        { "ring_id": 40, "ring_id_east": 88, "ring_id_west": 89 },
        { "ring_id": 41, "ring_id_east": 90, "ring_id_west": 91 },
        { "ring_id": 42, "ring_id_east": 92, "ring_id_west": 93 },
        { "ring_id": 43, "ring_id_east": 94, "ring_id_west": 95 },
        { "ring_id": 44, "ring_id_east": 96, "ring_id_west": 97 },
        { "ring_id": 45, "ring_id_east": 98, "ring_id_west": 99 },
        { "ring_id": 46, "ring_id_east": 100, "ring_id_west": 100 },
        { "ring_id": 47, "ring_id_east": 102, "ring_id_west": 103 },
        { "ring_id": 48, "ring_id_east": 104, "ring_id_west": 105 },
        { "ring_id": 49, "ring_id_east": 106, "ring_id_west": 107 },
        { "ring_id": 50, "ring_id_east": 108, "ring_id_west": 109 }
    ];

    css_alcatel_optics_ranges = [
        {
            optic: '10km for SMF',
            tx_min: -8.2,
            tx_max: 0.5,
            rx_min: -10.3,
            rx_max: 0.5
        },
        {
            optic: '40km for SMF',
            tx_min: -4.7,
            tx_max: 4.0,
            rx_min: -11.3,
            rx_max: -1.0
        },
        {
            optic: '80km for SMF',
            tx_min: 0,
            tx_max: 5.0,
            rx_min: -24.0,
            rx_max: -9.0
        }
    ];

    css_cisco_optics_ranges = [
        {
            optic: 'SFP-10G-LR',
            tx_min: -8.2,
            tx_max: 0.5,
            rx_min: -14.4,
            rx_max: 0.5
        },
        {
            optic: 'SFP-10G-ER',
            tx_min: -4.7,
            tx_max: 4.0,
            rx_min: -15.8,
            rx_max: -1.0
        },
        {
            optic: 'SFP-10G-ZR',
            tx_min: 0,
            tx_max: 4.0,
            rx_min: -24.0,
            rx_max: -7.0
        }
    ];

    eln_optics_ranges = [
        {
            optic: '10km for SMF',
            tolerance: 3.0,
            tx_min: -8.2,
            tx_max: 0.5,
            rx_min: -10.3,
            rx_max: 0.5
        },
        {
            optic: '40km for SMF',
            tolerance: 3,
            tx_min: -4.7,
            tx_max: 4.0,
            rx_min: -11.3,
            rx_max: -1.0
        },
        {
            optic: '80km for SMF',
            tolerance: 3.0,
            tx_min: -1.0,
            tx_max: 4.0,
            rx_min: -24.0,
            rx_max: -9.0
        }
    ];

    eln_services = [
        {
            name: "Services",
            parser: "servicesParser",
            commands: [
                {
                    text: "show service service-using vpls",
                    keys: [
                        {
                            index: 1,
                            name: "ServiceId",
                            skip: 0,
                            size: 9
                        },
                        {
                            index: 2,
                            name: "Type",
                            skip: 13,
                            size: 4
                        },
                        {
                            index: 3,
                            name: "Adm",
                            skip: 23,
                            size: 5
                        },
                        {
                            index: 4,
                            name: "Opr",
                            skip: 28,
                            size: 5
                        },
                        {
                            index: 5,
                            name: "CustomerId",
                            skip: 33,
                            size: 9
                        },
                        {
                            index: 6,
                            name: "ServiceName",
                            skip: 43,
                            size: 100
                        }
                    ]
                }
            ]
        }];
    eln_chassis = [
        {
            name: "Ports",
            parser: "showPortsParser",
            commands: [
                {
                    text: "show port",
                    keys: [
                        {
                            index: 1,
                            name: "Port ID",
                            find: "1/1",
                            skip: 0,
                            size: 8
                        },
                        {
                            index: 2,
                            name: "Admin State",
                            find: "1/1",
                            skip: 12,
                            size: 5
                        },
                        {
                            index: 3,
                            name: "Link",
                            find: "1/1",
                            skip: 18,
                            size: 3
                        },
                        {
                            index: 4,
                            name: "Port State",
                            find: "1/1",
                            skip: 23,
                            size: 5
                        }
                    ]
                },
                {
                    text: "show chassis"
                },
                {
                    text: "show service sap-using"
                },
                {
                    text: "show service sap-using eth-ring"
                }

            ]
        }];

    eln_panels = [
        {
            name: "Physical Layer",
            parser: "physicalLayerParser",
            commands: [
                {
                    text: "show port 1/1/25",
                    identifier: '1/1/25',
                    keys: [
                        {
                            index: 1,
                            name: "Port",
                            find: "Interface          :",
                            size: 8
                        },
                        {
                            index: 2,
                            name: "ADM",
                            find: "Admin State        :",
                            size: 5,
                            expect: "up"
                        },
                        {
                            index: 3,
                            name: "OPR",
                            find: "Oper State         :",
                            size: 5,
                            expect: "up"
                        },
                        {
                            index: 4,
                            name: "Optic",
                            find: "Link Length support:",
                            size: 13
                        },
                        {
                            index: 5,
                            name: "TX Level",
                            find: "Tx Output Power (dBm)",
                            size: 16
                        },
                        {
                            index: 6,
                            name: "RX Level",
                            find: "Rx Optical Power (avg dBm)",
                            size: 14
                        }
                    ]
                },
                {
                    text: "show port 1/1/26",
                    identifier: '1/1/26',
                    keys: [
                        {
                            index: 1,
                            name: "Port",
                            find: "Interface          :",
                            size: 8
                        },
                        {
                            index: 2,
                            name: "ADM",
                            find: "Admin State        :",
                            size: 5,
                            expect: "up"
                        },
                        {
                            index: 3,
                            name: "OPR",
                            find: "Oper State         :",
                            size: 5,
                            expect: "up"
                        },
                        {
                            index: 4,
                            name: "Optic",
                            find: "Link Length support:",
                            size: 13
                        },
                        {
                            index: 5,
                            name: "TX Level",
                            find: "Tx Output Power (dBm)",
                            size: 16
                        },
                        {
                            index: 6,
                            name: "RX Level",
                            find: "Rx Optical Power (avg dBm)",
                            size: 14
                        }
                    ]
                }
            ]
        },
        {
            name: "Adjacent Nodes",
            parser: "ringPathParser",
            commands: [
                {
                    text: "show system lldp neighbor",
                    identifier: '1/1/25',
                    keys: [
                        {
                            index: 7,
                            name: "Ring Path",
                            find: "1/1/25",
                            skip: 58,
                            size: 20
                        }
                    ]
                },
                {
                    text: "show system lldp neighbor",
                    identifier: '1/1/26',
                    keys: [
                        {
                            index: 7,
                            name: "Ring Path",
                            find: "1/1/26",
                            skip: 58,
                            size: 20
                        }
                    ]
                }
            ]
        },
        {
            name: "Logical Ring",
            parser: "logicalRingParser",
            commands: [
                {
                    text: "show service sap-using eth-ring",
                    identifier: '1/1/25',
                    keys: [
                        {
                            index: 9,
                            name: "VPLS88",
                            find: "1/1/25:88",
                            skip: 51,
                            size: 2,
                            expect: "Up"
                        },
                        {
                            index: 10,
                            name: "VPLS89",
                            find: "1/1/25:89",
                            skip: 51,
                            size: 2,
                            expect: "Up"
                        }
                    ]
                },
                {
                    text: "show service sap-using eth-ring",
                    identifier: '1/1/26',
                    keys: [
                        {
                            index: 9,
                            name: "VPLS88",
                            find: "1/1/26:88",
                            skip: 51,
                            size: 2,
                            expect: "Up"
                        },
                        {
                            index: 10,
                            name: "VPLS89",
                            find: "1/1/26:89",
                            skip: 51,
                            size: 2,
                            expect: "Up"
                        }
                    ]
                }
            ]
        }

    ];

    css_cisco_ports = [
        {
            name: "Ports",
            parser: "cssCiscoPortsParser",
            commands: [
                {
                    text: "show interfaces description | include <<ringname>> | exclude \"\\.89 |\\.88 |\\.99 \"",
                    keys: [
                        {
                            index: 1,
                            name: "Port",
                            pattern: /Te(\S+)/g
                        }
                    ]
                }
            ]
        }];

    css_alcatel = [
        {
            name: "Ports",
            parser: "cssAlcatelPortsParser",
            commands: [
                {
                    text: "show eth-ring <<ring_id>>",
                    keys: [
                        {
                            index: 1,
                            name: "Port",
                            pattern: /(\s+(a|b).+)/gm,
                            data: function (val) {
                                // replace multiple Spaces with a single space
                                var val = val.replace(/\s\s+/g, ' ');
                                var valArray = val.split(' ');
                                return valArray[1];
                            }
                        },
                        {
                            index: 2,
                            name: "ADM",
                            pattern: /(\s+(a|b).+)/gm,
                            data: function (val) {
                                // replace multiple Spaces with a single space
                                var val = val.replace(/\s\s+/g, ' ');
                                var valArray = val.split(' ')[3].split('/');
                                return valArray[0];
                            }
                        },
                        {
                            index: 3,
                            name: "OPER",
                            pattern: /(\s+(a|b).+)/gm,
                            data: function (val) {
                                // replace multiple Spaces with a single space
                                val = val.replace(/\s\s+/g, ' ');
                                var valArray = val.split(' ')[3].split('/');
                                return valArray[1];
                            }
                        },
                        {
                            index: 8,
                            name: "VPLS88",
                            pattern: /(Admin State.*)/gm,
                            searchWholeResponse: true,
                            data: function (val) {
                                // replace multiple Spaces with a single space
                                val = val.replace(/\s\s+/g, ' ');
                                val = val.match(/.*?(?=Oper)/)[0].split(':')[1].trim();
                                return val;
                            }
                        },
                        {
                            index: 9,
                            name: "VPLS89",
                            pattern: /(Oper State.*)/gm,
                            searchWholeResponse: true,
                            data: function (val) {
                                // replace multiple Spaces with a single space
                                val = val.replace(/\s\s+/g, ' ');
                                val = val.split(':')[1].trim();
                                return val;
                            }
                        },
                        {
                            index: 10,
                            name: "Status",
                            pattern: /(\s+(a|b).+)/gm,
                            data: function (val) {
                                // replace multiple Spaces with a single space
                                val = val.replace(/\s\s+/g, ' ');
                                var valArray = val.split(' ');
                                return valArray[5];
                            }
                        }
                    ]
                },
                {
                    text: "show port <<port>>",
                    keys: [
                        {
                            index: 4,
                            name: "Optic",
                            pattern: /(Link Length support.*)/gm,
                            searchWholeResponse: true,
                            data: function (val) {
                                // replace multiple Spaces with a single space
                                val = val.replace(/\s\s+/g, ' ');
                                var valArray = val.split(':');
                                return valArray[1].trim();
                            }
                        },
                        {
                            index: 5,
                            name: "TX Level",
                            pattern: /(Tx Output Power \(dBm\).*)/gm,
                            searchWholeResponse: true,
                            data: function (val) {
                                // replace multiple Spaces with a single space
                                return val.replace('Tx Output Power (dBm)', '').trim().split(' ')[0]
                            }
                        }, {
                            index: 6,
                            name: "RX Level",
                            pattern: /(Rx Optical Power \(avg dBm\).*)/gm,
                            searchWholeResponse: true,
                            data: function (val) {
                                // replace multiple Spaces with a single space
                                return val.replace('Rx Optical Power (avg dBm)', '').trim().split(' ')[0]

                            }
                        }
                    ]
                }
            ]
        }];

    eln_master = [
        {
            name: "masterList",
            parser: "eln_master_parser",
            commands: [
                {
                    text: "info detail | match invert-match \"customer 1 create\" | match invert-match \"Default customer\" | match invert-match \"vpls\" | match invert-match \"epipe\" | match invert-match \"ies\" | match \"customer\" post-lines 4 | match invert-match \"no \"",
                    keys:
                    [
                        {
                            name: "CustomerIdlist",
                            pattern: /(customer.*\s+.*\s+exit)/gm,
                        }
                    ]
                },
                {
                    text: "info detail | match invert-match \"epipe\" | match invert-match \"ies\" | match invert-match \"customer 1 \" | match \"vpls\" post-lines 1 pre-lines 1 | match invert-match \"no \" | match invert-match \"mvr\"",
                    keys:
                    [
                        {
                            name: "VPLSServiceIdlist",
                            pattern: /(vpls.*\s+.*\s+exit)/gm,
                        }
                    ]
                },
                {
                    text: "show service sap-using eth-ring | match \"1/1/25\" | match invert-match \"Ctrl\" | match invert-match \"1/1/25:99\"",
                    keys:
                    [
                        {
                            name: "saplist",
                            pattern: /((.)+Data)/gm,
                        }
                    ]
                }
            ]
        }];
    css_cisco_panels = [
        {
            name: "panels",
            parser: "cssCiscoParser",
            commands: [
                {
                    text: "show interfaces tenGigE <<port>>",
                    keys: [
                        {
                            index: 2,
                            name: "ADM",
                            pattern: /(TenGig.*)/,
                            data: function (val) {
                                var admValue = val.split(',')[0];
                                var valArray = admValue.split(' ');
                                return valArray[valArray.length - 1];
                            },
                            expect: 'up'
                        },
                        {
                            index: 3,
                            name: "OPER",
                            pattern: /(TenGig.*)/,
                            data: function (val) {
                                var admValue = val.split(',')[1];
                                var valArray = admValue.split(' ');
                                return valArray[valArray.length - 1];
                            },
                            expect: 'up'
                        }
                    ]
                },
                {
                    text: "show controllers tenGigE <<port>> phy",
                    keys: [
                        {
                            index: 4,
                            name: "Optic",
                            pattern: /(?:Xcvr Code:\s)(.*)/g,
                            data: function (val) { return val.replace('Xcvr Code: ', ''); }
                        },
                        {
                            index: 5,
                            name: "TX Level",
                            pattern: /(?:Tx Power:(.*))(.*)/g,
                            data: function (val) { return val.substring(val.indexOf('(') + 1).replace(')', ''); }
                        },
                        {
                            index: 6,
                            name: "RX Level",
                            pattern: /(?:Rx Power:(.*))(.*)/g,
                            data: function (val) { return val.substring(val.indexOf('(') + 1).replace(')', ''); }
                        }
                    ]
                },
                {
                    text: "show ethernet ring g8032 brief | include <<ringname>>",
                    keys: [
                        {
                            index: 7,
                            name: "VPLS88",
                            pattern: null,
                            data: function (val, device) {
                                // if device name has CSS2 then 1 - will be VPLS89 , 2 - will be VPLS88
                                var retValue = device.indexOf('CSS2') == 0 ? val.match(/(?:2 )(.*)/g)[0].trim() : val.match(/(?:1 )(.*)/g)[0].trim();
                                return retValue.split(' ').filter(function (item) { return item != ''; })[2];
                            },
                            expect: 'Idle',
                            styles: [
                                { value: 'Idle', style: 'text-success bg-success', valid: true },
                                { value: 'Protection', style: 'text-warning bg-warning', valid: false },
                                { value: 'Pending', style: 'text-danger bg-danger', valid: false }
                            ]
                        },
                        {
                            index: 8,
                            name: "VPLS89",
                            pattern: null,
                            data: function (val, device) {
                                // if device name has CSS1 then 1 - will be VPLS88 , 2 - will be VPLS89
                                var retValue = device.indexOf('CSS1') == 0 ? val.match(/(?:2 )(.*)/g)[0].trim() : val.match(/(?:1 )(.*)/g)[0].trim();
                                return retValue.split(' ').filter(function (item) { return item != ''; })[2];
                            },
                            expect: 'Idle',
                            styles: [
                                { value: 'Idle', style: 'text-success bg-success', valid: true },
                                { value: 'Pending', style: 'text-warning bg-warning', valid: false },
                                { value: 'Protection', style: 'text-danger bg-danger', valid: false }
                            ]
                        }
                    ]
                }
            ]
        }];

    eln_master_parser(keys, text, device) {
        var key = keys[0];
        var pattern = key.pattern;
        var values = text.match(pattern);
        return { name: key.name, data: values };
    }

    cssCiscoParser(keys, text, device) {
        var values = [];
        for (var i = 0; i < keys.length; ++i in keys) {

            // capture everything in text except timestamp in 1st line
            var textLineArray = text.split('\n');
            textLineArray.shift();
            var allText = textLineArray.join('\n');

            // if the pattern is null, we will pass the whole text to the data function
            var item = {
                index: keys[i].index,
                name: keys[i].name,
                value: keys[i].pattern == null ? keys[i].data(allText, device) : keys[i].data(text.match(keys[i].pattern, device)[0].trim()),
                style: '',
                valid: false
            };

            var expectation = keys[i].expect;
            if (expectation != undefined) {
                if (keys[i].style != undefined) {
                    var itemStyle = keys[i].styles.filter(function (style) { return style.value == item.value })[0];
                    if (itemStyle) {
                        item.style = itemStyle.style;
                        item.valid = itemStyle.valid;
                    }
                }
                else {
                    if (item.value == expectation) {
                        item.style = 'text-success bg-success';
                        item.valid = true;
                    } else {
                        item.style = 'text-danger bg-danger';
                        item.valid = false;
                    }
                }
            }

            values.push(item);
        }

        // check if we have "optic" in the array, if there validate TX and RX levels
        var opticItem = values.filter(function (item) { return item.name == 'Optic'; });

        if (opticItem && opticItem.length > 0) {
            var opticValue = opticItem[0].value;

            var optic = this.css_cisco_optics_ranges.filter(function (item) { return item.optic == opticValue; })[0];

            //validate Tx level
            var txItem = values.filter(function (item) { return item.name == 'TX Level'; })[0];

            txItem.title = optic["optic"].split(' ')[0] + ' (Tx) ' + optic.tx_min + ' to ' + optic.tx_max;


            var txLevel = parseFloat(txItem.value);
            if (txLevel >= optic["tx_min"] && txLevel <= optic["tx_max"]) {
                txItem.style = 'text-success bg-success';
                txItem.valid = true;
            }
            else {
                txItem.style = 'text-danger bg-danger';
                txItem.valid = false;
            }

            //validate Rx level
            var rxItem = values.filter(function (item) { return item.name == 'RX Level'; })[0];

            rxItem.title = optic["optic"].split(' ')[0] + ' (Rx) ' + optic.rx_min + ' to ' + optic.rx_max;

            var rxLevel = parseFloat(rxItem.value);
            if (rxLevel >= optic["rx_min"] && rxLevel <= optic["rx_max"]) {
                rxItem.style = 'text-success bg-success';
                rxItem.valid = true;
            }
            else {
                rxItem.style = 'text-danger bg-danger';
                rxItem.valid = false;
            }
        }


        return values;
    }

    cssCiscoPortsParser(keys, text) {
        console.log('cssCiscoPortsParser:' + text);
        var key = keys[0];
        var pattern = key.pattern;
        var ports = text.match(pattern);
        var values = [];
        ports.forEach(function (port) {
            var obj = {
                index: key.index,
                name: key.name,
                value: port.replace('Te', '').trim(),
            }
            values.push(obj);
        })

        return values;
    }

    physicalLayerParser(keys, text) {

        // this parser will search the provided text, find a key then extract the value that follows

        var obj = {};
        for (var i = 0; i < keys.length; ++i in keys) {
            var key = keys[i];
            var startIndex = text.indexOf(key.find) + key.find.length;
            var data = text.substr(startIndex, key.size);

            if (typeof (key.expect) == 'undefined') {
                key.style = 'text-default';
                key.valid = true;
            } else {
                if (data.trim() == key.expect) {
                    key.style = 'text-success bg-success';
                    key.valid = true;
                } else {
                    key.style = 'text-danger bg-danger';
                    key.valid = false;
                }
            }
            obj[key.name] = {
                index: key.index,
                name: key.name,
                value: data.trim(),
                style: key.style,
                valid: key.valid
            }
        }
        var optic = this.eln_optics_ranges.filter(function (item) { return item.optic == obj["Optic"].value; })[0];

        obj["TX Level"].title = optic["optic"].split(' ')[0] + ' (Tx) ' + optic.tx_min + ' to ' + optic.tx_max;
        obj["RX Level"].title = optic["optic"].split(' ')[0] + ' (Rx) ' + optic.rx_min + ' to ' + optic.rx_max;
        //validate Tx level
        var txLevel = parseFloat(obj["TX Level"].value);
        if (txLevel >= optic["tx_min"] && txLevel <= optic["tx_max"]) {
            obj["TX Level"].style = 'text-success bg-success';
            obj["TX Level"].valid = true;
        }
        else {
            obj["TX Level"].style = 'text-danger bg-danger';
            obj["TX Level"].valid = false;
        }

        //validate Rx level
        var rxLevel = parseFloat(obj["RX Level"].value);
        if (rxLevel >= optic["rx_min"] && rxLevel <= optic["rx_max"]) {
            obj["RX Level"].style = 'text-success bg-success';
            obj["RX Level"].valid = true;
        }
        else {
            obj["RX Level"].style = 'text-danger bg-danger';
            obj["RX Level"].valid = false;
        }

        return obj;
    }

    ringPathParser(keys, text) {

        // this parser will search the provided text, find a key then extract the value that follows

        var obj = {};

        for (var i = 0; i < keys.length; ++i in keys) {
            var key = keys[i];
            var startIndex = text.indexOf(key.find) + key.skip;
            var data = text.substr(startIndex, key.size);

            if (key.name == 'Ring Path' && data.indexOf('===') != -1)
                data = 'Pending';

            obj[key.name] = {
                index: key.index,
                name: key.name,
                value: data.trim(),
                valid: true
            };

        }

        return obj;
    }

    logicalRingParser(keys, text) {
        // this parser will search the provided text, find a key then extract the value that follows
        var obj = {};

        var status = 'Ready';

        for (var i = 0; i < keys.length; ++i in keys) {
            var key = keys[i];
            var startIndex = text.indexOf(key.find) + key.skip;
            var data = text.substr(startIndex, key.size);

            if (typeof (key.expect) == 'undefined') {
                key.style = 'text-default';
                key.valid = true;
            } else {

                if (data.trim() == key.expect) {
                    key.style = 'text-success bg-success';
                    key.valid = true;
                } else {
                    key.style = 'text-danger bg-danger';
                    key.valid = false;
                }
            }

            obj[key.name] = {
                index: key.index,
                name: key.name,
                value: data.trim(),
                style: key.style,
                valid: key.valid
            };

        }


        return obj;
    }

    showPortsParser(keys, text) {

        // this parser will search the provided text, find a key then extract the value that follows

        var values = [];
        var lines = text.split('\n');
        // find lines numbers 
        var portHeadingLines = []
        lines.forEach(function (line, index) {
            if (line.indexOf('Ports on Slot ') > -1)
                portHeadingLines.push(index + 5);
        }
        );

        var counter = 0;
        while (counter < portHeadingLines.length) {
            for (var j = portHeadingLines[counter]; lines[j].trim() != ''; j++) {
                if (lines[j].substring(0, 1) == '=') continue;
                var rowValues = [];
                for (var i = 0; i < keys.length; ++i in keys) {
                    var key = keys[i];
                    var startIndex = lines[j].indexOf(key.find) + key.skip;
                    var data = lines[j].substr(startIndex, key.size);
                    rowValues.push(data.trim());
                }
                values.push(rowValues);
            }
            counter++;
        }

        return values;
    }

    cssAlcatelPortsParser(keys, text) {
        var key = keys[0];
        var pattern = key.pattern;
        var data = text.match(pattern);
        var values = [];
        data.forEach(function (portData) {
            var rowValues = [];

            for (var i = 0; i < keys.length; ++i in keys) {

                var searchText = keys[i].searchWholeResponse ? text : portData;
                // if the pattern is null, we will pass the whole text to the data function
                var item = {
                    index: keys[i].index,
                    name: keys[i].name,
                    value: keys[i].data(searchText.match(keys[i].pattern)[0].trim()),
                    style: '',
                    valid: false
                };

                var expectation = keys[i].expect;
                if (expectation != undefined) {
                    if (keys[i].styles != undefined) {
                        var itemStyle = keys[i].styles.filter(function (style) { return style.value == item.value })[0];
                        item.style = itemStyle.style;
                        item.valid = itemStyle.valid;
                    }
                    else {
                        if (item.value == expectation) {
                            item.style = 'text-success bg-success';
                            item.valid = true;
                        } else {
                            item.style = 'text-danger bg-danger';
                            item.valid = false;
                        }
                    }
                }
                rowValues.push(item);
            }
            values.push(rowValues);
        })

        // check if we have "optic" in the array, if there validate TX and RX levels
        var opticItem = values[0].filter(function (obj) { return obj.name == 'Optic'; });

        if (opticItem && opticItem.length > 0) {
            var opticValue = opticItem[0].value;

            var optic = this.css_alcatel_optics_ranges.filter(function (obj) { return obj.optic == opticValue; })[0];

            //validate Tx level
            var txItem = values[0].filter(function (obj) { return obj.name == 'TX Level'; })[0];

            txItem.title = 'minimum:' + optic.tx_min + ', maximum:' + optic.tx_max;

            var txLevel = parseFloat(txItem.value);
            if (txLevel >= optic["tx_min"] && txLevel <= optic["tx_max"]) {
                txItem.style = 'text-success bg-success';
                txItem.valid = true;
            }
            else {
                txItem.style = 'text-danger bg-danger';
                txItem.valid = false;
            }

            //validate Rx level
            var rxItem = values[0].filter(function (obj) { return obj.name == 'RX Level'; })[0];

            rxItem.title = 'minimum:' + optic.rx_min + ', maximum:' + optic.rx_max;
            var rxLevel = parseFloat(rxItem.value);
            if (rxLevel >= optic["rx_min"] && rxLevel <= optic["rx_max"]) {
                rxItem.style = 'text-success bg-success';
                rxItem.valid = true;
            }
            else {
                rxItem.style = 'text-danger bg-danger';
                rxItem.valid = false;
            }
        }

        return values;
    }

    servicesParser(device, keys, text) {

        // this parser will search the provided text, find a key then extract the value that follows

        var values = [];
        var lines = text.split('\n');

        for (var j = 6; j < lines.length - 5; j++) {
            if (lines[j].substr(0, 1) === '-') continue;
            var rowValues = [];
            for (var i = 0; i < keys.length; ++i in keys) {
                var key = keys[i];
                var startIndex = 0 + key.skip;
                var data = lines[j].substr(startIndex, key.size);
                rowValues.push(data.trim());
            }
            if (parseInt(rowValues[0]) > 100) {
                values.push(rowValues[0]);

                // check mismatch of vlan - service id and customer service name must match
                if (rowValues[0] != rowValues[4]) {
                    alert(device.name + ' - Mismatch of vlan - service id and customer service name must match');
                }
            }
        }

        return values;
    }


    standardConfig =
    "#-------------  Creating SAP-Ingress 100  --------------\n" +
    "/configure qos sap-ingress 100 create\n" +
    "/configure qos sap-ingress 100 description \"SAP-Policy_for_Ring:Applied_per_Customer_on_Ring\"\n" +
    "/configure qos sap-ingress 100 scope template\n" +
    "/configure qos sap-ingress 100 num-qos-classifiers 8\n" +
    "/configure qos sap-ingress 100 mac-criteria dot1p-only\n" +
    "/configure qos sap-ingress 100 mac-criteria entry 1 create\n" +
    "/configure qos sap-ingress 100 mac-criteria entry 1 match dot1p 7\n" +
    "/configure qos sap-ingress 100 mac-criteria entry 1 action fc \"nc\"\n" +
    "/configure qos sap-ingress 100 mac-criteria entry 2 create\n" +
    "/configure qos sap-ingress 100 mac-criteria entry 2 match dot1p 5\n" +
    "/configure qos sap-ingress 100 mac-criteria entry 2 action fc \"ef\"\n" +
    "/configure qos sap-ingress 100 mac-criteria entry 3 create\n" +
    "/configure qos sap-ingress 100 mac-criteria entry 3 match dot1p 3\n" +
    "/configure qos sap-ingress 100 mac-criteria entry 3 action fc \"l1\"\n" +
    "/configure qos sap-ingress 100 mac-criteria entry 4 create\n" +
    "/configure qos sap-ingress 100 mac-criteria entry 4 match dot1p 1\n" +
    "/configure qos sap-ingress 100 mac-criteria entry 4 action fc \"l2\"\n" +
    "/configure qos sap-ingress 100 mac-criteria entry 5 create\n" +
    "/configure qos sap-ingress 100 mac-criteria entry 5 match dot1p 0\n" +
    "/configure qos sap-ingress 100 mac-criteria entry 5 action fc \"be\"\n" +
    "/configure qos sap-ingress 100 mac-criteria entry 6 create\n" +
    "/configure qos sap-ingress 100 mac-criteria entry 6 match dot1p 6\n" +
    "/configure qos sap-ingress 100 mac-criteria entry 6 action fc \"h1\"\n" +
    "#-------------  Creating Access-Egress 101  --------------\n" +
    "/configure port 1/1/25 ethernet access egress no qos\n" +
    "/configure port 1/1/26 ethernet access egress no qos\n" +
    "/configure port 1/1/22\n" +
    "ethernet\n" +
    "no autonegotiate\n" +
    "speed 100\n" +
    "duplex full\n" +
    "mode access\n" +
    "mtu 9212\n" +
    "exit\n" +
    "no shutdown\n" +
    "/configure qos access-egress 101 create\n" +
    "description ERP_Core_Egress\n" +
    "remarking use-dot1p\n" +
    "queue 1\n" +
    "exit\n" +
    "queue 2\n" +
    "exit\n" +
    "queue 3\n" +
    "exit\n" +
    "queue 4\n" +
    "exit\n" +
    "queue 5\n" +
    "exit\n" +
    "queue 6\n" +
    "exit\n" +
    "queue 7\n" +
    "exit\n" +
    "queue 8\n" +
    "exit\n" +
    "fc be create\n" +
    "dot1p-in-profile 0\n" +
    "dot1p-out-profile 0\n" +
    "no dscp-in-profile\n" +
    "no dscp-out-profile\n" +
    "exit\n" +
    "fc l2 create\n" +
    "dot1p-in-profile 1\n" +
    "dot1p-out-profile 1\n" +
    "no dscp-in-profile\n" +
    "no dscp-out-profile\n" +
    "exit\n" +
    "fc ef create\n" +
    "dot1p-in-profile 5\n" +
    "dot1p-out-profile 5\n" +
    "no dscp-in-profile\n" +
    "no dscp-out-profile\n" +
    "exit\n" +
    "fc h1 create\n" +
    "dot1p-in-profile 6\n" +
    "dot1p-out-profile 6\n" +
    "no dscp-in-profile\n" +
    "no dscp-out-profile\n" +
    "exit\n" +
    "fc l1 create\n" +
    "dot1p-in-profile 3\n" +
    "dot1p-out-profile 3\n" +
    "no dscp-in-profile\n" +
    "no dscp-out-profile\n" +
    "exit\n" +
    "fc nc create\n" +
    "dot1p-in-profile 7\n" +
    "dot1p-out-profile 7\n" +
    "no dscp-in-profile\n" +
    "no dscp-out-profile\n" +
    "exit all\n" +
    "/configure port 1/1/25 ethernet access egress qos 101\n" +
    "/configure port 1/1/26 ethernet access egress qos 101\n" +
    "/admin save\n" +
    "!\n" +
    "!\n" +
    "#-------------  Creating Telemetry QOS Policy  --------------\n" +
    "/configure qos sap-ingress 99 create\n" +
    "description 10MbpsService:EFPolicy_Telemetry\n" +
    "num-qos-classifiers 2\n" +
    "meter 1 create\n" +
    "adaptation-rule cir min pir min\n" +
    "rate cir max pir max\n" +
    "exit\n" +
    "fc \"ef\" create\n" +
    "meter 1\n" +
    "exit\n" +
    "default-fc \"ef\"\n" +
    "exit\n" +
    "/admin save\n" +
    "!\n" +
    "/configure service vpls 99 customer 1 create\n" +
    "service-mtu 9150\n" +
    "stp\n" +
    "shutdown\n" +
    "exit\n" +
    "sap 1/1/22 create\n" +
    "stp\n" +
    "shutdown\n" +
    "exit\n" +
    "ingress\n" +
    "qos 99\n" +
    "meter-override\n" +
    "meter 1 create\n" +
    "rate cir 10000 pir 10000\n" +
    "exit\n" +
    "exit\n" +
    "exit\n" +
    "no shutdown\n" +
    "exit\n" +
    "sap 1/1/25:99 eth-ring 89 create\n" +
    "no shutdown\n" +
    "stp\n" +
    "shutdown\n" +
    "exit\n" +
    "ingress\n" +
    "qos 100\n" +
    "exit\n" +
    "exit\n" +
    "sap 1/1/26:99 eth-ring 89 create\n" +
    "no shutdown\n" +
    "stp\n" +
    "shutdown\n" +
    "exit\n" +
    "ingress\n" +
    "qos 100\n" +
    "exit\n" +
    "exit\n" +
    "no shutdown\n" +
    "/admin save\n" +
    "!\n" +
    "/configure port 1/1/25\n" +
    "ethernet\n" +
    "mode access\n" +
    "access\n" +
    "egress\n" +
    "qos 101\n" +
    "exit\n" +
    "exit\n" +
    "encap-type dot1q\n" +
    "mtu 9212\n" +
    "lldp\n" +
    "dest-mac nearest-bridge\n" +
    "admin-status tx-rx\n" +
    "notification\n" +
    "tx-tlvs sys-name sys-desc sys-cap\n" +
    "tx-mgmt-address system\n" +
    "exit\n" +
    "exit\n" +
    "exit\n" +
    "no shutdown\n" +
    "/configure port 1/1/26\n" +
    "ethernet\n" +
    "mode access\n" +
    "access\n" +
    "egress\n" +
    "qos 101\n" +
    "exit\n" +
    "exit\n" +
    "encap-type dot1q\n" +
    "mtu 9212\n" +
    "lldp\n" +
    "dest-mac nearest-bridge\n" +
    "admin-status tx-rx\n" +
    "notification\n" +
    "tx-tlvs sys-name sys-desc sys-cap\n" +
    "tx-mgmt-address system\n" +
    "exit\n" +
    "exit\n" +
    "exit\n" +
    "no shutdown\n" +
    "/admin save\n" +
    "!\n" +
    "/configure system snmp general-port 161\n" +
    "/configure system snmp packet-size 9216\n" +
    "/configure system snmp no shutdown\n" +
    "/configure system security snmp community 4lu7210 rwa\n" +
    "/configure system security ftp-server\n" +
    "/admin save\n" +
    "!\n" +
    "exit\n" +
    "exit all\n";

    customerPassThroughConfig = "#---- Start SVC ID <<id>> Cfg------\n" +
    "/configure service\n" +
    "<<customerConfig>>\n" +
    "<<vplsConfig>>\n" +
    "/configure service vpls <<id>> customer <<id>> service-mtu 9150\n" +
    "/configure service vpls <<id>> customer <<id>> sap 1/1/25:<<sapId>> eth-ring <<ethRing>> create\n" +
    "/configure service vpls <<id>> customer <<id>> sap 1/1/25:<<sapId>> eth-ring <<ethRing>> no shut\n" +
    "/configure service vpls <<id>> customer <<id>> sap 1/1/25:<<sapId>> ingress qos 100\n" +
    "/configure service vpls <<id>> customer <<id>> sap 1/1/26:<<sapId>> eth-ring <<ethRing>> create\n" +
    "/configure service vpls <<id>> customer <<id>> sap 1/1/26:<<sapId>> eth-ring <<ethRing>> no shut\n" +
    "/configure service vpls <<id>> customer <<id>> sap 1/1/26:<<sapId>> ingress qos 100\n" +
    "/configure service vpls <<id>> customer <<id>> no shut\n" +
    "/admin save\n" +
    "exit all\n" +
    "#---- END SVC ID <<id>> Cfg------\n\n"


    getParser(command){
        switch (command) {
            case "eln_master_parser": return this["eln_master_parser"];
            case "cssCiscoParser": return this["cssCiscoParser"]; 
            case "cssCiscoPortsParser": return this["cssCiscoPortsParser"]; 
            case "physicalLayerParser": return this["physicalLayerParser"];
            case "ringPathParser": return this["ringPathParser"];
            case "logicalRingParser": return this["logicalRingParser"];
            case "showPortsParser": return this["showPortsParser"];
            case "cssAlcatelPortsParser": return this["cssAlcatelPortsParser"];
            case "servicesParser": return this["servicesParser"];
        }
    }
    getELNPanels() {
        return this.eln_panels;
    }
    getELNChassis() {
        return this.eln_chassis;
    }
    getELNServices() {
        return this.eln_services;
    }
    getCSSCiscoPorts() {
        return this.css_cisco_ports;
    }
    getCSSAlcatel() {
        return this.css_alcatel;
    }
    getCSSCiscoPanels() {
        return this.css_cisco_panels;
    }
    getELNMaster() {
        return this.eln_master;
    }
    getStandardConfig() {
        return this.standardConfig;
    }
    getRingIdsForAlcatel(ringName) {
        var erp_data;
        try {
            erp_data = this.erp_ids.filter(function (item) { return item.ring_id == ringName.substr(ringName.length - 3); })[0]
        }
        catch (e) { }
        return erp_data;
    }
    getCustomerPassThroughConfig() {
        return this.customerPassThroughConfig;
    }
}

