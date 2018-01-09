var $gaic = {}
var z = [];
var global = new Object;
var $gwxc = 0;
var e_ = {}
if (typeof (global.entrys) === 'undefined') global.entrys = {};
e_ = global.entrys;
var d_ = {}
if (typeof (global.defines) === 'undefined') global.defines = {};
d_ = global.defines;
var f_ = {}
if (typeof (global.modules) === 'undefined') global.modules = {};
f_ = global.modules;
if (typeof (global.lastvalues) === 'undefined') global.lastvalues = [];
if (typeof (global.newvalues) === 'undefined') global.newvalues = [];
var p_ = {}
var z = [];
if (typeof (global.ops) === 'undefined') global.ops = [];
z = global.ops;
if (typeof (global.total_ops) === 'undefined') global.total_ops = 0;
if (typeof (global.idx_st) === 'undefined') global.idx_st = {};
if (typeof (global.idx_st.$gwx) === 'undefined') {
	global.idx_st.$gwx = global.total_ops;
}
var idx_st_ = global.idx_st.$gwx;
var root = {
	"tag": "page"
};
root.children = []

function _(a, b) {
	b && a.children.push(b);
}

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

function $gwh() {
	function x() {}
	x.prototype = {
		hn: function (obj) {
			if (typeof (obj) == 'object') {
				var cnt = 0;
				var any = false;
				for (var x in obj) {
					any |= x === '__value__';
					cnt++;
					if (cnt > 2) {
						break;
					}
				}
				return cnt == 2 && any && obj.hasOwnProperty('__wxspec__') ? "h" : "n";
			}
			return "n";
		},
		nh: function (obj, special) {
			return {
				__value__: obj,
				__wxspec__: special ? special : true
			}
		},
		rv: function (obj) {
			return this.hn(obj) === 'n' ? obj : this.rv(obj.__value__);
		}
	}
	return new x;
}
wh = $gwh();

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
				return "{{" + rev(ops[1], e, s, g, o).replace("{{", "").replace("}}", "") + "?'" + rev(ops[2], e, s, g, o) + "':'" + rev(ops[3], e, s, g, o) + "'}}";
				break;
			case '&&':
				_a = rev(ops[1], e, s, g, o);
				_c = should_pass_type_info && (wh.hn(_a) === 'h');
				_d = wh.rv(_a) ? rev(ops[2], e, s, g, o) : wh.rv(_a);
				_d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
				return rev(ops[1], e, s, g, o).replace("{{", "").replace("}}", "") + "&&" + rev(ops[2], e, s, g, o).replace("{{", "").replace("}}", "");
				break;
			case '||':
				_a = rev(ops[1], e, s, g, o);
				_c = should_pass_type_info && (wh.hn(_a) === 'h');
				_d = wh.rv(_a) ? wh.rv(_a) : rev(ops[2], e, s, g, o);
				_d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
				return rev(ops[1], e, s, g, o).replace("{{", "").replace("}}", "") + "||" + rev(ops[2], e, s, g, o).replace("{{", "").replace("}}", "");
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
				_a = rev(ops[1], e, s, g, o).replace("{{", "").replace("}}", "");
				_b = rev(ops[2], e, s, g, o).replace("{{", "").replace("}}", "");
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
				_a = rev(ops[1], e, s, g, o).replace("{{", "").replace("}}", "");
				_c = should_pass_type_info && (wh.hn(_a) == 'h');
				_d = !wh.rv(_a);
				return "" + rop + _a + "";
			case '~':
				_a = rev(ops[1], e, s, g, o).replace("{{", "").replace("}}", "");
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
					return "{{" + rev(ops[1], e, s, g, o) + "." + rev(ops[2], e, s, g, o) + "}}";
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
gra = $gwrt(true);
grb = $gwrt(false);

function _r(node, attrname, opindex, env, scope, global) {
	var o = {};
	var a = grb(z[opindex], env, scope, global, o);
	node.attr[attrname] = a;
	if (o.is_affected) {
		node.n.push(attrname);
	}
}

function _m(tag, attrs, env, scope, global) {
	var tmp = _n(tag);
	var base = 0;
	for (var i = 0; i < attrs.length; i += 2) {
		if (attrs[i + 1] < 0) {
			tmp.attr[attrs[i]] = true;
		} else {
			_r(tmp, attrs[i], base + attrs[i + 1], env, scope, global);
			if (base === 0)
				base = attrs[i + 1];
		}
	}
	return tmp;
}

