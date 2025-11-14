! function() {
    "use strict";
    document.getElementById("channel-name") ? .value.trim().replace(/ /g, "").toLowerCase();
    const e = /[-@\n$%/^'&₹*:!()\'\?,.\s+ ]/g;

    function t(e) {
        var t, i;
        delete e.link, t = "click", i = e, window ? .adobeDataLayer.push({
            event: t,
            eventInfo: {
                eventName: t
            },
            ...i
        })
    }! function() {
        try {
            let i = !1;
            const n = ["mousemove", "scroll", "touchstart", "keydown"];

            function c() {
                if (event && "keydown" === event.type && "Tab" !== event.key) return;
                i = !0;
                const e = document.createElement("script");
                e.src = "/etc.clientlibs/hdfcbankpws/clientlibs/clientlib-accessibilityPlugin.js", document.querySelector("body").appendChild(e);
                const t = setInterval((() => {
                    "undefined" != typeof accesibilityPlugin && (accesibilityPlugin.init(), clearInterval(t))
                }), 100);
                n.forEach((function(e) {
                    window.removeEventListener(e, c)
                }))
            }
            setTimeout((() => {
                i || n.forEach((function(e) {
                    window.addEventListener(e, c)
                }))
            }), 1e3), setTimeout((() => {
                document.querySelectorAll(".accessiblity-popup .tpaw-accordion-panel .tpaw-features") ? .forEach((function(i) {
                    i.addEventListener("click", (function() {
                        let n = i.closest(".tpaw-accordion").querySelector(".tpaw-accordion-label").textContent.trim().replace(e, "").toLowerCase(),
                            c = i.getAttribute("href") ? "link" : "button",
                            a = i.querySelector(".tpaw-features-item").textContent.trim().replace(e, "").replace(/opensinanewtab/i, "").toLowerCase();
                        ! function(e, i) {
                            try {
                                const n = e.link;
                                if (!n || "string" != typeof n.tagName) return;
                                const c = n.tagName.toLowerCase(),
                                    a = n.href || "",
                                    o = a.includes(window.location.host),
                                    r = a.includes("javascript:void(0);"),
                                    s = /\.(pdf|docx?|xlsx?|jpg|jpeg|png|gif|zip|rar|txt)$/i,
                                    l = "button" === c || "select" === c || !a || a.startsWith("#") || a.startsWith("tel:") || a.startsWith("mailto:") || r || s.test(a) || "a" === c && (!n.hasAttribute("href") || n.hasAttribute("download")),
                                    u = n ? .closest(".e-vehicle-calculator, .emi_loan_individual_page_calc, .tab_calculator");
                                if (e.link.classList.contains("compare-redirection") || a.includes("https://instaservices.hdfcbank.com/") || a.includes("https://rbikehtahai.rbi.org.in/") || l || o && a.includes("#") || u) return void t(e);
                                o || r || t(e);
                                const d = a,
                                    p = new URL(d, window.location.origin),
                                    h = new URLSearchParams(p.search);
                                if (h.has("icid")) return;
                                h.set("icid", i);
                                const f = h.toString().replace(/%3A/g, ":").replace(/%7C/g, "|"),
                                    m = p.origin + p.pathname + "?" + f + p.hash;
                                n.setAttribute("href", m), setTimeout((() => {
                                    n.setAttribute("href", d)
                                }), 1e3)
                            } catch (e) {}
                        }({
                            link: i || "",
                            linkPosition: n ? "website_organic_accessibilitymenu_" + n : "",
                            linkName: a || "",
                            linkType: c || ""
                        }, "website_organic_accessibilitymenu_" + n + ":" + c + ":" + a)
                    }))
                }))
            }), 3e3)
        } catch (a) {}
    }()
}();