function _v(k) {
    if (typeof (k) != 'undefined') {
        return {
            tag: 'block',
            'wx:for-items': k,
            children: []
        };
    }
    return {
        tag: 'virtual',
        children: []
    };
}



function _n(tag) {
    $gwxc++;
    if ($gwxc >= 16000) {
        throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'
    };
    return {
        tag: tag.substr(0, 3) == 'wx-' ? tag : '' + tag,
        attr: {},
        children: [],
        n: []
    }
}



function $gwrt(should_pass_type_info) {
    function ArithmeticEv(ops, e, s, g, o) {
        var rop = ops[0][1];
        var _a, _b, _c, _d, _aa, _bb;
        switch (rop) {
            case '?:':
                _a = rev(ops[1], e, s, g, o);
                _c = should_pass_type_info && (wh.hn(_a) === 'h');
                _d = wh.rv(_a) ? rev(ops[2], e, s, g, o) : rev(ops[3], e, s, g, o);
                _d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;

                if (typeof (_a) != "boolean"&&typeof (_a) != "number"&&_a!="") {
                    _a = _a.replace("{{", "").replace("}}", "");
                }
                return "{{" + _a + "?'" + rev(ops[2], e, s, g, o) + "':'" + rev(ops[3], e, s, g, o) + "'}}";
                break;
            case '&&':
                _a = rev(ops[1], e, s, g, o);
                _c = should_pass_type_info && (wh.hn(_a) === 'h');
                _d = wh.rv(_a) ? rev(ops[2], e, s, g, o) : wh.rv(_a);
                _d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;

                if (typeof (_a) != "boolean"&&typeof (_a) != "number"&&_a!="") {
                    _a = _a.replace("{{", "").replace("}}", "");
                }
                _b = rev(ops[2], e, s, g, o);
                if (typeof (_b) != "boolean"&&typeof (_b) != "number"&&_b!="") {
                    _b = _b.replace("{{", "").replace("}}", "");
                }
                return _a + "&&" + _b;
                break;
            case '||':
                _a = rev(ops[1], e, s, g, o);
                _c = should_pass_type_info && (wh.hn(_a) === 'h');
                _d = wh.rv(_a) ? wh.rv(_a) : rev(ops[2], e, s, g, o);
                _d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;

                if (typeof (_a) != "boolean"&&typeof (_a) != "number"&&_a!="") {
                    _a = _a.replace("{{", "").replace("}}", "");
                }
                _b = rev(ops[2], e, s, g, o);
                if (typeof (_b) != "boolean"&&typeof (_b) != "number"&&_b!="") {
                    _b = _b.replace("{{", "").replace("}}", "");
                }
                return _a + "||" + _b;
                break;
            case '+':
            case '*':
            case '/':
            case '%':
            case '|':
            case '^':
            case '&':
            case '===':
            case '==':
            case '!=':
            case '!==':
            case '>=':
            case '<=':
            case '>':
            case '<':
            case '<<':
            case '>>':
                _a = rev(ops[1], e, s, g, o);
                if (typeof (_a) != "boolean"&&typeof (_a) != "number"&&_a!="") {
                    _a = _a.replace("{{", "").replace("}}", "");
                }
                _b = rev(ops[2], e, s, g, o);
                if (typeof (_b) != "boolean"&&typeof (_b) != "number"&&_b!="") {
                    _b = _b.replace("{{", "").replace("}}", "");
                }
                _c = should_pass_type_info && (wh.hn(_a) === 'h' || wh.hn(_b) === 'h');
                switch (rop) {
                    case '+':
                        _d = wh.rv(_a) + wh.rv(_b);
                        break;
                    case '*':
                        _d = wh.rv(_a) * wh.rv(_b);
                        break;
                    case '/':
                        _d = wh.rv(_a) / wh.rv(_b);
                        break;
                    case '%':
                        _d = wh.rv(_a) % wh.rv(_b);
                        break;
                    case '|':
                        _d = wh.rv(_a) | wh.rv(_b);
                        break;
                    case '^':
                        _d = wh.rv(_a) ^ wh.rv(_b);
                        break;
                    case '&':
                        _d = wh.rv(_a) & wh.rv(_b);
                        break;
                    case '===':
                        _d = wh.rv(_a) === wh.rv(_b);
                        break;
                    case '==':
                        _d = wh.rv(_a) == wh.rv(_b);
                        break;
                    case '!=':
                        _d = wh.rv(_a) != wh.rv(_b);
                        break;
                    case '!==':
                        _d = wh.rv(_a) !== wh.rv(_b);
                        break;
                    case '>=':
                        _d = wh.rv(_a) >= wh.rv(_b);
                        break;
                    case '<=':
                        _d = wh.rv(_a) <= wh.rv(_b);
                        break;
                    case '>':
                        _d = wh.rv(_a) > wh.rv(_b);
                        break;
                    case '<':
                        _d = wh.rv(_a) < wh.rv(_b);
                        break;
                    case '<<':
                        _d = wh.rv(_a) << wh.rv(_b);
                        break;
                    case '>>':
                        _d = wh.rv(_a) >> wh.rv(_b);
                        break;
                    default:
                        break;
                }
                return "" + _a + rop + _b + "";
                break;
            case '-':
                _a = ops.length === 3 ? rev(ops[1], e, s, g, o) : 0;
                _b = ops.length === 3 ? rev(ops[2], e, s, g, o) : rev(ops[1], e, s, g, o);
                _c = should_pass_type_info && (wh.hn(_a) === 'h' || wh.hn(_b) === 'h');
                _d = _c ? wh.rv(_a) - wh.rv(_b) : _a - _b;
                return "" + _a + rop + _b + "";
                break;
            case '!':
                _a = rev(ops[1], e, s, g, o);
				if (typeof (_a) != "boolean"&&typeof (_a) != "number"&&_a!="") {
					_a = _a.replace("{{", "").replace("}}", "");
				}
                _c = should_pass_type_info && (wh.hn(_a) == 'h');
                _d = !wh.rv(_a);
                return "" + rop + _a + "";
            case '~':
                _a = rev(ops[1], e, s, g, o);
				if (typeof (_a) != "boolean"&&typeof (_a) != "number"&&_a!="") {
					_a = _a.replace("{{", "").replace("}}", "");
				}
                _c = should_pass_type_info && (wh.hn(_a) == 'h');
                _d = ~wh.rv(_a);
                return "" + rop + _a + "";
            default:
                $gwn('unrecognized op' + rop);
        }
    }

    function rev(ops, e, s, g, o) {
        var op = ops[0];
        if (typeof (op) === 'object') {
            var vop = op[0];
            var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
            switch (vop) {
                case 2:
                    return ArithmeticEv(ops, e, s, g, o);
                    break;
                case 4:
                    return rev(ops[1], e, s, g, o);
                    break;
                case 5:
                    switch (ops.length) {
                        case 2:
                            return should_pass_type_info ? [rev(ops[1], e, s, g, o)] : [wh.rv(rev(ops[1], e, s, g, o))];
                            break;
                        case 1:
                            return [];
                            break;
                        default:
                            _a = rev(ops[1], e, s, g, o);
                            _a.push(should_pass_type_info ? rev(ops[2], e, s, g, o) : wh.rv(rev(ops[2], e, s, g, o)));
                            return _a;
                            break;
                    }
                    break;
                case 6:
                    _a = rev(ops[1], e, s, g, o);
					if (typeof (_a) != "boolean"&&typeof (_a) != "number"&&_a!="") {
						_a = _a.replace("{{", "").replace("}}", "");
					}
					_b = rev(ops[2], e, s, g, o);
					if (typeof (_b) != "boolean"&&typeof (_b) != "number"&&_b!="") {
						_b = _b.replace("{{", "").replace("}}", "");
					}
					if(typeof (_b) == "number"){
						return "{{" + _a + "[" + _b + "]}}";
					}
                    return "{{" + _a + "." + _b + "}}";
                    _ta = wh.hn(_a) === 'h';
                    _aa = _ta ? wh.rv(_a) : _a;
                    o.is_affected |= _ta;
                    if (should_pass_type_info) {
                        if (_aa === null || typeof (_aa) === 'undefined') {
                            return _ta ? wh.nh(undefined, 'e') : undefined;
                        }
                        _b = rev(ops[2], e, s, g, o);
                        _tb = wh.hn(_b) === 'h';
                        _bb = _tb ? wh.rv(_b) : _b;
                        o.is_affected |= _tb;
                        if (_bb === null || typeof (_bb) === 'undefined') {
                            return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
                        }
                        _d = _aa[_bb];
                        _td = wh.hn(_d) === 'h';
                        o.is_affected |= _td;
                        return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
                    } else {
                        if (_aa === null || typeof (_aa) === 'undefined') {
                            return undefined;
                        }
                        _b = rev(ops[2], e, s, g, o);
                        _tb = wh.hn(_b) === 'h';
                        _bb = _tb ? wh.rv(_b) : _b;
                        o.is_affected |= _tb;
                        if (_bb === null || typeof (_bb) === 'undefined') {
                            return undefined;
                        }
                        _d = _aa[_bb];
                        _td = wh.hn(_d) === 'h';
                        o.is_affected |= _td;
                        return _td ? wh.rv(_d) : _d;
                    }
                case 7:
                    switch (ops[1][0]) {
                        case 11:
                            o.is_affected |= wh.hn(g) === 'h';
                            return g;
                        case 3:
                            _s = wh.rv(s);
                            _e = wh.rv(e);
                            _b = ops[1][1];
                            _a = _s && _s.hasOwnProperty(_b) ? s : _e && (_e.hasOwnProperty(_b) ? e : undefined);
                            if (should_pass_type_info) {
                                if (_a) {
                                    _ta = wh.hn(_a) === 'h';
                                    _aa = _ta ? wh.rv(_a) : _a;
                                    _d = _aa[_b];
                                    _td = wh.hn(_d) === 'h';
                                    o.is_affected |= _ta || _td;
                                    _d = _ta && !_td ? wh.nh(_d, 'e') : _d;
                                    return "" + ops[1][1] + "";
                                }
                            } else {
                                if (_a) {
                                    _ta = wh.hn(_a) === 'h';
                                    _aa = _ta ? wh.rv(_a) : _a;
                                    _d = _aa[_b];
                                    _td = wh.hn(_d) === 'h';
                                    o.is_affected |= _ta || _td;
                                    if (!new RegExp("{{").test(_d)) {
                                        return "" + _d + "";
                                    }
                                    return "" + ops[1][1] + "";
                                }
                            }
                            return "{{" + ops[1][1] + "}}";
                    }
                    break;
                case 8:
                    _a = {};
                    _a[ops[1]] = rev(ops[2], e, s, g, o);
                    return _a;
                    break;
                case 9:
                    _a = rev(ops[1], e, s, g, o);
                    _b = rev(ops[2], e, s, g, o);

                    function merge(_a, _b, _ow) {
                        _ta = wh.hn(_a) === 'h';
                        _tb = wh.hn(_b) === 'h';
                        _aa = wh.rv(_a);
                        _bb = wh.rv(_b);
                        if (should_pass_type_info) {
                            if (_tb) {
                                for (var k in _bb) {
                                    if (_ow || !_aa.hasOwnProperty(k))
                                        _aa[k] = wh.nh(_bb[k], 'e');
                                }
                            } else {
                                for (var k in _bb) {
                                    if (_ow || !_aa.hasOwnProperty(k)) {
                                        _aa[k] = _bb[k];
                                    }
                                }
                            }
                        } else {
                            for (var k in _bb) {
                                if (_ow || _aa.hasOwnProperty(k)) {
                                    _aa[k] = wh.rv(_bb[k]);
                                }
                            }
                        }
                        return _a;
                    }
                    var _c = _a
                    var _ow = true
                    if (typeof (ops[1][0]) === "object" && ops[1][0][0] === 10) {
                        _a = _b
                        _b = _c
                        _ow = false
                    }
                    if (typeof (ops[1][0]) === "object" && ops[1][0][0] === 10) {
                        var _r = {}
                        return merge(merge(_r, _a, _ow), _b, _ow);
                    } else
                        return merge(_a, _b, _ow);
                    break;
                case 10:
                    return should_pass_type_info ? rev(ops[1], e, s, g, o) : wh.rv(rev(ops[1], e, s, g, o));
            }
        } else {
            if (op === 3 || op === 1) {
                return ops[1];
            } else if (op === 11) {
                var _a = '';
                for (var i = 1; i < ops.length; i++) {
                    var xp = wh.rv(rev(ops[i], e, s, g, o));
                    _a += typeof (xp) === 'undefined' ? '' : xp;
                }
                return _a;
            }
        }
    }
    return rev;
}