function wfor(to_iter, func, env, _s, global, father, itemname, indexname, keyname, o) {
	var _n = wh.hn(to_iter) === 'n';
	var scope = wh.rv(_s);
	var rscope = o.ap ? wh.rv(global.f) : scope;
	var has_old_item = scope.hasOwnProperty(itemname);
	var has_old_index = scope.hasOwnProperty(indexname);
	var old_item = rscope[itemname];
	var old_index = scope[indexname];
	var full = Object.prototype.toString.call(wh.rv(to_iter));
	var type = full[8];
	if (type === 'N' && full[10] === 'l') type = 'X';
	var _y;
	if (_n) {
		if (type === 'A') {
			for (var i = 0; i < to_iter.length; i++) {
				rscope[itemname] = o.ap ? function () {
					return to_iter[i]
				} : to_iter[i];
				scope[indexname] = wh.nh(i, 'h');
				_y = keyname ? (keyname === "*this" ? _v(wh.rv(to_iter[i])) : _v(wh.rv(wh.rv(to_iter[i])[keyname]))) : _v();
				_(father, _y);
				global.valuekey = i + 1;
				func(env, scope, _y, global);
			}
		} else if (type === 'O') {
			var i = 0;
			for (var k in to_iter) {
				rscope[itemname] = o.ap ? function () {
					return to_iter[k]
				} : to_iter[k];
				scope[indexname] = wh.nh(k, 'h');
				_y = keyname ? (keyname === "*this" ? _v(wh.rv(to_iter[k])) : _v(wh.rv(wh.rv(to_iter[k])[keyname]))) : _v();
				_(father, _y);
				global.valuekey = i + 1;
				i++
				func(env, scope, _y, global);
			}
		} else if (type === 'S') { //to_iter.length
			for (var i = 0; i < 1; i++) {
				rscope[itemname] = o.ap ? function () {
					return to_iter
				} : to_iter;
				scope[indexname] = wh.nh(i, 'h'); //wx:key
				_y = _v(to_iter);
				_y["wx:key"] = keyname
				_(father, _y);
				global.valuekey = i + 1;
				func(env, scope, _y, global);
			}
		} else if (type === 'N') {
			for (var i = 0; i < to_iter; i++) {
				rscope[itemname] = o.ap ? function () {
					return i
				} : i;
				scope[indexname] = wh.nh(i, 'h');
				_y = _v(i);
				_(father, _y);
				global.valuekey = i + 1;
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
				rscope[itemname] = o.ap ? function () {
					return iter_item
				} : iter_item
				scope[indexname] = wh.nh(i, 'h');
				_y = keyname ? (keyname === "*this" ? _v(r_iter_item) : _v(wh.rv(r_iter_item[keyname]))) : _v();
				_(father, _y);
				global.valuekey = i + 1;
				func(env, scope, _y, global);
			}
		} else if (type === 'O') {
			var i = 0;
			for (var k in r_to_iter) {
				iter_item = r_to_iter[k];
				iter_item = wh.hn(iter_item) === 'n' ? wh.nh(iter_item, 'h') : iter_item;
				r_iter_item = wh.rv(iter_item);
				rscope[itemname] = o.ap ? function () {
					return iter_item
				} : iter_item;
				scope[indexname] = wh.nh(k, 'h');
				_y = keyname ? (keyname === "*this" ? _v(r_iter_item) : _v(wh.rv(r_iter_item[keyname]))) : _v();
				_(father, _y);
				global.valuekey = i + 1;
				i++;
				func(env, scope, _y, global);
			}
		} else if (type === 'S') {
			for (var i = 0; i < r_to_iter.length; i++) {
				iter_item = wh.nh(r_to_iter[i], 'h');
				rscope[itemname] = o.ap ? function () {
					return iter_item
				} : iter_item;
				scope[indexname] = wh.nh(i, 'h');
				_y = _v(to_iter[i] + i);
				_(father, _y);
				global.valuekey = i + 1;
				func(env, scope, _y, global);
			}
		} else if (type === 'N') {
			for (var i = 0; i < r_to_iter; i++) {
				iter_item = wh.nh(i, 'h');
				rscope[itemname] = o.ap ? function () {
					return iter_item
				} : iter_item;
				scope[indexname] = wh.nh(i, 'h');
				_y = _v(i);
				_(father, _y);
				global.valuekey = i + 1;
				func(env, scope, _y, global);
			}
		} else {}
	}
	if (has_old_item) {
		rscope[itemname] = old_item;
	} else {
		delete rscope[itemname];
	}
	if (has_old_index) {
		scope[indexname] = old_index;
	} else {
		delete scope[indexname];
	}
	global.valuekey = 0;
}

