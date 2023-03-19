"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[962], {
		99158: function(e, t, n) {
			n.d(t, {
				Z: function() {
					return p
				}
			});
			var a = n(85893);

			function s(e) {
				let {
					children: t,
					className: n,
					from: s,
					to: r,
					inverse: i,
					size: l
				} = e;
				return (0, a.jsx)("span", {
					className: "text-transparent bg-clip-text\n            ".concat(i ? "bg-gradient-to-l" : "bg-gradient-to-r", "\n            ").concat(s ? "".concat(s) : "from-primary", "\n            ").concat(r ? "".concat(r) : "to-text", "\n            ").concat(l ? "".concat(l) : "text-base", "\n            ").concat(n && n),
					children: t
				})
			}
			var r = n(7992),
				i = n(9941),
				l = n(41664),
				o = n.n(l),
				d = n(89583);

			function c(e) {
				let {
					path: t
				} = e;
				return (0, a.jsx)("li", {
					children: (0, a.jsxs)("div", {
						className: "flex items-center",
						children: [(0, a.jsx)(r, {
							className: "h-5 w-5 flex-shrink-0 text-text first-of-type:ml-0",
							"aria-hidden": "true"
						}), (0, a.jsx)("div", {
							className: "ml-4 text-sm text-text/80 first:ml-0 hover:text-text",
							children: t
						})]
					})
				})
			}

			function p(e) {
				let {
					title: t,
					path: n,
					description: r
				} = e;
				return (0, a.jsxs)("div", {
					className: "w-full border-b border-text px-2 pb-2 font-bold md:px-3 lg:px-5",
					children: [(0, a.jsxs)("div", {
						children: [(0, a.jsx)("nav", {
							className: "sm:hidden",
							"aria-label": "Back",
							children: n ? (0, a.jsxs)(o(), {
								href: "/",
								className: "flex items-center text-sm text-text hover:text-text/70",
								children: [(0, a.jsx)(i, {
									className: "-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-text",
									"aria-hidden": "true"
								}), "Back"]
							}) : (0, a.jsx)(o(), {
								href: "/",
								className: "flex items-center text-sm text-text hover:text-text/70",
								children: (0, a.jsx)(d.xng, {
									className: "text-2xl"
								})
							})
						}), (0, a.jsx)("nav", {
							className: "hidden sm:flex",
							"aria-label": "Breadcrumb",
							children: (0, a.jsxs)("ol", {
								role: "list",
								className: "flex items-center space-x-4",
								children: [(0, a.jsx)(o(), {
									href: "/",
									className: "flex items-center text-sm text-text hover:text-text/70",
									children: (0, a.jsx)(d.xng, {
										className: "text-2xl"
									})
								}), n && (0, a.jsx)(a.Fragment, {
									children: n.map((e, t) => (0, a.jsx)(c, {
										path: e
									}, t))
								})]
							})
						})]
					}), (0, a.jsx)("div", {
						className: "mt-4 md:flex md:items-center md:justify-between",
						children: (0, a.jsx)("div", {
							className: "min-w-0 flex-1",
							children: (0, a.jsx)(s, {
								size: "text-4xl",
								to: "to-sub",
								children: t
							})
						})
					}), (0, a.jsx)("p", {
						className: "mt-2 max-w-4xl text-sm text-text",
						children: r
					})]
				})
			}
		},
		47432: function(e, t, n) {
			n.d(t, {
				Z: function() {
					return W
				}
			});
			var a = n(85893),
				s = n(84385),
				r = n(42974),
				i = n(67294),
				l = n(44080),
				o = n(64048),
				d = n(83078);
			let c = e => {
					let {
						style: t,
						...n
					} = e, {
						account: s,
						chainId: l,
						web3: o,
						Moralis: c
					} = (0, d.Nr)(), [p, u] = (0, i.useState)({});
					return ((0, i.useEffect)(() => {
						s && l && (null == o || o.getBalance(s).then(e => {
							u({
								formatted: String(Number(c.Units.FromWei(e.toString())).toFixed(3)),
								balance: e
							})
						}).catch(e => {
							console.error(e)
						}))
					}, [s, l]), (null == p ? void 0 : p.formatted) && s) ? (0, a.jsxs)("div", {
						"data-testid": "test-native-balance",
						style: t,
						className: "font-semibold",
						...n,
						children: [p.formatted, " ", r.bu]
					}) : null
				},
				p = () => (0, a.jsxs)("svg", {
					width: "65",
					height: "40",
					viewBox: "0 0 300 185",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg",
					xmlnsXlink: "http://www.w3.org/1999/xlink",
					children: [(0, a.jsx)("title", {
						children: "WalletConnect"
					}), (0, a.jsx)("defs", {}), (0, a.jsx)("g", {
						id: "Page-1",
						stroke: "none",
						strokeWidth: "1",
						fill: "none",
						fillRule: "evenodd",
						children: (0, a.jsx)("g", {
							id: "walletconnect-logo-alt",
							fill: "#3B99FC",
							fillRule: "nonzero",
							children: (0, a.jsx)("path", {
								d: "M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z",
								id: "WalletConnect"
							})
						})
					})]
				}),
				u = () => (0, a.jsxs)("svg", {
					width: "41",
					height: "40",
					viewBox: "0 0 65 64",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: [(0, a.jsxs)("g", {
						clipPath: "url(#clip0)",
						children: [(0, a.jsx)("path", {
							d: "M32.3999 64C50.073 64 64.3999 49.6731 64.3999 32C64.3999 14.3269 50.073 0 32.3999 0C14.7268 0 0.399902 14.3269 0.399902 32C0.399902 49.6731 14.7268 64 32.3999 64Z",
							fill: "#3375BB"
						}), (0, a.jsx)("path", {
							d: "M32.6267 14C38.9508 19.2816 46.2029 18.9559 48.275 18.9559C47.8217 48.9937 44.3683 43.0373 32.6267 51.46C20.8851 43.0373 17.4533 48.9937 17 18.9559C19.0505 18.9559 26.3026 19.2816 32.6267 14Z",
							stroke: "white",
							strokeWidth: "4",
							strokeMiterlimit: "10",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						})]
					}), (0, a.jsx)("defs", {
						children: (0, a.jsx)("clipPath", {
							id: "clip0",
							children: (0, a.jsx)("rect", {
								width: "64",
								height: "64",
								fill: "white",
								transform: "translate(0.399902)"
							})
						})
					})]
				}),
				m = () => (0, a.jsxs)("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					width: "43",
					height: "40",
					fill: "none",
					viewBox: "0 0 54 50",
					children: [(0, a.jsx)("path", {
						fill: "url(#paint0_linear_11808_11417)",
						d: "M51.03.333L30.195 15.75l3.875-9.085L51.03.333z"
					}), (0, a.jsx)("path", {
						fill: "url(#paint1_linear_11808_11417)",
						d: "M51.03.333L30.195 15.75l3.875-9.085L51.03.333z"
					}), (0, a.jsx)("path", {
						fill: "url(#paint2_linear_11808_11417)",
						d: "M2.97.333l20.65 15.56-3.689-9.228L2.971.333z"
					}), (0, a.jsx)("path", {
						fill: "url(#paint3_linear_11808_11417)",
						d: "M2.97.333l20.65 15.56-3.689-9.228L2.971.333z"
					}), (0, a.jsx)("path", {
						fill: "url(#paint4_linear_11808_11417)",
						d: "M43.529 36.079l-5.544 8.468 11.87 3.269 3.401-11.552-9.727-.185z"
					}), (0, a.jsx)("path", {
						fill: "url(#paint5_linear_11808_11417)",
						d: "M43.529 36.079l-5.544 8.468 11.87 3.269 3.401-11.552-9.727-.185z"
					}), (0, a.jsx)("path", {
						fill: "url(#paint6_linear_11808_11417)",
						d: "M.767 36.264l3.38 11.552 11.85-3.269-5.524-8.468-9.706.185z"
					}), (0, a.jsx)("path", {
						fill: "url(#paint7_linear_11808_11417)",
						d: "M.767 36.264l3.38 11.552 11.85-3.269-5.524-8.468-9.706.185z"
					}), (0, a.jsx)("path", {
						fill: "url(#paint8_linear_11808_11417)",
						d: "M15.357 21.773l-3.297 4.974 11.746.535-.391-12.642-8.058 7.133z"
					}), (0, a.jsx)("path", {
						fill: "url(#paint9_linear_11808_11417)",
						d: "M15.357 21.773l-3.297 4.974 11.746.535-.391-12.642-8.058 7.133z"
					}), (0, a.jsx)("path", {
						fill: "url(#paint10_linear_11808_11417)",
						d: "M38.645 21.773l-8.182-7.277-.268 12.786 11.747-.535-3.297-4.974z"
					}), (0, a.jsx)("path", {
						fill: "#E27625",
						d: "M15.996 44.548l7.11-3.433-6.12-4.769-.99 8.202zM30.895 41.115l7.089 3.433-.969-8.202-6.12 4.769z"
					}), (0, a.jsx)("path", {
						fill: "url(#paint11_linear_11808_11417)",
						d: "M37.984 44.547l-7.09-3.432.578 4.604-.062 1.953 6.574-3.125z"
					}), (0, a.jsx)("path", {
						fill: "url(#paint12_radial_11808_11417)",
						d: "M15.996 44.547l6.595 3.125-.042-1.953.557-4.604-7.11 3.432z"
					}), (0, a.jsx)("path", {
						fill: "url(#paint13_linear_11808_11417)",
						d: "M22.714 33.303l-5.894-1.726 4.163-1.912 1.731 3.638z"
					}), (0, a.jsx)("path", {
						fill: "url(#paint14_linear_11808_11417)",
						d: "M31.29 33.303l1.73-3.638 4.184 1.912-5.915 1.726z"
					}), (0, a.jsx)("path", {
						fill: "#CC6228",
						d: "M15.996 44.547l1.03-8.468-6.553.185 5.523 8.283zM36.974 36.079l1.01 8.468 5.543-8.283-6.553-.185zM41.942 26.747l-11.747.534 1.093 6.023 1.73-3.639 4.184 1.912 4.74-4.83zM16.82 31.577l4.163-1.912 1.731 3.639 1.092-6.023-11.746-.534 4.76 4.83z"
					}), (0, a.jsx)("path", {
						fill: "#E27525",
						d: "M12.06 26.747l4.925 9.599-.165-4.769-4.76-4.83zM37.202 31.577l-.185 4.769 4.925-9.6-4.74 4.831zM23.807 27.281l-1.092 6.023 1.38 7.112.31-9.373-.598-3.762zM30.192 27.281l-.577 3.742.289 9.393 1.38-7.112-1.092-6.023z"
					}), (0, a.jsx)("path", {
						fill: "url(#paint15_linear_11808_11417)",
						d: "M31.285 33.304l-1.38 7.112.988.699 6.121-4.769.186-4.769-5.915 1.727z"
					}), (0, a.jsx)("path", {
						fill: "url(#paint16_linear_11808_11417)",
						d: "M16.82 31.577l.165 4.769 6.12 4.769.99-.7-1.38-7.111-5.895-1.727z"
					}), (0, a.jsx)("path", {
						fill: "#C0AC9D",
						d: "M31.411 47.672l.062-1.953-.536-.452h-7.872l-.516.452.042 1.953-6.595-3.124 2.308 1.89 4.678 3.228H31l4.698-3.227 2.288-1.891-6.574 3.124z"
					}), (0, a.jsx)("path", {
						fill: "url(#paint17_linear_11808_11417)",
						d: "M30.893 41.115l-.989-.699h-5.812l-.989.7-.556 4.604.515-.453h7.872l.536.453-.577-4.605z"
					}), (0, a.jsx)("path", {
						fill: "url(#paint18_linear_11808_11417)",
						d: "M51.915 16.757l1.752-8.51L51.029.333 30.894 15.236l7.75 6.537 10.942 3.186 2.411-2.816-1.05-.76 1.668-1.522-1.277-.987 1.67-1.274-1.093-.843z"
					}), (0, a.jsx)("path", {
						fill: "url(#paint19_linear_11808_11417)",
						d: "M.333 8.248l1.772 8.51-1.133.842 1.69 1.275-1.278.987 1.67 1.52-1.052.761 2.411 2.816 10.944-3.186 7.748-6.536L2.971.334.333 8.248z"
					}), (0, a.jsx)("path", {
						fill: "url(#paint20_radial_11808_11417)",
						d: "M49.588 24.959l-10.943-3.186 3.297 4.974-4.925 9.6 6.512-.083h9.727L49.588 24.96z"
					}), (0, a.jsx)("path", {
						fill: "url(#paint21_linear_11808_11417)",
						d: "M49.588 24.959l-10.943-3.186 3.297 4.974-4.925 9.6 6.512-.083h9.727L49.588 24.96z"
					}), (0, a.jsx)("path", {
						fill: "url(#paint22_radial_11808_11417)",
						d: "M15.357 21.773L4.414 24.959.767 36.264h9.706l6.512.083-4.925-9.6 3.297-4.974z"
					}), (0, a.jsx)("path", {
						fill: "url(#paint23_linear_11808_11417)",
						d: "M15.357 21.773L4.414 24.959.767 36.264h9.706l6.512.083-4.925-9.6 3.297-4.974z"
					}), (0, a.jsx)("path", {
						fill: "url(#paint24_linear_11808_11417)",
						d: "M30.198 27.282l.7-12.046 3.174-8.571H19.935l3.173 8.571.7 12.046.269 3.782.02 9.353h5.812l.02-9.353.269-3.782z"
					}), (0, a.jsxs)("defs", {
						children: [(0, a.jsxs)("linearGradient", {
							id: "paint0_linear_11808_11417",
							x1: "32.8",
							x2: "59.575",
							y1: "14.669",
							y2: "-12.527",
							gradientUnits: "userSpaceOnUse",
							children: [(0, a.jsx)("stop", {
								stopColor: "#E17726"
							}), (0, a.jsx)("stop", {
								offset: "1",
								stopColor: "#E17726",
								stopOpacity: "0"
							})]
						}), (0, a.jsxs)("linearGradient", {
							id: "paint1_linear_11808_11417",
							x1: "40.798",
							x2: "33.75",
							y1: "14.779",
							y2: "-7.92",
							gradientUnits: "userSpaceOnUse",
							children: [(0, a.jsx)("stop", {
								stopColor: "#E27625"
							}), (0, a.jsx)("stop", {
								offset: "1",
								stopColor: "#FCA15C",
								stopOpacity: "0.83"
							})]
						}), (0, a.jsxs)("linearGradient", {
							id: "paint2_linear_11808_11417",
							x1: "25.633",
							x2: "-0.72",
							y1: "15.934",
							y2: "-11.683",
							gradientUnits: "userSpaceOnUse",
							children: [(0, a.jsx)("stop", {
								stopColor: "#E27625"
							}), (0, a.jsx)("stop", {
								offset: "1",
								stopColor: "#E27625",
								stopOpacity: "0"
							})]
						}), (0, a.jsxs)("linearGradient", {
							id: "paint3_linear_11808_11417",
							x1: "13.479",
							x2: "6.258",
							y1: "14.914",
							y2: "-7.922",
							gradientUnits: "userSpaceOnUse",
							children: [(0, a.jsx)("stop", {
								stopColor: "#E27625"
							}), (0, a.jsx)("stop", {
								offset: "1",
								stopColor: "#FCA15C",
								stopOpacity: "0.83"
							})]
						}), (0, a.jsxs)("linearGradient", {
							id: "paint4_linear_11808_11417",
							x1: "35.331",
							x2: "50.304",
							y1: "36.173",
							y2: "57.52",
							gradientUnits: "userSpaceOnUse",
							children: [(0, a.jsx)("stop", {
								offset: "0.256",
								stopColor: "#E27625"
							}), (0, a.jsx)("stop", {
								offset: "1",
								stopColor: "#E27625",
								stopOpacity: "0"
							})]
						}), (0, a.jsxs)("linearGradient", {
							id: "paint5_linear_11808_11417",
							x1: "45.757",
							x2: "40.221",
							y1: "47.076",
							y2: "29.914",
							gradientUnits: "userSpaceOnUse",
							children: [(0, a.jsx)("stop", {
								stopColor: "#E27625"
							}), (0, a.jsx)("stop", {
								offset: "1",
								stopColor: "#FCA15C",
								stopOpacity: "0.83"
							})]
						}), (0, a.jsxs)("linearGradient", {
							id: "paint6_linear_11808_11417",
							x1: "17.198",
							x2: "-2.197",
							y1: "36.173",
							y2: "53.883",
							gradientUnits: "userSpaceOnUse",
							children: [(0, a.jsx)("stop", {
								offset: "0.247",
								stopColor: "#E27625"
							}), (0, a.jsx)("stop", {
								offset: "1",
								stopColor: "#E27625",
								stopOpacity: "0"
							})]
						}), (0, a.jsxs)("linearGradient", {
							id: "paint7_linear_11808_11417",
							x1: "8.517",
							x2: "2.969",
							y1: "47.076",
							y2: "29.923",
							gradientUnits: "userSpaceOnUse",
							children: [(0, a.jsx)("stop", {
								stopColor: "#E27625"
							}), (0, a.jsx)("stop", {
								offset: "1",
								stopColor: "#FCA15C",
								stopOpacity: "0.83"
							})]
						}), (0, a.jsxs)("linearGradient", {
							id: "paint8_linear_11808_11417",
							x1: "14.247",
							x2: "36.805",
							y1: "25.211",
							y2: "6.658",
							gradientUnits: "userSpaceOnUse",
							children: [(0, a.jsx)("stop", {
								stopColor: "#E27625"
							}), (0, a.jsx)("stop", {
								offset: "1",
								stopColor: "#E27625",
								stopOpacity: "0"
							})]
						}), (0, a.jsxs)("linearGradient", {
							id: "paint9_linear_11808_11417",
							x1: "18.038",
							x2: "10.382",
							y1: "26.485",
							y2: "9.535",
							gradientUnits: "userSpaceOnUse",
							children: [(0, a.jsx)("stop", {
								stopColor: "#E27625"
							}), (0, a.jsx)("stop", {
								offset: "1",
								stopColor: "#FCA15C",
								stopOpacity: "0.83"
							})]
						}), (0, a.jsxs)("linearGradient", {
							id: "paint10_linear_11808_11417",
							x1: "36.173",
							x2: "28.373",
							y1: "26.476",
							y2: "9.399",
							gradientUnits: "userSpaceOnUse",
							children: [(0, a.jsx)("stop", {
								stopColor: "#E27625"
							}), (0, a.jsx)("stop", {
								offset: "1",
								stopColor: "#FCA15C",
								stopOpacity: "0.83"
							})]
						}), (0, a.jsxs)("linearGradient", {
							id: "paint11_linear_11808_11417",
							x1: "34.439",
							x2: "42.072",
							y1: "41.115",
							y2: "58.191",
							gradientUnits: "userSpaceOnUse",
							children: [(0, a.jsx)("stop", {
								stopColor: "#D5BFB2"
							}), (0, a.jsx)("stop", {
								offset: "1",
								stopColor: "#D5BFB2",
								stopOpacity: "0"
							})]
						}), (0, a.jsxs)("radialGradient", {
							id: "paint12_radial_11808_11417",
							cx: "0",
							cy: "0",
							r: "1",
							gradientTransform: "matrix(-15.23496 29.92612 -32.44847 -16.51906 23.03 39.69)",
							gradientUnits: "userSpaceOnUse",
							children: [(0, a.jsx)("stop", {
								stopColor: "#D5BFB2"
							}), (0, a.jsx)("stop", {
								offset: "1",
								stopColor: "#D5BFB2",
								stopOpacity: "0"
							})]
						}), (0, a.jsxs)("linearGradient", {
							id: "paint13_linear_11808_11417",
							x1: "19.767",
							x2: "19.767",
							y1: "29.665",
							y2: "33.303",
							gradientUnits: "userSpaceOnUse",
							children: [(0, a.jsx)("stop", {
								stopColor: "#041836"
							}), (0, a.jsx)("stop", {
								offset: "1",
								stopColor: "#17396B"
							})]
						}), (0, a.jsxs)("linearGradient", {
							id: "paint14_linear_11808_11417",
							x1: "34.246",
							x2: "34.246",
							y1: "29.665",
							y2: "33.303",
							gradientUnits: "userSpaceOnUse",
							children: [(0, a.jsx)("stop", {
								stopColor: "#041836"
							}), (0, a.jsx)("stop", {
								offset: "1",
								stopColor: "#17396B"
							})]
						}), (0, a.jsxs)("linearGradient", {
							id: "paint15_linear_11808_11417",
							x1: "36.381",
							x2: "17.618",
							y1: "31.536",
							y2: "53.04",
							gradientUnits: "userSpaceOnUse",
							children: [(0, a.jsx)("stop", {
								offset: "0.2",
								stopColor: "#F5841F"
							}), (0, a.jsx)("stop", {
								offset: "1",
								stopColor: "#F5841F",
								stopOpacity: "0"
							})]
						}), (0, a.jsxs)("linearGradient", {
							id: "paint16_linear_11808_11417",
							x1: "16.777",
							x2: "31.746",
							y1: "31.536",
							y2: "51.142",
							gradientUnits: "userSpaceOnUse",
							children: [(0, a.jsx)("stop", {
								offset: "0.328",
								stopColor: "#F5841F"
							}), (0, a.jsx)("stop", {
								offset: "1",
								stopColor: "#F5841F",
								stopOpacity: "0"
							})]
						}), (0, a.jsxs)("linearGradient", {
							id: "paint17_linear_11808_11417",
							x1: "27.009",
							x2: "27.009",
							y1: "40.416",
							y2: "45.72",
							gradientUnits: "userSpaceOnUse",
							children: [(0, a.jsx)("stop", {
								stopColor: "#041836"
							}), (0, a.jsx)("stop", {
								offset: "1",
								stopColor: "#17396B"
							})]
						}), (0, a.jsxs)("linearGradient", {
							id: "paint18_linear_11808_11417",
							x1: "37.464",
							x2: "53.59",
							y1: "19.699",
							y2: "8.548",
							gradientUnits: "userSpaceOnUse",
							children: [(0, a.jsx)("stop", {
								stopColor: "#592B0D"
							}), (0, a.jsx)("stop", {
								offset: "1",
								stopColor: "#763E1A"
							})]
						}), (0, a.jsxs)("linearGradient", {
							id: "paint19_linear_11808_11417",
							x1: "21.511",
							x2: "1.439",
							y1: "16.268",
							y2: "5.46",
							gradientUnits: "userSpaceOnUse",
							children: [(0, a.jsx)("stop", {
								stopColor: "#592B0D"
							}), (0, a.jsx)("stop", {
								offset: "1",
								stopColor: "#763E1A"
							})]
						}), (0, a.jsxs)("radialGradient", {
							id: "paint20_radial_11808_11417",
							cx: "0",
							cy: "0",
							r: "1",
							gradientTransform: "rotate(11.689 -117.22 213.297) scale(23.489 26.1736)",
							gradientUnits: "userSpaceOnUse",
							children: [(0, a.jsx)("stop", {
								offset: "0.264",
								stopColor: "#F5841F"
							}), (0, a.jsx)("stop", {
								offset: "1",
								stopColor: "#F5841F",
								stopOpacity: "0"
							})]
						}), (0, a.jsxs)("linearGradient", {
							id: "paint21_linear_11808_11417",
							x1: "45.281",
							x2: "37.521",
							y1: "35.428",
							y2: "14.824",
							gradientUnits: "userSpaceOnUse",
							children: [(0, a.jsx)("stop", {
								stopColor: "#E27625"
							}), (0, a.jsx)("stop", {
								offset: "1",
								stopColor: "#FCA15C",
								stopOpacity: "0.83"
							})]
						}), (0, a.jsxs)("radialGradient", {
							id: "paint22_radial_11808_11417",
							cx: "0",
							cy: "0",
							r: "1",
							gradientTransform: "rotate(-159.818 12.556 16.425) scale(41.5536 46.244)",
							gradientUnits: "userSpaceOnUse",
							children: [(0, a.jsx)("stop", {
								offset: "0.3",
								stopColor: "#F5841F"
							}), (0, a.jsx)("stop", {
								offset: "0.567",
								stopColor: "#F5841F",
								stopOpacity: "0"
							})]
						}), (0, a.jsxs)("linearGradient", {
							id: "paint23_linear_11808_11417",
							x1: "9.02",
							x2: "1.253",
							y1: "35.428",
							y2: "14.831",
							gradientUnits: "userSpaceOnUse",
							children: [(0, a.jsx)("stop", {
								stopColor: "#E27625"
							}), (0, a.jsx)("stop", {
								offset: "1",
								stopColor: "#FCA15C",
								stopOpacity: "0.83"
							})]
						}), (0, a.jsxs)("linearGradient", {
							id: "paint24_linear_11808_11417",
							x1: "26.898",
							x2: "26.898",
							y1: "6.658",
							y2: "74.544",
							gradientUnits: "userSpaceOnUse",
							children: [(0, a.jsx)("stop", {
								offset: "0.268",
								stopColor: "#F5841F"
							}), (0, a.jsx)("stop", {
								offset: "1",
								stopColor: "#FFC796",
								stopOpacity: "0.89"
							})]
						})]
					})]
				});
			var x = [{
					title: "Metamask",
					icon: m,
					provider: "metamask",
					priority: 1
				}, {
					title: "WalletConnect",
					icon: p,
					provider: "walletconnect",
					priority: 2
				}, {
					title: "Trust Wallet",
					icon: u,
					provider: "metamask",
					priority: 3
				}],
				y = n(80243);
			let f = e => {
					let {
						chainId: t,
						isOpened: n = !0,
						moralisAuth: s,
						setIsOpened: r,
						signingMessage: i = "Moralis Authentication"
					} = e, {
						authenticate: l,
						isInitialized: o,
						enableWeb3: c
					} = (0, d.Nr)();
					return n ? (0, a.jsx)(a.Fragment, {
						children: (0, a.jsx)("div", {
							className: "absolute inset-0 mt-[10vh] mx-auto max-h-[100vh] h-fit w-fit max-w-[80vw] rounded-xl z-50 border border-text bg-secondary",
							children: (0, a.jsxs)("div", {
								className: "h-min p-6 sm:p-8 grid grid-cols-1",
								children: [(0, a.jsxs)("div", {
									className: "flex flex-row justify-between items-center gap-2",
									children: [(0, a.jsx)("p", {
										className: "text-xl font-bold",
										children: "Connect your wallet"
									}), (0, a.jsx)("button", {
										onClick: () => r(!n),
										children: (0, a.jsx)(y, {
											className: "h-6 w-6"
										})
									})]
								}), (0, a.jsxs)("div", {
									className: "mt-8 space-y-6 sm:mt-16 grid grid-cols-1",
									children: [(0, a.jsx)("div", {
										className: "text-center",
										children: (0, a.jsx)("p", {
											className: "text-lg font-bold text-secondary",
											children: "Choose Wallet"
										})
									}), x.map((e, n) => {
										let {
											title: d,
											icon: p,
											provider: u
										} = e;
										return (0, a.jsx)("div", {
											className: "cursor-pointer overflow-hidden rounded-xl border border-text bg-basebg text-text transition-all duration-200 hover:bg-text hover:text-basebg",
											children: (0, a.jsxs)("div", {
												className: "px-4 py-5 grid grid-cols-2",
												onClick: () => (function(e) {
													if (void 0 === window.ethereum && "metamask" == e) return alert("Please install web3 wallet first");
													let n = {
														provider: e,
														chainId: t,
														onSuccess: () => {
															window.localStorage.setItem("provider", e), r(!1)
														}
													};
													o && s ? l({
														...n,
														signingMessage: i
													}).catch(e => {
														console.error(e)
													}) : c(n).catch(e => {
														console.error(e)
													})
												})(u),
												children: [p(), (0, a.jsx)("p", {
													className: "mt-3 text-sm font-bold ",
													children: d
												})]
											})
										}, n)
									})]
								})]
							})
						})
					}) : null
				},
				h = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
					return e ? "".concat(e.slice(0, t), "...").concat(e.slice(e.length - t)) : ""
				};
			var b = n(91100),
				g = n.n(b);

			function v(e) {
				let {
					account: t
				} = e, [n, s] = (0, i.useState)(t);
				async function r() {
					let e = g().web3Library,
						n = new e.providers.JsonRpcProvider("https://rpc.ankr.com/eth");
					if (!t) return s(t);
					let a = await n.lookupAddress(t);
					if (!a) return s(t);
					s(a)
				}
				return (0, i.useEffect)(() => {
					r()
				}, [t]), (0, i.useEffect)(() => {
					s(void 0 != n ? n.length <= 15 ? n : h(n) : t && h(t))
				}, [n]), (0, a.jsx)(a.Fragment, {
					children: n
				})
			}
			let j = e => {
				let {
					chainId: t,
					moralisAuth: n = !0,
					signingMessage: s = "Moralis Authentication",
					...r
				} = e, {
					account: l,
					isAuthenticated: o,
					logout: p,
					deactivateWeb3: u,
					enableWeb3: m,
					isWeb3Enabled: x,
					isInitialized: y,
					isWeb3EnableLoading: h,
					isAuthenticating: b,
					authenticate: g,
					Moralis: j
				} = (0, d.Nr)(), [w, N] = (0, i.useState)(!1), [_, C] = (0, i.useState)("disconnected");
				async function k() {
					window.localStorage.removeItem("provider"), C("disconnected"), await u(), y && await p()
				}
				return ((0, i.useEffect)(() => {
					let e = window.localStorage.getItem("provider");
					x || h || !e || "disconnected" !== _ || (C("pending"), m({
						provider: e,
						chainId: t,
						onSuccess: () => C("only_web3")
					}).catch(e => {
						console.error(e)
					}))
				}, [x, h, _]), (0, i.useEffect)(() => {
					let e = window.localStorage.getItem("provider");
					y && !o && !b && x && n && "only_web3" === _ && g({
						provider: e,
						chainId: t,
						signingMessage: s
					}).catch(e => {
						console.error(e)
					})
				}, [o, y, x, b]), (0, i.useEffect)(() => {
					j.onAccountChanged(e => {
						e || k().catch(e => {
							console.error(e)
						})
					})
				}, []), !l || n && y && !o) ? (0, a.jsxs)("div", {
					className: " items-center flex h-10 mx-4 whitespace-nowrap",
					...r,
					children: [(0, a.jsx)("button", {
						className: "rounded-xl font-semibold bg-secondary text-primary h-full py-1 px-4 w-max transition duration-100 ease-out border-2 border-primary hover:border-primary/40",
						onClick: () => N(!0),
						children: (0, a.jsx)("span", {
							className: "font-semibold",
							children: "Connect Wallet"
						})
					}), (0, a.jsx)(f, {
						chainId: t,
						signingMessage: s,
						isOpened: w,
						moralisAuth: n,
						setIsOpened: N
					})]
				}) : (0, a.jsx)("div", {
					className: "items-center flex h-10 mx-auto whitespace-nowrap",
					"data-testid": "test-connect-button-wrap",
					...r,
					children: (0, a.jsxs)("div", {
						className: "flex items-center bg-text/80 rounded-3xl justify-center xl:p-1",
						children: [(0, a.jsx)("div", {
							className: "hidden xl:flex text-secondary",
							"data-testid": "test-connect-button-balance",
							children: (0, a.jsx)(c, {})
						}), (0, a.jsx)("div", {
							className: "flex items-center bg-primary rounded-3xl hover:cursor-pointer py-[2px] ml-1 px-1 transition duration-100 ease-out ",
							"data-testid": "test-connect-button-address",
							onClick: async () => await k(),
							children: (0, a.jsx)("span", {
								className: "font-semibold text-secondary",
								children: (0, a.jsx)(v, {
									account: l
								})
							})
						})]
					})
				})
			};

			function w() {
				for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return t.filter(Boolean).join(" ")
			}
			var N = n(25675),
				_ = n.n(N),
				C = n(41664),
				k = n.n(C),
				T = n(94440);

			function F(e) {
				let {
					item: t
				} = e, n = (0, i.useRef)(null);
				return (0, i.useEffect)(() => {
					n.current && (0, s.ZP)(n.current)
				}, [n]), (0, a.jsx)(T.p, {
					as: "div",
					className: "",
					ref: n,
					children: e => {
						let {
							open: n
						} = e;
						return (0, a.jsxs)(a.Fragment, {
							children: [(0, a.jsxs)(T.p.Button, {
								className: w(" text-primary hover:bg-primary hover:text-secondary", "group flex w-full items-center py-2 pl-2 pr-1 text-left font-semibold focus:outline-none focus:ring-0 focus:ring-neutral"),
								children: [(0, a.jsx)(t.icon, {
									className: "mr-3 h-6 w-6 flex-shrink-0 text-primary/80 group-hover:text-secondary",
									"aria-hidden": "true"
								}), (0, a.jsx)("span", {
									className: "flex-1",
									children: t.name
								}), (0, a.jsx)("svg", {
									className: w(n ? "rotate-90 text-primary" : "text-primary", "ml-3 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-secondary"),
									viewBox: "0 0 20 20",
									"aria-hidden": "true",
									children: (0, a.jsx)("path", {
										d: "M6 6L14 10L6 14V6Z",
										fill: "currentColor"
									})
								})]
							}), (0, a.jsx)(T.p.Panel, {
								className: "divide-y divide-primary/50",
								children: t.children && t.children.map(e => (0, a.jsxs)(T.p.Button, {
									as: "a",
									href: e.href,
									className: "group flex w-full items-center py-2 pl-11 pr-2 text-sm font-semibold text-primary hover:bg-primary/90 hover:text-secondary",
									children: [e.icon ? (0, a.jsx)(e.icon, {
										className: "mr-3 h-6 w-6 flex-shrink-0 text-primary/80 group-hover:text-secondary",
										"aria-hidden": "true"
									}) : null, e.name]
								}, e.name))
							})]
						})
					}
				}, t.name)
			}
			var S = n(89583),
				M = n(47516),
				U = n(90334),
				O = n(71532);
			let z = [{
				name: "Home",
				icon: U,
				current: !1,
				href: r.hB
			}, {
				name: "Dapps",
				icon: M.EXf,
				current: !1,
				children: [{
					name: "Stake",
					href: "/",
					icon: S.Dfw,
					description: ""
				}]
			}, {
				name: "Socials",
				icon: O,
				current: !1,
				children: [{
					name: "Twitter",
					href: r.x_,
					icon: S.fWC,
					description: "Follow us on Twitter!"
				}, {
					name: "Telegram",
					href: r.wK,
					icon: S.Y2X,
					description: "Join our Telegram!"
				}]
			}];

			function E() {
				var e;
				return (0, a.jsxs)("div", {
					className: "flex min-h-0 flex-1 flex-col border-r bg-basebg border-primary bg-cover bg-no-repeat",
					children: [(0, a.jsx)("div", {
						className: "mx-4 mt-4 flex flex-col flex-shrink-0 items-center justify-center border-y border-primary px-4 py-4",
						children: (0, a.jsx)(_(), {
							src: "images/logoText.png",
							alt: r.vV,
							width: 220,
							height: 96
						})
					}), (0, a.jsx)("div", {
						className: "mt-5 flex flex-grow flex-col",
						children: (0, a.jsx)("nav", {
							className: "flex-1 divide-y divide-primary/40 w-full h-fit overflow-clip",
							"aria-label": "Sidebar",
							children: z.map(t => t.children ? (0, a.jsx)(F, {
								item: t
							}, t.name) : (0, a.jsx)("div", {
								children: (0, a.jsxs)(k(), {
									href: null !== (e = t.href) && void 0 !== e ? e : "#",
									className: w(" text-primary hover:bg-primary hover:text-secondary", "group flex w-full items-center py-2 pl-2 font-semibold"),
									children: [(0, a.jsx)(t.icon, {
										className: w("text-primary group-hover:text-secondary", "mr-3 h-6 w-6 flex-shrink-0"),
										"aria-hidden": "true"
									}), t.name]
								})
							}, t.name))
						})
					}), (0, a.jsx)("div", {
						className: "flex flex-shrink-0 p-4",
						children: (0, a.jsx)("a", {
							href: "#",
							className: "group block w-full flex-shrink-0",
							children: (0, a.jsx)("div", {
								className: "flex items-center",
								children: (0, a.jsx)(j, {
									chainId: 2001
								})
							})
						})
					})]
				})
			}
			var A = n(91799);

			function B(e) {
				let {
					children: t
				} = e, [n, d] = (0, i.useState)(!1), c = (0, i.useRef)(null);
				return (0, i.useEffect)(() => {
					c.current && (0, s.ZP)(c.current)
				}, [c]), (0, a.jsxs)("div", {
					className: "h-screen w-screen ",
					children: [(0, a.jsx)(l.u.Root, {
						show: n,
						as: i.Fragment,
						children: (0, a.jsxs)(o.V, {
							as: "div",
							className: "relative z-40",
							onClose: d,
							children: [(0, a.jsx)(l.u.Child, {
								as: i.Fragment,
								enter: "transition-opacity ease-linear duration-300",
								enterFrom: "opacity-0",
								enterTo: "opacity-100",
								leave: "transition-opacity ease-linear duration-300",
								leaveFrom: "opacity-100",
								leaveTo: "opacity-0",
								children: (0, a.jsx)("div", {
									className: "fixed inset-0 bg-gray-600 bg-opacity-75"
								})
							}), (0, a.jsxs)("div", {
								className: "fixed inset-0 z-40 flex",
								children: [(0, a.jsx)(l.u.Child, {
									as: i.Fragment,
									enter: "transition ease-in-out duration-300 transform",
									enterFrom: "-translate-x-full",
									enterTo: "translate-x-0",
									leave: "transition ease-in-out duration-300 transform",
									leaveFrom: "translate-x-0",
									leaveTo: "-translate-x-full",
									children: (0, a.jsxs)(o.V.Panel, {
										className: "relative flex w-full max-w-xs flex-1 flex-col bg-white",
										children: [(0, a.jsx)(l.u.Child, {
											as: i.Fragment,
											enter: "ease-in-out duration-300",
											enterFrom: "opacity-0",
											enterTo: "opacity-100",
											leave: "ease-in-out duration-300",
											leaveFrom: "opacity-100",
											leaveTo: "opacity-0",
											children: (0, a.jsx)("div", {
												className: "absolute top-0 right-0 -mr-12 pt-2",
												children: (0, a.jsxs)("button", {
													type: "button",
													className: "ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
													onClick: () => d(!1),
													children: [(0, a.jsx)("span", {
														className: "sr-only",
														children: "Close sidebar"
													}), (0, a.jsx)(y, {
														className: "h-6 w-6 text-white",
														"aria-hidden": "true"
													})]
												})
											})
										}), (0, a.jsx)(E, {})]
									})
								}), (0, a.jsx)("div", {
									className: "w-14 flex-shrink-0"
								})]
							})]
						})
					}), (0, a.jsxs)("div", {
						className: "flex h-screen w-full overflow-y-auto",
						children: [(0, a.jsx)("div", {
							className: "hidden md:inset-y-0 md:flex md:w-64 md:flex-col z-50",
							children: (0, a.jsx)(E, {})
						}), (0, a.jsxs)("div", {
							className: "flex flex-1 flex-col overflow-y-auto scroll-smooth",
							children: [(0, a.jsxs)("div", {
								className: "sticky top-0 z-10 flex bg-cover bg-no-repeat pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden",
								children: [(0, a.jsxs)("button", {
									type: "button",
									className: "-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
									onClick: () => d(!0),
									children: [(0, a.jsx)("span", {
										className: "sr-only",
										children: "Open sidebar"
									}), (0, a.jsx)(A, {
										className: "h-6 w-6",
										"aria-hidden": "true"
									})]
								}), (0, a.jsx)(_(), {
									src: r.Xs,
									alt: r.vV,
									width: 32,
									height: 32,
									className: "my-2 mr-2"
								}), (0, a.jsx)("div", {
									className: "inset-0 top-2 self-center text-center text-lg font-bold text-text",
									children: r.vV
								})]
							}), t]
						})]
					})]
				})
			}
			var L = n(51649);
			let R = () => (new Date().getFullYear(), (0, a.jsx)("footer", {
					className: "sticky top-full flex w-full justify-center border-t bg-basebg border-neutral max-w-[100vw]",
					children: (0, a.jsxs)("div", {
						className: "grid w-full max-w-2xl grid-flow-col items-center p-4",
						children: [(0, a.jsxs)("div", {
							className: "flex flex-row font-bold items-center gap-2 text-sm",
							children: [(0, a.jsx)("img", {
								src: r.Xs,
								className: "h-8 w-8"
							}), (0, a.jsx)("p", {
								children: r.vV
							})]
						}), (0, a.jsxs)("div", {
							className: "grid grid-flow-col gap-4 md:place-self-center text-primary md:justify-self-end",
							children: [(0, a.jsx)(k(), {
								href: "/#home",
								children: (0, a.jsx)(S.xng, {
									size: 24
								})
							}), (0, a.jsx)(k(), {
								href: r.x_,
								target: "_blank",
								children: (0, a.jsx)(S.fWC, {
									size: 24
								})
							}), (0, a.jsx)(k(), {
								href: r.wK,
								target: "_blank",
								children: (0, a.jsx)(L.Olz, {
									size: 24
								})
							})]
						})]
					})
				})),
				D = e => {
				  let {
				    children: t
				  } = e;
				  return (0, a.jsx)("div", {
				    style: {
				      backgroundImage: "url('images/bg.png')",
				      backgroundSize: "cover",
				      backgroundPosition: "center",
				      backgroundRepeat: "no-repeat",
				    },
				    className: "relative z-0 flex h-screen w-full overflow-y-auto text-text",
				    children: (0, a.jsx)(B, {
				      children: (0, a.jsx)("main", {
				        className: "md:mx-auto table min-h-screen md:w-screen min-w-[50vw] max-w-3xl shadow shadow-black bg-sub/10 flex-col items-center pt-2 sm:w-full xl:min-w-[0]",
				        children: (0, a.jsxs)("div", {
				          className: "table-row",
				          children: [t, (0, a.jsx)(R, {})]
				        })
				      })
				    })
				  });
				};
			var W = D
		},
		42974: function(e, t, n) {
			n.d(t, {
				Bv: function() {
					return r
				},
				KU: function() {
					return m
				},
				Tv: function() {
					return y
				},
				Xs: function() {
					return c
				},
				_g: function() {
					return s
				},
				bu: function() {
					return i
				},
				hB: function() {
					return l
				},
				tS: function() {
					return x
				},
				vA: function() {
					return u
				},
				vV: function() {
					return p
				},
				wK: function() {
					return d
				},
				x_: function() {
					return o
				},
				yU: function() {
					return a
				}
			});
			let a = "https://bscscan.com/",
				s = "Bscscan",
				r = 56,
				i = "BNB",
				l = "https://twogeceo.com/",
				o = "https://twitter.com/Twoge_Ceo",
				d = "https://t.me/twogeceo",
				c = "images/Logo.png",
				p = "Twoge CEO",
				u = "Twoge CEO",
				m = "TWOGECEO ",
				x = 9,
				y = "0xA59e9A03Ca703E2Ae244cb3Ae0796bD76C2cEcAa"
		},
		10579: function(e, t, n) {
			n.d(t, {
				Z: function() {
					return W
				}
			});
			var a = n(85893),
				s = n(67294),
				r = n(94440),
				i = n(83078),
				l = n(91100),
				o = n.n(l),
				d = JSON.parse('[{"inputs":[{"internalType":"address","name":"_rewardsToken","type":"address"},{"internalType":"address","name":"_stakingToken","type":"address"},{"internalType":"uint256","name":"_rewardsDuration","type":"uint256"},{"internalType":"uint256","name":"_stakingTokensDecimal","type":"uint256"},{"internalType":"bool","name":"_locked","type":"bool"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Compounded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Recovered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newDuration","type":"uint256"}],"name":"RewardsDurationUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"MAX_UNSTAKE_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PoolInfo","outputs":[{"internalType":"uint256","name":"_periodFinish","type":"uint256"},{"internalType":"uint256","name":"_rewardRate","type":"uint256"},{"internalType":"uint256","name":"_rewardsDuration","type":"uint256"},{"internalType":"uint256","name":"_lastUpdateTime","type":"uint256"},{"internalType":"uint256","name":"_rewardPerToken","type":"uint256"},{"internalType":"uint256","name":"_getRewardForDuration","type":"uint256"},{"internalType":"uint256","name":"_lockDuration","type":"uint256"},{"internalType":"uint256","name":"_earlyUnstakeFee","type":"uint256"},{"internalType":"uint256","name":"_totSupply","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"UserInfo","outputs":[{"internalType":"uint256","name":"_balanceOf","type":"uint256"},{"internalType":"uint256","name":"_earned","type":"uint256"},{"internalType":"uint256","name":"_rewards","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"compound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"earlyUnstakeFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"exit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getRewardForDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"locked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"manualUnlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"a","type":"uint256"},{"internalType":"uint256","name":"b","type":"uint256"}],"name":"min","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"name":"notifyRewardAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"periodFinish","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"n","type":"uint256"},{"internalType":"uint256","name":"e","type":"uint256"}],"name":"pow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"recoverERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_earlyUnstakeFee","type":"uint256"}],"name":"setEarlyUnstakeFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardsDuration","type":"uint256"}],"name":"setRewardsDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakeAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakingToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakingTokensDecimalRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userRewardPerTokenPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),
				c = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'),
				p = n(42974);

			function u(e) {
				let t = parseInt(null != e ? e : "").toString();
				return t === p.Bv.toString()
			}
			var m = n(7992);

			function x(e) {
				let {
					size: t = "16px",
					stroke: n = "#FFFFFF",
					...s
				} = e;
				return (0, a.jsx)("svg", {
					className: "animate-spin-slow",
					style: {
						height: t,
						width: t
					},
					viewBox: "0 0 24 24",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					...s,
					children: (0, a.jsx)("path", {
						d: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",
						strokeWidth: "2.5",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						stroke: n
					})
				})
			}
			n(51857);
			let y = {
					ball: "w-8 h-8",
					transition: "w-fit h-fit",
					xs: "px-2 h-[28px] !border",
					sm: "px-3 h-[36px]",
					md: "px-4 h-[52px]",
					lg: "px-6 h-[60px]"
				},
				f = {
					ball: "text-xs rounded-full",
					transition: "text-sm rounded",
					xs: "text-xs rounded-full",
					sm: "text-sm rounded-full",
					md: "rounded",
					lg: "text-lg rounded"
				},
				h = {
					outlined: {
						default: "border-2 disabled:pointer-events-none disabled:opacity-40",
						blue: "border-none bg-blue/20 hover:bg-blue/40 active:bg-blue/60 text-blue focus:bg-blue/40",
						red: "border-none bg-red/20 hover:bg-red/40 active:bg-red/60 text-red focus:bg-red/40",
						secondary: "border-none bg-secondary/20 hover:bg-secondary/40 active:bg-secondary/60 text-secondary focus:bg-secondary/40",
						pink: "border-none bg-pink/20 hover:bg-pink/40 active:bg-pink/60 text-pink focus:bg-pink/40",
						primary: "border-none bg-primary/20 hover:bg-primary/40 active:bg-primary/60 text-primary focus:bg-primary/40",
						purple: "border-none bg-purple/20 hover:bg-purple/40 active:bg-purple/60 text-purple focus:bg-purple/40",
						gradient: "border-none bg-purple/20 hover:bg-purple/40 active:bg-purple/60 text-purple focus:bg-purple/40",
						gray: "border-dark-700 hover:bg-dark-700/30 active:bg-dark-700/50 focus:bg-dark-700/30",
						text: "border-text hover:bg-text/30 active:bg-text/50 focus:bg-text/30 text-text"
					},
					filled: {
						default: "text-higher-emphesis hover:bg-gradient-to-b hover:from-black/20 focus:to-black/20 focus:bg-gradient-to-b focus:from-black/20 hover:to-black/20 active:bg-gradient-to-b active:from-black/40 active:to-black/40 disabled:pointer-events-none disabled:opacity-40",
						blue: "bg-blue border-blue",
						red: "bg-red",
						primary: "border-2 bg-primary border-text text-text hover:text-primary hover:bg-text hover:border-primary focus:text-primary focus:bg-text focus:border-primary active:text-primary active:bg-text active:border-primary",
						secondary: "border-2 bg-secondary border-text text-text hover:text-secondary hover:border-secondary focus:text-secondary hover:bg-text focus:bg-text focus:border-secondary active:text-secondary active:bg-text active:border-secondary",
						neutral: "border-2 bg-neutral border-text text-text hover:text-neutral  hover:bg-text hover:border-neutral focus:text-neutral focus:bg-text focus:border-neutral active:text-neutral active:bg-text active:border-neutral",
						info: "border-2 bg-info border-accent text-accent hover:text-info  hover:bg-text hover:bg-accent hover:border-info focus:text-info focus:bg-accent focus:border-info active:text-info active:bg-accent active:border-info",
						pink: "bg-pink",
						purple: "bg-purple",
						machine: "bg-slate-800 border border-slate-300 hover:bg-slate-300 hover:border-slate-800 focus:bg-slate-300 focus:border-slate-800 active:bg-slate-300 active:border-slate-800",
						gradient: "!bg-gradient-to-r from-blue to-pink-600 hover:from-blue/80 hover:to-pink-600/80 focus:from-blue/80 focus:to-pink-600/80 active:from-blue/70 active:to-pink-600/70 focus:border-blue-700",
						gray: "bg-dark-700",
						text: "border-2 bg-text border-text text-primary hover:text-text hover:bg-primary hover:border-text active:text-text active:bg-primary active:border-text"
					},
					empty: {
						default: "bg-transparent hover:brightness-[90%] focus:brightness-[90%] active:brightness-[80%] disabled:pointer-events-none disabled:opacity-40",
						blue: "text-blue",
						red: "text-red",
						secondary: "text-secondary",
						pink: "text-pink",
						primary: "text-primary",
						purple: "text-purple",
						gray: "text-higher-emphesis",
						text: "text-text",
						gradient: "!bg-gradient-to-r from-blue to-pink-600 hover:from-blue/80 hover:to-pink-600/80 focus:from-blue/80 focus:to-pink-600/80 active:from-blue/70 active:to-pink-600/70"
					}
				},
				b = s.forwardRef((e, t) => {
					let {
						children: n,
						className: s = "",
						color: r = "primary",
						size: i = "md",
						variant: l = "filled",
						square: o = !1,
						startIcon: d,
						endIcon: c,
						fullWidth: p = !1,
						loading: u,
						disabled: m,
						...b
					} = e;
					return (0, a.jsx)("button", {
						...b,
						ref: t,
						disabled: m || u,
						className: function() {
							for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
							return t.filter(Boolean).join(" ")
						}(h[l].default, h[l][r], f[i], "empty" !== l ? y[i] : "", p ? "w-full" : "", o ? "rounded-none" : "", "font-bold flex items-center justify-center gap-1 duration-300 active:scale-95", s),
						children: u ? (0, a.jsx)(x, {
							stroke: "currentColor"
						}) : (0, a.jsxs)(a.Fragment, {
							children: [d && d, n, c && c]
						})
					})
				});
			var g = n(86501),
				v = n(44080),
				j = n(41664),
				w = n.n(j);

			function N(e) {
				let {
					success: t,
					duration: n,
					title: s,
					message: r,
					txHash: i,
					t: l
				} = e, o = i ? "".concat(p.yU, "/tx/").concat(i) : void 0, d = i ? "View on ".concat(p._g) : void 0;
				return setTimeout(() => {
					g.Am.dismiss(l.id)
				}, n), (0, a.jsxs)(v.u, {
					show: l.visible,
					enter: "transform ease-out duration-300 transition",
					enterFrom: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
					enterTo: "translate-y-0 opacity-100 sm:translate-x-0",
					leave: "transition ease-in duration-100",
					leaveFrom: "opacity-100",
					leaveTo: "opacity-0",
					className: "pointer-events-auto flex w-full max-w-md rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5",
					children: [(0, a.jsx)("div", {
						className: "w-0 flex-1 p-4",
						children: (0, a.jsxs)("div", {
							className: "flex items-start",
							children: [(0, a.jsx)("div", {
								className: "flex-shrink-0 pt-0.5",
								children: t ? "✅" : "❌"
							}), (0, a.jsxs)("div", {
								className: "ml-3 flex-1",
								children: [(0, a.jsx)("p", {
									className: "text-sm font-medium text-gray-900",
									children: s
								}), (0, a.jsx)("p", {
									className: "mt-1 text-sm text-gray-500",
									children: r
								}), o && (0, a.jsx)(w(), {
									href: o,
									target: "_blank",
									className: "text-center text-sm text-gray-500",
									children: d
								})]
							})]
						})
					}), (0, a.jsx)("div", {
						className: "flex border-l border-gray-200",
						children: (0, a.jsx)("button", {
							onClick: () => g.Am.dismiss(l.id),
							className: "flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500",
							children: "Close"
						})
					})]
				})
			}

			function _(e) {
				let {
					txHash: t,
					success: n,
					title: s,
					message: r
				} = e, i = n ? 5e3 : 1e4;
				g.Am.custom(e => (0, a.jsx)(N, {
					t: e,
					success: n,
					duration: i,
					title: s,
					message: r,
					txHash: t
				}))
			}

			function C(e) {
				let {
					children: t,
					className: n,
					reverse: s
				} = e;
				return (0, a.jsx)("div", {
					className: "".concat(n, " w-full h-full bg-gradient-to-l from-primary to-primary bg-no-repeat duration-300 bg-[length:0%] hover:bg-[length:100%] active:bg-[length:100%] ").concat(s ? "bg-right" : "bg-left"),
					children: t
				})
			}
			let k = e => {
					let {
						disabled: t,
						UpdateUI: n,
						stakeAddress: r
					} = e, [i, l] = (0, s.useState)(!1);
					async function d() {
						l(!0);
						let e = o().web3Library,
							t = await o().enableWeb3(),
							a = t.getSigner(),
							s = new e.Contract(p.Tv, c, a);
						try {
							await s.approve(r, "9999999999999999999999999999999999").then(() => {
								_({
									success: !0,
									title: "Success",
									message: "Approved ".concat(p.KU, " for staking")
								})
							})
						} catch (e) {
							l(!1), _({
								success: !1,
								title: "Approval failed",
								message: ""
							});
							return
						}
						l(!1), n && n()
					}
					return (0, a.jsx)(a.Fragment, {
						children: (0, a.jsx)(b, {
							onClick: d,
							disabled: t,
							color: "secondary",
							fullWidth: !0,
							size: "transition",
							loading: i,
							children: (0, a.jsx)(C, {
								className: "p-3",
								children: "Approve"
							})
						})
					})
				},
				T = e => {
					let {
						disabled: t,
						UpdateUI: n,
						stakeAddress: r
					} = e, [i, l] = (0, s.useState)(!1);
					async function c() {
						l(!0);
						let e = o().web3Library,
							t = await o().enableWeb3(),
							a = t.getSigner(),
							s = new e.Contract(r, d, a);
						try {
							await s.getReward().then(() => {
								_({
									success: !0,
									title: "Success",
									message: "Claimed Your Rewards"
								})
							})
						} catch (e) {
							l(!1), _({
								success: !1,
								title: "Claim failed",
								message: ""
							});
							return
						}
						l(!1), n && n()
					}
					return (0, a.jsx)(a.Fragment, {
						children: (0, a.jsx)(b, {
							onClick: c,
							disabled: t,
							color: "secondary",
							fullWidth: !0,
							size: "transition",
							loading: i,
							children: (0, a.jsx)(C, {
								className: "p-3",
								children: "Claim"
							})
						})
					})
				};
			var F = n(64048),
				S = n(96110);
			let M = e => {
				let {
					disabled: t,
					UpdateUI: n,
					amountToStake: r,
					stakeAddress: i
				} = e, [l, c] = (0, s.useState)(!1);
				async function u() {
					c(!0);
					let e = o().web3Library,
						t = await o().enableWeb3(),
						a = t.getSigner(),
						s = new e.Contract(i, d, a),
						l = (0, S.vz)((r - 1).toString(), p.tS);
					console.log("amount to stake: ", l);
					try {
						await s.stake(l).then(() => {
							_({
								success: !0,
								title: "Success",
								message: "Staked ".concat(r, " tokens")
							})
						})
					} catch (e) {
						c(!1), _({
							success: !1,
							title: "Stake failed",
							message: ""
						});
						return
					}
					c(!1), n && n()
				}
				return (0, a.jsx)(a.Fragment, {
					children: (0, a.jsx)(b, {
						onClick: u,
						disabled: t,
						color: "secondary",
						fullWidth: !0,
						size: "transition",
						loading: l,
						children: (0, a.jsx)(C, {
							className: "p-3",
							children: "Stake"
						})
					})
				})
			};

			function U(e) {
				let {
					stakeAddress: t,
					amountToStake: n,
					setAmountToStake: r,
					SetMax: i,
					open: l,
					setOpen: o,
					walletBalance: d
				} = e, c = (0, s.useRef)(null), [u, m] = (0, s.useState)(!0);
				return (0, a.jsx)(v.u.Root, {
					show: l,
					as: s.Fragment,
					children: (0, a.jsxs)(F.V, {
						as: "div",
						className: "relative z-10",
						initialFocus: c,
						onClose: o,
						children: [(0, a.jsx)(v.u.Child, {
							as: s.Fragment,
							enter: "ease-out duration-300",
							enterFrom: "opacity-0",
							enterTo: "opacity-100",
							leave: "ease-in duration-200",
							leaveFrom: "opacity-100",
							leaveTo: "opacity-0",
							children: (0, a.jsx)("div", {
								className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
							})
						}), (0, a.jsx)("div", {
							className: "fixed inset-0 z-10 overflow-y-auto",
							children: (0, a.jsx)("div", {
								className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",
								children: (0, a.jsx)(v.u.Child, {
									as: s.Fragment,
									enter: "ease-out duration-300",
									enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
									enterTo: "opacity-100 translate-y-0 sm:scale-100",
									leave: "ease-in duration-200",
									leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
									leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
									children: (0, a.jsxs)(F.V.Panel, {
										className: "relative transform overflow-hidden rounded-lg bg-secondary px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6",
										children: [(0, a.jsxs)("div", {
											children: [(0, a.jsx)("div", {
												className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full",
												children: (0, a.jsx)("img", {
													src: p.Xs,
													alt: "logo",
													className: "h-10 w-10"
												})
											}), (0, a.jsxs)("div", {
												className: "mt-3 text-center sm:mt-5",
												children: [(0, a.jsxs)(F.V.Title, {
													as: "h3",
													className: "text-lg font-medium leading-6 text-text",
													children: ["Stake ", p.vA]
												}), (0, a.jsx)("div", {
													className: "mt-2",
													children: (0, a.jsxs)(a.Fragment, {
														children: [(0, a.jsxs)("div", {
															className: "my-2 grid grid-flow-col",
															children: [(0, a.jsx)("input", {
																type: "number",
																className: "w-full rounded-l border-text bg-primary text-text",
																value: n,
																onChange: e => {
																	r(Number(e.target.value) || 0)
																},
																"aria-label": "Amount to stake"
															}), (0, a.jsx)(b, {
																variant: "filled",
																color: "text",
																square: !0,
																onClick: i,
																className: "h-full rounded-r border-l-0 border-text",
																children: "Max"
															})]
														}), (0, a.jsxs)("div", {
															className: "text-xs text-text",
															children: ["Balance:", " ", Intl.NumberFormat("en-US", {
																notation: "compact"
															}).format(d / 10 ** p.tS)]
														})]
													})
												})]
											})]
										}), (0, a.jsxs)("div", {
											className: "mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3",
											children: [(0, a.jsx)(M, {
												stakeAddress: t,
												amountToStake: n
											}), (0, a.jsx)(b, {
												color: "primary",
												fullWidth: !0,
												className: "text-text",
												square: !0,
												onClick: () => o(!1),
												ref: c,
												children: "Cancel"
											})]
										})]
									})
								})
							})
						})]
					})
				})
			}
			let O = e => {
					let {
						disabled: t,
						UpdateUI: n,
						amountToUnstake: r,
						stakeAddress: i
					} = e, [l, c] = (0, s.useState)(!1);
					async function u() {
						c(!0);
						let e = o().web3Library,
							t = await o().enableWeb3(),
							a = t.getSigner(),
							s = new e.Contract(i, d, a),
							l = (0, S.vz)((r - 1).toString(), p.tS);
						try {
							await s.withdraw(l).then(() => {
								_({
									success: !0,
									title: "Success",
									message: "Withdrew ".concat(r, " tokens")
								})
							})
						} catch (e) {
							c(!1), _({
								success: !1,
								title: "Unstake failed",
								message: ""
							});
							return
						}
						c(!1), n && n()
					}
					return (0, a.jsx)(a.Fragment, {
						children: (0, a.jsx)(b, {
							onClick: u,
							disabled: t,
							color: "secondary",
							fullWidth: !0,
							size: "transition",
							loading: l,
							children: (0, a.jsx)(C, {
								className: "p-3",
								children: "Unstake"
							})
						})
					})
				},
				z = e => {
					let {
						disabled: t,
						UpdateUI: n,
						amountToUnstake: r,
						stakeAddress: i
					} = e, [l, c] = (0, s.useState)(!1);
					async function u() {
						c(!0);
						let e = o().web3Library,
							t = await o().enableWeb3(),
							a = t.getSigner(),
							s = new e.Contract(i, d, a),
							l = (0, S.vz)((r - 1).toString(), p.tS);
						try {
							await s.emergencyWithdraw(l).then(() => {
								_({
									success: !0,
									title: "Success",
									message: "Withdrew ".concat(r, " tokens")
								})
							})
						} catch (e) {
							c(!1), _({
								success: !1,
								title: "Unstake failed",
								message: ""
							});
							return
						}
						c(!1), n && n()
					}
					return (0, a.jsx)(a.Fragment, {
						children: (0, a.jsx)(b, {
							onClick: u,
							disabled: t,
							color: "secondary",
							fullWidth: !0,
							size: "transition",
							loading: l,
							children: (0, a.jsx)(C, {
								className: "p-3",
								children: "Early Unstake"
							})
						})
					})
				};

			function E(e) {
				let {
					stakeAddress: t,
					amountToUnstake: n,
					setAmountToUnstake: r,
					SetMax: i,
					open: l,
					setOpen: o,
					balanceOf: d,
					isEarly: c
				} = e, u = (0, s.useRef)(null), [m, x] = (0, s.useState)(!0);
				return (0, a.jsx)(v.u.Root, {
					show: l,
					as: s.Fragment,
					children: (0, a.jsxs)(F.V, {
						as: "div",
						className: "relative z-10",
						initialFocus: u,
						onClose: o,
						children: [(0, a.jsx)(v.u.Child, {
							as: s.Fragment,
							enter: "ease-out duration-300",
							enterFrom: "opacity-0",
							enterTo: "opacity-100",
							leave: "ease-in duration-200",
							leaveFrom: "opacity-100",
							leaveTo: "opacity-0",
							children: (0, a.jsx)("div", {
								className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
							})
						}), (0, a.jsx)("div", {
							className: "fixed inset-0 z-10 overflow-y-auto",
							children: (0, a.jsx)("div", {
								className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",
								children: (0, a.jsx)(v.u.Child, {
									as: s.Fragment,
									enter: "ease-out duration-300",
									enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
									enterTo: "opacity-100 translate-y-0 sm:scale-100",
									leave: "ease-in duration-200",
									leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
									leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
									children: (0, a.jsxs)(F.V.Panel, {
										className: "relative transform overflow-hidden rounded-lg bg-secondary px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6",
										children: [(0, a.jsxs)("div", {
											children: [(0, a.jsx)("div", {
												className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full",
												children: (0, a.jsx)("img", {
													src: p.Xs,
													alt: "logo",
													className: "h-10 w-10"
												})
											}), (0, a.jsxs)("div", {
												className: "mt-3 text-center sm:mt-5",
												children: [(0, a.jsxs)(F.V.Title, {
													as: "h3",
													className: "text-lg font-medium leading-6 text-text",
													children: ["Unstake ", p.vA]
												}), (0, a.jsx)("div", {
													className: "mt-2",
													children: (0, a.jsxs)(a.Fragment, {
														children: [(0, a.jsxs)("div", {
															className: "my-2 grid grid-flow-col",
															children: [(0, a.jsx)("input", {
																type: "number",
																className: "w-full rounded-l border-text bg-primary text-text",
																value: n,
																onChange: e => {
																	r(Number(e.target.value) || 0)
																},
																"aria-label": "Amount to Unstake"
															}), (0, a.jsx)(b, {
																variant: "filled",
																color: "text",
																square: !0,
																onClick: i,
																className: "h-full rounded-r border-l-0 border-text",
																children: "Max"
															})]
														}), (0, a.jsxs)("div", {
															className: "text-xs text-text",
															children: ["Balance:", " ", Intl.NumberFormat("en-US", {
																notation: "compact"
															}).format(d / 10 ** p.tS)]
														})]
													})
												})]
											})]
										}), (0, a.jsxs)("div", {
											className: "mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3",
											children: [c ? (0, a.jsx)(z, {
												stakeAddress: t,
												amountToUnstake: n
											}) : (0, a.jsx)(O, {
												stakeAddress: t,
												amountToUnstake: n
											}), (0, a.jsx)(b, {
												color: "primary",
												fullWidth: !0,
												className: "text-text",
												square: !0,
												onClick: () => o(!1),
												ref: u,
												children: "Cancel"
											})]
										})]
									})
								})
							})
						})]
					})
				})
			}

			function A(e) {
				let {
					userStakeInfo: t,
					poolInfo: n,
					stakeAddress: r
				} = e, [i, l] = (0, s.useState)(0), [o, d] = (0, s.useState)(0), [c, u] = (0, s.useState)(!1), [m, x] = (0, s.useState)(!1), [y, f] = (0, s.useState)(!1), [h, g] = (0, s.useState)(!0);
				async function v() {
					let e = t.allowance;
					e > "99999999999999999999999999999999" && f(!0)
				}
				return (0, s.useEffect)(() => {
					n.periodFinish > new Date().getTime() / 1e3 ? g(!0) : g(!1)
				}, [n]), (0, s.useEffect)(() => {
					v()
				}, [t]), (0, a.jsxs)("div", {
					className: "grid w-full grid-cols-1 divide-y divide-text/20",
					children: [(0, a.jsxs)("div", {
						className: "grid grid-cols-2 p-2 py-4 ",
						children: [(0, a.jsxs)("div", {
							className: "flex flex-col items-center justify-center gap-3",
							children: [(0, a.jsxs)("p", {
								className: "whitespace-nowrap text-sm text-text/80",
								children: [(0, a.jsx)("span", {
									className: "font-bold",
									children: p.KU
								}), " Earned"]
							}), (0, a.jsx)("p", {
								className: "font-bold",
								children: Intl.NumberFormat("en-US", {
									notation: "compact"
								}).format(t.earned / 10 ** p.tS)
							})]
						}), (0, a.jsx)(T, {
							stakeAddress: r
						})]
					}), (0, a.jsx)("div", {
						className: "grid grid-cols-1 p-2 py-4 ",
						children: y ? (0, a.jsxs)(a.Fragment, {
							children: [(0, a.jsx)(b, {
								color: "secondary",
								onClick: () => u(!0),
								children: "Stake"
							}), (0, a.jsx)(U, {
								stakeAddress: r,
								amountToStake: i,
								setAmountToStake: l,
								SetMax: function() {
									l(t.walletBalance / 10 ** p.tS)
								},
								open: c,
								setOpen: u,
								walletBalance: t.walletBalance
							})]
						}) : (0, a.jsx)(k, {
							stakeAddress: r,
							UpdateUI: v
						})
					}), (0, a.jsxs)("div", {
						className: "grid grid-cols-1 p-2 py-4 ",
						children: [(0, a.jsxs)("div", {
							className: "mb-2 flex flex-col items-center justify-center gap-3",
							children: [(0, a.jsxs)("p", {
								className: "whitespace-nowrap text-sm text-text/80",
								children: [(0, a.jsx)("span", {
									className: "font-bold",
									children: p.KU
								}), " Staked Balance"]
							}), (0, a.jsx)("p", {
								className: "font-bold",
								children: Intl.NumberFormat("en-US", {
									notation: "compact"
								}).format(t.balanceOf / 10 ** p.tS)
							})]
						}), n.earlyUnstakeFee > 0 && h && (0, a.jsx)("div", {
							className: "mb-2 flex flex-col items-center justify-center gap-3",
							children: (0, a.jsxs)("p", {
								className: "whitespace-nowrap text-sm text-red-600/80",
								children: [Number(n.earlyUnstakeFee / 100), "% Early Fee"]
							})
						}), (0, a.jsx)(b, {
							color: "secondary",
							onClick: () => x(!0),
							children: "Unstake"
						}), (0, a.jsx)(E, {
							stakeAddress: r,
							amountToUnstake: o,
							setAmountToUnstake: d,
							SetMax: function() {
								d(t.balanceOf / 10 ** p.tS)
							},
							open: m,
							setOpen: x,
							balanceOf: t.balanceOf,
							isEarly: h
						})]
					})]
				})
			}
			var B = n(84385);

			function L(e) {
				let {
					stakeAddress: t,
					poolName: n
				} = e, l = (0, s.useRef)(null);
				(0, s.useEffect)(() => {
					l.current && (0, B.ZP)(l.current)
				}, [l]);
				let [x, y] = (0, s.useState)(0), [f, h] = (0, s.useState)({
					balanceOf: 0,
					earned: 0,
					rewards: 0,
					walletBalance: 0,
					allowance: 0
				}), [b, g] = (0, s.useState)({
					periodFinish: 0,
					rewardRate: 0,
					rewardsDuration: 0,
					lastUpdateTime: 0,
					rewardPerToken: 0,
					getRewardForDuration: 0,
					lockDuration: 0,
					earlyUnstakeFee: 0,
					totSupply: 0,
					timer: 0
				});
				return ! function(e) {
					let {
						stakeAddress: t,
						setUserStakeInfo: n
					} = e, {
						isWeb3Enabled: a,
						account: r,
						chainId: l
					} = (0, i.Nr)(), m = u(l);
					async function x() {
						let e;
						let s = o().web3Library;
						e = a && m ? new s.providers.Web3Provider(o().provider) : new s.providers.JsonRpcProvider("https://bsc-dataseed.binance.org/");
						let i = new s.Contract(t, d, e),
							l = new s.Contract(p.Tv, c, e),
							u = await l.balanceOf(r),
							x = await l.allowance(r, t),
							y = await i.UserInfo(r),
							[f, h, b] = y;
						n({
							balanceOf: Number(f),
							earned: Number(h),
							rewards: Number(b),
							walletBalance: Number(u),
							allowance: Number(x)
						})
					}(0, s.useEffect)(() => {
						a && m && r && x()
					}, [a, m, r])
				}({
					stakeAddress: t,
					setUserStakeInfo: h
				}), ! function(e) {
					let {
						stakeAddress: t,
						setPoolInfo: n
					} = e, {
						isWeb3Enabled: a,
						account: r,
						chainId: l
					} = (0, i.Nr)(), c = u(l);
					async function p() {
						let e;
						let s = o().web3Library;
						e = a && c ? new s.providers.Web3Provider(o().provider) : new s.providers.JsonRpcProvider("https://bsc-dataseed.binance.org/");
						let r = new s.Contract(t, d, e),
							i = await r.PoolInfo(),
							[l, p, u, m, x, y, f, h, b] = i,
							g = l - Math.floor(Date.now() / 1e3);
						n({
							periodFinish: l,
							rewardRate: p,
							rewardsDuration: u,
							lastUpdateTime: m,
							rewardPerToken: x,
							getRewardForDuration: y,
							lockDuration: f,
							earlyUnstakeFee: h,
							totSupply: b,
							timer: g
						})
					}(0, s.useEffect)(() => {
						p()
					}, [r, c])
				}({
					stakeAddress: t,
					setPoolInfo: g
				}), (0, s.useEffect)(() => {
					(() => {
						let e = b.getRewardForDuration,
							t = e / b.totSupply;
						y(t)
					})()
				}, [b]), (0, a.jsx)(a.Fragment, {
					children: (0, a.jsx)(r.p, {
						as: "div",
						ref: l,
						children: e => {
							let {
								open: i
							} = e;
							return (0, a.jsxs)(a.Fragment, {
								children: [(0, a.jsxs)(r.p.Button, {
									className: "md:grid-cols-2 md:grid-rows-1 bg-basebg grid w-full grid-rows-2 px-4 py-2 text-lg",
									children: [(0, a.jsxs)("div", {
										className: "flex items-center justify-center gap-2",
										children: [(0, a.jsx)("img", {
											src: p.Xs,
											className: "h-5 md:h-16 w-auto"
										}), (0, a.jsx)("h4", {
											className: "font-semibold whitespace-nowrap",
											children: n
										}), (0, a.jsx)("div", {
											className: "rounded-xl p-1 px-2",
											children: function(e) {
												let [t, n] = (0, s.useState)(0), [r, i] = (0, s.useState)("00:00:00:00");
												return (0, s.useEffect)(() => {
													0 === t && n(e), t > 0 && setTimeout(() => n(t - 1), 1e3)
												}, [t, e]), (0, s.useEffect)(() => {
													! function() {
														if (t < 0) return i("00:00:00:00");
														let e = "".concat(Math.floor(t / 86400), ":").concat(Math.floor(t % 86400 / 3600), ":").concat(Math.floor(t % 86400 % 3600 / 60), ":").concat(Math.floor(t % 86400 % 3600 % 60));
														i(e)
													}()
												}, [t]), (0, a.jsx)(a.Fragment, {
													children: r
												})
											}(b.timer)
										})]
									}), (0, a.jsxs)("div", {
										className: "grid grid-cols-3",
										children: [(0, a.jsxs)("div", {
											className: "flex flex-col",
											children: [(0, a.jsx)("p", {
												className: "text-sm ",
												children: "Earned"
											}), (0, a.jsx)("p", {
												className: "font-bold",
												children: Intl.NumberFormat("en-US", {
													notation: "compact"
												}).format(f.earned / 10 ** p.tS)
											})]
										}), (0, a.jsxs)("div", {
											className: "flex flex-col",
											children: [(0, a.jsx)("p", {
												children: "APY"
											}), (0, a.jsx)("p", {
												className: "font-bold",
												children: "NaN%" === Intl.NumberFormat("en-US", {
													style: "percent"
												}).format(x) ? "0%" : (0, a.jsx)(a.Fragment, {
													children: Intl.NumberFormat("en-US", {
														style: "percent"
													}).format(x)
												})
											})]
										}), (0, a.jsxs)("div", {
											className: "flex w-fit items-center justify-center",
											children: [(0, a.jsx)("p", {
												children: "Details"
											}), (0, a.jsx)(m, {
												className: i ? "h-5 -rotate-90 transform" : "h-5 rotate-90 transform"
											})]
										})]
									})]
								}), (0, a.jsx)(r.p.Panel, {
									className: "grid w-full bg-sub grid-cols-1",
									children: (0, a.jsx)(A, {
										userStakeInfo: f,
										poolInfo: b,
										stakeAddress: t
									})
								})]
							})
						}
					})
				})
			}
			let R = ["0xc40C90b1a0509b9448dC16934960cE71A0F1DCce"],
				D = ["Active"];

			function W() {
				var e;
				return (0, a.jsx)("div", {
					children: (0, a.jsx)("div", {
						className: "flex h-fit flex-col items-center justify-center p-2",
						children: (0, a.jsx)("div", {
							className: "m-1 grid w-full grid-cols-1 rounded-2xl overflow-clip divide-y divide-contrast/20 border border-contrast/20 shadow-sm shadow-black",
							children: R.map((t, n) => (0, a.jsx)(L, {
								stakeAddress: t,
								poolName: null !== (e = D[n]) && void 0 !== e ? e : "Stake"
							}, n))
						})
					})
				})
			}
		}
	}
]);