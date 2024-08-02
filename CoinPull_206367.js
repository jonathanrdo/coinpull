ScriptAPI.register('CoinPull', true, 'Warre', 'nl.tribalwars@coma.innogames.de');

/* @name: coinPull @author: Warre */
var balanced = (typeof balanced === 'undefined') ? false : balanced;
var finished = (typeof finished === 'undefined') ? false : finished;

(async () => {
    const villageListKey = `ToxicDonuts_villagesList_${game_data.world}`;
    const searchParams = (type) => new URLSearchParams(window.location.search).get(type);
    const findKeyByValue = (obj, targetValue) => {
        return obj[targetValue]?.id;
    };

    const LZString = function() {
        var r = String.fromCharCode;

        var i = {
            compressToUTF16: function(o) {
                return null == o ? '' : i._compress(o, 15, function(o) {
                    return r(o + 32);
                }) + ' ';
            }, decompressFromUTF16: function(r) {
                return null == r ? '' : '' == r ? null : i._decompress(r.length, 16384, function(o) {
                    return r.charCodeAt(o) - 32;
                });
            }, compress: function(o) {
                return i._compress(o, 16, function(o) {
                    return r(o);
                });
            }, _compress: function(r, o, n) {
                if (null == r) return '';
                var e, t, i, s = {}, u = {}, a = '', p = '', c = '', l = 2, f = 3, h = 2, d = [], m = 0, v = 0;
                for (i = 0; i < r.length; i += 1) if (a = r.charAt(i), Object.prototype.hasOwnProperty.call(s, a) || (s[a] = f++, u[a] = !0), p = c + a, Object.prototype.hasOwnProperty.call(s, p)) c = p; else {
                    if (Object.prototype.hasOwnProperty.call(u, c)) {
                        if (c.charCodeAt(0) < 256) {
                            for (e = 0; e < h; e++) m <<= 1, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++;
                            for (t = c.charCodeAt(0), e = 0; e < 8; e++) m = m << 1 | 1 & t, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1;
                        } else {
                            for (t = 1, e = 0; e < h; e++) m = m << 1 | t, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t = 0;
                            for (t = c.charCodeAt(0), e = 0; e < 16; e++) m = m << 1 | 1 & t, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1;
                        }
                        0 == --l && (l = Math.pow(2, h), h++), delete u[c];
                    } else for (t = s[c], e = 0; e < h; e++) m = m << 1 | 1 & t, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1;
                    0 == --l && (l = Math.pow(2, h), h++), s[p] = f++, c = String(a);
                }
                if ('' !== c) {
                    if (Object.prototype.hasOwnProperty.call(u, c)) {
                        if (c.charCodeAt(0) < 256) {
                            for (e = 0; e < h; e++) m <<= 1, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++;
                            for (t = c.charCodeAt(0), e = 0; e < 8; e++) m = m << 1 | 1 & t, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1;
                        } else {
                            for (t = 1, e = 0; e < h; e++) m = m << 1 | t, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t = 0;
                            for (t = c.charCodeAt(0), e = 0; e < 16; e++) m = m << 1 | 1 & t, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1;
                        }
                        0 == --l && (l = Math.pow(2, h), h++), delete u[c];
                    } else for (t = s[c], e = 0; e < h; e++) m = m << 1 | 1 & t, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1;
                    0 == --l && (l = Math.pow(2, h), h++);
                }
                for (t = 2, e = 0; e < h; e++) m = m << 1 | 1 & t, v == o - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1;
                for (; ;) {
                    if (m <<= 1, v == o - 1) {
                        d.push(n(m));
                        break;
                    }
                    v++;
                }
                return d.join('');
            }, _decompress: function(o, n, e) {
                var t, i, s, u, a, p, c, l = [], f = 4, h = 4, d = 3, m = '', v = [],
                    g = { val: e(0), position: n, index: 1 };
                for (t = 0; t < 3; t += 1) l[t] = t;
                for (s = 0, a = Math.pow(2, 2), p = 1; p != a;) u = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = n, g.val = e(g.index++)), s |= (u > 0 ? 1 : 0) * p, p <<= 1;
                switch (s) {
                    case 0:
                        for (s = 0, a = Math.pow(2, 8), p = 1; p != a;) u = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = n, g.val = e(g.index++)), s |= (u > 0 ? 1 : 0) * p, p <<= 1;
                        c = r(s);
                        break;
                    case 1:
                        for (s = 0, a = Math.pow(2, 16), p = 1; p != a;) u = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = n, g.val = e(g.index++)), s |= (u > 0 ? 1 : 0) * p, p <<= 1;
                        c = r(s);
                        break;
                    case 2:
                        return '';
                }
                for (l[3] = c, i = c, v.push(c); ;) {
                    if (g.index > o) return '';
                    for (s = 0, a = Math.pow(2, d), p = 1; p != a;) u = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = n, g.val = e(g.index++)), s |= (u > 0 ? 1 : 0) * p, p <<= 1;
                    switch (c = s) {
                        case 0:
                            for (s = 0, a = Math.pow(2, 8), p = 1; p != a;) u = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = n, g.val = e(g.index++)), s |= (u > 0 ? 1 : 0) * p, p <<= 1;
                            l[h++] = r(s), c = h - 1, f--;
                            break;
                        case 1:
                            for (s = 0, a = Math.pow(2, 16), p = 1; p != a;) u = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = n, g.val = e(g.index++)), s |= (u > 0 ? 1 : 0) * p, p <<= 1;
                            l[h++] = r(s), c = h - 1, f--;
                            break;
                        case 2:
                            return v.join('');
                    }
                    if (0 == f && (f = Math.pow(2, d), d++), l[c]) m = l[c]; else {
                        if (c !== h) return null;
                        m = i + i.charAt(0);
                    }
                    v.push(m), l[h++] = i + m.charAt(0), i = m, 0 == --f && (f = Math.pow(2, d), d++);
                }
            }
        };
        return i;
    }();

    async function loadVillageData(type) {
        const lastUploadDate = parseInt(localStorage.getItem(`${villageListKey}_lastUploadVillageData`));

        if (villageListKey in localStorage && type !== 'update') {
            const localstorageString = localStorage.getItem(villageListKey);
            return JSON.parse(LZString.decompressFromUTF16(localstorageString));
        } else if (lastUploadDate + 60 * 60 * 1000 > Timing.getCurrentServerTime()) {
            return UI.ErrorMessage('You can only load village data once every hour.');
        } else {
            let villageOverviewList = {};
            await twLib.ajax({
                url: location.origin + '/map/village.txt', async: true, success: function (villages) {
                    villages.match(/[^\r\n]+/g).forEach(villageData => {
                        const splitVillageData = villageData.split(',');
                        const coordinates = splitVillageData[2] + "|" + splitVillageData[3];
                        villageOverviewList[coordinates] = {
                            id: splitVillageData[0], player_id: splitVillageData[4]
                        };
                    });
                    localStorage.setItem(villageListKey, LZString.compressToUTF16(JSON.stringify(villageOverviewList)));
                    localStorage.setItem(`${villageListKey}_lastUploadVillageData`, Timing.getCurrentServerTime());
                    UI.SuccessMessage(`Successfully stored ${Object.keys(villageOverviewList).length} villages for TW world: ${game_data.world} to localstorage`);
                }
            });
            return villageOverviewList;
        }
    }

    const redirectVillage = async (index) => {
        const villageData = await loadVillageData();
        const [villageCoord, villageGroup] = Object.entries(mintVillages)?.[index];
        const villageId = findKeyByValue(villageData, villageCoord);
        location.href = `${game_data.link_base_pure.replace(/village=\d+/, `village=${villageId}`)}market&mode=call&group=${villageGroup}&page=-1`;
    };

    if (game_data.screen === 'market' && (game_data.mode === 'call' || searchParams('mode') === 'call')) {
        var ratio = [33.73493975903614, 36.14457831325301, 30.120481927710846];

        function fillGs($row, capacity) {
            $row.find('td.wood, div.wood, td.stone, div.stone, td.iron, div.iron').each(function (index) {
                var max = $(this).data('res');
                var r = ratio[index];
                var need = parseInt((capacity / 100) * r);

                if (need > max) {
                    capacity = (max / r) * 100;
                    fillGs($row, capacity);
                } else {
                    $(this).find('input').first().val(need);
                }
            });
        }

        if (mintVillages.hasOwnProperty(game_data.village.coord) && !finished) {
            finished = $('input[name="select-village"]:not(:disabled)').length <= 0;
            if (location.href.match('group=' + mintVillages[game_data.village.coord])) {
                if ($('.res_checkbox:checked').length == 3) {
                    if ($('input[name="select-village"]:checked').length == 0) {
                        $('input[name="select-village"]').trigger('click');
                    } else {
                        if (!balanced) {
                            $('#village_list').find('.supply_location').each(function () {
                                fillGs($(this), $(this).data('capacity'));
                            });
                            balanced = true;
                        } else {
                            finished = true;
                            $('form[name="call-resources"]').find('.btn[type="submit"]').trigger('click');
                        }
                    }
                } else {
                    $('.res_checkbox').prop('checked', true).trigger('change');
                }
            } else {
                location.href = location.href + '&group=' + mintVillages[game_data.village.coord];
            }
        } else if (finished) {
            const keysArray = Object.keys(mintVillages);
            const currentVillageIndex = keysArray.indexOf(game_data.village.coord);
            const nextVillageIndex = currentVillageIndex + 1;

            if (currentVillageIndex >= 0 && keysArray.length > nextVillageIndex) {
                await redirectVillage(nextVillageIndex);
            } else {
                UI.SuccessMessage(`<p>Alle groepen zijn voltooid.</p><p><input style="height: 40px" type="button" class="btn redirectToFirstVillage" value="Terug naar het eerste dorp."></p>`, 15000);

                $(document).on('click', '.redirectToFirstVillage', async () => await redirectVillage(0));
            }
        } else {
            await redirectVillage(0);
        }
    } else {
        let redirectIndex = 0
        if (mintVillages.hasOwnProperty(game_data.village.coord)) {
            const keysArray = Object.keys(mintVillages);
            redirectIndex = keysArray.indexOf(game_data.village.coord);
        }
        await redirectVillage(redirectIndex);
    }
})();