function _o(opindex, env, scope, global) {
	var nothing = {};
	return grb(z[opindex], env, scope, global, nothing);
}

function _1(opindex, env, scope, global, o) {
	var o = o || {};
	global.opindex = opindex + idx_st_;
	return gra(z[opindex + idx_st_], env, scope, global, o);
}

function _2(opindex, func, env, scope, global, father, itemname, indexname, keyname) {
	var o = {};
	var to_iter = _1(opindex, env, scope, global, o);
	wfor(to_iter, func, env, scope, global, father, itemname, indexname, keyname, o);
}

function _gv() {
	if (typeof (window.__webview_engine_version__) == 'undefined') return 0.0;
	return window.__webview_engine_version__;
}

function _w(tn, f, line, c) {
	console.warn('WXMLRT:' + f + ':template:' + line + ':' + c + ': Template `' + tn + '` not found.');
}

function _ai(i, p, e, me, r, c) {
	var x = _grp(p, e, me);
	if (x) i.push(x);
	else {
		i.push('');
		console.warn('WXMLRT:' + me + ':import:' + r + ':' + c + ': Path `' + p + '` not found from `' + me + '`.')
	}
}

function _grp(p, e, me) {
	if (p[0] != '/') {
		var mepart = me.split('/');
		mepart.pop();
		var ppart = p.split('/');
		for (var i = 0; i < ppart.length; i++) {
			if (ppart[i] == '..') mepart.pop();
			else if (!ppart[i]) continue;
			else mepart.push(ppart[i]);
		}
		p = mepart.join('/');
	}
	if (me[0] == '.' && p[0] == '/') p = '.' + p;
	if (e[p]) return p;
	if (e[p + '.wxml']) return p + '.wxml';
}

function _gd(p, c, e, d) {
	if (!c) return;
	console.log(d);
	if (d[p][c]) return d[p][c];
	for (var x = e[p].i.length - 1; x >= 0; x--) {
		if (e[p].i[x] && d[e[p].i[x]][c]) return d[e[p].i[x]][c]
	};
	for (var x = e[p].ti.length - 1; x >= 0; x--) {
		var q = _grp(e[p].ti[x], e, p);
		if (q && d[q][c]) return d[q][c]
	}
	var ii = _gapi(e, p);
	for (var x = 0; x < ii.length; x++) {
		if (ii[x] && d[ii[x]][c]) return d[ii[x]][c]
	}
	for (var k = e[p].j.length - 1; k >= 0; k--)
		if (e[p].j[k]) {
			for (var q = e[e[p].j[k]].ti.length - 1; q >= 0; q--) {
				var pp = _grp(e[e[p].j[k]].ti[q], e, p);
				if (pp && d[pp][c]) {
					return d[pp][c]
				}
			}
		}
}

function _gapi(e, p) {
	if (!p) return [];
	if ($gaic[p]) {
		return $gaic[p]
	};
	var ret = [],
		q = [],
		h = 0,
		t = 0,
		put = {},
		visited = {};
	q.push(p);
	visited[p] = true;
	t++;
	while (h < t) {
		var a = q[h++];
		for (var i = 0; i < e[a].ic.length; i++) {
			var nd = e[a].ic[i];
			var np = _grp(nd, e, a);
			if (np && !visited[np]) {
				visited[np] = true;
				q.push(np);
				t++;
			}
		}
		for (var i = 0; a != p && i < e[a].ti.length; i++) {
			var ni = e[a].ti[i];
			var nm = _grp(ni, e, a);
			if (nm && !put[nm]) {
				put[nm] = true;
				ret.push(nm);
			}
		}
	}
	$gaic[p] = ret;
	return ret;
}