function wfor(to_iter, func, env, _s, global, father, itemname, indexname, keyname, o) {
	var _n = wh.hn(to_iter) === 'n';
	var scope = wh.rv(_s);
	var has_old_item = scope.hasOwnProperty(itemname);
	var has_old_index = scope.hasOwnProperty(indexname);
	var old_item = scope[itemname];
	var old_index = scope[indexname];
	var full = Object.prototype.toString.call(wh.rv(to_iter));
	var type = full[8];
    if (type === 'N' && full[10] === 'l') type = 'X';
    var _y;
    if (_n) {
        if (type === 'A') {
            for (var i = 0; i < to_iter.length; i++) {
							scope[itemname] = to_iter[i];
							scope[indexname] = wh.nh(i, 'h');
							_y = keyname ? (keyname === "*this" ? _v(wh.rv(to_iter[i])) : _v(wh.rv(wh.rv(to_iter[i])[keyname]))) : _v();
							_(father, _y);
							func(env, scope, _y, global);
						}
        } else if (type === 'O') {
            for (var k in to_iter) {
							scope[itemname] = to_iter[k];
							scope[indexname] = wh.nh(k, 'h');
							_y = keyname ? (keyname === "*this" ? _v(wh.rv(to_iter[k])) : _v(wh.rv(wh.rv(to_iter[k])[keyname]))) : _v();
							_(father, _y);
							func(env, scope, _y, global);
						}
        } else if (type === 'S') { //to_iter.length
            for (var i = 0; i < 1; i++) {
							scope[itemname] = to_iter[i];
							scope[indexname] = wh.nh(i, 'h');
                _y = _v(to_iter[i] + i);
                _y["wx:key"] = keyname
                _(father, _y);
                func(env, scope, _y, global);
            }
        } else if (type === 'N') {
            for (var i = 0; i < to_iter; i++) {
							scope[itemname] = i;
							scope[indexname] = wh.nh(i, 'h');
							_y = _v(i);
							_(father, _y);
							func(env, scope, _y, global);
						}
        } else {}
    } else {
					var r_to_iter = wh.rv(to_iter);
					var r_iter_item, iter_item;
					if (type === 'A') {
						for (var i = 0; i < r_to_iter.length; i++) {
							iter_item = r_to_iter[i];
							iter_item = wh.hn(iter_item) === 'n' ? wh.nh(iter_item, 'h') : iter_item;
							r_iter_item = wh.rv(iter_item);
							scope[itemname] = iter_item
							scope[indexname] = wh.nh(i, 'h');
							_y = keyname ? (keyname === "*this" ? _v(r_iter_item) : _v(wh.rv(r_iter_item[keyname]))) : _v();
							_(father, _y);
							func(env, scope, _y, global);
						}
					} else if (type === 'O') {
						for (var k in r_to_iter) {
							iter_item = r_to_iter[k];
							iter_item = wh.hn(iter_item) === 'n' ? wh.nh(iter_item, 'h') : iter_item;
							r_iter_item = wh.rv(iter_item);
							scope[itemname] = iter_item;
							scope[indexname] = wh.nh(k, 'h');
							_y = keyname ? (keyname === "*this" ? _v(r_iter_item) : _v(wh.rv(r_iter_item[keyname]))) : _v();
							_(father, _y);
							func(env, scope, _y, global);
						}
					} else if (type === 'S') {
						for (var i = 0; i < r_to_iter.length; i++) {
							scope[itemname] = wh.nh(r_to_iter[i], 'h');
							scope[indexname] = wh.nh(i, 'h');
							_y = _v(to_iter[i] + i);
							_(father, _y);
							func(env, scope, _y, global);
						}
					} else if (type === 'N') {
						for (var i = 0; i < r_to_iter; i++) {
							scope[itemname] = wh.nh(i, 'h');
							scope[indexname] = wh.nh(i, 'h');
							_y = _v(i);
							_(father, _y);
							func(env, scope, _y, global);
						}
					} else {}
				}
				if (has_old_item) {
					scope[itemname] = old_item;
				} else {
					delete scope[itemname];
				}
				if (has_old_index) {
					scope[indexname] = old_index;
				} else {
					delete scope[indexname];
				}
}



