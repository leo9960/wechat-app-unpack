	var __wxAppData = {};
	var __wxRoute;
	var __wxRouteBegin;
	var global = {};
	define("config.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			var t = "14592619.qcloud.la",
				e = {
					host: t,
					loginUrl: "https://" + t + "/login",
					requestUrl: "https://" + t + "/testRequest",
					openIdUrl: "https://" + t + "/openid",
					tunnelUrl: "https://" + t + "/tunnel",
					paymentUrl: "https://" + t + "/payment",
					templateMessageUrl: "https://" + t + "/templateMessage",
					uploadFileUrl: "https://" + t + "/upload",
					downloadExampleUrl: "https://" + t + "/static/weapp.jpg"
				};
			module.exports = e
		}();
	});
	define("page/API/pages/canvas/example.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			var e = {};
			e.rotate = function (e) {
				e.beginPath(), e.rotate(10 * Math.PI / 180), e.rect(225, 75, 20, 10), e.fill()
			}, e.scale = function (e) {
				e.beginPath(), e.rect(25, 25, 50, 50), e.stroke(), e.scale(2, 2), e.beginPath(), e.rect(25, 25, 50, 50), e.stroke()
			}, e.reset = function (e) {
				e.beginPath(), e.setFillStyle("#000000"), e.setStrokeStyle("#000000"), e.setFontSize(10), e.setShadow(0, 0, 0, "rgba(0, 0, 0, 0)"), e.setLineCap("butt"), e.setLineJoin("miter"), e.setLineWidth(1), e.setMiterLimit(10)
			}, e.translate = function (e) {
				e.beginPath(), e.rect(10, 10, 100, 50), e.fill(), e.translate(70, 70), e.beginPath(), e.fill()
			}, e.save = function (e) {
				e.beginPath(), e.setStrokeStyle("#00ff00"), e.save(), e.scale(2, 2), e.setStrokeStyle("#ff0000"), e.rect(0, 0, 100, 100), e.stroke(), e.restore(), e.rect(0, 0, 50, 50), e.stroke()
			}, e.restore = function (e) {
				[3, 2, 1].forEach(function (t) {
					e.beginPath(), e.save(), e.scale(t, t), e.rect(10, 10, 100, 100), e.stroke(), e.restore()
				})
			}, e.drawImage = function (e) {
				e.drawImage("/image/wechat.png", 0, 0)
			}, e.fillText = function (e) {
				e.setStrokeStyle("#ff0000"), e.beginPath(), e.moveTo(0, 10), e.lineTo(300, 10), e.stroke(), e.setFontSize(10), e.fillText("Hello World", 0, 30), e.setFontSize(20), e.fillText("Hello World", 100, 30), e.beginPath(), e.moveTo(0, 30), e.lineTo(300, 30), e.stroke()
			}, e.fill = function (e) {
				e.beginPath(), e.rect(20, 20, 150, 100), e.setStrokeStyle("#00ff00"), e.fill()
			}, e.stroke = function (e) {
				e.beginPath(), e.moveTo(20, 20), e.lineTo(20, 100), e.lineTo(70, 100), e.setStrokeStyle("#00ff00"), e.stroke()
			}, e.clearRect = function (e) {
				e.setFillStyle("#ff0000"), e.beginPath(), e.rect(0, 0, 300, 150), e.fill(), e.clearRect(20, 20, 100, 50)
			}, e.beginPath = function (e) {
				e.beginPath(), e.setLineWidth(5), e.setStrokeStyle("#ff0000"), e.moveTo(0, 75), e.lineTo(250, 75), e.stroke(), e.beginPath(), e.setStrokeStyle("#0000ff"), e.moveTo(50, 0), e.lineTo(150, 130), e.stroke()
			}, e.closePath = function (e) {
				e.beginPath(), e.moveTo(20, 20), e.lineTo(20, 100), e.lineTo(70, 100), e.closePath(), e.stroke()
			}, e.moveTo = function (e) {
				e.beginPath(), e.moveTo(0, 0), e.lineTo(300, 150), e.stroke()
			}, e.lineTo = function (e) {
				e.beginPath(), e.moveTo(20, 20), e.lineTo(20, 100), e.lineTo(70, 100), e.stroke()
			}, e.rect = function (e) {
				e.beginPath(), e.rect(20, 20, 150, 100), e.stroke()
			}, e.arc = function (e) {
				e.beginPath(), e.arc(75, 75, 50, 0, 2 * Math.PI, !0), e.moveTo(110, 75), e.arc(75, 75, 35, 0, Math.PI, !1), e.moveTo(65, 65), e.arc(60, 65, 5, 0, 2 * Math.PI, !0), e.moveTo(95, 65), e.arc(90, 65, 5, 0, 2 * Math.PI, !0), e.stroke()
			}, e.quadraticCurveTo = function (e) {
				e.beginPath(), e.moveTo(20, 20), e.quadraticCurveTo(20, 100, 200, 20), e.stroke()
			}, e.bezierCurveTo = function (e) {
				e.beginPath(), e.moveTo(20, 20), e.bezierCurveTo(20, 100, 200, 100, 200, 20), e.stroke()
			}, e.setFillStyle = function (e) {
				["#fef957", "rgb(242,159,63)", "rgb(242,117,63)", "#e87e51"].forEach(function (t, o) {
					e.setFillStyle(t), e.beginPath(), e.rect(0 + 75 * o, 0, 50, 50), e.fill()
				})
			}, e.setStrokeStyle = function (e) {
				["#fef957", "rgb(242,159,63)", "rgb(242,117,63)", "#e87e51"].forEach(function (t, o) {
					e.setStrokeStyle(t), e.beginPath(), e.rect(0 + 75 * o, 0, 50, 50), e.stroke()
				})
			}, e.setGlobalAlpha = function (e) {
				e.setFillStyle("#000000"), [1, .5, .1].forEach(function (t, o) {
					e.setGlobalAlpha(t), e.beginPath(), e.rect(0 + 75 * o, 0, 50, 50), e.fill()
				})
			}, e.setShadow = function (e) {
				e.beginPath(), e.setShadow(10, 10, 10, "rgba(0, 0, 0, 199)"), e.rect(10, 10, 100, 100), e.fill()
			}, e.setFontSize = function (e) {
				[10, 20, 30, 40].forEach(function (t, o) {
					e.setFontSize(t), e.fillText("Hello, world", 20, 20 + 40 * o)
				})
			}, e.setLineCap = function (e) {
				e.setLineWidth(10), ["butt", "round", "square"].forEach(function (t, o) {
					e.beginPath(), e.setLineCap(t), e.moveTo(20, 20 + 20 * o), e.lineTo(100, 20 + 20 * o), e.stroke()
				})
			}, e.setLineJoin = function (e) {
				e.setLineWidth(10), ["bevel", "round", "miter"].forEach(function (t, o) {
					e.beginPath(), e.setLineJoin(t), e.moveTo(20 + 80 * o, 20), e.lineTo(100 + 80 * o, 50), e.lineTo(20 + 80 * o, 100), e.stroke()
				})
			}, e.setLineWidth = function (e) {
				[2, 4, 6, 8, 10].forEach(function (t, o) {
					e.beginPath(), e.setLineWidth(t), e.moveTo(20, 20 + 20 * o), e.lineTo(100, 20 + 20 * o), e.stroke()
				})
			}, e.setMiterLimit = function (e) {
				e.setLineWidth(4), [2, 4, 6, 8, 10].forEach(function (t, o) {
					e.beginPath(), e.setMiterLimit(t), e.moveTo(20 + 80 * o, 20), e.lineTo(100 + 80 * o, 50), e.lineTo(20 + 80 * o, 100), e.stroke()
				})
			}, module.exports = e
		}();
	});
	define("page/API/pages/custom-service/custom-service.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({})
		}();
	});
	define("page/API/pages/sendMessage/sendMessage.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({})
		}();
	});
	define("util/util.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";

			function t(t) {
				if ("number" != typeof t || t < 0) return t;
				var r = parseInt(t / 3600);
				t %= 3600;
				var n = parseInt(t / 60);
				return t = parseInt(t % 60), [r, n, t].map(function (t) {
					return t = t.toString(), t[1] ? t : "0" + t
				}).join(":")
			}

			function r(t, r) {
				return "string" == typeof t && "string" == typeof r && (t = parseFloat(t), r = parseFloat(r)), t = t.toFixed(2), r = r.toFixed(2), {
					longitude: t.toString().split("."),
					latitude: r.toString().split(".")
				}
			}
			module.exports = {
				formatTime: t,
				formatLocation: r
			}
		}();
	});
	define("vendor/qcloud-weapp-client-sdk/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			var e = require("./lib/constants"),
				r = require("./lib/login"),
				i = require("./lib/session"),
				n = require("./lib/request"),
				o = require("./lib/tunnel"),
				s = module.exports = {
					login: r.login,
					setLoginUrl: r.setLoginUrl,
					LoginError: r.LoginError,
					clearSession: i.clear,
					request: n.request,
					RequestError: n.RequestError,
					Tunnel: o
				};
			Object.keys(e).forEach(function (r) {
				0 === r.indexOf("ERR_") && (s[r] = e[r])
			})
		}();
	});
	define("vendor/qcloud-weapp-client-sdk/lib/constants.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			module.exports = {
				WX_HEADER_CODE: "X-WX-Code",
				WX_HEADER_ENCRYPTED_DATA: "X-WX-Encrypted-Data",
				WX_HEADER_IV: "X-WX-IV",
				WX_HEADER_ID: "X-WX-Id",
				WX_HEADER_SKEY: "X-WX-Skey",
				WX_SESSION_MAGIC_ID: "F2C224D4-2BCE-4C64-AF9F-A6D872000D1A",
				ERR_INVALID_PARAMS: "ERR_INVALID_PARAMS",
				ERR_WX_LOGIN_FAILED: "ERR_WX_LOGIN_FAILED",
				ERR_WX_GET_USER_INFO: "ERR_WX_GET_USER_INFO",
				ERR_LOGIN_TIMEOUT: "ERR_LOGIN_TIMEOUT",
				ERR_LOGIN_FAILED: "ERR_LOGIN_FAILED",
				ERR_LOGIN_SESSION_NOT_RECEIVED: "ERR_LOGIN_MISSING_SESSION",
				ERR_INVALID_SESSION: "ERR_INVALID_SESSION",
				ERR_CHECK_LOGIN_FAILED: "ERR_CHECK_LOGIN_FAILED"
			}
		}();
	});
	define("vendor/qcloud-weapp-client-sdk/lib/login.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			var e = require("./utils"),
				n = require("./constants"),
				i = require("./session"),
				r = function () {
					function e(e, n) {
						Error.call(this, n), this.type = e, this.message = n
					}
					return e.prototype = new Error, e.prototype.constructor = e, e
				}(),
				s = function (e) {
					wx.login({
						success: function (i) {
							wx.getUserInfo({
								success: function (n) {
									e(null, {
										code: i.code,
										encryptedData: n.encryptedData,
										iv: n.iv,
										userInfo: n.userInfo
									})
								},
								fail: function (i) {
									var s = new r(n.ERR_WX_GET_USER_INFO, "获取微信用户信息失败，请检查网络状态");
									s.detail = i, e(s, null)
								}
							})
						},
						fail: function (i) {
							var s = new r(n.ERR_WX_LOGIN_FAILED, "微信登录失败，请检查网络状态");
							s.detail = i, e(s, null)
						}
					})
				},
				o = function () {},
				t = {
					method: "GET",
					success: o,
					fail: o,
					loginUrl: null
				},
				u = function (o) {
					if (o = e.extend({}, t, o), !t.loginUrl) return void o.fail(new r(n.ERR_INVALID_PARAMS, "登录错误：缺少登录地址，请通过 setLoginUrl() 方法设置登录地址"));
					var u = function () {
							return s(function (e, s) {
								if (e) return void o.fail(e);
								var t = s.userInfo,
									u = s.code,
									c = s.encryptedData,
									l = s.iv,
									a = {};
								a[n.WX_HEADER_CODE] = u, a[n.WX_HEADER_ENCRYPTED_DATA] = c, a[n.WX_HEADER_IV] = l, wx.request({
									url: o.loginUrl,
									header: a,
									method: o.method,
									data: o.data,
									success: function (e) {
										var s = e.data;
										if (s && s[n.WX_SESSION_MAGIC_ID])
											if (s.session) s.session.userInfo = t, i.set(s.session), o.success(t);
											else {
												var u = "登录失败(" + s.error + ")：" + (s.message || "未知错误"),
													c = new r(n.ERR_LOGIN_SESSION_NOT_RECEIVED, u);
												o.fail(c)
											}
										else {
											var u = "登录请求没有包含会话响应，请确保服务器处理 `" + o.loginUrl + "` 的时候正确使用了 SDK 输出登录结果",
												c = new r(n.ERR_LOGIN_SESSION_NOT_RECEIVED, u);
											o.fail(c)
										}
									},
									fail: function (e) {
										var i = new r(n.ERR_LOGIN_FAILED, "登录失败，可能是网络错误或者服务器发生异常");
										o.fail(i)
									}
								})
							})
						},
						c = i.get();
					c ? wx.checkSession({
						success: function () {
							o.success(c.userInfo)
						},
						fail: function () {
							i.clear(), u()
						}
					}) : u()
				},
				c = function (e) {
					t.loginUrl = e
				};
			module.exports = {
				LoginError: r,
				login: u,
				setLoginUrl: c
			}
		}();
	});
	define("vendor/qcloud-weapp-client-sdk/lib/request.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";

			function e(e) {
				function s() {
					i.login({
						success: f,
						fail: m
					})
				}

				function f() {
					var r = l(n.get());
					wx.request(t.extend({}, e, {
						header: t.extend({}, _, r),
						success: function (e) {
							var r = e.data;
							if (r && r[o.WX_SESSION_MAGIC_ID]) {
								n.clear();
								var t, i;
								if (r.error === o.ERR_INVALID_SESSION) {
									if (!v) return v = !0, void s();
									i = "登录态已过期", t = new c(r.error, i)
								} else i = "鉴权服务器检查登录态发生错误(" + (r.error || "OTHER") + ")：" + (r.message || "未知错误"), t = new c(o.ERR_CHECK_LOGIN_FAILED, i);
								return void m(t)
							}
							S.apply(null, arguments)
						},
						fail: m,
						complete: u
					}))
				}
				if ("object" !== (void 0 === e ? "undefined" : r(e))) {
					var a = "请求传参应为 object 类型，但实际传了 " + (void 0 === e ? "undefined" : r(e)) + " 类型";
					throw new c(o.ERR_INVALID_PARAMS, a)
				}
				var p = e.login,
					y = e.success || u,
					d = e.fail || u,
					E = e.complete || u,
					_ = e.header || {},
					S = function () {
						y.apply(null, arguments), E.apply(null, arguments)
					},
					m = function (e) {
						d.call(null, e), E.call(null, e)
					},
					v = !1;
				p ? s() : f()
			}
			var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
					return typeof e
				} : function (e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				},
				o = require("./constants"),
				t = require("./utils"),
				n = require("./session"),
				i = require("./login"),
				u = function () {},
				l = function (e) {
					var r = {};
					return e && e.id && e.skey && (r[o.WX_HEADER_ID] = e.id, r[o.WX_HEADER_SKEY] = e.skey), r
				},
				c = function () {
					function e(e, r) {
						Error.call(this, r), this.type = e, this.message = r
					}
					return e.prototype = new Error, e.prototype.constructor = e, e
				}();
			module.exports = {
				RequestError: c,
				request: e
			}
		}();
	});
	define("vendor/qcloud-weapp-client-sdk/lib/session.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			var e = require("./constants"),
				t = "weapp_session_" + e.WX_SESSION_MAGIC_ID,
				n = {
					get: function () {
						return wx.getStorageSync(t) || null
					},
					set: function (e) {
						wx.setStorageSync(t, e)
					},
					clear: function () {
						wx.removeStorageSync(t)
					}
				};
			module.exports = n
		}();
	});
	define("vendor/qcloud-weapp-client-sdk/lib/tunnel.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";

			function t(p) {
				function R() {
					return Z.status === c
				}

				function O() {
					return Z.status === i
				}

				function d() {
					return Z.status === s
				}

				function m() {
					return Z.status === u
				}

				function _(t) {
					Z.status !== t && (Z.status = t)
				}

				function g(t, n) {
					"function" == typeof n && tt.push([t, n])
				}

				function y(t, n) {
					tt.forEach(function (e) {
						var o = e[0],
							c = e[1];
						"*" === o ? c(t, n) : o === t && c(n)
					})
				}

				function I(t, n) {
					$.indexOf(t) > -1 && (t = "@" + t), y(t, n)
				}

				function v() {
					function t(t) {
						nt ? (_(c), y("error", {
							code: r,
							message: "连接信道服务失败，网络错误或者信道服务没有正确响应",
							detail: t || null
						})) : Y(t)
					}
					et || (et = !0, _(nt ? i : u), n.request({
						url: p,
						method: "GET",
						success: function (n) {
							200 == +n.statusCode && n.data && n.data.url ? A(Z.socketUrl = n.data.url) : t(n)
						},
						fail: t,
						complete: function () {
							return et = !1
						}
					}))
				}

				function A(t) {
					e.listen({
						onOpen: k,
						onMessage: w,
						onClose: H,
						onError: W
					}), wx.connectSocket({
						url: t
					}), nt = !1
				}

				function k() {
					O() ? y("connect") : m() && (y("reconnect"), B()), _(s), G(), K()
				}

				function w(t) {
					V(t.data)
				}

				function U(t) {
					d() ? x(t) : ot.push(t)
				}

				function x(t) {
					var n = [t.type];
					t.content && n.push(JSON.stringify(t.content)), wx.sendSocketMessage({
						data: n.join(":"),
						fail: W
					})
				}

				function G() {
					ot.forEach(U), ot.length = 0
				}

				function M(t, n) {
					U({
						type: l,
						content: {
							type: t,
							content: n
						}
					})
				}

				function q() {
					U({
						type: E
					})
				}

				function b() {
					U({
						type: N
					})
				}

				function V(t) {
					var n = t.split(":"),
						e = n.shift(),
						o = n.join(":") || null,
						c = {
							type: e
						};
					if (o) try {
						c.content = JSON.parse(o)
					} catch (t) {}
					switch (c.type) {
						case l:
							j(c);
							break;
						case T:
							J(c);
							break;
						case C:
							D(c);
							break;
						case N:
							F(c)
					}
				}

				function j(t) {
					var n = t.content;
					I(n.type, n.content)
				}

				function D(t) {
					var n = 1e3 * t.content;
					isNaN(n) || (ct = n, L())
				}

				function J(t) {
					K()
				}

				function K() {
					clearTimeout(it), clearTimeout(st), it = setTimeout(L, ct)
				}

				function L() {
					d() && (q(), st = setTimeout(X, ct))
				}

				function X() {
					Y("服务器已失去响应")
				}

				function Y(t) {
					ut >= rt ? (P(), y("error", {
						code: a,
						message: "重连失败",
						detail: t
					})) : (wx.closeSocket(), at += ft, _(u), lt = setTimeout(z, at)), 0 === ut && y("reconnecting"), ut += 1
				}

				function z() {
					v()
				}

				function B() {
					ut = 0, at = 0
				}

				function F(t) {
					P()
				}

				function H() {
					Et || d() && Y("链接已断开")
				}

				function P() {
					Et = !0, Q(), _(c), B(), nt = !1, clearTimeout(it), clearTimeout(st), clearTimeout(lt), y("close"), Et = !1
				}

				function Q(t) {
					d() && !1 !== t && b(), wx.closeSocket()
				}

				function W(n) {
					switch (Z.status) {
						case t.STATUS_CONNECTING:
							y("error", {
								code: f,
								message: "连接信道失败，网络错误或者信道服务不可用",
								detail: n
							})
					}
				}
				if (o && o.status !== c) throw new Error("当前有未关闭的信道，请先关闭之前的信道，再打开新信道");
				o = this;
				var Z = this;
				this.serviceUrl = p, this.socketUrl = null, this.status = null, this.open = v, this.on = g, this.emit = M, this.close = P, this.isClosed = R, this.isConnecting = O, this.isActive = d, this.isReconnecting = m, _(c);
				var $ = "connect,close,reconnecting,reconnect,error".split(","),
					tt = [],
					nt = !0,
					et = !1,
					ot = [],
					ct = 15e3,
					it = 0,
					st = 0,
					ut = 0,
					rt = t.MAX_RECONNECT_TRY_TIMES || h,
					at = 0,
					ft = t.RECONNECT_TIME_INCREASE || S,
					lt = 0,
					Et = !1
			}
			var n = require("./request"),
				e = require("./wxTunnel"),
				o = null,
				c = t.STATUS_CLOSED = "CLOSED",
				i = t.STATUS_CONNECTING = "CONNECTING",
				s = t.STATUS_ACTIVE = "ACTIVE",
				u = t.STATUS_RECONNECTING = "RECONNECTING",
				r = t.ERR_CONNECT_SERVICE = 1001,
				a = (t.ERR_CONNECT_SOCKET = 1002, t.ERR_RECONNECT = 2001),
				f = t.ERR_SOCKET_ERROR = 3001,
				l = "message",
				E = "ping",
				T = "pong",
				C = "timeout",
				N = "close",
				h = 5,
				S = 1e3;
			module.exports = t
		}();
	});
	define("vendor/qcloud-weapp-client-sdk/lib/utils.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			exports.extend = function (r) {
				for (var t = Array.prototype.slice.call(arguments, 1), e = 0; e < t.length; e += 1) {
					var n = t[e];
					for (var o in n) n.hasOwnProperty(o) && (r[o] = n[o])
				}
				return r
			}
		}();
	});
	define("vendor/qcloud-weapp-client-sdk/lib/wxTunnel.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";

			function n(n) {
				n ? (e = n.onOpen, t = n.onClose, r = n.onMessage, u = n.onError) : (e = o, t = o, r = o, u = o)
			}
			var o = function () {},
				e = void 0,
				t = void 0,
				r = void 0,
				u = void 0;
			n(null),
				function () {
					wx.onSocketOpen(function (n) {
						return e(n)
					}), wx.onSocketClose(function (n) {
						return t(n)
					}), wx.onSocketMessage(function (n) {
						return r(n)
					}), wx.onSocketError(function (n) {
						return u(n)
					})
				}(), module.exports = {
					listen: n
				}
		}();
	});
	define("app.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			var o = require("./config").openIdUrl;
			App({
				onLaunch: function (o) {
					console.log("App Launch", o)
				},
				onShow: function (o) {
					console.log("App Show", o)
				},
				onHide: function () {
					console.log("App Hide")
				},
				globalData: {
					hasLogin: !1,
					openid: null
				},
				getUserOpenId: function (n) {
					var l = this;
					l.globalData.openid ? n(null, l.globalData.openid) : wx.login({
						success: function (e) {
							wx.request({
								url: o,
								data: {
									code: e.code
								},
								success: function (o) {
									console.log("拉取openid成功", o), l.globalData.openid = o.data.openid, n(null, l.globalData.openid)
								},
								fail: function (o) {
									console.log("拉取用户openid失败，将无法正常使用开放接口等服务", o), n(o)
								}
							})
						},
						fail: function (o) {
							console.log("wx.login 接口调用失败，将无法正常使用开放接口等服务", o), n(o)
						}
					})
				}
			})
		}();
	});
	require("app.js");
	__wxRoute = 'page/component/index';
	__wxRouteBegin = true;
	define("page/component/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				data: {
					list: [{
						id: "view",
						name: "视图容器",
						open: !1,
						pages: ["view", "scroll-view", "swiper"]
					}, {
						id: "content",
						name: "基础内容",
						open: !1,
						pages: ["text", "icon", "progress"]
					}, {
						id: "form",
						name: "表单组件",
						open: !1,
						pages: ["button", "checkbox", "form", "input", "label", "picker", "radio", "slider", "switch", "textarea"]
					}, {
						id: "nav",
						name: "导航",
						open: !1,
						pages: ["navigator"]
					}, {
						id: "media",
						name: "媒体组件",
						open: !1,
						pages: ["image", "audio", "video"]
					}, {
						id: "map",
						name: "地图",
						pages: ["map"]
					}, {
						id: "canvas",
						name: "画布",
						pages: ["canvas"]
					}]
				},
				kindToggle: function (e) {
					for (var a = e.currentTarget.id, i = this.data.list, n = 0, t = i.length; n < t; ++n) i[n].id == a ? i[n].open = !i[n].open : i[n].open = !1;
					this.setData({
						list: i
					})
				}
			})
		}();
	});
	require("page/component/index.js");
	__wxRoute = 'page/component/pages/view/view';
	__wxRouteBegin = true;
	define("page/component/pages/view/view.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({})
		}();
	});
	require("page/component/pages/view/view.js");
	__wxRoute = 'page/component/pages/scroll-view/scroll-view';
	__wxRouteBegin = true;
	define("page/component/pages/scroll-view/scroll-view.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			var o = ["demo1", "demo2", "demo3"];
			Page({
				data: {
					toView: "green"
				},
				upper: function (o) {
					console.log(o)
				},
				lower: function (o) {
					console.log(o)
				},
				scroll: function (o) {
					console.log(o)
				},
				scrollToTop: function (o) {
					this.setAction({
						scrollTop: 0
					})
				},
				tap: function (t) {
					for (var e = 0; e < o.length; ++e)
						if (o[e] === this.data.toView) {
							this.setData({
								toView: o[e + 1],
								scrollTop: 200 * (e + 1)
							});
							break
						}
				},
				tapMove: function (o) {
					this.setData({
						scrollTop: this.data.scrollTop + 10
					})
				}
			})
		}();
	});
	require("page/component/pages/scroll-view/scroll-view.js");
	__wxRoute = 'page/component/pages/swiper/swiper';
	__wxRouteBegin = true;
	define("page/component/pages/swiper/swiper.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				data: {
					background: ["demo-text-1", "demo-text-2", "demo-text-3"],
					indicatorDots: !0,
					vertical: !1,
					autoplay: !1,
					interval: 2e3,
					duration: 500
				},
				changeIndicatorDots: function (t) {
					this.setData({
						indicatorDots: !this.data.indicatorDots
					})
				},
				changeAutoplay: function (t) {
					this.setData({
						autoplay: !this.data.autoplay
					})
				},
				intervalChange: function (t) {
					this.setData({
						interval: t.detail.value
					})
				},
				durationChange: function (t) {
					this.setData({
						duration: t.detail.value
					})
				}
			})
		}();
	});
	require("page/component/pages/swiper/swiper.js");
	__wxRoute = 'page/component/pages/text/text';
	__wxRouteBegin = true;
	define("page/component/pages/text/text.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			var t = ["2011年1月，微信1.0发布", "同年5月，微信2.0语音对讲发布", "10月，微信3.0新增摇一摇功能", "2012年3月，微信用户突破1亿", "4月份，微信4.0朋友圈发布", "同年7月，微信4.2发布公众平台", "2013年8月，微信5.0发布微信支付", "2014年9月，企业号发布", "同月，发布微信卡包", "2015年1月，微信第一条朋友圈广告", "2016年1月，企业微信发布", "2017年1月，小程序发布", "......"];
			Page({
				data: {
					text: "",
					canAdd: !0,
					canRemove: !1
				},
				extraLine: [],
				add: function (e) {
					var n = this;
					this.extraLine.push(t[this.extraLine.length % 12]), this.setData({
						text: this.extraLine.join("\n"),
						canAdd: this.extraLine.length < 12,
						canRemove: this.extraLine.length > 0
					}), setTimeout(function () {
						n.setData({
							scrollTop: 99999
						})
					}, 0)
				},
				remove: function (t) {
					var e = this;
					this.extraLine.length > 0 && (this.extraLine.pop(), this.setData({
						text: this.extraLine.join("\n"),
						canAdd: this.extraLine.length < 12,
						canRemove: this.extraLine.length > 0
					})), setTimeout(function () {
						e.setData({
							scrollTop: 99999
						})
					}, 0)
				}
			})
		}();
	});
	require("page/component/pages/text/text.js");
	__wxRoute = 'page/component/pages/icon/icon';
	__wxRouteBegin = true;
	define("page/component/pages/icon/icon.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({})
		}();
	});
	require("page/component/pages/icon/icon.js");
	__wxRoute = 'page/component/pages/progress/progress';
	__wxRouteBegin = true;
	define("page/component/pages/progress/progress.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({})
		}();
	});
	require("page/component/pages/progress/progress.js");
	__wxRoute = 'page/component/pages/button/button';
	__wxRouteBegin = true;
	define("page/component/pages/button/button.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			for (var a = ["default", "primary", "warn"], t = {
					data: {
						defaultSize: "default",
						primarySize: "default",
						warnSize: "default",
						disabled: !1,
						plain: !1,
						loading: !1
					},
					setDisabled: function (a) {
						this.setData({
							disabled: !this.data.disabled
						})
					},
					setPlain: function (a) {
						this.setData({
							plain: !this.data.plain
						})
					},
					setLoading: function (a) {
						this.setData({
							loading: !this.data.loading
						})
					}
				}, i = 0; i < a.length; ++i) ! function (a) {
				t[a] = function (t) {
					var i = a + "Size",
						e = {};
					e[i] = "default" === this.data[i] ? "mini" : "default", this.setData(e)
				}
			}(a[i]);
			Page(t)
		}();
	});
	require("page/component/pages/button/button.js");
	__wxRoute = 'page/component/pages/checkbox/checkbox';
	__wxRouteBegin = true;
	define("page/component/pages/checkbox/checkbox.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				data: {
					items: [{
						value: "USA",
						name: "美国"
					}, {
						value: "CHN",
						name: "中国",
						checked: "true"
					}, {
						value: "BRA",
						name: "巴西"
					}, {
						value: "JPN",
						name: "日本"
					}, {
						value: "ENG",
						name: "英国"
					}, {
						value: "FRA",
						name: "法国"
					}]
				},
				checkboxChange: function (e) {
					console.log("checkbox发生change事件，携带value值为：", e.detail.value);
					for (var a = this.data.items, t = e.detail.value, l = 0, c = a.length; l < c; ++l) {
						a[l].checked = !1;
						for (var n = 0, u = t.length; n < u; ++n)
							if (a[l].value == t[n]) {
								a[l].checked = !0;
								break
							}
					}
					this.setData({
						items: a
					})
				}
			})
		}();
	});
	require("page/component/pages/checkbox/checkbox.js");
	__wxRoute = 'page/component/pages/form/form';
	__wxRouteBegin = true;
	define("page/component/pages/form/form.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				data: {
					pickerHidden: !0,
					chosen: ""
				},
				pickerConfirm: function (e) {
					this.setData({
						pickerHidden: !0
					}), this.setData({
						chosen: e.detail.value
					})
				},
				pickerCancel: function (e) {
					this.setData({
						pickerHidden: !0
					})
				},
				pickerShow: function (e) {
					this.setData({
						pickerHidden: !1
					})
				},
				formSubmit: function (e) {
					console.log("form发生了submit事件，携带数据为：", e.detail.value)
				},
				formReset: function (e) {
					console.log("form发生了reset事件，携带数据为：", e.detail.value), this.setData({
						chosen: ""
					})
				}
			})
		}();
	});
	require("page/component/pages/form/form.js");
	__wxRoute = 'page/component/pages/input/input';
	__wxRouteBegin = true;
	define("page/component/pages/input/input.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				data: {
					focus: !1,
					inputValue: ""
				},
				bindKeyInput: function (e) {
					this.setData({
						inputValue: e.detail.value
					})
				},
				bindReplaceInput: function (e) {
					var a, t = e.detail.value,
						u = e.detail.cursor;
					return -1 !== u && (a = e.detail.value.slice(0, u), u = a.replace(/11/g, "2").length), {
						value: t.replace(/11/g, "2"),
						cursor: u
					}
				},
				bindHideKeyboard: function (e) {
					"123" === e.detail.value && wx.hideKeyboard()
				}
			})
		}();
	});
	require("page/component/pages/input/input.js");
	__wxRoute = 'page/component/pages/label/label';
	__wxRouteBegin = true;
	define("page/component/pages/label/label.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				data: {
					checkboxItems: [{
						name: "USA",
						value: "美国"
					}, {
						name: "CHN",
						value: "中国",
						checked: "true"
					}],
					radioItems: [{
						name: "USA",
						value: "美国"
					}, {
						name: "CHN",
						value: "中国",
						checked: "true"
					}],
					hidden: !1
				},
				checkboxChange: function (e) {
					for (var a = e.detail.value, t = {}, c = 0; c < this.data.checkboxItems.length; c++) - 1 !== a.indexOf(this.data.checkboxItems[c].name) ? t["checkboxItems[" + c + "].checked"] = !0 : t["checkboxItems[" + c + "].checked"] = !1;
					this.setData(t)
				},
				radioChange: function (e) {
					for (var a = e.detail.value, t = {}, c = 0; c < this.data.radioItems.length; c++) - 1 !== a.indexOf(this.data.radioItems[c].name) ? t["radioItems[" + c + "].checked"] = !0 : t["radioItems[" + c + "].checked"] = !1;
					this.setData(t)
				},
				tapEvent: function (e) {
					console.log("按钮被点击")
				}
			})
		}();
	});
	require("page/component/pages/label/label.js");
	__wxRoute = 'page/component/pages/picker/picker';
	__wxRouteBegin = true;
	define("page/component/pages/picker/picker.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				data: {
					array: ["中国", "美国", "巴西", "日本"],
					index: 0,
					date: "2016-09-01",
					time: "12:01"
				},
				bindPickerChange: function (e) {
					console.log("picker发送选择改变，携带值为", e.detail.value), this.setData({
						index: e.detail.value
					})
				},
				bindDateChange: function (e) {
					this.setData({
						date: e.detail.value
					})
				},
				bindTimeChange: function (e) {
					this.setData({
						time: e.detail.value
					})
				}
			})
		}();
	});
	require("page/component/pages/picker/picker.js");
	__wxRoute = 'page/component/pages/radio/radio';
	__wxRouteBegin = true;
	define("page/component/pages/radio/radio.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				data: {
					items: [{
						value: "USA",
						name: "美国"
					}, {
						value: "CHN",
						name: "中国",
						checked: "true"
					}, {
						value: "BRA",
						name: "巴西"
					}, {
						value: "JPN",
						name: "日本"
					}, {
						value: "ENG",
						name: "英国"
					}, {
						value: "FRA",
						name: "法国"
					}]
				},
				radioChange: function (e) {
					console.log("radio发生change事件，携带value值为：", e.detail.value);
					for (var a = this.data.items, t = 0, l = a.length; t < l; ++t) a[t].checked = a[t].value == e.detail.value;
					this.setData({
						items: a
					})
				}
			})
		}();
	});
	require("page/component/pages/radio/radio.js");
	__wxRoute = 'page/component/pages/slider/slider';
	__wxRouteBegin = true;
	define("page/component/pages/slider/slider.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			for (var e = {}, n = 1; n < 5; ++n) ! function (n) {
				e["slider" + n + "change"] = function (e) {
					console.log("slider" + n + "发生change事件，携带值为", e.detail.value)
				}
			}(n);
			Page(e)
		}();
	});
	require("page/component/pages/slider/slider.js");
	__wxRoute = 'page/component/pages/switch/switch';
	__wxRouteBegin = true;
	define("page/component/pages/switch/switch.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				switch1Change: function (c) {
					console.log("switch1 发生 change 事件，携带值为", c.detail.value)
				},
				switch2Change: function (c) {
					console.log("switch2 发生 change 事件，携带值为", c.detail.value)
				}
			})
		}();
	});
	require("page/component/pages/switch/switch.js");
	__wxRoute = 'page/component/pages/textarea/textarea';
	__wxRouteBegin = true;
	define("page/component/pages/textarea/textarea.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				data: {
					focus: !1
				},
				bindTextAreaBlur: function (e) {
					console.log(e.detail.value)
				}
			})
		}();
	});
	require("page/component/pages/textarea/textarea.js");
	__wxRoute = 'page/component/pages/navigator/navigator';
	__wxRouteBegin = true;
	define("page/component/pages/navigator/navigator.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({})
		}();
	});
	require("page/component/pages/navigator/navigator.js");
	__wxRoute = 'page/component/pages/navigator/navigate';
	__wxRouteBegin = true;
	define("page/component/pages/navigator/navigate.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				onLoad: function (t) {
					console.log(t), this.setData({
						title: t.title
					})
				}
			})
		}();
	});
	require("page/component/pages/navigator/navigate.js");
	__wxRoute = 'page/component/pages/navigator/redirect';
	__wxRouteBegin = true;
	define("page/component/pages/navigator/redirect.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				onLoad: function (t) {
					console.log(t), this.setData({
						title: t.title
					})
				}
			})
		}();
	});
	require("page/component/pages/navigator/redirect.js");
	__wxRoute = 'page/component/pages/image/image';
	__wxRouteBegin = true;
	define("page/component/pages/image/image.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({})
		}();
	});
	require("page/component/pages/image/image.js");
	__wxRoute = 'page/component/pages/audio/audio';
	__wxRouteBegin = true;
	define("page/component/pages/audio/audio.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				data: {
					current: {
						poster: "http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000",
						name: "此时此刻",
						author: "许巍",
						src: "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46"
					},
					audioAction: {
						method: "pause"
					}
				}
			})
		}();
	});
	require("page/component/pages/audio/audio.js");
	__wxRoute = 'page/component/pages/video/video';
	__wxRouteBegin = true;
	define("page/component/pages/video/video.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";

			function t() {
				for (var t = [], o = 0; o < 3; ++o) {
					var n = Math.floor(256 * Math.random()).toString(16);
					n = 1 == n.length ? "0" + n : n, t.push(n)
				}
				return "#" + t.join("")
			}
			Page({
				onReady: function (t) {
					this.videoContext = wx.createVideoContext("myVideo")
				},
				inputValue: "",
				data: {
					src: "",
					danmuList: [{
						text: "第 1s 出现的弹幕",
						color: "#ff0000",
						time: 1
					}, {
						text: "第 3s 出现的弹幕",
						color: "#ff00ff",
						time: 3
					}]
				},
				bindInputBlur: function (t) {
					this.inputValue = t.detail.value
				},
				bindButtonTap: function () {
					var t = this;
					wx.chooseVideo({
						sourceType: ["album", "camera"],
						maxDuration: 60,
						camera: ["front", "back"],
						success: function (o) {
							t.setData({
								src: o.tempFilePath
							})
						}
					})
				},
				bindSendDanmu: function () {
					this.videoContext.sendDanmu({
						text: this.inputValue,
						color: t()
					})
				},
				videoErrorCallback: function (t) {
					console.log("视频错误信息:"), console.log(t.detail.errMsg)
				}
			})
		}();
	});
	require("page/component/pages/video/video.js");
	__wxRoute = 'page/component/pages/map/map';
	__wxRouteBegin = true;
	define("page/component/pages/map/map.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				data: {
					latitude: 23.099994,
					longitude: 113.32452,
					markers: [{
						latitude: 23.099994,
						longitude: 113.32452,
						name: "T.I.T 创意园"
					}],
					covers: [{
						latitude: 23.099994,
						longitude: 113.34452,
						iconPath: "/image/location.png"
					}, {
						latitude: 23.099994,
						longitude: 113.30452,
						iconPath: "/image/location.png"
					}]
				}
			})
		}();
	});
	require("page/component/pages/map/map.js");
	__wxRoute = 'page/component/pages/canvas/canvas';
	__wxRouteBegin = true;
	define("page/component/pages/canvas/canvas.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				onReady: function () {
					this.position = {
						x: 150,
						y: 150,
						vx: 2,
						vy: 2
					}, this.drawBall(), this.interval = setInterval(this.drawBall, 17)
				},
				drawBall: function () {
					function t(t, a) {
						n.beginPath(0), n.arc(t, a, 5, 0, 2 * Math.PI), n.setFillStyle("#1aad19"), n.setStrokeStyle("rgba(1,1,1,0)"), n.fill(), n.stroke()
					}
					var a = this.position;
					a.x += a.vx, a.y += a.vy, a.x >= 300 && (a.vx = -2), a.x <= 7 && (a.vx = 2), a.y >= 300 && (a.vy = -2), a.y <= 7 && (a.vy = 2);
					var n = wx.createContext();
					t(a.x, 150), t(150, a.y), t(300 - a.x, 150), t(150, 300 - a.y), t(a.x, a.y), t(300 - a.x, 300 - a.y), t(a.x, 300 - a.y), t(300 - a.x, a.y), wx.drawCanvas({
						canvasId: "canvas",
						actions: n.getActions()
					})
				},
				onUnload: function () {
					clearInterval(this.interval)
				}
			})
		}();
	});
	require("page/component/pages/canvas/canvas.js");
	__wxRoute = 'page/API/index';
	__wxRouteBegin = true;
	define("page/API/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				data: {
					list: [{
						id: "api",
						name: "开放接口",
						open: !1,
						pages: [{
							zh: "微信登录",
							url: "login/login"
						}, {
							zh: "获取用户信息",
							url: "get-user-info/get-user-info"
						}, {
							zh: "发起支付",
							url: "request-payment/request-payment"
						}, {
							zh: "转发",
							url: "share/share"
						}, {
							zh: "转发按钮",
							url: "share-button/share-button"
						}, {
							zh: "客服消息",
							url: "custom-message/custom-message"
						}, {
							zh: "模板消息",
							url: "template-message/template-message"
						}]
					}, {
						id: "page",
						name: "界面",
						open: !1,
						pages: [{
							zh: "设置界面标题",
							url: "set-navigation-bar-title/set-navigation-bar-title"
						}, {
							zh: "标题栏加载动画",
							url: "navigation-bar-loading/navigation-bar-loading"
						}, {
							zh: "页面跳转",
							url: "navigator/navigator"
						}, {
							zh: "下拉刷新",
							url: "pull-down-refresh/pull-down-refresh"
						}, {
							zh: "创建动画",
							url: "animation/animation"
						}, {
							zh: "创建绘画",
							url: "canvas/canvas"
						}, {
							zh: "显示操作菜单",
							url: "action-sheet/action-sheet"
						}, {
							zh: "显示模态弹窗",
							url: "modal/modal"
						}, {
							zh: "显示消息提示框",
							url: "toast/toast"
						}]
					}, {
						id: "device",
						name: "设备",
						open: !1,
						pages: [{
							zh: "获取手机网络状态",
							url: "get-network-type/get-network-type"
						}, {
							zh: "监听手机网络变化",
							url: "on-network-status-change/on-network-status-change"
						}, {
							zh: "获取手机系统信息",
							url: "get-system-info/get-system-info"
						}, {
							zh: "监听重力感应数据",
							url: "on-accelerometer-change/on-accelerometer-change"
						}, {
							zh: "监听罗盘数据",
							url: "on-compass-change/on-compass-change"
						}, {
							zh: "打电话",
							url: "make-phone-call/make-phone-call"
						}, {
							zh: "扫码",
							url: "scan-code/scan-code"
						}]
					}, {
						id: "network",
						name: "网络",
						open: !1,
						pages: [{
							zh: "发起一个请求",
							url: "request/request"
						}, {
							zh: "WebSocket",
							url: "web-socket/web-socket"
						}, {
							zh: "上传文件",
							url: "upload-file/upload-file"
						}, {
							zh: "下载文件",
							url: "download-file/download-file"
						}]
					}, {
						id: "media",
						name: "媒体",
						open: !1,
						pages: [{
							zh: "图片",
							url: "image/image"
						}, {
							zh: "录音",
							url: "voice/voice"
						}, {
							zh: "背景音频",
							url: "background-audio/background-audio"
						}, {
							zh: "文件",
							url: "file/file"
						}, {
							zh: "视频",
							url: "video/video"
						}]
					}, {
						id: "location",
						name: "位置",
						open: !1,
						pages: [{
							zh: "获取当前位置",
							url: "get-location/get-location"
						}, {
							zh: "使用原生地图查看位置",
							url: "open-location/open-location"
						}, {
							zh: "使用原生地图选择位置",
							url: "choose-location/choose-location"
						}]
					}, {
						id: "storage",
						name: "数据",
						url: "storage/storage"
					}]
				},
				kindToggle: function (e) {
					for (var a = e.currentTarget.id, o = this.data.list, t = 0, n = o.length; t < n; ++t)
						if (o[t].id == a) {
							if (o[t].url) return void wx.navigateTo({
								url: "pages/" + o[t].url
							});
							o[t].open = !o[t].open
						} else o[t].open = !1;
					this.setData({
						list: o
					})
				}
			})
		}();
	});
	require("page/API/index.js");
	__wxRoute = 'page/API/pages/login/login';
	__wxRouteBegin = true;
	define("page/API/pages/login/login.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			var a = getApp();
			Page({
				onLoad: function () {
					this.setData({
						hasLogin: a.globalData.hasLogin
					})
				},
				data: {},
				login: function () {
					var t = this;
					wx.login({
						success: function (n) {
							a.globalData.hasLogin = !0, t.setData({
								hasLogin: !0
							}), t.update()
						}
					})
				}
			})
		}();
	});
	require("page/API/pages/login/login.js");
	__wxRoute = 'page/API/pages/get-user-info/get-user-info';
	__wxRouteBegin = true;
	define("page/API/pages/get-user-info/get-user-info.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			var s = getApp();
			Page({
				data: {
					hasUserInfo: !1
				},
				getUserInfo: function () {
					function n() {
						wx.getUserInfo({
							success: function (s) {
								e.setData({
									hasUserInfo: !0,
									userInfo: s.userInfo
								}), e.update()
							}
						})
					}
					var e = this;
					!1 === s.globalData.hasLogin ? wx.login({
						success: n
					}) : n()
				},
				clear: function () {
					this.setData({
						hasUserInfo: !1,
						userInfo: {}
					})
				}
			})
		}();
	});
	require("page/API/pages/get-user-info/get-user-info.js");
	__wxRoute = 'page/API/pages/request-payment/request-payment';
	__wxRouteBegin = true;
	define("page/API/pages/request-payment/request-payment.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			var e = require("../../../../config").paymentUrl,
				n = getApp();
			Page({
				onLoad: function () {},
				requestPayment: function () {
					var a = this;
					a.setData({
						loading: !0
					}), n.getUserOpenId(function (n, t) {
						n ? (console.log("err:", n), a.setData({
							loading: !1
						})) : wx.request({
							url: e,
							data: {
								openid: t
							},
							method: "POST",
							success: function (e) {
								console.log("unified order success, response is:", e);
								var n = e.data.payargs;
								wx.requestPayment({
									timeStamp: n.timeStamp,
									nonceStr: n.nonceStr,
									package: n.package,
									signType: n.signType,
									paySign: n.paySign
								}), a.setData({
									loading: !1
								})
							}
						})
					})
				}
			})
		}();
	});
	require("page/API/pages/request-payment/request-payment.js");
	__wxRoute = 'page/API/pages/share/share';
	__wxRouteBegin = true;
	define("page/API/pages/share/share.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				data: {
					shareData: {
						title: "自定义转发标题",
						desc: "自定义转发描述",
						path: "/page/API/pages/share/share"
					}
				},
				onShareAppMessage: function () {
					return this.data.shareData
				}
			})
		}();
	});
	require("page/API/pages/share/share.js");
	__wxRoute = 'page/API/pages/share-button/share-button';
	__wxRouteBegin = true;
	define("page/API/pages/share-button/share-button.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				onShareAppMessage: function () {
					return {
						title: "转发按钮"
					}
				},
				handleTapShareButton: function () {
					"function" == typeof wx.canIUse && wx.canIUse("button.open-type.share") || wx.showModal({
						title: "当前版本不支持转发按钮",
						content: "请升级至最新版本微信客户端",
						showCancel: !1
					})
				}
			})
		}();
	});
	require("page/API/pages/share-button/share-button.js");
	__wxRoute = 'page/API/pages/custom-message/custom-message';
	__wxRouteBegin = true;
	define("page/API/pages/custom-message/custom-message.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({})
		}();
	});
	require("page/API/pages/custom-message/custom-message.js");
	__wxRoute = 'page/API/pages/template-message/template-message';
	__wxRouteBegin = true;
	define("page/API/pages/template-message/template-message.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			var e = require("../../../../config").templateMessageUrl,
				o = getApp(),
				s = {
					address: "T.I.T 造舰厂",
					time: "2017.01.09",
					name: "帝国歼星舰",
					serial: "123456789"
				};
			Page({
				onLoad: function () {
					this.setData({
						formData: s
					})
				},
				submitForm: function (s) {
					var t = this,
						a = s.detail.formId,
						i = s.detail.value;
					console.log("form_id is:", a), t.setData({
						loading: !0
					}), o.getUserOpenId(function (o, s) {
						o ? console.log("err:", o) : wx.request({
							url: e,
							method: "POST",
							data: {
								form_id: a,
								openid: s,
								formData: i
							},
							success: function (e) {
								console.log("submit form success", e), wx.showToast({
									title: "发送成功",
									icon: "success"
								}), t.setData({
									loading: !1
								})
							},
							fail: function (e) {
								var o = e.errMsg;
								console.log("submit form fail, errMsg is:", o)
							}
						})
					})
				}
			})
		}();
	});
	require("page/API/pages/template-message/template-message.js");
	__wxRoute = 'page/API/pages/set-navigation-bar-title/set-navigation-bar-title';
	__wxRouteBegin = true;
	define("page/API/pages/set-navigation-bar-title/set-navigation-bar-title.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				setNaivgationBarTitle: function (t) {
					var i = t.detail.value.title;
					return console.log(i), wx.setNavigationBarTitle({
						title: i,
						success: function () {
							console.log("setNavigationBarTitle success")
						},
						fail: function (t) {
							console.log("setNavigationBarTitle fail, err is", t)
						}
					}), !1
				}
			})
		}();
	});
	require("page/API/pages/set-navigation-bar-title/set-navigation-bar-title.js");
	__wxRoute = 'page/API/pages/navigation-bar-loading/navigation-bar-loading';
	__wxRouteBegin = true;
	define("page/API/pages/navigation-bar-loading/navigation-bar-loading.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				showNavigationBarLoading: function () {
					wx.showNavigationBarLoading()
				},
				hideNavigationBarLoading: function () {
					wx.hideNavigationBarLoading()
				}
			})
		}();
	});
	require("page/API/pages/navigation-bar-loading/navigation-bar-loading.js");
	__wxRoute = 'page/API/pages/navigator/navigator';
	__wxRouteBegin = true;
	define("page/API/pages/navigator/navigator.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				navigateTo: function () {
					wx.navigateTo({
						url: "./navigator"
					})
				},
				navigateBack: function () {
					wx.navigateBack()
				},
				redirectTo: function () {
					wx.redirectTo({
						url: "./navigator"
					})
				}
			})
		}();
	});
	require("page/API/pages/navigator/navigator.js");
	__wxRoute = 'page/API/pages/pull-down-refresh/pull-down-refresh';
	__wxRouteBegin = true;
	define("page/API/pages/pull-down-refresh/pull-down-refresh.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				onPullDownRefresh: function () {
					wx.showToast({
						title: "loading...",
						icon: "loading"
					}), console.log("onPullDownRefresh", new Date)
				},
				stopPullDownRefresh: function () {
					wx.stopPullDownRefresh({
						complete: function (o) {
							wx.hideToast(), console.log(o, new Date)
						}
					})
				}
			})
		}();
	});
	require("page/API/pages/pull-down-refresh/pull-down-refresh.js");
	__wxRoute = 'page/API/pages/animation/animation';
	__wxRouteBegin = true;
	define("page/API/pages/animation/animation.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				onReady: function () {
					this.animation = wx.createAnimation()
				},
				rotate: function () {
					this.animation.rotate(720 * Math.random() - 360).step(), this.setData({
						animation: this.animation.export()
					})
				},
				scale: function () {
					this.animation.scale(2 * Math.random()).step(), this.setData({
						animation: this.animation.export()
					})
				},
				translate: function () {
					this.animation.translate(100 * Math.random() - 50, 100 * Math.random() - 50).step(), this.setData({
						animation: this.animation.export()
					})
				},
				skew: function () {
					this.animation.skew(90 * Math.random(), 90 * Math.random()).step(), this.setData({
						animation: this.animation.export()
					})
				},
				rotateAndScale: function () {
					this.animation.rotate(720 * Math.random() - 360).scale(2 * Math.random()).step(), this.setData({
						animation: this.animation.export()
					})
				},
				rotateThenScale: function () {
					this.animation.rotate(720 * Math.random() - 360).step().scale(2 * Math.random()).step(), this.setData({
						animation: this.animation.export()
					})
				},
				all: function () {
					this.animation.rotate(720 * Math.random() - 360).scale(2 * Math.random()).translate(100 * Math.random() - 50, 100 * Math.random() - 50).skew(90 * Math.random(), 90 * Math.random()).step(), this.setData({
						animation: this.animation.export()
					})
				},
				allInQueue: function () {
					this.animation.rotate(720 * Math.random() - 360).step().scale(2 * Math.random()).step().translate(100 * Math.random() - 50, 100 * Math.random() - 50).step().skew(90 * Math.random(), 90 * Math.random()).step(), this.setData({
						animation: this.animation.export()
					})
				},
				reset: function () {
					this.animation.rotate(0, 0).scale(1).translate(0, 0).skew(0, 0).step({
						duration: 0
					}), this.setData({
						animation: this.animation.export()
					})
				}
			})
		}();
	});
	require("page/API/pages/animation/animation.js");
	__wxRoute = 'page/API/pages/action-sheet/action-sheet';
	__wxRouteBegin = true;
	define("page/API/pages/action-sheet/action-sheet.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				actionSheetTap: function () {
					wx.showActionSheet({
						itemList: ["item1", "item2", "item3", "item4"],
						success: function (t) {
							console.log(t.tapIndex)
						}
					})
				}
			})
		}();
	});
	require("page/API/pages/action-sheet/action-sheet.js");
	__wxRoute = 'page/API/pages/modal/modal';
	__wxRouteBegin = true;
	define("page/API/pages/modal/modal.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				data: {
					modalHidden: !0,
					modalHidden2: !0
				},
				modalTap: function (n) {
					wx.showModal({
						title: "弹窗标题",
						content: "弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",
						showCancel: !1,
						confirmText: "确定"
					})
				},
				noTitlemodalTap: function (n) {
					wx.showModal({
						content: "弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",
						confirmText: "确定",
						cancelText: "取消"
					})
				}
			})
		}();
	});
	require("page/API/pages/modal/modal.js");
	__wxRoute = 'page/API/pages/toast/toast';
	__wxRouteBegin = true;
	define("page/API/pages/toast/toast.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				toast1Tap: function () {
					wx.showToast({
						title: "默认"
					})
				},
				toast2Tap: function () {
					wx.showToast({
						title: "duration 3000",
						duration: 3e3
					})
				},
				toast3Tap: function () {
					wx.showToast({
						title: "loading",
						icon: "loading",
						duration: 5e3
					})
				},
				hideToast: function () {
					wx.hideToast()
				}
			})
		}();
	});
	require("page/API/pages/toast/toast.js");
	__wxRoute = 'page/API/pages/get-network-type/get-network-type';
	__wxRouteBegin = true;
	define("page/API/pages/get-network-type/get-network-type.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				data: {
					hasNetworkType: !1
				},
				getNetworkType: function () {
					var e = this;
					wx.getNetworkType({
						success: function (t) {
							console.log(t), e.setData({
								hasNetworkType: !0,
								networkType: t.subtype || t.networkType
							}), e.update()
						}
					})
				},
				clear: function () {
					this.setData({
						hasNetworkType: !1,
						networkType: ""
					})
				}
			})
		}();
	});
	require("page/API/pages/get-network-type/get-network-type.js");
	__wxRoute = 'page/API/pages/on-network-status-change/on-network-status-change';
	__wxRouteBegin = true;
	define("page/API/pages/on-network-status-change/on-network-status-change.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				data: {
					isConnected: !1
				},
				onLoad: function () {
					var e = this;
					wx.onNetworkStatusChange(function (n) {
						e.setData({
							isConnected: n.isConnected,
							networkType: n.networkType
						})
					})
				},
				onShow: function () {
					var e = this;
					wx.getNetworkType({
						success: function (n) {
							e.setData({
								isConnected: "none" !== n.networkType,
								networkType: n.networkType
							})
						}
					})
				}
			})
		}();
	});
	require("page/API/pages/on-network-status-change/on-network-status-change.js");
	__wxRoute = 'page/API/pages/get-system-info/get-system-info';
	__wxRouteBegin = true;
	define("page/API/pages/get-system-info/get-system-info.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				data: {
					systemInfo: {}
				},
				getSystemInfo: function () {
					var t = this;
					wx.getSystemInfo({
						success: function (s) {
							t.setData({
								systemInfo: s
							}), t.update()
						}
					})
				}
			})
		}();
	});
	require("page/API/pages/get-system-info/get-system-info.js");
	__wxRoute = 'page/API/pages/on-compass-change/on-compass-change';
	__wxRouteBegin = true;
	define("page/API/pages/on-compass-change/on-compass-change.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				data: {
					enabled: !0,
					direction: 0
				},
				onReady: function () {
					var t = this;
					wx.onCompassChange(function (a) {
						t.setData({
							direction: parseInt(a.direction)
						})
					})
				},
				startCompass: function () {
					if (!this.data.enabled) {
						var t = this;
						wx.startCompass({
							success: function () {
								t.setData({
									enabled: !0
								})
							}
						})
					}
				},
				stopCompass: function () {
					if (this.data.enabled) {
						var t = this;
						wx.stopCompass({
							success: function () {
								t.setData({
									enabled: !1
								})
							}
						})
					}
				}
			})
		}();
	});
	require("page/API/pages/on-compass-change/on-compass-change.js");
	__wxRoute = 'page/API/pages/make-phone-call/make-phone-call';
	__wxRouteBegin = true;
	define("page/API/pages/make-phone-call/make-phone-call.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				data: {
					disabled: !0
				},
				bindInput: function (t) {
					this.inputValue = t.detail.value, this.inputValue.length > 0 ? this.setData({
						disabled: !1
					}) : this.setData({
						disabled: !0
					})
				},
				makePhoneCall: function () {
					wx.makePhoneCall({
						phoneNumber: this.inputValue,
						success: function () {
							console.log("成功拨打电话")
						}
					})
				}
			})
		}();
	});
	require("page/API/pages/make-phone-call/make-phone-call.js");
	__wxRoute = 'page/API/pages/scan-code/scan-code';
	__wxRouteBegin = true;
	define("page/API/pages/scan-code/scan-code.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				data: {
					result: ""
				},
				scanCode: function () {
					var t = this;
					wx.scanCode({
						success: function (s) {
							t.setData({
								result: s.result
							})
						},
						fail: function (t) {}
					})
				}
			})
		}();
	});
	require("page/API/pages/scan-code/scan-code.js");
	__wxRoute = 'page/API/pages/request/request';
	__wxRouteBegin = true;
	define("page/API/pages/request/request.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			var e = require("../../../../config").requestUrl;
			Page({
				makeRequest: function () {
					var s = this;
					s.setData({
						loading: !0
					}), wx.request({
						url: e,
						data: {
							noncestr: Date.now()
						},
						success: function (e) {
							wx.showToast({
								title: "请求成功",
								icon: "success",
								mask: !0,
								duration: 2e3
							}), s.setData({
								loading: !1
							}), console.log("request success", e)
						},
						fail: function (e) {
							var t = e.errMsg;
							console.log("request fail", t), s.setData({
								loading: !1
							})
						}
					})
				}
			})
		}();
	});
	require("page/API/pages/request/request.js");
	__wxRoute = 'page/API/pages/web-socket/web-socket';
	__wxRouteBegin = true;
	define("page/API/pages/web-socket/web-socket.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";

			function t(t, o) {
				wx.showModal({
					title: t,
					content: o,
					showCancel: !1
				})
			}

			function o(t) {
				wx.showToast({
					title: t,
					icon: "success",
					duration: 1e3
				})
			}
			var e = require("../../../../vendor/qcloud-weapp-client-sdk/index"),
				s = require("../../../../config").loginUrl,
				n = require("../../../../config").tunnelUrl;
			Page({
				data: {
					socketStatus: "closed"
				},
				onLoad: function () {
					var t = this;
					e.setLoginUrl(s), e.login({
						success: function (o) {
							console.log("登录成功", o), t.setData({
								hasLogin: !0
							})
						},
						fail: function (t) {
							console.log("登录失败", t)
						}
					})
				},
				onUnload: function () {
					this.closeSocket()
				},
				toggleSocket: function (t) {
					var o = t.detail.value;
					if (o && "closed" == this.data.socketStatus) this.openSocket();
					else if (!o && "connected" == this.data.socketStatus) {
						this.closeSocket(!0)
					}
				},
				openSocket: function () {
					var s = this,
						c = this.socket = new e.Tunnel(n);
					c.on("connect", function () {
						console.log("WebSocket 已连接"), o("Socket已连接"), s.setData({
							socketStatus: "connected",
							waitingResponse: !1
						})
					}), c.on("close", function () {
						console.log("WebSocket 已断开"), s.setData({
							socketStatus: "closed"
						})
					}), c.on("error", function (o) {
						t("发生错误", JSON.stringify(o)), console.error("socket error:", o), s.setData({
							loading: !1
						})
					}), c.on("message", function (t) {
						o("收到信道消息"), console.log("socket message:", t), s.setData({
							loading: !1
						})
					}), c.open()
				},
				closeSocket: function (t) {
					this.socket && this.socket.close(), t && o("Socket已断开"), this.setData({
						socketStatus: "closed"
					})
				},
				sendMessage: function () {
					this.socket && this.socket.isActive() && (this.socket.emit("message", {
						content: "Hello, 小程序!"
					}), this.setData({
						loading: !0
					}))
				}
			})
		}();
	});
	require("page/API/pages/web-socket/web-socket.js");
	__wxRoute = 'page/API/pages/upload-file/upload-file';
	__wxRouteBegin = true;
	define("page/API/pages/upload-file/upload-file.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			var e = require("../../../../config").uploadFileUrl;
			Page({
				chooseImage: function () {
					var s = this;
					wx.chooseImage({
						count: 1,
						sizeType: ["compressed"],
						sourceType: ["album"],
						success: function (o) {
							console.log("chooseImage success, temp path is", o.tempFilePaths[0]);
							var a = o.tempFilePaths[0];
							wx.uploadFile({
								url: e,
								filePath: a,
								name: "data",
								success: function (e) {
									console.log("uploadImage success, res is:", e), wx.showToast({
										title: "上传成功",
										icon: "success",
										duration: 1e3
									}), s.setData({
										imageSrc: a
									})
								},
								fail: function (e) {
									var s = e.errMsg;
									console.log("uploadImage fail, errMsg is", s)
								}
							})
						},
						fail: function (e) {
							var s = e.errMsg;
							console.log("chooseImage fail, err is", s)
						}
					})
				}
			})
		}();
	});
	require("page/API/pages/upload-file/upload-file.js");
	__wxRoute = 'page/API/pages/download-file/download-file';
	__wxRouteBegin = true;
	define("page/API/pages/download-file/download-file.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			var o = require("../../../../config").downloadExampleUrl;
			Page({
				downloadImage: function () {
					var e = this;
					wx.downloadFile({
						url: o,
						success: function (o) {
							console.log("downloadFile success, res is", o), e.setData({
								imageSrc: o.tempFilePath
							})
						},
						fail: function (o) {
							var e = o.errMsg;
							console.log("downloadFile fail, err is:", e)
						}
					})
				}
			})
		}();
	});
	require("page/API/pages/download-file/download-file.js");
	__wxRoute = 'page/API/pages/image/image';
	__wxRouteBegin = true;
	define("page/API/pages/image/image.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			var e = [
					["camera"],
					["album"],
					["camera", "album"]
				],
				a = [
					["compressed"],
					["original"],
					["compressed", "original"]
				];
			Page({
				data: {
					imageList: [],
					sourceTypeIndex: 2,
					sourceType: ["拍照", "相册", "拍照或相册"],
					sizeTypeIndex: 2,
					sizeType: ["压缩", "原图", "压缩或原图"],
					countIndex: 8,
					count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
				},
				sourceTypeChange: function (e) {
					this.setData({
						sourceTypeIndex: e.detail.value
					})
				},
				sizeTypeChange: function (e) {
					this.setData({
						sizeTypeIndex: e.detail.value
					})
				},
				countChange: function (e) {
					this.setData({
						countIndex: e.detail.value
					})
				},
				chooseImage: function () {
					var t = this;
					wx.chooseImage({
						sourceType: e[this.data.sourceTypeIndex],
						sizeType: a[this.data.sizeTypeIndex],
						count: this.data.count[this.data.countIndex],
						success: function (e) {
							console.log(e), t.setData({
								imageList: e.tempFilePaths
							})
						}
					})
				},
				previewImage: function (e) {
					var a = e.target.dataset.src;
					wx.previewImage({
						current: a,
						urls: this.data.imageList
					})
				}
			})
		}();
	});
	require("page/API/pages/image/image.js");
	__wxRoute = 'page/API/pages/voice/voice';
	__wxRouteBegin = true;
	define("page/API/pages/voice/voice.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			var e, t, a = require("../../../../util/util.js");
			Page({
				data: {
					recording: !1,
					playing: !1,
					hasRecord: !1,
					recordTime: 0,
					playTime: 0,
					formatedRecordTime: "00:00:00",
					formatedPlayTime: "00:00:00"
				},
				onHide: function () {
					this.data.playing ? this.stopVoice() : this.data.recording && this.stopRecordUnexpectedly()
				},
				startRecord: function () {
					this.setData({
						recording: !0
					});
					var e = this;
					t = setInterval(function () {
						var t = e.data.recordTime += 1;
						e.setData({
							formatedRecordTime: a.formatTime(e.data.recordTime),
							recordTime: t
						})
					}, 1e3), wx.startRecord({
						success: function (t) {
							e.setData({
								hasRecord: !0,
								tempFilePath: t.tempFilePath,
								formatedPlayTime: a.formatTime(e.data.playTime)
							})
						},
						complete: function () {
							e.setData({
								recording: !1
							}), clearInterval(t)
						}
					})
				},
				stopRecord: function () {
					wx.stopRecord()
				},
				stopRecordUnexpectedly: function () {
					var e = this;
					wx.stopRecord({
						success: function () {
							console.log("stop record success"), clearInterval(t), e.setData({
								recording: !1,
								hasRecord: !1,
								recordTime: 0,
								formatedRecordTime: a.formatTime(0)
							})
						}
					})
				},
				playVoice: function () {
					var t = this;
					e = setInterval(function () {
						var e = t.data.playTime + 1;
						console.log("update playTime", e), t.setData({
							playing: !0,
							formatedPlayTime: a.formatTime(e),
							playTime: e
						})
					}, 1e3), wx.playVoice({
						filePath: this.data.tempFilePath,
						success: function () {
							clearInterval(e);
							console.log("play voice finished"), t.setData({
								playing: !1,
								formatedPlayTime: a.formatTime(0),
								playTime: 0
							})
						}
					})
				},
				pauseVoice: function () {
					clearInterval(e), wx.pauseVoice(), this.setData({
						playing: !1
					})
				},
				stopVoice: function () {
					clearInterval(e), this.setData({
						playing: !1,
						formatedPlayTime: a.formatTime(0),
						playTime: 0
					}), wx.stopVoice()
				},
				clear: function () {
					clearInterval(e), wx.stopVoice(), this.setData({
						playing: !1,
						hasRecord: !1,
						tempFilePath: "",
						formatedRecordTime: a.formatTime(0),
						recordTime: 0,
						playTime: 0
					})
				}
			})
		}();
	});
	require("page/API/pages/voice/voice.js");
	__wxRoute = 'page/API/pages/file/file';
	__wxRouteBegin = true;
	define("page/API/pages/file/file.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				onLoad: function () {
					this.setData({
						savedFilePath: wx.getStorageSync("savedFilePath")
					})
				},
				data: {
					tempFilePath: "",
					savedFilePath: "",
					dialog: {
						hidden: !0
					}
				},
				chooseImage: function () {
					var t = this;
					wx.chooseImage({
						count: 1,
						success: function (e) {
							t.setData({
								tempFilePath: e.tempFilePaths[0]
							})
						}
					})
				},
				saveFile: function () {
					if (this.data.tempFilePath.length > 0) {
						var t = this;
						wx.saveFile({
							tempFilePath: this.data.tempFilePath,
							success: function (e) {
								t.setData({
									savedFilePath: e.savedFilePath
								}), wx.setStorageSync("savedFilePath", e.savedFilePath), t.setData({
									dialog: {
										title: "保存成功",
										content: "下次进入应用时，此文件仍可用",
										hidden: !1
									}
								})
							},
							fail: function (e) {
								t.setData({
									dialog: {
										title: "保存失败",
										content: "应该是有 bug 吧",
										hidden: !1
									}
								})
							}
						})
					}
				},
				clear: function () {
					wx.setStorageSync("savedFilePath", ""), this.setData({
						tempFilePath: "",
						savedFilePath: ""
					})
				},
				confirm: function () {
					this.setData({
						"dialog.hidden": !0
					})
				}
			})
		}();
	});
	require("page/API/pages/file/file.js");
	__wxRoute = 'page/API/pages/on-accelerometer-change/on-accelerometer-change';
	__wxRouteBegin = true;
	define("page/API/pages/on-accelerometer-change/on-accelerometer-change.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				data: {
					x: 0,
					y: 0,
					z: 0,
					enabled: !0
				},
				onReady: function () {
					this.drawBigBall();
					var a = this;
					this.position = {
						x: 151,
						y: 151,
						vx: 0,
						vy: 0,
						ax: 0,
						ay: 0
					}, wx.onAccelerometerChange(function (t) {
						a.setData({
							x: t.x.toFixed(2),
							y: t.y.toFixed(2),
							z: t.z.toFixed(2)
						}), a.position.ax = Math.sin(t.x * Math.PI / 2), a.position.ay = -Math.sin(t.y * Math.PI / 2)
					}), this.interval = setInterval(function () {
						a.drawSmallBall()
					}, 17)
				},
				drawBigBall: function () {
					var a = wx.createContext();
					a.beginPath(0), a.arc(151, 151, 140, 0, 2 * Math.PI), a.setFillStyle("#ffffff"), a.setStrokeStyle("#aaaaaa"), a.fill(), wx.drawCanvas({
						canvasId: "big-ball",
						actions: a.getActions()
					})
				},
				drawSmallBall: function () {
					var a = this.position,
						t = "rgba(1,1,1,0)";
					a.x = a.x + a.vx, a.y = a.y + a.vy, a.vx = a.vx + a.ax, a.vy = a.vy + a.ay, Math.sqrt(Math.pow(Math.abs(a.x) - 151, 2) + Math.pow(Math.abs(a.y) - 151, 2)) >= 115 && (a.x > 151 && a.vx > 0 && (a.vx = 0), a.x < 151 && a.vx < 0 && (a.vx = 0), a.y > 151 && a.vy > 0 && (a.vy = 0), a.y < 151 && a.vy < 0 && (a.vy = 0), t = "#ff0000");
					var e = wx.createContext();
					e.beginPath(0), e.arc(a.x, a.y, 15, 0, 2 * Math.PI), e.setFillStyle("#1aad19"), e.setStrokeStyle(t), e.fill(), wx.drawCanvas({
						canvasId: "small-ball",
						actions: e.getActions()
					})
				},
				startAccelerometer: function () {
					if (!this.data.enabled) {
						var a = this;
						wx.startAccelerometer({
							success: function () {
								a.setData({
									enabled: !0
								})
							}
						})
					}
				},
				stopAccelerometer: function () {
					if (this.data.enabled) {
						var a = this;
						wx.stopAccelerometer({
							success: function () {
								a.setData({
									enabled: !1
								})
							}
						})
					}
				},
				onUnload: function () {
					clearInterval(this.interval)
				}
			})
		}();
	});
	require("page/API/pages/on-accelerometer-change/on-accelerometer-change.js");
	__wxRoute = 'page/API/pages/canvas/canvas';
	__wxRouteBegin = true;
	define("page/API/pages/canvas/canvas.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			var t = require("./example.js");
			Page({
				onLoad: function () {
					this.context = wx.createContext();
					var n = Object.keys(t);
					this.setData({
						methods: n
					});
					var a = this;
					n.forEach(function (n) {
						a[n] = function () {
							t[n](a.context);
							var c = a.context.getActions();
							wx.drawCanvas({
								canvasId: "canvas",
								actions: c
							})
						}
					})
				},
				toTempFilePath: function () {
					wx.canvasToTempFilePath({
						canvasId: "canvas",
						success: function (t) {
							console.log(t)
						},
						fail: function (t) {
							console.log(t)
						}
					})
				}
			})
		}();
	});
	require("page/API/pages/canvas/canvas.js");
	__wxRoute = 'page/API/pages/background-audio/background-audio';
	__wxRouteBegin = true;
	define("page/API/pages/background-audio/background-audio.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			var a = getApp(),
				t = require("../../../../util/util.js"),
				e = "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46";
			Page({
				onLoad: function () {
					this._enableInterval(), a.globalData.backgroundAudioPlaying && this.setData({
						playing: !0
					})
				},
				data: {
					playing: !1,
					playTime: 0,
					formatedPlayTime: "00:00:00"
				},
				play: function (t) {
					var n = this;
					wx.playBackgroundAudio({
						dataUrl: e,
						title: "此时此刻",
						coverImgUrl: "http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000",
						complete: function (a) {
							n.setData({
								playing: !0
							})
						}
					}), this._enableInterval(), a.globalData.backgroundAudioPlaying = !0
				},
				seek: function (a) {
					clearInterval(this.updateInterval);
					var t = this;
					wx.seekBackgroundAudio({
						position: a.detail.value,
						complete: function () {
							setTimeout(function () {
								t._enableInterval()
							}, 2e3)
						}
					})
				},
				pause: function () {
					var t = this;
					wx.pauseBackgroundAudio({
						dataUrl: e,
						success: function () {
							t.setData({
								playing: !1
							})
						}
					}), a.globalData.backgroundAudioPlaying = !1
				},
				stop: function () {
					var n = this;
					wx.stopBackgroundAudio({
						dataUrl: e,
						success: function (a) {
							n.setData({
								playing: !1,
								playTime: 0,
								formatedPlayTime: t.formatTime(0)
							})
						}
					}), a.globalData.backgroundAudioPlaying = !1
				},
				_enableInterval: function () {
					function a() {
						wx.getBackgroundAudioPlayerState({
							success: function (a) {
								e.setData({
									playTime: a.currentPosition,
									formatedPlayTime: t.formatTime(a.currentPosition + 1)
								})
							}
						})
					}
					var e = this;
					a(), this.updateInterval = setInterval(a, 500)
				},
				onUnload: function () {
					clearInterval(this.updateInterval)
				}
			})
		}();
	});
	require("page/API/pages/background-audio/background-audio.js");
	__wxRoute = 'page/API/pages/video/video';
	__wxRouteBegin = true;
	define("page/API/pages/video/video.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			var a = [
					["camera"],
					["album"],
					["camera", "album"]
				],
				e = [
					["front"],
					["back"],
					["front", "back"]
				],
				t = Array.apply(null, {
					length: 60
				}).map(function (a, e) {
					return e + 1
				});
			Page({
				data: {
					sourceTypeIndex: 2,
					sourceType: ["拍摄", "相册", "拍摄或相册"],
					cameraIndex: 2,
					camera: ["前置", "后置", "前置或后置"],
					durationIndex: 59,
					duration: t.map(function (a) {
						return a + "秒"
					}),
					src: ""
				},
				sourceTypeChange: function (a) {
					this.setData({
						sourceTypeIndex: a.detail.value
					})
				},
				cameraChange: function (a) {
					this.setData({
						cameraIndex: a.detail.value
					})
				},
				durationChange: function (a) {
					this.setData({
						durationIndex: a.detail.value
					})
				},
				chooseVideo: function () {
					var n = this;
					wx.chooseVideo({
						sourceType: a[this.data.sourceTypeIndex],
						camera: e[this.data.cameraIndex],
						maxDuration: t[this.data.durationIndex],
						success: function (a) {
							n.setData({
								src: a.tempFilePath
							})
						}
					})
				}
			})
		}();
	});
	require("page/API/pages/video/video.js");
	__wxRoute = 'page/API/pages/get-location/get-location';
	__wxRouteBegin = true;
	define("page/API/pages/get-location/get-location.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			var t = require("../../../../util/util.js"),
				o = t.formatLocation;
			Page({
				data: {
					hasLocation: !1
				},
				getLocation: function () {
					var t = this;
					wx.getLocation({
						success: function (a) {
							console.log(a), t.setData({
								hasLocation: !0,
								location: o(a.longitude, a.latitude)
							})
						}
					})
				},
				clear: function () {
					this.setData({
						hasLocation: !1
					})
				}
			})
		}();
	});
	require("page/API/pages/get-location/get-location.js");
	__wxRoute = 'page/API/pages/open-location/open-location';
	__wxRouteBegin = true;
	define("page/API/pages/open-location/open-location.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				openLocation: function (e) {
					console.log(e);
					var o = e.detail.value;
					console.log(o), wx.openLocation({
						longitude: Number(o.longitude),
						latitude: Number(o.latitude),
						name: o.name,
						address: o.address
					})
				}
			})
		}();
	});
	require("page/API/pages/open-location/open-location.js");
	__wxRoute = 'page/API/pages/choose-location/choose-location';
	__wxRouteBegin = true;
	define("page/API/pages/choose-location/choose-location.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			var o = require("../../../../util/util.js"),
				t = o.formatLocation;
			Page({
				data: {
					hasLocation: !1
				},
				chooseLocation: function () {
					var o = this;
					wx.chooseLocation({
						success: function (a) {
							console.log(a), o.setData({
								hasLocation: !0,
								location: t(a.longitude, a.latitude),
								locationAddress: a.address
							})
						}
					})
				},
				clear: function () {
					this.setData({
						hasLocation: !1
					})
				}
			})
		}();
	});
	require("page/API/pages/choose-location/choose-location.js");
	__wxRoute = 'page/API/pages/storage/storage';
	__wxRouteBegin = true;
	define("page/API/pages/storage/storage.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		! function () {
			"use strict";
			Page({
				data: {
					key: "",
					data: "",
					dialog: {
						title: "",
						content: "",
						hidden: !0
					}
				},
				keyChange: function (t) {
					this.data.key = t.detail.value
				},
				dataChange: function (t) {
					this.data.data = t.detail.value
				},
				getStorage: function () {
					var t, a = this.data.key,
						e = this.data.data;
					0 === a.length ? this.setData({
						key: a,
						data: e,
						"dialog.hidden": !1,
						"dialog.title": "读取数据失败",
						"dialog.content": "key 不能为空"
					}) : (t = wx.getStorageSync(a), "" === t ? this.setData({
						key: a,
						data: e,
						"dialog.hidden": !1,
						"dialog.title": "读取数据失败",
						"dialog.content": "找不到 key 对应的数据"
					}) : this.setData({
						key: a,
						data: e,
						"dialog.hidden": !1,
						"dialog.title": "读取数据成功",
						"dialog.content": "data: '" + t + "'"
					}))
				},
				setStorage: function () {
					var t = this.data.key,
						a = this.data.data;
					0 === t.length ? this.setData({
						key: t,
						data: a,
						"dialog.hidden": !1,
						"dialog.title": "保存数据失败",
						"dialog.content": "key 不能为空"
					}) : (wx.setStorageSync(t, a), this.setData({
						key: t,
						data: a,
						"dialog.hidden": !1,
						"dialog.title": "存储数据成功"
					}))
				},
				clearStorage: function () {
					wx.clearStorageSync(), this.setData({
						key: "",
						data: "",
						"dialog.hidden": !1,
						"dialog.title": "清除数据成功",
						"dialog.content": ""
					})
				},
				confirm: function () {
					this.setData({
						"dialog.hidden": !0,
						"dialog.title": "",
						"dialog.content": ""
					})
				}
			})
		}();
	});
	require("page/API/pages/storage/storage.js");