/*!For license information please see common.bundle.js.LICENSE.txt*/
(() => {
    var e, t, n, r, i = {
            800: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => r
                });
                const r = function(e, t) {
                    return e.then((function(e) {
                        return [null, e]
                    })).catch((function(e) {
                        return t && Object.assign(e, t), [e, void 0]
                    }))
                }
            },
            734: function(e, t, n) {
                ! function(e, t, n) {
                    "use strict";

                    function r(e) {
                        return e && "object" == typeof e && "default" in e ? e : {
                            default: e
                        }
                    }
                    var i = r(t),
                        o = r(n);

                    function a(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    function s(e, t, n) {
                        return t && a(e.prototype, t), n && a(e, n), e
                    }

                    function l() {
                        return (l = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                            }
                            return e
                        }).apply(this, arguments)
                    }
                    var c = "transitionend";

                    function u(e) {
                        var t = this,
                            n = !1;
                        return i.default(this).one(d.TRANSITION_END, (function() {
                            n = !0
                        })), setTimeout((function() {
                            n || d.triggerTransitionEnd(t)
                        }), e), this
                    }
                    var d = {
                        TRANSITION_END: "bsTransitionEnd",
                        getUID: function(e) {
                            do {
                                e += ~~(1e6 * Math.random())
                            } while (document.getElementById(e));
                            return e
                        },
                        getSelectorFromElement: function(e) {
                            var t = e.getAttribute("data-target");
                            if (!t || "#" === t) {
                                var n = e.getAttribute("href");
                                t = n && "#" !== n ? n.trim() : ""
                            }
                            try {
                                return document.querySelector(t) ? t : null
                            } catch (e) {
                                return null
                            }
                        },
                        getTransitionDurationFromElement: function(e) {
                            if (!e) return 0;
                            var t = i.default(e).css("transition-duration"),
                                n = i.default(e).css("transition-delay"),
                                r = parseFloat(t),
                                o = parseFloat(n);
                            return r || o ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(t) + parseFloat(n))) : 0
                        },
                        reflow: function(e) {
                            return e.offsetHeight
                        },
                        triggerTransitionEnd: function(e) {
                            i.default(e).trigger(c)
                        },
                        supportsTransitionEnd: function() {
                            return Boolean(c)
                        },
                        isElement: function(e) {
                            return (e[0] || e).nodeType
                        },
                        typeCheckConfig: function(e, t, n) {
                            for (var r in n)
                                if (Object.prototype.hasOwnProperty.call(n, r)) {
                                    var i = n[r],
                                        o = t[r],
                                        a = o && d.isElement(o) ? "element" : null == (s = o) ? "" + s : {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();
                                    if (!new RegExp(i).test(a)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + a + '" but expected type "' + i + '".')
                                } var s
                        },
                        findShadowRoot: function(e) {
                            if (!document.documentElement.attachShadow) return null;
                            if ("function" == typeof e.getRootNode) {
                                var t = e.getRootNode();
                                return t instanceof ShadowRoot ? t : null
                            }
                            return e instanceof ShadowRoot ? e : e.parentNode ? d.findShadowRoot(e.parentNode) : null
                        },
                        jQueryDetection: function() {
                            if (void 0 === i.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                            var e = i.default.fn.jquery.split(" ")[0].split(".");
                            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
                        }
                    };
                    d.jQueryDetection(), i.default.fn.emulateTransitionEnd = u, i.default.event.special[d.TRANSITION_END] = {
                        bindType: c,
                        delegateType: c,
                        handle: function(e) {
                            if (i.default(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                        }
                    };
                    var f = "bs.alert",
                        h = i.default.fn.alert,
                        p = function() {
                            function e(e) {
                                this._element = e
                            }
                            var t = e.prototype;
                            return t.close = function(e) {
                                var t = this._element;
                                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
                            }, t.dispose = function() {
                                i.default.removeData(this._element, f), this._element = null
                            }, t._getRootElement = function(e) {
                                var t = d.getSelectorFromElement(e),
                                    n = !1;
                                return t && (n = document.querySelector(t)), n || (n = i.default(e).closest(".alert")[0]), n
                            }, t._triggerCloseEvent = function(e) {
                                var t = i.default.Event("close.bs.alert");
                                return i.default(e).trigger(t), t
                            }, t._removeElement = function(e) {
                                var t = this;
                                if (i.default(e).removeClass("show"), i.default(e).hasClass("fade")) {
                                    var n = d.getTransitionDurationFromElement(e);
                                    i.default(e).one(d.TRANSITION_END, (function(n) {
                                        return t._destroyElement(e, n)
                                    })).emulateTransitionEnd(n)
                                } else this._destroyElement(e)
                            }, t._destroyElement = function(e) {
                                i.default(e).detach().trigger("closed.bs.alert").remove()
                            }, e._jQueryInterface = function(t) {
                                return this.each((function() {
                                    var n = i.default(this),
                                        r = n.data(f);
                                    r || (r = new e(this), n.data(f, r)), "close" === t && r[t](this)
                                }))
                            }, e._handleDismiss = function(e) {
                                return function(t) {
                                    t && t.preventDefault(), e.close(this)
                                }
                            }, s(e, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.6.0"
                                }
                            }]), e
                        }();
                    i.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', p._handleDismiss(new p)), i.default.fn.alert = p._jQueryInterface, i.default.fn.alert.Constructor = p, i.default.fn.alert.noConflict = function() {
                        return i.default.fn.alert = h, p._jQueryInterface
                    };
                    var g = "bs.button",
                        m = i.default.fn.button,
                        v = "active",
                        y = '[data-toggle^="button"]',
                        _ = 'input:not([type="hidden"])',
                        b = ".btn",
                        w = function() {
                            function e(e) {
                                this._element = e, this.shouldAvoidTriggerChange = !1
                            }
                            var t = e.prototype;
                            return t.toggle = function() {
                                var e = !0,
                                    t = !0,
                                    n = i.default(this._element).closest('[data-toggle="buttons"]')[0];
                                if (n) {
                                    var r = this._element.querySelector(_);
                                    if (r) {
                                        if ("radio" === r.type)
                                            if (r.checked && this._element.classList.contains(v)) e = !1;
                                            else {
                                                var o = n.querySelector(".active");
                                                o && i.default(o).removeClass(v)
                                            } e && ("checkbox" !== r.type && "radio" !== r.type || (r.checked = !this._element.classList.contains(v)), this.shouldAvoidTriggerChange || i.default(r).trigger("change")), r.focus(), t = !1
                                    }
                                }
                                this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(v)), e && i.default(this._element).toggleClass(v))
                            }, t.dispose = function() {
                                i.default.removeData(this._element, g), this._element = null
                            }, e._jQueryInterface = function(t, n) {
                                return this.each((function() {
                                    var r = i.default(this),
                                        o = r.data(g);
                                    o || (o = new e(this), r.data(g, o)), o.shouldAvoidTriggerChange = n, "toggle" === t && o[t]()
                                }))
                            }, s(e, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.6.0"
                                }
                            }]), e
                        }();
                    i.default(document).on("click.bs.button.data-api", y, (function(e) {
                        var t = e.target,
                            n = t;
                        if (i.default(t).hasClass("btn") || (t = i.default(t).closest(b)[0]), !t || t.hasAttribute("disabled") || t.classList.contains("disabled")) e.preventDefault();
                        else {
                            var r = t.querySelector(_);
                            if (r && (r.hasAttribute("disabled") || r.classList.contains("disabled"))) return void e.preventDefault();
                            "INPUT" !== n.tagName && "LABEL" === t.tagName || w._jQueryInterface.call(i.default(t), "toggle", "INPUT" === n.tagName)
                        }
                    })).on("focus.bs.button.data-api blur.bs.button.data-api", y, (function(e) {
                        var t = i.default(e.target).closest(b)[0];
                        i.default(t).toggleClass("focus", /^focus(in)?$/.test(e.type))
                    })), i.default(window).on("load.bs.button.data-api", (function() {
                        for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) {
                            var r = e[t],
                                i = r.querySelector(_);
                            i.checked || i.hasAttribute("checked") ? r.classList.add(v) : r.classList.remove(v)
                        }
                        for (var o = 0, a = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; o < a; o++) {
                            var s = e[o];
                            "true" === s.getAttribute("aria-pressed") ? s.classList.add(v) : s.classList.remove(v)
                        }
                    })), i.default.fn.button = w._jQueryInterface, i.default.fn.button.Constructor = w, i.default.fn.button.noConflict = function() {
                        return i.default.fn.button = m, w._jQueryInterface
                    };
                    var x = "carousel",
                        E = "bs.carousel",
                        T = ".bs.carousel",
                        C = i.default.fn[x],
                        k = {
                            interval: 5e3,
                            keyboard: !0,
                            slide: !1,
                            pause: "hover",
                            wrap: !0,
                            touch: !0
                        },
                        S = {
                            interval: "(number|boolean)",
                            keyboard: "boolean",
                            slide: "(boolean|string)",
                            pause: "(string|boolean)",
                            wrap: "boolean",
                            touch: "boolean"
                        },
                        A = "next",
                        N = "prev",
                        D = "slid.bs.carousel",
                        j = "active",
                        O = ".active.carousel-item",
                        L = {
                            TOUCH: "touch",
                            PEN: "pen"
                        },
                        I = function() {
                            function e(e, t) {
                                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
                            }
                            var t = e.prototype;
                            return t.next = function() {
                                this._isSliding || this._slide(A)
                            }, t.nextWhenVisible = function() {
                                var e = i.default(this._element);
                                !document.hidden && e.is(":visible") && "hidden" !== e.css("visibility") && this.next()
                            }, t.prev = function() {
                                this._isSliding || this._slide(N)
                            }, t.pause = function(e) {
                                e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (d.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                            }, t.cycle = function(e) {
                                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                            }, t.to = function(e) {
                                var t = this;
                                this._activeElement = this._element.querySelector(O);
                                var n = this._getItemIndex(this._activeElement);
                                if (!(e > this._items.length - 1 || e < 0))
                                    if (this._isSliding) i.default(this._element).one(D, (function() {
                                        return t.to(e)
                                    }));
                                    else {
                                        if (n === e) return this.pause(), void this.cycle();
                                        var r = e > n ? A : N;
                                        this._slide(r, this._items[e])
                                    }
                            }, t.dispose = function() {
                                i.default(this._element).off(T), i.default.removeData(this._element, E), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                            }, t._getConfig = function(e) {
                                return e = l({}, k, e), d.typeCheckConfig(x, e, S), e
                            }, t._handleSwipe = function() {
                                var e = Math.abs(this.touchDeltaX);
                                if (!(e <= 40)) {
                                    var t = e / this.touchDeltaX;
                                    this.touchDeltaX = 0, t > 0 && this.prev(), t < 0 && this.next()
                                }
                            }, t._addEventListeners = function() {
                                var e = this;
                                this._config.keyboard && i.default(this._element).on("keydown.bs.carousel", (function(t) {
                                    return e._keydown(t)
                                })), "hover" === this._config.pause && i.default(this._element).on("mouseenter.bs.carousel", (function(t) {
                                    return e.pause(t)
                                })).on("mouseleave.bs.carousel", (function(t) {
                                    return e.cycle(t)
                                })), this._config.touch && this._addTouchEventListeners()
                            }, t._addTouchEventListeners = function() {
                                var e = this;
                                if (this._touchSupported) {
                                    var t = function(t) {
                                            e._pointerEvent && L[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                                        },
                                        n = function(t) {
                                            e._pointerEvent && L[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout((function(t) {
                                                return e.cycle(t)
                                            }), 500 + e._config.interval))
                                        };
                                    i.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", (function(e) {
                                        return e.preventDefault()
                                    })), this._pointerEvent ? (i.default(this._element).on("pointerdown.bs.carousel", (function(e) {
                                        return t(e)
                                    })), i.default(this._element).on("pointerup.bs.carousel", (function(e) {
                                        return n(e)
                                    })), this._element.classList.add("pointer-event")) : (i.default(this._element).on("touchstart.bs.carousel", (function(e) {
                                        return t(e)
                                    })), i.default(this._element).on("touchmove.bs.carousel", (function(t) {
                                        return function(t) {
                                            t.originalEvent.touches && t.originalEvent.touches.length > 1 ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX
                                        }(t)
                                    })), i.default(this._element).on("touchend.bs.carousel", (function(e) {
                                        return n(e)
                                    })))
                                }
                            }, t._keydown = function(e) {
                                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                                    case 37:
                                        e.preventDefault(), this.prev();
                                        break;
                                    case 39:
                                        e.preventDefault(), this.next()
                                }
                            }, t._getItemIndex = function(e) {
                                return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e)
                            }, t._getItemByDirection = function(e, t) {
                                var n = e === A,
                                    r = e === N,
                                    i = this._getItemIndex(t),
                                    o = this._items.length - 1;
                                if ((r && 0 === i || n && i === o) && !this._config.wrap) return t;
                                var a = (i + (e === N ? -1 : 1)) % this._items.length;
                                return -1 === a ? this._items[this._items.length - 1] : this._items[a]
                            }, t._triggerSlideEvent = function(e, t) {
                                var n = this._getItemIndex(e),
                                    r = this._getItemIndex(this._element.querySelector(O)),
                                    o = i.default.Event("slide.bs.carousel", {
                                        relatedTarget: e,
                                        direction: t,
                                        from: r,
                                        to: n
                                    });
                                return i.default(this._element).trigger(o), o
                            }, t._setActiveIndicatorElement = function(e) {
                                if (this._indicatorsElement) {
                                    var t = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                                    i.default(t).removeClass(j);
                                    var n = this._indicatorsElement.children[this._getItemIndex(e)];
                                    n && i.default(n).addClass(j)
                                }
                            }, t._updateInterval = function() {
                                var e = this._activeElement || this._element.querySelector(O);
                                if (e) {
                                    var t = parseInt(e.getAttribute("data-interval"), 10);
                                    t ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval
                                }
                            }, t._slide = function(e, t) {
                                var n, r, o, a = this,
                                    s = this._element.querySelector(O),
                                    l = this._getItemIndex(s),
                                    c = t || s && this._getItemByDirection(e, s),
                                    u = this._getItemIndex(c),
                                    f = Boolean(this._interval);
                                if (e === A ? (n = "carousel-item-left", r = "carousel-item-next", o = "left") : (n = "carousel-item-right", r = "carousel-item-prev", o = "right"), c && i.default(c).hasClass(j)) this._isSliding = !1;
                                else if (!this._triggerSlideEvent(c, o).isDefaultPrevented() && s && c) {
                                    this._isSliding = !0, f && this.pause(), this._setActiveIndicatorElement(c), this._activeElement = c;
                                    var h = i.default.Event(D, {
                                        relatedTarget: c,
                                        direction: o,
                                        from: l,
                                        to: u
                                    });
                                    if (i.default(this._element).hasClass("slide")) {
                                        i.default(c).addClass(r), d.reflow(c), i.default(s).addClass(n), i.default(c).addClass(n);
                                        var p = d.getTransitionDurationFromElement(s);
                                        i.default(s).one(d.TRANSITION_END, (function() {
                                            i.default(c).removeClass(n + " " + r).addClass(j), i.default(s).removeClass("active " + r + " " + n), a._isSliding = !1, setTimeout((function() {
                                                return i.default(a._element).trigger(h)
                                            }), 0)
                                        })).emulateTransitionEnd(p)
                                    } else i.default(s).removeClass(j), i.default(c).addClass(j), this._isSliding = !1, i.default(this._element).trigger(h);
                                    f && this.cycle()
                                }
                            }, e._jQueryInterface = function(t) {
                                return this.each((function() {
                                    var n = i.default(this).data(E),
                                        r = l({}, k, i.default(this).data());
                                    "object" == typeof t && (r = l({}, r, t));
                                    var o = "string" == typeof t ? t : r.slide;
                                    if (n || (n = new e(this, r), i.default(this).data(E, n)), "number" == typeof t) n.to(t);
                                    else if ("string" == typeof o) {
                                        if (void 0 === n[o]) throw new TypeError('No method named "' + o + '"');
                                        n[o]()
                                    } else r.interval && r.ride && (n.pause(), n.cycle())
                                }))
                            }, e._dataApiClickHandler = function(t) {
                                var n = d.getSelectorFromElement(this);
                                if (n) {
                                    var r = i.default(n)[0];
                                    if (r && i.default(r).hasClass("carousel")) {
                                        var o = l({}, i.default(r).data(), i.default(this).data()),
                                            a = this.getAttribute("data-slide-to");
                                        a && (o.interval = !1), e._jQueryInterface.call(i.default(r), o), a && i.default(r).data(E).to(a), t.preventDefault()
                                    }
                                }
                            }, s(e, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.6.0"
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return k
                                }
                            }]), e
                        }();
                    i.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", I._dataApiClickHandler), i.default(window).on("load.bs.carousel.data-api", (function() {
                        for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), t = 0, n = e.length; t < n; t++) {
                            var r = i.default(e[t]);
                            I._jQueryInterface.call(r, r.data())
                        }
                    })), i.default.fn[x] = I._jQueryInterface, i.default.fn[x].Constructor = I, i.default.fn[x].noConflict = function() {
                        return i.default.fn[x] = C, I._jQueryInterface
                    };
                    var P = "collapse",
                        $ = "bs.collapse",
                        R = i.default.fn[P],
                        q = {
                            toggle: !0,
                            parent: ""
                        },
                        H = {
                            toggle: "boolean",
                            parent: "(string|element)"
                        },
                        M = "show",
                        F = "collapse",
                        B = "collapsing",
                        W = "collapsed",
                        U = "width",
                        z = '[data-toggle="collapse"]',
                        V = function() {
                            function e(e, t) {
                                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                                for (var n = [].slice.call(document.querySelectorAll(z)), r = 0, i = n.length; r < i; r++) {
                                    var o = n[r],
                                        a = d.getSelectorFromElement(o),
                                        s = [].slice.call(document.querySelectorAll(a)).filter((function(t) {
                                            return t === e
                                        }));
                                    null !== a && s.length > 0 && (this._selector = a, this._triggerArray.push(o))
                                }
                                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                            }
                            var t = e.prototype;
                            return t.toggle = function() {
                                i.default(this._element).hasClass(M) ? this.hide() : this.show()
                            }, t.show = function() {
                                var t, n, r = this;
                                if (!(this._isTransitioning || i.default(this._element).hasClass(M) || (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(e) {
                                        return "string" == typeof r._config.parent ? e.getAttribute("data-parent") === r._config.parent : e.classList.contains(F)
                                    }))).length && (t = null), t && (n = i.default(t).not(this._selector).data($)) && n._isTransitioning))) {
                                    var o = i.default.Event("show.bs.collapse");
                                    if (i.default(this._element).trigger(o), !o.isDefaultPrevented()) {
                                        t && (e._jQueryInterface.call(i.default(t).not(this._selector), "hide"), n || i.default(t).data($, null));
                                        var a = this._getDimension();
                                        i.default(this._element).removeClass(F).addClass(B), this._element.style[a] = 0, this._triggerArray.length && i.default(this._triggerArray).removeClass(W).attr("aria-expanded", !0), this.setTransitioning(!0);
                                        var s = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                                            l = d.getTransitionDurationFromElement(this._element);
                                        i.default(this._element).one(d.TRANSITION_END, (function() {
                                            i.default(r._element).removeClass(B).addClass("collapse show"), r._element.style[a] = "", r.setTransitioning(!1), i.default(r._element).trigger("shown.bs.collapse")
                                        })).emulateTransitionEnd(l), this._element.style[a] = this._element[s] + "px"
                                    }
                                }
                            }, t.hide = function() {
                                var e = this;
                                if (!this._isTransitioning && i.default(this._element).hasClass(M)) {
                                    var t = i.default.Event("hide.bs.collapse");
                                    if (i.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                                        var n = this._getDimension();
                                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", d.reflow(this._element), i.default(this._element).addClass(B).removeClass("collapse show");
                                        var r = this._triggerArray.length;
                                        if (r > 0)
                                            for (var o = 0; o < r; o++) {
                                                var a = this._triggerArray[o],
                                                    s = d.getSelectorFromElement(a);
                                                null !== s && (i.default([].slice.call(document.querySelectorAll(s))).hasClass(M) || i.default(a).addClass(W).attr("aria-expanded", !1))
                                            }
                                        this.setTransitioning(!0);
                                        this._element.style[n] = "";
                                        var l = d.getTransitionDurationFromElement(this._element);
                                        i.default(this._element).one(d.TRANSITION_END, (function() {
                                            e.setTransitioning(!1), i.default(e._element).removeClass(B).addClass(F).trigger("hidden.bs.collapse")
                                        })).emulateTransitionEnd(l)
                                    }
                                }
                            }, t.setTransitioning = function(e) {
                                this._isTransitioning = e
                            }, t.dispose = function() {
                                i.default.removeData(this._element, $), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                            }, t._getConfig = function(e) {
                                return (e = l({}, q, e)).toggle = Boolean(e.toggle), d.typeCheckConfig(P, e, H), e
                            }, t._getDimension = function() {
                                return i.default(this._element).hasClass(U) ? U : "height"
                            }, t._getParent = function() {
                                var t, n = this;
                                d.isElement(this._config.parent) ? (t = this._config.parent, void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
                                var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                                    o = [].slice.call(t.querySelectorAll(r));
                                return i.default(o).each((function(t, r) {
                                    n._addAriaAndCollapsedClass(e._getTargetFromElement(r), [r])
                                })), t
                            }, t._addAriaAndCollapsedClass = function(e, t) {
                                var n = i.default(e).hasClass(M);
                                t.length && i.default(t).toggleClass(W, !n).attr("aria-expanded", n)
                            }, e._getTargetFromElement = function(e) {
                                var t = d.getSelectorFromElement(e);
                                return t ? document.querySelector(t) : null
                            }, e._jQueryInterface = function(t) {
                                return this.each((function() {
                                    var n = i.default(this),
                                        r = n.data($),
                                        o = l({}, q, n.data(), "object" == typeof t && t ? t : {});
                                    if (!r && o.toggle && "string" == typeof t && /show|hide/.test(t) && (o.toggle = !1), r || (r = new e(this, o), n.data($, r)), "string" == typeof t) {
                                        if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                                        r[t]()
                                    }
                                }))
                            }, s(e, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.6.0"
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return q
                                }
                            }]), e
                        }();
                    i.default(document).on("click.bs.collapse.data-api", z, (function(e) {
                        "A" === e.currentTarget.tagName && e.preventDefault();
                        var t = i.default(this),
                            n = d.getSelectorFromElement(this),
                            r = [].slice.call(document.querySelectorAll(n));
                        i.default(r).each((function() {
                            var e = i.default(this),
                                n = e.data($) ? "toggle" : t.data();
                            V._jQueryInterface.call(e, n)
                        }))
                    })), i.default.fn[P] = V._jQueryInterface, i.default.fn[P].Constructor = V, i.default.fn[P].noConflict = function() {
                        return i.default.fn[P] = R, V._jQueryInterface
                    };
                    var G = "dropdown",
                        Q = "bs.dropdown",
                        Y = ".bs.dropdown",
                        X = i.default.fn[G],
                        J = new RegExp("38|40|27"),
                        K = "hide.bs.dropdown",
                        Z = "hidden.bs.dropdown",
                        ee = "click.bs.dropdown.data-api",
                        te = "keydown.bs.dropdown.data-api",
                        ne = "disabled",
                        re = "show",
                        ie = "dropdown-menu-right",
                        oe = '[data-toggle="dropdown"]',
                        ae = ".dropdown-menu",
                        se = {
                            offset: 0,
                            flip: !0,
                            boundary: "scrollParent",
                            reference: "toggle",
                            display: "dynamic",
                            popperConfig: null
                        },
                        le = {
                            offset: "(number|string|function)",
                            flip: "boolean",
                            boundary: "(string|element)",
                            reference: "(string|element)",
                            display: "string",
                            popperConfig: "(null|object)"
                        },
                        ce = function() {
                            function e(e, t) {
                                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                            }
                            var t = e.prototype;
                            return t.toggle = function() {
                                if (!this._element.disabled && !i.default(this._element).hasClass(ne)) {
                                    var t = i.default(this._menu).hasClass(re);
                                    e._clearMenus(), t || this.show(!0)
                                }
                            }, t.show = function(t) {
                                if (void 0 === t && (t = !1), !(this._element.disabled || i.default(this._element).hasClass(ne) || i.default(this._menu).hasClass(re))) {
                                    var n = {
                                            relatedTarget: this._element
                                        },
                                        r = i.default.Event("show.bs.dropdown", n),
                                        a = e._getParentFromElement(this._element);
                                    if (i.default(a).trigger(r), !r.isDefaultPrevented()) {
                                        if (!this._inNavbar && t) {
                                            if (void 0 === o.default) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                                            var s = this._element;
                                            "parent" === this._config.reference ? s = a : d.isElement(this._config.reference) && (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])), "scrollParent" !== this._config.boundary && i.default(a).addClass("position-static"), this._popper = new o.default(s, this._menu, this._getPopperConfig())
                                        }
                                        "ontouchstart" in document.documentElement && 0 === i.default(a).closest(".navbar-nav").length && i.default(document.body).children().on("mouseover", null, i.default.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), i.default(this._menu).toggleClass(re), i.default(a).toggleClass(re).trigger(i.default.Event("shown.bs.dropdown", n))
                                    }
                                }
                            }, t.hide = function() {
                                if (!this._element.disabled && !i.default(this._element).hasClass(ne) && i.default(this._menu).hasClass(re)) {
                                    var t = {
                                            relatedTarget: this._element
                                        },
                                        n = i.default.Event(K, t),
                                        r = e._getParentFromElement(this._element);
                                    i.default(r).trigger(n), n.isDefaultPrevented() || (this._popper && this._popper.destroy(), i.default(this._menu).toggleClass(re), i.default(r).toggleClass(re).trigger(i.default.Event(Z, t)))
                                }
                            }, t.dispose = function() {
                                i.default.removeData(this._element, Q), i.default(this._element).off(Y), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                            }, t.update = function() {
                                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                            }, t._addEventListeners = function() {
                                var e = this;
                                i.default(this._element).on("click.bs.dropdown", (function(t) {
                                    t.preventDefault(), t.stopPropagation(), e.toggle()
                                }))
                            }, t._getConfig = function(e) {
                                return e = l({}, this.constructor.Default, i.default(this._element).data(), e), d.typeCheckConfig(G, e, this.constructor.DefaultType), e
                            }, t._getMenuElement = function() {
                                if (!this._menu) {
                                    var t = e._getParentFromElement(this._element);
                                    t && (this._menu = t.querySelector(ae))
                                }
                                return this._menu
                            }, t._getPlacement = function() {
                                var e = i.default(this._element.parentNode),
                                    t = "bottom-start";
                                return e.hasClass("dropup") ? t = i.default(this._menu).hasClass(ie) ? "top-end" : "top-start" : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : i.default(this._menu).hasClass(ie) && (t = "bottom-end"), t
                            }, t._detectNavbar = function() {
                                return i.default(this._element).closest(".navbar").length > 0
                            }, t._getOffset = function() {
                                var e = this,
                                    t = {};
                                return "function" == typeof this._config.offset ? t.fn = function(t) {
                                    return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t
                                } : t.offset = this._config.offset, t
                            }, t._getPopperConfig = function() {
                                var e = {
                                    placement: this._getPlacement(),
                                    modifiers: {
                                        offset: this._getOffset(),
                                        flip: {
                                            enabled: this._config.flip
                                        },
                                        preventOverflow: {
                                            boundariesElement: this._config.boundary
                                        }
                                    }
                                };
                                return "static" === this._config.display && (e.modifiers.applyStyle = {
                                    enabled: !1
                                }), l({}, e, this._config.popperConfig)
                            }, e._jQueryInterface = function(t) {
                                return this.each((function() {
                                    var n = i.default(this).data(Q);
                                    if (n || (n = new e(this, "object" == typeof t ? t : null), i.default(this).data(Q, n)), "string" == typeof t) {
                                        if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                        n[t]()
                                    }
                                }))
                            }, e._clearMenus = function(t) {
                                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                                    for (var n = [].slice.call(document.querySelectorAll(oe)), r = 0, o = n.length; r < o; r++) {
                                        var a = e._getParentFromElement(n[r]),
                                            s = i.default(n[r]).data(Q),
                                            l = {
                                                relatedTarget: n[r]
                                            };
                                        if (t && "click" === t.type && (l.clickEvent = t), s) {
                                            var c = s._menu;
                                            if (i.default(a).hasClass(re) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && i.default.contains(a, t.target))) {
                                                var u = i.default.Event(K, l);
                                                i.default(a).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && i.default(document.body).children().off("mouseover", null, i.default.noop), n[r].setAttribute("aria-expanded", "false"), s._popper && s._popper.destroy(), i.default(c).removeClass(re), i.default(a).removeClass(re).trigger(i.default.Event(Z, l)))
                                            }
                                        }
                                    }
                            }, e._getParentFromElement = function(e) {
                                var t, n = d.getSelectorFromElement(e);
                                return n && (t = document.querySelector(n)), t || e.parentNode
                            }, e._dataApiKeydownHandler = function(t) {
                                if (!(/input|textarea/i.test(t.target.tagName) ? 32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || i.default(t.target).closest(ae).length) : !J.test(t.which)) && !this.disabled && !i.default(this).hasClass(ne)) {
                                    var n = e._getParentFromElement(this),
                                        r = i.default(n).hasClass(re);
                                    if (r || 27 !== t.which) {
                                        if (t.preventDefault(), t.stopPropagation(), !r || 27 === t.which || 32 === t.which) return 27 === t.which && i.default(n.querySelector(oe)).trigger("focus"), void i.default(this).trigger("click");
                                        var o = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(e) {
                                            return i.default(e).is(":visible")
                                        }));
                                        if (0 !== o.length) {
                                            var a = o.indexOf(t.target);
                                            38 === t.which && a > 0 && a--, 40 === t.which && a < o.length - 1 && a++, a < 0 && (a = 0), o[a].focus()
                                        }
                                    }
                                }
                            }, s(e, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.6.0"
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return se
                                }
                            }, {
                                key: "DefaultType",
                                get: function() {
                                    return le
                                }
                            }]), e
                        }();
                    i.default(document).on(te, oe, ce._dataApiKeydownHandler).on(te, ae, ce._dataApiKeydownHandler).on(ee + " keyup.bs.dropdown.data-api", ce._clearMenus).on(ee, oe, (function(e) {
                        e.preventDefault(), e.stopPropagation(), ce._jQueryInterface.call(i.default(this), "toggle")
                    })).on(ee, ".dropdown form", (function(e) {
                        e.stopPropagation()
                    })), i.default.fn[G] = ce._jQueryInterface, i.default.fn[G].Constructor = ce, i.default.fn[G].noConflict = function() {
                        return i.default.fn[G] = X, ce._jQueryInterface
                    };
                    var ue = "modal",
                        de = "bs.modal",
                        fe = ".bs.modal",
                        he = i.default.fn.modal,
                        pe = {
                            backdrop: !0,
                            keyboard: !0,
                            focus: !0,
                            show: !0
                        },
                        ge = {
                            backdrop: "(boolean|string)",
                            keyboard: "boolean",
                            focus: "boolean",
                            show: "boolean"
                        },
                        me = "hidden.bs.modal",
                        ve = "show.bs.modal",
                        ye = "focusin.bs.modal",
                        _e = "resize.bs.modal",
                        be = "click.dismiss.bs.modal",
                        we = "keydown.dismiss.bs.modal",
                        xe = "mousedown.dismiss.bs.modal",
                        Ee = "modal-open",
                        Te = "fade",
                        Ce = "show",
                        ke = "modal-static",
                        Se = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                        Ae = ".sticky-top",
                        Ne = function() {
                            function e(e, t) {
                                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
                            }
                            var t = e.prototype;
                            return t.toggle = function(e) {
                                return this._isShown ? this.hide() : this.show(e)
                            }, t.show = function(e) {
                                var t = this;
                                if (!this._isShown && !this._isTransitioning) {
                                    i.default(this._element).hasClass(Te) && (this._isTransitioning = !0);
                                    var n = i.default.Event(ve, {
                                        relatedTarget: e
                                    });
                                    i.default(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), i.default(this._element).on(be, '[data-dismiss="modal"]', (function(e) {
                                        return t.hide(e)
                                    })), i.default(this._dialog).on(xe, (function() {
                                        i.default(t._element).one("mouseup.dismiss.bs.modal", (function(e) {
                                            i.default(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                                        }))
                                    })), this._showBackdrop((function() {
                                        return t._showElement(e)
                                    })))
                                }
                            }, t.hide = function(e) {
                                var t = this;
                                if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                                    var n = i.default.Event("hide.bs.modal");
                                    if (i.default(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                                        this._isShown = !1;
                                        var r = i.default(this._element).hasClass(Te);
                                        if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), i.default(document).off(ye), i.default(this._element).removeClass(Ce), i.default(this._element).off(be), i.default(this._dialog).off(xe), r) {
                                            var o = d.getTransitionDurationFromElement(this._element);
                                            i.default(this._element).one(d.TRANSITION_END, (function(e) {
                                                return t._hideModal(e)
                                            })).emulateTransitionEnd(o)
                                        } else this._hideModal()
                                    }
                                }
                            }, t.dispose = function() {
                                [window, this._element, this._dialog].forEach((function(e) {
                                    return i.default(e).off(fe)
                                })), i.default(document).off(ye), i.default.removeData(this._element, de), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
                            }, t.handleUpdate = function() {
                                this._adjustDialog()
                            }, t._getConfig = function(e) {
                                return e = l({}, pe, e), d.typeCheckConfig(ue, e, ge), e
                            }, t._triggerBackdropTransition = function() {
                                var e = this,
                                    t = i.default.Event("hidePrevented.bs.modal");
                                if (i.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                                    var n = this._element.scrollHeight > document.documentElement.clientHeight;
                                    n || (this._element.style.overflowY = "hidden"), this._element.classList.add(ke);
                                    var r = d.getTransitionDurationFromElement(this._dialog);
                                    i.default(this._element).off(d.TRANSITION_END), i.default(this._element).one(d.TRANSITION_END, (function() {
                                        e._element.classList.remove(ke), n || i.default(e._element).one(d.TRANSITION_END, (function() {
                                            e._element.style.overflowY = ""
                                        })).emulateTransitionEnd(e._element, r)
                                    })).emulateTransitionEnd(r), this._element.focus()
                                }
                            }, t._showElement = function(e) {
                                var t = this,
                                    n = i.default(this._element).hasClass(Te),
                                    r = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), i.default(this._dialog).hasClass("modal-dialog-scrollable") && r ? r.scrollTop = 0 : this._element.scrollTop = 0, n && d.reflow(this._element), i.default(this._element).addClass(Ce), this._config.focus && this._enforceFocus();
                                var o = i.default.Event("shown.bs.modal", {
                                        relatedTarget: e
                                    }),
                                    a = function() {
                                        t._config.focus && t._element.focus(), t._isTransitioning = !1, i.default(t._element).trigger(o)
                                    };
                                if (n) {
                                    var s = d.getTransitionDurationFromElement(this._dialog);
                                    i.default(this._dialog).one(d.TRANSITION_END, a).emulateTransitionEnd(s)
                                } else a()
                            }, t._enforceFocus = function() {
                                var e = this;
                                i.default(document).off(ye).on(ye, (function(t) {
                                    document !== t.target && e._element !== t.target && 0 === i.default(e._element).has(t.target).length && e._element.focus()
                                }))
                            }, t._setEscapeEvent = function() {
                                var e = this;
                                this._isShown ? i.default(this._element).on(we, (function(t) {
                                    e._config.keyboard && 27 === t.which ? (t.preventDefault(), e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition()
                                })) : this._isShown || i.default(this._element).off(we)
                            }, t._setResizeEvent = function() {
                                var e = this;
                                this._isShown ? i.default(window).on(_e, (function(t) {
                                    return e.handleUpdate(t)
                                })) : i.default(window).off(_e)
                            }, t._hideModal = function() {
                                var e = this;
                                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop((function() {
                                    i.default(document.body).removeClass(Ee), e._resetAdjustments(), e._resetScrollbar(), i.default(e._element).trigger(me)
                                }))
                            }, t._removeBackdrop = function() {
                                this._backdrop && (i.default(this._backdrop).remove(), this._backdrop = null)
                            }, t._showBackdrop = function(e) {
                                var t = this,
                                    n = i.default(this._element).hasClass(Te) ? Te : "";
                                if (this._isShown && this._config.backdrop) {
                                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), i.default(this._backdrop).appendTo(document.body), i.default(this._element).on(be, (function(e) {
                                            t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._triggerBackdropTransition() : t.hide())
                                        })), n && d.reflow(this._backdrop), i.default(this._backdrop).addClass(Ce), !e) return;
                                    if (!n) return void e();
                                    var r = d.getTransitionDurationFromElement(this._backdrop);
                                    i.default(this._backdrop).one(d.TRANSITION_END, e).emulateTransitionEnd(r)
                                } else if (!this._isShown && this._backdrop) {
                                    i.default(this._backdrop).removeClass(Ce);
                                    var o = function() {
                                        t._removeBackdrop(), e && e()
                                    };
                                    if (i.default(this._element).hasClass(Te)) {
                                        var a = d.getTransitionDurationFromElement(this._backdrop);
                                        i.default(this._backdrop).one(d.TRANSITION_END, o).emulateTransitionEnd(a)
                                    } else o()
                                } else e && e()
                            }, t._adjustDialog = function() {
                                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                            }, t._resetAdjustments = function() {
                                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                            }, t._checkScrollbar = function() {
                                var e = document.body.getBoundingClientRect();
                                this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                            }, t._setScrollbar = function() {
                                var e = this;
                                if (this._isBodyOverflowing) {
                                    var t = [].slice.call(document.querySelectorAll(Se)),
                                        n = [].slice.call(document.querySelectorAll(Ae));
                                    i.default(t).each((function(t, n) {
                                        var r = n.style.paddingRight,
                                            o = i.default(n).css("padding-right");
                                        i.default(n).data("padding-right", r).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                                    })), i.default(n).each((function(t, n) {
                                        var r = n.style.marginRight,
                                            o = i.default(n).css("margin-right");
                                        i.default(n).data("margin-right", r).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                                    }));
                                    var r = document.body.style.paddingRight,
                                        o = i.default(document.body).css("padding-right");
                                    i.default(document.body).data("padding-right", r).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                                }
                                i.default(document.body).addClass(Ee)
                            }, t._resetScrollbar = function() {
                                var e = [].slice.call(document.querySelectorAll(Se));
                                i.default(e).each((function(e, t) {
                                    var n = i.default(t).data("padding-right");
                                    i.default(t).removeData("padding-right"), t.style.paddingRight = n || ""
                                }));
                                var t = [].slice.call(document.querySelectorAll(".sticky-top"));
                                i.default(t).each((function(e, t) {
                                    var n = i.default(t).data("margin-right");
                                    void 0 !== n && i.default(t).css("margin-right", n).removeData("margin-right")
                                }));
                                var n = i.default(document.body).data("padding-right");
                                i.default(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
                            }, t._getScrollbarWidth = function() {
                                var e = document.createElement("div");
                                e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                                var t = e.getBoundingClientRect().width - e.clientWidth;
                                return document.body.removeChild(e), t
                            }, e._jQueryInterface = function(t, n) {
                                return this.each((function() {
                                    var r = i.default(this).data(de),
                                        o = l({}, pe, i.default(this).data(), "object" == typeof t && t ? t : {});
                                    if (r || (r = new e(this, o), i.default(this).data(de, r)), "string" == typeof t) {
                                        if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                                        r[t](n)
                                    } else o.show && r.show(n)
                                }))
                            }, s(e, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.6.0"
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return pe
                                }
                            }]), e
                        }();
                    i.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function(e) {
                        var t, n = this,
                            r = d.getSelectorFromElement(this);
                        r && (t = document.querySelector(r));
                        var o = i.default(t).data(de) ? "toggle" : l({}, i.default(t).data(), i.default(this).data());
                        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
                        var a = i.default(t).one(ve, (function(e) {
                            e.isDefaultPrevented() || a.one(me, (function() {
                                i.default(n).is(":visible") && n.focus()
                            }))
                        }));
                        Ne._jQueryInterface.call(i.default(t), o, this)
                    })), i.default.fn.modal = Ne._jQueryInterface, i.default.fn.modal.Constructor = Ne, i.default.fn.modal.noConflict = function() {
                        return i.default.fn.modal = he, Ne._jQueryInterface
                    };
                    var De = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
                        je = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
                        Oe = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

                    function Le(e, t, n) {
                        if (0 === e.length) return e;
                        if (n && "function" == typeof n) return n(e);
                        for (var r = (new window.DOMParser).parseFromString(e, "text/html"), i = Object.keys(t), o = [].slice.call(r.body.querySelectorAll("*")), a = function(e, n) {
                                var r = o[e],
                                    a = r.nodeName.toLowerCase();
                                if (-1 === i.indexOf(r.nodeName.toLowerCase())) return r.parentNode.removeChild(r), "continue";
                                var s = [].slice.call(r.attributes),
                                    l = [].concat(t["*"] || [], t[a] || []);
                                s.forEach((function(e) {
                                    (function(e, t) {
                                        var n = e.nodeName.toLowerCase();
                                        if (-1 !== t.indexOf(n)) return -1 === De.indexOf(n) || Boolean(e.nodeValue.match(je) || e.nodeValue.match(Oe));
                                        for (var r = t.filter((function(e) {
                                                return e instanceof RegExp
                                            })), i = 0, o = r.length; i < o; i++)
                                            if (n.match(r[i])) return !0;
                                        return !1
                                    })(e, l) || r.removeAttribute(e.nodeName)
                                }))
                            }, s = 0, l = o.length; s < l; s++) a(s);
                        return r.body.innerHTML
                    }
                    var Ie = "tooltip",
                        Pe = "bs.tooltip",
                        $e = ".bs.tooltip",
                        Re = i.default.fn.tooltip,
                        qe = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
                        He = ["sanitize", "whiteList", "sanitizeFn"],
                        Me = {
                            animation: "boolean",
                            template: "string",
                            title: "(string|element|function)",
                            trigger: "string",
                            delay: "(number|object)",
                            html: "boolean",
                            selector: "(string|boolean)",
                            placement: "(string|function)",
                            offset: "(number|string|function)",
                            container: "(string|element|boolean)",
                            fallbackPlacement: "(string|array)",
                            boundary: "(string|element)",
                            customClass: "(string|function)",
                            sanitize: "boolean",
                            sanitizeFn: "(null|function)",
                            whiteList: "object",
                            popperConfig: "(null|object)"
                        },
                        Fe = {
                            AUTO: "auto",
                            TOP: "top",
                            RIGHT: "right",
                            BOTTOM: "bottom",
                            LEFT: "left"
                        },
                        Be = {
                            animation: !0,
                            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                            trigger: "hover focus",
                            title: "",
                            delay: 0,
                            html: !1,
                            selector: !1,
                            placement: "top",
                            offset: 0,
                            container: !1,
                            fallbackPlacement: "flip",
                            boundary: "scrollParent",
                            customClass: "",
                            sanitize: !0,
                            sanitizeFn: null,
                            whiteList: {
                                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                                a: ["target", "href", "title", "rel"],
                                area: [],
                                b: [],
                                br: [],
                                col: [],
                                code: [],
                                div: [],
                                em: [],
                                hr: [],
                                h1: [],
                                h2: [],
                                h3: [],
                                h4: [],
                                h5: [],
                                h6: [],
                                i: [],
                                img: ["src", "srcset", "alt", "title", "width", "height"],
                                li: [],
                                ol: [],
                                p: [],
                                pre: [],
                                s: [],
                                small: [],
                                span: [],
                                sub: [],
                                sup: [],
                                strong: [],
                                u: [],
                                ul: []
                            },
                            popperConfig: null
                        },
                        We = "show",
                        Ue = "out",
                        ze = {
                            HIDE: "hide.bs.tooltip",
                            HIDDEN: "hidden.bs.tooltip",
                            SHOW: "show.bs.tooltip",
                            SHOWN: "shown.bs.tooltip",
                            INSERTED: "inserted.bs.tooltip",
                            CLICK: "click.bs.tooltip",
                            FOCUSIN: "focusin.bs.tooltip",
                            FOCUSOUT: "focusout.bs.tooltip",
                            MOUSEENTER: "mouseenter.bs.tooltip",
                            MOUSELEAVE: "mouseleave.bs.tooltip"
                        },
                        Ve = "fade",
                        Ge = "show",
                        Qe = "hover",
                        Ye = "focus",
                        Xe = function() {
                            function e(e, t) {
                                if (void 0 === o.default) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                            }
                            var t = e.prototype;
                            return t.enable = function() {
                                this._isEnabled = !0
                            }, t.disable = function() {
                                this._isEnabled = !1
                            }, t.toggleEnabled = function() {
                                this._isEnabled = !this._isEnabled
                            }, t.toggle = function(e) {
                                if (this._isEnabled)
                                    if (e) {
                                        var t = this.constructor.DATA_KEY,
                                            n = i.default(e.currentTarget).data(t);
                                        n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), i.default(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                                    } else {
                                        if (i.default(this.getTipElement()).hasClass(Ge)) return void this._leave(null, this);
                                        this._enter(null, this)
                                    }
                            }, t.dispose = function() {
                                clearTimeout(this._timeout), i.default.removeData(this.element, this.constructor.DATA_KEY), i.default(this.element).off(this.constructor.EVENT_KEY), i.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && i.default(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                            }, t.show = function() {
                                var e = this;
                                if ("none" === i.default(this.element).css("display")) throw new Error("Please use show on visible elements");
                                var t = i.default.Event(this.constructor.Event.SHOW);
                                if (this.isWithContent() && this._isEnabled) {
                                    i.default(this.element).trigger(t);
                                    var n = d.findShadowRoot(this.element),
                                        r = i.default.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                                    if (t.isDefaultPrevented() || !r) return;
                                    var a = this.getTipElement(),
                                        s = d.getUID(this.constructor.NAME);
                                    a.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && i.default(a).addClass(Ve);
                                    var l = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement,
                                        c = this._getAttachment(l);
                                    this.addAttachmentClass(c);
                                    var u = this._getContainer();
                                    i.default(a).data(this.constructor.DATA_KEY, this), i.default.contains(this.element.ownerDocument.documentElement, this.tip) || i.default(a).appendTo(u), i.default(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new o.default(this.element, a, this._getPopperConfig(c)), i.default(a).addClass(Ge), i.default(a).addClass(this.config.customClass), "ontouchstart" in document.documentElement && i.default(document.body).children().on("mouseover", null, i.default.noop);
                                    var f = function() {
                                        e.config.animation && e._fixTransition();
                                        var t = e._hoverState;
                                        e._hoverState = null, i.default(e.element).trigger(e.constructor.Event.SHOWN), t === Ue && e._leave(null, e)
                                    };
                                    if (i.default(this.tip).hasClass(Ve)) {
                                        var h = d.getTransitionDurationFromElement(this.tip);
                                        i.default(this.tip).one(d.TRANSITION_END, f).emulateTransitionEnd(h)
                                    } else f()
                                }
                            }, t.hide = function(e) {
                                var t = this,
                                    n = this.getTipElement(),
                                    r = i.default.Event(this.constructor.Event.HIDE),
                                    o = function() {
                                        t._hoverState !== We && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), i.default(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e()
                                    };
                                if (i.default(this.element).trigger(r), !r.isDefaultPrevented()) {
                                    if (i.default(n).removeClass(Ge), "ontouchstart" in document.documentElement && i.default(document.body).children().off("mouseover", null, i.default.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, i.default(this.tip).hasClass(Ve)) {
                                        var a = d.getTransitionDurationFromElement(n);
                                        i.default(n).one(d.TRANSITION_END, o).emulateTransitionEnd(a)
                                    } else o();
                                    this._hoverState = ""
                                }
                            }, t.update = function() {
                                null !== this._popper && this._popper.scheduleUpdate()
                            }, t.isWithContent = function() {
                                return Boolean(this.getTitle())
                            }, t.addAttachmentClass = function(e) {
                                i.default(this.getTipElement()).addClass("bs-tooltip-" + e)
                            }, t.getTipElement = function() {
                                return this.tip = this.tip || i.default(this.config.template)[0], this.tip
                            }, t.setContent = function() {
                                var e = this.getTipElement();
                                this.setElementContent(i.default(e.querySelectorAll(".tooltip-inner")), this.getTitle()), i.default(e).removeClass("fade show")
                            }, t.setElementContent = function(e, t) {
                                "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = Le(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t)) : e.text(t) : this.config.html ? i.default(t).parent().is(e) || e.empty().append(t) : e.text(i.default(t).text())
                            }, t.getTitle = function() {
                                var e = this.element.getAttribute("data-original-title");
                                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                            }, t._getPopperConfig = function(e) {
                                var t = this;
                                return l({}, {
                                    placement: e,
                                    modifiers: {
                                        offset: this._getOffset(),
                                        flip: {
                                            behavior: this.config.fallbackPlacement
                                        },
                                        arrow: {
                                            element: ".arrow"
                                        },
                                        preventOverflow: {
                                            boundariesElement: this.config.boundary
                                        }
                                    },
                                    onCreate: function(e) {
                                        e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                                    },
                                    onUpdate: function(e) {
                                        return t._handlePopperPlacementChange(e)
                                    }
                                }, this.config.popperConfig)
                            }, t._getOffset = function() {
                                var e = this,
                                    t = {};
                                return "function" == typeof this.config.offset ? t.fn = function(t) {
                                    return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t
                                } : t.offset = this.config.offset, t
                            }, t._getContainer = function() {
                                return !1 === this.config.container ? document.body : d.isElement(this.config.container) ? i.default(this.config.container) : i.default(document).find(this.config.container)
                            }, t._getAttachment = function(e) {
                                return Fe[e.toUpperCase()]
                            }, t._setListeners = function() {
                                var e = this;
                                this.config.trigger.split(" ").forEach((function(t) {
                                    if ("click" === t) i.default(e.element).on(e.constructor.Event.CLICK, e.config.selector, (function(t) {
                                        return e.toggle(t)
                                    }));
                                    else if ("manual" !== t) {
                                        var n = t === Qe ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                            r = t === Qe ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                                        i.default(e.element).on(n, e.config.selector, (function(t) {
                                            return e._enter(t)
                                        })).on(r, e.config.selector, (function(t) {
                                            return e._leave(t)
                                        }))
                                    }
                                })), this._hideModalHandler = function() {
                                    e.element && e.hide()
                                }, i.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = l({}, this.config, {
                                    trigger: "manual",
                                    selector: ""
                                }) : this._fixTitle()
                            }, t._fixTitle = function() {
                                var e = typeof this.element.getAttribute("data-original-title");
                                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                            }, t._enter = function(e, t) {
                                var n = this.constructor.DATA_KEY;
                                (t = t || i.default(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), i.default(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? Ye : Qe] = !0), i.default(t.getTipElement()).hasClass(Ge) || t._hoverState === We ? t._hoverState = We : (clearTimeout(t._timeout), t._hoverState = We, t.config.delay && t.config.delay.show ? t._timeout = setTimeout((function() {
                                    t._hoverState === We && t.show()
                                }), t.config.delay.show) : t.show())
                            }, t._leave = function(e, t) {
                                var n = this.constructor.DATA_KEY;
                                (t = t || i.default(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), i.default(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? Ye : Qe] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = Ue, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout((function() {
                                    t._hoverState === Ue && t.hide()
                                }), t.config.delay.hide) : t.hide())
                            }, t._isWithActiveTrigger = function() {
                                for (var e in this._activeTrigger)
                                    if (this._activeTrigger[e]) return !0;
                                return !1
                            }, t._getConfig = function(e) {
                                var t = i.default(this.element).data();
                                return Object.keys(t).forEach((function(e) {
                                    -1 !== He.indexOf(e) && delete t[e]
                                })), "number" == typeof(e = l({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                                    show: e.delay,
                                    hide: e.delay
                                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), d.typeCheckConfig(Ie, e, this.constructor.DefaultType), e.sanitize && (e.template = Le(e.template, e.whiteList, e.sanitizeFn)), e
                            }, t._getDelegateConfig = function() {
                                var e = {};
                                if (this.config)
                                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                                return e
                            }, t._cleanTipClass = function() {
                                var e = i.default(this.getTipElement()),
                                    t = e.attr("class").match(qe);
                                null !== t && t.length && e.removeClass(t.join(""))
                            }, t._handlePopperPlacementChange = function(e) {
                                this.tip = e.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                            }, t._fixTransition = function() {
                                var e = this.getTipElement(),
                                    t = this.config.animation;
                                null === e.getAttribute("x-placement") && (i.default(e).removeClass(Ve), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
                            }, e._jQueryInterface = function(t) {
                                return this.each((function() {
                                    var n = i.default(this),
                                        r = n.data(Pe),
                                        o = "object" == typeof t && t;
                                    if ((r || !/dispose|hide/.test(t)) && (r || (r = new e(this, o), n.data(Pe, r)), "string" == typeof t)) {
                                        if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                                        r[t]()
                                    }
                                }))
                            }, s(e, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.6.0"
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return Be
                                }
                            }, {
                                key: "NAME",
                                get: function() {
                                    return Ie
                                }
                            }, {
                                key: "DATA_KEY",
                                get: function() {
                                    return Pe
                                }
                            }, {
                                key: "Event",
                                get: function() {
                                    return ze
                                }
                            }, {
                                key: "EVENT_KEY",
                                get: function() {
                                    return $e
                                }
                            }, {
                                key: "DefaultType",
                                get: function() {
                                    return Me
                                }
                            }]), e
                        }();
                    i.default.fn.tooltip = Xe._jQueryInterface, i.default.fn.tooltip.Constructor = Xe, i.default.fn.tooltip.noConflict = function() {
                        return i.default.fn.tooltip = Re, Xe._jQueryInterface
                    };
                    var Je = "popover",
                        Ke = "bs.popover",
                        Ze = ".bs.popover",
                        et = i.default.fn.popover,
                        tt = new RegExp("(^|\\s)bs-popover\\S+", "g"),
                        nt = l({}, Xe.Default, {
                            placement: "right",
                            trigger: "click",
                            content: "",
                            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                        }),
                        rt = l({}, Xe.DefaultType, {
                            content: "(string|element|function)"
                        }),
                        it = {
                            HIDE: "hide.bs.popover",
                            HIDDEN: "hidden.bs.popover",
                            SHOW: "show.bs.popover",
                            SHOWN: "shown.bs.popover",
                            INSERTED: "inserted.bs.popover",
                            CLICK: "click.bs.popover",
                            FOCUSIN: "focusin.bs.popover",
                            FOCUSOUT: "focusout.bs.popover",
                            MOUSEENTER: "mouseenter.bs.popover",
                            MOUSELEAVE: "mouseleave.bs.popover"
                        },
                        ot = function(e) {
                            function t() {
                                return e.apply(this, arguments) || this
                            }
                            var n, r;
                            r = e, (n = t).prototype = Object.create(r.prototype), n.prototype.constructor = n, n.__proto__ = r;
                            var o = t.prototype;
                            return o.isWithContent = function() {
                                return this.getTitle() || this._getContent()
                            }, o.addAttachmentClass = function(e) {
                                i.default(this.getTipElement()).addClass("bs-popover-" + e)
                            }, o.getTipElement = function() {
                                return this.tip = this.tip || i.default(this.config.template)[0], this.tip
                            }, o.setContent = function() {
                                var e = i.default(this.getTipElement());
                                this.setElementContent(e.find(".popover-header"), this.getTitle());
                                var t = this._getContent();
                                "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(".popover-body"), t), e.removeClass("fade show")
                            }, o._getContent = function() {
                                return this.element.getAttribute("data-content") || this.config.content
                            }, o._cleanTipClass = function() {
                                var e = i.default(this.getTipElement()),
                                    t = e.attr("class").match(tt);
                                null !== t && t.length > 0 && e.removeClass(t.join(""))
                            }, t._jQueryInterface = function(e) {
                                return this.each((function() {
                                    var n = i.default(this).data(Ke),
                                        r = "object" == typeof e ? e : null;
                                    if ((n || !/dispose|hide/.test(e)) && (n || (n = new t(this, r), i.default(this).data(Ke, n)), "string" == typeof e)) {
                                        if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                                        n[e]()
                                    }
                                }))
                            }, s(t, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.6.0"
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return nt
                                }
                            }, {
                                key: "NAME",
                                get: function() {
                                    return Je
                                }
                            }, {
                                key: "DATA_KEY",
                                get: function() {
                                    return Ke
                                }
                            }, {
                                key: "Event",
                                get: function() {
                                    return it
                                }
                            }, {
                                key: "EVENT_KEY",
                                get: function() {
                                    return Ze
                                }
                            }, {
                                key: "DefaultType",
                                get: function() {
                                    return rt
                                }
                            }]), t
                        }(Xe);
                    i.default.fn.popover = ot._jQueryInterface, i.default.fn.popover.Constructor = ot, i.default.fn.popover.noConflict = function() {
                        return i.default.fn.popover = et, ot._jQueryInterface
                    };
                    var at = "scrollspy",
                        st = "bs.scrollspy",
                        lt = "." + st,
                        ct = i.default.fn[at],
                        ut = {
                            offset: 10,
                            method: "auto",
                            target: ""
                        },
                        dt = {
                            offset: "number",
                            method: "string",
                            target: "(string|element)"
                        },
                        ft = "active",
                        ht = ".nav, .list-group",
                        pt = ".nav-link",
                        gt = "position",
                        mt = function() {
                            function e(e, t) {
                                var n = this;
                                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + ".nav-link," + this._config.target + " " + ".list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, i.default(this._scrollElement).on("scroll.bs.scrollspy", (function(e) {
                                    return n._process(e)
                                })), this.refresh(), this._process()
                            }
                            var t = e.prototype;
                            return t.refresh = function() {
                                var e = this,
                                    t = this._scrollElement === this._scrollElement.window ? "offset" : gt,
                                    n = "auto" === this._config.method ? t : this._config.method,
                                    r = n === gt ? this._getScrollTop() : 0;
                                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function(e) {
                                    var t, o = d.getSelectorFromElement(e);
                                    if (o && (t = document.querySelector(o)), t) {
                                        var a = t.getBoundingClientRect();
                                        if (a.width || a.height) return [i.default(t)[n]().top + r, o]
                                    }
                                    return null
                                })).filter((function(e) {
                                    return e
                                })).sort((function(e, t) {
                                    return e[0] - t[0]
                                })).forEach((function(t) {
                                    e._offsets.push(t[0]), e._targets.push(t[1])
                                }))
                            }, t.dispose = function() {
                                i.default.removeData(this._element, st), i.default(this._scrollElement).off(lt), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                            }, t._getConfig = function(e) {
                                if ("string" != typeof(e = l({}, ut, "object" == typeof e && e ? e : {})).target && d.isElement(e.target)) {
                                    var t = i.default(e.target).attr("id");
                                    t || (t = d.getUID(at), i.default(e.target).attr("id", t)), e.target = "#" + t
                                }
                                return d.typeCheckConfig(at, e, dt), e
                            }, t._getScrollTop = function() {
                                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                            }, t._getScrollHeight = function() {
                                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                            }, t._getOffsetHeight = function() {
                                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                            }, t._process = function() {
                                var e = this._getScrollTop() + this._config.offset,
                                    t = this._getScrollHeight(),
                                    n = this._config.offset + t - this._getOffsetHeight();
                                if (this._scrollHeight !== t && this.refresh(), e >= n) {
                                    var r = this._targets[this._targets.length - 1];
                                    this._activeTarget !== r && this._activate(r)
                                } else {
                                    if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                                    for (var i = this._offsets.length; i--;) this._activeTarget !== this._targets[i] && e >= this._offsets[i] && (void 0 === this._offsets[i + 1] || e < this._offsets[i + 1]) && this._activate(this._targets[i])
                                }
                            }, t._activate = function(e) {
                                this._activeTarget = e, this._clear();
                                var t = this._selector.split(",").map((function(t) {
                                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                                    })),
                                    n = i.default([].slice.call(document.querySelectorAll(t.join(","))));
                                n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass(ft), n.addClass(ft)) : (n.addClass(ft), n.parents(ht).prev(".nav-link, .list-group-item").addClass(ft), n.parents(ht).prev(".nav-item").children(pt).addClass(ft)), i.default(this._scrollElement).trigger("activate.bs.scrollspy", {
                                    relatedTarget: e
                                })
                            }, t._clear = function() {
                                [].slice.call(document.querySelectorAll(this._selector)).filter((function(e) {
                                    return e.classList.contains(ft)
                                })).forEach((function(e) {
                                    return e.classList.remove(ft)
                                }))
                            }, e._jQueryInterface = function(t) {
                                return this.each((function() {
                                    var n = i.default(this).data(st);
                                    if (n || (n = new e(this, "object" == typeof t && t), i.default(this).data(st, n)), "string" == typeof t) {
                                        if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                        n[t]()
                                    }
                                }))
                            }, s(e, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.6.0"
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return ut
                                }
                            }]), e
                        }();
                    i.default(window).on("load.bs.scrollspy.data-api", (function() {
                        for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), t = e.length; t--;) {
                            var n = i.default(e[t]);
                            mt._jQueryInterface.call(n, n.data())
                        }
                    })), i.default.fn[at] = mt._jQueryInterface, i.default.fn[at].Constructor = mt, i.default.fn[at].noConflict = function() {
                        return i.default.fn[at] = ct, mt._jQueryInterface
                    };
                    var vt = "bs.tab",
                        yt = i.default.fn.tab,
                        _t = "active",
                        bt = "fade",
                        wt = "show",
                        xt = ".active",
                        Et = "> li > .active",
                        Tt = function() {
                            function e(e) {
                                this._element = e
                            }
                            var t = e.prototype;
                            return t.show = function() {
                                var e = this;
                                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && i.default(this._element).hasClass(_t) || i.default(this._element).hasClass("disabled"))) {
                                    var t, n, r = i.default(this._element).closest(".nav, .list-group")[0],
                                        o = d.getSelectorFromElement(this._element);
                                    if (r) {
                                        var a = "UL" === r.nodeName || "OL" === r.nodeName ? Et : xt;
                                        n = (n = i.default.makeArray(i.default(r).find(a)))[n.length - 1]
                                    }
                                    var s = i.default.Event("hide.bs.tab", {
                                            relatedTarget: this._element
                                        }),
                                        l = i.default.Event("show.bs.tab", {
                                            relatedTarget: n
                                        });
                                    if (n && i.default(n).trigger(s), i.default(this._element).trigger(l), !l.isDefaultPrevented() && !s.isDefaultPrevented()) {
                                        o && (t = document.querySelector(o)), this._activate(this._element, r);
                                        var c = function() {
                                            var t = i.default.Event("hidden.bs.tab", {
                                                    relatedTarget: e._element
                                                }),
                                                r = i.default.Event("shown.bs.tab", {
                                                    relatedTarget: n
                                                });
                                            i.default(n).trigger(t), i.default(e._element).trigger(r)
                                        };
                                        t ? this._activate(t, t.parentNode, c) : c()
                                    }
                                }
                            }, t.dispose = function() {
                                i.default.removeData(this._element, vt), this._element = null
                            }, t._activate = function(e, t, n) {
                                var r = this,
                                    o = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? i.default(t).children(xt) : i.default(t).find(Et))[0],
                                    a = n && o && i.default(o).hasClass(bt),
                                    s = function() {
                                        return r._transitionComplete(e, o, n)
                                    };
                                if (o && a) {
                                    var l = d.getTransitionDurationFromElement(o);
                                    i.default(o).removeClass(wt).one(d.TRANSITION_END, s).emulateTransitionEnd(l)
                                } else s()
                            }, t._transitionComplete = function(e, t, n) {
                                if (t) {
                                    i.default(t).removeClass(_t);
                                    var r = i.default(t.parentNode).find("> .dropdown-menu .active")[0];
                                    r && i.default(r).removeClass(_t), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                                }
                                if (i.default(e).addClass(_t), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), d.reflow(e), e.classList.contains(bt) && e.classList.add(wt), e.parentNode && i.default(e.parentNode).hasClass("dropdown-menu")) {
                                    var o = i.default(e).closest(".dropdown")[0];
                                    if (o) {
                                        var a = [].slice.call(o.querySelectorAll(".dropdown-toggle"));
                                        i.default(a).addClass(_t)
                                    }
                                    e.setAttribute("aria-expanded", !0)
                                }
                                n && n()
                            }, e._jQueryInterface = function(t) {
                                return this.each((function() {
                                    var n = i.default(this),
                                        r = n.data(vt);
                                    if (r || (r = new e(this), n.data(vt, r)), "string" == typeof t) {
                                        if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                                        r[t]()
                                    }
                                }))
                            }, s(e, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.6.0"
                                }
                            }]), e
                        }();
                    i.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function(e) {
                        e.preventDefault(), Tt._jQueryInterface.call(i.default(this), "show")
                    })), i.default.fn.tab = Tt._jQueryInterface, i.default.fn.tab.Constructor = Tt, i.default.fn.tab.noConflict = function() {
                        return i.default.fn.tab = yt, Tt._jQueryInterface
                    };
                    var Ct = "toast",
                        kt = "bs.toast",
                        St = i.default.fn.toast,
                        At = "click.dismiss.bs.toast",
                        Nt = "hide",
                        Dt = "show",
                        jt = "showing",
                        Ot = {
                            animation: "boolean",
                            autohide: "boolean",
                            delay: "number"
                        },
                        Lt = {
                            animation: !0,
                            autohide: !0,
                            delay: 500
                        },
                        It = function() {
                            function e(e, t) {
                                this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
                            }
                            var t = e.prototype;
                            return t.show = function() {
                                var e = this,
                                    t = i.default.Event("show.bs.toast");
                                if (i.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                                    this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
                                    var n = function() {
                                        e._element.classList.remove(jt), e._element.classList.add(Dt), i.default(e._element).trigger("shown.bs.toast"), e._config.autohide && (e._timeout = setTimeout((function() {
                                            e.hide()
                                        }), e._config.delay))
                                    };
                                    if (this._element.classList.remove(Nt), d.reflow(this._element), this._element.classList.add(jt), this._config.animation) {
                                        var r = d.getTransitionDurationFromElement(this._element);
                                        i.default(this._element).one(d.TRANSITION_END, n).emulateTransitionEnd(r)
                                    } else n()
                                }
                            }, t.hide = function() {
                                if (this._element.classList.contains(Dt)) {
                                    var e = i.default.Event("hide.bs.toast");
                                    i.default(this._element).trigger(e), e.isDefaultPrevented() || this._close()
                                }
                            }, t.dispose = function() {
                                this._clearTimeout(), this._element.classList.contains(Dt) && this._element.classList.remove(Dt), i.default(this._element).off(At), i.default.removeData(this._element, kt), this._element = null, this._config = null
                            }, t._getConfig = function(e) {
                                return e = l({}, Lt, i.default(this._element).data(), "object" == typeof e && e ? e : {}), d.typeCheckConfig(Ct, e, this.constructor.DefaultType), e
                            }, t._setListeners = function() {
                                var e = this;
                                i.default(this._element).on(At, '[data-dismiss="toast"]', (function() {
                                    return e.hide()
                                }))
                            }, t._close = function() {
                                var e = this,
                                    t = function() {
                                        e._element.classList.add(Nt), i.default(e._element).trigger("hidden.bs.toast")
                                    };
                                if (this._element.classList.remove(Dt), this._config.animation) {
                                    var n = d.getTransitionDurationFromElement(this._element);
                                    i.default(this._element).one(d.TRANSITION_END, t).emulateTransitionEnd(n)
                                } else t()
                            }, t._clearTimeout = function() {
                                clearTimeout(this._timeout), this._timeout = null
                            }, e._jQueryInterface = function(t) {
                                return this.each((function() {
                                    var n = i.default(this),
                                        r = n.data(kt);
                                    if (r || (r = new e(this, "object" == typeof t && t), n.data(kt, r)), "string" == typeof t) {
                                        if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                                        r[t](this)
                                    }
                                }))
                            }, s(e, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.6.0"
                                }
                            }, {
                                key: "DefaultType",
                                get: function() {
                                    return Ot
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return Lt
                                }
                            }]), e
                        }();
                    i.default.fn.toast = It._jQueryInterface, i.default.fn.toast.Constructor = It, i.default.fn.toast.noConflict = function() {
                        return i.default.fn.toast = St, It._jQueryInterface
                    }, e.Alert = p, e.Button = w, e.Carousel = I, e.Collapse = V, e.Dropdown = ce, e.Modal = Ne, e.Popover = ot, e.Scrollspy = mt, e.Tab = Tt, e.Toast = It, e.Tooltip = Xe, e.Util = d, Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }(t, n(755), n(981))
            },
            187: e => {
                "use strict";
                var t, n = "object" == typeof Reflect ? Reflect : null,
                    r = n && "function" == typeof n.apply ? n.apply : function(e, t, n) {
                        return Function.prototype.apply.call(e, t, n)
                    };
                t = n && "function" == typeof n.ownKeys ? n.ownKeys : Object.getOwnPropertySymbols ? function(e) {
                    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
                } : function(e) {
                    return Object.getOwnPropertyNames(e)
                };
                var i = Number.isNaN || function(e) {
                    return e != e
                };

                function o() {
                    o.init.call(this)
                }
                e.exports = o, e.exports.once = function(e, t) {
                    return new Promise((function(n, r) {
                        function i() {
                            void 0 !== o && e.removeListener("error", o), n([].slice.call(arguments))
                        }
                        var o;
                        "error" !== t && (o = function(n) {
                            e.removeListener(t, i), r(n)
                        }, e.once("error", o)), e.once(t, i)
                    }))
                }, o.EventEmitter = o, o.prototype._events = void 0, o.prototype._eventsCount = 0, o.prototype._maxListeners = void 0;
                var a = 10;

                function s(e) {
                    if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
                }

                function l(e) {
                    return void 0 === e._maxListeners ? o.defaultMaxListeners : e._maxListeners
                }

                function c(e, t, n, r) {
                    var i, o, a, c;
                    if (s(n), void 0 === (o = e._events) ? (o = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== o.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), o = e._events), a = o[t]), void 0 === a) a = o[t] = n, ++e._eventsCount;
                    else if ("function" == typeof a ? a = o[t] = r ? [n, a] : [a, n] : r ? a.unshift(n) : a.push(n), (i = l(e)) > 0 && a.length > i && !a.warned) {
                        a.warned = !0;
                        var u = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                        u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = a.length, c = u, console && console.warn && console.warn(c)
                    }
                    return e
                }

                function u() {
                    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
                }

                function d(e, t, n) {
                    var r = {
                            fired: !1,
                            wrapFn: void 0,
                            target: e,
                            type: t,
                            listener: n
                        },
                        i = u.bind(r);
                    return i.listener = n, r.wrapFn = i, i
                }

                function f(e, t, n) {
                    var r = e._events;
                    if (void 0 === r) return [];
                    var i = r[t];
                    return void 0 === i ? [] : "function" == typeof i ? n ? [i.listener || i] : [i] : n ? function(e) {
                        for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
                        return t
                    }(i) : p(i, i.length)
                }

                function h(e) {
                    var t = this._events;
                    if (void 0 !== t) {
                        var n = t[e];
                        if ("function" == typeof n) return 1;
                        if (void 0 !== n) return n.length
                    }
                    return 0
                }

                function p(e, t) {
                    for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
                    return n
                }
                Object.defineProperty(o, "defaultMaxListeners", {
                    enumerable: !0,
                    get: function() {
                        return a
                    },
                    set: function(e) {
                        if ("number" != typeof e || e < 0 || i(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                        a = e
                    }
                }), o.init = function() {
                    void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
                }, o.prototype.setMaxListeners = function(e) {
                    if ("number" != typeof e || e < 0 || i(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
                    return this._maxListeners = e, this
                }, o.prototype.getMaxListeners = function() {
                    return l(this)
                }, o.prototype.emit = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
                    var i = "error" === e,
                        o = this._events;
                    if (void 0 !== o) i = i && void 0 === o.error;
                    else if (!i) return !1;
                    if (i) {
                        var a;
                        if (t.length > 0 && (a = t[0]), a instanceof Error) throw a;
                        var s = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
                        throw s.context = a, s
                    }
                    var l = o[e];
                    if (void 0 === l) return !1;
                    if ("function" == typeof l) r(l, this, t);
                    else {
                        var c = l.length,
                            u = p(l, c);
                        for (n = 0; n < c; ++n) r(u[n], this, t)
                    }
                    return !0
                }, o.prototype.addListener = function(e, t) {
                    return c(this, e, t, !1)
                }, o.prototype.on = o.prototype.addListener, o.prototype.prependListener = function(e, t) {
                    return c(this, e, t, !0)
                }, o.prototype.once = function(e, t) {
                    return s(t), this.on(e, d(this, e, t)), this
                }, o.prototype.prependOnceListener = function(e, t) {
                    return s(t), this.prependListener(e, d(this, e, t)), this
                }, o.prototype.removeListener = function(e, t) {
                    var n, r, i, o, a;
                    if (s(t), void 0 === (r = this._events)) return this;
                    if (void 0 === (n = r[e])) return this;
                    if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
                    else if ("function" != typeof n) {
                        for (i = -1, o = n.length - 1; o >= 0; o--)
                            if (n[o] === t || n[o].listener === t) {
                                a = n[o].listener, i = o;
                                break
                            } if (i < 0) return this;
                        0 === i ? n.shift() : function(e, t) {
                            for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                            e.pop()
                        }(n, i), 1 === n.length && (r[e] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", e, a || t)
                    }
                    return this
                }, o.prototype.off = o.prototype.removeListener, o.prototype.removeAllListeners = function(e) {
                    var t, n, r;
                    if (void 0 === (n = this._events)) return this;
                    if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;
                    if (0 === arguments.length) {
                        var i, o = Object.keys(n);
                        for (r = 0; r < o.length; ++r) "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
                        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                    }
                    if ("function" == typeof(t = n[e])) this.removeListener(e, t);
                    else if (void 0 !== t)
                        for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
                    return this
                }, o.prototype.listeners = function(e) {
                    return f(this, e, !0)
                }, o.prototype.rawListeners = function(e) {
                    return f(this, e, !1)
                }, o.listenerCount = function(e, t) {
                    return "function" == typeof e.listenerCount ? e.listenerCount(t) : h.call(e, t)
                }, o.prototype.listenerCount = h, o.prototype.eventNames = function() {
                    return this._eventsCount > 0 ? t(this._events) : []
                }
            },
            755: function(e, t) {
                var n;
                ! function(t, n) {
                    "use strict";
                    "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                        if (!e.document) throw new Error("jQuery requires a window with a document");
                        return n(e)
                    } : n(t)
                }("undefined" != typeof window ? window : this, (function(r, i) {
                    "use strict";
                    var o = [],
                        a = Object.getPrototypeOf,
                        s = o.slice,
                        l = o.flat ? function(e) {
                            return o.flat.call(e)
                        } : function(e) {
                            return o.concat.apply([], e)
                        },
                        c = o.push,
                        u = o.indexOf,
                        d = {},
                        f = d.toString,
                        h = d.hasOwnProperty,
                        p = h.toString,
                        g = p.call(Object),
                        m = {},
                        v = function(e) {
                            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
                        },
                        y = function(e) {
                            return null != e && e === e.window
                        },
                        _ = r.document,
                        b = {
                            type: !0,
                            src: !0,
                            nonce: !0,
                            noModule: !0
                        };

                    function w(e, t, n) {
                        var r, i, o = (n = n || _).createElement("script");
                        if (o.text = e, t)
                            for (r in b)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
                        n.head.appendChild(o).parentNode.removeChild(o)
                    }

                    function x(e) {
                        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[f.call(e)] || "object" : typeof e
                    }
                    var E = "3.6.0",
                        T = function(e, t) {
                            return new T.fn.init(e, t)
                        };

                    function C(e) {
                        var t = !!e && "length" in e && e.length,
                            n = x(e);
                        return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
                    }
                    T.fn = T.prototype = {
                        jquery: E,
                        constructor: T,
                        length: 0,
                        toArray: function() {
                            return s.call(this)
                        },
                        get: function(e) {
                            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
                        },
                        pushStack: function(e) {
                            var t = T.merge(this.constructor(), e);
                            return t.prevObject = this, t
                        },
                        each: function(e) {
                            return T.each(this, e)
                        },
                        map: function(e) {
                            return this.pushStack(T.map(this, (function(t, n) {
                                return e.call(t, n, t)
                            })))
                        },
                        slice: function() {
                            return this.pushStack(s.apply(this, arguments))
                        },
                        first: function() {
                            return this.eq(0)
                        },
                        last: function() {
                            return this.eq(-1)
                        },
                        even: function() {
                            return this.pushStack(T.grep(this, (function(e, t) {
                                return (t + 1) % 2
                            })))
                        },
                        odd: function() {
                            return this.pushStack(T.grep(this, (function(e, t) {
                                return t % 2
                            })))
                        },
                        eq: function(e) {
                            var t = this.length,
                                n = +e + (e < 0 ? t : 0);
                            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                        },
                        end: function() {
                            return this.prevObject || this.constructor()
                        },
                        push: c,
                        sort: o.sort,
                        splice: o.splice
                    }, T.extend = T.fn.extend = function() {
                        var e, t, n, r, i, o, a = arguments[0] || {},
                            s = 1,
                            l = arguments.length,
                            c = !1;
                        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || v(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
                            if (null != (e = arguments[s]))
                                for (t in e) r = e[t], "__proto__" !== t && a !== r && (c && r && (T.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || T.isPlainObject(n) ? n : {}, i = !1, a[t] = T.extend(c, o, r)) : void 0 !== r && (a[t] = r));
                        return a
                    }, T.extend({
                        expando: "jQuery" + (E + Math.random()).replace(/\D/g, ""),
                        isReady: !0,
                        error: function(e) {
                            throw new Error(e)
                        },
                        noop: function() {},
                        isPlainObject: function(e) {
                            var t, n;
                            return !(!e || "[object Object]" !== f.call(e) || (t = a(e)) && ("function" != typeof(n = h.call(t, "constructor") && t.constructor) || p.call(n) !== g))
                        },
                        isEmptyObject: function(e) {
                            var t;
                            for (t in e) return !1;
                            return !0
                        },
                        globalEval: function(e, t, n) {
                            w(e, {
                                nonce: t && t.nonce
                            }, n)
                        },
                        each: function(e, t) {
                            var n, r = 0;
                            if (C(e))
                                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                            else
                                for (r in e)
                                    if (!1 === t.call(e[r], r, e[r])) break;
                            return e
                        },
                        makeArray: function(e, t) {
                            var n = t || [];
                            return null != e && (C(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n
                        },
                        inArray: function(e, t, n) {
                            return null == t ? -1 : u.call(t, e, n)
                        },
                        merge: function(e, t) {
                            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                            return e.length = i, e
                        },
                        grep: function(e, t, n) {
                            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                            return r
                        },
                        map: function(e, t, n) {
                            var r, i, o = 0,
                                a = [];
                            if (C(e))
                                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                            else
                                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                            return l(a)
                        },
                        guid: 1,
                        support: m
                    }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = o[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                        d["[object " + t + "]"] = t.toLowerCase()
                    }));
                    var k = function(e) {
                        var t, n, r, i, o, a, s, l, c, u, d, f, h, p, g, m, v, y, _, b = "sizzle" + 1 * new Date,
                            w = e.document,
                            x = 0,
                            E = 0,
                            T = le(),
                            C = le(),
                            k = le(),
                            S = le(),
                            A = function(e, t) {
                                return e === t && (d = !0), 0
                            },
                            N = {}.hasOwnProperty,
                            D = [],
                            j = D.pop,
                            O = D.push,
                            L = D.push,
                            I = D.slice,
                            P = function(e, t) {
                                for (var n = 0, r = e.length; n < r; n++)
                                    if (e[n] === t) return n;
                                return -1
                            },
                            $ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                            R = "[\\x20\\t\\r\\n\\f]",
                            q = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                            H = "\\[[\\x20\\t\\r\\n\\f]*(" + q + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + R + "*\\]",
                            M = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
                            F = new RegExp(R + "+", "g"),
                            B = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
                            W = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
                            U = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),
                            z = new RegExp(R + "|>"),
                            V = new RegExp(M),
                            G = new RegExp("^" + q + "$"),
                            Q = {
                                ID: new RegExp("^#(" + q + ")"),
                                CLASS: new RegExp("^\\.(" + q + ")"),
                                TAG: new RegExp("^(" + q + "|[*])"),
                                ATTR: new RegExp("^" + H),
                                PSEUDO: new RegExp("^" + M),
                                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
                                bool: new RegExp("^(?:" + $ + ")$", "i"),
                                needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
                            },
                            Y = /HTML$/i,
                            X = /^(?:input|select|textarea|button)$/i,
                            J = /^h\d$/i,
                            K = /^[^{]+\{\s*\[native \w/,
                            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                            ee = /[+~]/,
                            te = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])", "g"),
                            ne = function(e, t) {
                                var n = "0x" + e.slice(1) - 65536;
                                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                            },
                            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                            ie = function(e, t) {
                                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                            },
                            oe = function() {
                                f()
                            },
                            ae = be((function(e) {
                                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                            }), {
                                dir: "parentNode",
                                next: "legend"
                            });
                        try {
                            L.apply(D = I.call(w.childNodes), w.childNodes), D[w.childNodes.length].nodeType
                        } catch (e) {
                            L = {
                                apply: D.length ? function(e, t) {
                                    O.apply(e, I.call(t))
                                } : function(e, t) {
                                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                                    e.length = n - 1
                                }
                            }
                        }

                        function se(e, t, r, i) {
                            var o, s, c, u, d, p, v, y = t && t.ownerDocument,
                                w = t ? t.nodeType : 9;
                            if (r = r || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;
                            if (!i && (f(t), t = t || h, g)) {
                                if (11 !== w && (d = Z.exec(e)))
                                    if (o = d[1]) {
                                        if (9 === w) {
                                            if (!(c = t.getElementById(o))) return r;
                                            if (c.id === o) return r.push(c), r
                                        } else if (y && (c = y.getElementById(o)) && _(t, c) && c.id === o) return r.push(c), r
                                    } else {
                                        if (d[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                                        if ((o = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r
                                    } if (n.qsa && !S[e + " "] && (!m || !m.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                                    if (v = e, y = t, 1 === w && (z.test(e) || U.test(e))) {
                                        for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((u = t.getAttribute("id")) ? u = u.replace(re, ie) : t.setAttribute("id", u = b)), s = (p = a(e)).length; s--;) p[s] = (u ? "#" + u : ":scope") + " " + _e(p[s]);
                                        v = p.join(",")
                                    }
                                    try {
                                        return L.apply(r, y.querySelectorAll(v)), r
                                    } catch (t) {
                                        S(e, !0)
                                    } finally {
                                        u === b && t.removeAttribute("id")
                                    }
                                }
                            }
                            return l(e.replace(B, "$1"), t, r, i)
                        }

                        function le() {
                            var e = [];
                            return function t(n, i) {
                                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
                            }
                        }

                        function ce(e) {
                            return e[b] = !0, e
                        }

                        function ue(e) {
                            var t = h.createElement("fieldset");
                            try {
                                return !!e(t)
                            } catch (e) {
                                return !1
                            } finally {
                                t.parentNode && t.parentNode.removeChild(t), t = null
                            }
                        }

                        function de(e, t) {
                            for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
                        }

                        function fe(e, t) {
                            var n = t && e,
                                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                            if (r) return r;
                            if (n)
                                for (; n = n.nextSibling;)
                                    if (n === t) return -1;
                            return e ? 1 : -1
                        }

                        function he(e) {
                            return function(t) {
                                return "input" === t.nodeName.toLowerCase() && t.type === e
                            }
                        }

                        function pe(e) {
                            return function(t) {
                                var n = t.nodeName.toLowerCase();
                                return ("input" === n || "button" === n) && t.type === e
                            }
                        }

                        function ge(e) {
                            return function(t) {
                                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
                            }
                        }

                        function me(e) {
                            return ce((function(t) {
                                return t = +t, ce((function(n, r) {
                                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                                }))
                            }))
                        }

                        function ve(e) {
                            return e && void 0 !== e.getElementsByTagName && e
                        }
                        for (t in n = se.support = {}, o = se.isXML = function(e) {
                                var t = e && e.namespaceURI,
                                    n = e && (e.ownerDocument || e).documentElement;
                                return !Y.test(t || n && n.nodeName || "HTML")
                            }, f = se.setDocument = function(e) {
                                var t, i, a = e ? e.ownerDocument || e : w;
                                return a != h && 9 === a.nodeType && a.documentElement ? (p = (h = a).documentElement, g = !o(h), w != h && (i = h.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.scope = ue((function(e) {
                                    return p.appendChild(e).appendChild(h.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                                })), n.attributes = ue((function(e) {
                                    return e.className = "i", !e.getAttribute("className")
                                })), n.getElementsByTagName = ue((function(e) {
                                    return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length
                                })), n.getElementsByClassName = K.test(h.getElementsByClassName), n.getById = ue((function(e) {
                                    return p.appendChild(e).id = b, !h.getElementsByName || !h.getElementsByName(b).length
                                })), n.getById ? (r.filter.ID = function(e) {
                                    var t = e.replace(te, ne);
                                    return function(e) {
                                        return e.getAttribute("id") === t
                                    }
                                }, r.find.ID = function(e, t) {
                                    if (void 0 !== t.getElementById && g) {
                                        var n = t.getElementById(e);
                                        return n ? [n] : []
                                    }
                                }) : (r.filter.ID = function(e) {
                                    var t = e.replace(te, ne);
                                    return function(e) {
                                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                        return n && n.value === t
                                    }
                                }, r.find.ID = function(e, t) {
                                    if (void 0 !== t.getElementById && g) {
                                        var n, r, i, o = t.getElementById(e);
                                        if (o) {
                                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                            for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                                        }
                                        return []
                                    }
                                }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                                } : function(e, t) {
                                    var n, r = [],
                                        i = 0,
                                        o = t.getElementsByTagName(e);
                                    if ("*" === e) {
                                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                                        return r
                                    }
                                    return o
                                }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                                }, v = [], m = [], (n.qsa = K.test(h.querySelectorAll)) && (ue((function(e) {
                                    var t;
                                    p.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + $ + ")"), e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), (t = h.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
                                })), ue((function(e) {
                                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                    var t = h.createElement("input");
                                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                                }))), (n.matchesSelector = K.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ue((function(e) {
                                    n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", M)
                                })), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = K.test(p.compareDocumentPosition), _ = t || K.test(p.contains) ? function(e, t) {
                                    var n = 9 === e.nodeType ? e.documentElement : e,
                                        r = t && t.parentNode;
                                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                                } : function(e, t) {
                                    if (t)
                                        for (; t = t.parentNode;)
                                            if (t === e) return !0;
                                    return !1
                                }, A = t ? function(e, t) {
                                    if (e === t) return d = !0, 0;
                                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                    return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == h || e.ownerDocument == w && _(w, e) ? -1 : t == h || t.ownerDocument == w && _(w, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & r ? -1 : 1)
                                } : function(e, t) {
                                    if (e === t) return d = !0, 0;
                                    var n, r = 0,
                                        i = e.parentNode,
                                        o = t.parentNode,
                                        a = [e],
                                        s = [t];
                                    if (!i || !o) return e == h ? -1 : t == h ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                                    if (i === o) return fe(e, t);
                                    for (n = e; n = n.parentNode;) a.unshift(n);
                                    for (n = t; n = n.parentNode;) s.unshift(n);
                                    for (; a[r] === s[r];) r++;
                                    return r ? fe(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0
                                }, h) : h
                            }, se.matches = function(e, t) {
                                return se(e, null, null, t)
                            }, se.matchesSelector = function(e, t) {
                                if (f(e), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                                    var r = y.call(e, t);
                                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                                } catch (e) {
                                    S(t, !0)
                                }
                                return se(t, h, null, [e]).length > 0
                            }, se.contains = function(e, t) {
                                return (e.ownerDocument || e) != h && f(e), _(e, t)
                            }, se.attr = function(e, t) {
                                (e.ownerDocument || e) != h && f(e);
                                var i = r.attrHandle[t.toLowerCase()],
                                    o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                            }, se.escape = function(e) {
                                return (e + "").replace(re, ie)
                            }, se.error = function(e) {
                                throw new Error("Syntax error, unrecognized expression: " + e)
                            }, se.uniqueSort = function(e) {
                                var t, r = [],
                                    i = 0,
                                    o = 0;
                                if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(A), d) {
                                    for (; t = e[o++];) t === e[o] && (i = r.push(o));
                                    for (; i--;) e.splice(r[i], 1)
                                }
                                return u = null, e
                            }, i = se.getText = function(e) {
                                var t, n = "",
                                    r = 0,
                                    o = e.nodeType;
                                if (o) {
                                    if (1 === o || 9 === o || 11 === o) {
                                        if ("string" == typeof e.textContent) return e.textContent;
                                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                                    } else if (3 === o || 4 === o) return e.nodeValue
                                } else
                                    for (; t = e[r++];) n += i(t);
                                return n
                            }, (r = se.selectors = {
                                cacheLength: 50,
                                createPseudo: ce,
                                match: Q,
                                attrHandle: {},
                                find: {},
                                relative: {
                                    ">": {
                                        dir: "parentNode",
                                        first: !0
                                    },
                                    " ": {
                                        dir: "parentNode"
                                    },
                                    "+": {
                                        dir: "previousSibling",
                                        first: !0
                                    },
                                    "~": {
                                        dir: "previousSibling"
                                    }
                                },
                                preFilter: {
                                    ATTR: function(e) {
                                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                                    },
                                    CHILD: function(e) {
                                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                                    },
                                    PSEUDO: function(e) {
                                        var t, n = !e[6] && e[2];
                                        return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                                    }
                                },
                                filter: {
                                    TAG: function(e) {
                                        var t = e.replace(te, ne).toLowerCase();
                                        return "*" === e ? function() {
                                            return !0
                                        } : function(e) {
                                            return e.nodeName && e.nodeName.toLowerCase() === t
                                        }
                                    },
                                    CLASS: function(e) {
                                        var t = T[e + " "];
                                        return t || (t = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "(" + R + "|$)")) && T(e, (function(e) {
                                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                        }))
                                    },
                                    ATTR: function(e, t, n) {
                                        return function(r) {
                                            var i = se.attr(r, e);
                                            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                                        }
                                    },
                                    CHILD: function(e, t, n, r, i) {
                                        var o = "nth" !== e.slice(0, 3),
                                            a = "last" !== e.slice(-4),
                                            s = "of-type" === t;
                                        return 1 === r && 0 === i ? function(e) {
                                            return !!e.parentNode
                                        } : function(t, n, l) {
                                            var c, u, d, f, h, p, g = o !== a ? "nextSibling" : "previousSibling",
                                                m = t.parentNode,
                                                v = s && t.nodeName.toLowerCase(),
                                                y = !l && !s,
                                                _ = !1;
                                            if (m) {
                                                if (o) {
                                                    for (; g;) {
                                                        for (f = t; f = f[g];)
                                                            if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                                        p = g = "only" === e && !p && "nextSibling"
                                                    }
                                                    return !0
                                                }
                                                if (p = [a ? m.firstChild : m.lastChild], a && y) {
                                                    for (_ = (h = (c = (u = (d = (f = m)[b] || (f[b] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === x && c[1]) && c[2], f = h && m.childNodes[h]; f = ++h && f && f[g] || (_ = h = 0) || p.pop();)
                                                        if (1 === f.nodeType && ++_ && f === t) {
                                                            u[e] = [x, h, _];
                                                            break
                                                        }
                                                } else if (y && (_ = h = (c = (u = (d = (f = t)[b] || (f[b] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === x && c[1]), !1 === _)
                                                    for (;
                                                        (f = ++h && f && f[g] || (_ = h = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++_ || (y && ((u = (d = f[b] || (f[b] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [x, _]), f !== t)););
                                                return (_ -= i) === r || _ % r == 0 && _ / r >= 0
                                            }
                                        }
                                    },
                                    PSEUDO: function(e, t) {
                                        var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                                        return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function(e, n) {
                                            for (var r, o = i(e, t), a = o.length; a--;) e[r = P(e, o[a])] = !(n[r] = o[a])
                                        })) : function(e) {
                                            return i(e, 0, n)
                                        }) : i
                                    }
                                },
                                pseudos: {
                                    not: ce((function(e) {
                                        var t = [],
                                            n = [],
                                            r = s(e.replace(B, "$1"));
                                        return r[b] ? ce((function(e, t, n, i) {
                                            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                                        })) : function(e, i, o) {
                                            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                                        }
                                    })),
                                    has: ce((function(e) {
                                        return function(t) {
                                            return se(e, t).length > 0
                                        }
                                    })),
                                    contains: ce((function(e) {
                                        return e = e.replace(te, ne),
                                            function(t) {
                                                return (t.textContent || i(t)).indexOf(e) > -1
                                            }
                                    })),
                                    lang: ce((function(e) {
                                        return G.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                            function(t) {
                                                var n;
                                                do {
                                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                                return !1
                                            }
                                    })),
                                    target: function(t) {
                                        var n = e.location && e.location.hash;
                                        return n && n.slice(1) === t.id
                                    },
                                    root: function(e) {
                                        return e === p
                                    },
                                    focus: function(e) {
                                        return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                                    },
                                    enabled: ge(!1),
                                    disabled: ge(!0),
                                    checked: function(e) {
                                        var t = e.nodeName.toLowerCase();
                                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                                    },
                                    selected: function(e) {
                                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                                    },
                                    empty: function(e) {
                                        for (e = e.firstChild; e; e = e.nextSibling)
                                            if (e.nodeType < 6) return !1;
                                        return !0
                                    },
                                    parent: function(e) {
                                        return !r.pseudos.empty(e)
                                    },
                                    header: function(e) {
                                        return J.test(e.nodeName)
                                    },
                                    input: function(e) {
                                        return X.test(e.nodeName)
                                    },
                                    button: function(e) {
                                        var t = e.nodeName.toLowerCase();
                                        return "input" === t && "button" === e.type || "button" === t
                                    },
                                    text: function(e) {
                                        var t;
                                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                                    },
                                    first: me((function() {
                                        return [0]
                                    })),
                                    last: me((function(e, t) {
                                        return [t - 1]
                                    })),
                                    eq: me((function(e, t, n) {
                                        return [n < 0 ? n + t : n]
                                    })),
                                    even: me((function(e, t) {
                                        for (var n = 0; n < t; n += 2) e.push(n);
                                        return e
                                    })),
                                    odd: me((function(e, t) {
                                        for (var n = 1; n < t; n += 2) e.push(n);
                                        return e
                                    })),
                                    lt: me((function(e, t, n) {
                                        for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                                        return e
                                    })),
                                    gt: me((function(e, t, n) {
                                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                                        return e
                                    }))
                                }
                            }).pseudos.nth = r.pseudos.eq, {
                                radio: !0,
                                checkbox: !0,
                                file: !0,
                                password: !0,
                                image: !0
                            }) r.pseudos[t] = he(t);
                        for (t in {
                                submit: !0,
                                reset: !0
                            }) r.pseudos[t] = pe(t);

                        function ye() {}

                        function _e(e) {
                            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                            return r
                        }

                        function be(e, t, n) {
                            var r = t.dir,
                                i = t.next,
                                o = i || r,
                                a = n && "parentNode" === o,
                                s = E++;
                            return t.first ? function(t, n, i) {
                                for (; t = t[r];)
                                    if (1 === t.nodeType || a) return e(t, n, i);
                                return !1
                            } : function(t, n, l) {
                                var c, u, d, f = [x, s];
                                if (l) {
                                    for (; t = t[r];)
                                        if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                                } else
                                    for (; t = t[r];)
                                        if (1 === t.nodeType || a)
                                            if (u = (d = t[b] || (t[b] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                                            else {
                                                if ((c = u[o]) && c[0] === x && c[1] === s) return f[2] = c[2];
                                                if (u[o] = f, f[2] = e(t, n, l)) return !0
                                            } return !1
                            }
                        }

                        function we(e) {
                            return e.length > 1 ? function(t, n, r) {
                                for (var i = e.length; i--;)
                                    if (!e[i](t, n, r)) return !1;
                                return !0
                            } : e[0]
                        }

                        function xe(e, t, n, r, i) {
                            for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), c && t.push(s)));
                            return a
                        }

                        function Ee(e, t, n, r, i, o) {
                            return r && !r[b] && (r = Ee(r)), i && !i[b] && (i = Ee(i, o)), ce((function(o, a, s, l) {
                                var c, u, d, f = [],
                                    h = [],
                                    p = a.length,
                                    g = o || function(e, t, n) {
                                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                                        return n
                                    }(t || "*", s.nodeType ? [s] : s, []),
                                    m = !e || !o && t ? g : xe(g, f, e, s, l),
                                    v = n ? i || (o ? e : p || r) ? [] : a : m;
                                if (n && n(m, v, s, l), r)
                                    for (c = xe(v, h), r(c, [], s, l), u = c.length; u--;)(d = c[u]) && (v[h[u]] = !(m[h[u]] = d));
                                if (o) {
                                    if (i || e) {
                                        if (i) {
                                            for (c = [], u = v.length; u--;)(d = v[u]) && c.push(m[u] = d);
                                            i(null, v = [], c, l)
                                        }
                                        for (u = v.length; u--;)(d = v[u]) && (c = i ? P(o, d) : f[u]) > -1 && (o[c] = !(a[c] = d))
                                    }
                                } else v = xe(v === a ? v.splice(p, v.length) : v), i ? i(null, a, v, l) : L.apply(a, v)
                            }))
                        }

                        function Te(e) {
                            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], l = a ? 1 : 0, u = be((function(e) {
                                    return e === t
                                }), s, !0), d = be((function(e) {
                                    return P(t, e) > -1
                                }), s, !0), f = [function(e, n, r) {
                                    var i = !a && (r || n !== c) || ((t = n).nodeType ? u(e, n, r) : d(e, n, r));
                                    return t = null, i
                                }]; l < o; l++)
                                if (n = r.relative[e[l].type]) f = [be(we(f), n)];
                                else {
                                    if ((n = r.filter[e[l].type].apply(null, e[l].matches))[b]) {
                                        for (i = ++l; i < o && !r.relative[e[i].type]; i++);
                                        return Ee(l > 1 && we(f), l > 1 && _e(e.slice(0, l - 1).concat({
                                            value: " " === e[l - 2].type ? "*" : ""
                                        })).replace(B, "$1"), n, l < i && Te(e.slice(l, i)), i < o && Te(e = e.slice(i)), i < o && _e(e))
                                    }
                                    f.push(n)
                                } return we(f)
                        }
                        return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = se.tokenize = function(e, t) {
                            var n, i, o, a, s, l, c, u = C[e + " "];
                            if (u) return t ? 0 : u.slice(0);
                            for (s = e, l = [], c = r.preFilter; s;) {
                                for (a in n && !(i = W.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(o = [])), n = !1, (i = U.exec(s)) && (n = i.shift(), o.push({
                                        value: n,
                                        type: i[0].replace(B, " ")
                                    }), s = s.slice(n.length)), r.filter) !(i = Q[a].exec(s)) || c[a] && !(i = c[a](i)) || (n = i.shift(), o.push({
                                    value: n,
                                    type: a,
                                    matches: i
                                }), s = s.slice(n.length));
                                if (!n) break
                            }
                            return t ? s.length : s ? se.error(e) : C(e, l).slice(0)
                        }, s = se.compile = function(e, t) {
                            var n, i = [],
                                o = [],
                                s = k[e + " "];
                            if (!s) {
                                for (t || (t = a(e)), n = t.length; n--;)(s = Te(t[n]))[b] ? i.push(s) : o.push(s);
                                (s = k(e, function(e, t) {
                                    var n = t.length > 0,
                                        i = e.length > 0,
                                        o = function(o, a, s, l, u) {
                                            var d, p, m, v = 0,
                                                y = "0",
                                                _ = o && [],
                                                b = [],
                                                w = c,
                                                E = o || i && r.find.TAG("*", u),
                                                T = x += null == w ? 1 : Math.random() || .1,
                                                C = E.length;
                                            for (u && (c = a == h || a || u); y !== C && null != (d = E[y]); y++) {
                                                if (i && d) {
                                                    for (p = 0, a || d.ownerDocument == h || (f(d), s = !g); m = e[p++];)
                                                        if (m(d, a || h, s)) {
                                                            l.push(d);
                                                            break
                                                        } u && (x = T)
                                                }
                                                n && ((d = !m && d) && v--, o && _.push(d))
                                            }
                                            if (v += y, n && y !== v) {
                                                for (p = 0; m = t[p++];) m(_, b, a, s);
                                                if (o) {
                                                    if (v > 0)
                                                        for (; y--;) _[y] || b[y] || (b[y] = j.call(l));
                                                    b = xe(b)
                                                }
                                                L.apply(l, b), u && !o && b.length > 0 && v + t.length > 1 && se.uniqueSort(l)
                                            }
                                            return u && (x = T, c = w), _
                                        };
                                    return n ? ce(o) : o
                                }(o, i))).selector = e
                            }
                            return s
                        }, l = se.select = function(e, t, n, i) {
                            var o, l, c, u, d, f = "function" == typeof e && e,
                                h = !i && a(e = f.selector || e);
                            if (n = n || [], 1 === h.length) {
                                if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && g && r.relative[l[1].type]) {
                                    if (!(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                                    f && (t = t.parentNode), e = e.slice(l.shift().value.length)
                                }
                                for (o = Q.needsContext.test(e) ? 0 : l.length; o-- && (c = l[o], !r.relative[u = c.type]);)
                                    if ((d = r.find[u]) && (i = d(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                                        if (l.splice(o, 1), !(e = i.length && _e(l))) return L.apply(n, i), n;
                                        break
                                    }
                            }
                            return (f || s(e, h))(i, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t), n
                        }, n.sortStable = b.split("").sort(A).join("") === b, n.detectDuplicates = !!d, f(), n.sortDetached = ue((function(e) {
                            return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
                        })), ue((function(e) {
                            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                        })) || de("type|href|height|width", (function(e, t, n) {
                            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                        })), n.attributes && ue((function(e) {
                            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                        })) || de("value", (function(e, t, n) {
                            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                        })), ue((function(e) {
                            return null == e.getAttribute("disabled")
                        })) || de($, (function(e, t, n) {
                            var r;
                            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                        })), se
                    }(r);
                    T.find = k, T.expr = k.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = k.uniqueSort, T.text = k.getText, T.isXMLDoc = k.isXML, T.contains = k.contains, T.escapeSelector = k.escape;
                    var S = function(e, t, n) {
                            for (var r = [], i = void 0 !== n;
                                (e = e[t]) && 9 !== e.nodeType;)
                                if (1 === e.nodeType) {
                                    if (i && T(e).is(n)) break;
                                    r.push(e)
                                } return r
                        },
                        A = function(e, t) {
                            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                            return n
                        },
                        N = T.expr.match.needsContext;

                    function D(e, t) {
                        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                    }
                    var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

                    function O(e, t, n) {
                        return v(t) ? T.grep(e, (function(e, r) {
                            return !!t.call(e, r, e) !== n
                        })) : t.nodeType ? T.grep(e, (function(e) {
                            return e === t !== n
                        })) : "string" != typeof t ? T.grep(e, (function(e) {
                            return u.call(t, e) > -1 !== n
                        })) : T.filter(t, e, n)
                    }
                    T.filter = function(e, t, n) {
                        var r = t[0];
                        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? T.find.matchesSelector(r, e) ? [r] : [] : T.find.matches(e, T.grep(t, (function(e) {
                            return 1 === e.nodeType
                        })))
                    }, T.fn.extend({
                        find: function(e) {
                            var t, n, r = this.length,
                                i = this;
                            if ("string" != typeof e) return this.pushStack(T(e).filter((function() {
                                for (t = 0; t < r; t++)
                                    if (T.contains(i[t], this)) return !0
                            })));
                            for (n = this.pushStack([]), t = 0; t < r; t++) T.find(e, i[t], n);
                            return r > 1 ? T.uniqueSort(n) : n
                        },
                        filter: function(e) {
                            return this.pushStack(O(this, e || [], !1))
                        },
                        not: function(e) {
                            return this.pushStack(O(this, e || [], !0))
                        },
                        is: function(e) {
                            return !!O(this, "string" == typeof e && N.test(e) ? T(e) : e || [], !1).length
                        }
                    });
                    var L, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                    (T.fn.init = function(e, t, n) {
                        var r, i;
                        if (!e) return this;
                        if (n = n || L, "string" == typeof e) {
                            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : I.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                            if (r[1]) {
                                if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : _, !0)), j.test(r[1]) && T.isPlainObject(t))
                                    for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                                return this
                            }
                            return (i = _.getElementById(r[2])) && (this[0] = i, this.length = 1), this
                        }
                        return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this)
                    }).prototype = T.fn, L = T(_);
                    var P = /^(?:parents|prev(?:Until|All))/,
                        $ = {
                            children: !0,
                            contents: !0,
                            next: !0,
                            prev: !0
                        };

                    function R(e, t) {
                        for (;
                            (e = e[t]) && 1 !== e.nodeType;);
                        return e
                    }
                    T.fn.extend({
                        has: function(e) {
                            var t = T(e, this),
                                n = t.length;
                            return this.filter((function() {
                                for (var e = 0; e < n; e++)
                                    if (T.contains(this, t[e])) return !0
                            }))
                        },
                        closest: function(e, t) {
                            var n, r = 0,
                                i = this.length,
                                o = [],
                                a = "string" != typeof e && T(e);
                            if (!N.test(e))
                                for (; r < i; r++)
                                    for (n = this[r]; n && n !== t; n = n.parentNode)
                                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                                            o.push(n);
                                            break
                                        } return this.pushStack(o.length > 1 ? T.uniqueSort(o) : o)
                        },
                        index: function(e) {
                            return e ? "string" == typeof e ? u.call(T(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                        },
                        add: function(e, t) {
                            return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))))
                        },
                        addBack: function(e) {
                            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                        }
                    }), T.each({
                        parent: function(e) {
                            var t = e.parentNode;
                            return t && 11 !== t.nodeType ? t : null
                        },
                        parents: function(e) {
                            return S(e, "parentNode")
                        },
                        parentsUntil: function(e, t, n) {
                            return S(e, "parentNode", n)
                        },
                        next: function(e) {
                            return R(e, "nextSibling")
                        },
                        prev: function(e) {
                            return R(e, "previousSibling")
                        },
                        nextAll: function(e) {
                            return S(e, "nextSibling")
                        },
                        prevAll: function(e) {
                            return S(e, "previousSibling")
                        },
                        nextUntil: function(e, t, n) {
                            return S(e, "nextSibling", n)
                        },
                        prevUntil: function(e, t, n) {
                            return S(e, "previousSibling", n)
                        },
                        siblings: function(e) {
                            return A((e.parentNode || {}).firstChild, e)
                        },
                        children: function(e) {
                            return A(e.firstChild)
                        },
                        contents: function(e) {
                            return null != e.contentDocument && a(e.contentDocument) ? e.contentDocument : (D(e, "template") && (e = e.content || e), T.merge([], e.childNodes))
                        }
                    }, (function(e, t) {
                        T.fn[e] = function(n, r) {
                            var i = T.map(this, t, n);
                            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = T.filter(r, i)), this.length > 1 && ($[e] || T.uniqueSort(i), P.test(e) && i.reverse()), this.pushStack(i)
                        }
                    }));
                    var q = /[^\x20\t\r\n\f]+/g;

                    function H(e) {
                        return e
                    }

                    function M(e) {
                        throw e
                    }

                    function F(e, t, n, r) {
                        var i;
                        try {
                            e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
                        } catch (e) {
                            n.apply(void 0, [e])
                        }
                    }
                    T.Callbacks = function(e) {
                        e = "string" == typeof e ? function(e) {
                            var t = {};
                            return T.each(e.match(q) || [], (function(e, n) {
                                t[n] = !0
                            })), t
                        }(e) : T.extend({}, e);
                        var t, n, r, i, o = [],
                            a = [],
                            s = -1,
                            l = function() {
                                for (i = i || e.once, r = t = !0; a.length; s = -1)
                                    for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
                            },
                            c = {
                                add: function() {
                                    return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                                        T.each(n, (function(n, r) {
                                            v(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
                                        }))
                                    }(arguments), n && !t && l()), this
                                },
                                remove: function() {
                                    return T.each(arguments, (function(e, t) {
                                        for (var n;
                                            (n = T.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                                    })), this
                                },
                                has: function(e) {
                                    return e ? T.inArray(e, o) > -1 : o.length > 0
                                },
                                empty: function() {
                                    return o && (o = []), this
                                },
                                disable: function() {
                                    return i = a = [], o = n = "", this
                                },
                                disabled: function() {
                                    return !o
                                },
                                lock: function() {
                                    return i = a = [], n || t || (o = n = ""), this
                                },
                                locked: function() {
                                    return !!i
                                },
                                fireWith: function(e, n) {
                                    return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || l()), this
                                },
                                fire: function() {
                                    return c.fireWith(this, arguments), this
                                },
                                fired: function() {
                                    return !!r
                                }
                            };
                        return c
                    }, T.extend({
                        Deferred: function(e) {
                            var t = [
                                    ["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2],
                                    ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"],
                                    ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]
                                ],
                                n = "pending",
                                i = {
                                    state: function() {
                                        return n
                                    },
                                    always: function() {
                                        return o.done(arguments).fail(arguments), this
                                    },
                                    catch: function(e) {
                                        return i.then(null, e)
                                    },
                                    pipe: function() {
                                        var e = arguments;
                                        return T.Deferred((function(n) {
                                            T.each(t, (function(t, r) {
                                                var i = v(e[r[4]]) && e[r[4]];
                                                o[r[1]]((function() {
                                                    var e = i && i.apply(this, arguments);
                                                    e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                                }))
                                            })), e = null
                                        })).promise()
                                    },
                                    then: function(e, n, i) {
                                        var o = 0;

                                        function a(e, t, n, i) {
                                            return function() {
                                                var s = this,
                                                    l = arguments,
                                                    c = function() {
                                                        var r, c;
                                                        if (!(e < o)) {
                                                            if ((r = n.apply(s, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                            c = r && ("object" == typeof r || "function" == typeof r) && r.then, v(c) ? i ? c.call(r, a(o, t, H, i), a(o, t, M, i)) : (o++, c.call(r, a(o, t, H, i), a(o, t, M, i), a(o, t, H, t.notifyWith))) : (n !== H && (s = void 0, l = [r]), (i || t.resolveWith)(s, l))
                                                        }
                                                    },
                                                    u = i ? c : function() {
                                                        try {
                                                            c()
                                                        } catch (r) {
                                                            T.Deferred.exceptionHook && T.Deferred.exceptionHook(r, u.stackTrace), e + 1 >= o && (n !== M && (s = void 0, l = [r]), t.rejectWith(s, l))
                                                        }
                                                    };
                                                e ? u() : (T.Deferred.getStackHook && (u.stackTrace = T.Deferred.getStackHook()), r.setTimeout(u))
                                            }
                                        }
                                        return T.Deferred((function(r) {
                                            t[0][3].add(a(0, r, v(i) ? i : H, r.notifyWith)), t[1][3].add(a(0, r, v(e) ? e : H)), t[2][3].add(a(0, r, v(n) ? n : M))
                                        })).promise()
                                    },
                                    promise: function(e) {
                                        return null != e ? T.extend(e, i) : i
                                    }
                                },
                                o = {};
                            return T.each(t, (function(e, r) {
                                var a = r[2],
                                    s = r[5];
                                i[r[1]] = a.add, s && a.add((function() {
                                    n = s
                                }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(r[3].fire), o[r[0]] = function() {
                                    return o[r[0] + "With"](this === o ? void 0 : this, arguments), this
                                }, o[r[0] + "With"] = a.fireWith
                            })), i.promise(o), e && e.call(o, o), o
                        },
                        when: function(e) {
                            var t = arguments.length,
                                n = t,
                                r = Array(n),
                                i = s.call(arguments),
                                o = T.Deferred(),
                                a = function(e) {
                                    return function(n) {
                                        r[e] = this, i[e] = arguments.length > 1 ? s.call(arguments) : n, --t || o.resolveWith(r, i)
                                    }
                                };
                            if (t <= 1 && (F(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || v(i[n] && i[n].then))) return o.then();
                            for (; n--;) F(i[n], a(n), o.reject);
                            return o.promise()
                        }
                    });
                    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                    T.Deferred.exceptionHook = function(e, t) {
                        r.console && r.console.warn && e && B.test(e.name) && r.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
                    }, T.readyException = function(e) {
                        r.setTimeout((function() {
                            throw e
                        }))
                    };
                    var W = T.Deferred();

                    function U() {
                        _.removeEventListener("DOMContentLoaded", U), r.removeEventListener("load", U), T.ready()
                    }
                    T.fn.ready = function(e) {
                        return W.then(e).catch((function(e) {
                            T.readyException(e)
                        })), this
                    }, T.extend({
                        isReady: !1,
                        readyWait: 1,
                        ready: function(e) {
                            (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0, !0 !== e && --T.readyWait > 0 || W.resolveWith(_, [T]))
                        }
                    }), T.ready.then = W.then, "complete" === _.readyState || "loading" !== _.readyState && !_.documentElement.doScroll ? r.setTimeout(T.ready) : (_.addEventListener("DOMContentLoaded", U), r.addEventListener("load", U));
                    var z = function(e, t, n, r, i, o, a) {
                            var s = 0,
                                l = e.length,
                                c = null == n;
                            if ("object" === x(n))
                                for (s in i = !0, n) z(e, t, s, n[s], !0, o, a);
                            else if (void 0 !== r && (i = !0, v(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
                                    return c.call(T(e), n)
                                })), t))
                                for (; s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                            return i ? e : c ? t.call(e) : l ? t(e[0], n) : o
                        },
                        V = /^-ms-/,
                        G = /-([a-z])/g;

                    function Q(e, t) {
                        return t.toUpperCase()
                    }

                    function Y(e) {
                        return e.replace(V, "ms-").replace(G, Q)
                    }
                    var X = function(e) {
                        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                    };

                    function J() {
                        this.expando = T.expando + J.uid++
                    }
                    J.uid = 1, J.prototype = {
                        cache: function(e) {
                            var t = e[this.expando];
                            return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                                value: t,
                                configurable: !0
                            }))), t
                        },
                        set: function(e, t, n) {
                            var r, i = this.cache(e);
                            if ("string" == typeof t) i[Y(t)] = n;
                            else
                                for (r in t) i[Y(r)] = t[r];
                            return i
                        },
                        get: function(e, t) {
                            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)]
                        },
                        access: function(e, t, n) {
                            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                        },
                        remove: function(e, t) {
                            var n, r = e[this.expando];
                            if (void 0 !== r) {
                                if (void 0 !== t) {
                                    n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in r ? [t] : t.match(q) || []).length;
                                    for (; n--;) delete r[t[n]]
                                }(void 0 === t || T.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                            }
                        },
                        hasData: function(e) {
                            var t = e[this.expando];
                            return void 0 !== t && !T.isEmptyObject(t)
                        }
                    };
                    var K = new J,
                        Z = new J,
                        ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                        te = /[A-Z]/g;

                    function ne(e, t, n) {
                        var r;
                        if (void 0 === n && 1 === e.nodeType)
                            if (r = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                                try {
                                    n = function(e) {
                                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
                                    }(n)
                                } catch (e) {}
                                Z.set(e, t, n)
                            } else n = void 0;
                        return n
                    }
                    T.extend({
                        hasData: function(e) {
                            return Z.hasData(e) || K.hasData(e)
                        },
                        data: function(e, t, n) {
                            return Z.access(e, t, n)
                        },
                        removeData: function(e, t) {
                            Z.remove(e, t)
                        },
                        _data: function(e, t, n) {
                            return K.access(e, t, n)
                        },
                        _removeData: function(e, t) {
                            K.remove(e, t)
                        }
                    }), T.fn.extend({
                        data: function(e, t) {
                            var n, r, i, o = this[0],
                                a = o && o.attributes;
                            if (void 0 === e) {
                                if (this.length && (i = Z.get(o), 1 === o.nodeType && !K.get(o, "hasDataAttrs"))) {
                                    for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = Y(r.slice(5)), ne(o, r, i[r]));
                                    K.set(o, "hasDataAttrs", !0)
                                }
                                return i
                            }
                            return "object" == typeof e ? this.each((function() {
                                Z.set(this, e)
                            })) : z(this, (function(t) {
                                var n;
                                if (o && void 0 === t) return void 0 !== (n = Z.get(o, e)) || void 0 !== (n = ne(o, e)) ? n : void 0;
                                this.each((function() {
                                    Z.set(this, e, t)
                                }))
                            }), null, t, arguments.length > 1, null, !0)
                        },
                        removeData: function(e) {
                            return this.each((function() {
                                Z.remove(this, e)
                            }))
                        }
                    }), T.extend({
                        queue: function(e, t, n) {
                            var r;
                            if (e) return t = (t || "fx") + "queue", r = K.get(e, t), n && (!r || Array.isArray(n) ? r = K.access(e, t, T.makeArray(n)) : r.push(n)), r || []
                        },
                        dequeue: function(e, t) {
                            t = t || "fx";
                            var n = T.queue(e, t),
                                r = n.length,
                                i = n.shift(),
                                o = T._queueHooks(e, t);
                            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, (function() {
                                T.dequeue(e, t)
                            }), o)), !r && o && o.empty.fire()
                        },
                        _queueHooks: function(e, t) {
                            var n = t + "queueHooks";
                            return K.get(e, n) || K.access(e, n, {
                                empty: T.Callbacks("once memory").add((function() {
                                    K.remove(e, [t + "queue", n])
                                }))
                            })
                        }
                    }), T.fn.extend({
                        queue: function(e, t) {
                            var n = 2;
                            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? T.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                                var n = T.queue(this, e, t);
                                T._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e)
                            }))
                        },
                        dequeue: function(e) {
                            return this.each((function() {
                                T.dequeue(this, e)
                            }))
                        },
                        clearQueue: function(e) {
                            return this.queue(e || "fx", [])
                        },
                        promise: function(e, t) {
                            var n, r = 1,
                                i = T.Deferred(),
                                o = this,
                                a = this.length,
                                s = function() {
                                    --r || i.resolveWith(o, [o])
                                };
                            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = K.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                            return s(), i.promise(t)
                        }
                    });
                    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                        ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
                        oe = ["Top", "Right", "Bottom", "Left"],
                        ae = _.documentElement,
                        se = function(e) {
                            return T.contains(e.ownerDocument, e)
                        },
                        le = {
                            composed: !0
                        };
                    ae.getRootNode && (se = function(e) {
                        return T.contains(e.ownerDocument, e) || e.getRootNode(le) === e.ownerDocument
                    });
                    var ce = function(e, t) {
                        return "none" === (e = t || e).style.display || "" === e.style.display && se(e) && "none" === T.css(e, "display")
                    };

                    function ue(e, t, n, r) {
                        var i, o, a = 20,
                            s = r ? function() {
                                return r.cur()
                            } : function() {
                                return T.css(e, t, "")
                            },
                            l = s(),
                            c = n && n[3] || (T.cssNumber[t] ? "" : "px"),
                            u = e.nodeType && (T.cssNumber[t] || "px" !== c && +l) && ie.exec(T.css(e, t));
                        if (u && u[3] !== c) {
                            for (l /= 2, c = c || u[3], u = +l || 1; a--;) T.style(e, t, u + c), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), u /= o;
                            u *= 2, T.style(e, t, u + c), n = n || []
                        }
                        return n && (u = +u || +l || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = u, r.end = i)), i
                    }
                    var de = {};

                    function fe(e) {
                        var t, n = e.ownerDocument,
                            r = e.nodeName,
                            i = de[r];
                        return i || (t = n.body.appendChild(n.createElement(r)), i = T.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), de[r] = i, i)
                    }

                    function he(e, t) {
                        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = K.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ce(r) && (i[o] = fe(r))) : "none" !== n && (i[o] = "none", K.set(r, "display", n)));
                        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
                        return e
                    }
                    T.fn.extend({
                        show: function() {
                            return he(this, !0)
                        },
                        hide: function() {
                            return he(this)
                        },
                        toggle: function(e) {
                            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                                ce(this) ? T(this).show() : T(this).hide()
                            }))
                        }
                    });
                    var pe, ge, me = /^(?:checkbox|radio)$/i,
                        ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                        ye = /^$|^module$|\/(?:java|ecma)script/i;
                    pe = _.createDocumentFragment().appendChild(_.createElement("div")), (ge = _.createElement("input")).setAttribute("type", "radio"), ge.setAttribute("checked", "checked"), ge.setAttribute("name", "t"), pe.appendChild(ge), m.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked, pe.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue, pe.innerHTML = "<option></option>", m.option = !!pe.lastChild;
                    var _e = {
                        thead: [1, "<table>", "</table>"],
                        col: [2, "<table><colgroup>", "</colgroup></table>"],
                        tr: [2, "<table><tbody>", "</tbody></table>"],
                        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                        _default: [0, "", ""]
                    };

                    function be(e, t) {
                        var n;
                        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && D(e, t) ? T.merge([e], n) : n
                    }

                    function we(e, t) {
                        for (var n = 0, r = e.length; n < r; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
                    }
                    _e.tbody = _e.tfoot = _e.colgroup = _e.caption = _e.thead, _e.th = _e.td, m.option || (_e.optgroup = _e.option = [1, "<select multiple='multiple'>", "</select>"]);
                    var xe = /<|&#?\w+;/;

                    function Ee(e, t, n, r, i) {
                        for (var o, a, s, l, c, u, d = t.createDocumentFragment(), f = [], h = 0, p = e.length; h < p; h++)
                            if ((o = e[h]) || 0 === o)
                                if ("object" === x(o)) T.merge(f, o.nodeType ? [o] : o);
                                else if (xe.test(o)) {
                            for (a = a || d.appendChild(t.createElement("div")), s = (ve.exec(o) || ["", ""])[1].toLowerCase(), l = _e[s] || _e._default, a.innerHTML = l[1] + T.htmlPrefilter(o) + l[2], u = l[0]; u--;) a = a.lastChild;
                            T.merge(f, a.childNodes), (a = d.firstChild).textContent = ""
                        } else f.push(t.createTextNode(o));
                        for (d.textContent = "", h = 0; o = f[h++];)
                            if (r && T.inArray(o, r) > -1) i && i.push(o);
                            else if (c = se(o), a = be(d.appendChild(o), "script"), c && we(a), n)
                            for (u = 0; o = a[u++];) ye.test(o.type || "") && n.push(o);
                        return d
                    }
                    var Te = /^([^.]*)(?:\.(.+)|)/;

                    function Ce() {
                        return !0
                    }

                    function ke() {
                        return !1
                    }

                    function Se(e, t) {
                        return e === function() {
                            try {
                                return _.activeElement
                            } catch (e) {}
                        }() == ("focus" === t)
                    }

                    function Ae(e, t, n, r, i, o) {
                        var a, s;
                        if ("object" == typeof t) {
                            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ae(e, s, n, r, t[s], o);
                            return e
                        }
                        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;
                        else if (!i) return e;
                        return 1 === o && (a = i, (i = function(e) {
                            return T().off(e), a.apply(this, arguments)
                        }).guid = a.guid || (a.guid = T.guid++)), e.each((function() {
                            T.event.add(this, t, i, r, n)
                        }))
                    }

                    function Ne(e, t, n) {
                        n ? (K.set(e, t, !1), T.event.add(e, t, {
                            namespace: !1,
                            handler: function(e) {
                                var r, i, o = K.get(this, t);
                                if (1 & e.isTrigger && this[t]) {
                                    if (o.length)(T.event.special[t] || {}).delegateType && e.stopPropagation();
                                    else if (o = s.call(arguments), K.set(this, t, o), r = n(this, t), this[t](), o !== (i = K.get(this, t)) || r ? K.set(this, t, !1) : i = {}, o !== i) return e.stopImmediatePropagation(), e.preventDefault(), i && i.value
                                } else o.length && (K.set(this, t, {
                                    value: T.event.trigger(T.extend(o[0], T.Event.prototype), o.slice(1), this)
                                }), e.stopImmediatePropagation())
                            }
                        })) : void 0 === K.get(e, t) && T.event.add(e, t, Ce)
                    }
                    T.event = {
                        global: {},
                        add: function(e, t, n, r, i) {
                            var o, a, s, l, c, u, d, f, h, p, g, m = K.get(e);
                            if (X(e))
                                for (n.handler && (n = (o = n).handler, i = o.selector), i && T.find.matchesSelector(ae, i), n.guid || (n.guid = T.guid++), (l = m.events) || (l = m.events = Object.create(null)), (a = m.handle) || (a = m.handle = function(t) {
                                        return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0
                                    }), c = (t = (t || "").match(q) || [""]).length; c--;) h = g = (s = Te.exec(t[c]) || [])[1], p = (s[2] || "").split(".").sort(), h && (d = T.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, d = T.event.special[h] || {}, u = T.extend({
                                    type: h,
                                    origType: g,
                                    data: r,
                                    handler: n,
                                    guid: n.guid,
                                    selector: i,
                                    needsContext: i && T.expr.match.needsContext.test(i),
                                    namespace: p.join(".")
                                }, o), (f = l[h]) || ((f = l[h] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, r, p, a) || e.addEventListener && e.addEventListener(h, a)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, u) : f.push(u), T.event.global[h] = !0)
                        },
                        remove: function(e, t, n, r, i) {
                            var o, a, s, l, c, u, d, f, h, p, g, m = K.hasData(e) && K.get(e);
                            if (m && (l = m.events)) {
                                for (c = (t = (t || "").match(q) || [""]).length; c--;)
                                    if (h = g = (s = Te.exec(t[c]) || [])[1], p = (s[2] || "").split(".").sort(), h) {
                                        for (d = T.event.special[h] || {}, f = l[h = (r ? d.delegateType : d.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) u = f[o], !i && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (f.splice(o, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                                        a && !f.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || T.removeEvent(e, h, m.handle), delete l[h])
                                    } else
                                        for (h in l) T.event.remove(e, h + t[c], n, r, !0);
                                T.isEmptyObject(l) && K.remove(e, "handle events")
                            }
                        },
                        dispatch: function(e) {
                            var t, n, r, i, o, a, s = new Array(arguments.length),
                                l = T.event.fix(e),
                                c = (K.get(this, "events") || Object.create(null))[l.type] || [],
                                u = T.event.special[l.type] || {};
                            for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                            if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                                for (a = T.event.handlers.call(this, l, c), t = 0;
                                    (i = a[t++]) && !l.isPropagationStopped();)
                                    for (l.currentTarget = i.elem, n = 0;
                                        (o = i.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (r = ((T.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (l.result = r) && (l.preventDefault(), l.stopPropagation()));
                                return u.postDispatch && u.postDispatch.call(this, l), l.result
                            }
                        },
                        handlers: function(e, t) {
                            var n, r, i, o, a, s = [],
                                l = t.delegateCount,
                                c = e.target;
                            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                                for (; c !== this; c = c.parentNode || this)
                                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                                        for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? T(i, this).index(c) > -1 : T.find(i, this, null, [c]).length), a[i] && o.push(r);
                                        o.length && s.push({
                                            elem: c,
                                            handlers: o
                                        })
                                    } return c = this, l < t.length && s.push({
                                elem: c,
                                handlers: t.slice(l)
                            }), s
                        },
                        addProp: function(e, t) {
                            Object.defineProperty(T.Event.prototype, e, {
                                enumerable: !0,
                                configurable: !0,
                                get: v(t) ? function() {
                                    if (this.originalEvent) return t(this.originalEvent)
                                } : function() {
                                    if (this.originalEvent) return this.originalEvent[e]
                                },
                                set: function(t) {
                                    Object.defineProperty(this, e, {
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                        value: t
                                    })
                                }
                            })
                        },
                        fix: function(e) {
                            return e[T.expando] ? e : new T.Event(e)
                        },
                        special: {
                            load: {
                                noBubble: !0
                            },
                            click: {
                                setup: function(e) {
                                    var t = this || e;
                                    return me.test(t.type) && t.click && D(t, "input") && Ne(t, "click", Ce), !1
                                },
                                trigger: function(e) {
                                    var t = this || e;
                                    return me.test(t.type) && t.click && D(t, "input") && Ne(t, "click"), !0
                                },
                                _default: function(e) {
                                    var t = e.target;
                                    return me.test(t.type) && t.click && D(t, "input") && K.get(t, "click") || D(t, "a")
                                }
                            },
                            beforeunload: {
                                postDispatch: function(e) {
                                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                                }
                            }
                        }
                    }, T.removeEvent = function(e, t, n) {
                        e.removeEventListener && e.removeEventListener(t, n)
                    }, T.Event = function(e, t) {
                        if (!(this instanceof T.Event)) return new T.Event(e, t);
                        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && T.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[T.expando] = !0
                    }, T.Event.prototype = {
                        constructor: T.Event,
                        isDefaultPrevented: ke,
                        isPropagationStopped: ke,
                        isImmediatePropagationStopped: ke,
                        isSimulated: !1,
                        preventDefault: function() {
                            var e = this.originalEvent;
                            this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault()
                        },
                        stopPropagation: function() {
                            var e = this.originalEvent;
                            this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation()
                        },
                        stopImmediatePropagation: function() {
                            var e = this.originalEvent;
                            this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                        }
                    }, T.each({
                        altKey: !0,
                        bubbles: !0,
                        cancelable: !0,
                        changedTouches: !0,
                        ctrlKey: !0,
                        detail: !0,
                        eventPhase: !0,
                        metaKey: !0,
                        pageX: !0,
                        pageY: !0,
                        shiftKey: !0,
                        view: !0,
                        char: !0,
                        code: !0,
                        charCode: !0,
                        key: !0,
                        keyCode: !0,
                        button: !0,
                        buttons: !0,
                        clientX: !0,
                        clientY: !0,
                        offsetX: !0,
                        offsetY: !0,
                        pointerId: !0,
                        pointerType: !0,
                        screenX: !0,
                        screenY: !0,
                        targetTouches: !0,
                        toElement: !0,
                        touches: !0,
                        which: !0
                    }, T.event.addProp), T.each({
                        focus: "focusin",
                        blur: "focusout"
                    }, (function(e, t) {
                        T.event.special[e] = {
                            setup: function() {
                                return Ne(this, e, Se), !1
                            },
                            trigger: function() {
                                return Ne(this, e), !0
                            },
                            _default: function() {
                                return !0
                            },
                            delegateType: t
                        }
                    })), T.each({
                        mouseenter: "mouseover",
                        mouseleave: "mouseout",
                        pointerenter: "pointerover",
                        pointerleave: "pointerout"
                    }, (function(e, t) {
                        T.event.special[e] = {
                            delegateType: t,
                            bindType: t,
                            handle: function(e) {
                                var n, r = this,
                                    i = e.relatedTarget,
                                    o = e.handleObj;
                                return i && (i === r || T.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                            }
                        }
                    })), T.fn.extend({
                        on: function(e, t, n, r) {
                            return Ae(this, e, t, n, r)
                        },
                        one: function(e, t, n, r) {
                            return Ae(this, e, t, n, r, 1)
                        },
                        off: function(e, t, n) {
                            var r, i;
                            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, T(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                            if ("object" == typeof e) {
                                for (i in e) this.off(i, t, e[i]);
                                return this
                            }
                            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each((function() {
                                T.event.remove(this, e, n, t)
                            }))
                        }
                    });
                    var De = /<script|<style|<link/i,
                        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
                        Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

                    function Le(e, t) {
                        return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e
                    }

                    function Ie(e) {
                        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
                    }

                    function Pe(e) {
                        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
                    }

                    function $e(e, t) {
                        var n, r, i, o, a, s;
                        if (1 === t.nodeType) {
                            if (K.hasData(e) && (s = K.get(e).events))
                                for (i in K.remove(t, "handle events"), s)
                                    for (n = 0, r = s[i].length; n < r; n++) T.event.add(t, i, s[i][n]);
                            Z.hasData(e) && (o = Z.access(e), a = T.extend({}, o), Z.set(t, a))
                        }
                    }

                    function Re(e, t) {
                        var n = t.nodeName.toLowerCase();
                        "input" === n && me.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
                    }

                    function qe(e, t, n, r) {
                        t = l(t);
                        var i, o, a, s, c, u, d = 0,
                            f = e.length,
                            h = f - 1,
                            p = t[0],
                            g = v(p);
                        if (g || f > 1 && "string" == typeof p && !m.checkClone && je.test(p)) return e.each((function(i) {
                            var o = e.eq(i);
                            g && (t[0] = p.call(this, i, o.html())), qe(o, t, n, r)
                        }));
                        if (f && (o = (i = Ee(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                            for (s = (a = T.map(be(i, "script"), Ie)).length; d < f; d++) c = i, d !== h && (c = T.clone(c, !0, !0), s && T.merge(a, be(c, "script"))), n.call(e[d], c, d);
                            if (s)
                                for (u = a[a.length - 1].ownerDocument, T.map(a, Pe), d = 0; d < s; d++) c = a[d], ye.test(c.type || "") && !K.access(c, "globalEval") && T.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? T._evalUrl && !c.noModule && T._evalUrl(c.src, {
                                    nonce: c.nonce || c.getAttribute("nonce")
                                }, u) : w(c.textContent.replace(Oe, ""), c, u))
                        }
                        return e
                    }

                    function He(e, t, n) {
                        for (var r, i = t ? T.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || T.cleanData(be(r)), r.parentNode && (n && se(r) && we(be(r, "script")), r.parentNode.removeChild(r));
                        return e
                    }
                    T.extend({
                        htmlPrefilter: function(e) {
                            return e
                        },
                        clone: function(e, t, n) {
                            var r, i, o, a, s = e.cloneNode(!0),
                                l = se(e);
                            if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e)))
                                for (a = be(s), r = 0, i = (o = be(e)).length; r < i; r++) Re(o[r], a[r]);
                            if (t)
                                if (n)
                                    for (o = o || be(e), a = a || be(s), r = 0, i = o.length; r < i; r++) $e(o[r], a[r]);
                                else $e(e, s);
                            return (a = be(s, "script")).length > 0 && we(a, !l && be(e, "script")), s
                        },
                        cleanData: function(e) {
                            for (var t, n, r, i = T.event.special, o = 0; void 0 !== (n = e[o]); o++)
                                if (X(n)) {
                                    if (t = n[K.expando]) {
                                        if (t.events)
                                            for (r in t.events) i[r] ? T.event.remove(n, r) : T.removeEvent(n, r, t.handle);
                                        n[K.expando] = void 0
                                    }
                                    n[Z.expando] && (n[Z.expando] = void 0)
                                }
                        }
                    }), T.fn.extend({
                        detach: function(e) {
                            return He(this, e, !0)
                        },
                        remove: function(e) {
                            return He(this, e)
                        },
                        text: function(e) {
                            return z(this, (function(e) {
                                return void 0 === e ? T.text(this) : this.empty().each((function() {
                                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                                }))
                            }), null, e, arguments.length)
                        },
                        append: function() {
                            return qe(this, arguments, (function(e) {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
                            }))
                        },
                        prepend: function() {
                            return qe(this, arguments, (function(e) {
                                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                    var t = Le(this, e);
                                    t.insertBefore(e, t.firstChild)
                                }
                            }))
                        },
                        before: function() {
                            return qe(this, arguments, (function(e) {
                                this.parentNode && this.parentNode.insertBefore(e, this)
                            }))
                        },
                        after: function() {
                            return qe(this, arguments, (function(e) {
                                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                            }))
                        },
                        empty: function() {
                            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (T.cleanData(be(e, !1)), e.textContent = "");
                            return this
                        },
                        clone: function(e, t) {
                            return e = null != e && e, t = null == t ? e : t, this.map((function() {
                                return T.clone(this, e, t)
                            }))
                        },
                        html: function(e) {
                            return z(this, (function(e) {
                                var t = this[0] || {},
                                    n = 0,
                                    r = this.length;
                                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                                if ("string" == typeof e && !De.test(e) && !_e[(ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                                    e = T.htmlPrefilter(e);
                                    try {
                                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (T.cleanData(be(t, !1)), t.innerHTML = e);
                                        t = 0
                                    } catch (e) {}
                                }
                                t && this.empty().append(e)
                            }), null, e, arguments.length)
                        },
                        replaceWith: function() {
                            var e = [];
                            return qe(this, arguments, (function(t) {
                                var n = this.parentNode;
                                T.inArray(this, e) < 0 && (T.cleanData(be(this)), n && n.replaceChild(t, this))
                            }), e)
                        }
                    }), T.each({
                        appendTo: "append",
                        prependTo: "prepend",
                        insertBefore: "before",
                        insertAfter: "after",
                        replaceAll: "replaceWith"
                    }, (function(e, t) {
                        T.fn[e] = function(e) {
                            for (var n, r = [], i = T(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), T(i[a])[t](n), c.apply(r, n.get());
                            return this.pushStack(r)
                        }
                    }));
                    var Me = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
                        Fe = function(e) {
                            var t = e.ownerDocument.defaultView;
                            return t && t.opener || (t = r), t.getComputedStyle(e)
                        },
                        Be = function(e, t, n) {
                            var r, i, o = {};
                            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
                            for (i in r = n.call(e), t) e.style[i] = o[i];
                            return r
                        },
                        We = new RegExp(oe.join("|"), "i");

                    function Ue(e, t, n) {
                        var r, i, o, a, s = e.style;
                        return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || se(e) || (a = T.style(e, t)), !m.pixelBoxStyles() && Me.test(a) && We.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
                    }

                    function ze(e, t) {
                        return {
                            get: function() {
                                if (!e()) return (this.get = t).apply(this, arguments);
                                delete this.get
                            }
                        }
                    }! function() {
                        function e() {
                            if (u) {
                                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ae.appendChild(c).appendChild(u);
                                var e = r.getComputedStyle(u);
                                n = "1%" !== e.top, l = 12 === t(e.marginLeft), u.style.right = "60%", a = 36 === t(e.right), i = 36 === t(e.width), u.style.position = "absolute", o = 12 === t(u.offsetWidth / 3), ae.removeChild(c), u = null
                            }
                        }

                        function t(e) {
                            return Math.round(parseFloat(e))
                        }
                        var n, i, o, a, s, l, c = _.createElement("div"),
                            u = _.createElement("div");
                        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === u.style.backgroundClip, T.extend(m, {
                            boxSizingReliable: function() {
                                return e(), i
                            },
                            pixelBoxStyles: function() {
                                return e(), a
                            },
                            pixelPosition: function() {
                                return e(), n
                            },
                            reliableMarginLeft: function() {
                                return e(), l
                            },
                            scrollboxSize: function() {
                                return e(), o
                            },
                            reliableTrDimensions: function() {
                                var e, t, n, i;
                                return null == s && (e = _.createElement("table"), t = _.createElement("tr"), n = _.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", ae.appendChild(e).appendChild(t).appendChild(n), i = r.getComputedStyle(t), s = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === t.offsetHeight, ae.removeChild(e)), s
                            }
                        }))
                    }();
                    var Ve = ["Webkit", "Moz", "ms"],
                        Ge = _.createElement("div").style,
                        Qe = {};

                    function Ye(e) {
                        return T.cssProps[e] || Qe[e] || (e in Ge ? e : Qe[e] = function(e) {
                            for (var t = e[0].toUpperCase() + e.slice(1), n = Ve.length; n--;)
                                if ((e = Ve[n] + t) in Ge) return e
                        }(e) || e)
                    }
                    var Xe = /^(none|table(?!-c[ea]).+)/,
                        Je = /^--/,
                        Ke = {
                            position: "absolute",
                            visibility: "hidden",
                            display: "block"
                        },
                        Ze = {
                            letterSpacing: "0",
                            fontWeight: "400"
                        };

                    function et(e, t, n) {
                        var r = ie.exec(t);
                        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
                    }

                    function tt(e, t, n, r, i, o) {
                        var a = "width" === t ? 1 : 0,
                            s = 0,
                            l = 0;
                        if (n === (r ? "border" : "content")) return 0;
                        for (; a < 4; a += 2) "margin" === n && (l += T.css(e, n + oe[a], !0, i)), r ? ("content" === n && (l -= T.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (l -= T.css(e, "border" + oe[a] + "Width", !0, i))) : (l += T.css(e, "padding" + oe[a], !0, i), "padding" !== n ? l += T.css(e, "border" + oe[a] + "Width", !0, i) : s += T.css(e, "border" + oe[a] + "Width", !0, i));
                        return !r && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - .5)) || 0), l
                    }

                    function nt(e, t, n) {
                        var r = Fe(e),
                            i = (!m.boxSizingReliable() || n) && "border-box" === T.css(e, "boxSizing", !1, r),
                            o = i,
                            a = Ue(e, t, r),
                            s = "offset" + t[0].toUpperCase() + t.slice(1);
                        if (Me.test(a)) {
                            if (!n) return a;
                            a = "auto"
                        }
                        return (!m.boxSizingReliable() && i || !m.reliableTrDimensions() && D(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === T.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === T.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + tt(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
                    }

                    function rt(e, t, n, r, i) {
                        return new rt.prototype.init(e, t, n, r, i)
                    }
                    T.extend({
                        cssHooks: {
                            opacity: {
                                get: function(e, t) {
                                    if (t) {
                                        var n = Ue(e, "opacity");
                                        return "" === n ? "1" : n
                                    }
                                }
                            }
                        },
                        cssNumber: {
                            animationIterationCount: !0,
                            columnCount: !0,
                            fillOpacity: !0,
                            flexGrow: !0,
                            flexShrink: !0,
                            fontWeight: !0,
                            gridArea: !0,
                            gridColumn: !0,
                            gridColumnEnd: !0,
                            gridColumnStart: !0,
                            gridRow: !0,
                            gridRowEnd: !0,
                            gridRowStart: !0,
                            lineHeight: !0,
                            opacity: !0,
                            order: !0,
                            orphans: !0,
                            widows: !0,
                            zIndex: !0,
                            zoom: !0
                        },
                        cssProps: {},
                        style: function(e, t, n, r) {
                            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                                var i, o, a, s = Y(t),
                                    l = Je.test(t),
                                    c = e.style;
                                if (l || (t = Ye(s)), a = T.cssHooks[t] || T.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : c[t];
                                "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n == n && ("number" !== o || l || (n += i && i[3] || (T.cssNumber[s] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (l ? c.setProperty(t, n) : c[t] = n))
                            }
                        },
                        css: function(e, t, n, r) {
                            var i, o, a, s = Y(t);
                            return Je.test(t) || (t = Ye(s)), (a = T.cssHooks[t] || T.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Ue(e, t, r)), "normal" === i && t in Ze && (i = Ze[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
                        }
                    }), T.each(["height", "width"], (function(e, t) {
                        T.cssHooks[t] = {
                            get: function(e, n, r) {
                                if (n) return !Xe.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? nt(e, t, r) : Be(e, Ke, (function() {
                                    return nt(e, t, r)
                                }))
                            },
                            set: function(e, n, r) {
                                var i, o = Fe(e),
                                    a = !m.scrollboxSize() && "absolute" === o.position,
                                    s = (a || r) && "border-box" === T.css(e, "boxSizing", !1, o),
                                    l = r ? tt(e, t, r, s, o) : 0;
                                return s && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - tt(e, t, "border", !1, o) - .5)), l && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = T.css(e, t)), et(0, n, l)
                            }
                        }
                    })), T.cssHooks.marginLeft = ze(m.reliableMarginLeft, (function(e, t) {
                        if (t) return (parseFloat(Ue(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {
                            marginLeft: 0
                        }, (function() {
                            return e.getBoundingClientRect().left
                        }))) + "px"
                    })), T.each({
                        margin: "",
                        padding: "",
                        border: "Width"
                    }, (function(e, t) {
                        T.cssHooks[e + t] = {
                            expand: function(n) {
                                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                                return i
                            }
                        }, "margin" !== e && (T.cssHooks[e + t].set = et)
                    })), T.fn.extend({
                        css: function(e, t) {
                            return z(this, (function(e, t, n) {
                                var r, i, o = {},
                                    a = 0;
                                if (Array.isArray(t)) {
                                    for (r = Fe(e), i = t.length; a < i; a++) o[t[a]] = T.css(e, t[a], !1, r);
                                    return o
                                }
                                return void 0 !== n ? T.style(e, t, n) : T.css(e, t)
                            }), e, t, arguments.length > 1)
                        }
                    }), T.Tween = rt, rt.prototype = {
                        constructor: rt,
                        init: function(e, t, n, r, i, o) {
                            this.elem = e, this.prop = n, this.easing = i || T.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (T.cssNumber[n] ? "" : "px")
                        },
                        cur: function() {
                            var e = rt.propHooks[this.prop];
                            return e && e.get ? e.get(this) : rt.propHooks._default.get(this)
                        },
                        run: function(e) {
                            var t, n = rt.propHooks[this.prop];
                            return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rt.propHooks._default.set(this), this
                        }
                    }, rt.prototype.init.prototype = rt.prototype, rt.propHooks = {
                        _default: {
                            get: function(e) {
                                var t;
                                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                            },
                            set: function(e) {
                                T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !T.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit)
                            }
                        }
                    }, rt.propHooks.scrollTop = rt.propHooks.scrollLeft = {
                        set: function(e) {
                            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                        }
                    }, T.easing = {
                        linear: function(e) {
                            return e
                        },
                        swing: function(e) {
                            return .5 - Math.cos(e * Math.PI) / 2
                        },
                        _default: "swing"
                    }, T.fx = rt.prototype.init, T.fx.step = {};
                    var it, ot, at = /^(?:toggle|show|hide)$/,
                        st = /queueHooks$/;

                    function lt() {
                        ot && (!1 === _.hidden && r.requestAnimationFrame ? r.requestAnimationFrame(lt) : r.setTimeout(lt, T.fx.interval), T.fx.tick())
                    }

                    function ct() {
                        return r.setTimeout((function() {
                            it = void 0
                        })), it = Date.now()
                    }

                    function ut(e, t) {
                        var n, r = 0,
                            i = {
                                height: e
                            };
                        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
                        return t && (i.opacity = i.width = e), i
                    }

                    function dt(e, t, n) {
                        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                            if (r = i[o].call(n, t, e)) return r
                    }

                    function ft(e, t, n) {
                        var r, i, o = 0,
                            a = ft.prefilters.length,
                            s = T.Deferred().always((function() {
                                delete l.elem
                            })),
                            l = function() {
                                if (i) return !1;
                                for (var t = it || ct(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), o = 0, a = c.tweens.length; o < a; o++) c.tweens[o].run(r);
                                return s.notifyWith(e, [c, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
                            },
                            c = s.promise({
                                elem: e,
                                props: T.extend({}, t),
                                opts: T.extend(!0, {
                                    specialEasing: {},
                                    easing: T.easing._default
                                }, n),
                                originalProperties: t,
                                originalOptions: n,
                                startTime: it || ct(),
                                duration: n.duration,
                                tweens: [],
                                createTween: function(t, n) {
                                    var r = T.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                                    return c.tweens.push(r), r
                                },
                                stop: function(t) {
                                    var n = 0,
                                        r = t ? c.tweens.length : 0;
                                    if (i) return this;
                                    for (i = !0; n < r; n++) c.tweens[n].run(1);
                                    return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                                }
                            }),
                            u = c.props;
                        for (function(e, t) {
                                var n, r, i, o, a;
                                for (n in e)
                                    if (i = t[r = Y(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = T.cssHooks[r]) && "expand" in a)
                                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                                    else t[r] = i
                            }(u, c.opts.specialEasing); o < a; o++)
                            if (r = ft.prefilters[o].call(c, e, u, c.opts)) return v(r.stop) && (T._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), r;
                        return T.map(u, dt, c), v(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), T.fx.timer(T.extend(l, {
                            elem: e,
                            anim: c,
                            queue: c.opts.queue
                        })), c
                    }
                    T.Animation = T.extend(ft, {
                            tweeners: {
                                "*": [function(e, t) {
                                    var n = this.createTween(e, t);
                                    return ue(n.elem, e, ie.exec(t), n), n
                                }]
                            },
                            tweener: function(e, t) {
                                v(e) ? (t = e, e = ["*"]) : e = e.match(q);
                                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
                            },
                            prefilters: [function(e, t, n) {
                                var r, i, o, a, s, l, c, u, d = "width" in t || "height" in t,
                                    f = this,
                                    h = {},
                                    p = e.style,
                                    g = e.nodeType && ce(e),
                                    m = K.get(e, "fxshow");
                                for (r in n.queue || (null == (a = T._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                                        a.unqueued || s()
                                    }), a.unqueued++, f.always((function() {
                                        f.always((function() {
                                            a.unqueued--, T.queue(e, "fx").length || a.empty.fire()
                                        }))
                                    }))), t)
                                    if (i = t[r], at.test(i)) {
                                        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                                            if ("show" !== i || !m || void 0 === m[r]) continue;
                                            g = !0
                                        }
                                        h[r] = m && m[r] || T.style(e, r)
                                    } if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(h))
                                    for (r in d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = K.get(e, "display")), "none" === (u = T.css(e, "display")) && (c ? u = c : (he([e], !0), c = e.style.display || c, u = T.css(e, "display"), he([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === T.css(e, "float") && (l || (f.done((function() {
                                            p.display = c
                                        })), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always((function() {
                                            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                                        }))), l = !1, h) l || (m ? "hidden" in m && (g = m.hidden) : m = K.access(e, "fxshow", {
                                        display: c
                                    }), o && (m.hidden = !g), g && he([e], !0), f.done((function() {
                                        for (r in g || he([e]), K.remove(e, "fxshow"), h) T.style(e, r, h[r])
                                    }))), l = dt(g ? m[r] : 0, r, f), r in m || (m[r] = l.start, g && (l.end = l.start, l.start = 0))
                            }],
                            prefilter: function(e, t) {
                                t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
                            }
                        }), T.speed = function(e, t, n) {
                            var r = e && "object" == typeof e ? T.extend({}, e) : {
                                complete: n || !n && t || v(e) && e,
                                duration: e,
                                easing: n && t || t && !v(t) && t
                            };
                            return T.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in T.fx.speeds ? r.duration = T.fx.speeds[r.duration] : r.duration = T.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                                v(r.old) && r.old.call(this), r.queue && T.dequeue(this, r.queue)
                            }, r
                        }, T.fn.extend({
                            fadeTo: function(e, t, n, r) {
                                return this.filter(ce).css("opacity", 0).show().end().animate({
                                    opacity: t
                                }, e, n, r)
                            },
                            animate: function(e, t, n, r) {
                                var i = T.isEmptyObject(e),
                                    o = T.speed(t, n, r),
                                    a = function() {
                                        var t = ft(this, T.extend({}, e), o);
                                        (i || K.get(this, "finish")) && t.stop(!0)
                                    };
                                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                            },
                            stop: function(e, t, n) {
                                var r = function(e) {
                                    var t = e.stop;
                                    delete e.stop, t(n)
                                };
                                return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
                                    var t = !0,
                                        i = null != e && e + "queueHooks",
                                        o = T.timers,
                                        a = K.get(this);
                                    if (i) a[i] && a[i].stop && r(a[i]);
                                    else
                                        for (i in a) a[i] && a[i].stop && st.test(i) && r(a[i]);
                                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                                    !t && n || T.dequeue(this, e)
                                }))
                            },
                            finish: function(e) {
                                return !1 !== e && (e = e || "fx"), this.each((function() {
                                    var t, n = K.get(this),
                                        r = n[e + "queue"],
                                        i = n[e + "queueHooks"],
                                        o = T.timers,
                                        a = r ? r.length : 0;
                                    for (n.finish = !0, T.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                                    delete n.finish
                                }))
                            }
                        }), T.each(["toggle", "show", "hide"], (function(e, t) {
                            var n = T.fn[t];
                            T.fn[t] = function(e, r, i) {
                                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
                            }
                        })), T.each({
                            slideDown: ut("show"),
                            slideUp: ut("hide"),
                            slideToggle: ut("toggle"),
                            fadeIn: {
                                opacity: "show"
                            },
                            fadeOut: {
                                opacity: "hide"
                            },
                            fadeToggle: {
                                opacity: "toggle"
                            }
                        }, (function(e, t) {
                            T.fn[e] = function(e, n, r) {
                                return this.animate(t, e, n, r)
                            }
                        })), T.timers = [], T.fx.tick = function() {
                            var e, t = 0,
                                n = T.timers;
                            for (it = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                            n.length || T.fx.stop(), it = void 0
                        }, T.fx.timer = function(e) {
                            T.timers.push(e), T.fx.start()
                        }, T.fx.interval = 13, T.fx.start = function() {
                            ot || (ot = !0, lt())
                        }, T.fx.stop = function() {
                            ot = null
                        }, T.fx.speeds = {
                            slow: 600,
                            fast: 200,
                            _default: 400
                        }, T.fn.delay = function(e, t) {
                            return e = T.fx && T.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, n) {
                                var i = r.setTimeout(t, e);
                                n.stop = function() {
                                    r.clearTimeout(i)
                                }
                            }))
                        },
                        function() {
                            var e = _.createElement("input"),
                                t = _.createElement("select").appendChild(_.createElement("option"));
                            e.type = "checkbox", m.checkOn = "" !== e.value, m.optSelected = t.selected, (e = _.createElement("input")).value = "t", e.type = "radio", m.radioValue = "t" === e.value
                        }();
                    var ht, pt = T.expr.attrHandle;
                    T.fn.extend({
                        attr: function(e, t) {
                            return z(this, T.attr, e, t, arguments.length > 1)
                        },
                        removeAttr: function(e) {
                            return this.each((function() {
                                T.removeAttr(this, e)
                            }))
                        }
                    }), T.extend({
                        attr: function(e, t, n) {
                            var r, i, o = e.nodeType;
                            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === o && T.isXMLDoc(e) || (i = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void T.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = T.find.attr(e, t)) ? void 0 : r)
                        },
                        attrHooks: {
                            type: {
                                set: function(e, t) {
                                    if (!m.radioValue && "radio" === t && D(e, "input")) {
                                        var n = e.value;
                                        return e.setAttribute("type", t), n && (e.value = n), t
                                    }
                                }
                            }
                        },
                        removeAttr: function(e, t) {
                            var n, r = 0,
                                i = t && t.match(q);
                            if (i && 1 === e.nodeType)
                                for (; n = i[r++];) e.removeAttribute(n)
                        }
                    }), ht = {
                        set: function(e, t, n) {
                            return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n
                        }
                    }, T.each(T.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                        var n = pt[t] || T.find.attr;
                        pt[t] = function(e, t, r) {
                            var i, o, a = t.toLowerCase();
                            return r || (o = pt[a], pt[a] = i, i = null != n(e, t, r) ? a : null, pt[a] = o), i
                        }
                    }));
                    var gt = /^(?:input|select|textarea|button)$/i,
                        mt = /^(?:a|area)$/i;

                    function vt(e) {
                        return (e.match(q) || []).join(" ")
                    }

                    function yt(e) {
                        return e.getAttribute && e.getAttribute("class") || ""
                    }

                    function _t(e) {
                        return Array.isArray(e) ? e : "string" == typeof e && e.match(q) || []
                    }
                    T.fn.extend({
                        prop: function(e, t) {
                            return z(this, T.prop, e, t, arguments.length > 1)
                        },
                        removeProp: function(e) {
                            return this.each((function() {
                                delete this[T.propFix[e] || e]
                            }))
                        }
                    }), T.extend({
                        prop: function(e, t, n) {
                            var r, i, o = e.nodeType;
                            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && T.isXMLDoc(e) || (t = T.propFix[t] || t, i = T.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                        },
                        propHooks: {
                            tabIndex: {
                                get: function(e) {
                                    var t = T.find.attr(e, "tabindex");
                                    return t ? parseInt(t, 10) : gt.test(e.nodeName) || mt.test(e.nodeName) && e.href ? 0 : -1
                                }
                            }
                        },
                        propFix: {
                            for: "htmlFor",
                            class: "className"
                        }
                    }), m.optSelected || (T.propHooks.selected = {
                        get: function(e) {
                            var t = e.parentNode;
                            return t && t.parentNode && t.parentNode.selectedIndex, null
                        },
                        set: function(e) {
                            var t = e.parentNode;
                            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                        }
                    }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                        T.propFix[this.toLowerCase()] = this
                    })), T.fn.extend({
                        addClass: function(e) {
                            var t, n, r, i, o, a, s, l = 0;
                            if (v(e)) return this.each((function(t) {
                                T(this).addClass(e.call(this, t, yt(this)))
                            }));
                            if ((t = _t(e)).length)
                                for (; n = this[l++];)
                                    if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                                        for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                        i !== (s = vt(r)) && n.setAttribute("class", s)
                                    } return this
                        },
                        removeClass: function(e) {
                            var t, n, r, i, o, a, s, l = 0;
                            if (v(e)) return this.each((function(t) {
                                T(this).removeClass(e.call(this, t, yt(this)))
                            }));
                            if (!arguments.length) return this.attr("class", "");
                            if ((t = _t(e)).length)
                                for (; n = this[l++];)
                                    if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                                        for (a = 0; o = t[a++];)
                                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                                        i !== (s = vt(r)) && n.setAttribute("class", s)
                                    } return this
                        },
                        toggleClass: function(e, t) {
                            var n = typeof e,
                                r = "string" === n || Array.isArray(e);
                            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each((function(n) {
                                T(this).toggleClass(e.call(this, n, yt(this), t), t)
                            })) : this.each((function() {
                                var t, i, o, a;
                                if (r)
                                    for (i = 0, o = T(this), a = _t(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                                else void 0 !== e && "boolean" !== n || ((t = yt(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""))
                            }))
                        },
                        hasClass: function(e) {
                            var t, n, r = 0;
                            for (t = " " + e + " "; n = this[r++];)
                                if (1 === n.nodeType && (" " + vt(yt(n)) + " ").indexOf(t) > -1) return !0;
                            return !1
                        }
                    });
                    var bt = /\r/g;
                    T.fn.extend({
                        val: function(e) {
                            var t, n, r, i = this[0];
                            return arguments.length ? (r = v(e), this.each((function(n) {
                                var i;
                                1 === this.nodeType && (null == (i = r ? e.call(this, n, T(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = T.map(i, (function(e) {
                                    return null == e ? "" : e + ""
                                }))), (t = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                            }))) : i ? (t = T.valHooks[i.type] || T.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(bt, "") : null == n ? "" : n : void 0
                        }
                    }), T.extend({
                        valHooks: {
                            option: {
                                get: function(e) {
                                    var t = T.find.attr(e, "value");
                                    return null != t ? t : vt(T.text(e))
                                }
                            },
                            select: {
                                get: function(e) {
                                    var t, n, r, i = e.options,
                                        o = e.selectedIndex,
                                        a = "select-one" === e.type,
                                        s = a ? null : [],
                                        l = a ? o + 1 : i.length;
                                    for (r = o < 0 ? l : a ? o : 0; r < l; r++)
                                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                                            if (t = T(n).val(), a) return t;
                                            s.push(t)
                                        } return s
                                },
                                set: function(e, t) {
                                    for (var n, r, i = e.options, o = T.makeArray(t), a = i.length; a--;)((r = i[a]).selected = T.inArray(T.valHooks.option.get(r), o) > -1) && (n = !0);
                                    return n || (e.selectedIndex = -1), o
                                }
                            }
                        }
                    }), T.each(["radio", "checkbox"], (function() {
                        T.valHooks[this] = {
                            set: function(e, t) {
                                if (Array.isArray(t)) return e.checked = T.inArray(T(e).val(), t) > -1
                            }
                        }, m.checkOn || (T.valHooks[this].get = function(e) {
                            return null === e.getAttribute("value") ? "on" : e.value
                        })
                    })), m.focusin = "onfocusin" in r;
                    var wt = /^(?:focusinfocus|focusoutblur)$/,
                        xt = function(e) {
                            e.stopPropagation()
                        };
                    T.extend(T.event, {
                        trigger: function(e, t, n, i) {
                            var o, a, s, l, c, u, d, f, p = [n || _],
                                g = h.call(e, "type") ? e.type : e,
                                m = h.call(e, "namespace") ? e.namespace.split(".") : [];
                            if (a = f = s = n = n || _, 3 !== n.nodeType && 8 !== n.nodeType && !wt.test(g + T.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."), g = m.shift(), m.sort()), c = g.indexOf(":") < 0 && "on" + g, (e = e[T.expando] ? e : new T.Event(g, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : T.makeArray(t, [e]), d = T.event.special[g] || {}, i || !d.trigger || !1 !== d.trigger.apply(n, t))) {
                                if (!i && !d.noBubble && !y(n)) {
                                    for (l = d.delegateType || g, wt.test(l + g) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
                                    s === (n.ownerDocument || _) && p.push(s.defaultView || s.parentWindow || r)
                                }
                                for (o = 0;
                                    (a = p[o++]) && !e.isPropagationStopped();) f = a, e.type = o > 1 ? l : d.bindType || g, (u = (K.get(a, "events") || Object.create(null))[e.type] && K.get(a, "handle")) && u.apply(a, t), (u = c && a[c]) && u.apply && X(a) && (e.result = u.apply(a, t), !1 === e.result && e.preventDefault());
                                return e.type = g, i || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(p.pop(), t) || !X(n) || c && v(n[g]) && !y(n) && ((s = n[c]) && (n[c] = null), T.event.triggered = g, e.isPropagationStopped() && f.addEventListener(g, xt), n[g](), e.isPropagationStopped() && f.removeEventListener(g, xt), T.event.triggered = void 0, s && (n[c] = s)), e.result
                            }
                        },
                        simulate: function(e, t, n) {
                            var r = T.extend(new T.Event, n, {
                                type: e,
                                isSimulated: !0
                            });
                            T.event.trigger(r, null, t)
                        }
                    }), T.fn.extend({
                        trigger: function(e, t) {
                            return this.each((function() {
                                T.event.trigger(e, t, this)
                            }))
                        },
                        triggerHandler: function(e, t) {
                            var n = this[0];
                            if (n) return T.event.trigger(e, t, n, !0)
                        }
                    }), m.focusin || T.each({
                        focus: "focusin",
                        blur: "focusout"
                    }, (function(e, t) {
                        var n = function(e) {
                            T.event.simulate(t, e.target, T.event.fix(e))
                        };
                        T.event.special[t] = {
                            setup: function() {
                                var r = this.ownerDocument || this.document || this,
                                    i = K.access(r, t);
                                i || r.addEventListener(e, n, !0), K.access(r, t, (i || 0) + 1)
                            },
                            teardown: function() {
                                var r = this.ownerDocument || this.document || this,
                                    i = K.access(r, t) - 1;
                                i ? K.access(r, t, i) : (r.removeEventListener(e, n, !0), K.remove(r, t))
                            }
                        }
                    }));
                    var Et = r.location,
                        Tt = {
                            guid: Date.now()
                        },
                        Ct = /\?/;
                    T.parseXML = function(e) {
                        var t, n;
                        if (!e || "string" != typeof e) return null;
                        try {
                            t = (new r.DOMParser).parseFromString(e, "text/xml")
                        } catch (e) {}
                        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || T.error("Invalid XML: " + (n ? T.map(n.childNodes, (function(e) {
                            return e.textContent
                        })).join("\n") : e)), t
                    };
                    var kt = /\[\]$/,
                        St = /\r?\n/g,
                        At = /^(?:submit|button|image|reset|file)$/i,
                        Nt = /^(?:input|select|textarea|keygen)/i;

                    function Dt(e, t, n, r) {
                        var i;
                        if (Array.isArray(t)) T.each(t, (function(t, i) {
                            n || kt.test(e) ? r(e, i) : Dt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
                        }));
                        else if (n || "object" !== x(t)) r(e, t);
                        else
                            for (i in t) Dt(e + "[" + i + "]", t[i], n, r)
                    }
                    T.param = function(e, t) {
                        var n, r = [],
                            i = function(e, t) {
                                var n = v(t) ? t() : t;
                                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                            };
                        if (null == e) return "";
                        if (Array.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, (function() {
                            i(this.name, this.value)
                        }));
                        else
                            for (n in e) Dt(n, e[n], t, i);
                        return r.join("&")
                    }, T.fn.extend({
                        serialize: function() {
                            return T.param(this.serializeArray())
                        },
                        serializeArray: function() {
                            return this.map((function() {
                                var e = T.prop(this, "elements");
                                return e ? T.makeArray(e) : this
                            })).filter((function() {
                                var e = this.type;
                                return this.name && !T(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !me.test(e))
                            })).map((function(e, t) {
                                var n = T(this).val();
                                return null == n ? null : Array.isArray(n) ? T.map(n, (function(e) {
                                    return {
                                        name: t.name,
                                        value: e.replace(St, "\r\n")
                                    }
                                })) : {
                                    name: t.name,
                                    value: n.replace(St, "\r\n")
                                }
                            })).get()
                        }
                    });
                    var jt = /%20/g,
                        Ot = /#.*$/,
                        Lt = /([?&])_=[^&]*/,
                        It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                        Pt = /^(?:GET|HEAD)$/,
                        $t = /^\/\//,
                        Rt = {},
                        qt = {},
                        Ht = "*/".concat("*"),
                        Mt = _.createElement("a");

                    function Ft(e) {
                        return function(t, n) {
                            "string" != typeof t && (n = t, t = "*");
                            var r, i = 0,
                                o = t.toLowerCase().match(q) || [];
                            if (v(n))
                                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                        }
                    }

                    function Bt(e, t, n, r) {
                        var i = {},
                            o = e === qt;

                        function a(s) {
                            var l;
                            return i[s] = !0, T.each(e[s] || [], (function(e, s) {
                                var c = s(t, n, r);
                                return "string" != typeof c || o || i[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1)
                            })), l
                        }
                        return a(t.dataTypes[0]) || !i["*"] && a("*")
                    }

                    function Wt(e, t) {
                        var n, r, i = T.ajaxSettings.flatOptions || {};
                        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                        return r && T.extend(!0, e, r), e
                    }
                    Mt.href = Et.href, T.extend({
                        active: 0,
                        lastModified: {},
                        etag: {},
                        ajaxSettings: {
                            url: Et.href,
                            type: "GET",
                            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
                            global: !0,
                            processData: !0,
                            async: !0,
                            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                            accepts: {
                                "*": Ht,
                                text: "text/plain",
                                html: "text/html",
                                xml: "application/xml, text/xml",
                                json: "application/json, text/javascript"
                            },
                            contents: {
                                xml: /\bxml\b/,
                                html: /\bhtml/,
                                json: /\bjson\b/
                            },
                            responseFields: {
                                xml: "responseXML",
                                text: "responseText",
                                json: "responseJSON"
                            },
                            converters: {
                                "* text": String,
                                "text html": !0,
                                "text json": JSON.parse,
                                "text xml": T.parseXML
                            },
                            flatOptions: {
                                url: !0,
                                context: !0
                            }
                        },
                        ajaxSetup: function(e, t) {
                            return t ? Wt(Wt(e, T.ajaxSettings), t) : Wt(T.ajaxSettings, e)
                        },
                        ajaxPrefilter: Ft(Rt),
                        ajaxTransport: Ft(qt),
                        ajax: function(e, t) {
                            "object" == typeof e && (t = e, e = void 0), t = t || {};
                            var n, i, o, a, s, l, c, u, d, f, h = T.ajaxSetup({}, t),
                                p = h.context || h,
                                g = h.context && (p.nodeType || p.jquery) ? T(p) : T.event,
                                m = T.Deferred(),
                                v = T.Callbacks("once memory"),
                                y = h.statusCode || {},
                                b = {},
                                w = {},
                                x = "canceled",
                                E = {
                                    readyState: 0,
                                    getResponseHeader: function(e) {
                                        var t;
                                        if (c) {
                                            if (!a)
                                                for (a = {}; t = It.exec(o);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                            t = a[e.toLowerCase() + " "]
                                        }
                                        return null == t ? null : t.join(", ")
                                    },
                                    getAllResponseHeaders: function() {
                                        return c ? o : null
                                    },
                                    setRequestHeader: function(e, t) {
                                        return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this
                                    },
                                    overrideMimeType: function(e) {
                                        return null == c && (h.mimeType = e), this
                                    },
                                    statusCode: function(e) {
                                        var t;
                                        if (e)
                                            if (c) E.always(e[E.status]);
                                            else
                                                for (t in e) y[t] = [y[t], e[t]];
                                        return this
                                    },
                                    abort: function(e) {
                                        var t = e || x;
                                        return n && n.abort(t), C(0, t), this
                                    }
                                };
                            if (m.promise(E), h.url = ((e || h.url || Et.href) + "").replace($t, Et.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(q) || [""], null == h.crossDomain) {
                                l = _.createElement("a");
                                try {
                                    l.href = h.url, l.href = l.href, h.crossDomain = Mt.protocol + "//" + Mt.host != l.protocol + "//" + l.host
                                } catch (e) {
                                    h.crossDomain = !0
                                }
                            }
                            if (h.data && h.processData && "string" != typeof h.data && (h.data = T.param(h.data, h.traditional)), Bt(Rt, h, t, E), c) return E;
                            for (d in (u = T.event && h.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Pt.test(h.type), i = h.url.replace(Ot, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(jt, "+")) : (f = h.url.slice(i.length), h.data && (h.processData || "string" == typeof h.data) && (i += (Ct.test(i) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (i = i.replace(Lt, "$1"), f = (Ct.test(i) ? "&" : "?") + "_=" + Tt.guid++ + f), h.url = i + f), h.ifModified && (T.lastModified[i] && E.setRequestHeader("If-Modified-Since", T.lastModified[i]), T.etag[i] && E.setRequestHeader("If-None-Match", T.etag[i])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : h.accepts["*"]), h.headers) E.setRequestHeader(d, h.headers[d]);
                            if (h.beforeSend && (!1 === h.beforeSend.call(p, E, h) || c)) return E.abort();
                            if (x = "abort", v.add(h.complete), E.done(h.success), E.fail(h.error), n = Bt(qt, h, t, E)) {
                                if (E.readyState = 1, u && g.trigger("ajaxSend", [E, h]), c) return E;
                                h.async && h.timeout > 0 && (s = r.setTimeout((function() {
                                    E.abort("timeout")
                                }), h.timeout));
                                try {
                                    c = !1, n.send(b, C)
                                } catch (e) {
                                    if (c) throw e;
                                    C(-1, e)
                                }
                            } else C(-1, "No Transport");

                            function C(e, t, a, l) {
                                var d, f, _, b, w, x = t;
                                c || (c = !0, s && r.clearTimeout(s), n = void 0, o = l || "", E.readyState = e > 0 ? 4 : 0, d = e >= 200 && e < 300 || 304 === e, a && (b = function(e, t, n) {
                                    for (var r, i, o, a, s = e.contents, l = e.dataTypes;
                                        "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                    if (r)
                                        for (i in s)
                                            if (s[i] && s[i].test(r)) {
                                                l.unshift(i);
                                                break
                                            } if (l[0] in n) o = l[0];
                                    else {
                                        for (i in n) {
                                            if (!l[0] || e.converters[i + " " + l[0]]) {
                                                o = i;
                                                break
                                            }
                                            a || (a = i)
                                        }
                                        o = o || a
                                    }
                                    if (o) return o !== l[0] && l.unshift(o), n[o]
                                }(h, E, a)), !d && T.inArray("script", h.dataTypes) > -1 && T.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function() {}), b = function(e, t, n, r) {
                                    var i, o, a, s, l, c = {},
                                        u = e.dataTypes.slice();
                                    if (u[1])
                                        for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                                    for (o = u.shift(); o;)
                                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                                            if ("*" === o) o = l;
                                            else if ("*" !== l && l !== o) {
                                        if (!(a = c[l + " " + o] || c["* " + o]))
                                            for (i in c)
                                                if ((s = i.split(" "))[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                                    !0 === a ? a = c[i] : !0 !== c[i] && (o = s[0], u.unshift(s[1]));
                                                    break
                                                } if (!0 !== a)
                                            if (a && e.throws) t = a(t);
                                            else try {
                                                t = a(t)
                                            } catch (e) {
                                                return {
                                                    state: "parsererror",
                                                    error: a ? e : "No conversion from " + l + " to " + o
                                                }
                                            }
                                    }
                                    return {
                                        state: "success",
                                        data: t
                                    }
                                }(h, b, E, d), d ? (h.ifModified && ((w = E.getResponseHeader("Last-Modified")) && (T.lastModified[i] = w), (w = E.getResponseHeader("etag")) && (T.etag[i] = w)), 204 === e || "HEAD" === h.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = b.state, f = b.data, d = !(_ = b.error))) : (_ = x, !e && x || (x = "error", e < 0 && (e = 0))), E.status = e, E.statusText = (t || x) + "", d ? m.resolveWith(p, [f, x, E]) : m.rejectWith(p, [E, x, _]), E.statusCode(y), y = void 0, u && g.trigger(d ? "ajaxSuccess" : "ajaxError", [E, h, d ? f : _]), v.fireWith(p, [E, x]), u && (g.trigger("ajaxComplete", [E, h]), --T.active || T.event.trigger("ajaxStop")))
                            }
                            return E
                        },
                        getJSON: function(e, t, n) {
                            return T.get(e, t, n, "json")
                        },
                        getScript: function(e, t) {
                            return T.get(e, void 0, t, "script")
                        }
                    }), T.each(["get", "post"], (function(e, t) {
                        T[t] = function(e, n, r, i) {
                            return v(n) && (i = i || r, r = n, n = void 0), T.ajax(T.extend({
                                url: e,
                                type: t,
                                dataType: i,
                                data: n,
                                success: r
                            }, T.isPlainObject(e) && e))
                        }
                    })), T.ajaxPrefilter((function(e) {
                        var t;
                        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
                    })), T._evalUrl = function(e, t, n) {
                        return T.ajax({
                            url: e,
                            type: "GET",
                            dataType: "script",
                            cache: !0,
                            async: !1,
                            global: !1,
                            converters: {
                                "text script": function() {}
                            },
                            dataFilter: function(e) {
                                T.globalEval(e, t, n)
                            }
                        })
                    }, T.fn.extend({
                        wrapAll: function(e) {
                            var t;
                            return this[0] && (v(e) && (e = e.call(this[0])), t = T(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                                return e
                            })).append(this)), this
                        },
                        wrapInner: function(e) {
                            return v(e) ? this.each((function(t) {
                                T(this).wrapInner(e.call(this, t))
                            })) : this.each((function() {
                                var t = T(this),
                                    n = t.contents();
                                n.length ? n.wrapAll(e) : t.append(e)
                            }))
                        },
                        wrap: function(e) {
                            var t = v(e);
                            return this.each((function(n) {
                                T(this).wrapAll(t ? e.call(this, n) : e)
                            }))
                        },
                        unwrap: function(e) {
                            return this.parent(e).not("body").each((function() {
                                T(this).replaceWith(this.childNodes)
                            })), this
                        }
                    }), T.expr.pseudos.hidden = function(e) {
                        return !T.expr.pseudos.visible(e)
                    }, T.expr.pseudos.visible = function(e) {
                        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                    }, T.ajaxSettings.xhr = function() {
                        try {
                            return new r.XMLHttpRequest
                        } catch (e) {}
                    };
                    var Ut = {
                            0: 200,
                            1223: 204
                        },
                        zt = T.ajaxSettings.xhr();
                    m.cors = !!zt && "withCredentials" in zt, m.ajax = zt = !!zt, T.ajaxTransport((function(e) {
                        var t, n;
                        if (m.cors || zt && !e.crossDomain) return {
                            send: function(i, o) {
                                var a, s = e.xhr();
                                if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                                    for (a in e.xhrFields) s[a] = e.xhrFields[a];
                                for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                                t = function(e) {
                                    return function() {
                                        t && (t = n = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Ut[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                            binary: s.response
                                        } : {
                                            text: s.responseText
                                        }, s.getAllResponseHeaders()))
                                    }
                                }, s.onload = t(), n = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = n : s.onreadystatechange = function() {
                                    4 === s.readyState && r.setTimeout((function() {
                                        t && n()
                                    }))
                                }, t = t("abort");
                                try {
                                    s.send(e.hasContent && e.data || null)
                                } catch (e) {
                                    if (t) throw e
                                }
                            },
                            abort: function() {
                                t && t()
                            }
                        }
                    })), T.ajaxPrefilter((function(e) {
                        e.crossDomain && (e.contents.script = !1)
                    })), T.ajaxSetup({
                        accepts: {
                            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                        },
                        contents: {
                            script: /\b(?:java|ecma)script\b/
                        },
                        converters: {
                            "text script": function(e) {
                                return T.globalEval(e), e
                            }
                        }
                    }), T.ajaxPrefilter("script", (function(e) {
                        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
                    })), T.ajaxTransport("script", (function(e) {
                        var t, n;
                        if (e.crossDomain || e.scriptAttrs) return {
                            send: function(r, i) {
                                t = T("<script>").attr(e.scriptAttrs || {}).prop({
                                    charset: e.scriptCharset,
                                    src: e.url
                                }).on("load error", n = function(e) {
                                    t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                                }), _.head.appendChild(t[0])
                            },
                            abort: function() {
                                n && n()
                            }
                        }
                    }));
                    var Vt, Gt = [],
                        Qt = /(=)\?(?=&|$)|\?\?/;
                    T.ajaxSetup({
                        jsonp: "callback",
                        jsonpCallback: function() {
                            var e = Gt.pop() || T.expando + "_" + Tt.guid++;
                            return this[e] = !0, e
                        }
                    }), T.ajaxPrefilter("json jsonp", (function(e, t, n) {
                        var i, o, a, s = !1 !== e.jsonp && (Qt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(e.data) && "data");
                        if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Qt, "$1" + i) : !1 !== e.jsonp && (e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                            return a || T.error(i + " was not called"), a[0]
                        }, e.dataTypes[0] = "json", o = r[i], r[i] = function() {
                            a = arguments
                        }, n.always((function() {
                            void 0 === o ? T(r).removeProp(i) : r[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Gt.push(i)), a && v(o) && o(a[0]), a = o = void 0
                        })), "script"
                    })), m.createHTMLDocument = ((Vt = _.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), T.parseHTML = function(e, t, n) {
                        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((r = (t = _.implementation.createHTMLDocument("")).createElement("base")).href = _.location.href, t.head.appendChild(r)) : t = _), o = !n && [], (i = j.exec(e)) ? [t.createElement(i[1])] : (i = Ee([e], t, o), o && o.length && T(o).remove(), T.merge([], i.childNodes)));
                        var r, i, o
                    }, T.fn.load = function(e, t, n) {
                        var r, i, o, a = this,
                            s = e.indexOf(" ");
                        return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && T.ajax({
                            url: e,
                            type: i || "GET",
                            dataType: "html",
                            data: t
                        }).done((function(e) {
                            o = arguments, a.html(r ? T("<div>").append(T.parseHTML(e)).find(r) : e)
                        })).always(n && function(e, t) {
                            a.each((function() {
                                n.apply(this, o || [e.responseText, t, e])
                            }))
                        }), this
                    }, T.expr.pseudos.animated = function(e) {
                        return T.grep(T.timers, (function(t) {
                            return e === t.elem
                        })).length
                    }, T.offset = {
                        setOffset: function(e, t, n) {
                            var r, i, o, a, s, l, c = T.css(e, "position"),
                                u = T(e),
                                d = {};
                            "static" === c && (e.style.position = "relative"), s = u.offset(), o = T.css(e, "top"), l = T.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (a = (r = u.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), v(t) && (t = t.call(e, n, T.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : u.css(d)
                        }
                    }, T.fn.extend({
                        offset: function(e) {
                            if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                                T.offset.setOffset(this, e, t)
                            }));
                            var t, n, r = this[0];
                            return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                                top: t.top + n.pageYOffset,
                                left: t.left + n.pageXOffset
                            }) : {
                                top: 0,
                                left: 0
                            } : void 0
                        },
                        position: function() {
                            if (this[0]) {
                                var e, t, n, r = this[0],
                                    i = {
                                        top: 0,
                                        left: 0
                                    };
                                if ("fixed" === T.css(r, "position")) t = r.getBoundingClientRect();
                                else {
                                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position");) e = e.parentNode;
                                    e && e !== r && 1 === e.nodeType && ((i = T(e).offset()).top += T.css(e, "borderTopWidth", !0), i.left += T.css(e, "borderLeftWidth", !0))
                                }
                                return {
                                    top: t.top - i.top - T.css(r, "marginTop", !0),
                                    left: t.left - i.left - T.css(r, "marginLeft", !0)
                                }
                            }
                        },
                        offsetParent: function() {
                            return this.map((function() {
                                for (var e = this.offsetParent; e && "static" === T.css(e, "position");) e = e.offsetParent;
                                return e || ae
                            }))
                        }
                    }), T.each({
                        scrollLeft: "pageXOffset",
                        scrollTop: "pageYOffset"
                    }, (function(e, t) {
                        var n = "pageYOffset" === t;
                        T.fn[e] = function(r) {
                            return z(this, (function(e, r, i) {
                                var o;
                                if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                            }), e, r, arguments.length)
                        }
                    })), T.each(["top", "left"], (function(e, t) {
                        T.cssHooks[t] = ze(m.pixelPosition, (function(e, n) {
                            if (n) return n = Ue(e, t), Me.test(n) ? T(e).position()[t] + "px" : n
                        }))
                    })), T.each({
                        Height: "height",
                        Width: "width"
                    }, (function(e, t) {
                        T.each({
                            padding: "inner" + e,
                            content: t,
                            "": "outer" + e
                        }, (function(n, r) {
                            T.fn[r] = function(i, o) {
                                var a = arguments.length && (n || "boolean" != typeof i),
                                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                                return z(this, (function(t, n, i) {
                                    var o;
                                    return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? T.css(t, n, s) : T.style(t, n, i, s)
                                }), t, a ? i : void 0, a)
                            }
                        }))
                    })), T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
                        T.fn[t] = function(e) {
                            return this.on(t, e)
                        }
                    })), T.fn.extend({
                        bind: function(e, t, n) {
                            return this.on(e, null, t, n)
                        },
                        unbind: function(e, t) {
                            return this.off(e, null, t)
                        },
                        delegate: function(e, t, n, r) {
                            return this.on(t, e, n, r)
                        },
                        undelegate: function(e, t, n) {
                            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                        },
                        hover: function(e, t) {
                            return this.mouseenter(e).mouseleave(t || e)
                        }
                    }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
                        T.fn[t] = function(e, n) {
                            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                        }
                    }));
                    var Yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                    T.proxy = function(e, t) {
                        var n, r, i;
                        if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = s.call(arguments, 2), (i = function() {
                            return e.apply(t || this, r.concat(s.call(arguments)))
                        }).guid = e.guid = e.guid || T.guid++, i
                    }, T.holdReady = function(e) {
                        e ? T.readyWait++ : T.ready(!0)
                    }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = D, T.isFunction = v, T.isWindow = y, T.camelCase = Y, T.type = x, T.now = Date.now, T.isNumeric = function(e) {
                        var t = T.type(e);
                        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                    }, T.trim = function(e) {
                        return null == e ? "" : (e + "").replace(Yt, "")
                    }, void 0 === (n = function() {
                        return T
                    }.apply(t, [])) || (e.exports = n);
                    var Xt = r.jQuery,
                        Jt = r.$;
                    return T.noConflict = function(e) {
                        return r.$ === T && (r.$ = Jt), e && r.jQuery === T && (r.jQuery = Xt), T
                    }, void 0 === i && (r.jQuery = r.$ = T), T
                }))
            },
            981: (e, t, n) => {
                "use strict";
                n.r(t), n.d(t, {
                    default: () => oe
                });
                var r = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
                    i = function() {
                        for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
                            if (r && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
                        return 0
                    }(),
                    o = r && window.Promise ? function(e) {
                        var t = !1;
                        return function() {
                            t || (t = !0, window.Promise.resolve().then((function() {
                                t = !1, e()
                            })))
                        }
                    } : function(e) {
                        var t = !1;
                        return function() {
                            t || (t = !0, setTimeout((function() {
                                t = !1, e()
                            }), i))
                        }
                    };

                function a(e) {
                    return e && "[object Function]" === {}.toString.call(e)
                }

                function s(e, t) {
                    if (1 !== e.nodeType) return [];
                    var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
                    return t ? n[t] : n
                }

                function l(e) {
                    return "HTML" === e.nodeName ? e : e.parentNode || e.host
                }

                function c(e) {
                    if (!e) return document.body;
                    switch (e.nodeName) {
                        case "HTML":
                        case "BODY":
                            return e.ownerDocument.body;
                        case "#document":
                            return e.body
                    }
                    var t = s(e),
                        n = t.overflow,
                        r = t.overflowX,
                        i = t.overflowY;
                    return /(auto|scroll|overlay)/.test(n + i + r) ? e : c(l(e))
                }

                function u(e) {
                    return e && e.referenceNode ? e.referenceNode : e
                }
                var d = r && !(!window.MSInputMethodContext || !document.documentMode),
                    f = r && /MSIE 10/.test(navigator.userAgent);

                function h(e) {
                    return 11 === e ? d : 10 === e ? f : d || f
                }

                function p(e) {
                    if (!e) return document.documentElement;
                    for (var t = h(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
                    var r = n && n.nodeName;
                    return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === s(n, "position") ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
                }

                function g(e) {
                    return null !== e.parentNode ? g(e.parentNode) : e
                }

                function m(e, t) {
                    if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
                    var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                        r = n ? e : t,
                        i = n ? t : e,
                        o = document.createRange();
                    o.setStart(r, 0), o.setEnd(i, 0);
                    var a, s, l = o.commonAncestorContainer;
                    if (e !== l && t !== l || r.contains(i)) return "BODY" === (s = (a = l).nodeName) || "HTML" !== s && p(a.firstElementChild) !== a ? p(l) : l;
                    var c = g(e);
                    return c.host ? m(c.host, t) : m(e, g(t).host)
                }

                function v(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                        n = "top" === t ? "scrollTop" : "scrollLeft",
                        r = e.nodeName;
                    if ("BODY" === r || "HTML" === r) {
                        var i = e.ownerDocument.documentElement,
                            o = e.ownerDocument.scrollingElement || i;
                        return o[n]
                    }
                    return e[n]
                }

                function y(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = v(t, "top"),
                        i = v(t, "left"),
                        o = n ? -1 : 1;
                    return e.top += r * o, e.bottom += r * o, e.left += i * o, e.right += i * o, e
                }

                function _(e, t) {
                    var n = "x" === t ? "Left" : "Top",
                        r = "Left" === n ? "Right" : "Bottom";
                    return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + r + "Width"])
                }

                function b(e, t, n, r) {
                    return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], h(10) ? parseInt(n["offset" + e]) + parseInt(r["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(r["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
                }

                function w(e) {
                    var t = e.body,
                        n = e.documentElement,
                        r = h(10) && getComputedStyle(n);
                    return {
                        height: b("Height", t, n, r),
                        width: b("Width", t, n, r)
                    }
                }
                var x = function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    },
                    E = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    T = function(e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    },
                    C = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                        }
                        return e
                    };

                function k(e) {
                    return C({}, e, {
                        right: e.left + e.width,
                        bottom: e.top + e.height
                    })
                }

                function S(e) {
                    var t = {};
                    try {
                        if (h(10)) {
                            t = e.getBoundingClientRect();
                            var n = v(e, "top"),
                                r = v(e, "left");
                            t.top += n, t.left += r, t.bottom += n, t.right += r
                        } else t = e.getBoundingClientRect()
                    } catch (e) {}
                    var i = {
                            left: t.left,
                            top: t.top,
                            width: t.right - t.left,
                            height: t.bottom - t.top
                        },
                        o = "HTML" === e.nodeName ? w(e.ownerDocument) : {},
                        a = o.width || e.clientWidth || i.width,
                        l = o.height || e.clientHeight || i.height,
                        c = e.offsetWidth - a,
                        u = e.offsetHeight - l;
                    if (c || u) {
                        var d = s(e);
                        c -= _(d, "x"), u -= _(d, "y"), i.width -= c, i.height -= u
                    }
                    return k(i)
                }

                function A(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = h(10),
                        i = "HTML" === t.nodeName,
                        o = S(e),
                        a = S(t),
                        l = c(e),
                        u = s(t),
                        d = parseFloat(u.borderTopWidth),
                        f = parseFloat(u.borderLeftWidth);
                    n && i && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
                    var p = k({
                        top: o.top - a.top - d,
                        left: o.left - a.left - f,
                        width: o.width,
                        height: o.height
                    });
                    if (p.marginTop = 0, p.marginLeft = 0, !r && i) {
                        var g = parseFloat(u.marginTop),
                            m = parseFloat(u.marginLeft);
                        p.top -= d - g, p.bottom -= d - g, p.left -= f - m, p.right -= f - m, p.marginTop = g, p.marginLeft = m
                    }
                    return (r && !n ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (p = y(p, t)), p
                }

                function N(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = e.ownerDocument.documentElement,
                        r = A(e, n),
                        i = Math.max(n.clientWidth, window.innerWidth || 0),
                        o = Math.max(n.clientHeight, window.innerHeight || 0),
                        a = t ? 0 : v(n),
                        s = t ? 0 : v(n, "left"),
                        l = {
                            top: a - r.top + r.marginTop,
                            left: s - r.left + r.marginLeft,
                            width: i,
                            height: o
                        };
                    return k(l)
                }

                function D(e) {
                    var t = e.nodeName;
                    if ("BODY" === t || "HTML" === t) return !1;
                    if ("fixed" === s(e, "position")) return !0;
                    var n = l(e);
                    return !!n && D(n)
                }

                function j(e) {
                    if (!e || !e.parentElement || h()) return document.documentElement;
                    for (var t = e.parentElement; t && "none" === s(t, "transform");) t = t.parentElement;
                    return t || document.documentElement
                }

                function O(e, t, n, r) {
                    var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                        o = {
                            top: 0,
                            left: 0
                        },
                        a = i ? j(e) : m(e, u(t));
                    if ("viewport" === r) o = N(a, i);
                    else {
                        var s = void 0;
                        "scrollParent" === r ? "BODY" === (s = c(l(t))).nodeName && (s = e.ownerDocument.documentElement) : s = "window" === r ? e.ownerDocument.documentElement : r;
                        var d = A(s, a, i);
                        if ("HTML" !== s.nodeName || D(a)) o = d;
                        else {
                            var f = w(e.ownerDocument),
                                h = f.height,
                                p = f.width;
                            o.top += d.top - d.marginTop, o.bottom = h + d.top, o.left += d.left - d.marginLeft, o.right = p + d.left
                        }
                    }
                    var g = "number" == typeof(n = n || 0);
                    return o.left += g ? n : n.left || 0, o.top += g ? n : n.top || 0, o.right -= g ? n : n.right || 0, o.bottom -= g ? n : n.bottom || 0, o
                }

                function L(e) {
                    return e.width * e.height
                }

                function I(e, t, n, r, i) {
                    var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                    if (-1 === e.indexOf("auto")) return e;
                    var a = O(n, r, o, i),
                        s = {
                            top: {
                                width: a.width,
                                height: t.top - a.top
                            },
                            right: {
                                width: a.right - t.right,
                                height: a.height
                            },
                            bottom: {
                                width: a.width,
                                height: a.bottom - t.bottom
                            },
                            left: {
                                width: t.left - a.left,
                                height: a.height
                            }
                        },
                        l = Object.keys(s).map((function(e) {
                            return C({
                                key: e
                            }, s[e], {
                                area: L(s[e])
                            })
                        })).sort((function(e, t) {
                            return t.area - e.area
                        })),
                        c = l.filter((function(e) {
                            var t = e.width,
                                r = e.height;
                            return t >= n.clientWidth && r >= n.clientHeight
                        })),
                        u = c.length > 0 ? c[0].key : l[0].key,
                        d = e.split("-")[1];
                    return u + (d ? "-" + d : "")
                }

                function P(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        i = r ? j(t) : m(t, u(n));
                    return A(n, i, r)
                }

                function $(e) {
                    var t = e.ownerDocument.defaultView.getComputedStyle(e),
                        n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
                        r = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
                    return {
                        width: e.offsetWidth + r,
                        height: e.offsetHeight + n
                    }
                }

                function R(e) {
                    var t = {
                        left: "right",
                        right: "left",
                        bottom: "top",
                        top: "bottom"
                    };
                    return e.replace(/left|right|bottom|top/g, (function(e) {
                        return t[e]
                    }))
                }

                function q(e, t, n) {
                    n = n.split("-")[0];
                    var r = $(e),
                        i = {
                            width: r.width,
                            height: r.height
                        },
                        o = -1 !== ["right", "left"].indexOf(n),
                        a = o ? "top" : "left",
                        s = o ? "left" : "top",
                        l = o ? "height" : "width",
                        c = o ? "width" : "height";
                    return i[a] = t[a] + t[l] / 2 - r[l] / 2, i[s] = n === s ? t[s] - r[c] : t[R(s)], i
                }

                function H(e, t) {
                    return Array.prototype.find ? e.find(t) : e.filter(t)[0]
                }

                function M(e, t, n) {
                    return (void 0 === n ? e : e.slice(0, function(e, t, n) {
                        if (Array.prototype.findIndex) return e.findIndex((function(e) {
                            return e.name === n
                        }));
                        var r = H(e, (function(e) {
                            return e.name === n
                        }));
                        return e.indexOf(r)
                    }(e, 0, n))).forEach((function(e) {
                        e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                        var n = e.function || e.fn;
                        e.enabled && a(n) && (t.offsets.popper = k(t.offsets.popper), t.offsets.reference = k(t.offsets.reference), t = n(t, e))
                    })), t
                }

                function F() {
                    if (!this.state.isDestroyed) {
                        var e = {
                            instance: this,
                            styles: {},
                            arrowStyles: {},
                            attributes: {},
                            flipped: !1,
                            offsets: {}
                        };
                        e.offsets.reference = P(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = I(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = q(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = M(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                    }
                }

                function B(e, t) {
                    return e.some((function(e) {
                        var n = e.name;
                        return e.enabled && n === t
                    }))
                }

                function W(e) {
                    for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length; r++) {
                        var i = t[r],
                            o = i ? "" + i + n : e;
                        if (void 0 !== document.body.style[o]) return o
                    }
                    return null
                }

                function U() {
                    return this.state.isDestroyed = !0, B(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[W("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                }

                function z(e) {
                    var t = e.ownerDocument;
                    return t ? t.defaultView : window
                }

                function V(e, t, n, r) {
                    var i = "BODY" === e.nodeName,
                        o = i ? e.ownerDocument.defaultView : e;
                    o.addEventListener(t, n, {
                        passive: !0
                    }), i || V(c(o.parentNode), t, n, r), r.push(o)
                }

                function G(e, t, n, r) {
                    n.updateBound = r, z(e).addEventListener("resize", n.updateBound, {
                        passive: !0
                    });
                    var i = c(e);
                    return V(i, "scroll", n.updateBound, n.scrollParents), n.scrollElement = i, n.eventsEnabled = !0, n
                }

                function Q() {
                    this.state.eventsEnabled || (this.state = G(this.reference, this.options, this.state, this.scheduleUpdate))
                }

                function Y() {
                    var e, t;
                    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, z(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach((function(e) {
                        e.removeEventListener("scroll", t.updateBound)
                    })), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
                }

                function X(e) {
                    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
                }

                function J(e, t) {
                    Object.keys(t).forEach((function(n) {
                        var r = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && X(t[n]) && (r = "px"), e.style[n] = t[n] + r
                    }))
                }
                var K = r && /Firefox/i.test(navigator.userAgent);

                function Z(e, t, n) {
                    var r = H(e, (function(e) {
                            return e.name === t
                        })),
                        i = !!r && e.some((function(e) {
                            return e.name === n && e.enabled && e.order < r.order
                        }));
                    if (!i) {
                        var o = "`" + t + "`",
                            a = "`" + n + "`";
                        console.warn(a + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
                    }
                    return i
                }
                var ee = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                    te = ee.slice(3);

                function ne(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = te.indexOf(e),
                        r = te.slice(n + 1).concat(te.slice(0, n));
                    return t ? r.reverse() : r
                }
                var re = {
                        placement: "bottom",
                        positionFixed: !1,
                        eventsEnabled: !0,
                        removeOnDestroy: !1,
                        onCreate: function() {},
                        onUpdate: function() {},
                        modifiers: {
                            shift: {
                                order: 100,
                                enabled: !0,
                                fn: function(e) {
                                    var t = e.placement,
                                        n = t.split("-")[0],
                                        r = t.split("-")[1];
                                    if (r) {
                                        var i = e.offsets,
                                            o = i.reference,
                                            a = i.popper,
                                            s = -1 !== ["bottom", "top"].indexOf(n),
                                            l = s ? "left" : "top",
                                            c = s ? "width" : "height",
                                            u = {
                                                start: T({}, l, o[l]),
                                                end: T({}, l, o[l] + o[c] - a[c])
                                            };
                                        e.offsets.popper = C({}, a, u[r])
                                    }
                                    return e
                                }
                            },
                            offset: {
                                order: 200,
                                enabled: !0,
                                fn: function(e, t) {
                                    var n, r = t.offset,
                                        i = e.placement,
                                        o = e.offsets,
                                        a = o.popper,
                                        s = o.reference,
                                        l = i.split("-")[0];
                                    return n = X(+r) ? [+r, 0] : function(e, t, n, r) {
                                        var i = [0, 0],
                                            o = -1 !== ["right", "left"].indexOf(r),
                                            a = e.split(/(\+|\-)/).map((function(e) {
                                                return e.trim()
                                            })),
                                            s = a.indexOf(H(a, (function(e) {
                                                return -1 !== e.search(/,|\s/)
                                            })));
                                        a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                                        var l = /\s*,\s*|\s+/,
                                            c = -1 !== s ? [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))] : [a];
                                        return (c = c.map((function(e, r) {
                                            var i = (1 === r ? !o : o) ? "height" : "width",
                                                a = !1;
                                            return e.reduce((function(e, t) {
                                                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, a = !0, e) : a ? (e[e.length - 1] += t, a = !1, e) : e.concat(t)
                                            }), []).map((function(e) {
                                                return function(e, t, n, r) {
                                                    var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                                        o = +i[1],
                                                        a = i[2];
                                                    if (!o) return e;
                                                    if (0 === a.indexOf("%")) {
                                                        var s = void 0;
                                                        switch (a) {
                                                            case "%p":
                                                                s = n;
                                                                break;
                                                            case "%":
                                                            case "%r":
                                                            default:
                                                                s = r
                                                        }
                                                        return k(s)[t] / 100 * o
                                                    }
                                                    return "vh" === a || "vw" === a ? ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o : o
                                                }(e, i, t, n)
                                            }))
                                        }))).forEach((function(e, t) {
                                            e.forEach((function(n, r) {
                                                X(n) && (i[t] += n * ("-" === e[r - 1] ? -1 : 1))
                                            }))
                                        })), i
                                    }(r, a, s, l), "left" === l ? (a.top += n[0], a.left -= n[1]) : "right" === l ? (a.top += n[0], a.left += n[1]) : "top" === l ? (a.left += n[0], a.top -= n[1]) : "bottom" === l && (a.left += n[0], a.top += n[1]), e.popper = a, e
                                },
                                offset: 0
                            },
                            preventOverflow: {
                                order: 300,
                                enabled: !0,
                                fn: function(e, t) {
                                    var n = t.boundariesElement || p(e.instance.popper);
                                    e.instance.reference === n && (n = p(n));
                                    var r = W("transform"),
                                        i = e.instance.popper.style,
                                        o = i.top,
                                        a = i.left,
                                        s = i[r];
                                    i.top = "", i.left = "", i[r] = "";
                                    var l = O(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                                    i.top = o, i.left = a, i[r] = s, t.boundaries = l;
                                    var c = t.priority,
                                        u = e.offsets.popper,
                                        d = {
                                            primary: function(e) {
                                                var n = u[e];
                                                return u[e] < l[e] && !t.escapeWithReference && (n = Math.max(u[e], l[e])), T({}, e, n)
                                            },
                                            secondary: function(e) {
                                                var n = "right" === e ? "left" : "top",
                                                    r = u[n];
                                                return u[e] > l[e] && !t.escapeWithReference && (r = Math.min(u[n], l[e] - ("right" === e ? u.width : u.height))), T({}, n, r)
                                            }
                                        };
                                    return c.forEach((function(e) {
                                        var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                                        u = C({}, u, d[t](e))
                                    })), e.offsets.popper = u, e
                                },
                                priority: ["left", "right", "top", "bottom"],
                                padding: 5,
                                boundariesElement: "scrollParent"
                            },
                            keepTogether: {
                                order: 400,
                                enabled: !0,
                                fn: function(e) {
                                    var t = e.offsets,
                                        n = t.popper,
                                        r = t.reference,
                                        i = e.placement.split("-")[0],
                                        o = Math.floor,
                                        a = -1 !== ["top", "bottom"].indexOf(i),
                                        s = a ? "right" : "bottom",
                                        l = a ? "left" : "top",
                                        c = a ? "width" : "height";
                                    return n[s] < o(r[l]) && (e.offsets.popper[l] = o(r[l]) - n[c]), n[l] > o(r[s]) && (e.offsets.popper[l] = o(r[s])), e
                                }
                            },
                            arrow: {
                                order: 500,
                                enabled: !0,
                                fn: function(e, t) {
                                    var n;
                                    if (!Z(e.instance.modifiers, "arrow", "keepTogether")) return e;
                                    var r = t.element;
                                    if ("string" == typeof r) {
                                        if (!(r = e.instance.popper.querySelector(r))) return e
                                    } else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                                    var i = e.placement.split("-")[0],
                                        o = e.offsets,
                                        a = o.popper,
                                        l = o.reference,
                                        c = -1 !== ["left", "right"].indexOf(i),
                                        u = c ? "height" : "width",
                                        d = c ? "Top" : "Left",
                                        f = d.toLowerCase(),
                                        h = c ? "left" : "top",
                                        p = c ? "bottom" : "right",
                                        g = $(r)[u];
                                    l[p] - g < a[f] && (e.offsets.popper[f] -= a[f] - (l[p] - g)), l[f] + g > a[p] && (e.offsets.popper[f] += l[f] + g - a[p]), e.offsets.popper = k(e.offsets.popper);
                                    var m = l[f] + l[u] / 2 - g / 2,
                                        v = s(e.instance.popper),
                                        y = parseFloat(v["margin" + d]),
                                        _ = parseFloat(v["border" + d + "Width"]),
                                        b = m - e.offsets.popper[f] - y - _;
                                    return b = Math.max(Math.min(a[u] - g, b), 0), e.arrowElement = r, e.offsets.arrow = (T(n = {}, f, Math.round(b)), T(n, h, ""), n), e
                                },
                                element: "[x-arrow]"
                            },
                            flip: {
                                order: 600,
                                enabled: !0,
                                fn: function(e, t) {
                                    if (B(e.instance.modifiers, "inner")) return e;
                                    if (e.flipped && e.placement === e.originalPlacement) return e;
                                    var n = O(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                                        r = e.placement.split("-")[0],
                                        i = R(r),
                                        o = e.placement.split("-")[1] || "",
                                        a = [];
                                    switch (t.behavior) {
                                        case "flip":
                                            a = [r, i];
                                            break;
                                        case "clockwise":
                                            a = ne(r);
                                            break;
                                        case "counterclockwise":
                                            a = ne(r, !0);
                                            break;
                                        default:
                                            a = t.behavior
                                    }
                                    return a.forEach((function(s, l) {
                                        if (r !== s || a.length === l + 1) return e;
                                        r = e.placement.split("-")[0], i = R(r);
                                        var c = e.offsets.popper,
                                            u = e.offsets.reference,
                                            d = Math.floor,
                                            f = "left" === r && d(c.right) > d(u.left) || "right" === r && d(c.left) < d(u.right) || "top" === r && d(c.bottom) > d(u.top) || "bottom" === r && d(c.top) < d(u.bottom),
                                            h = d(c.left) < d(n.left),
                                            p = d(c.right) > d(n.right),
                                            g = d(c.top) < d(n.top),
                                            m = d(c.bottom) > d(n.bottom),
                                            v = "left" === r && h || "right" === r && p || "top" === r && g || "bottom" === r && m,
                                            y = -1 !== ["top", "bottom"].indexOf(r),
                                            _ = !!t.flipVariations && (y && "start" === o && h || y && "end" === o && p || !y && "start" === o && g || !y && "end" === o && m),
                                            b = !!t.flipVariationsByContent && (y && "start" === o && p || y && "end" === o && h || !y && "start" === o && m || !y && "end" === o && g),
                                            w = _ || b;
                                        (f || v || w) && (e.flipped = !0, (f || v) && (r = a[l + 1]), w && (o = function(e) {
                                            return "end" === e ? "start" : "start" === e ? "end" : e
                                        }(o)), e.placement = r + (o ? "-" + o : ""), e.offsets.popper = C({}, e.offsets.popper, q(e.instance.popper, e.offsets.reference, e.placement)), e = M(e.instance.modifiers, e, "flip"))
                                    })), e
                                },
                                behavior: "flip",
                                padding: 5,
                                boundariesElement: "viewport",
                                flipVariations: !1,
                                flipVariationsByContent: !1
                            },
                            inner: {
                                order: 700,
                                enabled: !1,
                                fn: function(e) {
                                    var t = e.placement,
                                        n = t.split("-")[0],
                                        r = e.offsets,
                                        i = r.popper,
                                        o = r.reference,
                                        a = -1 !== ["left", "right"].indexOf(n),
                                        s = -1 === ["top", "left"].indexOf(n);
                                    return i[a ? "left" : "top"] = o[n] - (s ? i[a ? "width" : "height"] : 0), e.placement = R(t), e.offsets.popper = k(i), e
                                }
                            },
                            hide: {
                                order: 800,
                                enabled: !0,
                                fn: function(e) {
                                    if (!Z(e.instance.modifiers, "hide", "preventOverflow")) return e;
                                    var t = e.offsets.reference,
                                        n = H(e.instance.modifiers, (function(e) {
                                            return "preventOverflow" === e.name
                                        })).boundaries;
                                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                                        if (!0 === e.hide) return e;
                                        e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                                    } else {
                                        if (!1 === e.hide) return e;
                                        e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                                    }
                                    return e
                                }
                            },
                            computeStyle: {
                                order: 850,
                                enabled: !0,
                                fn: function(e, t) {
                                    var n = t.x,
                                        r = t.y,
                                        i = e.offsets.popper,
                                        o = H(e.instance.modifiers, (function(e) {
                                            return "applyStyle" === e.name
                                        })).gpuAcceleration;
                                    void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                                    var a, s, l = void 0 !== o ? o : t.gpuAcceleration,
                                        c = p(e.instance.popper),
                                        u = S(c),
                                        d = {
                                            position: i.position
                                        },
                                        f = function(e, t) {
                                            var n = e.offsets,
                                                r = n.popper,
                                                i = n.reference,
                                                o = Math.round,
                                                a = Math.floor,
                                                s = function(e) {
                                                    return e
                                                },
                                                l = o(i.width),
                                                c = o(r.width),
                                                u = -1 !== ["left", "right"].indexOf(e.placement),
                                                d = -1 !== e.placement.indexOf("-"),
                                                f = t ? u || d || l % 2 == c % 2 ? o : a : s,
                                                h = t ? o : s;
                                            return {
                                                left: f(l % 2 == 1 && c % 2 == 1 && !d && t ? r.left - 1 : r.left),
                                                top: h(r.top),
                                                bottom: h(r.bottom),
                                                right: f(r.right)
                                            }
                                        }(e, window.devicePixelRatio < 2 || !K),
                                        h = "bottom" === n ? "top" : "bottom",
                                        g = "right" === r ? "left" : "right",
                                        m = W("transform");
                                    if (s = "bottom" === h ? "HTML" === c.nodeName ? -c.clientHeight + f.bottom : -u.height + f.bottom : f.top, a = "right" === g ? "HTML" === c.nodeName ? -c.clientWidth + f.right : -u.width + f.right : f.left, l && m) d[m] = "translate3d(" + a + "px, " + s + "px, 0)", d[h] = 0, d[g] = 0, d.willChange = "transform";
                                    else {
                                        var v = "bottom" === h ? -1 : 1,
                                            y = "right" === g ? -1 : 1;
                                        d[h] = s * v, d[g] = a * y, d.willChange = h + ", " + g
                                    }
                                    var _ = {
                                        "x-placement": e.placement
                                    };
                                    return e.attributes = C({}, _, e.attributes), e.styles = C({}, d, e.styles), e.arrowStyles = C({}, e.offsets.arrow, e.arrowStyles), e
                                },
                                gpuAcceleration: !0,
                                x: "bottom",
                                y: "right"
                            },
                            applyStyle: {
                                order: 900,
                                enabled: !0,
                                fn: function(e) {
                                    var t, n;
                                    return J(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach((function(e) {
                                        !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                                    })), e.arrowElement && Object.keys(e.arrowStyles).length && J(e.arrowElement, e.arrowStyles), e
                                },
                                onLoad: function(e, t, n, r, i) {
                                    var o = P(i, t, e, n.positionFixed),
                                        a = I(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                                    return t.setAttribute("x-placement", a), J(t, {
                                        position: n.positionFixed ? "fixed" : "absolute"
                                    }), n
                                },
                                gpuAcceleration: void 0
                            }
                        }
                    },
                    ie = function() {
                        function e(t, n) {
                            var r = this,
                                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            x(this, e), this.scheduleUpdate = function() {
                                return requestAnimationFrame(r.update)
                            }, this.update = o(this.update.bind(this)), this.options = C({}, e.Defaults, i), this.state = {
                                isDestroyed: !1,
                                isCreated: !1,
                                scrollParents: []
                            }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(C({}, e.Defaults.modifiers, i.modifiers)).forEach((function(t) {
                                r.options.modifiers[t] = C({}, e.Defaults.modifiers[t] || {}, i.modifiers ? i.modifiers[t] : {})
                            })), this.modifiers = Object.keys(this.options.modifiers).map((function(e) {
                                return C({
                                    name: e
                                }, r.options.modifiers[e])
                            })).sort((function(e, t) {
                                return e.order - t.order
                            })), this.modifiers.forEach((function(e) {
                                e.enabled && a(e.onLoad) && e.onLoad(r.reference, r.popper, r.options, e, r.state)
                            })), this.update();
                            var s = this.options.eventsEnabled;
                            s && this.enableEventListeners(), this.state.eventsEnabled = s
                        }
                        return E(e, [{
                            key: "update",
                            value: function() {
                                return F.call(this)
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                return U.call(this)
                            }
                        }, {
                            key: "enableEventListeners",
                            value: function() {
                                return Q.call(this)
                            }
                        }, {
                            key: "disableEventListeners",
                            value: function() {
                                return Y.call(this)
                            }
                        }]), e
                    }();
                ie.Utils = ("undefined" != typeof window ? window : n.g).PopperUtils, ie.placements = ee, ie.Defaults = re;
                const oe = ie
            },
            217: (e, t) => {
                var n = !1;
                t.loadRecaptchaV3 = function() {
                    return new Promise((function(e) {
                        var t, r, i;
                        n && e(), n = !0, t = function() {
                            grecaptcha.ready(e)
                        }, r = document.body, (i = document.createElement("script")).src = "https://recaptcha.net/recaptcha/api.js?render=6LfG55kUAAAAANVoyH7VqYns6j_ZpxB35phXF0bM", i.onload = t, i.onreadystatechange = t, r.appendChild(i)
                    }))
                }, t.loadEmailServiceImages = function() {
                    $("#email_service_option_gmail > img").attr("src", "./static/images/gmail.png"), $("#email_service_option_custom > img").attr("src", "./static/images/domain.png"), $("#email_service_option_accgen > img").attr("src", "./static/images/sag-cat.png")
                }
            },
            727: (e, t, n) => {
                const r = n(314),
                    i = n(959),
                    o = n(719),
                    a = n(614).R,
                    s = n(800).Z;
                async function l() {
                    var e = await i.waitForSteamEmail(!0);
                    if (!e) return !1;
                    var t = "https://store.steampowered.com/account/steamguarddisableverification?stoken=" + e.split("steamguarddisableverification?stoken=")[1].split("\n")[0];
                    try {
                        var n = await fetch(t, {
                            mode: "cors",
                            credentials: "include",
                            headers: {
                                "Accept-Language": "en-US"
                            }
                        });
                        return n.ok && !(await n.text()).includes("Unable to disable Steam Guard!")
                    } catch (e) {
                        return !1
                    }
                }
                async function c(e, t) {
                    var n = o.getBaseResponse();
                    if (e) n.networkError();
                    else if (t.ok) n.success = !0, n.response = await t.json();
                    else {
                        n.httpError(t.status);
                        try {
                            var r = await t.json();
                            r.error ? n.error.message = r.error : console.error(r)
                        } catch (e) {
                            console.error(n)
                        }
                    }
                    return n
                }

                function u(e, n) {
                    if (e.success) n && n.verify();
                    else if (e.error.steamerror) {
                        var r = t.parseSteamError(e.error.steamerror);
                        if (r.cancel || !n && (r.proxyban || r.proxylimit)) return "Generation stopped because of a previous error.";
                        n && (r.proxyban && n.ban(), r.proxylimit && n.ratelimit())
                    }
                    return !1
                }
                t.parseSteamError = function(e) {
                    switch (e) {
                        case 13:
                            return {
                                message: "The email chosen by our system was invalid. Please Try again."
                            };
                        case 14:
                            return {
                                message: "The account name our system chose was not available. Please Try again."
                            };
                        case 84:
                            return {
                                message: "Steam is limitting account creations from your IP or this email address (if using Gmail). Try again later.", proxylimit: !0
                            };
                        case 2:
                        case 101:
                            return {
                                message: 'ReCAPTCHA verification failed! <a target="_blank" href="/gitlab/wikis/reCAPTCHA-Enterprise#manual-generator">Click here to find out why</a>'
                            };
                        case 105:
                            return {
                                message: "Your IP is banned by steam. Try disabling your VPN.", proxymessage: "Proxy IP banned by steam. Removed from proxy list.", proxyban: !0
                            };
                        case 17:
                            return {
                                message: "Steam has banned the domain. Please use Gmail or Custom domain", reportemail: !0, cancel: !0
                            };
                        default:
                            return {
                                message: `Error while creating the Steam account! Steam error code ${e}!`
                            }
                    }
                };
                var d = new a(o.steam_getGid, o.steam_requestVerify, o.steam_verifyEmail, o.steam_createAccount, (async function() {
                    var [e, t] = await s(fetch("/userapi/generator/addtask", {
                        method: "POST",
                        body: JSON.stringify({
                            step: "getdata"
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })), n = await c(e, t);
                    return n.success && (n.response.email = function(e) {
                        switch (r.get("email_provider")) {
                            case "accgen":
                                return e;
                            case "custom_domain":
                                var t = r.get("email_domain");
                                if (t) {
                                    if (t.includes("@")) {
                                        var n = t.toLowerCase().split("@");
                                        return n[0].replace(/\./g, "") + "@" + n[1]
                                    }
                                    return e.split("@")[0] + "@" + t.toLowerCase()
                                }
                                return e;
                            case "gmailv2":
                            case "gmail":
                                return r.get("email_gmail");
                            default:
                                return e
                        }
                    }(n.response.email)), n
                }), (async function(e) {
                    if ("gmailv2" != r.get("email_provider")) {
                        var [t, n] = await s(fetch("/userapi/generator/addtask", {
                            method: "POST",
                            body: JSON.stringify({
                                step: "getverify",
                                email: e
                            }),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }));
                        return c(t, n)
                    }
                    e = await async function() {
                        var e = await i.waitForSteamEmail(!1);
                        return e ? {
                            creationid: e.split("newaccountverification?stoken=")[1].split("\n")[0].split("&creationid=")[1],
                            verifylink: "https://store.steampowered.com/account/newaccountverification?stoken=" + e.split("newaccountverification?stoken=")[1].split("\n")[0]
                        } : {
                            error: "No email received. Try running the gmail setup again."
                        }
                    }();
                    var a = o.getBaseResponse();
                    return e.error ? (a.error.message = e.error, a.error.type = "email") : (a.success = !0, a.response = e), a
                }), (async function(e, t, n, i, a) {
                    var [u, d] = await s(fetch("/userapi/generator/addtask", {
                        method: "POST",
                        body: JSON.stringify({
                            step: "additional",
                            username: e,
                            password: t,
                            email: n,
                            doSteamGuard: i,
                            noCheckInbox: "gmailv2" == r.get("email_provider"),
                            activateApps: a ? a.map((e => parseInt(e))) : null,
                            patreon: "undefined" != typeof additionalPatreonInfo ? additionalPatreonInfo() : void 0
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }));
                    if (i && "gmailv2" == r.get("email_provider") && !await l() && !await l()) {
                        var f = o.getBaseResponse();
                        return f.error.message = "Failed to disable steam guard using GMail!", f
                    }
                    return c(u, d)
                }));
                t.generator = d, t.generateAccounts = async function(e, t, o, a, s, l, c) {
                    "gmailv2" == r.get("email_provider") && i.updateTimeStamp();
                    var f = null;
                    return c && (f = (await Promise.all([n.e(606), n.e(768)]).then(n.t.bind(n, 914, 19))).getProxy), await d.generateAccounts(fetch, u, e, t, o, a, s, l, {
                        acc_steamguard: r.get("acc_steamguard"),
                        acc_apps: r.get("acc_apps")
                    }, f)
                }
            },
            959: (e, t, n) => {
                async function r() {
                    try {
                        var e = await fetch("https://mail.google.com/mail/feed/atom", {
                            credentials: "include",
                            headers: {
                                Authorization: "BasicCustom"
                            }
                        });
                        return 200 != e.status ? {
                            error: e.status
                        } : await e.text()
                    } catch (e) {
                        return
                    }
                }
                async function i(e) {
                    return await httpRequest({
                        url: `https://mail.google.com/mail/u/0?view=att&th=${e}&attid=0&disp=comp&safe=1&zw`,
                        xhrFields: {
                            withCredentials: !0
                        }
                    }, null, null).catch((function() {}))
                }
                t.getGmailAddress = async function() {
                    var e = await r();
                    return e ? e.error ? e : (e = $($.parseXML(e))).find("feed>title")[0].innerHTML.split("for ")[1] : null
                };
                var o = Date.now();

                function a(e, t) {
                    if ("noreply@steampowered.com" == e.find("author>email")[0].innerHTML) {
                        var n = e.children("title")[0].innerHTML;
                        return t ? "Disable Steam Guard Confirmation" == n : "New Steam Account Email Verification" == n
                    }
                }
                async function s(e) {
                    for (var t = await async function() {
                            var e = await async function() {
                                var e = await r();
                                return !e || e.error ? null : $($.parseXML(e)).find("feed>entry")
                            }(), t = [];
                            if (!e) return [];
                            for (var n = e.length; n--;) {
                                var i = $(e[n]),
                                    a = new Date(i.children("modified")[0].innerHTML);
                                (!o || a > o) && (o = a, t.push(i))
                            }
                            return t
                        }(), n = t.length; n--;) {
                        var i = t[n];
                        if (a(i, e)) return new URLSearchParams(new URL(i.children("link").attr("href")).search).get("message_id")
                    }
                }
                t.updateTimeStamp = function() {
                    o = Date.now()
                }, t.waitForSteamEmail = async function(e) {
                    for (var t = 0; t <= 2; t++) {
                        await sleep(5e3);
                        var n = await s(e);
                        if (n) return i(n)
                    }
                }, n.g.latestSteamEmail = s, n.g.getEmailByID = i
            },
            614: (e, t, n) => {
                const r = n(187);

                function i(e) {
                    return new Promise((t => setTimeout(t, e)))
                }
                t.R = class {
                    constructor(e, t, n, i, o, a, s) {
                        this.steam_getGid = e, this.steam_requestVerify = t, this.steam_verifyEmail = n, this.steam_createAccount = i, this.gen_getData = o, this.gen_getVerify = a, this.gen_doAdditional = s, this.events = new r, this.activegeneration = 0
                    }
                    async generateAccount(e, t, n, r, i, o) {
                        function a(e, r) {
                            t(e, n, r)
                        }
                        var s = {
                            success: !1,
                            done: !0,
                            account: null,
                            error: {
                                steamerror: null,
                                message: null,
                                emailprovider: !1
                            },
                            id: n,
                            proxy: o
                        };
                        if ("function" == typeof e.getRecapSolution) {
                            "string" == typeof e.message ? a(e.message) : a("Getting captcha solution... This may take some time.");
                            var l = await e.getRecapSolution();
                            if (l.error) return s.error.message = "Error while getting captcha solution! " + l.error, s;
                            e = {
                                token: l.token,
                                gid: l.gid
                            }
                        }
                        if (void 0 === e.gid) {
                            a("Getting GID...");
                            var c = await this.steam_getGid(i);
                            if (!c.success) {
                                switch (c.error.type) {
                                    case "network":
                                        s.error.message = "Connection to steam failed.";
                                        break;
                                    case "http":
                                        s.error.message = "Error returned by steam on GID refresh."
                                }
                                return s
                            }
                            e.gid = c.response.gid
                        }
                        a("Getting registration data...");
                        var u = await this.gen_getData();
                        if (!u.success) return s.error.message = u.error.message || "Error returned by SAG backend! Check console for details!", s;
                        u = u.response, s.account = u;
                        var d, f = u.email;
                        if (a("Waiting for confirmation from steam..."), !(m = await this.steam_requestVerify(i, f, e.gid, e.token)).success) {
                            switch (m.error.type) {
                                case "network":
                                    s.error.message = "Connection to steam failed.";
                                    break;
                                case "http":
                                    s.error.message = "Error returned by steam on verify request.";
                                    break;
                                case "steam":
                                    s.error.steamerror = m.error.steamcode
                            }
                            return s
                        }
                        if (a("Fetching email..."), !(m = await this.gen_getVerify(f)).success) return s.error.message = m.error.message || "Error returned by SAG backend! Check console for details!", "email" == m.error.type && (s.error.emailprovider = !0), s;
                        d = m.response, a("Verifying email...");
                        var h = await this.steam_verifyEmail(i, d.verifylink);
                        if (!h.success) return s.error.message = "Error while creating the Steam account! Check console for details!", console.log(h), s;
                        if (a("Creating Account..."), !(m = await this.steam_createAccount(i, u.username, u.password, d.creationid)).success) {
                            switch (m.error.type) {
                                case "network":
                                    s.error.message = "Connection to steam failed.";
                                    break;
                                case "http":
                                    s.error.message = "Error returned by steam on account create request.";
                                    break;
                                case "steam":
                                    s.error.message = "Creation of account failed. Check console for details!", console.log(m.response)
                            }
                            return s
                        }
                        var p = r.acc_steamguard,
                            g = r.acc_apps.match(/\d+/g);
                        if ((p || g.length) && this.gen_doAdditional) {
                            var m;
                            if (s.done = !1, s.account = {
                                    login: u.username,
                                    password: u.password,
                                    email: f
                                }, p && g && g.length > 0 ? a("Disabling steam guard and activating " + g.length + " app" + (1 === g.length ? "" : "s"), s) : p && (!g || g.length <= 0) ? a("Disabling steam guard", s) : !p && g && g.length > 0 ? a("Activating " + g.length + " app" + (1 === g.length ? "" : "s"), s) : a("If you see this, it's a bug!", s), s.done = !0, !(m = await this.gen_doAdditional(u.username, u.password, f, p, g)).success) return s.error.message = m.error.message || "Error returned by SAG backend! Check console for details!", s;
                            s.account = m.response.account, s.activation = m.response.activation
                        } else u.login = u.username, delete u.username, s.account = u;
                        return s.account && (a("Success!"), s.success = !0), s
                    }
                    async generateAccounts(e, t, n, r, o, a, s, l, c, u) {
                        o || (o = 1);
                        var d = [],
                            f = 0;
                        l && l(`Mass generation in progress... 0/${n}`);
                        var h = !1;
                        this.activegeneration = n, this.events.once("stopgeneration", (function() {
                            h = "Account generation stopped.", l("Stopping account generation...")
                        }));
                        for (var p = 0; p < n; p++) {
                            for (; f >= o && !h;) await i(500);
                            var g = null;
                            if (u && !h && (a("Waiting for valid proxy...", p), (g = await u()) || (h = "No available proxies found.")), h) {
                                var m = {
                                    success: !1,
                                    error: {
                                        message: h
                                    }
                                };
                                d[p] = m, s && s(m, p)
                            } else f++, a("Starting...", p), this.generateAccount(r, a, p, c, g ? g.fetch : e, !!g).then((function(e) {
                                s && s(e, e.id), d[e.id] = e, l && l(`Mass generation in progress... ${d.filter(String).length}/${n}`);
                                var r = t(e, g ? g.proxy : null);
                                r && !h && (h = r, l && l("Stopping account generation...")), f--
                            }), (function(e) {
                                d.push({
                                    success: !1,
                                    error: {
                                        message: "Unknown error! Please send the error found in your browser console to the developers!"
                                    }
                                }), console.error(e), f--
                            }))
                        }
                        for (; f > 0;) await i(500);
                        return this.activegeneration = !1, this.events.removeAllListeners("stopgeneration"), d
                    }
                    async autogen(e, t, n, r, o, a, s, l, c) {
                        r || (r = 1);
                        var u = 0;
                        s && s("Automatic generation in progress...");
                        var d = !1;
                        this.activegeneration = !0;
                        for (var f = -1; !d;) {
                            for (f++; u >= r;) await i(500);
                            var h = null;
                            c && !d && (o("Waiting for valid proxy...", f), (h = await c()) || (d = "No available proxies found.")), u++, o("Starting...", f), this.generateAccount(n, o, f, l, h ? h.fetch : e, !!h).then((function(e) {
                                a && a(e, e.id);
                                var n = t(e, h ? h.proxy : null);
                                n && !d && (d = n, s && s("Stopping account generation...")), u--
                            }), (function(e) {
                                console.error(e), u--
                            })), await i(1e3)
                        }
                        for (; u > 0;) await i(500);
                        s("Stopped account generation. Reason: " + d), this.activegeneration = !1
                    }
                }
            },
            877: (e, t) => {
                function n(e) {
                    switch (e = e.split(" ")[0]) {
                        case "ERROR_WRONG_USER_KEY":
                        case "ERROR_KEY_DOES_NOT_EXIST":
                            return "Your captcha solving service API key is invalid. Please verify the API key is correct.";
                        case "ERROR_ZERO_BALANCE":
                            return "Zero balance at captcha solving service. Please add funds.";
                        case "ERROR_CAPTCHA_UNSOLVABLE":
                        case "ERROR_RECAPTCHA_TIMEOUT":
                            return "Your captcha solving service was unable to solve the captcha.";
                        default:
                            return "Captcha solving service sent: " + e
                    }
                }
                async function r(e, t, r) {
                    try {
                        var i = await r(`${e}/res.php?key=${t}&action=getbalance&header_acao=1`)
                    } catch (e) {
                        return {
                            success: !1,
                            error: "Failed to connect to captcha solving service."
                        }
                    }
                    return i.ok ? (i = await i.text(), isNaN(i) ? {
                        success: !1,
                        error: n(i)
                    } : "0" == i && {
                        success: !1,
                        error: n("ERROR_ZERO_BALANCE")
                    }) : {
                        success: !1,
                        error: "Error getting captcha solving service balance."
                    }
                }
                t.T = function(e, t, i) {
                    return {
                        getRecapSolution: async function() {
                            if (!t || "" == t) return {
                                success: !1,
                                error: "Captcha key empty!"
                            };
                            if (!e || "" == e) return {
                                success: !1,
                                error: "Host empty!"
                            };
                            var o;
                            switch (new URL(e).hostname) {
                                case "2captcha.com":
                                case "rucaptcha.com":
                                    o = await async function(e, t, i) {
                                        var o = await r(t, e, i);
                                        if (o) return o;
                                        try {
                                            var a = await i(`${t}/in.php?key=${e}&method=userrecaptcha&googlekey=6LdIFr0ZAAAAAO3vz0O0OQrtAefzdJcWQM2TMYQH&pageurl=https://store.steampowered.com/join/&header_acao=1&soft_id=2370&json=1&enterprise=1`)
                                        } catch (e) {
                                            return {
                                                success: !1,
                                                error: "Failed to connect to captcha solving service."
                                            }
                                        }
                                        if (!a.ok) return {
                                            success: !1,
                                            error: "Error sending captcha solving request."
                                        };
                                        try {
                                            a = await a.clone().json()
                                        } catch (e) {
                                            return {
                                                success: !1,
                                                error: n(a = await a.text())
                                            }
                                        }
                                        if (!a.request) return {
                                            success: !1,
                                            error: "Captcha solving service sent invalid json!"
                                        };
                                        for (var s = 0; s < 30; s++) {
                                            await sleep(5e3);
                                            try {
                                                var l = await i(`${t}/res.php?key=${e}&action=get&id=${a.request}&json=1&header_acao=1`)
                                            } catch (e) {
                                                return {
                                                    success: !1,
                                                    error: "Failed to connect to captcha solving service."
                                                }
                                            }
                                            try {
                                                l = await l.clone().json()
                                            } catch (e) {
                                                return l = await l.text(), {
                                                    success: !1,
                                                    error: n(a)
                                                }
                                            }
                                            if (!l.request) return {
                                                success: !1,
                                                error: "Captcha solving service sent invalid json!"
                                            };
                                            if (0 != l.status) break
                                        }
                                        return 1 == l.status ? {
                                            success: !0,
                                            solution: l.request
                                        } : {
                                            success: !1,
                                            error: "Your captcha solving service failed to solve the captcha!"
                                        }
                                    }(t, "https://2captcha.com", i);
                                    break;
                                default:
                                    o = await async function(e, t, i) {
                                        var o = await r(t, e, i);
                                        if (o) return o;
                                        try {
                                            var a = await i(`${t}/in.php?key=${e}&method=userrecaptcha&googlekey=6LdIFr0ZAAAAAO3vz0O0OQrtAefzdJcWQM2TMYQH&pageurl=https://store.steampowered.com/join/&header_acao=1&enterprise=1`)
                                        } catch (e) {
                                            return {
                                                success: !1,
                                                error: "Failed to connect to captcha solving service"
                                            }
                                        }
                                        if (!a.ok) return {
                                            success: !1,
                                            error: "Error sending captcha solving request"
                                        };
                                        if (!(a = await a.text()).startsWith("OK|")) return {
                                            success: !1,
                                            error: n(a)
                                        };
                                        a = {
                                            status: a.split("|")[0],
                                            request: a.split("|")[1]
                                        };
                                        for (var s = 0; s < 30; s++) {
                                            await sleep(5e3);
                                            try {
                                                var l = await i(`${t}/res.php?key=${e}&action=get&id=${a.request}&header_acao=1`)
                                            } catch (e) {
                                                return {
                                                    success: !1,
                                                    error: "Failed to connect to captcha solving service"
                                                }
                                            }
                                            if ("CAPCHA_NOT_READY" != (l = await l.text())) return l.startsWith("OK|") && (l = l.substring(3)), l.startsWith("03") ? {
                                                success: !0,
                                                solution: l
                                            } : {
                                                success: !1,
                                                error: n(l)
                                            }
                                        }
                                        return {
                                            success: !1,
                                            error: "Your captcha solving service failed to solve the captcha!"
                                        }
                                    }(t, e, i)
                            }
                            return o.success ? {
                                success: o.success,
                                token: o.solution
                            } : {
                                success: o.success,
                                error: o.error
                            }
                        },
                        isValidKey: async () => await r(e, t, i)
                    }
                }
            },
            719: (e, t, n) => {
                const r = n(800).Z;

                function i(e) {
                    return new Promise((t => setTimeout(t, e)))
                }

                function o(e, t, n) {
                    return new Promise((async function(o, a) {
                        for (var s, l, c = 0; c < 3; c++) {
                            if ([l, s] = await r(e(t, n)), !l) return o(s);
                            if (console.log(l), c >= 2) return a(l);
                            await i(1e3)
                        }
                    }))
                }
                t.repeated_fetch = o, t.getBaseResponse = function() {
                    return {
                        success: null,
                        response: null,
                        error: {
                            type: null,
                            steamcode: null,
                            httpcode: null,
                            message: null
                        },
                        steamError: function(e) {
                            this.success = !1, this.error.type = "steam", this.error.steamcode = e
                        },
                        httpError: function(e) {
                            this.success = !1, this.error.type = "http", this.error.httpcode = e
                        },
                        networkError: function() {
                            this.success = !1, this.error.type = "network"
                        }
                    }
                }, t.steam_getGid = async function(e) {
                    var [t, n] = await r(o(e, "https://store.steampowered.com/join/refreshcaptcha/", {
                        mode: "cors",
                        credentials: "include",
                        headers: {
                            "Accept-Language": "en-US"
                        }
                    })), i = {
                        success: null,
                        response: null,
                        error: {
                            type: null,
                            steamcode: null,
                            httpcode: null,
                            message: null
                        },
                        steamError: function(e) {
                            this.success = !1, this.error.type = "steam", this.error.steamcode = e
                        },
                        httpError: function(e) {
                            this.success = !1, this.error.type = "http", this.error.httpcode = e
                        },
                        networkError: function() {
                            this.success = !1, this.error.type = "network"
                        }
                    };
                    return t ? i.networkError() : n.ok ? (i.success = !0, i.response = await n.json()) : i.httpError(n.status), i
                }, t.steam_requestVerify = async function(e, t, n, i) {
                    var [a, s] = await r(o(e, "https://store.steampowered.com/join/ajaxverifyemail", {
                        method: "POST",
                        mode: "cors",
                        credentials: "include",
                        body: new URLSearchParams({
                            email: t,
                            captchagid: n,
                            captcha_text: i,
                            elang: 0
                        }).toString(),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                            "Accept-Language": "en-US"
                        }
                    })), l = {
                        success: null,
                        response: null,
                        error: {
                            type: null,
                            steamcode: null,
                            httpcode: null,
                            message: null
                        },
                        steamError: function(e) {
                            this.success = !1, this.error.type = "steam", this.error.steamcode = e
                        },
                        httpError: function(e) {
                            this.success = !1, this.error.type = "http", this.error.httpcode = e
                        },
                        networkError: function() {
                            this.success = !1, this.error.type = "network"
                        }
                    };
                    if (a) l.networkError();
                    else if (s.ok) {
                        var c = await s.json();
                        l.response = c, 1 == c.success ? (l.success = !0, l.response = c) : l.steamError(c.success)
                    } else l.httpError(s.status);
                    return l
                }, t.steam_verifyEmail = async function(e, t) {
                    var [n, i] = await r(o(e, t, {
                        mode: "cors",
                        credentials: "include",
                        headers: {
                            "Accept-Language": "en-US"
                        }
                    })), a = {
                        success: null,
                        response: null,
                        error: {
                            type: null,
                            steamcode: null,
                            httpcode: null,
                            message: null
                        },
                        steamError: function(e) {
                            this.success = !1, this.error.type = "steam", this.error.steamcode = e
                        },
                        httpError: function(e) {
                            this.success = !1, this.error.type = "http", this.error.httpcode = e
                        },
                        networkError: function() {
                            this.success = !1, this.error.type = "network"
                        }
                    };
                    return n ? a.networkError() : i.ok ? a.success = !0 : a.httpError(i.status), a
                }, t.steam_disableGuard = async function(e, t) {
                    var [n, i] = await r(o(e, "https://store.steampowered.com/account/steamguarddisableverification?stoken=" + t, {
                        mode: "cors",
                        credentials: "include",
                        headers: {
                            "Accept-Language": "en-US"
                        }
                    })), a = {
                        success: null,
                        response: null,
                        error: {
                            type: null,
                            steamcode: null,
                            httpcode: null,
                            message: null
                        },
                        steamError: function(e) {
                            this.success = !1, this.error.type = "steam", this.error.steamcode = e
                        },
                        httpError: function(e) {
                            this.success = !1, this.error.type = "http", this.error.httpcode = e
                        },
                        networkError: function() {
                            this.success = !1, this.error.type = "network"
                        }
                    };
                    return n ? a.networkError() : i.ok ? a.success = !0 : a.httpError(i.status), a
                }, t.steam_createAccount = async function(e, t, n, i) {
                    var [a, s] = await r(o(e, "https://store.steampowered.com/join/createaccount", {
                        method: "POST",
                        mode: "cors",
                        credentials: "include",
                        body: new URLSearchParams({
                            accountname: t,
                            password: n,
                            count: 4,
                            creation_sessionid: i
                        }).toString(),
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                            "Accept-Language": "en-US"
                        }
                    })), l = {
                        success: null,
                        response: null,
                        error: {
                            type: null,
                            steamcode: null,
                            httpcode: null,
                            message: null
                        },
                        steamError: function(e) {
                            this.success = !1, this.error.type = "steam", this.error.steamcode = e
                        },
                        httpError: function(e) {
                            this.success = !1, this.error.type = "http", this.error.httpcode = e
                        },
                        networkError: function() {
                            this.success = !1, this.error.type = "network"
                        }
                    };
                    if (a) l.networkError();
                    else if (s.ok) {
                        var c = await s.json();
                        l.response = c, c.bSuccess ? (l.success = !0, l.response = c) : l.steamError(-1)
                    } else l.httpError(s.status);
                    return l
                }
            },
            314: (e, t) => {
                var n = null;

                function r() {
                    if (!n) {
                        var e = localStorage.getItem("settings");
                        if (e) try {
                            (n = JSON.parse(e)) || (n = {})
                        } catch (e) {
                            n = {}
                        } else n = {}
                    }
                }
                t.unset = function(e) {
                    r();
                    try {
                        delete n[e], localStorage.setItem("settings", JSON.stringify(n))
                    } catch (e) {}
                }, t.get = function(e) {
                    return r(), n[e]
                }, t.set = function(e, t) {
                    r(), n[e] = t, localStorage.setItem("settings", JSON.stringify(n))
                }, t.convert = function() {
                    var e;
                    (r(), t.get("version")) ? (1 == t.get("version") && (t.set("version", 2), t.set("acc_apps_setting", "329385"), t.set("acc_steam_guard", !0), console.log("Migrated from version 1 to version 2!")), 2 == t.get("version") && (t.set("version", 3), "32985" != (e = t.get("acc_apps_setting")) && "303386" != e || t.set("acc_apps_setting", "329385"), console.log("Migrated from version 2 to version 3!")), 3 == t.get("version") && (t.set("version", 4), t.set("captcha_host", "https://2captcha.com"), console.log("Migrated from version 3 to version 4!")), 4 == t.get("version") && (t.set("version", 5), "329385" == (e = t.get("acc_apps_setting")) && t.set("acc_apps_setting", "303386"), console.log("Migrated from version 4 to version 5!")), 5 == t.get("version") && (t.set("version", 6), t.set("acc_apps", t.get("acc_apps_setting")), t.set("acc_steamguard", t.get("acc_steam_guard")), t.unset("acc_steam_guard"), t.unset("acc_apps_setting"), console.log("Migrated from version 5 to version 6!")), 6 == t.get("version") && (t.set("version", 7), t.set("captcha_mode", "native"), console.log("Migrated from version 6 to version 7!"))) : (t.set("version", 6), t.set("custom_domain", localStorage.getItem("settings_custom_domain")), t.set("captcha_key", localStorage.getItem("settings_twocap")), t.set("captcha_host", "https://2captcha.com"), t.set("captcha_key_type", "2captcha"), t.set("acc_apps", "303386"), t.set("acc_steamguard", !0), t.set("captcha_mode", "native"), console.log("Base settings configured!"))
                }
            }
        },
        o = {};

    function a(e) {
        var t = o[e];
        if (void 0 !== t) return t.exports;
        var n = o[e] = {
            id: e,
            exports: {}
        };
        return i[e].call(n.exports, n, n.exports, a), n.exports
    }
    a.m = i, a.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return a.d(t, {
            a: t
        }), t
    }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, a.t = function(n, r) {
        if (1 & r && (n = this(n)), 8 & r) return n;
        if ("object" == typeof n && n) {
            if (4 & r && n.__esModule) return n;
            if (16 & r && "function" == typeof n.then) return n
        }
        var i = Object.create(null);
        a.r(i);
        var o = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var s = 2 & r && n;
            "object" == typeof s && !~e.indexOf(s); s = t(s)) Object.getOwnPropertyNames(s).forEach((e => o[e] = () => n[e]));
        return o.default = () => n, a.d(i, o), i
    }, a.d = (e, t) => {
        for (var n in t) a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, a.f = {}, a.e = e => Promise.all(Object.keys(a.f).reduce(((t, n) => (a.f[n](e, t), t)), [])), a.u = e => "static/js/" + ({
        426: "status",
        768: "proxy"
    } [e] || e) + ".bundle.js", a.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n = {}, r = "accgen-web:", a.l = (e, t, i, o) => {
        if (n[e]) n[e].push(t);
        else {
            var s, l;
            if (void 0 !== i)
                for (var c = document.getElementsByTagName("script"), u = 0; u < c.length; u++) {
                    var d = c[u];
                    if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == r + i) {
                        s = d;
                        break
                    }
                }
            s || (l = !0, (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, a.nc && s.setAttribute("nonce", a.nc), s.setAttribute("data-webpack", r + i), s.src = e), n[e] = [t];
            var f = (t, r) => {
                    s.onerror = s.onload = null, clearTimeout(h);
                    var i = n[e];
                    if (delete n[e], s.parentNode && s.parentNode.removeChild(s), i && i.forEach((e => e(r))), t) return t(r)
                },
                h = setTimeout(f.bind(null, void 0, {
                    type: "timeout",
                    target: s
                }), 12e4);
            s.onerror = f.bind(null, s.onerror), s.onload = f.bind(null, s.onload), l && document.head.appendChild(s)
        }
    }, a.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        var e;
        a.g.importScripts && (e = a.g.location + "");
        var t = a.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var n = t.getElementsByTagName("script");
            n.length && (e = n[n.length - 1].src)
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), a.p = e + "../../"
    })(), (() => {
        var e = {
            592: 0
        };
        a.f.j = (t, n) => {
            var r = a.o(e, t) ? e[t] : void 0;
            if (0 !== r)
                if (r) n.push(r[2]);
                else {
                    var i = new Promise(((n, i) => r = e[t] = [n, i]));
                    n.push(r[2] = i);
                    var o = a.p + a.u(t),
                        s = new Error;
                    a.l(o, (n => {
                        if (a.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                            var i = n && ("load" === n.type ? "missing" : n.type),
                                o = n && n.target && n.target.src;
                            s.message = "Loading chunk " + t + " failed.\n(" + i + ": " + o + ")", s.name = "ChunkLoadError", s.type = i, s.request = o, r[1](s)
                        }
                    }), "chunk-" + t, t)
                }
        };
        var t = (t, n) => {
                var r, i, [o, s, l] = n,
                    c = 0;
                for (r in s) a.o(s, r) && (a.m[r] = s[r]);
                for (l && l(a), t && t(n); c < o.length; c++) i = o[c], a.o(e, i) && e[i] && e[i][0](), e[o[c]] = 0
            },
            n = self.webpackChunkaccgen_web = self.webpackChunkaccgen_web || [];
        n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
    })(), (() => {
        a.g.$ = a(755), a(734);
        const e = void 0 !== (document.sagelectron || document.ipc || window.ipc),
            t = a(314);
        a.g.accgen_settings = t;
        const n = a(217),
            r = a(727),
            i = a(959),
            o = a(877).T;
        var s = {
            addon: {
                apiversion: 0
            }
        };
        a.g.extend = function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return e
        }, a.g.httpRequest = function(e, t, n, r) {
            return new Promise((async function(t, n) {
                $.ajax(extend({
                    success: function(e) {
                        t(e)
                    },
                    error: function(e, t, r) {
                        console.error(e, r), n(e.responseJSON || e.responseText, r)
                    }
                }, e))
            }))
        };
        var l = 0;

        function c(e) {
            var t = l++;
            return document.dispatchEvent(new CustomEvent("addon", {
                detail: {
                    id: t,
                    data: e
                }
            })), new Promise((function(e, t) {
                document.addEventListener("addon_reply", (function(t) {
                    e(JSON.parse(t.detail).data)
                }))
            }))
        }
        a.g.messageAddon = c;
        var u, d, f = 0;

        function h(e, t) {
            t || (t = 0), t >= f && (e ? ($("#generate_status").text(e), f = t) : f = 0)
        }

        function p(e) {
            e ? ($("#generic_error").show("slow"), $("#generic_error > strong").text(e)) : $("#generic_error").hide("slow")
        }

        function g(e, t) {
            if (!e || !e.success && !e.error.message && !e.error.steamerror) return "Unknown error!";
            if (1 != e.success) {
                var i = "Unknown error!",
                    o = !1;
                if (e.error && e.error.emailprovider && (o = !0), e.error && e.error.message) i = e.error.message;
                else if (e.error && e.error.steamerror) {
                    var a = function(e, t, i, o) {
                        var a, s = r.parseSteamError(e);
                        return s.reportemail && t && (a = o.email, async function(e) {
                            return await n.loadRecaptchaV3(), await grecaptcha.execute("6LfG55kUAAAAANVoyH7VqYns6j_ZpxB35phXF0bM", {
                                action: "vote_email"
                            })
                        }().then((function(e) {
                            $.ajax({
                                url: `/userapi/generator/bademail/${encodeURIComponent(e)}/${encodeURIComponent(a)}`
                            }).done((function() {
                                console.log("Log: email ban reported")
                            }))
                        }))), {
                            error: i && s.proxymessage || s.message,
                            emailprovider: 1 == s.reportemail
                        }
                    }(e.error.steamerror, t, e.proxy, e.account);
                    i = a.error, o || (o = 1 == a.emailprovider)
                }
                return o && $("#generate_error_emailprovider").show(), i
            }
        }

        function m(e) {
            if (e.electron) u = !!e.status;
            else if (u) return;
            e.status ? Promise.all([a.e(426).then(a.bind(a, 811)), a.e(426).then(a.t.bind(a, 573, 23))]).then((([t, n]) => {
                var r = n.default(e.status);
                r = t.default.link(r, {
                    email: !1,
                    phone: !1
                }), document.getElementById("accgen_status_msg").innerHTML = r, $("#accgen_status").show("slow")
            })) : $("#accgen_status").hide("slow")
        }

        function v() {
            $.ajax({
                url: "/api/v1/status"
            }).done((function(e) {
                m(e)
            }))
        }

        function y() {
            var e, t = !1;
            return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0), t
        }

        function _() {
            return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
        }

        function b() {
            return "undefined" != typeof InstallTrigger ? "Firefox" : window.chrome && (window.chrome.webstore || window.chrome.runtime) ? "Chrome" : document.documentMode && window.StyleMedia ? "Edge" : window.opr && opr.addons || window.opera || navigator.userAgent.indexOf(" OPR/") >= 0 ? "Opera" : "Unsupported"
        }

        function w() {
            window.location = "legacy.html"
        }

        function x(e) {
            if (e) return $("#email_service_option_gmail > img").css("opacity", "0.4").css("filter", "alpha(opacity=40)"), void $("#email_service_option_gmail > figcaption > p").html('Automated Gmail support is not available on the electron app. <a href="https://accgen.cathook.club/gitlab/wikis/Using-Your-Gmail-address-with-Steam-Account-Generator" target="_blank">Guide for manually using gmail.</a>');
            switch (b()) {
                case "Firefox":
                    if (_()) return w();
                    document.getElementById("addon_download_text").textContent = "You don't have our Firefox addon yet!", document.getElementById("ffaddon").href = "https://addons.mozilla.org/firefox/addon/sag/", document.getElementById("ffaddon").target = "_blank", document.getElementById("ffaddon").onclick = "";
                    break;
                case "Chrome":
                    if (y()) return w();
                    document.getElementById("addon_download_text").textContent = "You don't have our Chrome addon yet!", document.getElementById("ffaddon").href = "https://chrome.google.com/webstore/detail/sag/piljlfgibadchadlhlcfoecfbpdeiemd", document.getElementById("ffaddon").target = "_blank", document.getElementById("ffaddon").onclick = "";
                    break;
                case "Opera":
                    if (y()) return w();
                    document.getElementById("addon_download_text").textContent = "You don't have our Opera addon yet!", document.getElementById("ffaddon").href = "https://addons.opera.com/en/extensions/details/sag/", document.getElementById("ffaddon").target = "_blank", document.getElementById("ffaddon").onclick = "";
                    break;
                case "Yandex":
                    if (_()) return w();
                    document.getElementById("addon_download_text").textContent = "You don't have our Yandex addon yet!", document.getElementById("ffaddon").href = "https://chrome.google.com/webstore/detail/sag/piljlfgibadchadlhlcfoecfbpdeiemd", document.getElementById("ffaddon").target = "_blank", document.getElementById("ffaddon").onclick = "";
                    break;
                default:
                    return w()
            }
        }

        function E(e) {
            if (e.done && change_visibility(!1), e.parsederror) return $("#generate_error").show("slow"), void $("#generate_error_text").html(e.parsederror);
            e.done && function(e) {
                null == localStorage.getItem("genned_account") && localStorage.setItem("genned_account", JSON.stringify([])), localStorage.setItem("genned_account", JSON.stringify(JSON.parse(localStorage.getItem("genned_account")).concat(e)))
            }(e.account), d = e, void 0 !== document.sagelectron && $("#electron_steam_signin").show(), e.activation ? ($("#acc_apps > span > strong").text(e.activation.success.length + "/" + (e.activation.success.length + e.activation.fail.length)), $("#acc_apps").show()) : $("#acc_apps").hide(), $("#details_username").text(e.account.login), $("#details_password").text(e.account.password), $("#generated_data").show("slow")
        }

        function T() {
            var e = $("#settings_appids").val().match(/\d+(,$|)/g);
            if (!e) return $("#acc_apps_setting > div > span").text("0"), $("#acc_apps_setting > div").addClass("alert-warning"), void $("#acc_apps_setting > div").removeClass("alert-success");
            $("#settings_appids").val(e.join(","));
            var t = $("#settings_appids").val().match(/\d+/g);
            $("#acc_apps_setting > div > span").text(t.length), t.length > 5 ? ($("#acc_apps_setting > div").addClass("alert-warning"), $("#acc_apps_setting > div").removeClass("alert-success")) : ($("#acc_apps_setting > div").addClass("alert-success"), $("#acc_apps_setting > div").removeClass("alert-warning"))
        }
        a.g.proxylist_edit = function() {
            Promise.all([a.e(606), a.e(768)]).then(a.t.bind(a, 914, 19)).then((function(e) {
                e.openEditor()
            }))
        }, a.g.copyDetails = async function(e) {
            var t;
            if ("Copied!" != (t = $(`#${e}`).text())) {
                var n = $("<input>");
                $("body").append(n), n.val(t).select(), document.execCommand("copy"), n.remove(), $(`#${e}`).text("Copied!"), await sleep(1e3), $(`#${e}`).text(t)
            }
        }, a.g.accgen_debug_gen = async function(e) {
            change_visibility(!0);
            var n = (await r.generateAccounts(1, {
                    token: e
                }, null, (function(e, t, n) {
                    h(e), n && E(n)
                })))[0],
                i = g(n, "accgen" == t.get("email_provider"));
            E(i ? {
                parsederror: i,
                done: !0
            } : n)
        }, a.g.sleep = function(e) {
            return new Promise((t => setTimeout(t, e)))
        }, a.g.mass_generate_clicked = async function() {
            function n(e, t) {
                isNaN(e) ? console.error("Invalid ID") : (t.username && $("#status_table tr").eq(e).find("td").eq(1).html(t.username), t.password && $("#status_table tr").eq(e).find("td").eq(2).html(t.password), t.email && $("#status_table tr").eq(e).find("td").eq(3).html(t.email), t.status && $("#status_table tr").eq(e).find("td").eq(4).html(t.status))
            }
            var i = $("#mass_gen_count").val(),
                a = $("#mass_gen_concurrency").val();
            if (!i || isNaN(i) || i < 1) return p("Count must be a non 0 and non negative number!"), !1;
            if (!a || isNaN(a) || a < 1) return p("Concurrency must be a non 0 and non negative number!"), !1;
            $("#status_table").empty();
            for (var s = 0; s < i; s++) $("#status_table").append(`<tr>\n            <td>${s}</td>\n            <td></td>\n            <td></td>\n            <td></td>\n            <td>Waiting...</td>\n            </tr>`);
            change_visibility(!0), $("#generate_stop").show(), $("#generation_status").show("slow");
            var l = o(t.get("captcha_host"), t.get("captcha_key"), e && document.sagelectron.nodefetch ? document.sagelectron.nodefetch : fetch),
                c = [],
                u = await r.generateAccounts(i, l, a, (function(e, t) {
                    n(t, {
                        status: e
                    })
                }), (function(e, r) {
                    var i, o = g(e, "accgen" == t.get("email_provider"));
                    o ? n(r, {
                        status: o
                    }) : (n(r, {
                        status: "Finished!",
                        username: e.account.login,
                        password: e.account.password,
                        email: e.account.email
                    }), i = e.account, null == localStorage.getItem("mass_genned_account") && localStorage.setItem("mass_genned_account", JSON.stringify([])), localStorage.setItem("mass_genned_account", JSON.stringify(JSON.parse(localStorage.getItem("mass_genned_account")).concat(i))))
                }), h, $("#proxy_check:checked").val() && e);
            for (s = 0; s < i; s++) {
                var d = u[s],
                    f = g(d, !1);
                f ? n(s, {
                    username: "",
                    password: "",
                    email: "",
                    status: f
                }) : (n(s, {
                    status: "Completed!",
                    username: d.account.login,
                    password: d.account.password,
                    email: d.account.email
                }), d.account && c.push(d.account))
            }
            return change_visibility(!1), $("#down_check:checked").val() && c.length >= 1 && N(c), !1
        }, a.g.commonGeneratePressed = async function() {
            if (t.get("captcha_key")) return change_visibility(2), void $("#mass_generator").modal("show");
            if (s.addon.apiversion >= 6 && "native" === t.get("captcha_mode")) {
                change_visibility(!0);
                var e = (await r.generateAccounts(1, {
                        getRecapSolution: async () => JSON.parse(await c({
                            task: "nativeCaptcha"
                        })),
                        message: "Waiting for you to solve the captcha..."
                    }, null, (function(e, t, n) {
                        h(e), n && E(n)
                    })))[0],
                    n = g(e, "accgen" == t.get("email_provider"));
                if (n) return void E({
                    parsederror: n,
                    done: !0
                });
                E(e)
            } else $("#steam_iframe").is(":hidden") ? (change_visibility(2), document.getElementById("steam_iframe_innerdiv").src = "https://store.steampowered.com/join/") : document.getElementById("steam_iframe_innerdiv").src = "about:blank", $("#steam_iframe").toggle("slow")
        }, a.g.selectEmailServicePressed = function() {
            n.loadEmailServiceImages(), $("#email_service_modal").modal("show")
        }, a.g.commonChangeVisibility = function(e) {
            e ? ($("#mx_error").hide("slow"), $("#gmail_error").hide("slow"), $("#saved_success").hide("slow"), $("#twocap_error").hide("slow"), $("#generate_error").hide("slow"), $("#generate_error_emailprovider").hide("slow"), $("#generated_data").hide("slow"), $("#history_list").hide("slow"), $("#generation_status").hide("slow"), $("#generate_stop").hide("slow"), p(void 0), $("#steam_iframe").hide("slow"), document.getElementById("steam_iframe_innerdiv").src = "about:blank", 1 == e && ($("#control_buttons").hide(), $("#generate_progress").show("slow"))) : ($("#control_buttons").show(), $("#generate_progress").hide("slow"))
        }, a.g.electronSteamSignIn = function() {
            document.sagelectron.startSteam(d), $("#electron_steam_signin").hide("slow")
        };
        var C = !1;
        async function k(e) {
            t.set("email_provider", e), setTimeout((() => {
                $("#email_service_modal").modal("hide"), $("#email_service_message").hide("slow"), setTimeout((() => {
                    C = !1
                }), 1e3)
            }), 3e3)
        }
        a.g.setUseAccgenMail = function() {
            C || (C = !0, $("#email_service_message > strong").text("Using accgen email service."), $("#email_service_message").show("slow"), k("accgen"))
        }, a.g.setUseGmail = async function() {
            if (!e && !C) {
                C = !0, console.log("Setup gmail clicked"), $("#email_service_progress").show("slow"), $("#email_service_message > strong").text("Setting up gmail forwarding..."), $("#email_service_message").show("slow");
                var n = await c({
                    task: "setupGmail"
                });
                if (console.log(n), !n.success) return $("#email_service_progress").hide("slow"), $("#email_service_message > strong").text(`There was an issue setting up Gmail: ${n.reason||n.error}`), void(C = !1);
                var r = await i.getGmailAddress();
                if ($("#email_service_progress").hide("slow"), !r || r.error) return r && 401 == r.error ? $("#email_service_message > strong").html('There was an issue setting up automated Gmail: Failed to login. Please open <a href="https://mail.google.com">mail.google.com</a>, wait for it to load (and login if necessary), then try again.<br>If the issue persists, follow this guide to manually setup gmail forwarding: <a href="https://accgen.cathook.club/gitlab/wikis/Using-Your-Gmail-address-with-Steam-Account-Generator" target="_blank">Using your Gmail address with forwarding</a>') : "Firefox" == b() ? $("#email_service_message > strong").html('There was an issue setting up automated Gmail: Communication with gmail failed. Please disable "enhanced privacy protection" for this page (shield icon next to the padlock in the address bar).<br>If the issue persists, follow this guide to manually set up gmail forwarding: <a href="https://accgen.cathook.club/gitlab/wikis/Using-Your-Gmail-address-with-Steam-Account-Generator" target="_blank">Using your Gmail address with forwarding</a>') : $("#email_service_message > strong").html('There was an issue setting up automated Gmail: Communication with gmail failed.<br>If the issue persists, follow this guide to manually setup gmail forwarding: <a href="https://accgen.cathook.club/gitlab/wikis/Using-Your-Gmail-address-with-Steam-Account-Generator" target="_blank">Using your Gmail address with forwarding</a>'), void(C = !1);
                t.set("email_gmail", r), k("gmailv2"), $("#email_service_message > strong").text(`Automated gmail forwarding was set up for ${r}.`)
            }
        };
        var S = null;

        function A(e, t) {
            var n = !!e;
            n && (change_visibility(2), $("#genned_accs").empty(), $.each(e.reverse(), (function(e, t) {
                $('<tr class="table-primary">').html('<td><a target="_blank" href="https://steamcommunity.com/profiles/' + t.steamid + '">' + t.login + "</a></td><td>" + t.password + "</td>").appendTo("#genned_accs")
            }))), n ? ($("#history_list").show("slow"), t ? $("#history_download_button").show() : $("#history_download_button").hide()) : $("#history_list").hide("slow")
        }

        function N(e) {
            for (var t = "", n = 0; n < e.length; n++) t += e[n].login + ":" + e[n].password + "\r\n";
            var r, i, o, a = new Date;
            r = `accounts–${a.getFullYear()}-${a.getMonth()<10?"0"+a.getMonth():a.getMonth()}-${a.getDate()<10?"0"+a.getDate():a.getDate()}.txt`, i = t, (o = document.createElement("a")).setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(i)), o.setAttribute("download", r), o.style.display = "none", document.body.appendChild(o), o.click(), document.body.removeChild(o)
        }
        a.g.changeurl = function(t) {
            return S = t ? "exit" : window.event.target.href, !r.generator.activegeneration || (r.generator.activegeneration > 1 ? $("#exit_page_modal_graceful").show() : $("#exit_page_modal_graceful").hide(), t ? (e || $("#exit_page_modal_exit").hide(), t.preventDefault(), t.returnValue = "") : $("#exit_page_modal_exit").show(), $("#exit_page_modal").modal("show"), !1)
        }, a.g.common_init = async function() {
            if (t.convert(), setInterval(v, 1e4), v(), e) {
                var n = (document.sagelectron ? document.sagelectron.ipc : null) || document.ipc || window.ipc;
                if (n && (n.on("alert-msg", ((e, t) => {
                        m(t)
                    })), n.send("ready"), console.log("Ready sent!")), void 0 === document.sagelectron || document.sagelectron.apiversion < 4) return $("#electron_update").show(), void $("#accgen_ui").hide();
                $("#electron_ad").hide(), $("#proxy-settings").show(), x(!0)
            } else {
                var i = await Promise.race([c({
                    task: "version"
                }), new Promise((function(e, t) {
                    setTimeout(e, 500)
                }))]);
                if (!i) return x(), $("#addon_dl").show(), $("#accgen_ui").hide(), void console.log("No addon installed!");
                console.log("Version 3.0 or above found!"), s.addon.apiversion = i.apiversion
            }
            var o;
            null != localStorage.getItem("genned_account") && $("#history_button").show(), o = window.addEventListener ? "addEventListener" : "attachEvent", (0, window[o])("attachEvent" == o ? "onmessage" : "message", (async function(e) {
                if ("https://store.steampowered.com" == e.origin && "recaptcha-setup" != e.data && !("string" != typeof e.data || e.data.length < 200)) {
                    var n = null;
                    try {
                        n = JSON.parse(e.data)
                    } catch (o) {}
                    if (n && n.token) {
                        change_visibility(!0);
                        var i = (await r.generateAccounts(1, n, null, (function(e, t, n) {
                                h(e), n && E(n)
                            })))[0],
                            o = g(i, "accgen" == t.get("email_provider"));
                        E(o ? {
                            parsederror: o,
                            done: !0
                        } : i)
                    } else alert("Invalid data received from addon")
                }
            }), !1), t.get("email_provider") || selectEmailServicePressed(), $("#generate_stop > button").click((function() {
                $("#generate_stop").hide("slow"), r.generator.events.emit("stopgeneration")
            })), $("#exit_page_modal_graceful").click((function() {
                r.generator.events.emit("stopgeneration")
            })), $("#exit_page_modal_exit").click((function() {
                r.generator.activegeneration = !1, "exit" == S ? window.close() : window.location = S
            })), window.addEventListener("beforeunload", (function(e) {
                a.g.changeurl(e)
            })), T(), $("#settings_appids").on("input", T)
        }, a.g.history_pressed = function() {
            return $("#history_list").is(":hidden") ? A(JSON.parse(localStorage.getItem("genned_account")), !0) : A(void 0), !1
        }, a.g.history_download_pressed = function() {
            return N(JSON.parse(localStorage.getItem("genned_account"))), !1
        }, a.g.settings_help = function(e) {
            switch (e) {
                case "gmail":
                    window.open("https://accgen.cathook.club/gitlab/wikis/Using-Your-Gmail-address-with-Steam-Account-Generator");
                    break;
                case "mx":
                    window.open("https://accgen.cathook.club/gitlab/wikis/How-to-set-up-a-Custom-Domain");
                    break;
                case "f2pgames":
                    window.open("https://accgen.cathook.club/gitlab/wikis/How-to-use-SubIDs");
                    break;
                default:
                    console.log("Invalid settings page")
            }
        }, a.g.settings_pressed = function() {
            return change_visibility(2), $("#settings_custom_domain").val(t.get("email_domain")), $("#settings_twocap").val(t.get("captcha_key")), $("#settings_caphost").val(t.get("captcha_host")), $('#acc_steam_guard > input[type="checkbox"]').prop("checked", t.get("acc_steamguard")), $('#acc_apps_setting > input[type="text"]').val(t.get("acc_apps")), $("#settings_appids").trigger("input"), $("#settings_captchamode").prop("selectedIndex", "native" === t.get("captcha_mode") ? 0 : 1), !1
        }, a.g.custom_domain_clicked = async function() {
            if (C) return !1;
            C = !0, $("#custom_domain_service_modal").modal("show")
        }, a.g.save_domain = async function() {
            $("#email_service_progress").show("slow"), $("#email_service_message > strong").text("Setting up custom domain..."), $("#email_service_message").show("slow");
            var e = $("#settings_custom_domain").val();
            if ("" == e) C = !1, $("#email_service_message").hide("slow"), $("#email_service_progress").hide("slow"), t.set("email_domain", e);
            else {
                if (!e.includes("@")) {
                    var n = await async function(e) {
                        if (!new RegExp("^([a-z0-9]+([-a-z0-9]*[a-z0-9]+)?.){0,}([a-z0-9]+([-a-z0-9]*[a-z0-9]+)?){1,63}(.[a-z0-9]{2,7})+$").test(e)) return !1;
                        var t = await fetch(`/userapi/generator/mxcheck/${encodeURIComponent(e)}`).catch((() => {}));
                        if (!t || !t.ok) return "Unknown error while chcking domain validity!";
                        try {
                            var n = await t.json();
                            return !!n.valid || n.error
                        } catch (e) {
                            return "Unknown error while chcking domain validity!"
                        }
                    }(e);
                    if (!0 !== n) return $("#settings_custom_domain").val(""), C = !1, $("#email_service_message > strong").text(n), $("#email_service_progress").hide("slow"), !1
                }
                $("#email_service_progress").hide("slow"), t.set("email_domain", e), $("#email_service_message > strong").text("Custom domain set up."), k("custom_domain")
            }
        }, a.g.save_clicked = async function() {
            t.set("acc_steamguard", $('#acc_steam_guard > input[type="checkbox"]').prop("checked")), t.set("acc_apps", $('#acc_apps_setting > input[type="text"]').val()), t.set("captcha_mode", 0 === $("#settings_captchamode").prop("selectedIndex") ? "native" : "iframe");
            var n = $("#settings_twocap").val(),
                r = "" != $("#settings_caphost").val() ? $("#settings_caphost").val() : "https://2captcha.com";
            if ("" != n) {
                var i = await o(r, n, e && document.sagelectron.nodefetch ? document.sagelectron.nodefetch : fetch).isValidKey();
                if (i) return $("#twocap_error > strong").text("Captcha service setup error: " + i.error), void $("#twocap_error").show("slow");
                $("#twocap_error").hide("slow"), t.set("captcha_key", n), t.set("captcha_host", r)
            } else $("#twocap_error").hide("slow"), t.set("captcha_key", null);
            return $("#saved_success").show("slow"), !1
        }, $(".modal").on("hidden.bs.modal", (function(e) {
            $(".modal:visible").length && $("body").addClass("modal-open")
        }))
    })()
})();