if ((path && e_[path]) || (path == "ana")) {
    window.__wxml_comp_version__ = 0.02
    return function (env, dd, global) {
        if (path == "ana") {
            for (var ijk in d_) {
                console.log(ijk);
                tmp_path = ijk;
                $gwxc = 0;
                var root = {
                    "tag": "page"
                };
                root.children = []
                var main = e_[tmp_path].f
                if (typeof (window.__webview_engine_version__) != 'undefined' && window.__webview_engine_version__ + 1e-6 >=
                    0.02 + 1e-6 && window.__mergeData__) {
                    env = window.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    if (typeof (window.__webview_engine_version__) == 'undefined' || window.__webview_engine_version__ + 1e-6 <
                        0.01 + 1e-6) {
                        _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                }
                console.log(ana(root));
            }
        } else {
            $gwxc = 0;
            var root = {
                "tag": "page"
            };
            root.children = []
            var main = e_[path].f
            if (typeof (window.__webview_engine_version__) != 'undefined' && window.__webview_engine_version__ + 1e-6 >=
                0.02 + 1e-6 && window.__mergeData__) {
                env = window.__mergeData__(env, dd);
            }
            try {
                main(env, {}, root, global);
                if (typeof (window.__webview_engine_version__) == 'undefined' || window.__webview_engine_version__ + 1e-6 <
                    0.01 + 1e-6) {
                    _ev(root);
                }
            } catch (err) {
                console.log(err)
            }
            console.log(ana(root));

        }
    }
}
