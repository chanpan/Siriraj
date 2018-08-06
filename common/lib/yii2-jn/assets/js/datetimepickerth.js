! function(a) {
    "use strict";
    if ("function" == typeof define && define.amd) define(["jquery", "moment"], a);
    else if ("object" == typeof exports) module.exports = a(require("jquery"), require("moment"));
    else {
        if ("undefined" == typeof jQuery) throw "bootstrap-datetimepicker requires jQuery to be loaded first";
        if ("undefined" == typeof moment) throw "bootstrap-datetimepicker requires Moment.js to be loaded first";
        a(jQuery, moment)
    }
}(function(a, b) {
    "use strict";
    if (!b) throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first");
    var c = function(c, d) {
        var e, f, g, h, i, j, k, l = {},
            m = !0,
            n = !1,
            o = !1,
            p = 0,
            q = [{
                clsName: "days",
                navFnc: "M",
                navStep: 1
            }, {
                clsName: "months",
                navFnc: "y",
                navStep: 1
            }, {
                clsName: "years",
                navFnc: "y",
                navStep: 10
            }, {
                clsName: "decades",
                navFnc: "y",
                navStep: 100
            }],
            r = ["days", "months", "years", "decades"],
            s = ["top", "bottom", "auto"],
            t = ["left", "right", "auto"],
            u = ["default", "top", "bottom"],
            v = {
                up: 38,
                38: "up",
                down: 40,
                40: "down",
                left: 37,
                37: "left",
                right: 39,
                39: "right",
                tab: 9,
                9: "tab",
                escape: 27,
                27: "escape",
                enter: 13,
                13: "enter",
                pageUp: 33,
                33: "pageUp",
                pageDown: 34,
                34: "pageDown",
                shift: 16,
                16: "shift",
                control: 17,
                17: "control",
                space: 32,
                32: "space",
                t: 84,
                84: "t",
                delete: 46,
                46: "delete"
            },
            w = {},
            x = function() {
                return void 0 !== b.tz && void 0 !== d.timeZone && null !== d.timeZone && "" !== d.timeZone
            },
            y = function(a) {
                var c;
                return c = void 0 === a || null === a ? b() : b.isDate(a) || b.isMoment(a) ? b(a) : x() ? b.tz(a, j, d.useStrict, d.timeZone) : b(a, j, d.useStrict), x() && c.tz(d.timeZone), c
            },
            z = function(a) {
                if ("string" != typeof a || a.length > 1) throw new TypeError("isEnabled expects a single character string parameter");
                switch (a) {
                    case "y":
                        return i.indexOf("Y") !== -1;
                    case "M":
                        return i.indexOf("M") !== -1;
                    case "d":
                        return i.toLowerCase().indexOf("d") !== -1;
                    case "h":
                    case "H":
                        return i.toLowerCase().indexOf("h") !== -1;
                    case "m":
                        return i.indexOf("m") !== -1;
                    case "s":
                        return i.indexOf("s") !== -1;
                    default:
                        return !1
                }
            },
            A = function() {
                return z("h") || z("m") || z("s")
            },
            B = function() {
                return z("y") || z("M") || z("d")
            },
            C = function() {
                var b = a("<thead>").append(a("<tr>").append(a("<th>").addClass("prev").attr("data-action", "previous").append(a("<span>").addClass(d.icons.previous))).append(a("<th>").addClass("picker-switch").attr("data-action", "pickerSwitch").attr("colspan", d.calendarWeeks ? "6" : "5")).append(a("<th>").addClass("next").attr("data-action", "next").append(a("<span>").addClass(d.icons.next)))),
                    c = a("<tbody>").append(a("<tr>").append(a("<td>").attr("colspan", d.calendarWeeks ? "8" : "7")));
                return [a("<div>").addClass("datepicker-days").append(a("<table>").addClass("table-condensed").append(b).append(a("<tbody>"))), a("<div>").addClass("datepicker-months").append(a("<table>").addClass("table-condensed").append(b.clone()).append(c.clone())), a("<div>").addClass("datepicker-years").append(a("<table>").addClass("table-condensed").append(b.clone()).append(c.clone())), a("<div>").addClass("datepicker-decades").append(a("<table>").addClass("table-condensed").append(b.clone()).append(c.clone()))]
            },
            D = function() {
                var b = a("<tr>"),
                    c = a("<tr>"),
                    e = a("<tr>");
                return z("h") && (b.append(a("<td>").append(a("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: d.tooltips.incrementHour
                }).addClass("btn").attr("data-action", "incrementHours").append(a("<span>").addClass(d.icons.up)))), c.append(a("<td>").append(a("<span>").addClass("timepicker-hour").attr({
                    "data-time-component": "hours",
                    title: d.tooltips.pickHour
                }).attr("data-action", "showHours"))), e.append(a("<td>").append(a("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: d.tooltips.decrementHour
                }).addClass("btn").attr("data-action", "decrementHours").append(a("<span>").addClass(d.icons.down))))), z("m") && (z("h") && (b.append(a("<td>").addClass("separator")), c.append(a("<td>").addClass("separator").html(":")), e.append(a("<td>").addClass("separator"))), b.append(a("<td>").append(a("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: d.tooltips.incrementMinute
                }).addClass("btn").attr("data-action", "incrementMinutes").append(a("<span>").addClass(d.icons.up)))), c.append(a("<td>").append(a("<span>").addClass("timepicker-minute").attr({
                    "data-time-component": "minutes",
                    title: d.tooltips.pickMinute
                }).attr("data-action", "showMinutes"))), e.append(a("<td>").append(a("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: d.tooltips.decrementMinute
                }).addClass("btn").attr("data-action", "decrementMinutes").append(a("<span>").addClass(d.icons.down))))), z("s") && (z("m") && (b.append(a("<td>").addClass("separator")), c.append(a("<td>").addClass("separator").html(":")), e.append(a("<td>").addClass("separator"))), b.append(a("<td>").append(a("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: d.tooltips.incrementSecond
                }).addClass("btn").attr("data-action", "incrementSeconds").append(a("<span>").addClass(d.icons.up)))), c.append(a("<td>").append(a("<span>").addClass("timepicker-second").attr({
                    "data-time-component": "seconds",
                    title: d.tooltips.pickSecond
                }).attr("data-action", "showSeconds"))), e.append(a("<td>").append(a("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: d.tooltips.decrementSecond
                }).addClass("btn").attr("data-action", "decrementSeconds").append(a("<span>").addClass(d.icons.down))))), h || (b.append(a("<td>").addClass("separator")), c.append(a("<td>").append(a("<button>").addClass("btn btn-primary").attr({
                    "data-action": "togglePeriod",
                    tabindex: "-1",
                    title: d.tooltips.togglePeriod
                }))), e.append(a("<td>").addClass("separator"))), a("<div>").addClass("timepicker-picker").append(a("<table>").addClass("table-condensed").append([b, c, e]))
            },
            E = function() {
                var b = a("<div>").addClass("timepicker-hours").append(a("<table>").addClass("table-condensed")),
                    c = a("<div>").addClass("timepicker-minutes").append(a("<table>").addClass("table-condensed")),
                    d = a("<div>").addClass("timepicker-seconds").append(a("<table>").addClass("table-condensed")),
                    e = [D()];
                return z("h") && e.push(b), z("m") && e.push(c), z("s") && e.push(d), e
            },
            F = function() {
                var b = [];
                return d.showTodayButton && b.push(a("<td>").append(a("<a>").attr({
                    "data-action": "today",
                    title: d.tooltips.today
                }).append(a("<span>").addClass(d.icons.today)))), !d.sideBySide && B() && A() && b.push(a("<td>").append(a("<a>").attr({
                    "data-action": "togglePicker",
                    title: d.tooltips.selectTime
                }).append(a("<span>").addClass(d.icons.time)))), d.showClear && b.push(a("<td>").append(a("<a>").attr({
                    "data-action": "clear",
                    title: d.tooltips.clear
                }).append(a("<span>").addClass(d.icons.clear)))), d.showClose && b.push(a("<td>").append(a("<a>").attr({
                    "data-action": "close",
                    title: d.tooltips.close
                }).append(a("<span>").addClass(d.icons.close)))), a("<table>").addClass("table-condensed").append(a("<tbody>").append(a("<tr>").append(b)))
            },
            G = function() {
                var b = a("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),
                    c = a("<div>").addClass("datepicker").append(C()),
                    e = a("<div>").addClass("timepicker").append(E()),
                    f = a("<ul>").addClass("list-unstyled"),
                    g = a("<li>").addClass("picker-switch" + (d.collapse ? " accordion-toggle" : "")).append(F());
                return d.inline && b.removeClass("dropdown-menu"), h && b.addClass("usetwentyfour"), z("s") && !h && b.addClass("wider"), d.sideBySide && B() && A() ? (b.addClass("timepicker-sbs"), "top" === d.toolbarPlacement && b.append(g), b.append(a("<div>").addClass("row").append(c.addClass("col-md-6")).append(e.addClass("col-md-6"))), "bottom" === d.toolbarPlacement && b.append(g), b) : ("top" === d.toolbarPlacement && f.append(g), B() && f.append(a("<li>").addClass(d.collapse && A() ? "collapse in" : "").append(c)), "default" === d.toolbarPlacement && f.append(g), A() && f.append(a("<li>").addClass(d.collapse && B() ? "collapse" : "").append(e)), "bottom" === d.toolbarPlacement && f.append(g), b.append(f))
            },
            H = function() {
                var b, e = {};
                return b = c.is("input") || d.inline ? c.data() : c.find("input").data(), b.dateOptions && b.dateOptions instanceof Object && (e = a.extend(!0, e, b.dateOptions)), a.each(d, function(a) {
                    var c = "date" + a.charAt(0).toUpperCase() + a.slice(1);
                    void 0 !== b[c] && (e[a] = b[c])
                }), e
            },
            I = function() {
                var b, e = (n || c).position(),
                    f = (n || c).offset(),
                    g = d.widgetPositioning.vertical,
                    h = d.widgetPositioning.horizontal;
                if (d.widgetParent) b = d.widgetParent.append(o);
                else if (c.is("input")) b = c.after(o).parent();
                else {
                    if (d.inline) return void(b = c.append(o));
                    b = c, c.children().first().after(o)
                }
                if ("auto" === g && (g = f.top + 1.5 * o.height() >= a(window).height() + a(window).scrollTop() && o.height() + c.outerHeight() < f.top ? "top" : "bottom"), "auto" === h && (h = b.width() < f.left + o.outerWidth() / 2 && f.left + o.outerWidth() > a(window).width() ? "right" : "left"), "top" === g ? o.addClass("top").removeClass("bottom") : o.addClass("bottom").removeClass("top"), "right" === h ? o.addClass("pull-right") : o.removeClass("pull-right"), "static" === b.css("position") && (b = b.parents().filter(function() {
                        return "static" !== a(this).css("position")
                    }).first()), 0 === b.length) throw new Error("datetimepicker component should be placed within a non-static positioned container");
                o.css({
                    top: "top" === g ? "auto" : e.top + c.outerHeight(),
                    bottom: "top" === g ? b.outerHeight() - (b === c ? 0 : e.top) : "auto",
                    left: "left" === h ? b === c ? 0 : e.left : "auto",
                    right: "left" === h ? "auto" : b.outerWidth() - c.outerWidth() - (b === c ? 0 : e.left)
                })
            },
            J = function(a) {
                "dp.change" === a.type && (a.date && a.date.isSame(a.oldDate) || !a.date && !a.oldDate) || c.trigger(a)
            },
            K = function(a) {
                "y" === a && (a = "YYYY"), J({
                    type: "dp.update",
                    change: a,
                    viewDate: f.clone()
                })
            },
            L = function(a) {
                o && (a && (k = Math.max(p, Math.min(3, k + a))), o.find(".datepicker > div").hide().filter(".datepicker-" + q[k].clsName).show())
            },
            M = function() {
                var b = a("<tr>"),
                    c = f.clone().startOf("w").startOf("d");
                for (d.calendarWeeks === !0 && b.append(a("<th>").addClass("cw").text("#")); c.isBefore(f.clone().endOf("w"));) b.append(a("<th>").addClass("dow").text(c.format("dd"))), c.add(1, "d");
                o.find(".datepicker-days thead").append(b)
            },
            N = function(a) {
                return d.disabledDates[a.format("YYYY-MM-DD")] === !0
            },
            O = function(a) {
                return d.enabledDates[a.format("YYYY-MM-DD")] === !0
            },
            P = function(a) {
                return d.disabledHours[a.format("H")] === !0
            },
            Q = function(a) {
                return d.enabledHours[a.format("H")] === !0
            },
            R = function(b, c) {
                if (!b.isValid()) return !1;
                if (d.disabledDates && "d" === c && N(b)) return !1;
                if (d.enabledDates && "d" === c && !O(b)) return !1;
                if (d.minDate && b.isBefore(d.minDate, c)) return !1;
                if (d.maxDate && b.isAfter(d.maxDate, c)) return !1;
                if (d.daysOfWeekDisabled && "d" === c && d.daysOfWeekDisabled.indexOf(b.day()) !== -1) return !1;
                if (d.disabledHours && ("h" === c || "m" === c || "s" === c) && P(b)) return !1;
                if (d.enabledHours && ("h" === c || "m" === c || "s" === c) && !Q(b)) return !1;
                if (d.disabledTimeIntervals && ("h" === c || "m" === c || "s" === c)) {
                    var e = !1;
                    if (a.each(d.disabledTimeIntervals, function() {
                            if (b.isBetween(this[0], this[1])) return e = !0, !1
                        }), e) return !1
                }
                return !0
            },
            S = function() {
                for (var b = [], c = f.clone().startOf("y").startOf("d"); c.isSame(f, "y");) b.push(a("<span>").attr("data-action", "selectMonth").addClass("month").text(c.format("MMM"))), c.add(1, "M");
                o.find(".datepicker-months td").empty().append(b)
            },
            T = function() {
                var b = o.find(".datepicker-months"),
                    c = b.find("th"),
                    g = b.find("tbody").find("span");
                c.eq(0).find("span").attr("title", d.tooltips.prevYear), c.eq(1).attr("title", d.tooltips.selectYear), c.eq(2).find("span").attr("title", d.tooltips.nextYear), b.find(".disabled").removeClass("disabled"), R(f.clone().subtract(1, "y"), "y") || c.eq(0).addClass("disabled"), c.eq(1).text(f.year()), R(f.clone().add(1, "y"), "y") || c.eq(2).addClass("disabled"), g.removeClass("active"), e.isSame(f, "y") && !m && g.eq(e.month()).addClass("active"), g.each(function(b) {
                    R(f.clone().month(b), "M") || a(this).addClass("disabled")
                })
            },
            U = function() {
                var a = o.find(".datepicker-years"),
                    b = a.find("th"),
                    c = f.clone().subtract(5, "y"),
                    g = f.clone().add(6, "y"),
                    h = "";
                for (b.eq(0).find("span").attr("title", d.tooltips.prevDecade), b.eq(1).attr("title", d.tooltips.selectDecade), b.eq(2).find("span").attr("title", d.tooltips.nextDecade), a.find(".disabled").removeClass("disabled"), d.minDate && d.minDate.isAfter(c, "y") && b.eq(0).addClass("disabled"), b.eq(1).text(c.year() + "-" + g.year()), d.maxDate && d.maxDate.isBefore(g, "y") && b.eq(2).addClass("disabled"); !c.isAfter(g, "y");) h += '<span data-action="selectYear" class="year' + (c.isSame(e, "y") && !m ? " active" : "") + (R(c, "y") ? "" : " disabled") + '">' + c.year() + "</span>", c.add(1, "y");
                a.find("td").html(h)
            },
            V = function() {
                var a, c = o.find(".datepicker-decades"),
                    g = c.find("th"),
                    h = b({
                        y: f.year() - f.year() % 100 - 1
                    }),
                    i = h.clone().add(100, "y"),
                    j = h.clone(),
                    k = !1,
                    l = !1,
                    m = "";
                for (g.eq(0).find("span").attr("title", d.tooltips.prevCentury), g.eq(2).find("span").attr("title", d.tooltips.nextCentury), c.find(".disabled").removeClass("disabled"), (h.isSame(b({
                        y: 1900
                    })) || d.minDate && d.minDate.isAfter(h, "y")) && g.eq(0).addClass("disabled"), g.eq(1).text(h.year() + "-" + i.year()), (h.isSame(b({
                        y: 2e3
                    })) || d.maxDate && d.maxDate.isBefore(i, "y")) && g.eq(2).addClass("disabled"); !h.isAfter(i, "y");) a = h.year() + 12, k = d.minDate && d.minDate.isAfter(h, "y") && d.minDate.year() <= a, l = d.maxDate && d.maxDate.isAfter(h, "y") && d.maxDate.year() <= a, m += '<span data-action="selectDecade" class="decade' + (e.isAfter(h) && e.year() <= a ? " active" : "") + (R(h, "y") || k || l ? "" : " disabled") + '" data-selection="' + (h.year() + 6) + '">' + (h.year() + 1) + " - " + (h.year() + 12) + "</span>", h.add(12, "y");
                m += "<span></span><span></span><span></span>", c.find("td").html(m), g.eq(1).text(j.year() + 1 + "-" + h.year())
            },
            W = function() {
                var b, c, g, h = o.find(".datepicker-days"),
                    i = h.find("th"),
                    j = [],
                    k = [];
                if (B()) {
                    for (i.eq(0).find("span").attr("title", d.tooltips.prevMonth), i.eq(1).attr("title", d.tooltips.selectMonth), i.eq(2).find("span").attr("title", d.tooltips.nextMonth), h.find(".disabled").removeClass("disabled"), i.eq(1).text(f.format(d.dayViewHeaderFormat)), R(f.clone().subtract(1, "M"), "M") || i.eq(0).addClass("disabled"), R(f.clone().add(1, "M"), "M") || i.eq(2).addClass("disabled"), b = f.clone().startOf("M").startOf("w").startOf("d"), g = 0; g < 42; g++) 0 === b.weekday() && (c = a("<tr>"), d.calendarWeeks && c.append('<td class="cw">' + b.week() + "</td>"), j.push(c)), k = ["day"], b.isBefore(f, "M") && k.push("old"), b.isAfter(f, "M") && k.push("new"), b.isSame(e, "d") && !m && k.push("active"), R(b, "d") || k.push("disabled"), b.isSame(y(), "d") && k.push("today"), 0 !== b.day() && 6 !== b.day() || k.push("weekend"), J({
                        type: "dp.classify",
                        date: b,
                        classNames: k
                    }), c.append('<td data-action="selectDay" data-day="' + b.format("L") + '" class="' + k.join(" ") + '">' + b.date() + "</td>"), b.add(1, "d");
                    h.find("tbody").empty().append(j), T(), U(), V()
                }
            },
            X = function() {
                var b = o.find(".timepicker-hours table"),
                    c = f.clone().startOf("d"),
                    d = [],
                    e = a("<tr>");
                for (f.hour() > 11 && !h && c.hour(12); c.isSame(f, "d") && (h || f.hour() < 12 && c.hour() < 12 || f.hour() > 11);) c.hour() % 4 === 0 && (e = a("<tr>"), d.push(e)), e.append('<td data-action="selectHour" class="hour' + (R(c, "h") ? "" : " disabled") + '">' + c.format(h ? "HH" : "hh") + "</td>"), c.add(1, "h");
                b.empty().append(d)
            },
            Y = function() {
                for (var b = o.find(".timepicker-minutes table"), c = f.clone().startOf("h"), e = [], g = a("<tr>"), h = 1 === d.stepping ? 5 : d.stepping; f.isSame(c, "h");) c.minute() % (4 * h) === 0 && (g = a("<tr>"), e.push(g)), g.append('<td data-action="selectMinute" class="minute' + (R(c, "m") ? "" : " disabled") + '">' + c.format("mm") + "</td>"), c.add(h, "m");
                b.empty().append(e)
            },
            Z = function() {
                for (var b = o.find(".timepicker-seconds table"), c = f.clone().startOf("m"), d = [], e = a("<tr>"); f.isSame(c, "m");) c.second() % 20 === 0 && (e = a("<tr>"), d.push(e)), e.append('<td data-action="selectSecond" class="second' + (R(c, "s") ? "" : " disabled") + '">' + c.format("ss") + "</td>"), c.add(5, "s");
                b.empty().append(d)
            },
            $ = function() {
                var a, b, c = o.find(".timepicker span[data-time-component]");
                h || (a = o.find(".timepicker [data-action=togglePeriod]"), b = e.clone().add(e.hours() >= 12 ? -12 : 12, "h"), a.text(e.format("A")), R(b, "h") ? a.removeClass("disabled") : a.addClass("disabled")), c.filter("[data-time-component=hours]").text(e.format(h ? "HH" : "hh")), c.filter("[data-time-component=minutes]").text(e.format("mm")), c.filter("[data-time-component=seconds]").text(e.format("ss")), X(), Y(), Z()
            },
            _ = function() {
                o && (W(), $())
            },
            aa = function(a) {
                var b = m ? null : e;
                if (!a) return m = !0, g.val(""), c.data("date", ""), J({
                    type: "dp.change",
                    date: !1,
                    oldDate: b
                }), void _();
                if (a = a.clone().locale(d.locale), x() && a.tz(d.timeZone), 1 !== d.stepping)
                    for (a.minutes(Math.round(a.minutes() / d.stepping) * d.stepping).seconds(0); d.minDate && a.isBefore(d.minDate);) a.add(d.stepping, "minutes");
                R(a) ? (e = a, f = e.clone(), g.val(e.format(i)), c.data("date", e.format(i)), m = !1, _(), J({
                    type: "dp.change",
                    date: e.clone(),
                    oldDate: b
                })) : (d.keepInvalid ? J({
                    type: "dp.change",
                    date: a,
                    oldDate: b
                }) : g.val(m ? "" : e.format(i)), J({
                    type: "dp.error",
                    date: a,
                    oldDate: b
                }))
            },
            ba = function() {
                var b = !1;
                return o ? (o.find(".collapse").each(function() {
                    var c = a(this).data("collapse");
                    return !c || !c.transitioning || (b = !0, !1)
                }), b ? l : (n && n.hasClass("btn") && n.toggleClass("active"), o.hide(), a(window).off("resize", I), o.off("click", "[data-action]"), o.off("mousedown", !1), o.remove(), o = !1, J({
                    type: "dp.hide",
                    date: e.clone()
                }), g.blur(), f = e.clone(), l)) : l
            },
            ca = function() {
                aa(null)
            },
            da = function(a) {
                return void 0 === d.parseInputDate ? (!b.isMoment(a) || a instanceof Date) && (a = y(a)) : a = d.parseInputDate(a), a
            },
            ea = {
                next: function() {
                    var a = q[k].navFnc;
                    f.add(q[k].navStep, a), W(), K(a)
                },
                previous: function() {
                    var a = q[k].navFnc;
                    f.subtract(q[k].navStep, a), W(), K(a)
                },
                pickerSwitch: function() {
                    L(1)
                },
                selectMonth: function(b) {
                    var c = a(b.target).closest("tbody").find("span").index(a(b.target));
                    f.month(c), k === p ? (aa(e.clone().year(f.year()).month(f.month())), d.inline || ba()) : (L(-1), W()), K("M")
                },
                selectYear: function(b) {
                    var c = parseInt(a(b.target).text(), 10) || 0;
                    f.year(c), k === p ? (aa(e.clone().year(f.year())), d.inline || ba()) : (L(-1), W()), K("YYYY")
                },
                selectDecade: function(b) {
                    var c = parseInt(a(b.target).data("selection"), 10) || 0;
                    f.year(c), k === p ? (aa(e.clone().year(f.year())), d.inline || ba()) : (L(-1), W()), K("YYYY")
                },
                selectDay: function(b) {
                    var c = f.clone();
                    a(b.target).is(".old") && c.subtract(1, "M"), a(b.target).is(".new") && c.add(1, "M"), aa(c.date(parseInt(a(b.target).text(), 10))), A() || d.keepOpen || d.inline || ba()
                },
                incrementHours: function() {
                    var a = e.clone().add(1, "h");
                    R(a, "h") && aa(a)
                },
                incrementMinutes: function() {
                    var a = e.clone().add(d.stepping, "m");
                    R(a, "m") && aa(a)
                },
                incrementSeconds: function() {
                    var a = e.clone().add(1, "s");
                    R(a, "s") && aa(a)
                },
                decrementHours: function() {
                    var a = e.clone().subtract(1, "h");
                    R(a, "h") && aa(a)
                },
                decrementMinutes: function() {
                    var a = e.clone().subtract(d.stepping, "m");
                    R(a, "m") && aa(a)
                },
                decrementSeconds: function() {
                    var a = e.clone().subtract(1, "s");
                    R(a, "s") && aa(a)
                },
                togglePeriod: function() {
                    aa(e.clone().add(e.hours() >= 12 ? -12 : 12, "h"))
                },
                togglePicker: function(b) {
                    var c, e = a(b.target),
                        f = e.closest("ul"),
                        g = f.find(".in"),
                        h = f.find(".collapse:not(.in)");
                    if (g && g.length) {
                        if (c = g.data("collapse"), c && c.transitioning) return;
                        g.collapse ? (g.collapse("hide"), h.collapse("show")) : (g.removeClass("in"), h.addClass("in")), e.is("span") ? e.toggleClass(d.icons.time + " " + d.icons.date) : e.find("span").toggleClass(d.icons.time + " " + d.icons.date)
                    }
                },
                showPicker: function() {
                    o.find(".timepicker > div:not(.timepicker-picker)").hide(), o.find(".timepicker .timepicker-picker").show()
                },
                showHours: function() {
                    o.find(".timepicker .timepicker-picker").hide(), o.find(".timepicker .timepicker-hours").show()
                },
                showMinutes: function() {
                    o.find(".timepicker .timepicker-picker").hide(), o.find(".timepicker .timepicker-minutes").show()
                },
                showSeconds: function() {
                    o.find(".timepicker .timepicker-picker").hide(), o.find(".timepicker .timepicker-seconds").show()
                },
                selectHour: function(b) {
                    var c = parseInt(a(b.target).text(), 10);
                    h || (e.hours() >= 12 ? 12 !== c && (c += 12) : 12 === c && (c = 0)), aa(e.clone().hours(c)), ea.showPicker.call(l)
                },
                selectMinute: function(b) {
                    aa(e.clone().minutes(parseInt(a(b.target).text(), 10))), ea.showPicker.call(l)
                },
                selectSecond: function(b) {
                    aa(e.clone().seconds(parseInt(a(b.target).text(), 10))), ea.showPicker.call(l)
                },
                clear: ca,
                today: function() {
                    var a = y();
                    R(a, "d") && aa(a)
                },
                close: ba
            },
            fa = function(b) {
                return !a(b.currentTarget).is(".disabled") && (ea[a(b.currentTarget).data("action")].apply(l, arguments), !1)
            },
            ga = function() {
                var b, c = {
                    year: function(a) {
                        return a.month(0).date(1).hours(0).seconds(0).minutes(0)
                    },
                    month: function(a) {
                        return a.date(1).hours(0).seconds(0).minutes(0)
                    },
                    day: function(a) {
                        return a.hours(0).seconds(0).minutes(0)
                    },
                    hour: function(a) {
                        return a.seconds(0).minutes(0)
                    },
                    minute: function(a) {
                        return a.seconds(0)
                    }
                };
                return g.prop("disabled") || !d.ignoreReadonly && g.prop("readonly") || o ? l : (void 0 !== g.val() && 0 !== g.val().trim().length ? aa(da(g.val().trim())) : m && d.useCurrent && (d.inline || g.is("input") && 0 === g.val().trim().length) && (b = y(), "string" == typeof d.useCurrent && (b = c[d.useCurrent](b)), aa(b)), o = G(), M(), S(), o.find(".timepicker-hours").hide(), o.find(".timepicker-minutes").hide(), o.find(".timepicker-seconds").hide(), _(), L(), a(window).on("resize", I), o.on("click", "[data-action]", fa), o.on("mousedown", !1), n && n.hasClass("btn") && n.toggleClass("active"), I(), o.show(), d.focusOnShow && !g.is(":focus") && g.focus(), J({
                    type: "dp.show"
                }), l)
            },
            ha = function() {
                return o ? ba() : ga()
            },
            ia = function(a) {
                var b, c, e, f, g = null,
                    h = [],
                    i = {},
                    j = a.which,
                    k = "p";
                w[j] = k;
                for (b in w) w.hasOwnProperty(b) && w[b] === k && (h.push(b), parseInt(b, 10) !== j && (i[b] = !0));
                for (b in d.keyBinds)
                    if (d.keyBinds.hasOwnProperty(b) && "function" == typeof d.keyBinds[b] && (e = b.split(" "), e.length === h.length && v[j] === e[e.length - 1])) {
                        for (f = !0, c = e.length - 2; c >= 0; c--)
                            if (!(v[e[c]] in i)) {
                                f = !1;
                                break
                            }
                        if (f) {
                            g = d.keyBinds[b];
                            break
                        }
                    }
                g && (g.call(l, o), a.stopPropagation(), a.preventDefault())
            },
            ja = function(a) {
                w[a.which] = "r", a.stopPropagation(), a.preventDefault()
            },
            ka = function(b) {
                var c = a(b.target).val().trim(),
                    d = c ? da(c) : null;
                return aa(d), b.stopImmediatePropagation(), !1
            },
            la = function() {
                g.on({
                    change: ka,
                    blur: d.debug ? "" : ba,
                    keydown: ia,
                    keyup: ja,
                    focus: d.allowInputToggle ? ga : ""
                }), c.is("input") ? g.on({
                    focus: ga
                }) : n && (n.on("click", ha), n.on("mousedown", !1))
            },
            ma = function() {
                g.off({
                    change: ka,
                    blur: blur,
                    keydown: ia,
                    keyup: ja,
                    focus: d.allowInputToggle ? ba : ""
                }), c.is("input") ? g.off({
                    focus: ga
                }) : n && (n.off("click", ha), n.off("mousedown", !1))
            },
            na = function(b) {
                var c = {};
                return a.each(b, function() {
                    var a = da(this);
                    a.isValid() && (c[a.format("YYYY-MM-DD")] = !0)
                }), !!Object.keys(c).length && c
            },
            oa = function(b) {
                var c = {};
                return a.each(b, function() {
                    c[this] = !0
                }), !!Object.keys(c).length && c
            },
            pa = function() {
                var a = d.format || "L LT";
                i = a.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function(a) {
                    var b = e.localeData().longDateFormat(a) || a;
                    return b.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function(a) {
                        return e.localeData().longDateFormat(a) || a
                    })
                }), j = d.extraFormats ? d.extraFormats.slice() : [], j.indexOf(a) < 0 && j.indexOf(i) < 0 && j.push(i), h = i.toLowerCase().indexOf("a") < 1 && i.replace(/\[.*?\]/g, "").indexOf("h") < 1, z("y") && (p = 2), z("M") && (p = 1), z("d") && (p = 0), k = Math.max(p, k), m || aa(e)
            };
        if (l.destroy = function() {
                ba(), ma(), c.removeData("DateTimePicker"), c.removeData("date")
            }, l.toggle = ha, l.show = ga, l.hide = ba, l.disable = function() {
                return ba(), n && n.hasClass("btn") && n.addClass("disabled"), g.prop("disabled", !0), l
            }, l.enable = function() {
                return n && n.hasClass("btn") && n.removeClass("disabled"), g.prop("disabled", !1), l
            }, l.ignoreReadonly = function(a) {
                if (0 === arguments.length) return d.ignoreReadonly;
                if ("boolean" != typeof a) throw new TypeError("ignoreReadonly () expects a boolean parameter");
                return d.ignoreReadonly = a, l
            }, l.options = function(b) {
                if (0 === arguments.length) return a.extend(!0, {}, d);
                if (!(b instanceof Object)) throw new TypeError("options() options parameter should be an object");
                return a.extend(!0, d, b), a.each(d, function(a, b) {
                    if (void 0 === l[a]) throw new TypeError("option " + a + " is not recognized!");
                    l[a](b)
                }), l
            }, l.date = function(a) {
                if (0 === arguments.length) return m ? null : e.clone();
                if (!(null === a || "string" == typeof a || b.isMoment(a) || a instanceof Date)) throw new TypeError("date() parameter must be one of [null, string, moment or Date]");
                return aa(null === a ? null : da(a)), l
            }, l.format = function(a) {
                if (0 === arguments.length) return d.format;
                if ("string" != typeof a && ("boolean" != typeof a || a !== !1)) throw new TypeError("format() expects a string or boolean:false parameter " + a);
                return d.format = a, i && pa(), l
            }, l.timeZone = function(a) {
                if (0 === arguments.length) return d.timeZone;
                if ("string" != typeof a) throw new TypeError("newZone() expects a string parameter");
                return d.timeZone = a, l
            }, l.dayViewHeaderFormat = function(a) {
                if (0 === arguments.length) return d.dayViewHeaderFormat;
                if ("string" != typeof a) throw new TypeError("dayViewHeaderFormat() expects a string parameter");
                return d.dayViewHeaderFormat = a, l
            }, l.extraFormats = function(a) {
                if (0 === arguments.length) return d.extraFormats;
                if (a !== !1 && !(a instanceof Array)) throw new TypeError("extraFormats() expects an array or false parameter");
                return d.extraFormats = a, j && pa(), l
            }, l.disabledDates = function(b) {
                if (0 === arguments.length) return d.disabledDates ? a.extend({}, d.disabledDates) : d.disabledDates;
                if (!b) return d.disabledDates = !1, _(), l;
                if (!(b instanceof Array)) throw new TypeError("disabledDates() expects an array parameter");
                return d.disabledDates = na(b), d.enabledDates = !1, _(), l
            }, l.enabledDates = function(b) {
                if (0 === arguments.length) return d.enabledDates ? a.extend({}, d.enabledDates) : d.enabledDates;
                if (!b) return d.enabledDates = !1, _(), l;
                if (!(b instanceof Array)) throw new TypeError("enabledDates() expects an array parameter");
                return d.enabledDates = na(b), d.disabledDates = !1, _(), l
            }, l.daysOfWeekDisabled = function(a) {
                if (0 === arguments.length) return d.daysOfWeekDisabled.splice(0);
                if ("boolean" == typeof a && !a) return d.daysOfWeekDisabled = !1, _(), l;
                if (!(a instanceof Array)) throw new TypeError("daysOfWeekDisabled() expects an array parameter");
                if (d.daysOfWeekDisabled = a.reduce(function(a, b) {
                        return b = parseInt(b, 10), b > 6 || b < 0 || isNaN(b) ? a : (a.indexOf(b) === -1 && a.push(b), a)
                    }, []).sort(), d.useCurrent && !d.keepInvalid) {
                    for (var b = 0; !R(e, "d");) {
                        if (e.add(1, "d"), 31 === b) throw "Tried 31 times to find a valid date";
                        b++
                    }
                    aa(e)
                }
                return _(), l
            }, l.maxDate = function(a) {
                if (0 === arguments.length) return d.maxDate ? d.maxDate.clone() : d.maxDate;
                if ("boolean" == typeof a && a === !1) return d.maxDate = !1, _(), l;
                "string" == typeof a && ("now" !== a && "moment" !== a || (a = y()));
                var b = da(a);
                if (!b.isValid()) throw new TypeError("maxDate() Could not parse date parameter: " + a);
                if (d.minDate && b.isBefore(d.minDate)) throw new TypeError("maxDate() date parameter is before options.minDate: " + b.format(i));
                return d.maxDate = b, d.useCurrent && !d.keepInvalid && e.isAfter(a) && aa(d.maxDate), f.isAfter(b) && (f = b.clone().subtract(d.stepping, "m")), _(), l
            }, l.minDate = function(a) {
                if (0 === arguments.length) return d.minDate ? d.minDate.clone() : d.minDate;
                if ("boolean" == typeof a && a === !1) return d.minDate = !1, _(), l;
                "string" == typeof a && ("now" !== a && "moment" !== a || (a = y()));
                var b = da(a);
                if (!b.isValid()) throw new TypeError("minDate() Could not parse date parameter: " + a);
                if (d.maxDate && b.isAfter(d.maxDate)) throw new TypeError("minDate() date parameter is after options.maxDate: " + b.format(i));
                return d.minDate = b, d.useCurrent && !d.keepInvalid && e.isBefore(a) && aa(d.minDate), f.isBefore(b) && (f = b.clone().add(d.stepping, "m")), _(), l
            }, l.defaultDate = function(a) {
                if (0 === arguments.length) return d.defaultDate ? d.defaultDate.clone() : d.defaultDate;
                if (!a) return d.defaultDate = !1, l;
                "string" == typeof a && (a = "now" === a || "moment" === a ? y() : y(a));
                var b = da(a);
                if (!b.isValid()) throw new TypeError("defaultDate() Could not parse date parameter: " + a);
                if (!R(b)) throw new TypeError("defaultDate() date passed is invalid according to component setup validations");
                return d.defaultDate = b, (d.defaultDate && d.inline || "" === g.val().trim()) && aa(d.defaultDate), l
            }, l.locale = function(a) {
                if (0 === arguments.length) return d.locale;
                if (!b.localeData(a)) throw new TypeError("locale() locale " + a + " is not loaded from moment locales!");
                return d.locale = a, e.locale(d.locale), f.locale(d.locale), i && pa(), o && (ba(), ga()), l
            }, l.stepping = function(a) {
                return 0 === arguments.length ? d.stepping : (a = parseInt(a, 10), (isNaN(a) || a < 1) && (a = 1), d.stepping = a, l)
            }, l.useCurrent = function(a) {
                var b = ["year", "month", "day", "hour", "minute"];
                if (0 === arguments.length) return d.useCurrent;
                if ("boolean" != typeof a && "string" != typeof a) throw new TypeError("useCurrent() expects a boolean or string parameter");
                if ("string" == typeof a && b.indexOf(a.toLowerCase()) === -1) throw new TypeError("useCurrent() expects a string parameter of " + b.join(", "));
                return d.useCurrent = a, l
            }, l.collapse = function(a) {
                if (0 === arguments.length) return d.collapse;
                if ("boolean" != typeof a) throw new TypeError("collapse() expects a boolean parameter");
                return d.collapse === a ? l : (d.collapse = a, o && (ba(), ga()), l)
            }, l.icons = function(b) {
                if (0 === arguments.length) return a.extend({}, d.icons);
                if (!(b instanceof Object)) throw new TypeError("icons() expects parameter to be an Object");
                return a.extend(d.icons, b), o && (ba(), ga()), l
            }, l.tooltips = function(b) {
                if (0 === arguments.length) return a.extend({}, d.tooltips);
                if (!(b instanceof Object)) throw new TypeError("tooltips() expects parameter to be an Object");
                return a.extend(d.tooltips, b), o && (ba(), ga()), l
            }, l.useStrict = function(a) {
                if (0 === arguments.length) return d.useStrict;
                if ("boolean" != typeof a) throw new TypeError("useStrict() expects a boolean parameter");
                return d.useStrict = a, l
            }, l.sideBySide = function(a) {
                if (0 === arguments.length) return d.sideBySide;
                if ("boolean" != typeof a) throw new TypeError("sideBySide() expects a boolean parameter");
                return d.sideBySide = a, o && (ba(), ga()), l
            }, l.viewMode = function(a) {
                if (0 === arguments.length) return d.viewMode;
                if ("string" != typeof a) throw new TypeError("viewMode() expects a string parameter");
                if (r.indexOf(a) === -1) throw new TypeError("viewMode() parameter must be one of (" + r.join(", ") + ") value");
                return d.viewMode = a, k = Math.max(r.indexOf(a), p), L(), l
            }, l.toolbarPlacement = function(a) {
                if (0 === arguments.length) return d.toolbarPlacement;
                if ("string" != typeof a) throw new TypeError("toolbarPlacement() expects a string parameter");
                if (u.indexOf(a) === -1) throw new TypeError("toolbarPlacement() parameter must be one of (" + u.join(", ") + ") value");
                return d.toolbarPlacement = a, o && (ba(), ga()), l
            }, l.widgetPositioning = function(b) {
                if (0 === arguments.length) return a.extend({}, d.widgetPositioning);
                if ("[object Object]" !== {}.toString.call(b)) throw new TypeError("widgetPositioning() expects an object variable");
                if (b.horizontal) {
                    if ("string" != typeof b.horizontal) throw new TypeError("widgetPositioning() horizontal variable must be a string");
                    if (b.horizontal = b.horizontal.toLowerCase(), t.indexOf(b.horizontal) === -1) throw new TypeError("widgetPositioning() expects horizontal parameter to be one of (" + t.join(", ") + ")");
                    d.widgetPositioning.horizontal = b.horizontal
                }
                if (b.vertical) {
                    if ("string" != typeof b.vertical) throw new TypeError("widgetPositioning() vertical variable must be a string");
                    if (b.vertical = b.vertical.toLowerCase(), s.indexOf(b.vertical) === -1) throw new TypeError("widgetPositioning() expects vertical parameter to be one of (" + s.join(", ") + ")");
                    d.widgetPositioning.vertical = b.vertical
                }
                return _(), l
            }, l.calendarWeeks = function(a) {
                if (0 === arguments.length) return d.calendarWeeks;
                if ("boolean" != typeof a) throw new TypeError("calendarWeeks() expects parameter to be a boolean value");
                return d.calendarWeeks = a, _(), l
            }, l.showTodayButton = function(a) {
                if (0 === arguments.length) return d.showTodayButton;
                if ("boolean" != typeof a) throw new TypeError("showTodayButton() expects a boolean parameter");
                return d.showTodayButton = a, o && (ba(), ga()), l
            }, l.showClear = function(a) {
                if (0 === arguments.length) return d.showClear;
                if ("boolean" != typeof a) throw new TypeError("showClear() expects a boolean parameter");
                return d.showClear = a, o && (ba(), ga()), l
            }, l.widgetParent = function(b) {
                if (0 === arguments.length) return d.widgetParent;
                if ("string" == typeof b && (b = a(b)), null !== b && "string" != typeof b && !(b instanceof a)) throw new TypeError("widgetParent() expects a string or a jQuery object parameter");
                return d.widgetParent = b, o && (ba(), ga()), l
            }, l.keepOpen = function(a) {
                if (0 === arguments.length) return d.keepOpen;
                if ("boolean" != typeof a) throw new TypeError("keepOpen() expects a boolean parameter");
                return d.keepOpen = a, l
            }, l.focusOnShow = function(a) {
                if (0 === arguments.length) return d.focusOnShow;
                if ("boolean" != typeof a) throw new TypeError("focusOnShow() expects a boolean parameter");
                return d.focusOnShow = a, l
            }, l.inline = function(a) {
                if (0 === arguments.length) return d.inline;
                if ("boolean" != typeof a) throw new TypeError("inline() expects a boolean parameter");
                return d.inline = a, l
            }, l.clear = function() {
                return ca(), l
            }, l.keyBinds = function(a) {
                return 0 === arguments.length ? d.keyBinds : (d.keyBinds = a, l)
            }, l.getMoment = function(a) {
                return y(a)
            }, l.debug = function(a) {
                if ("boolean" != typeof a) throw new TypeError("debug() expects a boolean parameter");
                return d.debug = a, l
            }, l.allowInputToggle = function(a) {
                if (0 === arguments.length) return d.allowInputToggle;
                if ("boolean" != typeof a) throw new TypeError("allowInputToggle() expects a boolean parameter");
                return d.allowInputToggle = a, l
            }, l.showClose = function(a) {
                if (0 === arguments.length) return d.showClose;
                if ("boolean" != typeof a) throw new TypeError("showClose() expects a boolean parameter");
                return d.showClose = a, l
            }, l.keepInvalid = function(a) {
                if (0 === arguments.length) return d.keepInvalid;
                if ("boolean" != typeof a) throw new TypeError("keepInvalid() expects a boolean parameter");
                return d.keepInvalid = a, l
            }, l.datepickerInput = function(a) {
                if (0 === arguments.length) return d.datepickerInput;
                if ("string" != typeof a) throw new TypeError("datepickerInput() expects a string parameter");
                return d.datepickerInput = a, l
            }, l.parseInputDate = function(a) {
                if (0 === arguments.length) return d.parseInputDate;
                if ("function" != typeof a) throw new TypeError("parseInputDate() sholud be as function");
                return d.parseInputDate = a, l
            }, l.disabledTimeIntervals = function(b) {
                if (0 === arguments.length) return d.disabledTimeIntervals ? a.extend({}, d.disabledTimeIntervals) : d.disabledTimeIntervals;
                if (!b) return d.disabledTimeIntervals = !1, _(), l;
                if (!(b instanceof Array)) throw new TypeError("disabledTimeIntervals() expects an array parameter");
                return d.disabledTimeIntervals = b, _(), l
            }, l.disabledHours = function(b) {
                if (0 === arguments.length) return d.disabledHours ? a.extend({}, d.disabledHours) : d.disabledHours;
                if (!b) return d.disabledHours = !1, _(), l;
                if (!(b instanceof Array)) throw new TypeError("disabledHours() expects an array parameter");
                if (d.disabledHours = oa(b), d.enabledHours = !1, d.useCurrent && !d.keepInvalid) {
                    for (var c = 0; !R(e, "h");) {
                        if (e.add(1, "h"), 24 === c) throw "Tried 24 times to find a valid date";
                        c++
                    }
                    aa(e)
                }
                return _(), l
            }, l.enabledHours = function(b) {
                if (0 === arguments.length) return d.enabledHours ? a.extend({}, d.enabledHours) : d.enabledHours;
                if (!b) return d.enabledHours = !1, _(), l;
                if (!(b instanceof Array)) throw new TypeError("enabledHours() expects an array parameter");
                if (d.enabledHours = oa(b), d.disabledHours = !1, d.useCurrent && !d.keepInvalid) {
                    for (var c = 0; !R(e, "h");) {
                        if (e.add(1, "h"), 24 === c) throw "Tried 24 times to find a valid date";
                        c++
                    }
                    aa(e)
                }
                return _(), l
            }, l.viewDate = function(a) {
                if (0 === arguments.length) return f.clone();
                if (!a) return f = e.clone(), l;
                if (!("string" == typeof a || b.isMoment(a) || a instanceof Date)) throw new TypeError("viewDate() parameter must be one of [string, moment or Date]");
                return f = da(a), K(), l
            }, c.is("input")) g = c;
        else if (g = c.find(d.datepickerInput), 0 === g.length) g = c.find("input");
        else if (!g.is("input")) throw new Error('CSS class "' + d.datepickerInput + '" cannot be applied to non input element');
        if (c.hasClass("input-group") && (n = 0 === c.find(".datepickerbutton").length ? c.find(".input-group-addon") : c.find(".datepickerbutton")), !d.inline && !g.is("input")) throw new Error("Could not initialize DateTimePicker without an input element");
        return e = y(), f = e.clone(), a.extend(!0, d, H()), l.options(d), pa(), la(), g.prop("disabled") && l.disable(), g.is("input") && 0 !== g.val().trim().length ? aa(da(g.val().trim())) : d.defaultDate && void 0 === g.attr("placeholder") && aa(d.defaultDate), d.inline && ga(), l
    };
    return a.fn.datetimepicker = function(b) {
        b = b || {};
        var d, e = Array.prototype.slice.call(arguments, 1),
            f = !0,
            g = ["destroy", "hide", "show", "toggle"];
        if ("object" == typeof b) return this.each(function() {
            var d, e = a(this);
            e.data("DateTimePicker") || (d = a.extend(!0, {}, a.fn.datetimepicker.defaults, b), e.data("DateTimePicker", c(e, d)))
        });
        if ("string" == typeof b) return this.each(function() {
            var c = a(this),
                g = c.data("DateTimePicker");
            if (!g) throw new Error('bootstrap-datetimepicker("' + b + '") method was called on an element that is not using DateTimePicker');
            d = g[b].apply(g, e), f = d === g
        }), f || a.inArray(b, g) > -1 ? this : d;
        throw new TypeError("Invalid arguments for DateTimePicker: " + b)
    }, a.fn.datetimepicker.defaults = {
        timeZone: "",
        format: !1,
        dayViewHeaderFormat: "MMMM YYYY",
        extraFormats: !1,
        stepping: 1,
        minDate: !1,
        maxDate: !1,
        useCurrent: !0,
        collapse: !0,
        locale: b.locale(),
        defaultDate: !1,
        disabledDates: !1,
        enabledDates: !1,
        icons: {
            time: "glyphicon glyphicon-time",
            date: "glyphicon glyphicon-calendar",
            up: "glyphicon glyphicon-chevron-up",
            down: "glyphicon glyphicon-chevron-down",
            previous: "glyphicon glyphicon-chevron-left",
            next: "glyphicon glyphicon-chevron-right",
            today: "glyphicon glyphicon-screenshot",
            clear: "glyphicon glyphicon-trash",
            close: "glyphicon glyphicon-remove"
        },
        tooltips: {
            today: "Go to today",
            clear: "Clear selection",
            close: "Close the picker",
            selectMonth: "Select Month",
            prevMonth: "Previous Month",
            nextMonth: "Next Month",
            selectYear: "Select Year",
            prevYear: "Previous Year",
            nextYear: "Next Year",
            selectDecade: "Select Decade",
            prevDecade: "Previous Decade",
            nextDecade: "Next Decade",
            prevCentury: "Previous Century",
            nextCentury: "Next Century",
            pickHour: "Pick Hour",
            incrementHour: "Increment Hour",
            decrementHour: "Decrement Hour",
            pickMinute: "Pick Minute",
            incrementMinute: "Increment Minute",
            decrementMinute: "Decrement Minute",
            pickSecond: "Pick Second",
            incrementSecond: "Increment Second",
            decrementSecond: "Decrement Second",
            togglePeriod: "Toggle Period",
            selectTime: "Select Time"
        },
        useStrict: !1,
        sideBySide: !1,
        daysOfWeekDisabled: !1,
        calendarWeeks: !1,
        viewMode: "days",
        toolbarPlacement: "default",
        showTodayButton: !1,
        showClear: !1,
        showClose: !1,
        widgetPositioning: {
            horizontal: "auto",
            vertical: "auto"
        },
        widgetParent: null,
        ignoreReadonly: !1,
        keepOpen: !1,
        focusOnShow: !0,
        inline: !1,
        keepInvalid: !1,
        datepickerInput: ".datepickerinput",
        keyBinds: {
            up: function(a) {
                if (a) {
                    var b = this.date() || this.getMoment();
                    a.find(".datepicker").is(":visible") ? this.date(b.clone().subtract(7, "d")) : this.date(b.clone().add(this.stepping(), "m"))
                }
            },
            down: function(a) {
                if (!a) return void this.show();
                var b = this.date() || this.getMoment();
                a.find(".datepicker").is(":visible") ? this.date(b.clone().add(7, "d")) : this.date(b.clone().subtract(this.stepping(), "m"))
            },
            "control up": function(a) {
                if (a) {
                    var b = this.date() || this.getMoment();
                    a.find(".datepicker").is(":visible") ? this.date(b.clone().subtract(1, "y")) : this.date(b.clone().add(1, "h"))
                }
            },
            "control down": function(a) {
                if (a) {
                    var b = this.date() || this.getMoment();
                    a.find(".datepicker").is(":visible") ? this.date(b.clone().add(1, "y")) : this.date(b.clone().subtract(1, "h"))
                }
            },
            left: function(a) {
                if (a) {
                    var b = this.date() || this.getMoment();
                    a.find(".datepicker").is(":visible") && this.date(b.clone().subtract(1, "d"))
                }
            },
            right: function(a) {
                if (a) {
                    var b = this.date() || this.getMoment();
                    a.find(".datepicker").is(":visible") && this.date(b.clone().add(1, "d"))
                }
            },
            pageUp: function(a) {
                if (a) {
                    var b = this.date() || this.getMoment();
                    a.find(".datepicker").is(":visible") && this.date(b.clone().subtract(1, "M"))
                }
            },
            pageDown: function(a) {
                if (a) {
                    var b = this.date() || this.getMoment();
                    a.find(".datepicker").is(":visible") && this.date(b.clone().add(1, "M"))
                }
            },
            enter: function() {
                this.hide()
            },
            escape: function() {
                this.hide()
            },
            "control space": function(a) {
                a && a.find(".timepicker").is(":visible") && a.find('.btn[data-action="togglePeriod"]').click()
            },
            t: function() {
                this.date(this.getMoment())
            },
            delete: function() {
                this.clear()
            }
        },
        debug: !1,
        allowInputToggle: !1,
        disabledTimeIntervals: !1,
        disabledHours: !1,
        enabledHours: !1,
        viewDate: !1
    }, a.fn.datetimepicker
});